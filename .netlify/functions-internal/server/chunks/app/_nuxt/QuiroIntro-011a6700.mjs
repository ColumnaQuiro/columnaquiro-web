import { _ as __nuxt_component_0 } from './Section-601fe0b0.mjs';
import { _ as _sfc_main$1 } from './ParagraphWithImage-c8eb874f.mjs';
import { defineComponent, withCtx, createVNode, resolveDynamicComponent, unref, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { u as useI18n } from '../server.mjs';
import { S as STATICS_CDN } from './urls-0c5c04f3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuiroIntro",
  __ssrInlineRender: true,
  props: {
    titleType: { default: "h2" }
  },
  setup(__props) {
    const { t } = useI18n({ useScope: "local", inheritLocale: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      const _component_cq_blocks_sections_paragraphWithImage = _sfc_main$1;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.titleType), { class: "section-title" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("title")), 1)
                  ];
                }
              }),
              _: 1
            }), _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_cq_blocks_sections_paragraphWithImage, {
              text: unref(t)("description"),
              image: `${unref(STATICS_CDN)}website/home/quiro-intro.webp`,
              "image-width": 240
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.titleType), { class: "section-title" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("title")), 1)
                ]),
                _: 1
              })),
              createVNode(_component_cq_blocks_sections_paragraphWithImage, {
                text: unref(t)("description"),
                image: `${unref(STATICS_CDN)}website/home/quiro-intro.webp`,
                "image-width": 240
              }, null, 8, ["text", "image"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "es": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Alinea tu cuerpo y mente: Descubre los beneficios de la quiropr\xE1ctica"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La quiropr\xE1ctica es una profesi\xF3n manual de salud  que se centra en mejorar la funcionalidad del sistema nervioso mediante un enfoque integral y hol\xEDstico. El sistema nervioso es esencial para el desarrollo y el funcionamiento de otros sistemas como el circulatorio, respiratorio, cardiovascular, locomotor, digestivo, urinario, endocrino, reproductor y linf\xE1tico. La columna vertebral protege la m\xE9dula espinal y el cr\xE1neo protege el cerebro, que es el encargado de enviar informaci\xF3n a todo el cuerpo a trav\xE9s del sistema nervioso perif\xE9rico.<br><br>Esta conexi\xF3n entre el cerebro y el resto del cuerpo es crucial para regular el estr\xE9s, el dolor y otros s\xEDntomas que puedan aparecer en otros sistemas. A trav\xE9s de ajustes quiropr\xE1cticos, se estimulan los receptores nerviosos en el cuerpo, principalmente en la columna vertebral, para mantener una buena comunicaci\xF3n entre el sistema nervioso central (cerebro y columna vertebral) y el resto del cuerpo."]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/QuiroIntro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=QuiroIntro-011a6700.mjs.map
