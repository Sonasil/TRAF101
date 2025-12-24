<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const scenarios = ref([]);
const currentIndex = ref(0);
const selectedAnswer = ref(null);
const showFeedback = ref(false);
const score = ref(0);
const quizComplete = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('/scenarios.json');
    const data = await response.json();
    scenarios.value = data.scenarios;
    shuffleScenarios();
  } catch (error) {
    console.error('Error loading scenarios:', error);
  }
});

const shuffleScenarios = () => {
  scenarios.value = scenarios.value.sort(() => Math.random() - 0.5).slice(0, 10);
};

const currentScenario = computed(() => scenarios.value[currentIndex.value]);

const progress = computed(() => {
  return ((currentIndex.value + 1) / scenarios.value.length) * 100;
});

const selectAnswer = (choice) => {
  if (showFeedback.value) return;
  
  selectedAnswer.value = choice;
  showFeedback.value = true;
  
  if (choice.correct) {
    score.value++;
  }
};

const nextScenario = () => {
  if (currentIndex.value < scenarios.value.length - 1) {
    currentIndex.value++;
    selectedAnswer.value = null;
    showFeedback.value = false;
  } else {
    quizComplete.value = true;
  }
};

const restartQuiz = () => {
  currentIndex.value = 0;
  selectedAnswer.value = null;
  showFeedback.value = false;
  score.value = 0;
  quizComplete.value = false;
  shuffleScenarios();
};

const getCategoryIcon = (category) => {
  const icons = {
    'urban': '🏙️',
    'highway': '🛣️',
    'weather': '🌦️',
    'emergency': '🚨',
    'parking': '🅿️'
  };
  return icons[category] || '📝';
};

const getDifficultyColor = (difficulty) => {
  const colors = {
    'easy': '#10B981',
    'medium': '#F59E0B',
    'hard': '#EF4444'
  };
  return colors[difficulty] || '#6B7280';
};
</script>

<template>
  <div class="scenario-quiz">
    <!-- Header -->
    <div class="quiz-header">
      <div class="header-content">
        <button class="back-btn" @click="router.push('/')">
          ← Back to Home
        </button>
        <h1>🎬 Scenario Practice</h1>
        <p>Real-world driving situations</p>
      </div>
    </div>

    <div class="quiz-container" v-if="!quizComplete && scenarios.length > 0">
      <!-- Progress Bar -->
      <div class="progress-section">
        <div class="progress-info">
          <span>Scenario {{ currentIndex + 1 }} / {{ scenarios.length }}</span>
          <span>Score: {{ score }} / {{ currentIndex + (showFeedback ? 1 : 0) }}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <!-- Scenario Card -->
      <div class="scenario-question" v-if="currentScenario">
        <div class="scenario-meta">
          <div class="category-badge">
            {{ getCategoryIcon(currentScenario.category) }} {{ currentScenario.category }}
          </div>
          <div class="difficulty-badge" :style="{ background: getDifficultyColor(currentScenario.difficulty) }">
            {{ currentScenario.difficulty }}
          </div>
        </div>

        <div class="scenario-icon-large">{{ currentScenario.image }}</div>
        
        <h2>{{ currentScenario.title }}</h2>
        <p class="situation-text">{{ currentScenario.situation }}</p>

        <!-- Choices -->
        <div class="choices-list">
          <button 
            v-for="choice in currentScenario.choices" 
            :key="choice.id"
            class="choice-option"
            :class="{
              'selected': selectedAnswer === choice,
              'correct': showFeedback && choice.correct,
              'incorrect': showFeedback && selectedAnswer === choice && !choice.correct,
              'disabled': showFeedback
            }"
            @click="selectAnswer(choice)"
            :disabled="showFeedback"
          >
            <span class="choice-letter">{{ choice.id.toUpperCase() }}</span>
            <span class="choice-text">{{ choice.text }}</span>
            <span v-if="showFeedback && choice.correct" class="check-icon">✓</span>
            <span v-if="showFeedback && selectedAnswer === choice && !choice.correct" class="x-icon">✗</span>
          </button>
        </div>

        <!-- Feedback -->
        <div v-if="showFeedback" class="feedback-box" :class="{ 'correct-feedback': selectedAnswer.correct }">
          <div class="feedback-header">
            <span class="feedback-icon">{{ selectedAnswer.correct ? '✅' : '❌' }}</span>
            <h3>{{ selectedAnswer.correct ? 'Correct!' : 'Incorrect' }}</h3>
          </div>
          <p class="feedback-text">{{ selectedAnswer.feedback }}</p>
          <div class="explanation">
            <strong>Explanation:</strong> {{ currentScenario.explanation }}
          </div>
          <button class="btn btn-primary btn-large next-btn" @click="nextScenario">
            {{ currentIndex < scenarios.length - 1 ? 'Next Scenario →' : 'View Results' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Results Screen -->
    <div v-if="quizComplete" class="results-screen">
      <div class="results-card">
        <div class="results-icon">🎯</div>
        <h2>Quiz Complete!</h2>
        <div class="score-display">
          <div class="score-number">{{ score }} / {{ scenarios.length }}</div>
          <div class="score-percentage">{{ Math.round((score / scenarios.length) * 100) }}%</div>
        </div>
        
        <div class="results-message">
          <p v-if="score / scenarios.length >= 0.8">
            🌟 Excellent! You have a strong understanding of real driving situations.
          </p>
          <p v-else-if="score / scenarios.length >= 0.6">
            👍 Good job! Keep practicing to improve your decision-making skills.
          </p>
          <p v-else>
            📚 Keep learning! Review the scenarios and try again to improve.
          </p>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary btn-large" @click="restartQuiz">
            Try Again
          </button>
          <button class="btn btn-secondary btn-large" @click="router.push('/')">
            Back to Home
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="scenarios.length === 0 && !quizComplete" class="loading-state">
      <div class="spinner"></div>
      <p>Loading scenarios...</p>
    </div>
  </div>
</template>

<style scoped>
.scenario-quiz {
  min-height: 100vh;
  background: var(--color-bg);
}

.quiz-header {
  background: var(--gradient-hero);
  color: white;
  padding: 2rem 1.5rem;
}

.header-content {
  max-width: 1000px;
  margin: 0 auto;
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.625rem 1.125rem;
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.quiz-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.quiz-header p {
  opacity: 0.9;
  font-size: 1.125rem;
  color: white;
}

.quiz-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.progress-section {
  margin-bottom: 2rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--color-text);
}

.progress-bar {
  height: 8px;
  background: var(--color-bg-light);
  border-radius: 50px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.scenario-question {
  background: white;
  border-radius: var(--radius-2xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-xl);
}

.scenario-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-badge,
.difficulty-badge {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: capitalize;
}

.category-badge {
  background: var(--color-bg-light);
  color: var(--color-text);
}

.difficulty-badge {
  color: white;
}

.scenario-icon-large {
  font-size: 5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));
}

.scenario-question h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.situation-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.choices-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.choice-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--color-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: left;
  position: relative;
}

