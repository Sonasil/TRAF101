<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="history-view">
    <div class="container">
      <div class="header-section">
        <h1>Test History</h1>
        <p class="subtitle">Track your progress and review past performance</p>
      </div>

      <div class="empty-state">
        <div class="empty-icon">📊</div>
        <h2>No History Yet</h2>
        <p>Take your first practice test to start tracking your progress!</p>
        <div class="action-buttons">
          <RouterLink to="/quiz" class="btn btn-primary">Start Practice Test</RouterLink>
          <RouterLink to="/" class="btn btn-secondary">Back to Home</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history-view {
  min-height: 80vh;
  background: var(--color-bg);
  padding: var(--spacing-3xl) var(--spacing-md);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.header-section h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
}

.empty-state {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-xl);
  text-align: center;
  box-shadow: var(--shadow-lg);
  max-width: 550px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  opacity: 0.6;
}

.empty-state h2 {
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.empty-state p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
}

.action-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .action-buttons {
    flex-direction: column;
  }
  
  .action-buttons .btn {
    width: 100%;
  }
}
</style>
