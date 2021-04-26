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
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\AffzPedro\\Documents\\NLW\\podcastrnext\\src\\pages\\index.tsx";
//SSG


var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var latestEpisodes = _ref.latestEpisodes,
      allEpisodes = _ref.allEpisodes;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos Lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
              lineNumber: 39,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episodeDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar episodio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Integrantes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Dura\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
                  lineNumber: 82,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "",
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/play-green.svg",
                    alt: "Tocar episodio"
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
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
} //SSG (versão estatica da pagina)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInN0eWxlcyIsImhvbWVwYWdlIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uQXNTdHJpbmciLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU9BOztBQW1CZSxTQUFTQSxJQUFULE9BQTBEO0FBQUE7O0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFDdkUsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHdEQUFNLENBQUNDLFFBQXZCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUVELHdEQUFNLENBQUNGLGNBQTNCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUEsa0JBQ0dBLGNBQWMsQ0FBQ0ksR0FBZixDQUFtQixVQUFBQyxPQUFPLEVBQUk7QUFDN0IsOEJBQ0U7QUFBQSxvQ0FDRSxxRUFBQyxpREFBRDtBQUNFLG1CQUFLLEVBQUUsR0FEVDtBQUVFLG9CQUFNLEVBQUUsR0FGVjtBQUdFLGlCQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsU0FIZjtBQUlFLGlCQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FKZjtBQUtFLHVCQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBU0U7QUFBSyx1QkFBUyxFQUFFTCx3REFBTSxDQUFDTSxjQUF2QjtBQUFBLHNDQUNFO0FBQU0sb0JBQUksc0JBQWVILE9BQU8sQ0FBQ0ksRUFBdkIsQ0FBVjtBQUFBLHVDQUNFO0FBQUEsNEJBQUtKLE9BQU8sQ0FBQ0U7QUFBYjtBQUFBO0FB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QTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0ZELEMsQ0FFRDs7S0FuRndCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkYjg3MThiYmNmOWIxOWViMTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NTR1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUic7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XHJcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbWVtYmVyczogc3RyaW5nO1xyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHB1Ymxpc2hlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgSG9tZVByb3BzID0ge1xyXG4gIGxhdGVzdEVwaXNvZGVzOiBFcGlzb2RlW107XHJcbiAgYWxsRXBpc29kZXM6IEVwaXNvZGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2RlcyB9OiBIb21lUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lcGFnZX0+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxhdGVzdEVwaXNvZGVzfT5cclxuICAgICAgICA8aDI+w5psdGltb3MgTGFuw6dhbWVudG9zPC9oMj5cclxuXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2xhdGVzdEVwaXNvZGVzLm1hcChlcGlzb2RlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTkyfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Mn1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICA8bGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSA+e2VwaXNvZGUudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntlcGlzb2RlLm1lbWJlcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc29kaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWxsRXBpc29kZXN9PlxyXG4gICAgICAgIDxoMj5Ub2RvcyBlcGlzw7NkaW9zPC9oMj5cclxuXHJcbiAgICAgICAgPHRhYmxlIGNlbGxTcGFjaW5nPXswfT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Qb2RjYXN0PC90aD5cclxuICAgICAgICAgICAgPHRoPkludGVncmFudGVzPC90aD5cclxuICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxyXG4gICAgICAgICAgICA8dGg+RHVyYcOnw6NvPC90aD5cclxuICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7YWxsRXBpc29kZXMubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtlcGlzb2RlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiA3MiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj57ZXBpc29kZS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5tZW1iZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogMTAwIH19PntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc29kaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG5cclxuLy9TU0cgKHZlcnPDo28gZXN0YXRpY2EgZGEgcGFnaW5hKVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgX2xpbWl0OiAxMixcclxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxyXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoZXBpc29kZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogZXBpc29kZS5pZCxcclxuICAgICAgdGl0bGU6IGVwaXNvZGUudGl0bGUsXHJcbiAgICAgIHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXHJcbiAgICAgIG1lbWJlcnM6IGVwaXNvZGUubWVtYmVycyxcclxuICAgICAgcHVibGlzaGVkQXQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2RlLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxyXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXHJcbiAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZXBpc29kZS5maWxlLmR1cmF0aW9uKSksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBlcGlzb2RlLmRlc2NyaXB0aW9uLFxyXG4gICAgICB1cmw6IGVwaXNvZGUuZmlsZS51cmwsXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcclxuICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIGVwaXNvZGVzLmxlbmd0aCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsYXRlc3RFcGlzb2RlcyxcclxuICAgICAgYWxsRXBpc29kZXNcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogOCxcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9