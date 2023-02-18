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
  __name: "primera-visita",
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
            return _normalize(["Tu primera visita - Evaluaci\xF3n y plan personalizado"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Descubre qu\xE9 esperar en tu primera visita en nuestro centro quiropr\xE1ctico: evaluaci\xF3n de salud y plan de tratamiento personalizado. Programa tu consulta hoy."]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicios-quiropractica/primera-visita.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=primera-visita-ee509a22.mjs.map
