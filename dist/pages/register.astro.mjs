/* empty css                                    */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_nvmoESTr.mjs';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const supabaseUrl = "https://leordyersspnwtkxncoj.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlb3JkeWVyc3Nwbnd0a3huY29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NDY1NjQsImV4cCI6MjA2MDQyMjU2NH0.3YpsW3Oe3v6PnHWIsS02WMxqrI5wvcrvo0f71XX7WcM";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-100 flex items-center justify-center"> <div class="bg-white p-8 rounded-lg shadow-md w-96"> <h2 class="text-2xl font-bold mb-6 text-center">Register</h2> <div id="error-message" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"></div> <form id="registerForm"> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
Email
</label> <input id="email" type="email" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required> </div> <div class="mb-6"> <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
Password
</label> <input id="password" type="password" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required> </div> <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
Register
</button> </form> <div class="mt-4 text-center"> <p class="text-gray-600">
Already have an account?${" "} <a href="/login" class="text-blue-500 hover:text-blue-700">
Login
</a> </p> </div> </div> </div> ` })} ${renderScript($$result, "/home/project/src/pages/register.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/register.astro", void 0);
const $$file = "/home/project/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
