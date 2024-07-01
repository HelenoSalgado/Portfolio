import { mergeProps, useSSRContext, defineComponent, defineAsyncComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as __nuxt_component_1$1 } from "./nuxt-img-DMTNgszX.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { c as useHead } from "../server.mjs";
import "defu";
import "ufo";
import "h3";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    class: "volume"
  }, _attrs))}><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Volume.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Button3D",
  __ssrInlineRender: true,
  props: ["href"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "empurravel" }, _attrs))}><span class="sombra"></span><span class="borda"></span><span class="frente"><a${ssrRenderAttr("href", __props.href)} target="_blank">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a></span></button>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button3D.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, _attrs))}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Linkedin.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const Linkedin = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2$1
});
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, _attrs))}><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Download.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const __nuxt_component_0_lazy$2 = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Linkedin;
}).then((c) => c.default || c));
const __nuxt_component_1_lazy$1 = defineAsyncComponent(() => import("./Instagram-DBxuN1wI.js").then((c) => c.default || c));
const __nuxt_component_2_lazy$1 = defineAsyncComponent(() => import("./GitHub-CMUQfNFC.js").then((c) => c.default || c));
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_LazyIconsLinkedin = __nuxt_component_0_lazy$2;
  const _component_LazyIconsInstagram = __nuxt_component_1_lazy$1;
  const _component_LazyIconsGitHub = __nuxt_component_2_lazy$1;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}><nav><ul class="menu"><li><a href="#sobre">SOBRE</a></li><li><a href="#conhecimentos">CONHECIMENTOS</a></li><li><a href="#certificados">CERTIFICADOS</a></li><li><a href="#github">GITHUB</a></li><li><a href="#projetos">PROJETOS</a></li><li><a href="#contato">CONTATO</a></li><li><a href="/blog/index.html">BLOG</a></li></ul></nav><div class="social-media"><a href="https://www.linkedin.com/in/helenosalgado">`);
  _push(ssrRenderComponent(_component_LazyIconsLinkedin, null, null, _parent));
  _push(`</a><a href="https://www.instagram.com/heleno_salgado/">`);
  _push(ssrRenderComponent(_component_LazyIconsInstagram, null, null, _parent));
  _push(`</a><a href="https://github.com/HelenoSalgado/">`);
  _push(ssrRenderComponent(_component_LazyIconsGitHub, null, null, _parent));
  _push(`</a></div></aside>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuAside.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = publicAssetsURL("/img/hsl-logo-transparent.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_IconsVolume = __nuxt_component_0$1;
  const _component_Button3D = _sfc_main$7;
  const _component_IconsLinkedin = __nuxt_component_2$1;
  const _component_IconsDownload = __nuxt_component_3;
  const _component_NuxtImg = __nuxt_component_1$1;
  const _component_MenuAside = __nuxt_component_5;
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "home" }, _attrs))}><div class="fixed-bar"><img${ssrRenderAttr("src", _imports_0)} alt="logo">`);
  _push(ssrRenderComponent(_component_IconsVolume, null, null, _parent));
  _push(`<div class="menu-hamburguer"><span></span><span></span><span></span></div></div><div class="apresentacao"><div class="banner"><h1>Olá, sou Heleno Salgado Lopes</h1><p>Freelancer em desenvolvimento com NodeJs (Express, Nest e Vue) 😊. Estudante de Teologia e apaixonado por programação, certificado pela <em>One - Oracle Next Education</em>.</p><div class="botoes">`);
  _push(ssrRenderComponent(_component_Button3D, { href: "https://www.linkedin.com/in/helenosalgado" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Linked`);
        _push2(ssrRenderComponent(_component_IconsLinkedin, null, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode("Linked"),
          createVNode(_component_IconsLinkedin)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button3D, { href: "/doc/curriculo-heleno-salgado.pdf" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Currículo`);
        _push2(ssrRenderComponent(_component_IconsDownload, null, null, _parent2, _scopeId));
      } else {
        return [
          createTextVNode("Currículo"),
          createVNode(_component_IconsDownload)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="img-wrapper">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "350px",
    src: "/img/home/heleno-val-picture.webp",
    alt: "Heleno Salgado"
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_MenuAside, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const __nuxt_component_0_lazy$1 = defineAsyncComponent(() => import("./ArrowTop-BLYxo_ED.js").then((c) => c.default || c));
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LazyIconsArrowTop = __nuxt_component_0_lazy$1;
  const _component_NuxtImg = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="copy"><a href="https://heleno.dev/blog">BLOG</a><p>© 2022 Heleno Salgado Lopes | Obrigado pela visita.</p><img style="${ssrRenderStyle({ "width": "40px", "vertical-align": "middle", "background-color": "#eee", "border-radius": "7px" })}" loading="lazy"${ssrRenderAttr("src", _imports_0)} alt="logo"></div><a href="#home" class="link-topo">`);
  _push(ssrRenderComponent(_component_LazyIconsArrowTop, null, null, _parent));
  _push(`</a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    loading: "lazy",
    sizes: "sm:640 md:768 lg: 1024 xl: 1280 xxl: 1536",
    class: "background-footer",
    src: "/img/home/slopes.webp",
    alt: "Montanhas"
  }, null, _parent));
  _push(`</footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const __nuxt_component_0_lazy = defineAsyncComponent(() => import("./User-CbumMqvI.js").then((c) => c.default || c));
const __nuxt_component_1_lazy = defineAsyncComponent(() => import("./Arroba-D9I1eDUi.js").then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import("./Email-BmIUzmrQ.js").then((c) => c.default || c));
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LazyIconsUser = __nuxt_component_0_lazy;
  const _component_LazyIconsArroba = __nuxt_component_1_lazy;
  const _component_LazyIconsEmail = __nuxt_component_2_lazy;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "container-contato",
    id: "contato"
  }, _attrs))}><p class="mensagem-contato">Posso ajudá-lo(a) em algum projeto?</p><form action="" method="post"><label for="name"><input class="input-nome" type="text" id="name" placeholder="Nome Completo" autocomplete="name">`);
  _push(ssrRenderComponent(_component_LazyIconsUser, null, null, _parent));
  _push(`</label><label for="email"><input class="input-email" type="email" id="email" placeholder="Email" autocomplete="email">`);
  _push(ssrRenderComponent(_component_LazyIconsArroba, null, null, _parent));
  _push(`</label><textarea class="input-texto" name="mensage" cols="30" rows="7" placeholder="Envie-me uma mensagem."></textarea><span class="mensagem-alerta"></span><button type="submit" class="empurravel"><span class="sombra"></span><span class="borda"></span><span class="frente frente-enviar">Enviar`);
  _push(ssrRenderComponent(_component_LazyIconsEmail, null, null, _parent));
  _push(`</span></button></form></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          defer: "true",
          src: "/js/index.js"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      const _component_ContactForm = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ContactForm, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ContactForm)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CxJY63HS.js.map
