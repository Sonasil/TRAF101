<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quiz';

const route = useRoute();
const router = useRouter();
const quizStore = useQuizStore();

const licenseType = route.params.licenseType;

onMounted(() => {
  if (licenseType) {
    quizStore.startQuiz(licenseType);
  } else {
    router.push('/');
  }
});

const currentQuestion = computed(() => quizStore.currentQuestion);
const progress = computed(() => quizStore.progress);

const handleOptionSelect = (optionId) => {
  quizStore.submitAnswer(optionId);
  if (quizStore.isFinished) {
    router.push('/results');
  }
};
</script>

<template>
  <div class="quiz-container" v-if="currentQuestion">
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progress + '%' }"></div>
    </div>
    
    <div class="header-info">
      <span class="badge">{{ licenseType }} License Test</span>
      <span class="counter">Question {{ quizStore.currentQuestionIndex + 1 }} / {{ quizStore.totalQuestions }}</span>
    </div>

    <div class="question-card">
      <div class="category-tag">{{ currentQuestion.category }}</div>
      <h2 class="question-text">{{ currentQuestion.prompt }}</h2>

      <div class="options-grid">
        <button 
          v-for="option in currentQuestion.options" 
          :key="option.id"
          class="option-btn"
          @click="handleOptionSelect(option.id)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>
  </div>
  <div v-else class="loading">
    Loading Test...
  </div>
</template>

<style scoped>
.quiz-container {
  max-width: 750px;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--color-bg-tertiary);
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.header-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
}

.badge {
  background: var(--color-bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
}

.question-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.5s ease;
}

.category-tag {
  color: var(--color-accent);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-weight: 700;
}

.question-text {
  font-size: 1.375rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option-btn {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  padding: 1.125rem;
  border-radius: var(--radius-lg);
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-base);
  color: var(--color-text);
  font-weight: 500;
}

.option-btn:hover {
  background: white;
  border-color: var(--color-primary);
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.loading {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--color-text-muted);
}
</style>
