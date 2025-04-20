import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderScript, b as renderTemplate } from './astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  let showMenu = false;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-md mb-8"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between py-4"> <a href="/" class="text-xl font-bold text-primary transition-colors duration-300 hover:text-secondary">Soccer Tracker</a> <!-- Hamburger menu button (visible on small screens) --> <button id="menuBtn" class="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <!-- Navigation links (hidden on small screens, visible on medium and larger) --> <div${addAttribute(["md:flex", "space-x-4", "bg-white", "rounded", "p-4", "w-full", "md:w-auto", "transition-all", "duration-300", "ease-in-out", { "hidden": true }, { "flex": showMenu }, "md:justify-center", "items-center", "font-sans"], "class:list")}> <a href="/"${addAttribute(`${currentPath === "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block transition-colors duration-300`, "class")}>
Training Log
</a> <a href="/calendar"${addAttribute(`${currentPath === "/calendar" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block transition-colors duration-300`, "class")}>
Calendar
</a> <a href="/motivation"${addAttribute(`${currentPath === "/motivation" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block`, "class")}>
Motivation
</a> <a href="/readiness"${addAttribute(`${currentPath === "/readiness" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block`, "class")}>
Readiness
</a> <a href="/notes"${addAttribute(`${currentPath === "/notes" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block`, "class")}>
Notes
</a> <a href="/suggested"${addAttribute(`${currentPath === "/suggested" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block`, "class")}>
Soccer Training
</a> <a href="/gym"${addAttribute(`${currentPath === "/gym" ? "text-blue-600" : "text-gray-600"} hover:text-blue-800 block md:inline-block`, "class")}>
Gym Workouts
</a> </div> </div> </div> </nav> ${renderScript($$result, "/home/project/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/Navigation.astro", void 0);

export { $$Navigation as $ };
