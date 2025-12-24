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
    class="license-card" 
    :class="{ 'is-selected': selected }"
    @click="emit('select', license.id)"
  >
    <h3>{{ license.name }}</h3>
    <p>{{ license.description }}</p>
  </div>
</template>

<style scoped>
.license-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.license-card:hover {
  border-color: #3498db;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.license-card.is-selected {
  border-color: #3498db;
  background-color: #ebf5fb;
  box-shadow: 0 0 0 2px #3498db inset;
}
</style>
