void 0===Craft.SocialLogin&&(Craft.SocialLogin={}),function($){Craft.SocialLogin.CpLoginForm=Garnish.Base.extend({init:function(i){const o=this;this.renderedLogin=!1,this.html=i.html,this.bindSubmitButtons();const n=$("#login #login-form");var t;n.length&&this.renderLoginForm(n),new MutationObserver((function(i){i.forEach((function(i){i.addedNodes.forEach((function(i){"loginmodal"===i.id&&o.renderLoginModalForm(i)}))}))})).observe(document.body,{childList:!0,subtree:!0})},renderLoginForm(i){$(this.html).insertAfter(i)},renderLoginModalForm(i){const o=$(i),n=o.find(".body");this.renderedLogin||($(this.html).insertAfter(n),o.trigger("updateSizeAndPosition"),$(window).trigger("resize"),this.renderedLogin=!0)},bindSubmitButtons(){$(document).on("mouseup","button[data-social-provider]",(function(i){i.preventDefault();let o=$(i.currentTarget),n=$("form#x");Craft.submitForm(n,{action:"social-login/auth/login",redirect:null,params:{loginName:Craft.username,provider:o.data("social-provider")}})}))}})}(jQuery);
//# sourceMappingURL=social-login.js.map