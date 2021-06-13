'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "172d08fa4f6ce6351b9877bee6b4e7c6",
".git/config": "a0191262c65752f89108609fdbdd073d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "a842835ed235bf88d4e0f35d8bbd0cb5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5ee838cbaaaab8277e75bbbecb06ac5",
".git/logs/refs/heads/main": "484634efbd01e28c7e213dce2ce560b0",
".git/logs/refs/remotes/origin/main": "1ea155ec0d43b3b2b9109d292a4c41b3",
".git/objects/03/3424c66367f7b2e7eb7736459d1f6a68a8238c": "f89b8dfbb94bd876b6af39011e84e675",
".git/objects/06/859d82a40a384cfcb08e6b92afcfec3a35eb1c": "d30f02fac4bfbd3fd41d3871d71f46c5",
".git/objects/07/7f7934d0f9866bc9db662f0b69ab0103372b25": "ac19e1616073ae24f94751c4bf0a96c8",
".git/objects/0a/d56ee0aeacc9a3c85f5447d9b3a5eab1e3689b": "0e03430c34f0610987192c7405c73902",
".git/objects/0c/c8a97a6fc41a5a3603d7d9628bec964d48631b": "987c9ec393ac026df6bd99dd141c5053",
".git/objects/0d/cf75c51ad47ddc321b5cad8d2df182042f7cd5": "f92629f3ec48b9f140fb829a9bb854ac",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/01756717fb786166a6ecdc85e8f6a53ebf7f8f": "76a4991b10d62aeff5be5a9b23e30066",
".git/objects/28/163f47af89aea4b77417c9a7338cc17cabcee3": "2bc00c7617e8cc1f0fd9a80a87a13679",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2b/86cba5edbd2b64dacfd56ead855c0fd937b5c3": "e3cbab1265a2e9a5b0a59096d4574690",
".git/objects/2d/1412ce3bca8c7018f766d7d0705372f494785c": "7bd8421889be6d75c87b63565860fb0c",
".git/objects/2e/c28b642cad2c30229c5014a08b2de56a40255b": "ecd5a5ab4d0f1158b34411bd8993641c",
".git/objects/2f/c4397271abeeffd680bc8a981626b29d5dde22": "e18388309fe0b002daff375c731ffbea",
".git/objects/30/04bcdd6534a5876aca16d48c7b16778c8b353d": "da80fe9bdc00753837b2a67f0b5b055e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/11ad30feda759dd17ddf82eac6f0ac011c63e1": "b2ef9e4ad74aed37e464385fb3ea1d16",
".git/objects/3a/351dcd80d9db5839420634efd20e4033d1b381": "4426eb968e4abc6812a60b33598b49ee",
".git/objects/3a/98a678b615f74d47639f5907d78dc348287f80": "7f18607b08f9afb1acfdd557e9ef41aa",
".git/objects/3e/066a48b58dfebbfef0419f91045ee68ce69c51": "9072c9dd2049d08ba841efd0da65c537",
".git/objects/3e/6b1c761dd043213cca7118f4c35a3010b17d8f": "ac667856f7a2bf563a6265986b61ebd6",
".git/objects/3f/0878ae595275370a88b9f38bc67aaed41fc8de": "024924e88eccd6d77c1158c5e65d17e1",
".git/objects/42/fbf0eed0ad231bd5bf3d4e7c95ea35cf757456": "fc6d1e2b23389a302a40fb5f42c29933",
".git/objects/43/4901a57a568818efbd8fcf4b77ec0c2b813784": "9fcd33e17ae0acbe8c2ff45587158c96",
".git/objects/43/c407d4684edb2180811939a97b1b9b5363353a": "53d39607fdf5f4a763d2a0c6594f666e",
".git/objects/4e/45efacb367c114a88b468bcc9d2051a74c08cd": "4d9b7bd98d877220ff4bcddd916fbed2",
".git/objects/4f/aaad0085daad6ffe6cf5135ed056a637d12adb": "bf891daef9cdd67cb3d954a6214c16be",
".git/objects/52/8719bd222c873d300da052f0485e1b74008f37": "5bde3936d76f96777b382c1be1a02b43",
".git/objects/54/b440cda1dbdb30603f18bac7d787a27f638040": "8495be24d4300775f2f809954cb6894a",
".git/objects/67/891d3f29541f1e9f325ae8af7ad3d60fcf4827": "318d803153d45319b87fc2da50643a01",
".git/objects/68/6bf4dd8f8c3fade9f448774b2fc13475c92a53": "43cc60cd014cc835a0b49624f287b829",
".git/objects/70/6e58c3804d9fab1abc9076828fcc7ed49c0f57": "94bf79da44771d9bfef9d17e566a9b3a",
".git/objects/71/196273e385229acfe7c778530c5ba771f8d235": "338b4305f51ac1c55764cf5cd6c1ad1e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/6154d1605bdebc9d342448f91b46b7d48a53fe": "f70d7f9373c8a1af92f6f17140426a9a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/6789334a28979e45921f757bf34d7f2f0dca2b": "775d7ee80bb4a131ab1d010e05d8b5f9",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/9b/888468d6a76235460747b8754760f8415783e7": "546d9f64b483eb8e58c242afc8868e2e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/ce6e5650119d24a3a4a21b52b75f83e4d0d3a8": "d62134b268624100791075632a5b8926",
".git/objects/aa/04b73647123271968f9caacd7c3ad4155568db": "9379e85788d59e92b60a7ce45155bdd5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/c2caf8f302b4f658a7207c0665f30e1f2b3e6d": "5b7f63d4321915d42368dd3d84c0bdfb",
".git/objects/af/f7db00482f1eb0ac6c8a6d0ed1da4a736d0813": "c6d9656082476e8b874c627cc098524e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/5cf505ae8cb3d152af3732679d2eb16dfd68f9": "fc2eac83ec4da27699a64f4257db7496",
".git/objects/bb/867e166af074217eb8f33ffeba580f06da93ef": "53af677fd18ed2f5c462c38d0baca613",
".git/objects/c6/03c86881186f27316f74b20cbf4172e8cccb1d": "8eb7f54409e60d8a48b4196429d06eed",
".git/objects/c9/2e3476ba6ff7264d9ce311eaffad2100b74427": "3bb5bf1d7841680f3caae4954a5f3f4c",
".git/objects/cb/2dee05e1637b06eb9e5122455a03d636b4890b": "2bdd05ff1d40fbb8a5d6943a596aef78",
".git/objects/cb/f92d3e8c3f0c51656101d81d2df0f069cdfd34": "224fc45809e744e643ba6229c43239c5",
".git/objects/ce/628ada149c35a6f7d337db8bdbfe46df64139c": "800bc336050740f571b58e21de844e3f",
".git/objects/d5/3992514b2696ce7b3d14a4996ee3b8769a4c28": "46abb7ea3d2bf876246ab6b2415415e4",
".git/objects/d6/c744788c08d63025e44c7703ad14c31087668f": "643d657203fee073f44979277d445da5",
".git/objects/d7/1e0be2bdc3cbdb5330f71988fa9179480845d1": "0c42b474d6b919c87f7018d791e344d0",
".git/objects/d8/e9999a07a7dc3cc4a46ff8de43b85312706fec": "2a61a7f54328c4acff2c2e7525312a71",
".git/objects/df/245f79dd7a78b06b7984319910aaa2c70ae366": "5e19b739734806946901ce00102d9654",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/77811f70378bb142076b53b223ae39e7c33592": "e5a664b29b495018cef67a884307d991",
".git/objects/eb/24e883cabce6097c5113ebaaef8cb5341e46aa": "a4d0ad63698bc5efce015a9558925b6e",
".git/objects/ed/9715f13de171a1f3c978948acaf17f912ee911": "dc3edf8493948e6b0bcfa8daeca41f64",
".git/objects/f2/343e0af40e34eb8b43c27372f66d1589532e75": "1676e667f1bc18e53d33a94d9604834c",
".git/objects/f2/3b06c6989da8cb177386a3d010be32e781a6fd": "3ce61640ff00493575b84e3905b11e68",
".git/objects/f2/6bf01940800df51c2091db34da623c17a3f002": "adfed27bdc1635f1901e1508874739b5",
".git/objects/fd/06b0ee653b0fa14aebd2324be3a6eb0337c22e": "e71a62e5de9cf5be8292776151665a8d",
".git/objects/fe/a348c9f415134e0bcc01dc0ca2744b5d933ff4": "457fa43162b89801ff8f95b134359b03",
".git/refs/heads/main": "8cc860ef9efcdc860e99a4e13abb481e",
".git/refs/remotes/origin/main": "8cc860ef9efcdc860e99a4e13abb481e",
"apk/app.1.0.0.apk": "72a214d7dc9bb1d60ec3df9ab97b6673",
"assets/AssetManifest.json": "65493dcf0163a561d7b2cff4d9f933c2",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/example.png": "9e718c6394ea643b9c3659c45eb4b60f",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/flag-english.png": "7329dc1b4637cffb56a1c3033f18778b",
"assets/assets/images/flag-khmer.png": "948a0fe85ddd04f3dd1309a7a483738d",
"assets/assets/images/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/icon.png": "fbfe90f885ce28edfa37961b85f24eca",
"assets/assets/images/image-not-found.png": "0de1b5aaad52d2881b6c20a5102cfe5d",
"assets/FontManifest.json": "450e14af9f5ddc3a81ed2947b3f61d65",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f7f6455fa22929fff9360b9d800ac92c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "57cdadfd2d86e2d00a031e857882b593",
"icons/Icon-192.png": "57cdadfd2d86e2d00a031e857882b593",
"icons/Icon-512.png": "57cdadfd2d86e2d00a031e857882b593",
"index.html": "c110e89a90179d046807d76aa368a390",
"/": "c110e89a90179d046807d76aa368a390",
"main.dart.js": "ad259070600486676bdec7ba2328af22",
"manifest.json": "4cbf11164e30b578ee97ca7a3cec4030",
"version.json": "9f24c6aaa71befcdc392a4b968e94141"
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
