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
        lineNumber: 32,
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
              lineNumber: 38,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episodeDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                children: episode.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar episodio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Integrantes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Dura\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: allEpisodes.map(function (episode) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              Key: episode.id,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInN0eWxlcyIsImhvbWVwYWdlIiwibWFwIiwiZXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZXBpc29kZURldGFpbHMiLCJtZW1iZXJzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbkFzU3RyaW5nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFNQTs7QUFtQmUsU0FBU0EsSUFBVCxPQUEwRDtBQUFBOztBQUFBLE1BQTFDQyxjQUEwQyxRQUExQ0EsY0FBMEM7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCO0FBQ3ZFLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxRQUF2QjtBQUFBLDRCQUNFO0FBQVMsZUFBUyxFQUFFRCx3REFBTSxDQUFDRixjQUEzQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHQSxjQUFjLENBQUNJLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTyxFQUFJO0FBQzdCLDhCQUNFO0FBQUEsb0NBQ0UscUVBQUMsaURBQUQ7QUFDRSxtQkFBSyxFQUFFLEdBRFQ7QUFFRSxvQkFBTSxFQUFFLEdBRlY7QUFHRSxpQkFBRyxFQUFFQSxPQUFPLENBQUNDLFNBSGY7QUFJRSxpQkFBRyxFQUFFRCxPQUFPLENBQUNFLEtBSmY7QUFLRSx1QkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVNFO0FBQUssdUJBQVMsRUFBRUwsd0RBQU0sQ0FBQ00sY0FBdkI7QUFBQSxzQ0FDRTtBQUFHLG9CQUFJLEVBQUMsRUFBUjtBQUFBLDBCQUFZSCxPQUFPLENBQUNFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLDBCQUFJRixPQUFPLENBQUNJO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUEsMEJBQU9KLE9BQU8sQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLGVBSUU7QUFBQSwwQkFBT0wsT0FBTyxDQUFDTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLGVBZ0JFO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFDLGlCQUFUO0FBQTJCLG1CQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGO0FBQUEsYUFBU04sT0FBTyxDQUFDTyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBc0JELFNBdkJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZ0NFO0FBQVMsZUFBUyxFQUFFVix3REFBTSxDQUFDRCxXQUEzQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFPLG1CQUFXLEVBQUUsQ0FBcEI7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBQSxvQkFDR0EsV0FBVyxDQUFDRyxHQUFaLENBQWdCLFVBQUFDLE9BQU8sRUFBSTtBQUMxQixnQ0FDRTtBQUFJLGlCQUFHLEVBQUVBLE9BQU8sQ0FBQ08sRUFBakI7QUFBQSxxQ0FDRTtBQUFBLHVDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsdUJBQUssRUFBRSxHQURUO0FBRUUsd0JBQU0sRUFBRSxHQUZWO0FBR0UscUJBQUcsRUFBRVAsT0FBTyxDQUFDQyxTQUhmO0FBSUUscUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUpmO0FBS0UsMkJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQWFELFdBZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1FRCxDLENBRUQ7O0tBdEV3QlIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTRjNWVlNjk5MTJkY2JkZmJhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9TU0dcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0aHVtYm5haWw6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG1lbWJlcnM6IHN0cmluZztcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBwdWJsaXNoZWRBdDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEhvbWVQcm9wcyA9IHtcclxuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xyXG4gIGFsbEVwaXNvZGVzOiBFcGlzb2RlW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBsYXRlc3RFcGlzb2RlcywgYWxsRXBpc29kZXMgfTogSG9tZVByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZXBhZ2V9PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5sYXRlc3RFcGlzb2Rlc30+XHJcbiAgICAgICAgPGgyPsOabHRpbW9zIExhbsOnYW1lbnRvczwvaDI+XHJcblxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtsYXRlc3RFcGlzb2Rlcy5tYXAoZXBpc29kZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5Mn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxOTJ9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGVEZXRhaWxzfT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPntlcGlzb2RlLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzb2Rpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hbGxFcGlzb2Rlc30+XHJcbiAgICAgICAgPGgyPlRvZG9zIGVwaXPDs2Rpb3M8L2gyPlxyXG5cclxuICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgPHRoPlBvZGNhc3Q8L3RoPlxyXG4gICAgICAgICAgICA8dGg+SW50ZWdyYW50ZXM8L3RoPlxyXG4gICAgICAgICAgICA8dGg+RGF0YTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5EdXJhw6fDo288L3RoPlxyXG4gICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHthbGxFcGlzb2Rlcy5tYXAoZXBpc29kZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciBLZXk9e2VwaXNvZGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vU1NHICh2ZXJzw6NvIGVzdGF0aWNhIGRhIHBhZ2luYSlcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJywge1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIF9saW1pdDogMTIsXHJcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcclxuICAgICAgX29yZGVyOiAnZGVzYydcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKGVwaXNvZGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IGVwaXNvZGUuaWQsXHJcbiAgICAgIHRpdGxlOiBlcGlzb2RlLnRpdGxlLFxyXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGUudGh1bWJuYWlsLFxyXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXHJcbiAgICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZXBpc29kZS5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7IGxvY2FsZTogcHRCUiB9KSxcclxuICAgICAgZHVyYXRpb246IE51bWJlcihlcGlzb2RlLmZpbGUuZHVyYXRpb24pLFxyXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZXBpc29kZS5kZXNjcmlwdGlvbixcclxuICAgICAgdXJsOiBlcGlzb2RlLmZpbGUudXJsLFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XHJcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCBlcGlzb2Rlcy5sZW5ndGgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGF0ZXN0RXBpc29kZXMsXHJcbiAgICAgIGFsbEVwaXNvZGVzXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDgsXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==