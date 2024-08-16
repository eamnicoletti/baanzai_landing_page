'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"icons/Icon-512.png": "679df0a227b9d288fc73490044c1fd9a",
"icons/Icon-192.png": "7babf28429531c9f34cb4e207027049d",
"icons/Icon-maskable-192.png": "7babf28429531c9f34cb4e207027049d",
"icons/Icon-maskable-512.png": "679df0a227b9d288fc73490044c1fd9a",
"flutter_bootstrap.js": "77d2d1a5375cee23516afd57ace1b8a6",
"manifest.json": "5d02d7fccc722a39e60323ca06cb1afb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"assets/fonts/MaterialIcons-Regular.otf": "8686827bb825cf7038bead8b060f3675",
"assets/AssetManifest.bin.json": "12a529451b20d991ad39b460c174ff0b",
"assets/FontManifest.json": "09d1710b0eb6d7427d78bd291a44142c",
"assets/NOTICES": "0b94e713a069c44706b69d29c9fc1ab6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5fc535824fd3dbc14bc74f4252fbfc65",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/eldwin/EldwinTrial-ScriptHeavy.otf": "8cd16fdb413ddd1f6dd05361fdee858a",
"assets/assets/icons/ia_baanzai_icon.ttf": "a9cfd197843914fa8b0e08d5ae3c8e95",
"assets/assets/icons/logo_baanzai_icon.ttf": "6ccfc95d6deb9ea08f5a119c1da277d9",
"assets/assets/icons/facebook_icon.ttf": "870c65adcc4f240e8700fb790f0e57d3",
"assets/assets/icons/linkedin_icon.ttf": "e1e4164f77a09875afee525b6a6064e3",
"assets/assets/icons/instagram_icon.ttf": "1be64d130cfc00ad27eb08026ac2475a",
"assets/assets/logo/named_logo_colors.png": "5b4d765dd212dab8cb6410fe01a026d1",
"assets/assets/logo/logo_30x30.png": "2686193d15602e12f00cbaafe3679487",
"assets/assets/logo/logo_purple.png": "2bd4244328a7637973ec61bdab9a2b20",
"assets/assets/images/footer/google-play-badge-black.svg": "e3af3f75022bd26c984783bf7941a7a5",
"assets/assets/images/footer/app-store-badge-black.svg": "422aa70a900a67fc0496560722652b4b",
"assets/assets/images/section_02/ai_view_phone.png": "19be65c5ae8a7f919c4671352a12f257",
"assets/assets/images/section_02/chart_view_side_bar.png": "e2367226e2c636ea31aaeedffaecd88c",
"assets/assets/images/section_02/videos_video_view.png": "586ac844f6f183e040111b7f88696f69",
"assets/assets/images/section_02/chart_view_chart_dashboard.png": "70156f869a158938d4df4c2eede8b68e",
"assets/assets/images/section_06/card_dots.png": "08017376e285a850996d645fb6116f62",
"assets/assets/images/section_04/03-inf.png": "72da5052d73bd24fa926f86db941b3ea",
"assets/assets/images/section_04/03-sup.png": "afb071b602b29b803dca20c660b6388c",
"assets/assets/images/section_04/02-inf.png": "af7792f0827766c248e807b63e023427",
"assets/assets/images/section_04/wave_shape_long.png": "41b92f2527c2d0a291c05908b6f19e5f",
"assets/assets/images/section_04/04-sup.png": "a7a9555e163acdc5d0c495451ba031e5",
"assets/assets/images/section_04/wave_shape.png": "6a8d4a65eba07c31100b60c288a7516e",
"assets/assets/images/section_04/05.png": "0633977c0e6a7297d1d3ebdf1716b547",
"assets/assets/images/section_04/01.png": "55dd338cf401f3f92a2a0f06069d2e67",
"assets/assets/images/section_04/04-inf.png": "fcaf8f0c6ed7a8a764ef004bf428109d",
"assets/assets/images/section_04/02-sup.png": "3d1cde120315b0a94700832d2c4c8e6e",
"assets/assets/images/section_05/12.png": "0a1ae4aa42840cec57e06959c0719d37",
"assets/assets/images/section_05/02.png": "9286badc1e828ca1320e6d9c1d3ecefb",
"assets/assets/images/section_05/09.png": "0c7ece31c1a72e6d417efb19bc6c0341",
"assets/assets/images/section_05/03.png": "fdf1f07fa629082bcc23f2be2e024e82",
"assets/assets/images/section_05/10.png": "f4179c0ed3e6d0e921c9fb17ec8fc267",
"assets/assets/images/section_05/11.png": "8221fe16800ef1d29bc98f73f04d2c3a",
"assets/assets/images/section_05/04.png": "54f6b999f157e4686e1f873385ea8657",
"assets/assets/images/section_05/08.png": "81f4c05e2c80d36d8c36ebd5355cb439",
"assets/assets/images/section_05/07.png": "7cb083a5f1d4b4f33c599f2b25e7acb4",
"assets/assets/images/section_05/05.png": "0094f1e60daaf4950f166aef4f8eadc6",
"assets/assets/images/section_05/01.png": "fdea532e12037adb7592058e91c6b39b",
"assets/assets/images/section_05/06.png": "431403977f63ef868a9a9803db0a0182",
"assets/assets/images/section_01/ia_badge.png": "ee0c5816007667137c6a35e05bb06728",
"assets/assets/images/section_01/degrade_01.png": "734e6aa4fe225f48900d7b76fa248fa0",
"assets/assets/images/section_01/ranking_badge.png": "27242efbe476d13006828708e438c32c",
"assets/assets/images/section_01/chart_badge.png": "9ac3f9e4011769022c9647600f39be17",
"assets/assets/images/section_01/conectar_badge.png": "024e20a6aa3295304129e139e5c0ef15",
"assets/assets/images/section_01/degrade_03.png": "755b8ad6f93e4a9545d1a9f0a524032e",
"assets/assets/images/section_01/degrade_02.png": "56d18f7197f1a0950d861c9053f9a8c5",
"assets/assets/images/section_donate/hands_donate_view.png": "2a6238a52a35e550a64b58d2cd9b0bf1",
"assets/assets/images/section_donate/icons_donate_view.png": "834b38789e07bce2d6c1d64a775a20c2",
"assets/assets/images/section_03/dots_shape.png": "4afd3130d63046a7f0209f5749b7e5b1",
"assets/assets/images/section_03/balloon.png": "3d8a3b5f48d055daab1d4936fb13d836",
"assets/AssetManifest.json": "f610cd55a5def42dfe47400efd9c44e3",
"version.json": "3f333613cb2294f442aacc53525d3253",
"index.html": "4ef015435330598ddf7c3296eaf3ecd2",
"/": "4ef015435330598ddf7c3296eaf3ecd2",
"favicon_flutter.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "70bfc6e59c8f54bed9eced6daca993fb",
"main.dart.js": "8ed80fd1b7471122038ec5e8c40512cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
