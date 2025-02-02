
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Shubrajit22/Health-Challenge-Tracker.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://github.com/Shubrajit22/Health-Challenge-Tracker.git"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23692, hash: 'e196a090ca91ba932d4d8fba160006ae53b5b52c85cb6fc1d3a17121df435cbe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17266, hash: '2ea50c0d8e68db8a668115494a75aad4fd8afe53c944037d2b78a4e433665d31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 98194, hash: '3c2e1f4e2a4b5000e70cb388761f370534ed94fa9312da6d2426c84c4de4d4aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
