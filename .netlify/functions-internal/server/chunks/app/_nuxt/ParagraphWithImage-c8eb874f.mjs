import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { V as VImg } from './VImg-f91c08dc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ParagraphWithImage",
  __ssrInlineRender: true,
  props: {
    text: null,
    image: null,
    imageWidth: { default: "100%" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-10 paragraph-with-image" }, _attrs))}><div class="md:col-span-2">`);
      ssrRenderSlot(_ctx.$slots, "text", {}, () => {
        _push(`<div class="text-base">${__props.text}</div>`);
      }, _push, _parent);
      _push(`</div><div class="w-full justify-self-center md:justify-self-end">`);
      ssrRenderSlot(_ctx.$slots, "image", {}, () => {
        _push(ssrRenderComponent(VImg, {
          src: __props.image,
          width: __props.imageWidth,
          class: "mx-auto lg:mx-0 mt-8 lg:mt-0"
        }, null, _parent));
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/blocks/sections/ParagraphWithImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ParagraphWithImage-c8eb874f.mjs.map
