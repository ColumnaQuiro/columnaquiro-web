import { _ as _sfc_main$2 } from './QuiroIntro-011a6700.mjs';
import { _ as __nuxt_component_0 } from './Section-601fe0b0.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useI18n } from '../server.mjs';
import { S as STATICS_CDN } from './urls-0c5c04f3.mjs';
import { V as VImg } from './VImg-f91c08dc.mjs';
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
import './transition-ee3007a2.mjs';
import './dimensions-a198d0cf.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Subluxation",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n({ useScope: "local", inheritLocale: true });
    const items = tm("items");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="section-title"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</h2><div${_scopeId}>${ssrInterpolate(unref(t)("subtitle"))}</div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-center"${_scopeId}><!--[-->`);
            ssrRenderList(unref(items), (item) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(VImg, {
                src: `${unref(STATICS_CDN)}icons/icon-${unref(rt)(item.icon)}.webp`,
                alt: unref(rt)(item.title),
                width: "80",
                class: "mx-auto"
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-xl pt-4"${_scopeId}>${ssrInterpolate(unref(rt)(item.title))}</div><div class="pt-2"${_scopeId}>${ssrInterpolate(unref(rt)(item.body))}</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h2", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
              createVNode("div", null, toDisplayString(unref(t)("subtitle")), 1),
              createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-center" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item) => {
                  return openBlock(), createBlock("div", {
                    key: unref(rt)(item.icon)
                  }, [
                    createVNode(VImg, {
                      src: `${unref(STATICS_CDN)}icons/icon-${unref(rt)(item.icon)}.webp`,
                      alt: unref(rt)(item.title),
                      width: "80",
                      class: "mx-auto"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "text-xl pt-4" }, toDisplayString(unref(rt)(item.title)), 1),
                    createVNode("div", { class: "pt-2" }, toDisplayString(unref(rt)(item.body)), 1)
                  ]);
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
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Las subluxaciones y la Quiropr\xE1ctica"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nuestro cuerpo se adapta constantemente a varios tipos de estr\xE9s a diario para mantenernos en un estado \xF3ptimo. Hay 3 tipos de estr\xE9s principales en los cuales nos enfrentamos:"]);
        },
        "items": [
          {
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["sad"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estr\xE9s f\xEDsico"]);
            },
            "body": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Debido a accidentes, golpes, ca\xEDdas, levantar peso incorrectamente, malas posturas e incluso por el parto."]);
            }
          },
          {
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["emotional-stress"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estr\xE9s emocional"]);
            },
            "body": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Causado por las relaciones humanas, nerviosismo cr\xF3nico, preocupaciones econ\xF3micas, el empleo\u2026"]);
            }
          },
          {
            "icon": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["quimical"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estr\xE9s qu\xEDmico"]);
            },
            "body": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["En nuestro estilo de vida moderno encontramos gran cantidad de toxinas: fertilizantes, conservantes, contaminaci\xF3n ambiental, productos de limpieza,\u2026"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/que-es-la-quiropractica/Subluxation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
      const _component_home_quiro_intro = _sfc_main$2;
      const _component_que_es_la_quiropractica_subluxation = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_home_quiro_intro, { "title-type": "h1" }, null, _parent));
      _push(ssrRenderComponent(_component_que_es_la_quiropractica_subluxation, null, null, _parent));
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
            return _normalize(["\xBFQu\xE9 es la quiropr\xE1ctica? - ColumnaQuiro"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Mejora con la quiropr\xE1ctica: centrada en mejorar la funcionalidad del sistema nervioso. Ajustes quiropr\xE1cticos para el estr\xE9s, el dolor y otros s\xEDntomas."]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/que-es-la-quiropractica/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0cdbf828.mjs.map
