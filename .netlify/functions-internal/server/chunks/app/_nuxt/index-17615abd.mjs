import { _ as _sfc_main$6 } from './QuiroIntro-011a6700.mjs';
import { _ as __nuxt_component_0 } from './Section-601fe0b0.mjs';
import { useSSRContext, computed, capitalize, h, toRef, ref, watch, defineComponent, camelize, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, resolveDirective, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as propsFactory, I as IconValue, m as makeThemeProps, g as genericComponent, a as provideTheme, b as provideDefaults, u as useI18n, c as convertToUnit, d as useDisplay, e as defineComponent$1, _ as _export_sfc } from '../server.mjs';
import { m as makeDensityProps, a as makeRoundedProps, b as makeSizeProps, c as makeTagProps, u as useDensity, d as useRounded, e as useSize, f as makeLoaderProps, g as makeLocationProps, h as useLoader, i as useLocation, j as useBackgroundColor, V as VProgressLinear, k as VIcon, L as LoaderSlot } from './loader-3f4a27a1.mjs';
import { k as keyToTypeOfPerson } from './typeOfPersonMapping-721643ad.mjs';
import { S as STATICS_CDN } from './urls-0c5c04f3.mjs';
import { u as useRender } from './transition-ee3007a2.mjs';
import { m as makeVariantProps, u as useVariant, R as Ripple, a as makeBorderProps, b as makeElevationProps, c as makePositionProps, d as makeRouterProps, e as useBorder, f as useElevation, g as usePosition, h as useLink, i as genOverlays, V as VDefaultsProvider } from './router-388aa9c8.mjs';
import { V as VImg } from './VImg-f91c08dc.mjs';
import { m as makeDimensionProps, u as useDimension } from './dimensions-a198d0cf.mjs';
import { _ as __nuxt_component_5$1 } from './client-only-451d8689.mjs';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { useTagTitle, useSeoMeta } from '@unhead/vue';
import './ParagraphWithImage-c8eb874f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
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

