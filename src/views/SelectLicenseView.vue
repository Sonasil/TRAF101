<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quiz';
import { licenses } from '../data/licenses';
import LicenseCard from '../components/LicenseCard.vue';

const router = useRouter();
const store = useQuizStore();

const selectedId = computed(() => store.selectedLicenseTypeId);

function select(id) {
  store.selectLicense(id);
}

function start() {
  store.startAttempt();
  router.push('/quiz');
}
</script>

<template>
  <div class="select-license">
    <h1>Select License Type</h1>
    <p>Choose the vehicle class you want to practice for.</p>
    
    <div class="licenses-grid">
      <LicenseCard 
        v-for="lic in licenses" 
        :key="lic.id" 
        :license="lic" 
        :selected="selectedId === lic.id"
        @select="select"
      />
    </div>

    <div class="actions">
      <button 
        class="btn btn-primary" 
        :disabled="!selectedId"
        @click="start"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<style scoped>
.select-license {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
.licenses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
.btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  background: #3498db;
  color: white;
  transition: opacity 0.2s;
}
.btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
</style>
