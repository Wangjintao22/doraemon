// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n<style>\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  ul,\n  li {\n    list-style: none;\n  }\n  \n  .doraemon {\n    width: 500px;\n    height: 610px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n  }\n  .head {\n    border: 2px solid black;\n    background-color: #0097e3;\n    height: 358px;\n    width: 384px;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 20px;\n    margin: auto;\n    overflow: hidden;\n    z-index: 5;\n  }\n  .eyeWrap {\n    width: 88px;\n    height: 108px;\n    position: absolute;\n  }\n  .eyeWrap.left {\n    left: 72px;\n    top: 36px;\n  }\n  .eyeWrap.right {\n    left: 158px;\n    top: 42px;\n  }\n  .eye {\n    border: 2px solid black;\n    background-color: #fff;\n    width: 88px;\n    height: 108px;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    z-index: 8;\n    animation: eye-close 5s infinite;\n  }\n  @keyframes eye-close {\n    0%,\n    3%,\n    6%,\n    100% {\n      height: 100%;\n    }\n    1.5%,\n    4.5% {\n      height: 5%;\n    }\n  }\n  .pupil {\n    background-color: black;\n    width: 25px;\n    height: 35px;\n    border-radius: 50%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n  }\n  .pupil::before {\n    content: \"\";\n    display: block;\n    background-color: #fff;\n    height: 14px;\n    width: 7px;\n    border-radius: 50%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n  }\n  .nose {\n    border: 2px solid black;\n    background-color: #e40224;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    position: absolute;\n    left: 115px;\n    top: 125px;\n    z-index: 9;\n  }\n  .nose::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background-color: #fff;\n    left: 12px;\n    top: 12px;\n  }\n  .mouth {\n    border: 2px solid black;\n    background-color: #fff;\n    height: 280px;\n    width: 340px;\n    border-radius: 50%;\n    position: absolute;\n    top: 85px;\n    left: 7px;\n    transform: rotate(5deg);\n    overflow: hidden;\n  }\n  .lips {\n    border: 2px solid black;\n    width: 280px;\n    height: 196px;\n    border-radius: 50%;\n    position: absolute;\n    left: 4px;\n    top: 4px;\n    transform: rotate(-10deg);\n  }\n  .lips::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 284px;\n    height: 100px;\n    background-color: #fff;\n    left: -2px;\n    top: -2px;\n  }\n  .smile {\n    border: 2px solid black;\n    width: 46px;\n    height: 46px;\n    border-radius: 50%;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    position: absolute;\n    top: 106px;\n    left: 8px;\n    transform: rotate(196deg);\n  }\n  .lips-up {\n    border: 2px solid black;\n    position: absolute;\n    left: 130px;\n    top: 78px;\n    height: 132px;\n    width: 30px;\n    border-radius: 50%;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n  }\n  .mustache {\n    position: absolute;\n    z-index: 3;\n  }\n  .mustache li {\n    width: 90px;\n    height: 5px;\n    background-color: #000;\n    position: relative;\n  }\n  .mustache1 {\n    transform: rotate(15deg);\n    top: -28px;\n  }\n  .mustache3 {\n    transform: rotate(-15deg);\n    top: 28px;\n  }\n  .mustache.left {\n    transform: rotate(15deg);\n    top: 165px;\n    left: -5px;\n  }\n  .mustache.right {\n    transform: scaleX(-1.4) rotate(0deg);\n    top: 188px;\n    right: 64px;\n  }\n  \n  .scarf {\n    border: 2px solid black;\n    background-color: #d9011a;\n    width: 250px;\n    height: 76px;\n    border-radius: 50%;\n    position: absolute;\n    transform: rotate(5deg);\n    top: 312px;\n    left: 110px;\n    z-index: 3;\n  }\n  .bell {\n    border: 2px solid black;\n    height: 56px;\n    width: 56px;\n    background-color: #f5cc07;\n    border-radius: 50%;\n    position: absolute;\n    top: 375px;\n    left: 164px;\n    transform: rotate(5deg);\n    overflow: hidden;\n    z-index: 3;\n  }\n  .bell-line1 {\n    border: 2px solid black;\n    position: absolute;\n    height: 120px;\n    width: 120px;\n    border-radius: 50%;\n    left: -38px;\n    top: 20px;\n  }\n  .bell-line2 {\n    border: 2px solid black;\n    position: absolute;\n    height: 120px;\n    width: 120px;\n    border-radius: 50%;\n    left: -38px;\n    top: 12px;\n  }\n  .bell-line3 {\n    border: 2px solid black;\n    position: absolute;\n    height: 60px;\n    width: 60px;\n    border-radius: 50%;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    transform: rotate(-60deg);\n    left: 18px;\n    top: 2px;\n  }\n  .bell-hole {\n    border: 2px solid black;\n    width: 22px;\n    height: 12px;\n    border-radius: 50%;\n    background-color: #665a4c;\n    position: absolute;\n    top: 30px;\n    left: 12px;\n  }\n  .body {\n    height: 300px;\n    width: 250px;\n    position: absolute;\n    left: 110px;\n    top: 300px;\n    z-index: 1;\n  }\n  .armRight {\n    border: 2px solid black;\n    background-color: #0097e3;\n    width: 70px;\n    height: 120px;\n    border-radius: 40%;\n    position: absolute;\n    right: -50px;\n    top: 55px;\n    transform: rotate(-30deg);\n    z-index: 1;\n  }\n  .armRight::after {\n    display: block;\n    content: \"\";\n    background-color: #0097e3;\n    width: 50px;\n    height: 55px;\n    position: absolute;\n    left: -10px;\n    transform: rotate(30deg);\n    z-index: 3;\n  }\n  .armRight::before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 40px;\n    height: 95px;\n    background-color: #0097e3;\n    border-radius: 50%;\n    border: 2px solid #000;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    transform: rotate(-7deg);\n    top: 6px;\n    left: -12px;\n  }\n  .handRight {\n    border: 2px solid #000;\n    background-color: #fff;\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    position: absolute;\n    top: 136px;\n    left: 268px;\n  }\n  .armLeft {\n    border: 2px solid #000;\n    background-color: #0097e3;\n    width: 45px;\n    height: 65px;\n    border-radius: 50%;\n    position: absolute;\n    top: 38px;\n    left: -20px;\n    transform: rotate(15deg);\n    background-color: #0097e3;\n    z-index: -2;\n  }\n  .handLeft {\n    border: 2px solid #000;\n    background-color: #fff;\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    position: absolute;\n    top: 90px;\n    left: -30px;\n    z-index: -1;\n  }\n  .pocket {\n    border: 2px solid #000;\n    background-color: #fff;\n    width: 176px;\n    height: 144px;\n    border-radius: 50%;\n    position: absolute;\n    left: 10px;\n    top: 56px;\n    transform: rotate(15deg);\n    overflow: hidden;\n    z-index: 1;\n  }\n  .pocketLine {\n    border: 2px solid #000;\n    width: 90%;\n    height: 90%;\n    border-radius: 50%;\n    position: absolute;\n    left: 0.5em;\n    top: 0.5em;\n  }\n  .pocketLine::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: -22px;\n    border: 2px solid #000;\n    min-width: 185px;\n    transform: rotate(-10deg);\n    min-height: 75px;\n    padding: 0.5em;\n    border-radius: 50%;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    background-color: #fff;\n  }\n  .trunk {\n    border: 2px solid #000;\n    background-color: #0097e3;\n    width: 250px;\n    height: 280px;\n    border-radius: 50%;\n    position: absolute;\n    top: -36px;\n    left: -5px;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n  }\n  .trunk::after {\n    display: block;\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    background-color: #0097e3;\n    position: absolute;\n    top: 78px;\n    left: 0;\n    z-index: 3;\n  }\n  .legRight {\n    border: 2px solid #000;\n    background-color: #0097e3;\n    width: 75px;\n    height: 160px;\n    border-radius: 50%;\n    position: absolute;\n    left: 168px;\n    top: 115px;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    transform: rotate(20deg);\n  }\n  .body::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border: 2px solid #000;\n    background-color: #0097e3;\n    width: 30px;\n    height: 30px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    transform: rotate(-15deg);\n    top: 162px;\n    left: 168px;\n    z-index: 10;\n  }\n  .footRight {\n    border: 2px solid #000;\n    background-color: #fff;\n    width: 125px;\n    height: 150px;\n    border-radius: 50%;\n    position: absolute;\n    left: 86px;\n    top: 156px;\n    transform: rotate(-40deg);\n    z-index: 10;\n  }\n  .legLeft:before {\n    display: block;\n    content: \"\";\n    min-width: 45px;\n    min-height: 45px;\n    border-radius: 50%;\n    border: 2px solid #000;\n    position: absolute;\n    left: -16px;\n    top: -8px;\n    background-color: #0097e3;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n  }\n  .legLeft {\n    border: 2px solid #000;\n    width: 120px;\n    height: 110px;\n    background-color: #0097e3;\n    position: absolute;\n    left: -12px;\n    top: 144px;\n    border-top-color: transparent;\n  }\n  .trunk::before {\n    display: block;\n    content: \"\";\n    min-width: 150px;\n    min-height: 150px;\n    border-radius: 50%;\n    border: 2px solid #000;\n    background-color: #fc3;\n    position: absolute;\n    top: 268px;\n    left: -11px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    z-index: 3;\n  }\n  .footLeft {\n    border: 2px solid #000;\n    background-color: #fff;\n    width: 105px;\n    height: 160px;\n    border-radius: 50%;\n    position: absolute;\n    top: 126px;\n    left: -84px;\n    transform: rotate(-30deg);\n    z-index: 10;\n  }\n</style\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/13515/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51328" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/13515/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map