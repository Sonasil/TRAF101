<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <nav class="nav-container">
        <RouterLink to="/" class="logo">TRNC Driving Safety</RouterLink>
        <div class="nav-links">
          <RouterLink to="/history">History</RouterLink>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="app-footer">
      <p>&copy; 2024 Traffic Safety TRNC. Drive Safely.</p>
    </footer>
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}

.nav-container {
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

.main-content {
  flex: 1;
  width: 100%;
}

.app-footer {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
