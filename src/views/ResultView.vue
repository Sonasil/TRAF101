<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quiz';

const PASSING_SCORE_PERCENTAGE = 70;

const store = useQuizStore();
const router = useRouter();

onMounted(() => {
  if (store.questions.length === 0) {
    router.push('/');
  }
});

const score = computed(() => store.score);
const percentage = computed(() => Math.round((store.score / store.totalQuestions) * 100));
const passed = computed(() => {
  if (store.totalQuestions === 0) return false;
  return percentage.value >= PASSING_SCORE_PERCENTAGE;
});

const incorrectAnswers = computed(() => {

  return store.questions.map((q, index) => {
    const userAnswer = store.userAnswers[index];
    const isCorrect = q.correctOptionIds.includes(userAnswer);
    if (!isCorrect) {
      return {
        ...q,
        userAnswerId: userAnswer,
        userAnswerText: q.options.find(o => o.id === userAnswer)?.text || 'Skipped',
        correctAnswerText: q.options.find(o => q.correctOptionIds.includes(o.id))?.text
      };
    }
    return null;
  }).filter(q => q !== null);
});

const restart = () => {
  store.reset();
  router.push('/');
};
</script>

<template>
  <div class="result-container">
    <div class="score-card" :class="{ passed: passed, failed: !passed }">
      <div class="icon">{{ passed ? '🎉' : '⚠️' }}</div>
      <h1>{{ passed ? 'Ready for Traffic!' : 'More Practice Needed' }}</h1>
      <div class="score-circle">
        <span class="score-number">{{ percentage }}%</span>
        <span class="score-label">Score</span>
      </div>
      <p class="feedback-text">
        {{ passed 
          ? 'You have demonstrated a good understanding of the rules.' 
          : 'Please review the driving rules and signs before hitting the road.' }}
      </p>
      <button @click="restart" class="restart-btn">Take Another Test</button>
    </div>

    <div class="review-section" v-if="incorrectAnswers.length > 0">
      <h3>Review Incorrect Answers</h3>
      <div class="review-card" v-for="q in incorrectAnswers" :key="q.id">
        <p class="question">{{ q.prompt }}</p>
        <div class="answer wrong">❌ {{ q.userAnswerText }}</div>
        <div class="answer correct">✅ {{ q.correctAnswerText }}</div>
        <p class="explanation">💡 {{ q.explanation }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
}

.score-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.score-card.passed { border-top: 5px solid var(--color-success); }
.score-card.failed { border-top: 5px solid var(--color-danger); }

.icon { font-size: 3rem; margin-bottom: 0.75rem; }
.score-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 6px solid var(--color-bg-dim);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem auto;
  font-weight: bold;
}

.score-card.passed .score-circle { border-color: var(--color-success); color: var(--color-success); }
.score-card.failed .score-circle { border-color: var(--color-danger); color: var(--color-danger); }

.score-number { font-size: 3rem; line-height: 1; }
.score-label { font-size: 1rem; text-transform: uppercase; color: var(--color-text-muted); }

.restart-btn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 2rem;
  transition: transform 0.2s;
}

.restart-btn:hover { transform: scale(1.05); }

.review-section h3 { margin-bottom: 1.5rem; text-align: center; }

.review-card {
  background: rgba(255,255,255,0.03);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border-left: 4px solid var(--color-danger);
}

.question { font-weight: 600; margin-bottom: 1rem; }
.answer { margin-bottom: 0.5rem; }
.answer.wrong { color: var(--color-danger); opacity: 0.8; }
.answer.correct { color: var(--color-success); font-weight: 500; }
.explanation { font-size: 0.9rem; color: var(--color-text-muted); margin-top: 1rem; font-style: italic; }
</style>
