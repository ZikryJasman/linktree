<script setup>
import { useHead } from "#imports";
const props = defineProps({
  appName: {
    type: String,
    default: "Nuxt",
  },
  version: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Linktree",
  },
  readDocs: {
    type: String,
    default:
      "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework.",
  },
  followTwitter: {
    type: String,
    default:
      "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips.",
  },
  starGitHub: {
    type: String,
    default:
      "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source.",
  },
});
useHead({
  title: "Liktree TechZikry",
  meta: [{ name: "description", content: "Linktree Zikry" }],
  bodyAttrs: {
    class: "test",
  },
  script: [],
  style: [
    {
      children: `@property --gradient-angle{syntax:'<angle>';inherits:false;initial-value:180deg}@keyframes gradient-rotate{0%{--gradient-angle:0deg}100%{--gradient-angle:360deg}}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2,h3{margin:0}h1,h2,h3{font-size:inherit;font-weight:inherit}img{border-style:solid;max-width:100%;height:auto}svg,img{display:block;vertical-align:middle}ul{list-style:none;margin:0;padding:0}`,
    },
  ],
});
</script>
<template>
  <div
    class="antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base"
  >
    <div class="flex-1 flex flex-col gap-y-16 py-14 w-full sm:w-auto">
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <!-- <a href="https://nuxt.com" target="_blank"
          > -->
          <img
            class="object-cover rounded-full"
            src="/imgs/user.png"
            style="width: 80px;"
            alt="Akun TechZikry"
          />
      <!-- </a> -->
        <h1
          class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center"
        >
          TechZikry
        </h1>
      </div>
      <div class="max-w-[960px] px-5 flex-col mx-auto">
        <!-- <a
          href="https://www.linkedin.com/in/muhammad-zikry-jasman-367a4b1a5/"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img
            class="object-cover"
            src="/imgs/portofolio.svg"
            alt="gambar portofolio"
          />
          <h3 class="text-lg font-semibold">Portofolio</h3>
        </a> -->
        <a
          href="https://saweria.co/techzikry"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img
            class="object-cover"
            src="/imgs/saweria.svg"
            alt="akun saweria"
          />
          <h3 class="text-lg font-semibold">Donasi Saweria</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-zikry-jasman-367a4b1a5/"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img
            class="object-cover"
            src="/imgs/linkedin.svg"
            alt="Akun linkedin"
          />
          <h3 class="text-lg font-semibold">LinkedIn</h3>
        </a>
        <a
          href="https://github.com/ZikryJasman"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img class="object-cover" src="/imgs/github.svg" alt="Akun github" />
          <h3 class="text-lg font-semibold">Github</h3>
        </a>
        <a
          href="https://www.instagram.com/zikryjasman/"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img
            class="object-cover"
            src="/imgs/instagram.svg"
            alt="Akun instagram"
          />
          <h3 class="text-lg font-semibold">Instagram</h3>
        </a>
        <a
          href="https://www.youtube.com/@TechZikry"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img
            class="object-cover"
            src="/imgs/youtube.svg"
            alt="Akun youtube"
          />
          <h3 class="text-lg font-semibold">Youtube</h3>
        </a>
        <a
          href="https://www.tiktok.com/@techzikry?lang=id-ID"
          target="_blank"
          type="button"
          class="w-full gap-3 sm:w-auto text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 me-2 mb-4"
        >
          <img class="object-cover" src="/imgs/tiktok.svg" alt="Akun tiktok" />
          <h3 class="text-lg font-semibold">Tiktok</h3>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (prefers-color-scheme: light) {
  .get-started-gradient-border {
    background: linear-gradient(to right, #ffffff, #ffffff),
      linear-gradient(to right, #00dc82, #1de0b1, #36e4da);
  }

  .gradient-border-modules {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(247, 209, 76),
      rgba(247, 209, 76, 0.6),
      rgba(255, 255, 255, 0.8),
      rgba(247, 209, 76)
    );
  }

  .gradient-border-examples {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(141, 234, 255),
      rgba(141, 234, 255, 0.6),
      rgba(255, 255, 255, 0.8),
      rgba(141, 234, 255)
    );
  }

  .gradient-border-documentation {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(0, 220, 130),
      rgba(0, 220, 130, 0.6),
      rgba(255, 255, 255, 0.8),
      rgba(0, 220, 130)
    );
  }
}

