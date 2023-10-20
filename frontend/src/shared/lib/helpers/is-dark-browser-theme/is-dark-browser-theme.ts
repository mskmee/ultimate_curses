const isDarkBrowserTheme = (): boolean =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export { isDarkBrowserTheme };
