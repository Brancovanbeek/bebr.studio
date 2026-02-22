<script>
  import { onMount } from "svelte";

  onMount(() => {
    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.menu-open');
    const currentPath = window.location.pathname;
    const mobileLinks = document.querySelectorAll('.link-list a');

    // voor elke selector met het attribute href -> als dat gelijk staat aan de huidge pagina voeg dan de classlist is-current toe.
    mobileLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('is-current');
      }
    });

    menu.addEventListener('click', () => {
      menuOpen.classList.toggle('active');
      if (menuOpen.classList.contains('active')) {
        menu.textContent = 'Sluit';
      } else {
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
        <li><a class="heading-l" href="/">Home</a></li>
        <li><a class="heading-l" href="/work">Werk</a></li>
        <li><a class="heading-l" href="/about">Over ons</a></li>
        <li><a class="heading-l" href="/blog">Blog</a></li>
      </ul>
      <div class="contact-wrap">
        <a href="/" class="cta-mobile heading-m">Start een project</a>
      </div>
    </nav>
  </div>
</header>

<style>
  .header {
    padding: var(--space-6) 0;
    color: var( --color-gray-100);
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
    transform: translate3d(0, -100%, 0);
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 9;
    padding: var(--space-4) 0;
    background-color: var(--color-black);
    padding-top: var(--space-24);
    transition: transform 0.5s cubic-bezier(0.8, 0, 0.2, 1) 0.4s;
    & nav {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      justify-content: space-between;
      height: 100%;
      & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        & li {
          & a {
            padding: var(--space-6) var(--space-6);
            width: 100%;
            display: block;
            border-top: 1px solid var(--color-gray-900);
            text-decoration: none;
            line-height: var(--line-height-normal);
          }
        }
      }
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  .menu-open:global(.active) {
    transform: translate3d(0, 0, 0);
    pointer-events: auto;
    transition-delay: 0s;
  }
  .link-list :global(a.is-current) {
    color: var(--color-gray-500);
  }

  .link-list {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }

  .menu-open:global(.active) .link-list {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(.53,1.16,.96,.98) 0.4s;
  }
 

  .cta-mobile {
    text-decoration: none;
    position: relative;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    &::after {
      content: '';
      display: inline-block;
      width: 100%;
      border-top: 1px solid var(--color-border);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .menu-open:global(.active) .cta-mobile {
    opacity: 1;
    transition: opacity 0.5s ease-out 0.3s;
  }

  .cta {
    display: none;
    position: relative;
    mix-blend-mode: difference;
    overflow: hidden;
    @media (min-width: 768px) {
      display: block;
    }
  }

  .cta::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: white;
  }

  .cta:hover::after,
  .cta:focus::after {
    animation: wipe 600ms ease-in-out;
  }

  @keyframes wipe {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100%);
    }
    51% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .contact-wrap {
    padding-left: var(--space-6);
    padding-bottom: var(--space-16);
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
    color: var( --color-gray-100);
  }
  .logo {
    font-weight: var(--font-weight-bold);
    text-decoration: none;
    z-index: 10;
    mix-blend-mode: difference;
    color: var( --color-white);
  }
</style>

