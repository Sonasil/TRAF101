<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <nav class="nav-container">
        <RouterLink to="/" class="logo">
          <span class="logo-icon"></span>
          <span class="logo-text">TRNC Driving</span>
        </RouterLink>
        <div class="nav-links">
          <RouterLink to="/" :class="{ active: route.path === '/' }">Home</RouterLink>
          <RouterLink to="/study" :class="{ active: route.path.startsWith('/study') }">Study</RouterLink>
          <RouterLink to="/history" :class="{ active: route.path === '/history' }">History</RouterLink>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="app-footer">
      <p>&copy; 2024 TRNC Driving Safety. Drive Safely.</p>
    </footer>
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Modern Glassmorphism Header */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(15, 76, 129, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Modern Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--color-primary);
  text-decoration: none;
  transition: all var(--transition-base);
}

.logo-icon {
  font-size: 1.75rem;
  filter: drop-shadow(0 2px 4px rgba(15, 76, 129, 0.2));
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.logo:hover {
  transform: translateY(-1px);
}

/* Modern Navigation Links */
.nav-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-links a {
  position: relative;
  padding: 0.625rem 1.25rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.nav-links a::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: -1;
}

.nav-links a:hover {
  color: var(--color-primary);
  background: rgba(15, 76, 129, 0.05);
}

.nav-links a.active {
  color: white;
}

.nav-links a.active::before {
  opacity: 1;
}

/* Main Content */
.main-content {
  flex: 1;
  width: 100%;
}

/* Modern Footer */
.app-footer {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(to top, var(--color-bg-secondary), var(--color-bg-light));
  font-size: 0.875rem;
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border-light);
}

/* Responsive */
@media (max-width: 640px) {
  .nav-container {
    padding: 0.75rem 1rem;
  }
  
  .logo-text {
    font-size: 1.125rem;
  }
  
  .nav-links {
    gap: 0.25rem;
  }
  
  .nav-links a {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
  }
}
</style>
