import init from './mq-visualizer.js';

(async () => {
  // Ensure shim loaded
  if (typeof globalThis.init_webgl !== 'function') {
    console.error('mq_js_bundle.js not loaded (init_webgl missing).');
    return;
  }

  await init('/mq-visualizer/mq-visualizer_bg.wasm');

  const root = document.getElementById('mq-root');
  const canvas = document.getElementById('glcanvas');
  if (!root || !canvas) return;

  const fit = () => {
    const rect = root.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== w)  canvas.width  = w;
    if (canvas.height !== h) canvas.height = h;

    // Let the shim adjust any internal state if it needs to
    if (typeof globalThis.setup_canvas_size === 'function') {
      try { globalThis.setup_canvas_size(); } catch {}
    }
  };

  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  fit();
  addEventListener('resize', fit);
  requestAnimationFrame(fit);
})().catch((e) => console.error('WASM init failed:', e));
