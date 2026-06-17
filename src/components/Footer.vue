<template>
  <footer class="app-footer">
    <span class="footer-text">To Vim or not to Vim</span>
    <a href="https://www.flaticon.com/authors/kerismaker" class="attribution" target="_blank">
      favicon by kerismaker
    </a>
  </footer>
</template>

<style scoped>
.app-footer {
  align-items: center;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  font-family: var(--font);
  font-size: 0.75rem;
  font-style: italic;
  justify-content: center;
  letter-spacing: 0.03em;
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--border);
}

.footer-text {
  margin-bottom: 0.5rem;
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
</style>