@media (prefers-color-scheme: dark) {
  .get-started-gradient-border {
    background: linear-gradient(to right, #18181b, #18181b),
      linear-gradient(to right, #00dc82, #1de0b1, #36e4da);
  }

  .gradient-border-modules {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(247, 209, 76),
      rgba(163, 129, 8),
      rgba(255, 255, 255, 0.3),
      rgba(163, 129, 8)
    );
  }

  .gradient-border-examples {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(141, 234, 255),
      rgba(0, 138, 169),
      rgba(255, 255, 255, 0.3),
      rgba(0, 138, 169)
    );
  }

  .gradient-border-documentation {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(0, 220, 130),
      rgba(0, 63, 37),
      rgba(255, 255, 255, 0.2),
      rgba(0, 63, 37)
    );
  }
}

.get-started-gradient-border {
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-color: transparent;
  border-radius: 12px;
  border-width: 1px;
}

.get-started-gradient-border:hover
  > :is(.get-started-gradient-left, .get-started-gradient-right) {
  opacity: 0.2;
}

.get-started-gradient-left,
.get-started-gradient-right {
  opacity: 0;
}

.gradient-border {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 2px);
  border-radius: 12px;
  z-index: -1;
  transform: translate(-1px, -1px);
}

.gradient-border-rect {
  height: calc(100% + 2px);
}

@media (min-width: 1024px) {
  .gradient-border-rect {
    height: calc(100% + 1px);
  }
}

.gradient-border-square {
  height: calc(100% + 2px);
}

.modules-gradient-right {
  opacity: 0;
}

.modules-container:hover > .gradient-border,
.examples-container:hover > .gradient-border,
.documentation-container:hover > .gradient-border {
  opacity: 1;
  animation: gradient-rotate 5s cubic-bezier(0, 0, 1, 1) 0s infinite reverse;
  transition: all 0.3s linear;
}

.modules-container:hover > .modules-gradient-right {
  opacity: 0.2;
}

.examples-container:hover > .examples-gradient-right {
  opacity: 0.2;
}

.examples-gradient-right {
  opacity: 0;
}

.documentation-image-color-light,
.documentation-image-color-dark {
  display: none;
}

.modules-image-color-light,
.modules-image-color-dark {
  display: none;
}

.examples-image-color-light,
.examples-image-color-dark {
  display: none;
}

@media (prefers-color-scheme: light) {
  .modules-image-light {
    display: block;
  }

  .modules-image-dark {
    display: none;
  }

  .modules-container:hover > a > .modules-image-light {
    display: none;
  }

  .modules-container:hover > a > .modules-image-color-light {
    display: block;
  }

  .examples-image-light {
    display: block;
  }

  .examples-image-dark {
    display: none;
  }

  .examples-container:hover > a > .examples-image-light {
    display: none;
  }

  .examples-container:hover > a > .examples-image-color-light {
    display: block;
  }

  .documentation-image-light {
    display: block;
  }

  .documentation-image-dark {
    display: none;
  }

  .documentation-container:hover > a > div > .documentation-image-light {
    display: none;
  }

  .documentation-container:hover > a > div > .documentation-image-color-light {
    display: block;
  }
}

@media (prefers-color-scheme: dark) {
  .modules-image-dark {
    display: block;
  }

  .modules-image-light {
    display: none;
  }

  .modules-container:hover > a > .modules-image-color-dark {
    display: block;
  }

  .modules-container:hover > a > .modules-image-dark {
    display: none;
  }

  .examples-image-dark {
    display: block;
  }

  .examples-image-light {
    display: none;
  }

  .examples-container:hover > a > .examples-image-color-dark {
    display: block;
  }

  .examples-container:hover > a > .examples-image-dark {
    display: none;
  }

  .documentation-image-dark {
    display: block;
  }

  .documentation-image-light {
    display: none;
  }

  .documentation-container:hover > a > div > .documentation-image-color-dark {
    display: block;
  }

  .documentation-container:hover > a > div > .documentation-image-dark {
    display: none;
  }
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(238, 238, 238, var(--tw-bg-opacity));
}

.bg-gradient-to-r {
  background-image: -o-linear-gradient(left, var(--tw-gradient-stops));
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(var(--tw-gradient-stops))
  );
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.bg-gradient-to-l {
  background-image: -o-linear-gradient(right, var(--tw-gradient-stops));
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(var(--tw-gradient-stops))
  );
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}

.from-green-400 {
  --tw-gradient-from: rgba(55, 233, 144, var(--tw-from-opacity, 1));
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 255, 255, 0));
}

.from-blue-400 {
  --tw-gradient-from: rgba(56, 189, 248, var(--tw-from-opacity, 1));
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 255, 255, 0));
}

.from-yellow-400 {
  --tw-gradient-from: rgba(251, 191, 36, var(--tw-from-opacity, 1));
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 255, 255, 0));
}

.to-transparent {
  --tw-gradient-to: transparent;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgba(224, 224, 224, var(--tw-border-opacity));
}