function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name != null ? name : capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      }
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: klass
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Science",
  __ssrInlineRender: true,
  setup(__props) {
    ref(40);
    const { t, tm, rt } = useI18n({ inheritLocale: true, useScope: "local" });
    const bars = tm("graph.bars");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-brand-tertiary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_cq_layout_section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="section-title"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</h2><div class="text-base"${_scopeId}>${unref(t)("body")}</div><h3 class="text-3xl pt-8"${_scopeId}>${ssrInterpolate(unref(t)("graph.title"))}</h3><!--[-->`);
            ssrRenderList(unref(bars), (bar) => {
              _push2(`<div class="pt-4"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(VProgressLinear, {
                "model-value": unref(rt)(bar.percentage),
                height: 25,
                role: "progressbar",
                "aria-label": "progress",
                rounded: "",
                class: "!w-96"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-white"${_scopeId2}>${ssrInterpolate(unref(rt)(bar.percentage))}% </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-white" }, toDisplayString(unref(rt)(bar.percentage)) + "% ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>${ssrInterpolate(unref(rt)(bar.time))}</div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("h2", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
              createVNode("div", {
                class: "text-base",
                innerHTML: unref(t)("body")
              }, null, 8, ["innerHTML"]),
              createVNode("h3", { class: "text-3xl pt-8" }, toDisplayString(unref(t)("graph.title")), 1),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(bars), (bar) => {
                return openBlock(), createBlock("div", {
                  key: unref(rt)(bar.time),
                  class: "pt-4"
                }, [
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(VProgressLinear, {
                      "model-value": unref(rt)(bar.percentage),
                      height: 25,
                      role: "progressbar",
                      "aria-label": "progress",
                      rounded: "",
                      class: "!w-96"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-white" }, toDisplayString(unref(rt)(bar.percentage)) + "% ", 1)
                      ]),
                      _: 2
                    }, 1032, ["model-value"]),
                    createVNode("div", null, toDisplayString(unref(rt)(bar.time)), 1)
                  ])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
function block0$5(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La Quiropr\xE1ctica bajo la ciencia"]);
        },
        "body": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u201CUn estudio de 2.818 pacientes que recibieron tratamiento quiropr\xE1ctico en los Estados Unidos y en todo el mundo, demostr\xF3 que el cuidado quiropr\xE1ctico est\xE1 asociado con una mejora profunda y estad\xEDsticamente significativa en las \xE1reas del bienestar. Los pacientes informan cambios en: bienestar f\xEDsico, disminuci\xF3n del nivel de estr\xE9s percibido, disfrute de la vida, cambios en el estilo de vida, bienestar emocional, psicol\xF3gico y calidad de vida.\u201D<br><br>Blanks, RH; Boone, WR; Schmidt, S; Dobson, M; Network Care: A retrospective outcomes assessment. 1996 Dobson, M; Boone WR; Blanks, RH; Women and Alternative Health Care: A retrospective study of recipients of Network Care. 1996"]);
        },
        "graph": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Se ha demostrado que con los ajustes quiropr\xE1cticos se mejora un:"]);
          },
          "bars": [
            {
              "percentage": 65,
              "time": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["en 1-3 meses (recuperaci\xF3n)"]);
              }
            },
            {
              "percentage": 74,
              "time": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["en 3-12 meses (recuperaci\xF3n)"]);
              }
            },
            {
              "percentage": 84,
              "time": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["en 13-36 meses (mejora)"]);
              }
            },
            {
              "percentage": 95,
              "time": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["en +36 meses (optimizaci\xF3n)"]);
              }
            }
          ]
        }
      }
    }
  });
}
if (typeof block0$5 === "function")
  block0$5(_sfc_main$5);
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Science.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "v-avatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value],
      "style": [colorStyles.value, sizeStyles.value]
    }, {
      default: () => {
        var _a;
        return [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_a = slots.default) == null ? void 0 : _a.call(slots), genOverlays(false, "v-avatar")];
      }
    }));
    return {};
  }
});
const VCardActions = /* @__PURE__ */ defineComponent$1({
  name: "VCardActions",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": "v-card-actions"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const VCardTitle = createSimpleFunctional("v-card-title");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    prependAvatar: String,
    prependIcon: IconValue,
    subtitle: String,
    title: String,
    ...makeDensityProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrepend = !!(props.prependAvatar || props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendAvatar || props.appendIcon || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": "v-card-item"
      }, [hasPrepend && createVNode(VDefaultsProvider, {
        "key": "prepend",
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [createVNode("div", {
            "class": "v-card-item__prepend"
          }, [(_a3 = (_a2 = slots.prepend) == null ? void 0 : _a2.call(slots)) != null ? _a3 : createVNode(VAvatar, null, null)])];
        }
      }), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.title) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.subtitle];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode(VDefaultsProvider, {
        "key": "append",
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [createVNode("div", {
            "class": "v-card-item__append"
          }, [(_a3 = (_a2 = slots.append) == null ? void 0 : _a2.call(slots)) != null ? _a3 : createVNode(VAvatar, null, null)])];
        }
      })]);
    });
    return {};
  }
});
const VCardText = createSimpleFunctional("v-card-text");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: void 0
    },
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: {
      type: Boolean,
      default: true
    },
    subtitle: String,
    text: String,
    title: String,
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeVariantProps({
      variant: "elevated"
    })
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => {
          var _a;
          return [hasImage && createVNode(VDefaultsProvider, {
            "key": "image",
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, {
            default: () => {
              var _a3;
              var _a2;
              return [createVNode("div", {
                "class": "v-card__image"
              }, [(_a3 = (_a2 = slots.image) == null ? void 0 : _a2.call(slots)) != null ? _a3 : createVNode(VImg, null, null)])];
            }
          }), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a3;
              var _a2;
              return [(_a3 = (_a2 = slots.text) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const breakpoints$1 = ["sm", "md", "lg", "xl", "xxl"];
const breakpointProps = (() => {
  return breakpoints$1.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints$1.reduce((props, val) => {
    props["offset" + capitalize(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints$1.reduce((props, val) => {
    props["order" + capitalize(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  if (type === "col") {
    className = "v-" + className;
  }
  if (type === "col" && (val === "" || val === true)) {
    return className.toLowerCase();
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const VCol = genericComponent()({
  name: "VCol",
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: (str) => ALIGN_SELF_VALUES.includes(str)
    },
    ...makeTagProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className)
            classList.push(className);
        });
      }
      const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: classes.value
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const breakpoints = ["sm", "md", "lg", "xl", "xxl"];
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + capitalize(val)] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const VRow = genericComponent()({
  name: "VRow",
  props: {
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps,
    ...makeTagProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className)
            classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: ["v-row", classes.value]
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ToWho",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm, t, rt } = useI18n({ useScope: "local", inheritLocale: true });
    const items = tm("items");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              "no-gutters": "",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "8",
                    md: "10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="section-title"${_scopeId3}>${ssrInterpolate(unref(t)("title"))}</h2><div class="text-base text-center"${_scopeId3}>${ssrInterpolate(unref(t)("description"))}</div>`);
                      } else {
                        return [
                          createVNode("h2", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
                          createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(t)("description")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "8",
                      md: "10"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
                        createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(t)("description")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "pt-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(items), (item) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: unref(rt)(item.key),
                      cols: "12",
                      md: "6",
                      lg: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            flat: "",
                            to: `para-quien-sirve-la-quiropractica/${unref(keyToTypeOfPerson).get(unref(rt)(item.key))}`,
                            class: "pa-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, { class: "!flex justify-center bg-brand-white py-3" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, { size: "large" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VImg, {
                                              src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                              width: "100%",
                                              class: "mx-auto",
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VImg, {
                                                src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                                width: "100%",
                                                class: "mx-auto",
                                                cover: ""
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAvatar, { size: "large" }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                              width: "100%",
                                              class: "mx-auto",
                                              cover: ""
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardText, { class: "pa-4 !pt-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-lg font-medium text-center pb-4"${_scopeId5}>${ssrInterpolate(unref(rt)(item.title))}</div><div class="text-base text-center"${_scopeId5}>${ssrInterpolate(unref(rt)(item.description))}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-lg font-medium text-center pb-4" }, toDisplayString(unref(rt)(item.title)), 1),
                                        createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(rt)(item.description)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, { class: "!flex justify-center bg-brand-white py-3" }, {
                                    default: withCtx(() => [
                                      createVNode(VAvatar, { size: "large" }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                            width: "100%",
                                            class: "mx-auto",
                                            cover: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardText, { class: "pa-4 !pt-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-lg font-medium text-center pb-4" }, toDisplayString(unref(rt)(item.title)), 1),
                                      createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(rt)(item.description)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              flat: "",
                              to: `para-quien-sirve-la-quiropractica/${unref(keyToTypeOfPerson).get(unref(rt)(item.key))}`,
                              class: "pa-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "!flex justify-center bg-brand-white py-3" }, {
                                  default: withCtx(() => [
                                    createVNode(VAvatar, { size: "large" }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                          width: "100%",
                                          class: "mx-auto",
                                          cover: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, { class: "pa-4 !pt-4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-lg font-medium text-center pb-4" }, toDisplayString(unref(rt)(item.title)), 1),
                                    createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(rt)(item.description)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                      return openBlock(), createBlock(VCol, {
                        key: unref(rt)(item.key),
                        cols: "12",
                        md: "6",
                        lg: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            to: `para-quien-sirve-la-quiropractica/${unref(keyToTypeOfPerson).get(unref(rt)(item.key))}`,
                            class: "pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "!flex justify-center bg-brand-white py-3" }, {
                                default: withCtx(() => [
                                  createVNode(VAvatar, { size: "large" }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                        width: "100%",
                                        class: "mx-auto",
                                        cover: ""
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, { class: "pa-4 !pt-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-lg font-medium text-center pb-4" }, toDisplayString(unref(rt)(item.title)), 1),
                                  createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(rt)(item.description)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                "no-gutters": "",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "8",
                    md: "10"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
                      createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(t)("description")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "pt-10" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                    return openBlock(), createBlock(VCol, {
                      key: unref(rt)(item.key),
                      cols: "12",
                      md: "6",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          to: `para-quien-sirve-la-quiropractica/${unref(keyToTypeOfPerson).get(unref(rt)(item.key))}`,
                          class: "pa-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "!flex justify-center bg-brand-white py-3" }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, { size: "large" }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: `${unref(STATICS_CDN)}website/home/${unref(rt)(item.key)}.webp`,
                                      width: "100%",
                                      class: "mx-auto",
                                      cover: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, { class: "pa-4 !pt-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-lg font-medium text-center pb-4" }, toDisplayString(unref(rt)(item.title)), 1),
                                createVNode("div", { class: "text-base text-center" }, toDisplayString(unref(rt)(item.description)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
function block0$4(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La Quiropr\xE1ctica es para t\xED"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La quiropr\xE1ctica es para todas las edades, desde los ni\xF1os hasta los adultos mayores y pasando por todas las etapas de vida. Aqu\xED, nos encanta atender a todos los miembros de la familia."]);
        },
        "items": [
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["workers"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Trabajadores"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aumenta la actividad de tu corteza prefrontal y mejora tu rendimiento laboral a corto o largo plazo , reduciendo el estres y la ausencia por motivos de salud."]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["kids"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ni\xF1os"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["El desarrollo de un ni\xF1o  incluye diferentes  etapas sensoriales y motoras y un sistema nervioso saludable es vital  en su superaci\xF3n y mejora de su coordinaci\xF3n y sentidos."]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["pregnant"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Embarazadas"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prepara tu  cuerpo para los cambios del embarazo y mejorar tu  recuperaci\xF3n postparto, optimizando la funci\xF3n del sistema nervioso y la salud en esta nueva etapa de vida."]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["sport"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Deportistas"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Optimiza tu rendimiento fisico y tu recuperaci\xF3n post-entrenamiento."]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["elder"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tercera edad"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cuida tu  cuerpo para disfrutar al m\xE1ximo de la vida y mejora tu  movilidad, equilibrio y estilo de vida de manera hol\xEDstica y vitalista."]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["disabled"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Discapacidades motoras o intelectuales"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mejora la movilidad, equilibrio, sensacion corporal y tu funcionamento general para fortalecer tu desarollo y tu independencia."]);
            }
          }
        ]
      }
    }
  });
}
if (typeof block0$4 === "function")
  block0$4(_sfc_main$4);
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ToWho.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VTimeline = genericComponent()({
  name: "VTimeline",
  props: {
    align: {
      type: String,
      default: "center",
      validator: (v) => ["center", "start"].includes(v)
    },
    direction: {
      type: String,
      default: "vertical",
      validator: (v) => ["vertical", "horizontal"].includes(v)
    },
    justify: {
      type: String,
      default: "auto",
      validator: (v) => ["auto", "center"].includes(v)
    },
    side: {
      type: String,
      validator: (v) => v == null || ["start", "end"].includes(v)
    },
    lineInset: {
      type: [String, Number],
      default: 0
    },
    lineThickness: {
      type: [String, Number],
      default: 2
    },
    lineColor: String,
    truncateLine: {
      type: String,
      validator: (v) => ["start", "end", "both"].includes(v)
    },
    ...makeDensityProps(),
    ...makeTagProps(),
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
      densityClasses
    } = useDensity(props);
    provideDefaults({
      VTimelineDivider: {
        lineColor: toRef(props, "lineColor")
      },
      VTimelineItem: {
        density: toRef(props, "density"),
        lineInset: toRef(props, "lineInset")
      }
    });
    const sideClasses = computed(() => {
      const side = props.side ? props.side : props.density !== "default" ? "end" : null;
      return side && `v-timeline--side-${side}`;
    });
    const truncateClasses = computed(() => {
      const classes = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (props.truncateLine) {
        case "both":
          return classes;
        case "start":
          return classes[0];
        case "end":
          return classes[1];
        default:
          return null;
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-timeline", `v-timeline--${props.direction}`, `v-timeline--align-${props.align}`, `v-timeline--justify-${props.justify}`, truncateClasses.value, {
        "v-timeline--inset-line": !!props.lineInset
      }, themeClasses.value, densityClasses.value, sideClasses.value],
      "style": {
        "--v-timeline-line-thickness": convertToUnit(props.lineThickness)
      }
    }, slots));
    return {};
  }
});
const VTimelineDivider = genericComponent()({
  name: "VTimelineDivider",
  props: {
    dotColor: String,
    fillDot: Boolean,
    hideDot: Boolean,
    icon: IconValue,
    iconColor: String,
    lineColor: String,
    ...makeRoundedProps(),
    ...makeSizeProps(),
    ...makeElevationProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props, "v-timeline-divider__dot");
    const {
      backgroundColorStyles,
      backgroundColorClasses
    } = useBackgroundColor(toRef(props, "dotColor"));
    const {
      roundedClasses
    } = useRounded(props, "v-timeline-divider__dot");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses: lineColorClasses,
      backgroundColorStyles: lineColorStyles
    } = useBackgroundColor(toRef(props, "lineColor"));
    provideDefaults({
      VIcon: {
        color: toRef(props, "iconColor"),
        icon: toRef(props, "icon"),
        size: toRef(props, "size")
      }
    });
    useRender(() => {
      var _a2;
      var _a;
      return createVNode("div", {
        "class": ["v-timeline-divider", {
          "v-timeline-divider--fill-dot": props.fillDot
        }]
      }, [createVNode("div", {
        "class": ["v-timeline-divider__before", lineColorClasses.value],
        "style": lineColorStyles.value
      }, null), !props.hideDot && createVNode("div", {
        "key": "dot",
        "class": ["v-timeline-divider__dot", elevationClasses.value, roundedClasses.value, sizeClasses.value],
        "style": sizeStyles.value
      }, [createVNode("div", {
        "class": ["v-timeline-divider__inner-dot", backgroundColorClasses.value, roundedClasses.value],
        "style": backgroundColorStyles.value
      }, [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.icon ? createVNode(VIcon, null, null) : void 0])]), createVNode("div", {
        "class": ["v-timeline-divider__after", lineColorClasses.value],
        "style": lineColorStyles.value
      }, null)]);
    });
    return {};
  }
});
const VTimelineItem = genericComponent()({
  name: "VTimelineItem",
  props: {
    density: String,
    dotColor: String,
    fillDot: Boolean,
    hideDot: Boolean,
    hideOpposite: {
      type: Boolean,
      default: void 0
    },
    icon: IconValue,
    iconColor: String,
    lineInset: [Number, String],
    ...makeRoundedProps(),
    ...makeElevationProps(),
    ...makeSizeProps(),
    ...makeTagProps(),
    ...makeDimensionProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const dotSize = ref(0);
    const dotRef = ref();
    watch(dotRef, (newValue) => {
      var _a2;
      var _a;
      if (!newValue)
        return;
      dotSize.value = (_a2 = (_a = newValue.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a.getBoundingClientRect().width) != null ? _a2 : 0;
    }, {
      flush: "post"
    });
    useRender(() => {
      var _a, _b;
      return createVNode("div", {
        "class": ["v-timeline-item", {
          "v-timeline-item--fill-dot": props.fillDot
        }],
        "style": {
          "--v-timeline-dot-size": convertToUnit(dotSize.value),
          "--v-timeline-line-inset": props.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${convertToUnit(props.lineInset)})` : convertToUnit(0)
        }
      }, [createVNode("div", {
        "class": "v-timeline-item__body",
        "style": dimensionStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode(VTimelineDivider, {
        "ref": dotRef,
        "hideDot": props.hideDot,
        "icon": props.icon,
        "iconColor": props.iconColor,
        "size": props.size,
        "elevation": props.elevation,
        "dotColor": props.dotColor,
        "fillDot": props.fillDot,
        "rounded": props.rounded
      }, {
        default: slots.icon
      }), props.density !== "compact" && createVNode("div", {
        "class": "v-timeline-item__opposite"
      }, [!props.hideOpposite && ((_b = slots.opposite) == null ? void 0 : _b.call(slots))])]);
    });
    return {};
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const { mdAndUp } = useDisplay();
    const { tm, rt, t } = useI18n({ useScope: "local", inheritLocale: true });
    const items = tm("items");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      const _component_client_only = __nuxt_component_5$1;
      _push(ssrRenderComponent(_component_cq_layout_section, mergeProps({ class: "how-it-works" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="section-title"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</h2><div class="text-lg"${_scopeId}>${ssrInterpolate(unref(t)("description"))}</div>`);
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
              createVNode("div", { class: "text-lg" }, toDisplayString(unref(t)("description")), 1),
              createVNode(_component_client_only, null, {
                default: withCtx(() => [
                  createVNode(VTimeline, {
                    align: "start",
                    class: "pt-8",
                    direction: unref(mdAndUp) ? "vertical" : "vertical",
                    density: unref(mdAndUp) ? "default" : "compact"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                        return openBlock(), createBlock(VTimelineItem, {
                          key: unref(rt)(item.title),
                          "dot-color": unref(rt)(item.color),
                          icon: unref(rt)(item.icon)
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              variant: "outlined",
                              color: unref(rt)(item.color)
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: ["text-lg text-brand-black", `bg-${item.color}`]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(rt)(item.title)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "text-base text-brand-black",
                                      innerHTML: unref(rt)(item.description)
                                    }, null, 8, ["innerHTML"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1032, ["dot-color", "icon"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["direction", "density"])
                ]),
                _: 1
              })
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
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xBFCu\xE1ntas sesiones tengo que hacer?"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Al igual que cuando vamos al gym no sirve con ir solo un d\xEDa, los ajustes quiropracticos funcionan de la misma manera. Tendremos que buscar nuestra rutina para que los efectos se mantegan a lo largo del tiempo. Al principio puede ser que necesitemos m\xE1s sesiones, pero una vez el cuerpo se adapta bastar\xE1 con una o dos sesiones al mes."]);
        },
        "items": [
          {
            "color": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["primary"]);
            },
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["mdi-calendar"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Reserva tu primera cita"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."]);
            }
          },
          {
            "color": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["tertiary"]);
            },
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["mdi-magnify"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Primera visita"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Te contamos lo que haremos en tu primera visita:<ul class='list-disc'><li> Rellenar el formulario de primera visita en la web </li> <li>historia clinica de salud</li> <li>Pruebas para ver como funciona  tu sistema nervioso:<ul><li>postura</li><li>pruebas neurol\xF3gicas</li><li>patron de marcha</li></ul></li></ul>"]);
            }
          },
          {
            "color": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["quaternary"]);
            },
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["mdi-file-document-check-outline"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Segunda visita => Informe"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["<ul class='list-disc'><li>Te entregamos tu informe quiropractico con los resultados de las pruebas de la 1a visita</li><li>plan de cuidado recomendado </li></ul>"]);
            }
          },
          {
            "color": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["secondary"]);
            },
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["mdi-hand-heart-outline"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan de cuidado"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estableceremos un plan de cuidado recomendado a tus necesidades con una frecuencia de ajustes quiropr\xE1cticos"]);
            }
          },
          {
            "color": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["whiteBranded"]);
            },
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["mdi-hand-heart-outline"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Revision"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["<ul><li>Reevaluacion</li><li>Repetir las pruebas de la primera visita</li></ul>"]);
            }
          },
          {
            "color": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["tertiary"]);
            },
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["mdi-hand-heart-outline"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mantenimiento"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            }
          }
        ]
      }
    }
  });
}
if (typeof block0$3 === "function")
  block0$3(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HowItWorks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n({ useScope: "local", inheritLocale: true });
    const items = tm("items");
    const carouselSettings = {
      itemsToShow: 1,
      wrapAround: true,
      autoplay: 2e3,
      transition: 1e3
    };
    const carouselBreakpoints = {
      800: {
        itemsToShow: 2
      },
      1280: {
        itemsToShow: 3
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-title"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</div>`);
            _push2(ssrRenderComponent(unref(Carousel), {
              settings: carouselSettings,
              breakpoints: carouselBreakpoints
            }, {
              addons: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Navigation), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Pagination), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Navigation)),
                    createVNode(unref(Pagination))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(items), (item) => {
                    _push3(ssrRenderComponent(unref(Slide), {
                      key: unref(rt)(item.author)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            flat: "",
                            color: "quaternary",
                            class: "p-3 h-full"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardText, { class: "flex flex-col justify-center h-full" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-base pb-2"${_scopeId5}>${ssrInterpolate(unref(rt)(item.description))}</div><div class="text-xs italic"${_scopeId5}>${ssrInterpolate(unref(rt)(item.author))}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-base pb-2" }, toDisplayString(unref(rt)(item.description)), 1),
                                        createVNode("div", { class: "text-xs italic" }, toDisplayString(unref(rt)(item.author)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardText, { class: "flex flex-col justify-center h-full" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-base pb-2" }, toDisplayString(unref(rt)(item.description)), 1),
                                      createVNode("div", { class: "text-xs italic" }, toDisplayString(unref(rt)(item.author)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              flat: "",
                              color: "quaternary",
                              class: "p-3 h-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardText, { class: "flex flex-col justify-center h-full" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-base pb-2" }, toDisplayString(unref(rt)(item.description)), 1),
                                    createVNode("div", { class: "text-xs italic" }, toDisplayString(unref(rt)(item.author)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                      return openBlock(), createBlock(unref(Slide), {
                        key: unref(rt)(item.author)
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            flat: "",
                            color: "quaternary",
                            class: "p-3 h-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardText, { class: "flex flex-col justify-center h-full" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-base pb-2" }, toDisplayString(unref(rt)(item.description)), 1),
                                  createVNode("div", { class: "text-xs italic" }, toDisplayString(unref(rt)(item.author)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
              createVNode(unref(Carousel), {
                settings: carouselSettings,
                breakpoints: carouselBreakpoints
              }, {
                addons: withCtx(() => [
                  createVNode(unref(Navigation)),
                  createVNode(unref(Pagination))
                ]),
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                    return openBlock(), createBlock(unref(Slide), {
                      key: unref(rt)(item.author)
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          flat: "",
                          color: "quaternary",
                          class: "p-3 h-full"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardText, { class: "flex flex-col justify-center h-full" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-base pb-2" }, toDisplayString(unref(rt)(item.description)), 1),
                                createVNode("div", { class: "text-xs italic" }, toDisplayString(unref(rt)(item.author)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
function block0$2(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Vuestros testimonios nos ayudan a seguir mejorando"]);
        },
        "items": [
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Yaneth"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["La verdad que me ha cambiado la vida y mi diario vivir;  en cuanto escuche de este tipo de tto.  quize probarlo y la verdad no me arrepiento en lo absoluto, por que el seguimiento que me hace la dra.  Lea es fant\xE1stico, pocas personas se preocupan por la evoluci\xF3n  despu\xE9s del tratamiento... mil y mil gracias eres la mejor \u{1F44C}\u{1F44C}\u{1F44C}\u{1F618}"]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Jose Maria"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Que decir, llegu\xE9 con las lumbares destruidas, casi sin poder moverme, y lleno de pastillas que me hab\xEDa dado el CAP. Lea sabe muy bien lo que hace, me dej\xF3 como nuevo. S\xFAper recomendables."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nazareth"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estoy muy contenta con los resultados. La doctora Lea es muy amable, te aconseja y los resultados son muy buenos.  Desde que voy al centro estoy mucho mejor y mi calidad de vida a mejorado mucho. Lo recomiendo 100%."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Laura"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fa uns messos que hi vaig i m\u2019ha ajudat molt amb el dolor i la tensi\xF3 de diferents parts del cos. Tamb\xE9 noto una correcci\xF3 important en la meva postura corporal i el tractament ha afectat positivament en la meva salut i benestar. L\u2019ambient de la consulta \xE9s molt relaxant i agradable"]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Elisabeth"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Vaig comen\xE7ar a tractar-me amb la Dra. Lea fa uns mesos, i estic molt contenta, els mals d'esquena gaireb\xE9 han desaparescut, dormo millor, he guanyat en qualitat de vida. Recomano a la Dra. Lea al 100%."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Karen"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estoy muy contenta con el servicio de Quirovida y con la Dra. Lea. Son un gran equipo que cuando entras te sientes c\xF3mo en casa. El tratamiento propuesto por la Dra. Lea me est\xE1 ayudando mucho con mi problema de cervicales y espalda. Y que decir de ella es muy amable y siempre muy profesional. Estoy muy agradecida. Recomiendo sin duda a \xE9ste centro y sus profesionales."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sandra"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Molt contenta amb el tractament que he rebut de la dra. L\xE9a Guido. Hi vaig arribar gaireb\xE9 per casualitat i estic encantada! No nom\xE9s ha desaparegut el dolor cervical, tamb\xE9 m\u2019ha ajudat molt a nivell emocional.La recomano totalment."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Marc"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["L\xE9a es una s\xFAper profesional!!Se nota la experiencia y en pocas sesiones he notado mucha mejor\xEDa en general. Muy recomendable."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Javier"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A los que padezcais problemas de espalda, al final de cada sesi\xF3n y, desde la primera, todas las v\xE9rtebras quedan en su sitio y, desparecen los desagradables dolores radiculares. La quirop\u0155actica Lea tiene manos m\xE1gicas."]);
            }
          },
          {
            "author": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cristian"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Una experiencia  transformadora con la dra Lea  , un trato humano excelente ,lo recomiendo a todas las personas con s\xEDntomas o sin s\xEDntomas , merece la pena cuidar nuestro cuerpo - habitamos en el -"]);
            }
          }
        ]
      }
    }
  });
}
if (typeof block0$2 === "function")
  block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/blocks/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "QuiroLogos",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm, rt } = useI18n({ inheritLocale: true, useScope: "local" });
    const logos = tm("logos");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cq_layout_section, mergeProps({ class: "quiro-logos" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-7" data-v-5e50f3e3${_scopeId}><!--[-->`);
            ssrRenderList(unref(logos), (logo) => {
              _push2(ssrRenderComponent(VImg, {
                key: unref(rt)(logo.id),
                class: "quiro-logos__logo",
                src: `${unref(STATICS_CDN)}website/home/quiro-logos/${unref(rt)(logo.id)}.webp`,
                width: 200,
                alt: unref(rt)(logo.alt)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-7" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(logos), (logo) => {
                  return openBlock(), createBlock(VImg, {
                    key: unref(rt)(logo.id),
                    class: "quiro-logos__logo",
                    src: `${unref(STATICS_CDN)}website/home/quiro-logos/${unref(rt)(logo.id)}.webp`,
                    width: 200,
                    alt: unref(rt)(logo.alt)
                  }, null, 8, ["src", "alt"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
function block0$1(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "logos": [
          {
            "id": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["word-federation-quiro"]);
            },
            "alt": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Word Federation of Chiropractic"]);
            }
          },
          {
            "id": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ecce"]);
            },
            "alt": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["European Council of Chiropractic Education"]);
            }
          },
          {
            "id": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["aeq"]);
            },
            "alt": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Asociaci\xF3n Espa\xF1ola de Quiropr\xE1ctica"]);
            }
          },
          {
            "id": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["bcc"]);
            },
            "alt": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Barcelona College of Chiropractic"]);
            }
          },
          {
            "id": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["icpa"]);
            },
            "alt": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["International Council Pediatric Association"]);
            }
          }
        ]
      }
    }
  });
}
if (typeof block0$1 === "function")
  block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/QuiroLogos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5e50f3e3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({ inheritLocale: true, useScope: "local" });
    useTagTitle(t("seo.title"));
    useSeoMeta({
      description: t("seo.description"),
      ogDescription: t("seo.description"),
      ogTitle: t("seo.title")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_home_quiro_intro = _sfc_main$6;
      const _component_home_science = _sfc_main$5;
      const _component_home_to_who = _sfc_main$4;
      const _component_home_how_it_works = _sfc_main$3;
      const _component_cq_blocks_testimonials = _sfc_main$2;
      const _component_home_quiro_logos = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_home_quiro_intro, null, null, _parent));
      _push(ssrRenderComponent(_component_home_science, null, null, _parent));
      _push(ssrRenderComponent(_component_home_to_who, null, null, _parent));
      _push(ssrRenderComponent(_component_home_how_it_works, null, null, _parent));
      _push(ssrRenderComponent(_component_cq_blocks_testimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_home_quiro_logos, null, null, _parent));
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
        "seo": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Centro Quiropr\xE1ctico de Alta Calidad en Val\xE8ncia - ColumaQuiro"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Centro de quiropr\xE1ctica en el centro de Val\xE8ncia. Descubre en el centro ColumnaQuiro qu\xE9 es la quiropr\xE1ctica y sus beneficios. La Quiropr\xE1ctica es para t\xED"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-17615abd.mjs.map
