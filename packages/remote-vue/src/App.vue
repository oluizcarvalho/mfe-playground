<script setup lang="ts">
import { ref, onMounted } from 'vue';

const count = ref(0);
const message = ref('Hello from Vue!');

onMounted(() => { console.log('[remote-vue] App mounted via Vite Federation'); });
function increment() { count.value++; }
</script>

<template>
  <div class="widget">
    <div class="widget-header">
      <span class="widget-icon">◈</span>
      <h3>Vue Remote Widget</h3>
    </div>
    <p class="widget-description">
      This component is served from <strong>remote-vue</strong> (port 4203) via Vite Module Federation.
    </p>
    <div class="widget-stats">
      <div class="widget-stat"><span class="stat-number">{{ count }}</span><span class="stat-label">Counter</span></div>
      <div class="widget-stat"><span class="stat-number vue-version">v3</span><span class="stat-label">Vue</span></div>
      <div class="widget-stat"><span class="stat-number">{{ message.length }}</span><span class="stat-label">Msg Len</span></div>
    </div>
    <input v-model="message" class="widget-input" placeholder="Type a message..." />
    <button class="widget-btn" @click="increment">Increment Counter</button>
  </div>
</template>

<style scoped>
.widget { background: linear-gradient(135deg, #0f1f17 0%, #1a3d2e 100%); border: 1px solid rgba(79,192,141,0.2); border-radius: 12px; padding: 24px; color: #e4e6f0; font-family: -apple-system, sans-serif; }
.widget-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.widget-icon { font-size: 24px; color: #4fc08d; }
h3 { font-size: 20px; font-weight: 700; margin: 0; }
.widget-description { color: #8b8fa3; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.widget-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 20px; }
.widget-stat { background: rgba(0,0,0,0.2); border-radius: 8px; padding: 16px; text-align: center; }
.stat-number { display: block; font-size: 28px; font-weight: 800; color: #4fc08d; }
.stat-label { display: block; font-size: 11px; color: #8b8fa3; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.vue-version { color: #6ee7b7; }
.widget-input { width: 100%; padding: 10px 14px; border: 1px solid rgba(79,192,141,0.3); border-radius: 8px; background: rgba(0,0,0,0.2); color: #e4e6f0; font-size: 14px; margin-bottom: 12px; outline: none; box-sizing: border-box; }
.widget-input:focus { border-color: #4fc08d; }
.widget-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #059669; color: white; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.widget-btn:hover { background: #047857; }
</style>
