import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useTagTitle, useSeoMeta } from '@unhead/vue';
import { u as useI18n } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "preguntas-frecuentes",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({ useScope: "local", inheritLocale: true });
    useTagTitle(t("seo.title"));
    useSeoMeta({
      description: t("seo.description"),
      ogDescription: t("seo.description"),
      ogTitle: t("seo.title")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
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
            return _normalize(["Mejora tu salud con nuestros servicios - ColumnaQuiro"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Respuestas a tus preguntas sobre nuestro centro quiropr\xE1ctico: servicios, enfoque integral y c\xF3mo mejorar tu salud. Descubrelo en nuestras preguntas frecuentes."]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/que-es-la-quiropractica/preguntas-frecuentes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=preguntas-frecuentes-647219ea.mjs.map
