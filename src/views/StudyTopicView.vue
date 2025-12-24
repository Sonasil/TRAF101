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
    <!-- Modern Hero Header -->
    <header v-if="category" class="topic-header">
      <div class="header-background"></div>
      <div class="container">
        <div class="header-wrapper">
          <button class="back-btn" @click="router.back()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back
          </button>
          
          <div class="hero-content">
            <div class="category-icon-wrapper">
              <div class="category-icon-large">{{ category.icon }}</div>
            </div>
            
            <div class="text-content">
              <div class="category-meta">
                <span class="category-badge">{{ category.signs.length }} Traffic Signs</span>
              </div>
              <h1>{{ category.name }}</h1>
              <p class="header-description">{{ category.description }}</p>
            </div>
          </div>
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

/* Modern Hero Header */
.topic-header {
  position: relative;
  background: white;
  padding: 2rem 1.5rem 3rem;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: var(--gradient-hero);
  opacity: 0.03;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header-wrapper {
  position: relative;
  z-index: 1;
}

/* Modern Back Button */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.625rem 1.125rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.back-btn:hover {
  background: var(--color-bg-secondary);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateX(-4px);
  box-shadow: var(--shadow-md);
}

.back-btn svg {
  transition: transform var(--transition-base);
}

.back-btn:hover svg {
  transform: translateX(-2px);
}

/* Hero Content Layout */
.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-icon-wrapper {
  flex-shrink: 0;
}

.category-icon-large {
  font-size: 5rem;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(15, 76, 129, 0.05) 0%, rgba(30, 136, 229, 0.08) 100%);
  border-radius: var(--radius-2xl);
  border: 2px solid rgba(15, 76, 129, 0.1);
  box-shadow: 0 4px 20px rgba(15, 76, 129, 0.08);
}

.text-content {
  flex: 1;
  min-width: 0;
}

.category-meta {
  margin-bottom: 0.75rem;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  background: var(--gradient-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 8px rgba(15, 76, 129, 0.25);
}

.topic-header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 0.75rem;
  color: var(--color-text);
  font-weight: 800;
  line-height: 1.2;
}

.header-description {
  font-size: 1.0625rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 700px;
}

/* Signs Section */
.signs-section {
  padding: var(--spacing-3xl) var(--spacing-md);
  max-width: 1400px;
  margin: 0 auto;
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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.sign-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--spacing-md);
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
  max-width: 550px;
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
  padding: var(--spacing-xl);
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
  padding: var(--spacing-xl);
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
    width: 80px;
    height: 80px;
  }
  
  .hero-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  
  .category-icon-wrapper {
    align-self: center;
  }
}
</style>
