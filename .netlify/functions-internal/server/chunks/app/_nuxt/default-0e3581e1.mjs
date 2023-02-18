import { useSSRContext, createVNode, toRef, ref, computed, mergeProps, defineComponent, resolveComponent, unref, withCtx, renderSlot, toDisplayString, inject, provide, reactive, createTextVNode, readonly, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { u as useHead } from './composables-d76bb54f.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-a9f6c894.mjs';
import { u as useResizeObserver, _ as __nuxt_component_0 } from './Button-ed506ebd.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as propsFactory, g as genericComponent, m as makeThemeProps, a as provideTheme, b as provideDefaults, c as convertToUnit, i as useProxiedModel, t as useRtl, f as useRoute, u as useI18n, h as getUid, v as getCurrentInstance, x as findChildrenWithProvide, o as pick, d as useDisplay, _ as _export_sfc } from '../server.mjs';
import { S as STATICS_CDN, I as INSTAGRAM_URL } from './urls-0c5c04f3.mjs';
import { b as VExpandTransition } from './index-332a78af.mjs';
import { c as makeTagProps, a as makeRoundedProps, j as useBackgroundColor, d as useRounded, l as useTextColor, k as VIcon } from './loader-3f4a27a1.mjs';
import { u as useRender } from './transition-ee3007a2.mjs';
import { a as makeBorderProps, b as makeElevationProps, e as useBorder, f as useElevation, V as VDefaultsProvider } from './router-388aa9c8.mjs';
import { V as VImg } from './VImg-f91c08dc.mjs';
import { _ as __nuxt_component_5 } from './client-only-451d8689.mjs';
import { useGtm } from '@gtm-support/vue-gtm';
import { useSeoMeta } from '@unhead/vue';
import 'ufo';
import './dimensions-a198d0cf.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import '@intlify/shared';
import '@intlify/core-base';
import 'defu';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'destr';
import 'scule';
import 'unenv/runtime/fetch/index';
import 'ohash';
import 'unstorage';

const VuetifyLayoutKey = Symbol.for("vuetify:layout");
const VuetifyLayoutItemKey = Symbol.for("vuetify:layout-item");
const ROOT_ZINDEX = 1e3;
const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout");
const makeLayoutItemProps = propsFactory({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function useLayout() {
  const layout = inject(VuetifyLayoutKey);
  if (!layout)
    throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: layout.getLayoutItem,
    mainRect: layout.mainRect,
    mainStyles: layout.mainStyles
  };
}
function useLayoutItem(options) {
  var _a;
  const layout = inject(VuetifyLayoutKey);
  if (!layout)
    throw new Error("[Vuetify] Could not find injected layout");
  const id = (_a = options.id) != null ? _a : `layout-item-${getUid()}`;
  const vm = getCurrentInstance("useLayoutItem");
  provide(VuetifyLayoutItemKey, {
    id
  });
  const isKeptAlive = ref(false);
  const {
    layoutItemStyles,
    layoutItemScrimStyles
  } = layout.register(vm, {
    ...options,
    active: computed(() => isKeptAlive.value ? false : options.active.value),
    id
  });
  return {
    layoutItemStyles,
    layoutRect: layout.layoutRect,
    layoutItemScrimStyles
  };
}
const generateLayers = (layout, positions, layoutSizes, activeItems) => {
  let previousLayer = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const layers = [{
    id: "",
    layer: {
      ...previousLayer
    }
  }];
  for (const id of layout) {
    const position = positions.get(id);
    const amount = layoutSizes.get(id);
    const active = activeItems.get(id);
    if (!position || !amount || !active)
      continue;
    const layer = {
      ...previousLayer,
      [position.value]: parseInt(previousLayer[position.value], 10) + (active.value ? parseInt(amount.value, 10) : 0)
    };
    layers.push({
      id,
      layer
    });
    previousLayer = layer;
  }
  return layers;
};
function createLayout(props) {
  const parentLayout = inject(VuetifyLayoutKey, null);
  const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX);
  const registered = ref([]);
  const positions = reactive(/* @__PURE__ */ new Map());
  const layoutSizes = reactive(/* @__PURE__ */ new Map());
  const priorities = reactive(/* @__PURE__ */ new Map());
  const activeItems = reactive(/* @__PURE__ */ new Map());
  const disabledTransitions = reactive(/* @__PURE__ */ new Map());
  const {
    resizeRef,
    contentRect: layoutRect
  } = useResizeObserver();
  const computedOverlaps = computed(() => {
    var _a;
    const map = /* @__PURE__ */ new Map();
    const overlaps = (_a = props.overlaps) != null ? _a : [];
    for (const overlap of overlaps.filter((item) => item.includes(":"))) {
      const [top, bottom] = overlap.split(":");
      if (!registered.value.includes(top) || !registered.value.includes(bottom))
        continue;
      const topPosition = positions.get(top);
      const bottomPosition = positions.get(bottom);
      const topAmount = layoutSizes.get(top);
      const bottomAmount = layoutSizes.get(bottom);
      if (!topPosition || !bottomPosition || !topAmount || !bottomAmount)
        continue;
      map.set(bottom, {
        position: topPosition.value,
        amount: parseInt(topAmount.value, 10)
      });
      map.set(top, {
        position: bottomPosition.value,
        amount: -parseInt(bottomAmount.value, 10)
      });
    }
    return map;
  });
  const layers = computed(() => {
    const uniquePriorities = [...new Set([...priorities.values()].map((p) => p.value))].sort((a, b) => a - b);
    const layout = [];
    for (const p of uniquePriorities) {
      const items2 = registered.value.filter((id) => {
        var _a;
        return ((_a = priorities.get(id)) == null ? void 0 : _a.value) === p;
      });
      layout.push(...items2);
    }
    return generateLayers(layout, positions, layoutSizes, activeItems);
  });
  const transitionsEnabled = computed(() => {
    return !Array.from(disabledTransitions.values()).some((ref2) => ref2.value);
  });
  const mainRect = computed(() => {
    return layers.value[layers.value.length - 1].layer;
  });
  const mainStyles = computed(() => {
    return {
      "--v-layout-left": convertToUnit(mainRect.value.left),
      "--v-layout-right": convertToUnit(mainRect.value.right),
      "--v-layout-top": convertToUnit(mainRect.value.top),
      "--v-layout-bottom": convertToUnit(mainRect.value.bottom),
      ...transitionsEnabled.value ? void 0 : {
        transition: "none"
      }
    };
  });
  const items = computed(() => {
    return layers.value.slice(1).map((_ref, index) => {
      let {
        id
      } = _ref;
      const {
        layer
      } = layers.value[index];
      const size = layoutSizes.get(id);
      const position = positions.get(id);
      return {
        id,
        ...layer,
        size: Number(size.value),
        position: position.value
      };
    });
  });
  const getLayoutItem = (id) => {
    return items.value.find((item) => item.id === id);
  };
  const rootVm = getCurrentInstance("createLayout");
  const isMounted = ref(false);
  provide(VuetifyLayoutKey, {
    register: (vm, _ref2) => {
      let {
        id,
        order,
        position,
        layoutSize,
        elementSize,
        active,
        disableTransitions,
        absolute
      } = _ref2;
      priorities.set(id, order);
      positions.set(id, position);
      layoutSizes.set(id, layoutSize);
      activeItems.set(id, active);
      disableTransitions && disabledTransitions.set(id, disableTransitions);
      const instances = findChildrenWithProvide(VuetifyLayoutItemKey, rootVm == null ? void 0 : rootVm.vnode);
      const instanceIndex = instances.indexOf(vm);
      if (instanceIndex > -1)
        registered.value.splice(instanceIndex, 0, id);
      else
        registered.value.push(id);
      const index = computed(() => items.value.findIndex((i) => i.id === id));
      const zIndex = computed(() => rootZIndex.value + layers.value.length * 2 - index.value * 2);
      const layoutItemStyles = computed(() => {
        const isHorizontal = position.value === "left" || position.value === "right";
        const isOppositeHorizontal = position.value === "right";
        const isOppositeVertical = position.value === "bottom";
        const styles = {
          [position.value]: 0,
          zIndex: zIndex.value,
          transform: `translate${isHorizontal ? "X" : "Y"}(${(active.value ? 0 : -110) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1)}%)`,
          position: absolute.value || rootZIndex.value !== ROOT_ZINDEX ? "absolute" : "fixed",
          ...transitionsEnabled.value ? void 0 : {
            transition: "none"
          }
        };
        if (!isMounted.value)
          return styles;
        const item = items.value[index.value];
        if (!item)
          throw new Error(`[Vuetify] Could not find layout item "${id}"`);
        const overlap = computedOverlaps.value.get(id);
        if (overlap) {
          item[overlap.position] += overlap.amount;
        }
        return {
          ...styles,
          height: isHorizontal ? `calc(100% - ${item.top}px - ${item.bottom}px)` : elementSize.value ? `${elementSize.value}px` : void 0,
          left: isOppositeHorizontal ? void 0 : `${item.left}px`,
          right: isOppositeHorizontal ? `${item.right}px` : void 0,
          top: position.value !== "bottom" ? `${item.top}px` : void 0,
          bottom: position.value !== "top" ? `${item.bottom}px` : void 0,
          width: !isHorizontal ? `calc(100% - ${item.left}px - ${item.right}px)` : elementSize.value ? `${elementSize.value}px` : void 0
        };
      });
      const layoutItemScrimStyles = computed(() => ({
        zIndex: zIndex.value - 1
      }));
      return {
        layoutItemStyles,
        layoutItemScrimStyles,
        zIndex
      };
    },
    unregister: (id) => {
      priorities.delete(id);
      positions.delete(id);
      layoutSizes.delete(id);
      activeItems.delete(id);
      disabledTransitions.delete(id);
      registered.value = registered.value.filter((v) => v !== id);
    },
    mainRect,
    mainStyles,
    getLayoutItem,
    items,
    layoutRect,
    rootZIndex
  });
  const layoutClasses = computed(() => ["v-layout", {
    "v-layout--full-height": props.fullHeight
  }]);
  const layoutStyles = computed(() => ({
    zIndex: rootZIndex.value,
    position: parentLayout ? "relative" : void 0,
    overflow: parentLayout ? "hidden" : void 0
  }));
  return {
    layoutClasses,
    layoutStyles,
    getLayoutItem,
    items,
    layoutRect,
    layoutRef: resizeRef
  };
}
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Link = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SubMenuItem",
  __ssrInlineRender: true,
  props: {
    text: null,
    to: null,
    subMenu: { default: void 0 }
  },
  setup(__props) {
    const { rt } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_components_button = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sub-menu-item relative" }, _attrs))} data-v-28f2b613>`);
      _push(ssrRenderComponent(_component_cq_components_button, {
        to: __props.to,
        variant: "text",
        color: "blackBranded",
        block: "",
        class: "sub-menu-item_:button mr-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.subMenu) {
        _push(`<div class="sub-menu-item__container bg-white rounded md:shadow w-auto px-3" data-v-28f2b613><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton" data-v-28f2b613><!--[-->`);
        ssrRenderList(__props.subMenu, (subItem) => {
          _push(`<li class="ml-0" data-v-28f2b613>`);
          _push(ssrRenderComponent(_component_cq_components_button, {
            to: unref(rt)(subItem.to),
            color: "blackBranded",
            block: "",
            variant: "text"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(rt)(subItem.text))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(rt)(subItem.text)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/components/SubMenuItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-28f2b613"]]);
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeTagProps()
}, "v-toolbar-title");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": "v-toolbar-title"
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "v-toolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isExtended = ref(!!(props.extended || ((_a = slots.extension) == null ? void 0 : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value],
        "style": [backgroundColorStyles.value]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [createVNode(VDefaultsProvider, {
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, {
          default: () => {
            var _a3;
            return [slots.image ? (_a3 = slots.image) == null ? void 0 : _a3.call(slots) : createVNode(VImg, null, null)];
          }
        })]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
function filterToolbarProps(props) {
  var _a;
  return pick(props, Object.keys((_a = VToolbar == null ? void 0 : VToolbar.props) != null ? _a : {}));
}
function useSsrBoot() {
  const isBooted = ref(false);
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : void 0);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: {
    // TODO: Implement scrolling techniques
    // hideOnScroll: Boolean
    // invertedScroll: Boolean
    // collapseOnScroll: Boolean
    // elevateOnScroll: Boolean
    // shrinkOnScroll: Boolean
    // fadeImageOnScroll: Boolean
    modelValue: {
      type: Boolean,
      default: true
    },
    location: {
      type: String,
      default: "top",
      validator: (value) => ["top", "bottom"].includes(value)
    },
    ...makeVToolbarProps(),
    ...makeLayoutItemProps(),
    height: {
      type: [Number, String],
      default: 64
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const height = computed(() => {
      var _a2, _b2;
      var _a, _b;
      const height2 = (_a2 = (_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) != null ? _a2 : 0;
      const extensionHeight = (_b2 = (_b = vToolbarRef.value) == null ? void 0 : _b.extensionHeight) != null ? _b2 : 0;
      return height2 + extensionHeight;
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(props, "location"),
      layoutSize: height,
      elementSize: height,
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useRender(() => {
      const [toolbarProps] = filterToolbarProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }],
        "style": {
          ...layoutItemStyles.value,
          height: void 0,
          ...ssrBootStyles.value
        }
      }, toolbarProps), slots);
    });
    return {};
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavigationBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { mdAndUp } = useDisplay();
    const { t, rt, tm } = useI18n({ useScope: "local", inheritLocale: true });
    const links = tm("links");
    const showBurgerMenu = ref(false);
    const toggleBurgerMenu = () => {
      showBurgerMenu.value = !showBurgerMenu.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_cq_components_sub_menu_item = __nuxt_component_1;
      const _component_cq_components_button = __nuxt_component_0;
      _push(ssrRenderComponent(VAppBar, mergeProps({
        class: "navigation-bar !overflow-visible",
        height: unref(mdAndUp) ? 64 : "auto",
        flat: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}><div class="container flex flex-wrap items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    src: `${unref(STATICS_CDN)}logo/logo-color.webp`,
                    width: 100,
                    alt: "ColumnaQuiro"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      src: `${unref(STATICS_CDN)}logo/logo-color.webp`,
                      width: 100,
                      alt: "ColumnaQuiro"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex-grow"${_scopeId}></div><nav class="hidden md:flex h-fit"${_scopeId}><!--[-->`);
            ssrRenderList(unref(links), (link) => {
              _push2(ssrRenderComponent(_component_cq_components_sub_menu_item, {
                key: unref(rt)(link.text),
                text: unref(rt)(link.text),
                to: link.to ? unref(rt)(link.to) : void 0,
                "sub-menu": link.subMenu
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_cq_components_button, {
              to: unref(t)("appointmentButton.to"),
              variant: "elevated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("appointmentButton.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("appointmentButton.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</nav><div class="md:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_cq_components_button, {
              icon: "",
              variant: "plain",
              color: "#000000",
              class: "md:hidden",
              onClick: toggleBurgerMenu
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-menu`);
                      } else {
                        return [
                          createTextVNode("mdi-menu")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-menu")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(VExpandTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(showBurgerMenu)) {
                    _push3(`<nav class="md:hidden flex flex-col"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(links), (link) => {
                      _push3(ssrRenderComponent(_component_cq_components_sub_menu_item, {
                        key: unref(rt)(link.text),
                        text: unref(rt)(link.text),
                        to: link.to ? unref(rt)(link.to) : void 0,
                        "sub-menu": link.subMenu
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(_component_cq_components_button, {
                      to: unref(t)("appointmentButton.to"),
                      block: "",
                      variant: "elevated"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(t)("appointmentButton.text"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(t)("appointmentButton.text")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</nav>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(showBurgerMenu) ? (openBlock(), createBlock("nav", {
                      key: 0,
                      class: "md:hidden flex flex-col"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(links), (link) => {
                        return openBlock(), createBlock(_component_cq_components_sub_menu_item, {
                          key: unref(rt)(link.text),
                          text: unref(rt)(link.text),
                          to: link.to ? unref(rt)(link.to) : void 0,
                          "sub-menu": link.subMenu
                        }, null, 8, ["text", "to", "sub-menu"]);
                      }), 128)),
                      createVNode(_component_cq_components_button, {
                        to: unref(t)("appointmentButton.to"),
                        block: "",
                        variant: "elevated"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("appointmentButton.text")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full" }, [
                createVNode("div", { class: "container flex flex-wrap items-center" }, [
                  createVNode(_component_nuxt_link, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: `${unref(STATICS_CDN)}logo/logo-color.webp`,
                        width: 100,
                        alt: "ColumnaQuiro"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex-grow" }),
                  createVNode("nav", { class: "hidden md:flex h-fit" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(links), (link) => {
                      return openBlock(), createBlock(_component_cq_components_sub_menu_item, {
                        key: unref(rt)(link.text),
                        text: unref(rt)(link.text),
                        to: link.to ? unref(rt)(link.to) : void 0,
                        "sub-menu": link.subMenu
                      }, null, 8, ["text", "to", "sub-menu"]);
                    }), 128)),
                    createVNode(_component_cq_components_button, {
                      to: unref(t)("appointmentButton.to"),
                      variant: "elevated"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("appointmentButton.text")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "md:hidden" }, [
                    createVNode(_component_cq_components_button, {
                      icon: "",
                      variant: "plain",
                      color: "#000000",
                      class: "md:hidden",
                      onClick: toggleBurgerMenu
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-menu")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(VExpandTransition, null, {
                  default: withCtx(() => [
                    unref(showBurgerMenu) ? (openBlock(), createBlock("nav", {
                      key: 0,
                      class: "md:hidden flex flex-col"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(links), (link) => {
                        return openBlock(), createBlock(_component_cq_components_sub_menu_item, {
                          key: unref(rt)(link.text),
                          text: unref(rt)(link.text),
                          to: link.to ? unref(rt)(link.to) : void 0,
                          "sub-menu": link.subMenu
                        }, null, 8, ["text", "to", "sub-menu"]);
                      }), 128)),
                      createVNode(_component_cq_components_button, {
                        to: unref(t)("appointmentButton.to"),
                        block: "",
                        variant: "elevated"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("appointmentButton.text")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
function block0$3(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "links": [
          {
            "text": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Quiropr\xE1ctica"]);
            },
            "subMenu": [
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["\xBFQu\xE9 es?"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/que-es-la-quiropractica"]);
                }
              },
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["\xBFEs para m\xED?"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/para-quien-sirve-la-quiropractica"]);
                }
              },
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["Preguntas Frecuentes"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/que-es-la-quiropractica/preguntas-frecuentes"]);
                }
              }
            ]
          },
          {
            "text": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Servicios"]);
            },
            "subMenu": [
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["\xBFC\xF3mo funciona?"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/servicios-quiropractica"]);
                }
              },
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["Primera visita"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/servicios-quiropractica/primera-visita"]);
                }
              }
            ]
          },
          {
            "text": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sobre nosotros"]);
            },
            "subMenu": [
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["Nuestro equipo"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/sobre-nosotros/equipo"]);
                }
              },
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["Nuestro centro"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/sobre-nosotros/centro-quiropractico-valencia"]);
                }
              },
              {
                "text": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["Contacto"]);
                },
                "to": (ctx) => {
                  const { normalize: _normalize } = ctx;
                  return _normalize(["/sobre-nosotros/contacto"]);
                }
              }
            ]
          }
        ],
        "appointmentButton": {
          "text": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Pide Tu Cita"]);
          },
          "to": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["/reserva-cita-centro-quiropractico-valencia"]);
          }
        }
      }
    }
  });
}
if (typeof block0$3 === "function")
  block0$3(_sfc_main$4);
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/layout/NavigationBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CompanyDetails",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({ useScope: "local", inheritLocale: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_cq_components_button = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center md:text-start" }, _attrs))}>`);
      _push(ssrRenderComponent(VImg, {
        src: `${unref(STATICS_CDN)}logo/logo-color.webp`,
        width: 100,
        alt: "ColumnaQuiro",
        class: "md:mx-0 mx-auto"
      }, null, _parent));
      _push(`<div class="text-lg pt-4">${ssrInterpolate(unref(t)("details.title"))}</div><div class="text-base pb-2">${ssrInterpolate(unref(t)("details.street"))}</div><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: `mailto:${unref(t)("details.email")}`,
        class: "text-base pb-2 text-brand-black no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("details.email"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("details.email")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: `tel:${unref(t)("details.phone")}`,
        class: "text-base pb-2 text-brand-black no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("details.phone"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("details.phone")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex pt-4">`);
      _push(ssrRenderComponent(_component_cq_components_button, {
        icon: "",
        href: unref(INSTAGRAM_URL),
        size: "x-small",
        variant: "tonal",
        "aria-label": "Instagram"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-instagram`);
                } else {
                  return [
                    createTextVNode("mdi-instagram")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-instagram")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
function block0$2(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "details": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Centro Quiropr\xE1ctico"]);
          },
          "street": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ronda Sant Pere 40, Principal 1\xAA, 08010 Barcelona"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["hola", "@", "columnaquiro.com"]);
          },
          "phone": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["+34 645967420"]);
          }
        }
      }
    }
  });
}
if (typeof block0$2 === "function")
  block0$2(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/layout/footer/CompanyDetails.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Copyright",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm, rt, t } = useI18n({ useScope: "local", inheritLocale: true });
    const links = tm("links");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_components_button = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row justify-between" }, _attrs))}><div class="text-xs md:text-start text-center md:pb-0 pb-1">${ssrInterpolate(unref(t)("copyright"))}</div><div class="flex md:pb-0 pb-2 justify-center"><!--[-->`);
      ssrRenderList(unref(links), (link) => {
        _push(ssrRenderComponent(_component_cq_components_button, {
          key: unref(rt)(link.text),
          size: "x-small",
          variant: "text",
          to: unref(rt)(link.to),
          color: "blackBranded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(rt)(link.text))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(rt)(link.text)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
function block0$1(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "copyright": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xA9 2023 ColumnaQuiro"]);
        },
        "links": [
          {
            "text": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pol\xEDtica de Privacidad"]);
            },
            "to": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["/politica-de-privacidad"]);
            }
          },
          {
            "text": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aviso Legal"]);
            },
            "to": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["/aviso-legal"]);
            }
          },
          {
            "text": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pol\xEDtica de Cookies"]);
            },
            "to": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["/politica-de-cookies"]);
            }
          }
        ]
      }
    }
  });
}
if (typeof block0$1 === "function")
  block0$1(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/layout/footer/Copyright.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VDivider = genericComponent()({
  name: "VDivider",
  props: {
    color: String,
    inset: Boolean,
    length: [Number, String],
    thickness: [Number, String],
    vertical: Boolean,
    ...makeThemeProps()
  },
  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const dividerStyles = computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? "maxHeight" : "maxWidth"] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
      }
      return styles;
    });
    useRender(() => createVNode("hr", {
      "class": [{
        "v-divider": true,
        "v-divider--inset": props.inset,
        "v-divider--vertical": props.vertical
      }, themeClasses.value, textColorClasses.value],
      "style": [dividerStyles.value, textColorStyles.value],
      "aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
      "role": `${attrs.role || "separator"}`
    }, null));
    return {};
  }
});
const VFooter = genericComponent()({
  name: "VFooter",
  props: {
    app: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: "auto"
    },
    ...makeBorderProps(),
    ...makeElevationProps(),
    ...makeLayoutItemProps(),
    ...makeRoundedProps(),
    ...makeTagProps({
      tag: "footer"
    }),
    ...makeThemeProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = ref(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: computed(() => "bottom"),
      layoutSize: height,
      elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
      active: computed(() => props.app),
      absolute: toRef(props, "absolute")
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": ["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value],
      "style": [backgroundColorStyles.value, props.app ? layoutItemStyles.value : void 0]
    }, slots));
    return {};
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_cq_layout_footer_company_details = _sfc_main$3;
  const _component_cq_layout_footer_copyright = _sfc_main$2;
  _push(ssrRenderComponent(VFooter, mergeProps({ class: "footer !bg-brand-white" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="!container p-0 md:pb-4 md:pt-10"${_scopeId}><div class="flex flex-col md:flex-row justify-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_cq_layout_footer_company_details, { class: "md:pb-0 pb-4" }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(VDivider, {
          color: "#ffffff",
          class: "my-4"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_cq_layout_footer_copyright, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "!container p-0 md:pb-4 md:pt-10" }, [
            createVNode("div", { class: "flex flex-col md:flex-row justify-between" }, [
              createVNode(_component_cq_layout_footer_company_details, { class: "md:pb-0 pb-4" })
            ]),
            createVNode(VDivider, {
              color: "#ffffff",
              class: "my-4"
            }),
            createVNode(_component_cq_layout_footer_copyright)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/layout/footer/Container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const VApp = genericComponent()({
  name: "VApp",
  props: {
    ...makeLayoutProps({
      fullHeight: true
    }),
    ...makeThemeProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _a;
      return createVNode("div", {
        "ref": layoutRef,
        "class": ["v-application", theme.themeClasses.value, layoutClasses.value, rtlClasses.value],
        "style": layoutStyles.value
      }, [createVNode("div", {
        "class": "v-application__wrap"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
const VMain = genericComponent()({
  name: "VMain",
  props: {
    scrollable: Boolean,
    ...makeTagProps({
      tag: "main"
    })
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }],
      "style": [mainStyles.value, ssrBootStyles.value]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { fullPath } = useRoute();
    const gtm = useGtm();
    const { t, locale } = useI18n({ useScope: "local", inheritLocale: true });
    const canonical = `https://columnaquiro.com${fullPath}`;
    const preferences = [
      {
        description: t("cookiesConsent.preferences.description")
      },
      {
        title: t("cookiesConsent.preferences.default.title"),
        description: t("cookiesConsent.preferences.default.description"),
        items: [
          { label: "Activar", value: "default", isEnable: true, isRequired: true }
        ]
      },
      {
        title: t("cookiesConsent.preferences.googleAnalytics.title"),
        description: t("cookiesConsent.preferences.googleAnalytics.description"),
        items: [
          { label: "Activar", value: "ga", isEnable: true, isRequired: false }
        ]
      }
    ];
    const onAccept = () => {
      gtm == null ? void 0 : gtm.enable(true);
    };
    const onSavePreferences = (preferences2) => {
      if (preferences2.includes("ga")) {
        gtm == null ? void 0 : gtm.enable(true);
      }
    };
    useSeoMeta({
      ogUrl: canonical,
      ogType: "website",
      ogSiteName: "",
      ogImage: `${STATICS_CDN}website/seo/og-image.png`,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Html = Html;
      const _component_Head = Head;
      const _component_Link = Link;
      const _component_cq_layout_navigation_bar = _sfc_main$4;
      const _component_cq_layout_footer_container = __nuxt_component_4;
      const _component_client_only = __nuxt_component_5;
      const _component_vue_cookie_comply = resolveComponent("vue-cookie-comply");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Html, { lang: unref(locale) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Link, {
                    rel: "canonical",
                    href: canonical
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Link, {
                      rel: "canonical",
                      href: canonical
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VApp, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_cq_layout_navigation_bar, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMain, { class: "mt-18 mt-lg-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_cq_layout_footer_container, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_client_only, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_cq_layout_navigation_bar),
                    createVNode(VMain, { class: "mt-18 mt-lg-0" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }),
                    createVNode(_component_cq_layout_footer_container),
                    createVNode(_component_client_only, null, {
                      default: withCtx(() => [
                        createVNode(_component_vue_cookie_comply, {
                          preferences,
                          "preferences-label": unref(t)("cookiesConsent.actions.configure"),
                          "accept-all-label": unref(t)("cookiesConsent.actions.accept"),
                          onOnAcceptAllCookies: onAccept,
                          onOnSaveCookiePreferences: onSavePreferences
                        }, {
                          header: withCtx(() => [
                            createVNode("div", {
                              class: "text-base",
                              innerHTML: unref(t)("cookiesConsent.description")
                            }, null, 8, ["innerHTML"])
                          ]),
                          "modal-header": withCtx(() => [
                            createVNode("h3", null, toDisplayString(unref(t)("cookiesConsent.preferences.title")), 1)
                          ]),
                          _: 1
                        }, 8, ["preferences-label", "accept-all-label"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Head, null, {
                default: withCtx(() => [
                  createVNode(_component_Link, {
                    rel: "canonical",
                    href: canonical
                  })
                ]),
                _: 1
              }),
              createVNode(VApp, null, {
                default: withCtx(() => [
                  createVNode(_component_cq_layout_navigation_bar),
                  createVNode(VMain, { class: "mt-18 mt-lg-0" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }),
                  createVNode(_component_cq_layout_footer_container),
                  createVNode(_component_client_only, null, {
                    default: withCtx(() => [
                      createVNode(_component_vue_cookie_comply, {
                        preferences,
                        "preferences-label": unref(t)("cookiesConsent.actions.configure"),
                        "accept-all-label": unref(t)("cookiesConsent.actions.accept"),
                        onOnAcceptAllCookies: onAccept,
                        onOnSaveCookiePreferences: onSavePreferences
                      }, {
                        header: withCtx(() => [
                          createVNode("div", {
                            class: "text-base",
                            innerHTML: unref(t)("cookiesConsent.description")
                          }, null, 8, ["innerHTML"])
                        ]),
                        "modal-header": withCtx(() => [
                          createVNode("h3", null, toDisplayString(unref(t)("cookiesConsent.preferences.title")), 1)
                        ]),
                        _: 1
                      }, 8, ["preferences-label", "accept-all-label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "cookiesConsent": {
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Este sitio web utiliza cookies propias y de terceros para mantener la sesi\xF3n, ofrecerle una mejor experiencia de usuario y obtener datos estad\xEDsticos de navegaci\xF3n de los usuarios. Para m\xE1s informaci\xF3n vea la <a class='text-black' href='/politica-de-cookies'>Pol\xEDtica de cookies.</a>"]);
          },
          "actions": {
            "accept": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aceptar las cookies"]);
            },
            "configure": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Personalizar las cookies"]);
            }
          },
          "preferences": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Gesti\xF3n de cookies"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Este sitio web utiliza cookies propias y de terceros para mantener la sesi\xF3n, ofrecerle una mejor experiencia de usuario y obtener datos estad\xEDsticos de navegaci\xF3n de los usuarios. Para m\xE1s informaci\xF3n vea la Pol\xEDtica de cookies."]);
            },
            "save": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aceptar selecci\xF3n"]);
            },
            "default": {
              "title": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Cookies para el funcionamiento de la web"]);
              },
              "description": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Estas cookies son esenciales para el correcto funcionamiento del sitio web, sin estas cookies el sitio web puede no funcionar correctamente"]);
              }
            },
            "googleAnalytics": {
              "title": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Cookies de Google Analytics"]);
              },
              "description": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Se utilizan para generar un identificador de usuario \xFAnico, utilizado para hacer recuento de cu\xE1ntas veces visita el sitio un usuario, as\xED como la fecha de la primera y la \xFAltima vez que visit\xF3 la web. Registran la fecha y hora de acceso a cualquiera de las p\xE1ginas del portal. Comprueban la necesidad de mantener la sesi\xF3n de un usuario abierta o crear una nueva. Identifican la sesi\xF3n del usuario, para recoger la ubicaci\xF3n geogr\xE1fica aproximada del ordenador que accede al portal."]);
              }
            }
          }
        }
      }
    }
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-0e3581e1.mjs.map
