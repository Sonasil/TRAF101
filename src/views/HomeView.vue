<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="home">
    <!-- Full-Width Split Hero -->
    <section class="hero-split full-bleed">
      <div class="hero-grid section-padding">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">🚗</span>
            <span>TRNC Official Driving Platform</span>
          </div>
          
          <h1>Master Driving in Northern Cyprus</h1>
          
          <p class="hero-desc">
            Complete digital learning platform for TRNC traffic rules and signs. 
            Interactive lessons, practice tests, and everything you need to excel.
          </p>
          
          <div class="hero-actions">
            <button class="btn btn-primary btn-large" @click="router.push('/study')">
              Start Learning Now
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="card-stack">
            <div class="stack-card card-1">
              <div class="card-icon">⚠️</div>
              <span>Warning Signs</span>
            </div>
            <div class="stack-card card-2">
              <div class="card-icon">🚫</div>
              <span>Prohibitory</span>
            </div>
            <div class="stack-card card-3">
              <div class="card-icon">🔵</div>
              <span>Mandatory</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Band - Full Width -->
    <section class="stats-band full-bleed">
      <div class="stats-container section-padding">
        <div class="stat-box">
          <div class="stat-value">144+</div>
          <div class="stat-label">Traffic Signs</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">5,280+</div>
          <div class="stat-label">Students Trained</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">94%</div>
          <div class="stat-label">Pass Rate</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">100%</div>
          <div class="stat-label">Free</div>
        </div>
      </div>
    </section>

    <!-- Features - Bento Grid -->
    <section class="features-section full-bleed">
      <div class="section-padding">
        <div class="section-header">
          <h2>Everything You Need to Succeed</h2>
          <p>Comprehensive tools and resources for your driving journey</p>
        </div>
        
        <div class="bento-grid">
          <div class="card feature-card bento-item-2">
            <div class="feature-content">
              <div class="feature-icon-large">📚</div>
              <h3>Complete Sign Database</h3>
              <p>Access all 144 official TRNC traffic signs with detailed English and Turkish descriptions</p>
              <button class="btn btn-primary" @click="router.push('/study')">
                Explore Signs
              </button>
            </div>
          </div>
          
          <div class="card feature-card bento-item-1">
            <div class="feature-icon">🎯</div>
            <h3>Practice Tests</h3>
            <p>Realistic exams tailored to your license type</p>
          </div>
          
          <div class="card feature-card bento-item-1">
            <div class="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your performance with detailed analytics</p>
          </div>
          
          <div class="card feature-card bento-item-1">
            <div class="feature-icon">⚡</div>
            <h3>Instant Feedback</h3>
            <p>Learn from mistakes with immediate results</p>
          </div>
          
          <div class="card feature-card bento-item-1">
            <div class="feature-icon">🌐</div>
            <h3>Bilingual</h3>
            <p>English interface with Turkish translations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- License Types - Full Width Grid -->
    <section class="license-section full-bleed">
      <div class="section-padding">
        <div class="section-header">
          <h2>Choose Your License Type</h2>
          <p>Select the category that matches your goal</p>
        </div>
        
        <div class="grid grid-4 license-grid">
          <div class="card license-card" @click="router.push('/quiz/A1')">
            <div class="license-icon">🏍️</div>
            <h3>A1 License</h3>
            <p class="license-desc">Motorcycles up to 125cc</p>
            <div class="license-meta">
              <span>20 Questions</span>
              <span>•</span>
              <span>30 Min</span>
            </div>
            <button class="btn btn-secondary">Start Test</button>
          </div>
          
          <div class="card license-card featured" @click="router.push('/quiz/B')">
            <div class="popular-badge">Most Popular</div>
            <div class="license-icon">🚗</div>
            <h3>B License</h3>
            <p class="license-desc">Private cars & light vehicles</p>
            <div class="license-meta">
              <span>20 Questions</span>
              <span>•</span>
              <span>30 Min</span>
            </div>
            <button class="btn btn-primary">Start Test</button>
          </div>
          
          <div class="card license-card" @click="router.push('/quiz/C')">
            <div class="license-icon">🚚</div>
            <h3>C License</h3>
            <p class="license-desc">Heavy goods vehicles</p>
            <div class="license-meta">
              <span>20 Questions</span>
              <span>•</span>
              <span>30 Min</span>
            </div>
            <button class="btn btn-secondary">Start Test</button>
          </div>
          
          <div class="card license-card" @click="router.push('/quiz/D')">
            <div class="license-icon">🚌</div>
            <h3>D License</h3>
            <p class="license-desc">Passenger transport</p>
            <div class="license-meta">
              <span>40 Questions</span>
              <span>•</span>
              <span>60 Min</span>
            </div>
            <button class="btn btn-secondary">Start Test</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA - Full Width -->
    <section class="cta-section full-bleed bg-gradient-hero">
      <div class="section-padding">
        <div class="cta-content">
          <h2 class="text-white">Ready to Start Your Journey?</h2>
          <p class="text-white">Begin learning today and pass your TRNC driving exam with confidence</p>
          <button class="btn btn-primary btn-large" @click="router.push('/study')" style="background: white; color: var(--color-primary);">
            Start Learning Now
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Split - Full Width */
.hero-split {
  background: var(--gradient-hero);  /* Ocean blue gradient */
  color: white;
  padding: 4rem 1.5rem 3rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 0.9375rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1.25rem;
}