.choice-option:hover:not(.disabled) {
  border-color: var(--color-primary);
  background: var(--color-bg-light);
  transform: translateX(4px);
}

.choice-option.selected {
  border-color: var(--color-primary);
  background: rgba(55, 114, 114, 0.05);
}

.choice-option.correct {
  border-color: #10B981;
  background: rgba(16, 185, 129, 0.1);
}

.choice-option.incorrect {
  border-color: #EF4444;
  background: rgba(239, 68, 68, 0.1);
}

.choice-option.disabled {
  cursor: not-allowed;
}

.choice-letter {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
}

.choice-option.correct .choice-letter {
  background: #10B981;
}

.choice-option.incorrect .choice-letter {
  background: #EF4444;
}

.choice-text {
  flex: 1;
  font-size: 1.0625rem;
  color: var(--color-text);
}

.check-icon,
.x-icon {
  font-size: 1.5rem;
  font-weight: 700;
}

.check-icon {
  color: #10B981;
}

.x-icon {
  color: #EF4444;
}

.feedback-box {
  padding: 2rem;
  background: rgba(239, 68, 68, 0.05);
  border: 2px solid #EF4444;
  border-radius: var(--radius-xl);
  margin-top: 2rem;
}

.feedback-box.correct-feedback {
  background: rgba(16, 185, 129, 0.05);
  border-color: #10B981;
}

.feedback-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.feedback-icon {
  font-size: 2rem;
}

.feedback-header h3 {
  font-size: 1.5rem;
  color: var(--color-text);
}

.feedback-text {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.explanation {
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius-lg);
  margin-bottom: 1.5rem;
}

.explanation strong {
  color: var(--color-primary);
  display: block;
  margin-bottom: 0.5rem;
}

.next-btn {
  width: 100%;
}

.results-screen {
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}

.results-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-2xl);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.results-icon {
  font-size: 5rem;
  margin-bottom: 1.5rem;
}

.results-card h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.score-display {
  margin-bottom: 2rem;
}

.score-number {
  font-size: 4rem;
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1;
}

.score-percentage {
  font-size: 2rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
}

.results-message {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.results-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.results-actions .btn {
  flex: 1;
  min-width: 200px;
}

.loading-state {
  text-align: center;
  padding: 5rem 2rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-state p {
  color: var(--color-text-muted);
  font-size: 1.125rem;
}

@media (max-width: 640px) {
  .quiz-header h1 {
    font-size: 2rem;
  }
  
  .scenario-question {
    padding: 1.5rem;
  }
  
  .scenario-question h2 {
    font-size: 1.5rem;
  }
  
  .situation-text {
    font-size: 1.0625rem;
  }
  
  .choice-option {
    padding: 1rem;
  }
  
  .results-actions {
    flex-direction: column;
  }
}
</style>
