webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\AffzPedro\\Documents\\NLW\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();







function Player() {
  _s();

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]),
      episodeList = _useContext.episodeList,
      currentEpisodeIndex = _useContext.currentEpisodeIndex,
      isPlaying = _useContext.isPlaying,
      togglePlay = _useContext.togglePlay;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcast para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 18
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
            trackStyle: {
              backgroundColor: '#04d361'
            },
            railStyle: {
              backgroundColor: '#9f75ff'
            },
            handleStyle: {
              borderColor: '#04d361',
              borderWidth: 4
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 33
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        autoPlay: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/pause.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 38
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 77
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Tocar proxima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(Player, "2jbKbx7NX/N+16DmhDIdSKxx5dU=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwidG9nZ2xlUGxheSIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRHFCLG9CQVFqQkMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FSTztBQUFBLE1BSWpCQyxXQUppQixlQUlqQkEsV0FKaUI7QUFBQSxNQUtqQkMsbUJBTGlCLGVBS2pCQSxtQkFMaUI7QUFBQSxNQU1qQkMsU0FOaUIsZUFNakJBLFNBTmlCO0FBQUEsTUFPakJDLFVBUGlCLGVBT2pCQSxVQVBpQjs7QUFVckIsTUFBTUMsT0FBTyxHQUFHSixXQUFXLENBQUNDLG1CQUFELENBQTNCO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVJLDBEQUFNLENBQUNDLGVBQXZCO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQyxjQUFUO0FBQXdCLFdBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtB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QUcsRUFBQyxXQUFUO0FBQXFCLGVBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFVSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUUsQ0FBQ0UsT0FBakM7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQyxnQkFBVDtBQUEwQixlQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFhSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGtCQUFRLEVBQUUsQ0FBQ0EsT0FBakM7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0RIOztHQTFFZVQsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJiN2I4N2M3MDljYTI0NzcxNGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7IFBsYXllckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpIHtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBlcGlzb2RlTGlzdCxcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICB0b2dnbGVQbGF5XHJcbiAgICB9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIHsgZXBpc29kZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NTkyfSBoZWlnaHQ9ezU5Mn0gc3JjPXtlcGlzb2RlLnRodW1ibmFpbH0gb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXshZXBpc29kZSA/IHN0eWxlcy5lbXB0eSA6ICcnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXBpc29kZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzA0ZDM2MScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpbFN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5Zjc1ZmYnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOiA0IH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZXBpc29kZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17ZXBpc29kZS51cmx9IGF1dG9QbGF5PjwvYXVkaW8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIGFudGVyaW9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5QnV0dG9ufSBkaXNhYmxlZD17IWVwaXNvZGV9IG9uQ2xpY2s9e3RvZ2dsZVBsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiVG9jYXJcIiAvPiA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiVG9jYXJcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiVG9jYXIgcHJveGltYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9eyFlcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGV0aXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==