.hover\:border-transparent:hover {
  border-color: transparent;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded {
  border-radius: 0.25rem;
}

.border {
  border-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.grid {
  display: -ms-grid;
  display: grid;
}

.hidden {
  display: none;
}

.flex-col {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.flex-col-reverse {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse;
}

.place-content-center {
  place-content: center;
}

.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.justify-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.flex-1 {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0%;
  -webkit-flex: 1 1 0%;
  flex: 1 1 0%;
}

.order-last {
  -webkit-box-ordinal-group: 10000;
  -webkit-order: 9999;
  -ms-flex-order: 9999;
  order: 9999;
}

.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

.h-32 {
  height: 8rem;
}

.h-\[70px\] {
  height: 70px;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.max-w-\[960px\] {
  max-width: 960px;
}

.min-h-screen {
  min-height: 100vh;
}

.p-1 {
  padding: 0.25rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.pt-\[58px\] {
  padding-top: 58px;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.inset-y-0 {
  top: 0;
  bottom: 0;
}

.inset-x-0 {
  right: 0;
  left: 0;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.-top-\[58px\] {
  top: -58px;
}

.-top-3 {
  top: -0.75rem;
}

.focus-visible\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
}

.text-center {
  text-align: center;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgba(66, 66, 66, var(--tw-text-opacity));
}

.hover\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.w-full {
  width: 100%;
}

.w-\[20\%\] {
  width: 20%;
}

.z-10 {
  z-index: 10;
}

.z-1 {
  z-index: 1;
}

.gap-6 {
  grid-gap: 1.5rem;
  gap: 1.5rem;
}

.gap-3 {
  grid-gap: 0.75rem;
  gap: 0.75rem;
}

.gap-x-4 {
  -webkit-column-gap: 1rem;
  -moz-column-gap: 1rem;
  grid-column-gap: 1rem;
  column-gap: 1rem;
}

.gap-y-16 {
  -webkit-row-gap: 4rem;
  -moz-row-gap: 4rem;
  grid-row-gap: 4rem;
  row-gap: 4rem;
}

.gap-y-4 {
  -webkit-row-gap: 1rem;
  -moz-row-gap: 1rem;
  grid-row-gap: 1rem;
  row-gap: 1rem;
}

.gap-y-2 {
  -webkit-row-gap: 0.5rem;
  -moz-row-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  row-gap: 0.5rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.col-span-2 {
  -ms-grid-column-span: span 2 / span 2;
  grid-column: span 2 / span 2;
}

.row-span-2 {
  -ms-grid-row-span: span 2 / span 2;
  grid-row: span 2 / span 2;
}

.transition-opacity {
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 0.15s;
  -o-transition-duration: 0.15s;
  transition-duration: 0.15s;
}

.duration-300 {
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

@media (min-width: 640px) {
  .sm\:flex-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .sm\:justify-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .sm\:h-34 {
    height: 8.5rem;
  }

  .sm\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .sm\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .sm\:min-h-\[220px\] {
    min-height: 220px;
  }

  .sm\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\:px-28 {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  .sm\:col-span-1 {
    -ms-grid-column-span: span 1 / span 1;
    grid-column: span 1 / span 1;
  }
}

@media (min-width: 768px) {
  .md\:min-h-\[180px\] {
    min-height: 180px;
  }
}

@media (min-width: 1024px) {
  .lg\:flex-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .lg\:order-none {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }

  .lg\:min-h-min {
    min-height: -webkit-min-content;
    min-height: -moz-min-content;
    min-height: min-content;
  }

  .lg\:py-7 {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }

  .lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .lg\:col-span-10 {
    -ms-grid-column-span: span 10 / span 10;
    grid-column: span 10 / span 10;
  }

  .lg\:col-span-6 {
    -ms-grid-column-span: span 6 / span 6;
    grid-column: span 6 / span 6;
  }

  .lg\:col-span-4 {
    -ms-grid-column-span: span 4 / span 4;
    grid-column: span 4 / span 4;
  }
}

@media (prefers-color-scheme: dark) {
  .dark\:bg-black {
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  }

  .dark\:bg-white\/10 {
    --tw-bg-opacity: 0.1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  }

  .dark\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(24, 24, 27, var(--tw-bg-opacity));
  }

  .dark\:border-transparent {
    border-color: transparent;
  }

  .dark\:border-gray-900 {
    --tw-border-opacity: 1;
    border-color: rgba(24, 24, 27, var(--tw-border-opacity));
  }

  .dark\:border-none {
    border-style: none;
  }

  .dark\:block {
    display: block;
  }

  .dark\:hidden {
    display: none;
  }

  .dark\:text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }

  .dark\:text-gray-300 {
    --tw-text-opacity: 1;
    color: rgba(189, 189, 189, var(--tw-text-opacity));
  }

  .dark\:hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }
}
</style>