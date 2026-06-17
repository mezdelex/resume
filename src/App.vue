<template>
  <div class="page">
    <router-view />
    <scroll-top />
  </div>
</template>

<style>
:root {
  --accent-hover: #b8d39a;
  --accent-warm: #dbbc7f;
  --accent: #a7c080;
  --bg-card: rgba(43, 51, 57, 0.7);
  --bg-primary: #1e2326;
  --bg-secondary: #2b3339;
  --border-hover: rgba(255, 255, 255, 0.12);
  --border: rgba(255, 255, 255, 0.06);
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  --radius-lg: 1.5rem;
  --radius-md: 1rem;
  --radius-sm: 0.5rem;
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 20px rgba(167, 192, 128, 0.15);
  --text-muted: #7a8478;
  --text-primary: #d3c6aa;
  --text-secondary: #a6b0a0;
}

* {
  box-sizing: border-box;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-image: radial-gradient(
      ellipse 80% 50% at 50% -20%,
      rgba(167, 192, 128, 0.08),
      transparent
    ),
    radial-gradient(ellipse 50% 30% at 80% 20%, rgba(219, 188, 127, 0.06), transparent);
  background: var(--bg-primary);
  font-family: var(--font);
  margin: 0;
  min-height: 100vh;
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

.p-scrolltop {
  background: var(--accent) !important;
  border-radius: 50% !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.p-scrolltop:hover {
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
