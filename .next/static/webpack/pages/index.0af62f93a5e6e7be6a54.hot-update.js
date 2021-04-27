webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.ts");


var _jsxFileName = "C:\\Users\\AffzPedro\\Documents\\NLW\\podcastrnext\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

//SSG





var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var latestEpisodes = _ref.latestEpisodes,
      allEpisodes = _ref.allEpisodes;
  var player = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["\xDAltimos Lan\xE7amentos ", player]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.episodeDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar episodio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: allEpisodes.map(function (episode) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 72
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/play-green.svg",
                    alt: "Tocar episodio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 19
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
} //SSG (versão estatica da pagina)

_s(Home, "nDvtWoI6zcim4oiLqM9WdJzzEtQ=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInBsYXllciIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0Iiwic3R5bGVzIiwiaG9tZXBhZ2UiLCJtYXAiLCJlcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJlcGlzb2RlRGV0YWlscyIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEF0IiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFrQmUsU0FBU0EsSUFBVCxPQUEwRDtBQUFBOztBQUFBOztBQUFBLE1BQTFDQyxjQUEwQyxRQUExQ0EsY0FBMEM7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCO0FBRXZFLE1BQU1DLE1BQU0sR0FBR0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsUUFBdkI7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0wsY0FBM0I7QUFBQSw4QkFDRTtBQUFBLGlEQUF5QkUsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHRixjQUFjLENBQUNPLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTyxFQUFJO0FBQzdCLDhCQUNFO0FBQUEsb0NBQ0UscUVBQUMsaURBQUQ7QUFDRSxtQkFBSyxFQUFFLEdBRFQ7QUFFRSxvQkFBTSxFQUFFLEdBRlY7QUFHRSxpQkFBRyxFQUFFQSxPQUFPLENBQUNDLFNBSGY7QUFJRSxpQkFBRyxFQUFFRCxPQUFPLENBQUNFLEtBSmY7QUFLRSx1QkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVNFO0FBQUss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QUEsdUJBakJGLGVBa0JFO0FBQUEsdUNBQ0U7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsaUJBQVQ7QUFBMkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGO0FBQUEsZUFBU1AsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBMEJELFdBM0JBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQsQyxDQUVEOztHQXpGd0JiLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGFmNjJmOTNhNWU2ZTdiZTZhNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU1NHXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGxheWVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0aHVtYm5haWw6IHN0cmluZztcclxuICBtZW1iZXJzOiBzdHJpbmc7XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgcHVibGlzaGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBIb21lUHJvcHMgPSB7XHJcbiAgbGF0ZXN0RXBpc29kZXM6IEVwaXNvZGVbXTtcclxuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGF0ZXN0RXBpc29kZXMsIGFsbEVwaXNvZGVzIH06IEhvbWVQcm9wcykge1xyXG5cclxuICBjb25zdCBwbGF5ZXIgPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lcGFnZX0+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxhdGVzdEVwaXNvZGVzfT5cclxuICAgICAgICA8aDI+w5psdGltb3MgTGFuw6dhbWVudG9zIHtwbGF5ZXJ9PC9oMj5cclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2xhdGVzdEVwaXNvZGVzLm1hcChlcGlzb2RlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTkyfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Mn1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57ZXBpc29kZS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzb2Rpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hbGxFcGlzb2Rlc30+XHJcbiAgICAgICAgPGgyPlRvZG9zIGVwaXPDs2Rpb3M8L2gyPlxyXG5cclxuICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlBvZGNhc3Q8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5JbnRlZ3JhbnRlczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5EdXJhw6fDo288L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2FsbEVwaXNvZGVzLm1hcChlcGlzb2RlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17ZXBpc29kZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogNzIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5tZW1iZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogMTAwIH19PntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc29kaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcblxyXG4vL1NTRyAodmVyc8OjbyBlc3RhdGljYSBkYSBwYWdpbmEpXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KCdlcGlzb2RlcycsIHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBfbGltaXQ6IDEyLFxyXG4gICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXHJcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBlcGlzb2RlLmlkLFxyXG4gICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcclxuICAgICAgdGh1bWJuYWlsOiBlcGlzb2RlLnRodW1ibmFpbCxcclxuICAgICAgbWVtYmVyczogZXBpc29kZS5tZW1iZXJzLFxyXG4gICAgICBwdWJsaXNoZWRBdDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXHJcbiAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSxcclxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pKSxcclxuICAgICAgdXJsOiBlcGlzb2RlLmZpbGUudXJsLFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XHJcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCBlcGlzb2Rlcy5sZW5ndGgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGF0ZXN0RXBpc29kZXMsXHJcbiAgICAgIGFsbEVwaXNvZGVzXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDgsXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==