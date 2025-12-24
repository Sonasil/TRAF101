<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const signsData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/signs.json');
    const data = await response.json();
    signsData.value = data;
  } catch (error) {
    console.error('Error loading signs data:', error);
  }
});

const openTopic = (categoryId) => {
  router.push(`/study/${categoryId}`);
};
</script>

<template>
  <div class="study-hub">
    <!-- Hero Header - Full Width -->
    <section class="hub-hero full-bleed bg-gradient-hero">
      <div class="hero-container">
        <button class="back-btn" @click="router.push('/')">
          ← Back to Home
        </button>
        <div class="hero-content">
          <h1 class="text-white">Traffic School</h1>
          <p class="text-white hero-subtitle">
            Comprehensive training for safe driving in Northern Cyprus. 
            Master all traffic signs and rules before taking your test.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories Grid - Full Width -->
    <section class="categories-section full-bleed">
      <div class="section-padding">
        <div v-if="signsData" class="categories-grid">
          <div 
            v-for="category in signsData.categories" 
            :key="category.id"
            class="category-card card"
            @click="openTopic(category.id)"
          >
            <!-- Header with Gradient -->
            <div class="category-header">
              <div class="category-icon">{{ category.icon }}</div>
              <div class="category-count">{{ category.signs.length }} signs</div>
            </div>
            
            <!-- Body -->
            <div class="category-body">
              <h2>{{ category.name }}</h2>
              <p>{{ category.description }}</p>
              
              <!-- Sign Previews -->
              <div class="signs-preview-grid">
                <div 
                  v-for="sign in category.signs.slice(0, 8)" 
                  :key="sign.id"
                  class="preview-item"
                >
                  <img :src="sign.image" :alt="sign.name" loading="lazy" />
                </div>
                <div v-if="category.signs.length > 8" class="preview-more">
                  +{{ category.signs.length - 8 }} more
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="category-footer">
              <span class="explore-text">Explore All Signs</span>
              <span class="arrow-icon">→</span>
            </div>
          </div>
        </div>
        
        <div v-else class="loading-state">
          <div class="spinner"></div>
          <p>Loading traffic signs...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hub-hero {
  background: var(--gradient-hero);  /* Ocean blue gradient */
  padding: 1.5rem 1.5rem 2rem;
}

.hero-container {
  max-width: 1200px;
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
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.hero-content h1 {
  font-size: clamp(1.875rem, 4.5vw, 2.75rem);
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  font-size: 1rem;
  opacity: 0.95;
  max-width: 550px;
  line-height: 1.5;
}

/* Categories Section */
.categories-section {
  padding: 2.5rem 1.5rem;
  background: var(--color-bg-light);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.category-card {
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-2xl);
}

/* Category Header */
.category-header {
  padding: 1.5rem;
  background: var(--gradient-primary);  /* Ocean blue gradient for all */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.category-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
  z-index: 1;
}

.category-count {
  background: rgba(255, 255, 255, 0.25);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1;
}

/* Category Body */
.category-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.category-body h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.category-body p {
  color: var(--color-text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-size: 0.9375rem;
  min-height: 2.8em;
}

/* Sign Previews Grid */
.signs-preview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-top: auto;
}

.preview-item {
  aspect-ratio: 1;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}

.preview-item:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.preview-more {
  aspect-ratio: 1;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9375rem;
}

/* Category Footer */
.category-footer {
  padding: 1rem 1.5rem;
  background: var(--color-bg-light);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.explore-text {
  font-weight: 700;
  color: var(--color-primary);
  font-size: 1.0625rem;
}

.arrow-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
  transition: transform var(--transition-base);
}

.category-card:hover .arrow-icon {
  transform: translateX(8px);
}

/* Loading State */
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

/* Responsive */
@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .signs-preview-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .hub-hero {
    padding: 3rem 0 4rem;
  }
  
  .category-header {
    padding: 2rem;
  }
  
  .category-icon {
    font-size: 3.5rem;
  }
  
  .category-body {
    padding: 2rem;
  }
  
  .signs-preview-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
</style>
