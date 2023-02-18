import { _ as __nuxt_component_0 } from './Section-601fe0b0.mjs';
import { _ as _sfc_main$3 } from './ParagraphWithImage-c8eb874f.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode, toDisplayString, mergeProps, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as useRoute, u as useI18n } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './Button-ed506ebd.mjs';
import { useTagTitle, useSeoMeta } from '@unhead/vue';
import { t as typeOfPersonToKey } from './typeOfPersonMapping-721643ad.mjs';
import './VImg-f91c08dc.mjs';
import './transition-ee3007a2.mjs';
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
import './router-388aa9c8.mjs';
import './loader-3f4a27a1.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Intro",
  __ssrInlineRender: true,
  props: {
    personType: null
  },
  setup(__props) {
    const { t } = useI18n({ useScope: "local", inheritLocale: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      const _component_cq_blocks_sections_paragraphWithImage = _sfc_main$3;
      _push(ssrRenderComponent(_component_cq_layout_section, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="section-title"${_scopeId}>${ssrInterpolate(unref(t)(`title.${__props.personType}`))}</h1>`);
            _push2(ssrRenderComponent(_component_cq_blocks_sections_paragraphWithImage, {
              text: unref(t)(`description.${__props.personType}`),
              image: "https://dummyimage.com/80/8d5b4c/ffffff"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "section-title" }, toDisplayString(unref(t)(`title.${__props.personType}`)), 1),
              createVNode(_component_cq_blocks_sections_paragraphWithImage, {
                text: unref(t)(`description.${__props.personType}`),
                image: "https://dummyimage.com/80/8d5b4c/ffffff"
              }, null, 8, ["text"])
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
        "title": {
          "disabled": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Discapacidades motoras o intelectuales"]);
          },
          "kids": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bebes / Ni\xF1os"]);
          },
          "elder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Personas mayores"]);
          },
          "pregnant": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Embarazadas"]);
          },
          "workers": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Trabajadores"]);
          },
          "sport": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Deportistas"]);
          }
        },
        "description": {
          "disabled": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Las personas con discapacidades motoras o intelectuales a menudo tienen acceso limitado a terapias. La quiropr\xE1ctica, al trabajar de manera hol\xEDstica en el cuerpo entero, puede mejorar la sensaci\xF3n corporal, movilidad, funcionalidad, equilibrio y coordinaci\xF3n. Adem\xE1s, numerosos estudios sobre la quiropr\xE1ctica y el cerebro han demostrado su potencial para producir cambios en la plasticidad cerebral. En particular, los ajustes quiropr\xE1cticos pueden equilibrar diferentes \xE1reas del cerebro y mejorar el desarrollo en personas con trastornos neuroconductuales."]);
          },
          "kids": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Durante el nacimiento, el beb\xE9 experimenta estr\xE9s, desde su descenso en el canal de parto hasta su salida al mundo externo desconocido. Durante este proceso, el beb\xE9 puede quedarse atrapado en una posici\xF3n o encontrar obst\xE1culos que dificulten su salida. Esto se puede reflejar en la forma poco com\xFAn de su cabeza al nacer o en un lado preferido para mamar durante la lactancia. Estos esfuerzos pueden causar disfunciones en su sistema nervioso.<br><br>Desde su nacimiento hasta su desarrollo, el beb\xE9 debe pasar por diferentes etapas en un orden espec\xEDfico. Estas etapas son sin\xF3nimo de un buen desarrollo sensorial y motor: el desarrollo motor le permitir\xE1 tener una musculatura adecuada y una coordinaci\xF3n corporal, mientras que el desarrollo sensorial le permitir\xE1 desarrollar todos sus sentidos (visi\xF3n, olfato, tacto, etc.).<br><br>Un sistema nervioso que funcione al 100% ayudar\xE1 al beb\xE9 a superar estas etapas, mejorando su coordinaci\xF3n, equilibrio y todos sus sentidos."]);
          },
          "elder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["En nuestra sociedad, aunque es com\xFAn, no es normal que la tercera edad se asocie con debilidad, lentitud, enfermedad y dependencia. Es importante tener en cuenta que con la edad, nuestro cuerpo experimenta cambios, como la p\xE9rdida de calidad en huesos, col\xE1geno y fibras musculares, y que nuestra calidad de vida puede verse afectada. Sin embargo, esta etapa es tan importante como cualquier otra y es esencial cuidar nuestro cuerpo para disfrutar al m\xE1ximo de la vida. La quiropr\xE1ctica puede ayudarte a mejorar tu movilidad, equilibrio y estilo de vida de manera hol\xEDstica y vitalista, fomentando un estilo de vida activo y saludable."]);
          },
          "pregnant": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["<h2 class='text-lg'>Antes y durante el embarazo</h2>Es importante preparar el cuerpo para los cambios que se producir\xE1n durante el embarazo:<ul class='list-disc'><li>Cambios f\xEDsicos: la alteraci\xF3n del centro de gravedad afecta la postura y la tensi\xF3n muscular.</li><li>Cambios qu\xEDmicos: los cambios hormonales aumentan la laxitud de los ligamentos y las articulaciones.</li><li>Cambios emocionales: ser madre es un paso importante que puede generar estr\xE9s y preguntas para la futura madre.</li></ul><br>Estos cambios pueden interferir en el sistema nervioso, que controla todos los dem\xE1s sistemas del cuerpo, incluidos los m\xFAsculos, ligamentos y articulaciones, como los m\xFAsculos y ligamentos del suelo p\xE9lvico, la articulaci\xF3n sacroil\xEDaca y el coxis. La quiropr\xE1ctica puede ayudar a alinear la pelvis y la columna vertebral para que el beb\xE9 tenga suficiente espacio y la madre pueda vivir un embarazo m\xE1s efectivo. Por lo tanto, entendemos que la salud de una mujer embarazada es muy importante para ella y para el beb\xE9.<br><br>Estamos certificados en la t\xE9cnica Webster, una t\xE9cnica quiropr\xE1ctica que se centra en el an\xE1lisis y la alineaci\xF3n de la pelvis y sus m\xFAsculos y ligamentos para optimizar la funci\xF3n p\xE9lvica de la madre durante el embarazo y el parto, reduciendo la necesidad de medicamentos o intervenciones quir\xFArgicas durante el parto.<br><br><h2 class='text-lg'>Despu\xE9s del parto</h2>El parto es un evento estresante a nivel f\xEDsico (horas de contracciones, salida del beb\xE9), qu\xEDmico (cambios hormonales con aumento de la leche) y emocional (llegada del beb\xE9, ser madre, posparto). La quiropr\xE1ctica puede ayudar a mejorar la recuperaci\xF3n postparto, permitiendo que el cuerpo funcione mejor para que puedas disfrutar al m\xE1ximo de este nuevo cap\xEDtulo en tu vida."]);
          },
          "workers": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La quiropractica y su impacto en el cerebro han sido objeto de numerosos estudios, demostrando la capacidad de los ajustes para influir en la plasticidad cerebral. En concreto, los ajustes quirop\xE1cticos aumentan la actividad en la corteza prefrontal.<br><br>La corteza prefrontal est\xE1 involucrada en cuatro aspectos clave: toma de decisiones, cognici\xF3n (procesamiento de informaci\xF3n), comportamiento social y expresi\xF3n de la personalidad. Estos aspectos, mejorados por los ajustes quirop\xE1cticos, contribuyen a un mejor rendimiento laboral, incluyendo: mayor eficiencia, tiempo de reacci\xF3n m\xE1s r\xE1pido, desempe\xF1o social \xF3ptimo y un nivel de estr\xE9s reducido.<br><br>A largo plazo, la quiropractica en el entorno laboral trae consigo una serie de beneficensos en las ausencias por motivos de salud, como la depresi\xF3n, dolor de espalda y dolor de cabeza. Adem\xE1s, mejora la retenci\xF3n de personal al permitir que los trabajadores manejen mejor el estr\xE9s y otros s\xEDntomas, y conduce a un mejor rendimiento laboral en general."]);
          },
          "sport": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Cuando se trata de deportistas regulares o de \xE9lite, a menudo pensamos en posibles lesiones o s\xEDntomas relacionados con sus actividades, pero no en su rendimiento deportivo. La quiropr\xE1ctica ha sido utilizada por muchos atletas profesionales y es reconocida como una forma complementaria de atenci\xF3n m\xE9dica para los atletas. Por ejemplo, Usain Bolt se ha ajustado antes de sus competiciones.<br><br>A pesar de ser poco conocida en el mundo del deporte, la quiropr\xE1ctica ha sido objeto de muchos estudios que han demostrado que los ajustes regulares pueden mejorar:<ul class='list-disc'><li>La fuerza</li><li>El tiempo de reacci\xF3n</li><li>La movilidad</li><li>El equilibrio</li><li>La recuperaci\xF3n post-entrenamiento</li></ul><br>Estos par\xE1metros son cruciales para aumentar las habilidades atl\xE9ticas."]);
          }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/para-quien-sirve-la-quiropractica/Intro.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderAppointmentSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({ useScope: "local", inheritLocale: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cq_layout_section = __nuxt_component_0;
      const _component_cq_components_button = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-quaternary text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_cq_layout_section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-4xl"${_scopeId}>${ssrInterpolate(unref(t)("title"))}</h3><div class="text-lg pt-4 pb-6"${_scopeId}>${unref(t)("subtitle")}</div>`);
            _push2(ssrRenderComponent(_component_cq_components_button, {
              size: "x-large",
              color: "tertiary",
              to: "/reserva-cita-centro-quiropractico-valencia"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("button"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("button")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "text-4xl" }, toDisplayString(unref(t)("title")), 1),
              createVNode("div", {
                class: "text-lg pt-4 pb-6",
                innerHTML: unref(t)("subtitle")
              }, null, 8, ["innerHTML"]),
              createVNode(_component_cq_components_button, {
                size: "x-large",
                color: "tertiary",
                to: "/reserva-cita-centro-quiropractico-valencia"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("button")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
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
          return _normalize(["\xBFQuieres empezar a sentirte mejor con ColumnaQuiro?"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xE1s vale prevenir que curar. Cuanto antes te cuides m\xE1s potencial de vida podr\xE1s descubrir.<br>\xA1Est\xE1s a un paso de empezar a sentirte mejor!"]);
        },
        "button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pide tu cita"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cq/blocks/OrderAppointmentSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[type]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n({ inheritLocale: true, useScope: "local" });
    const personType = typeOfPersonToKey.get(route.params.type);
    const personTitle = t(`personTitle.${personType}`);
    useTagTitle(t("seo.title", { personTitle }));
    useSeoMeta({
      description: t(`seo.description.${personType}`),
      ogDescription: t(`seo.description.${personType}`),
      ogTitle: t("seo.title")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_para_quien_sirve_la_quiropractica_intro = _sfc_main$2;
      const _component_cq_blocks_order_appointment_section = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_para_quien_sirve_la_quiropractica_intro, { "person-type": unref(personType) }, null, _parent));
      _push(ssrRenderComponent(_component_cq_blocks_order_appointment_section, null, null, _parent));
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
            const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
            return _normalize(["La quiropr\xE1ctica es para t\xED - ", _interpolate(_named("personTitle")), " - ColumnaQuiro"]);
          },
          "description": {
            "disabled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["La quiropr\xE1ctica mejora la movilidad, equilibrio y coordinaci\xF3n en personas con discapacidades. Tambi\xE9n mejora el desarrollo en trastornos neuroconductuales."]);
            },
            "kids": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Preven disfunciones en el sistema nervioso de tu beb\xE9: c\xF3mo un sistema nervioso \xF3ptimo mejora su desarrollo sensorial y motor, coordinaci\xF3n y sentidos."]);
            },
            "elder": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mejora tu movilidad, equilibrio y calidad de vida en la tercera edad con la Quiropr\xE1ctica: disfruta de un estilo de vida y saludable gracias a su enfoque."]);
            },
            "pregnant": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Optimiza tu salud durante y despu\xE9s del embarazo con la quiropr\xE1ctica. Prepara tu cuerpo para los cambios f\xEDsicos, qu\xEDmicos y emocionales del embarazo."]);
            },
            "workers": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mejora tu rendimiento laboral con Quiropraxia: los ajustes afectan positivamente a la toma de decisiones, cognici\xF3n... reduciendo ausencias por salud."]);
            },
            "sport": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mejora el rendimiento deportivo con quiropr\xE1ctica. Los ajustes aumentan la fuerza, el tiempo de reacci\xF3n, la movilidad, el equilibrio y la recuperaci\xF3n."]);
            }
          }
        },
        "personTitle": {
          "disabled": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Discapacidades"]);
          },
          "kids": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bebes / Ni\xF1os"]);
          },
          "elder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Personas mayores"]);
          },
          "pregnant": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Embarazadas"]);
          },
          "workers": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Trabajadores"]);
          },
          "sport": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Deportistas"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/para-quien-sirve-la-quiropractica/[type].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_type_-ff1ebb16.mjs.map
