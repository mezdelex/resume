<template>
  <div class="page p-col-12 p-sm-12 p-md-11">
    <router-view />
    <scroll-top />
  </div>
</template>

<style>
:root {
  --custom-background: #282828;
  --custom-black: black;
  --custom-blue: #7daea3;
  --custom-green: green;
  --custom-orange: orange;
  --custom-pale-orange: #f8ca57;
}

body {
  background: black;
  margin: 0;
}

a:active,
a:link,
a:visited {
  background-color: transparent;
  color: orange;
  text-decoration: none;
}

a:hover {
  color: rgb(255, 201, 101);
  background-color: transparent;
  text-decoration: none;
}

footer {
  align-items: center;
  animation: fadeInUp 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95) forwards;
  color: var(--custom-blue);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.7rem;
  justify-content: center;
  margin-top: 2rem;
}

header {
  animation: fadeInDown 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95) forwards;
  background: var(--custom-black);
  margin-bottom: 2rem;
}

li {
  color: orange;
}

main {
  animation: fadeInUp 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95) forwards;
}

ul {
  list-style: none;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
  padding-right: 0.3rem;
  padding-top: 0;
}

.accordionText {
  color: var(--custom-orange);
}

.attribution {
  color: var(--custom-orange);
  font-size: 0.6rem;
  font-weight: 600;
}

.attribution:hover {
  color: var(--quinary-text);
}

.cardHover,
.linkHover {
  color: var(--custom-green);
  font-family: sans-serif;
  transform: scale3d(1, 1, 1);
  transition: transform 0.5s ease;
}

.cardHover:hover,
.linkHover:hover {
  color: var(--custom-orange);
  transform: scale3d(1.1, 1.1, 1.1);
}

.curly-brackets {
  color: var(--custom-green);
}

.custom-info {
  color: var(--custom-blue);
  font-size: x-small;
  font-weight: 600;
}

.custom-link-wrapper {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}

.custom-list-item {
  margin: 0.75rem 2rem 0.75rem 2rem;
}

.custom-projects {
  font-size: larger;
  margin-inline: 0.25rem;
}

.custom-date {
  color: var(--custom-green);
  margin-right: 0.5rem;
}

.custom-link,
.custom-message {
  color: var(--custom-green);
}

.custom-message-container {
  margin-top: 0.2rem;
  text-align: center;
}

.custom-marker {
  align-items: center;
  background-color: var(--custom-background);
  border-radius: 5rem;
  color: var(--custom-blue);
  display: flex;
  height: 1rem;
  justify-content: center;
  padding: 0.5rem;
  width: 1rem;
  z-index: 1;
}

.custom-social-icon {
  background-color: var(--custom-orange);
  border-radius: 50%;
  color: var(--custom-black);
  height: 1.588rem;
  padding: 0.3rem;
  width: 1.601rem;
}

.custom-social-icon:hover {
  background-color: var(--custom-pale-orange);
}

.date-and-link {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.description-field {
  height: 15rem;
}

.dot-spin {
  animation: dot-spin 1s infinite linear;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 -18px 0 0 var(--custom-blue),
    12.727926px -12.727926px 0 0 var(--custom-blue),
    18px 0 0 0 var(--custom-blue),
    12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
  color: transparent;
  height: 10px;
  position: relative;
  width: 10px;
}

.fieldsetHover {
  margin: 0.5rem 0 0.5rem 0;
  transform: scale3d(1, 1, 1);
  transition: transform 0.5s ease;
}

.fieldsetHover:hover {
  transform: scale3d(1.03, 1.03, 1.03);
}

.github {
  align-items: center;
  color: var(--custom-blue);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: sans-serif;
  font-size: 0.7rem;
  margin: 1rem 0 0.5rem 0;
  max-width: 20rem;
}

.img-field {
  height: 13rem;
  margin-top: 0.4rem;
  width: 23rem;
}

.last-update {
  color: var(--custom-blue);
  font-size: xx-small;
  font-weight: 600;
  margin-left: 1.8rem;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
  color: var(--custom-green);
}

.p-accordion
  .p-accordion-header:not(.p-disabled).p-highlight
  .p-accordion-header-link {
  background: var(--custom-orange);
  border-color: var(--custom-orange);
}

.p-accordion .p-accordion-header .p-accordion-header-link:hover {
  background: var(--custom-orange);
}

.p-button.p-button-icon-only {
  border-radius: 0.5rem;
}

.p-card {
  border-radius: 1rem;
  height: 39rem;
  width: 23rem;
}

.p-card .p-card-body {
  padding-inline: 0;
}

.p-card .p-card-title {
  background: var(--custom-background);
  color: var(--custom-green);
  font-size: larger;
  font-weight: 600;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  text-align: center;
}

.p-card .p-card-content {
  color: var(--custom-orange);
  margin-inline: 2rem;
  padding: 0;
}

.p-fieldset {
  border-radius: 0.5rem;
}

.p-fieldset .p-fieldset-content {
  font-size: small;
  padding: 0;
}

.p-fieldset .p-fieldset-legend {
  color: var(--custom-green);
  padding: 0.3rem 0.5rem 0.5rem 0.5rem;
}

.p-fieldset-legend-text {
  color: var(--custom-green);
}

.p-scrolltop {
  background: orange !important;
}

.page {
  margin: auto;
}

.selfie {
  border-radius: 1rem;
  display: block;
  margin: 1rem auto 2rem auto;
  max-height: 200px;
}

.social {
  margin-top: 1rem;
}

.social > .pi {
  font-size: 2.2rem;
}

.socialLink {
  transform: scale3d(1, 1, 1);
  transition: transform 0.5s ease;
}

.socialLink:hover {
  transform: scale3d(1.3, 1.3, 1.3);
}

.software-developer {
  color: var(--custom-green);
}

.subTitle {
  font-family: sans-serif;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
  margin: 0;
}

.text-small {
  font-size: xx-small;
  margin-inline: 0.1rem;
}

.title {
  color: var(--custom-orange);
  font-family: sans-serif;
  font-size: 1.5rem;
  margin: 0;
}

@keyframes dot-spin {
  0%,
  100% {
    box-shadow: 0 -18px 0 0 var(--custom-blue),
      12.727926px -12.727926px 0 0 var(--custom-blue),
      18px 0 0 0 var(--custom-blue),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 0 var(--custom-blue),
      18px 0 0 0 var(--custom-blue),
      12.727926px 12.727926px 0 0 var(--custom-blue),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 0 var(--custom-blue),
      12.727926px 12.727926px 0 0 var(--custom-blue),
      0 18px 0 0 var(--custom-blue),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 0 var(--custom-blue),
      0 18px 0 0 var(--custom-blue),
      -12.727926px 12.727926px 0 0 var(--custom-blue),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 0 var(--custom-blue),
      -12.727926px 12.727926px 0 0 var(--custom-blue),
      -18px 0 0 0 var(--custom-blue),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 var(--custom-blue),
      -18px 0 0 0 var(--custom-blue),
      -12.727926px -12.727926px 0 0 var(--custom-blue);
  }

  75% {
    box-shadow: 0 -18px 0 0 var(--custom-blue),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 0 var(--custom-blue),
      -12.727926px -12.727926px 0 0 var(--custom-blue);
  }

  87.5% {
    box-shadow: 0 -18px 0 0 var(--custom-blue),
      12.727926px -12.727926px 0 0 var(--custom-blue),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 0 var(--custom-blue);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
