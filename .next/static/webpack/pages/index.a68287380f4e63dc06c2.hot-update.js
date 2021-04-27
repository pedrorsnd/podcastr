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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]),
      play = _useContext.play;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos Lan\xE7amentos"
      }, void 0, false, {
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
              onClick: function onClick() {
                return play(episode);
              },
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

_s(Home, "e8/Q4HSVlUy/CoKooJHX1HMProA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwicGxheSIsInN0eWxlcyIsImhvbWVwYWdlIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uQXNTdHJpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7O0FBa0JlLFNBQVNBLElBQVQsT0FBMEQ7QUFBQTs7QUFBQTs7QUFBQSxNQUExQ0MsY0FBMEMsUUFBMUNBLGNBQTBDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjs7QUFBQSxvQkFFdERDLHdEQUFVLENBQUNDLHFFQUFELENBRjRDO0FBQUEsTUFFL0RDLElBRitELGVBRS9EQSxJQUYrRDs7QUFJdkUsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHdEQUFNLENBQUNDLFFBQXZCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUVELHdEQUFNLENBQUNMLGNBQTNCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUEsa0JBQ0dBLGNBQWMsQ0FBQ08sR0FBZixDQUFtQixVQUFBQyxPQUFPLEVBQUk7QUFDN0IsOEJBQ0U7QUFBQSxvQ0FDRSxxRUFBQyxpREFBRDtBQUNFLG1CQUFLLEVBQUUsR0FEVDtBQUVFLG9CQUFNLEVBQUUsR0FGVjtBQUdFLGlCQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsU0FIZjtBQUlFLGlCQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FKZjtBQUtFLHVCQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVB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O0FBQUE7QUFBQSx1QkFoQkYsZUFpQkU7QUFBQSwwQkFBS04sT0FBTyxDQUFDTztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJGLGVBa0JFO0FBQUEsdUNBQ0U7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsaUJBQVQ7QUFBMkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGO0FBQUEsZUFBU1AsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBMEJELFdBM0JBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQsQyxDQUVEOztHQXpGd0JiLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTY4Mjg3MzgwZjRlNjNkYzA2YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU1NHXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGxheWVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0aHVtYm5haWw6IHN0cmluZztcclxuICBtZW1iZXJzOiBzdHJpbmc7XHJcbiAgZHVyYXRpb246IG51bWJlcjtcclxuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgcHVibGlzaGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBIb21lUHJvcHMgPSB7XHJcbiAgbGF0ZXN0RXBpc29kZXM6IEVwaXNvZGVbXTtcclxuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGF0ZXN0RXBpc29kZXMsIGFsbEVwaXNvZGVzIH06IEhvbWVQcm9wcykge1xyXG5cclxuICBjb25zdCB7IHBsYXkgfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlfT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0RXBpc29kZXN9PlxyXG4gICAgICAgIDxoMj7Dmmx0aW1vcyBMYW7Dp2FtZW50b3M8L2gyPlxyXG5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2VwaXNvZGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTJ9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTkyfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcGlzb2RlRGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPntlcGlzb2RlLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8cD57ZXBpc29kZS5tZW1iZXJzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHBsYXkoZXBpc29kZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXNvZGlvXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFsbEVwaXNvZGVzfT5cclxuICAgICAgICA8aDI+VG9kb3MgZXBpc8OzZGlvczwvaDI+XHJcblxyXG4gICAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz17MH0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICA8dGg+UG9kY2FzdDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkludGVncmFudGVzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+RGF0YTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkR1cmHDp8OjbzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7YWxsRXBpc29kZXMubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtlcGlzb2RlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiA3MiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntlcGlzb2RlLm1lbWJlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+e2VwaXNvZGUucHVibGlzaGVkQXR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzb2Rpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2ID5cclxuICApXHJcbn1cclxuXHJcbi8vU1NHICh2ZXJzw6NvIGVzdGF0aWNhIGRhIHBhZ2luYSlcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJywge1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIF9saW1pdDogMTIsXHJcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcclxuICAgICAgX29yZGVyOiAnZGVzYydcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IGVwaXNvZGUuaWQsXHJcbiAgICAgIHRpdGxlOiBlcGlzb2RlLnRpdGxlLFxyXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxyXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXHJcbiAgICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZXBpc29kZS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7IGxvY2FsZTogcHRCUiB9KSxcclxuICAgICAgZHVyYXRpb246IE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pLFxyXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxyXG4gICAgICB1cmw6IGVwaXNvZGUuZmlsZS51cmwsXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcclxuICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIGVwaXNvZGVzLmxlbmd0aCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsYXRlc3RFcGlzb2RlcyxcclxuICAgICAgYWxsRXBpc29kZXNcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogOCxcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9