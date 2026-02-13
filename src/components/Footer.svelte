<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-info">
      <p class="heading-s">bebr.studio</p>
      <p class="muted">© {new Date().getFullYear()} — Built with Astro</p>
    </div>
    <div class="footer-links muted">
      <a href="https://instagram.com" target="_blank">Instagram</a>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    padding: var(--space-16) 0 var(--space-8);
    margin-top: auto; /* Duwt footer omlaag in een flex-container */
    border-top: 1px solid var(--color-border);
  }
  .footer-grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .footer-links {
    display: flex;
    gap: var(--space-6);
  }
</style>