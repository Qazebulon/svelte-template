import './global.css'
import Home from './components/Home.svelte'

const app = new Home({
  target: document.getElementById('app'),
})

export default app
