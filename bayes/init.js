window.matchMedia('(prefers-color-scheme: light)').matches && document.querySelector('html').classList.add('sl-theme-light');
window.matchMedia('(prefers-color-scheme: dark)').matches && document.querySelector('html').classList.add('sl-theme-dark');

window.onload = () => {
  (async () => {
    await Promise.allSettled([
      customElements.whenDefined('sl-split-panel'),
      customElements.whenDefined('sl-switch'),
      customElements.whenDefined('sl-icon'),
      customElements.whenDefined('sl-button'),
    ]);
    document.body.classList.add('ready');
  })();
};
