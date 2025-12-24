<script setup>
import { computed } from 'vue';

const props = defineProps({
  current: Number,
  total: Number
});

const progressPercent = computed(() => {
  if (props.total === 0) return 0;
  return Math.round(((props.current + 1) / props.total) * 100);
});
</script>

<template>
  <div class="progress-container">
    <div class="progress-labels">
      <span>Question {{ current + 1 }} / {{ total }}</span>
      <span>{{ progressPercent }}%</span>
    </div>
    <div class="progress-bar-bg">
      <div 
        class="progress-bar-fill" 
        :style="{ width: progressPercent + '%' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  margin-bottom: 1.5rem;
}
.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}
.progress-bar-bg {
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: #27ae60;
  transition: width 0.3s ease;
}
</style>
