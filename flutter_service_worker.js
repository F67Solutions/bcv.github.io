'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ef4d2ff49fc3468aa9a7051ea61095f6",
"assets/assets/bcv-Big.png": "fef7225ec0e58cc8baab347e627c425b",
"assets/assets/bcv.png": "881e1cfdf098fa8965c7aab9f9d47f9f",
"assets/assets/delivery/99.png": "496a4d4eb7f9b7ddce862c249165717d",
"assets/assets/delivery/ifood.png": "d7e8110c1c21e135419e63c6f4f6d8f7",
"assets/assets/delivery/rappi.png": "6ea83474aad55333a8d6c96244e4de8f",
"assets/assets/delivery/uber.png": "15b8426c73ddb37a4321265de82ca0f8",
"assets/assets/delivery/zap.png": "903ec8d20de612d83efff2029dc09f42",
"assets/assets/financial/blur.png": "4a0b7bc7b34dc4719bdc01c4b5128121",
"assets/assets/icons/back.png": "d3f4ea5583dbf32ded6a3605a174190c",
"assets/assets/icons/basket.png": "9e8269c4ae48e23f550c101394f4054a",
"assets/assets/icons/brigadeiro-active.png": "e317301ade92b0bfb1a7db8098e891de",
"assets/assets/icons/brigadeiro.png": "5633c78869956bbb05939db51ea60803",
"assets/assets/icons/cake-white.png": "b6513c0da749c5509d246e97a345c467",
"assets/assets/icons/cart.png": "d91a16a6139e804f11fcff76745c0bc2",
"assets/assets/icons/chef-active.png": "ee2468416e798a343ec49426600a3026",
"assets/assets/icons/chef-hat.png": "bec913ae82d4f0d4c6f5b33b5c5619a9",
"assets/assets/icons/chef-white.png": "d95aa135c2f1799a3969ac7eeeba85b7",
"assets/assets/icons/chef.png": "55fb962f65b0ed79b6d0139217f60dc6",
"assets/assets/icons/chocolate_truffle-white.png": "75cb27c4b1960525de0fba463f6a5ebb",
"assets/assets/icons/combo-white.png": "bd1cfe896417a99107af7b41d3bb1ed3",
"assets/assets/icons/cookbook.png": "09da39ecde5be8b756abd5c10296cc77",
"assets/assets/icons/delivery-active.png": "4d48ea4f69f6fe16e9bc9409e83c647a",
"assets/assets/icons/delivery-light.png": "7f628caa2889654d54e61661209ac4d1",
"assets/assets/icons/delivery-white.png": "b7a28681db6585e6c0a24fe1d666d508",
"assets/assets/icons/delivery.png": "a4cc2f7edfeed53940fc3aca347e3f79",
"assets/assets/icons/dollar-active.png": "30fe6412f9d5f3c64b85fb935114164e",
"assets/assets/icons/dollar.png": "e0c7c82b511be3c23c4f8ba62b229c83",
"assets/assets/icons/doubts-active.png": "7f2a36754906e418f31639bb9961bfb8",
"assets/assets/icons/doubts-white.png": "9fc2e271fb27e5cddf2e875e2c60cd74",
"assets/assets/icons/dress.png": "b6d35123d36e04b10f3a3273c5d8606c",
"assets/assets/icons/drink-white.png": "132eb1e597a23ff3e0ccd76504ec97fa",
"assets/assets/icons/enter-active.png": "9028c59e4dc327381ea358e50bcef9fd",
"assets/assets/icons/enter.png": "70323442a00562264b75c3e9314656ed",
"assets/assets/icons/exit.png": "82e4fa1ba8aec6efb12bc12d867716a6",
"assets/assets/icons/eye.png": "0bf287997bf5148d5b18403aebd94861",
"assets/assets/icons/heart.png": "e958c73c3d175597e3ddd241ccf8f514",
"assets/assets/icons/help.png": "b6208e2c446176eb031c200162fb28ba",
"assets/assets/icons/hot.png": "e840e2cc0cb409a9b61c6245bf0242d7",
"assets/assets/icons/ice_cream-white.png": "1c79ac841d3f39a33d7dc88e058bd27c",
"assets/assets/icons/important-active.png": "72205cf07ecfd70f1d065f66896c8770",
"assets/assets/icons/important-white.png": "4bb1cfa6b4e07d0b90e3986ab77577b6",
"assets/assets/icons/info-white.png": "641e837506f63b729c0424fc466da9f4",
"assets/assets/icons/info.png": "9d2d12ff39eddd243631147046883d21",
"assets/assets/icons/instagram-active.png": "763613965234311b7527d437c6929f6b",
"assets/assets/icons/instagram-white.png": "77c361d3eced2679e070cf0fcbeb84d7",
"assets/assets/icons/instagram.png": "77c361d3eced2679e070cf0fcbeb84d7",
"assets/assets/icons/kcal.png": "782912498ad2b0a1dad658bbe0140710",
"assets/assets/icons/lock.png": "bde018a3b0b7fca411b489f86eb1341c",
"assets/assets/icons/male.png": "678be45aef26c6679080a0d92c47beda",
"assets/assets/icons/market-active.png": "e44f6847485c77d4d183061e69fcdb95",
"assets/assets/icons/market-white.png": "40260c9f04506ba6d65bb11ba5e02da7",
"assets/assets/icons/market.png": "69a394b7bcb1199cf02d43114a5a3dac",
"assets/assets/icons/money-white.png": "dc88b03df15faeebf12f9bf6c2808fef",
"assets/assets/icons/money.png": "994facf8cc2455a9786894ac9ed52f29",
"assets/assets/icons/news-active.png": "3fde72d57b7ac8137b33012f8012886f",
"assets/assets/icons/news-white.png": "d15c0c49c7c31d2c2f2f60be817ab285",
"assets/assets/icons/package.png": "bf9b30abf3bb86fa5eabe022106b0969",
"assets/assets/icons/party-white.png": "b2dbeb5861fce6ddbe4151d53ed2554c",
"assets/assets/icons/plus-white.png": "466ae9373eeb3297eb9f61f002c905f2",
"assets/assets/icons/settings.png": "45e6e08ea2a6937b8d7cef4987e9daf2",
"assets/assets/icons/study-active.png": "c819aef256d55bda8dc584fc8073e8ab",
"assets/assets/icons/study-white.png": "ab01d904d155e74af56894f9eed6bff8",
"assets/assets/icons/suggests-active.png": "9570618f84c1cb9fc7b4d454cb31df22",
"assets/assets/icons/suggests-white.png": "50257028b88bd049db832154feeb9820",
"assets/assets/icons/video-white.png": "0e05f1a434065d2c2baa7c9ad410ae1d",
"assets/assets/icons/video.png": "cf2a2621252442003d5c1abb00b6f7bd",
"assets/assets/icons/volunteering.png": "89d23bd231fec8ed770577ec96b3a7ae",
"assets/assets/intro/club.png": "08883e8664773da1ae5245be19a093b0",
"assets/assets/intro/docinho.png": "69c20717b17b266acb074e8cdc94bf9d",
"assets/assets/intro/fashion.png": "ec6f5f8d4731b01e243667d8409f9ff5",
"assets/assets/intro/franchise.png": "dd4057f7d7908167a5882c821a7b30f7",
"assets/assets/intro/franchise2.png": "9edd8aacf6fc057a5294683aa6b54901",
"assets/assets/intro/member.png": "f52eae1c382bb9a1901811aac7333104",
"assets/assets/intro/team.png": "db0ee8312ee4e2b2d73bc5b5950f1621",
"assets/assets/intro/welcome.png": "ca4bbb844de532cf4c706bf911295986",
"assets/assets/intro/welcome2.png": "44aa79fe9cd8d204b076adbab15ab277",
"assets/assets/learn/blur.png": "a9522db45c00d86cc144dca416ebdc2d",
"assets/assets/lottie/working.json": "a6fcc0193acf9509e2e5904b8dca6f5f",
"assets/assets/marketing/blur.png": "6800c2eca9813414b30c46f3c16388ae",
"assets/assets/product/blur.png": "06d1f325508b9c684521087e381ef0dc",
"assets/assets/splash.png": "e4cbbdbe95556c1757848aeeae6fb836",
"assets/assets/splashX.png": "b68001bc30be9be5984005d043444108",
"assets/assets/welcome-login.png": "241d347a5ba4758e1fd2e7dde789698b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9942c71da7fc797dca2b907b8e7cca0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "53a405392eb8d540969cbd2afe425ed9",
"/": "53a405392eb8d540969cbd2afe425ed9",
"main.dart.js": "01471b6c92eb6b0ac0fdda7d5544da68",
"manifest.json": "514030dba44e5e54c880af17453d8a95",
"splash/img/dark-1x.png": "2a022f6c6e2883508abfb3400f2651d0",
"splash/img/dark-2x.png": "556ab974280b81be0612b920ee3f1c23",
"splash/img/dark-3x.png": "cd444ec3655b05e31593f157040cfe3a",
"splash/img/dark-4x.png": "e8c8726f5119cfde41cc4c7424a6ab0b",
"splash/img/light-1x.png": "2a022f6c6e2883508abfb3400f2651d0",
"splash/img/light-2x.png": "556ab974280b81be0612b920ee3f1c23",
"splash/img/light-3x.png": "cd444ec3655b05e31593f157040cfe3a",
"splash/img/light-4x.png": "e8c8726f5119cfde41cc4c7424a6ab0b",
"splash/style.css": "1e4df63a2df2f2e84ef5a2a938bc50b2",
"version.json": "0a003c5f3d183d9b126276fb2d111f9f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
