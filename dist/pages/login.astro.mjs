/* empty css                                    */
import { c as createComponent, d as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_nvmoESTr.mjs';
import { supabase } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="min-h-screen bg-gray-100 flex items-center justify-center"> <div class="bg-white p-8 rounded-lg shadow-md w-96"> <h2 class="text-2xl font-bold mb-6 text-center">Login</h2> <div id="error-message" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"></div> <form id="loginForm"> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
Email
</label> <input id="email" type="email" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required> </div> <div class="mb-6"> <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
Password
</label> <input id="password" type="password" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required> </div> <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
Login
</button> </form> <div class="mt-4 text-center"> <p class="text-gray-600">
Don't have an account?
<a href="/register" class="text-blue-500 hover:text-blue-700">Register</a> </p> </div> </div> </div> <script type="module">
    import { supabase } from '@supabase/supabase-js';
		
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');

      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
      } else {
        window.location.href = '/';
      }
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "/home/project/src/pages/login.astro", void 0);

const $$file = "/home/project/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
