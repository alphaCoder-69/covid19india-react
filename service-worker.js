if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4fa8f9f5f6941c0cb83a10ca0159e101","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"4fa8f9f5f6941c0cb83a10ca0159e101","url":"index.html"},{"revision":"e692aabc24e435df12eefc15f016acab","url":"precache-manifest.e692aabc24e435df12eefc15f016acab.js"},{"revision":"dc75e87e9fafe1f32ed81161b554ac64","url":"static/css/14.93b3b32d.chunk.css"},{"revision":"520bf9bdd8e6c00218b3a3b88d6ddd2c","url":"static/css/main.05697627.chunk.css"},{"revision":"f0a906677b717c18268fa43bd76c440d","url":"static/js/0.2fd58e1d.chunk.js"},{"revision":"26943939f0da55fefefcb635cffb9a95","url":"static/js/1.1333afc5.chunk.js"},{"revision":"ecb53ce32a1a061f13e29ad75a94ccc9","url":"static/js/12.774d3d8a.chunk.js"},{"revision":"4d29b2bc69146d4cd9dbb545ceaec87f","url":"static/js/13.f6e5dddb.chunk.js"},{"revision":"02a2b983a584e40b384a38dbd20a05b8","url":"static/js/14.bb2cc25c.chunk.js"},{"revision":"f059711a71ca41c7a7764e8ca239af68","url":"static/js/15.11cdf82f.chunk.js"},{"revision":"d2485afd50c26911248548758b532b10","url":"static/js/16.a1e266c3.chunk.js"},{"revision":"696059ee913fc456ddefaa1155e2c3ff","url":"static/js/2.0310b10b.chunk.js"},{"revision":"d6223f71c84ea41b573ff0f97aa23b4e","url":"static/js/3.a0fdb595.chunk.js"},{"revision":"1a2ff8944a66a7d762b1553deb3b7e14","url":"static/js/DeepDive.2c90e0ca.chunk.js"},{"revision":"d265f4b77e0244cc39a80ecf35a9362e","url":"static/js/Essentials.e758f42b.chunk.js"},{"revision":"a8a1cb16beed9e5becb6d3ca9ae63d0f","url":"static/js/FAQ.88d8e61f.chunk.js"},{"revision":"534f681fe499d1e3d7ecdda7bc5ed5c5","url":"static/js/Home.cdd89773.chunk.js"},{"revision":"b32d35240fc897cfaf749a2387b58fc0","url":"static/js/main.5b6860b3.chunk.js"},{"revision":"3a07c27afac122f75033328c79aa4892","url":"static/js/PatientDB.88759c7f.chunk.js"},{"revision":"954f6c334d244a4bb6f5e852e94b7bc2","url":"static/js/runtime-main.6408a5ed.js"},{"revision":"216bf1dae4d06991afa0c6ca98fa6767","url":"static/js/State.f9d968dc.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
