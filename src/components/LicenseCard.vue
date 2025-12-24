<script setup>
defineProps({
  license: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['select']);
</script>

<template>
  <div 
    class="license-card card" 
    :class="{ 'is-selected': selected }"
    @click="emit('select', license.id)"
  >
    <h3>{{ license.name }}</h3>
    <p>{{ license.description }}</p>
  </div>
</template>

<style scoped>
.license-card {
  cursor: pointer;
  padding: var(--spacing-xl);
  transition: all var(--transition-base);
}

.license-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.license-card.is-selected {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-xl);
}

.license-card.is-selected h3,
.license-card.is-selected p {
  color: white;
}

.license-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.license-card p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
}
</style>
