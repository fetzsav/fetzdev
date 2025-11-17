<script>
// Minimal polyfill for older/newer miniquad bundles that don't define setup_canvas_size
(function (g) {
  if (typeof g.setup_canvas_size !== 'function') {
    g.setup_canvas_size = function () {
      const canvas = document.getElementById('glcanvas');
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      // set the backing-store size to match CSS * DPR
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w)  canvas.width  = w;
      if (canvas.height !== h) canvas.height = h;
    };
  }
})(globalThis);
</script>
