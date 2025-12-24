<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  selectedOptionIds: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['answer']);

// Local state for shuffled options to prevent reshuffling on every render
const displayOptions = ref([]);

function shuffleOptions() {
  if (!props.question) return;
  // Create a copy and shuffle
  const opts = [...props.question.options];
  // Simple Fisher-Yates or sort shuffle
  opts.sort(() => Math.random() - 0.5);
  displayOptions.value = opts;
}

watch(() => props.question.id, () => {
  shuffleOptions();
}, { immediate: true });

// Check selection
function isSelected(optId) {
  return props.selectedOptionIds.includes(optId);
}

function toggleOption(optId) {
  const isMulti = props.question.correctOptionIds.length > 1; // Infer if multi-choice based on correct answers? 
  // Wait, usually prompt says "Select all that apply" or similar.
  // The data structure has `correctOptionIds[]`.
  // BUT the prompt doesn't explicitly flag "multi" in schema other than checking correctOptionIds.
  // However, usually we should know if it's radio or checkbox.
  // Let's assume if correctOptionIds.length > 1 OR explicit flag (which isn't in schema).
  // Or maybe always allow multi? No, single choice is common.
  // Let's look at `questions.js` data I generated. Most are single.
  // I will treat it as Single Choice unless correctOptionIds.length > 1 OR some metadata?
  // Safe bet: If `correctOptionIds.length > 1`, it's multi. If == 1, it's single.
  // Exception: A question might have 1 correct answer but be presented as "Select One".
  // A question with multiple correct answers is definitely Multi.
  // Let's stick to: if correctOptionIds > 1 => Checkbox. Else => Radio.
  
  const isMultipleChoice = props.question.correctOptionIds.length > 1;

  let newSelection = [];
  if (isMultipleChoice) {
    if (isSelected(optId)) {
      newSelection = props.selectedOptionIds.filter(id => id !== optId);
    } else {
      newSelection = [...props.selectedOptionIds, optId];
    }
  } else {
    // Single choice: toggle on/off? Usually just switch.
    // Force select.
    newSelection = [optId];
  }
  emit('answer', newSelection);
}
</script>

<template>
  <div class="question-card">
    <div class="header">
      <span class="category-badge">{{ question.category }}</span>
      <span class="difficulty-badge" :class="question.difficulty">{{ question.difficulty }}</span>
    </div>
    
    <h2 class="question-text">{{ question.prompt }}</h2>
    
    <div v-if="question.image" class="question-image">
      <!-- Fallback or actual image logic -->
      <div class="placeholder-image">
         <span>[Image: {{ question.category }} Sign]</span>
      </div>
    </div>

    <div class="options-list" role="listbox">
      <div 
        v-for="opt in displayOptions" 
        :key="opt.id"
        class="option-item"
        :class="{ 'selected': isSelected(opt.id) }"
        @click="toggleOption(opt.id)"
        tabindex="0"
        @keypress.enter="toggleOption(opt.id)"
        role="option"
        :aria-selected="isSelected(opt.id)"
      >
        <div class="indicator">
          <span v-if="isSelected(opt.id)" class="check">✔</span>
        </div>
        <span class="option-text">{{ opt.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.category-badge, .difficulty-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
}

.category-badge {
  background: #e9ecef;
  color: #495057;
}

.difficulty-badge.easy { background: #d4edda; color: #155724; }
.difficulty-badge.medium { background: #fff3cd; color: #856404; }
.difficulty-badge.hard { background: #f8d7da; color: #721c24; }

.question-text {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.question-image {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.placeholder-image {
  width: 100%;
  max-width: 300px;
  height: 150px;
  background: #f1f3f5;
  border: 2px dashed #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.option-item:hover, .option-item:focus {
  border-color: #3498db;
  background: #f8f9fa;
  outline: none;
}

.option-item.selected {
  border-color: #3498db;
  background: #ebf5fb;
}

.indicator {
  width: 24px;
  height: 24px;
  border: 2px solid #bdc3c7;
  border-radius: 50%; /* Circle for radio look, square for check? */
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.option-item.selected .indicator {
  border-color: #3498db;
  background: #3498db;
}

.check {
  color: white;
  font-size: 0.8rem;
}
</style>
