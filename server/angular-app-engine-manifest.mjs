
export default {
  basePath: 'https://github.com/Shubrajit22/Health-Challenge-Tracker.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
