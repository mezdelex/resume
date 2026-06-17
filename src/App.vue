<template>
  <div class="page">
    <router-view />
    <scroll-top />
  </div>
</template>

<style>
:root {
  --bg-primary: #1e2326;
  --bg-secondary: #2b3339;
  --bg-card: rgba(43, 51, 57, 0.7);
  --accent: #a7c080;
  --accent-hover: #b8d39a;
  --accent-warm: #dbbc7f;
  --text-primary: #d3c6aa;
  --text-secondary: #a6b0a0;
  --text-muted: #7a8478;
  --border: rgba(255, 255, 255, 0.06);
  --border-hover: rgba(255, 255, 255, 0.12);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 20px rgba(167, 192, 128, 0.15);
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  background: var(--bg-primary);
  background-image: radial-gradient(
      ellipse 80% 50% at 50% -20%,
      rgba(167, 192, 128, 0.08),
      transparent
    ),
    radial-gradient(ellipse 50% 30% at 80% 20%, rgba(219, 188, 127, 0.06), transparent);
  margin: 0;
  min-height: 100vh;
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  background-color: transparent;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent-hover);
}

footer {
  align-items: center;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  font-family: var(--font);
  font-size: 0.75rem;
  justify-content: center;
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--border);
}

header {
  animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  margin-bottom: 2rem;
  padding-top: 1rem;
}

main {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.attribution {
  color: var(--text-muted);
  font-size: 0.6rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.attribution:hover {
  color: var(--accent);
}

.linkHover {
  color: var(--accent);
  transition: color 0.2s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.linkHover:hover {
  color: var(--accent-hover);
  transform: translateY(-2px);
}

.curly-brackets {
  color: var(--accent-warm);
  font-weight: 300;
}

.custom-date {
  color: #7fbbb3;
  font-weight: 600;
  margin-right: 0.5rem;
}

.custom-link {
  color: var(--accent);
}

.custom-message {
  color: #7fbbb3;
}

.custom-message-container {
  margin-top: 0.25rem;
  text-align: center;
}

.date-and-link {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.description-field {
  line-height: 1.6;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.dot-spin {
  animation: dot-spin 1s infinite linear;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 0 var(--accent),
    18px 0 0 0 var(--accent), 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
  color: transparent;
  height: 10px;
  position: relative;
  width: 10px;
}

.github {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 400;
  margin: 1.25rem auto 0.5rem;
  max-width: 24rem;
  text-align: center;
}

.card-image-link {
  background: var(--bg-secondary);
  display: block;
  height: 14rem;
}

.img-field {
  display: block;
  height: 100%;
  object-fit: fill;
  width: 100%;
}

.last-update {
  color: var(--text-muted);
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.5rem 1rem 0.25rem;
}

.p-card {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  height: 40rem;
  max-width: 23rem;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease,
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}

.p-card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-card), var(--shadow-glow);
  transform: translateY(-4px);
}

.p-card .p-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  padding: 0;
}

.p-card .p-card-title {
  background: rgba(167, 192, 128, 0.08);
  color: var(--accent);
  flex-shrink: 0;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  text-align: center;
  letter-spacing: -0.01em;
}

.p-card .p-card-content {
  color: var(--text-secondary);
  flex: 1;
  margin-inline: 1.25rem;
  min-height: 0;
  overflow: hidden;
  padding: 0.5rem 0 1.25rem;
}

.p-card .p-card-footer {
  flex-shrink: 0;
  padding: 1.5rem;
}

.p-scrolltop {
  background: var(--accent) !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 12px rgba(167, 192, 128, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.p-scrolltop:hover {
  box-shadow: 0 6px 20px rgba(167, 192, 128, 0.4);
  transform: scale(1.1);
}

.page {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 0.75rem;
}

@media (max-width: 640px) {
  .page {
    padding: 0 0.5rem;
  }
}

.selfie {
  border-radius: var(--radius-md);
  border: 3px solid var(--border);
  box-shadow: 0 0 30px rgba(129, 140, 248, 0.1);
  display: block;
  height: auto;
  margin: 2rem auto 1rem;
  max-height: 200px;
  max-width: 200px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: auto;
}

.selfie:hover {
  border-color: var(--accent);
  box-shadow: 0 0 40px rgba(129, 140, 248, 0.2);
}

.social {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.socialLink {
  color: var(--text-secondary);
  font-size: 2.2rem;
  line-height: 1;
  transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.socialLink:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.software-developer {
  background: linear-gradient(135deg, var(--accent), var(--accent-warm));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.subTitle {
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0 0 0.25rem;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.text-small {
  font-size: 0.65rem;
  margin-inline: 0.1rem;
  vertical-align: middle;
}

.title {
  color: var(--text-primary);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0;
}

@keyframes dot-spin {
  0%,
  100% {
    box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 0 var(--accent),
      18px 0 0 0 var(--accent), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 0 var(--accent),
      18px 0 0 0 var(--accent), 12.727926px 12.727926px 0 0 var(--accent),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 var(--accent),
      12.727926px 12.727926px 0 0 var(--accent), 0 18px 0 0 var(--accent),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 0 var(--accent), 0 18px 0 0 var(--accent),
      -12.727926px 12.727926px 0 0 var(--accent), -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 var(--accent),
      -12.727926px 12.727926px 0 0 var(--accent), -18px 0 0 0 var(--accent),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }

  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 var(--accent), -18px 0 0 0 var(--accent),
      -12.727926px -12.727926px 0 0 var(--accent);
  }

  75% {
    box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 0 var(--accent), -12.727926px -12.727926px 0 0 var(--accent);
  }

  87.5% {
    box-shadow: 0 -18px 0 0 var(--accent), 12.727926px -12.727926px 0 0 var(--accent),
      18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 var(--accent);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-24px) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
