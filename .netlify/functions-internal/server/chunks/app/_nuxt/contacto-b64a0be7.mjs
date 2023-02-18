import { _ as __nuxt_component_0 } from './Section-601fe0b0.mjs';
import { V as VForm, E as EMAIL_RULES, R as REQUIRED_RULE, u as useSendSlackMessage, _ as _sfc_main$2, C as CONTACT_FORM_CHANNEL } from './VForm-da29dc9f.mjs';
import { _ as __nuxt_component_0$1 } from './Button-ed506ebd.mjs';
import { useSSRContext, defineComponent, unref, ref, reactive, withCtx, isRef, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useI18n } from '../server.mjs';
import { useTagTitle, useSeoMeta } from '@unhead/vue';
import './index-332a78af.mjs';
import './loader-3f4a27a1.mjs';
import './transition-ee3007a2.mjs';
import './urls-0c5c04f3.mjs';
import './router-388aa9c8.mjs';
import './dimensions-a198d0cf.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n({ useScope: "local", inheritLocale: true });
    const fields = tm("fields");
    const formRef = ref(null);
    const isFormValid = ref(true);
    const formData = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const submitForm = async (validate) => {
      const { valid } = await validate;
      if (valid) {
        const text = Object.keys(formData).reduce((accum, current) => `${current}: ${formData[current]}
    ${accum}`, "");
        await useSendSlackMessage({ channel: CONTACT_FORM_CHANNEL, text });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      const _component_cq_components_input_text = _sfc_main$2;
      const _component_cq_components_button = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-10"${_scopeId}><div class="col-span-full md:col-span-6"${_scopeId}><div class="text-xl pb-4"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</div><div${_scopeId}>${ssrInterpolate(unref(t)("subtitle"))}</div></div>`);
            _push2(ssrRenderComponent(VForm, {
              ref_key: "formRef",
              ref: formRef,
              modelValue: unref(isFormValid),
              "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
              class: "col-span-full md:col-span-6",
              "validate-on": "submit",
              onSubmit: submitForm
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(fields), (field) => {
                    _push3(ssrRenderComponent(_component_cq_components_input_text, {
                      key: unref(rt)(field.key),
                      modelValue: unref(formData)[unref(rt)(field.key)],
                      "onUpdate:modelValue": ($event) => unref(formData)[unref(rt)(field.key)] = $event,
                      label: unref(rt)(field.label),
                      rules: unref(rt)(field.type) === "email" ? unref(EMAIL_RULES) : unref(REQUIRED_RULE),
                      type: unref(rt)(field.type)
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_cq_components_button, {
                    type: "submit",
                    color: "tertiary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("cta"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("cta")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                      return openBlock(), createBlock(_component_cq_components_input_text, {
                        key: unref(rt)(field.key),
                        modelValue: unref(formData)[unref(rt)(field.key)],
                        "onUpdate:modelValue": ($event) => unref(formData)[unref(rt)(field.key)] = $event,
                        label: unref(rt)(field.label),
                        rules: unref(rt)(field.type) === "email" ? unref(EMAIL_RULES) : unref(REQUIRED_RULE),
                        type: unref(rt)(field.type)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "type"]);
                    }), 128)),
                    createVNode(_component_cq_components_button, {
                      type: "submit",
                      color: "tertiary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("cta")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-10" }, [
                createVNode("div", { class: "col-span-full md:col-span-6" }, [
                  createVNode("div", { class: "text-xl pb-4" }, toDisplayString(unref(t)("title")), 1),
                  createVNode("div", null, toDisplayString(unref(t)("subtitle")), 1)
                ]),
                createVNode(VForm, {
                  ref_key: "formRef",
                  ref: formRef,
                  modelValue: unref(isFormValid),
                  "onUpdate:modelValue": ($event) => isRef(isFormValid) ? isFormValid.value = $event : null,
                  class: "col-span-full md:col-span-6",
                  "validate-on": "submit",
                  onSubmit: withModifiers(submitForm, ["prevent"])
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                      return openBlock(), createBlock(_component_cq_components_input_text, {
                        key: unref(rt)(field.key),
                        modelValue: unref(formData)[unref(rt)(field.key)],
                        "onUpdate:modelValue": ($event) => unref(formData)[unref(rt)(field.key)] = $event,
                        label: unref(rt)(field.label),
                        rules: unref(rt)(field.type) === "email" ? unref(EMAIL_RULES) : unref(REQUIRED_RULE),
                        type: unref(rt)(field.type)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "type"]);
                    }), 128)),
                    createVNode(_component_cq_components_button, {
                      type: "submit",
                      color: "tertiary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("cta")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
          return _normalize(["Hola, \xBFc\xF3mo est\xE1s? \u{1F44B}"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nos encanta poder ayudarte a resolver cualquier duda que puedas tener y asistirte para programar tu pr\xF3xima visita a nuestra consulta quiropr\xE1ctica. Adem\xE1s, nos alegra mucho saber de ti en cualquier momento, incluso si es solo para ponerte al d\xEDa. \xA1Estamos aqu\xED para brindarte la mejor atenci\xF3n posible!"]);
        },
        "fields": [
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["name"]);
            },
            "label": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre y Apellidos*"]);
            },
            "type": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["text"]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["email"]);
            },
            "label": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Correo electr\xF3nico*"]);
            },
            "type": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["email"]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["subject"]);
            },
            "label": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Asunto*"]);
            },
            "type": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["text"]);
            }
          },
          {
            "key": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["message"]);
            },
            "label": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mensaje*"]);
            },
            "type": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["text"]);
            }
          }
        ],
        "cta": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Enviar"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contacto/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contacto",
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
      const _component_contacto_form = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="section-title pb-4">${ssrInterpolate(unref(t)("title"))}</h1><h2 class="text-2xl text-center">${ssrInterpolate(unref(t)("subtitle"))}</h2>`);
      _push(ssrRenderComponent(_component_contacto_form, null, null, _parent));
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
            return _normalize(["Contacta con los expertos en quiropr\xE1ctica - ColumnaQuiro"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Contacta con nuestros quiropr\xE1cticos altamente capacitados para programar una cita personalizada y descubre c\xF3mo podemos ayudarte a recuperar tu calidad de vida."]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contacta con ColumnaQuiro"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Centro Quiropr\xE1ctico en Valencia"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre-nosotros/contacto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacto-b64a0be7.mjs.map
