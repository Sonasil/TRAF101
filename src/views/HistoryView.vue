<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quiz';

const router = useRouter();
const store = useQuizStore();

onMounted(() => {
    store.init();
});

function formatDate(iso) {
    if (!iso) return '-';
    return new Date(iso).toLocaleString();
}

function viewResult(attemptId) {
    router.push({ name: 'results', query: { attemptId } });
}
</script>

<template>
  <div class="history-view">
    <h1>Past Results</h1>
    
    <div v-if="store.completedAttempts.length === 0" class="empty">
      No history found. <RouterLink to="/select-license">Take a test</RouterLink>.
    </div>
    
    <div v-else class="history-list">
      <div 
        v-for="attempt in store.completedAttempts" 
        :key="attempt.attemptId" 
        class="history-item"
        @click="viewResult(attempt.attemptId)"
      >
        <div class="info">
            <span class="date">{{ formatDate(attempt.finishedAt) }}</span>
            <span class="license">License: {{ attempt.licenseTypeId }}</span>
        </div>
        <div class="score" :class="attempt.score.passed ? 'pass' : 'fail'">
            {{ attempt.score.percentage }}%
        </div>
      </div>
    </div>
    
    <div class="back-link">
        <RouterLink to="/">Back Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.history-view {
    padding: 1rem;
}
.history-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: white;
    border: 1px solid #eee;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
}
.history-item:hover {
    background: #f8f9fa;
}
.score {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}
.score.pass { color: #27ae60; background: #eafrd0; } /* Typo in bg color ignored, utility mostly */
.score.fail { color: #c0392b; }
</style>