.hero-content h1 {
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-desc {
  font-size: 1.3125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 3D Card Stack */
.card-stack {
  position: relative;
  height: 400px;
}

.stack-card {
  position: absolute;
  width: 280px;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  text-align: center;
  transition: all var(--transition-base);
}

.stack-card .card-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.stack-card span {
  display: block;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-text);
}

.card-1 {
  top: 0;
  left: 0;
  z-index: 3;
  transform: rotate(-6deg);
}

.card-2 {
  top: 40px;
  left: 50px;
  z-index: 2;
  transform: rotate(3deg);
}

.card-3 {
  top: 80px;
  left: 100px;
  z-index: 1;
  transform: rotate(-3deg);
}

.stack-card:hover {
  transform: rotate(0deg) scale(1.05);
  z-index: 4;
}

/* Stats Band */
.stats-band {
  background: var(--color-primary);  /* Dark ocean blue */
  padding: 2.5rem 1.5rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-box {
  text-align: center;
  color: white;
}

.stat-value {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  opacity: 0.95;
  font-weight: 500;
}

/* Features Section */
.features-section {
  padding: 3rem 1.5rem;
  background: var(--color-bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
}

.feature-card {
  padding: 1.75rem;
}

.feature-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-icon-large {
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
}

.feature-icon {
  font-size: 2.5rem;  
  margin-bottom: 1.25rem;
  display: block;
}

.feature-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.feature-card .btn {
  margin-top: auto;
  align-self: flex-start;
}

/* License Section */
.license-section {
  padding: 3rem 1.5rem;
  background: white;
}

.license-card {
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.license-card.featured {
  border-width: 2px;
  border-color: var(--color-primary);
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-warm);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: var(--shadow-md);
}

.license-icon {
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
}

.license-card h3 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.license-desc {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.0625rem;
}

.license-meta {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  margin-bottom: 2rem;
}

.license-card .btn {
  width: 100%;
}

/* CTA Section */
.cta-section {
  padding: 3rem 1.5rem;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  margin-bottom: 1.25rem;
}

.cta-content p {
  font-size: 1.3125rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-visual {
    order: -1;
  }
  
  .card-stack {
    height: 300px;
  }
  
  .stack-card {
    width: 220px;
    padding: 2rem 1.5rem;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .hero-split {
    padding: 4rem 0 3rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .stat-value {
    font-size: 3rem;
  }
}
</style>
