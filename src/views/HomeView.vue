<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="home">
    <!-- Enhanced Modern Hero -->
    <section class="hero-split full-bleed">
      <!-- Simple Background Pattern -->
      <div class="hero-pattern"></div>
      
      <div class="hero-grid section-padding">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">🚗</span>
            <span>Practice. Evaluate. Drive Safe.</span>
          </div>
          
          <h1 class="hero-title">Practice. Evaluate. Drive Safe.</h1>
          
          <p class="hero-desc">
            Complete digital learning platform for TRNC traffic rules and signs. 
            Interactive lessons, practice tests, and everything you need to excel.
          </p>
          

          
          <div class="hero-actions">
            <button class="btn btn-primary btn-large btn-glow" @click="router.push('/study')">
              <span>Start Learning Now</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="btn btn-secondary btn-large" @click="router.push('/quiz/B')">
              Take Practice Test
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="modern-card-grid">
            <div class="modern-card card-1">
              <div class="card-glow"></div>
              <div class="card-icon">⚠️</div>
              <span class="card-title">Warning</span>
              <span class="card-count">46 Signs</span>
            </div>
            <div class="modern-card card-2">
              <div class="card-glow"></div>
              <div class="card-icon">🚫</div>
              <span class="card-title">Prohibitory</span>
              <span class="card-count">35 Signs</span>
            </div>
            <div class="modern-card card-3">
              <div class="card-glow"></div>
              <div class="card-icon">🔵</div>
              <span class="card-title">Mandatory</span>
              <span class="card-count">13 Signs</span>
            </div>
            <div class="modern-card card-4">
              <div class="card-glow"></div>
              <div class="card-icon">🔺</div>
              <span class="card-title">Priority</span>
              <span class="card-count">8 Signs</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scenario Quiz Preview -->
    <section class="scenario-preview full-bleed">
      <div class="section-padding">
        <div class="section-header">
          <h2>🎬 Try a Real Situation</h2>
          <p>Test your decision-making skills in realistic driving scenarios</p>
        </div>
        
        <div class="scenario-container">
          <div class="scenario-card">
            <div class="scenario-badge">Sample Scenario</div>
            <div class="scenario-image">
              <div class="scenario-icon">🚸</div>
            </div>
            <h3>School Zone Situation</h3>
            <p class="scenario-text">
              You're driving at 50 km/h when you notice a school zone sign. 
              Children are playing near the road. What should you do?
            </p>
            
            <div class="scenario-choices">
              <button class="choice-btn">
                <span class="choice-letter">A</span>
                <span class="choice-text">Maintain current speed if no children are crossing</span>
              </button>
              <button class="choice-btn choice-correct">
                <span class="choice-letter">B</span>
                <span class="choice-text">Slow down to 30 km/h and stay alert</span>
              </button>
              <button class="choice-btn">
                <span class="choice-letter">C</span>
                <span class="choice-text">Honk to warn children and continue</span>
              </button>
            </div>
            
            <button class="btn btn-primary btn-large scenario-cta" @click="router.push('/scenarios')">
              <span>Start Scenario Practice</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          
          <div class="scenario-stats">
            <div class="stat-item">
              <div class="stat-value">30+</div>
              <div class="stat-text">Real Scenarios</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">5</div>
              <div class="stat-text">Categories</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">100%</div>
              <div class="stat-text">Practical</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Objectives -->
    <section class="objectives-section full-bleed">
      <div class="section-padding">
        <div class="section-header">
          <h2>🎯 Application Objectives</h2>
          <p>Our mission to make TRNC roads safer through comprehensive driver education</p>
        </div>
        
        <div class="grid grid-4 objectives-grid">
          <div class="card objective-card">
            <div class="objective-icon">📋</div>
            <h3>Evaluate Readiness</h3>
            <p>Assess and evaluate users' driving readiness in the TRNC with comprehensive testing.</p>
          </div>
          
          <div class="card objective-card">
            <div class="objective-icon">🏆</div>
            <h3>License-Specific Practice</h3>
            <p>Provide targeted practice tests tailored for all TRNC driving license categories.</p>
          </div>
          
          <div class="card objective-card">
            <div class="objective-icon">🚦</div>
            <h3>Traffic Sign Knowledge</h3>
            <p>Improve traffic sign knowledge and awareness through interactive learning.</p>
          </div>
          
          <div class="card objective-card">
            <div class="objective-icon">✅</div>
            <h3>Safe Driving</h3>
            <p>Support safe and informed driving preparation for all license candidates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proposed Solutions -->
    <section class="solutions-section full-bleed">
      <div class="section-padding">
        <div class="section-header">
          <h2>💡 Our Solutions</h2>
          <p>Comprehensive tools and features designed for your success</p>
        </div>
        
        <div class="bento-grid solutions-grid">
          <div class="card solution-card bento-item-2">
            <div class="solution-content">
              <div class="solution-icon-large">📝</div>
              <h3>License-Based Practice Tests</h3>
              <p>Comprehensive practice tests for all TRNC driving licenses - from motorcycles to passenger transport vehicles.</p>
              <ul class="feature-list">
                <li>✓ Category-specific questions</li>
                <li>✓ Realistic exam simulation</li>
                <li>✓ Timed practice sessions</li>
              </ul>
            </div>
          </div>
          
          <div class="card solution-card bento-item-1">
            <div class="solution-icon">⚡</div>
            <h3>Instant Feedback</h3>
            <p>Get immediate scoring and detailed performance feedback after every test.</p>
          </div>
          
          <div class="card solution-card bento-item-1">
            <div class="solution-icon">🔍</div>
            <h3>Detailed Explanations</h3>
            <p>Learn with comprehensive traffic sign explanations in both English and Turkish.</p>
          </div>
          
          <div class="card solution-card bento-item-2">
            <div class="solution-content">
              <div class="solution-icon-large">🌐</div>
              <h3>Simple & Accessible Platform</h3>
              <p>Easy-to-use web-based platform accessible anytime, anywhere on any device.</p>
              <ul class="feature-list">
                <li>✓ No downloads required</li>
                <li>✓ Mobile-friendly design</li>
                <li>✓ 100% Free to use</li>
              </ul>
            </div>
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
        
        <div class="grid grid-4 license-grid" style="max-width: 1200px; margin: 0 auto;">
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
              <span>20 Questions</span>
              <span>•</span>
              <span>30 Min</span>
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
/* Hero Split - Simplified */
.hero-split {
  position: relative;
  background: var(--gradient-hero);
  color: white;
  padding: 5rem 1.5rem 4rem;
  min-height: 75vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Simple Background Pattern */
.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(30deg, rgba(255, 255, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.03) 87.5%, rgba(255, 255, 255, 0.03)),
    linear-gradient(150deg, rgba(255, 255, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.03) 87.5%, rgba(255, 255, 255, 0.03)),
    linear-gradient(30deg, rgba(255, 255, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.03) 87.5%, rgba(255, 255, 255, 0.03)),
    linear-gradient(150deg, rgba(255, 255, 255, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.03) 87.5%, rgba(255, 255, 255, 0.03));
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px;
  opacity: 0.4;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 0.9375rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  font-size: 1.25rem;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 900;
  color: white;
}

