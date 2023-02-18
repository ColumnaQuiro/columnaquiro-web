import { _ as __nuxt_component_0 } from './Section-601fe0b0.mjs';
import { useSSRContext, defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, ref, mergeProps, isRef, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useI18n, _ as _export_sfc } from '../server.mjs';
import { V as VForm, E as EMAIL_RULES, u as useSendSlackMessage, a as EMAIL_SUBSCRIPTION_CHANNEL, _ as _sfc_main$3 } from './VForm-da29dc9f.mjs';
import { useTagTitle, useSeoMeta } from '@unhead/vue';
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
import './index-332a78af.mjs';
import './loader-3f4a27a1.mjs';
import './transition-ee3007a2.mjs';
import './urls-0c5c04f3.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n({ useScope: "local", inheritLocale: true });
    const steps = tm("steps.items");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="section-title"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</h1><div class="text-lg pt-4 text-center text-md-start"${_scopeId}>${ssrInterpolate(unref(t)("subtitle"))}</div><div${_scopeId}><div class="pt-12"${_scopeId}><h2 class="text-lg font-medium text-center text-md-start"${_scopeId}>${ssrInterpolate(unref(t)("steps.title"))}</h2><div class="grid grid-cols-3"${_scopeId}><div class="col-span-2"${_scopeId}><ol class="pt-3 list-decimal"${_scopeId}><!--[-->`);
            ssrRenderList(unref(steps), (step) => {
              _push2(`<li class="text-base"${_scopeId}>${unref(rt)(step)}</li>`);
            });
            _push2(`<!--]--></ol></div></div></div></div>`);
          } else {
            return [
              createVNode("h1", { class: "section-title" }, toDisplayString(unref(t)("title")), 1),
              createVNode("div", { class: "text-lg pt-4 text-center text-md-start" }, toDisplayString(unref(t)("subtitle")), 1),
              createVNode("div", null, [
                createVNode("div", { class: "pt-12" }, [
                  createVNode("h2", { class: "text-lg font-medium text-center text-md-start" }, toDisplayString(unref(t)("steps.title")), 1),
                  createVNode("div", { class: "grid grid-cols-3" }, [
                    createVNode("div", { class: "col-span-2" }, [
                      createVNode("ol", { class: "pt-3 list-decimal" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(steps), (step) => {
                          return openBlock(), createBlock("li", {
                            key: step,
                            class: "text-base",
                            innerHTML: unref(rt)(step)
                          }, null, 8, ["innerHTML"]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ])
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
          return _normalize(["Reserva tu visita en ColumnaQuiro"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xA1Hola! A continuaci\xF3n puedes reservar tu pr\xF3xima visita en ColumnaQuiro. Ya sea primera visita o paciente frecuente."]);
        },
        "steps": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\xBFC\xF3mo hacer la reserva en 3 sencillos pasos?"]);
          },
          "items": [
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Selecciona la cita (Primera visita o Ajuste quiropr\xE1ctico)."]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Selecciona la fecha que mejor te vaya y rellena los campos con tus datos de contacto."]);
            },
            (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cont\xE1ctanos por Whatsapp (+34 645967420) y te guiaremos en el proceso de pago (aceptamos efectivo, transferencia bancaria, tarjeta de cr\xE9dito o Bizum) y hacer efectiva la reserva."]);
            }
          ]
        }
      }
    }
  });
}
if (typeof block0$2 === "function")
  block0$2(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reserva-tu-visita/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Booking",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const formRef = ref(null);
    const { t } = useI18n({ useScope: "local", inheritLocale: true });
    const subscribeUser = async () => {
      var _a;
      const { valid: isFormValid } = await ((_a = formRef.value) == null ? void 0 : _a.validate());
      if (isFormValid) {
        await useSendSlackMessage({ channel: EMAIL_SUBSCRIPTION_CHANNEL, text: email.value });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      const _component_cq_components_input_text = _sfc_main$3;
      _push(ssrRenderComponent(_component_cq_layout_section, mergeProps({ class: "booking" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-3xl pb-4 text-center" data-v-9d712f9d${_scopeId}>${ssrInterpolate(unref(t)("title"))}</h3><div class="text-base" data-v-9d712f9d${_scopeId}>${unref(t)("subtitle")}</div>`);
            _push2(ssrRenderComponent(VForm, {
              ref_key: "formRef",
              ref: formRef,
              class: "pt-4 px-0",
              "validate-on": "submit",
              onSubmit: subscribeUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_cq_components_input_text, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    label: unref(t)("form.email.label"),
                    placeholder: unref(t)("form.email.placeholder"),
                    rules: unref(EMAIL_RULES),
                    "append-inner-icon": "mdi-send",
                    type: "email",
                    class: "booking__input",
                    "onClick:appendInner": subscribeUser
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_cq_components_input_text, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      label: unref(t)("form.email.label"),
                      placeholder: unref(t)("form.email.placeholder"),
                      rules: unref(EMAIL_RULES),
                      "append-inner-icon": "mdi-send",
                      type: "email",
                      class: "booking__input",
                      "onClick:appendInner": subscribeUser
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "placeholder", "rules"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "text-3xl pb-4 text-center" }, toDisplayString(unref(t)("title")), 1),
              createVNode("div", {
                class: "text-base",
                innerHTML: unref(t)("subtitle")
              }, null, 8, ["innerHTML"]),
              createVNode(VForm, {
                ref_key: "formRef",
                ref: formRef,
                class: "pt-4 px-0",
                "validate-on": "submit",
                onSubmit: withModifiers(subscribeUser, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_cq_components_input_text, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    label: unref(t)("form.email.label"),
                    placeholder: unref(t)("form.email.placeholder"),
                    rules: unref(EMAIL_RULES),
                    "append-inner-icon": "mdi-send",
                    type: "email",
                    class: "booking__input",
                    "onClick:appendInner": subscribeUser
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "placeholder", "rules"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
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
          return _normalize(["\xA1D\xE9janos tu email!"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Estamos terminando de montar la consulta. Obt\xE9n las \xFAltimas noticias sobre nuestro avance y d\xEDa de apertura. Haremos una gran inauguraci\xF3n, no te la pierdas!<br><br>Mientras tanto puedes seguir leyendo sobre nosotros y la quiropractica en nuestra web, seguirnos en redes sociales donde subimos contenido relacionado sobre la quiropractica, curiosidades, consejos y mucho m\xE1s!"]);
        },
        "form": {
          "email": {
            "placeholder": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["tuemail", "@", "gmail.com"]);
            },
            "label": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Introduce tu correo electr\xF3nico"]);
            }
          },
          "submit": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Suscribirse"]);
          }
        }
      }
    }
  });
}
if (typeof block0$1 === "function")
  block0$1(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reserva-tu-visita/Booking.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9d712f9d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reserva-cita-centro-quiropractico-valencia",
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
      const _component_reserva_tu_visita_header = _sfc_main$2;
      const _component_reserva_tu_visita_booking = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_reserva_tu_visita_header, null, null, _parent));
      _push(ssrRenderComponent(_component_reserva_tu_visita_booking, null, null, _parent));
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
            return _normalize(["Reserva tu visita - ColumaQuiro"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Reserva una cita en el Centro Quiropr\xE1ctico de Valencia. Nuestro equipo de profesionales altamente capacitados brinda atenci\xF3n personalizada y efectiva."]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reserva-cita-centro-quiropractico-valencia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reserva-cita-centro-quiropractico-valencia-a42432f6.mjs.map
