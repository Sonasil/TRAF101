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
          <img src="/logo.png" alt="Test2Drive" class="logo-icon" />
        </RouterLink>
        <div class="nav-links">
          <RouterLink to="/" :class="{ active: route.path === '/' }">Home</RouterLink>
          <RouterLink to="/study" :class="{ active: route.path.startsWith('/study') }">Study</RouterLink>
          <RouterLink to="/scenarios" :class="{ active: route.path === '/scenarios' }">Scenarios</RouterLink>
          <RouterLink to="/history" :class="{ active: route.path === '/history' }">History</RouterLink>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Developed by</h4>
          <p>Asil Türkmen (21330934)</p>
          <p>Arda Günsüren (21330887)</p>
        </div>
        <div class="footer-section footer-logo">
          <img src="/emu-logo.png" alt="Eastern Mediterranean University" class="university-logo" />
        </div>
        <div class="footer-section">
          <h4>Course Information</h4>
          <p>TRAF101 - Traffic Safety</p>
          <p>Instructor: Assoc.Prof.Dr Metin Kurt</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Test2Drive. Practice. Evaluate. Drive Safe.</p>
      </div>
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
  height: 32px;
  width: auto;
  display: block;
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

.footer-content {
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: center;
}

.footer-section h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-section p {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  margin: 0.5rem 0;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.footer-bottom p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.university-logo {
  height: 100px;
  width: auto;
  object-fit: contain;
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
