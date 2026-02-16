<script>
  import { onMount } from "svelte";

  onMount(() => {
    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.menu-open');

    menu.addEventListener('click', () => {
      menuOpen.classList.toggle('active');
      if (menuOpen.classList.contains('active')) {
        menuOpen.style.display = 'block';
        menu.textContent = 'Sluit';
      } else {
        menuOpen.style.display = 'none';
        menu.textContent = 'Menu';
      }
    });
  });
 
</script>

<header class="header">
  <div class="container nav-wrapper">
    <a href="/" class="logo heading-m">bebr.studio</a>
    <nav class="nav-main">
      <ul class="nav-links body">
        <li><a href="/work">Werk</a></li>
        <li><a href="/about">Over ons</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
    <button class="menu">Menu</button>
    <a href="/" class="cta body">Start een project</a>
  </div>

  <div class="menu-open">
    <nav>
      <ul class="link-list">
        <li><a href="/">Home</a></li>
        <li><a href="/work">Werk</a></li>
        <li><a href="/about">Over ons</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      <div class="contact-wrap">
        <a href="/" class="cta-mobile">Start een project</a>
      </div>
    </nav>
  </div>
</header>

<style>
  .header {
    padding: var(--space-6) 0;
    color: white;
  }
  .nav-main {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  .menu {
    display: block;
    font-size: 1.1rem;
    color: white;
    z-index: 10;
    mix-blend-mode: difference;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .menu-open {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9;
    padding: var(--space-6);
    background-color: var(--color-black);
    padding-top: var(--space-24);
    & nav {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      mix-blend-mode: difference;
    }
    &.active {
      display: block;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  .cta {
    position: relative;
    display: none;
        mix-blend-mode: difference;
    &::after {
      content: '';
      display: inline-block;
      width: 100%;
      border-top: 1px solid var(--color-border);
      position: absolute;
      bottom: 0;
      left: 0;
    }
    @media (min-width: 768px) {
      display: block;
    }
  }
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    display: flex;
    gap: var(--space-8);
    list-style: none;
    mix-blend-mode: difference;
  }
  .logo {
    font-weight: var(--font-weight-bold);
    text-decoration: none;
    z-index: 10;
    mix-blend-mode: difference;
  }
</style>

