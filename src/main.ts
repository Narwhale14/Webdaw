import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { disposeAudioEngine } from './services/audioEngineManager'

createApp(App).mount('#app')

window.addEventListener('beforeunload', () => {
    disposeAudioEngine();
});