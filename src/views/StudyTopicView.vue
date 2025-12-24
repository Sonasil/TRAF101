<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const signsData = ref(null);
const selectedSign = ref(null);
const isLoaded = ref(false);

const category = computed(() => {
  if (!signsData.value) return null;
  return signsData.value.categories.find(cat => cat.id === route.params.topicId);
});

onMounted(async () => {
  try {
    const response = await fetch('/signs.json');
    const data = await response.json();
    signsData.value = data;
    setTimeout(() => {
      isLoaded.value = true;
    }, 100);
  } catch (error) {
    console.error('Error loading signs data:', error);
  }
});

const openSignModal = (sign) => {
  selectedSign.value = sign;
};

const closeModal = () => {
  selectedSign.value = null;
};
</script>

<template>
  <div class="study-topic">
    <!-- Header -->
    <header v-if="category" class="topic-header">
      <div class="container">
        <button class="back-btn" @click="router.back()">
          ← Back
        </button>
        <div class="header-content animate-fadeInDown">
          <div class="header-top">
            <div class="category-icon-large">{{ category.icon }}</div>
            <div class="category-badge">{{ category.signs.length }} signs</div>
          </div>
          <h1>{{ category.name }}</h1>
          <p class="header-description">{{ category.description }}</p>
        </div>
      </div>
    </header>

    <!-- Signs Gallery -->
    <section v-if="category" class="signs-section">
      <div class="container">
        <div class="section-header">
          <h2>All {{ category.name }}</h2>
          <p>Click on any sign to see detailed information</p>
        </div>

        <div class="signs-grid">
          <div 
            v-for="(sign, index) in category.signs" 
            :key="sign.id"
            class="sign-card animate-scaleIn"
            :style="{ animationDelay: `${index * 30}ms` }"
            @click="openSignModal(sign)"
          >
            <div class="sign-image-wrapper">
              <img :src="sign.image" :alt="sign.name" class="sign-image" />
            </div>
            <div class="sign-info">
              <h3 class="sign-name">{{ sign.name }}</h3>
              <p v-if="sign.nameTr" class="sign-name-tr">TR: {{ sign.nameTr }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="!category && !signsData" class="loading-state">
      <div class="spinner"></div>
      <p>Loading signs...</p>
    </div>

    <!-- Sign Detail Modal -->
    <Transition name="modal">
      <div v-if="selectedSign" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content animate-scaleIn">
          <button class="modal-close" @click="closeModal">×</button>
          
          <div class="modal-image">
            <img :src="selectedSign.image" :alt="selectedSign.name" />
          </div>
          
          <div class="modal-body">
            <h2>{{ selectedSign.name }}</h2>
            <p v-if="selectedSign.nameTr" class="sign-name-tr-large">Turkish: {{ selectedSign.nameTr }}</p>
            
            <div class="sign-category-badge" :style="{ background: category.color }">
              {{ category.name }}
            </div>
            
            <div class="sign-description">
              <h4>Description</h4>
              <p>{{ selectedSign.description }}</p>
            </div>
            
            <div v-if="selectedSign.speedLimit" class="speed-limit-info">
              <span class="speed-icon">⚡</span>
              <span>Maximum Speed: <strong>{{ selectedSign.speedLimit }} km/h</strong></span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.study-topic {
  min-height: 100vh;
  background: var(--color-bg);  /* Fixed - use defined variable */
}

/* Header */
.topic-header {
  background: var(--gradient-hero);  /* Ocean blue gradient */
  color: white;
  padding: 3rem 2rem;  /* Fixed padding */
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.topic-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-top {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.category-icon-large {
  font-size: 5rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}

.category-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.topic-header h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);  /* Fixed - use clamp */  
  margin-bottom: 1rem;
  color: white;
}

.header-description {
  font-size: 1.125rem;  /* Fixed size */
  opacity: 0.9;
  max-width: 700px;
  line-height: 1.6;
}

/* Signs Section */
.signs-section {
  padding: var(--spacing-3xl) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 0.5rem;
}

.section-header p {
  color: var(--color-text-secondary);
  font-size: 1.125rem;  /* Fixed size */
}

.signs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.sign-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 2px solid transparent;
  box-shadow: var(--shadow-md);
}

.sign-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-primary);
}

.sign-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-base);
}

.sign-card:hover .sign-image {
  transform: scale(1.1);
}

.sign-info {
  text-align: center;
}

.sign-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.sign-name-tr {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  font-style: italic;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: var(--radius-2xl);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-2xl);
}

.modal-close {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: var(--color-danger);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-2xl);
  cursor: pointer;
  z-index: 1;
  transition: all var(--transition-base);
}

.modal-close:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

.modal-image {
  background: var(--color-bg-secondary);
  padding: var(--spacing-3xl);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
}

.modal-image img {
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
}

.modal-body {
  padding: var(--spacing-2xl);
}

.modal-body h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
}

.sign-name-tr-large {
  font-size: var(--font-size-xl);
  color: var(--color-text-muted);
  font-style: italic;
  margin-bottom: var(--spacing-lg);
}

.sign-category-badge {
  display: inline-block;
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xl);
}

.sign-description {
  background: var(--color-bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
}

.sign-description h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
}

.sign-description p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.speed-limit-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: var(--gradient-secondary);
  color: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
}

.speed-icon {
  font-size: var(--font-size-2xl);
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--transition-base);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.loading-state {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .signs-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  
  .topic-header h1 {
    font-size: var(--font-size-3xl);
  }
  
  .category-icon-large {
    font-size: 3rem;
  }
}
</style>