.title-word {
  display: inline-block;
  margin-right: 0.5rem;
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
}

.title-word:nth-child(1) { animation-delay: 0.1s; }
.title-word:nth-child(2) { animation-delay: 0.3s; }
.title-word:nth-child(3) { animation-delay: 0.5s; }

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #89B6B6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 600px;
}

/* Hero Stats */
.hero-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.stat-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-base);
}

.stat-badge:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
}

.stat-icon {
  font-size: 2rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-glow {
  position: relative;
  overflow: hidden;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-glow:hover::before {
  width: 300px;
  height: 300px;
}

.btn-glow span,
.btn-glow svg {
  position: relative;
  z-index: 1;
}

/* Modern Card Grid */
.modern-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.modern-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-2xl);
  padding: 2rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
  overflow: hidden;
}

.modern-card:hover {
  transform: translateY(-8px) scale(1.03);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.modern-card:hover .card-glow {
  opacity: 1;
}

.modern-card .card-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.card-title {
  display: block;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: white;
}

.card-count {
  display: block;
  font-size: 0.875rem;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.8);
}

/* Objectives Section */
.objectives-section {
  padding: 4rem 1.5rem;
  background: white;
}

.objectives-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.objective-card {
  padding: 2.5rem 2rem;
  text-align: center;
  border: 2px solid var(--color-border);
  transition: all var(--transition-base);
}

.objective-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.objective-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.objective-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.objective-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Solutions Section */
.solutions-section {
  padding: 4rem 1.5rem;
  background: var(--color-bg);
}

.solutions-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.solution-card {
  padding: 2.5rem 2rem;
  background: white;
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.solution-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-primary-light);
}

.solution-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.solution-icon-large {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.solution-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.solution-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.solution-card p {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: auto;
}

.feature-list li {
  padding: 0.5rem 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

/* License Section */

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
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #F59E0B;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
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
  
  .modern-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-split {
    padding: 4rem 0 3rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .hero-stats {
    flex-direction: column;
  }
  
  .modern-card-grid {
    grid-template-columns: 1fr;
  }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%, 100% { opacity: 0; top: 8px; }
  50% { opacity: 1; top: 16px; }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

.scroll-indicator p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

/* Scenario Preview Section */
.scenario-preview {
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f0f5 100%);
}

.scenario-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.scenario-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-xl);
  position: relative;
}

.scenario-badge {
  position: absolute;
  top: -12px;
  left: 2.5rem;
  background: var(--gradient-primary);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: var(--shadow-md);
}

.scenario-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary-lighter) 0%, var(--color-primary-light) 100%);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.scenario-icon {
  font-size: 5rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

.scenario-card h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.scenario-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.scenario-choices {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.choice-btn {
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
}

.choice-btn:hover {
  border-color: var(--color-primary);
  background: var(--color-bg-light);
  transform: translateX(4px);
}

.choice-btn.choice-correct {
  border-color: #10B981;
  background: rgba(16, 185, 129, 0.05);
}

.choice-btn.choice-correct .choice-letter {
  background: #10B981;
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

.choice-text {
  flex: 1;
  font-size: 1rem;
  color: var(--color-text);
}

.scenario-cta {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.scenario-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-item {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-base);
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-2xl);
}

.stat-value {
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 600;
}

/* Remove old hero-stats styles */
.hero-stats {
  display: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .scenario-container {
    grid-template-columns: 1fr;
  }
  
  .scenario-stats {
    flex-direction: row;
  }
}

@media (max-width: 640px) {
  .scenario-stats {
    flex-direction: column;
  }
  
  .choice-btn {
    padding: 1rem 1.25rem;
  }
}

</style>
