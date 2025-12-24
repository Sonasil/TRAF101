<script setup>
import { computed } from 'vue';

const props = defineProps({
  results: {
    type: Object,
    required: true
  }
});

const passClass = computed(() => props.results.passed ? 'pass' : 'fail');
</script>

<template>
  <div class="results-summary">
    <div class="score-card" :class="passClass">
      <h1>{{ results.percentage }}%</h1>
      <h2>{{ results.passed ? 'PASSED' : 'FAILED' }}</h2>
      <p>{{ results.correctCount }} correct out of {{ results.total }}</p>
    </div>
    
    <div class="categories">
      <!-- We could compute category breakdown here -->
    </div>
  </div>
</template>

<style scoped>
.results-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.score-card {
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  background: #f8f9fa;
  width: 100%;
  max-width: 350px;
  border: 4px solid transparent;
}

.score-card.pass {
  background: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.score-card.fail {
  background: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

h1 {
  font-size: 3rem;
  margin: 0;
  line-height: 1;
}

h2 {
  font-size: 2rem;
  margin: 0.5rem 0;
}
</style>
