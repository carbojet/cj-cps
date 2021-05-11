webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_mahendra_shopify_app_cj_cps_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");



var _jsxFileName = "E:\\mahendra\\shopify app\\cj-cps\\components\\ProductList.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(E_mahendra_shopify_app_cj_cps_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nquery getProducts($row:Int!){\n  products(first:$row) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        images(first:1){\n          edges{\n            node{\n              id\n              originalSrc\n            }\n          }\n        }\n        variants(first:1){\n          edges{\n            node{\n              price\n            }\n          }\n        }\n        totalInventory\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_FIRST_PRODUCTS = Object(graphql_tag__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject());

function ProductList() {
  _s();

  var _this = this;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_FIRST_PRODUCTS, {
    variables: {
      row: 20
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 25
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: error.message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 23
  }, this); //console.log('stored products',data.products.edges);

  var products = data.products.edges;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ResourceList, {
      items: data.products.edges,
      renderItem: function renderItem(item) {
        var product = item.node;
        var price = product.variants.edges[0].node.price;

        var media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Thumbnail, {
          source: product.images.edges[0] ? product.images.edges[0].node.originalSrc : '',
          alt: product.images.edges[0] ? product.images.edges[0].node.altText : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }, _this);

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ResourceList.Item, {
          id: product.id,
          media: media,
          url: 'product/' + product.id,
          accessibilityLabel: "view Details for ".concat(product.title),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stack, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stack.Item, {
              fill: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Heading, {
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stack.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["INR ", price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 23
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stack.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: product.totalInventory
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 23
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}

_s(ProductList, "ATRudwUnWENk7lEGiyv3yjumjxE=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJHRVRfRklSU1RfUFJPRFVDVFMiLCJncWwiLCJQcm9kdWN0TGlzdCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicm93IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImVkZ2VzIiwiaXRlbSIsInByb2R1Y3QiLCJub2RlIiwicHJpY2UiLCJ2YXJpYW50cyIsIm1lZGlhIiwiaW1hZ2VzIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwiaWQiLCJ0aXRsZSIsInRvdGFsSW52ZW50b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxrQkFBa0IsR0FBR0MsMkRBQUgsbUJBQXhCOztBQWtDQSxTQUFTQyxXQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2FDLG9FQUFRLENBQUNILGtCQUFELEVBQXFCO0FBQUVJLGFBQVMsRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBUDtBQUFiLEdBQXJCLENBRHJCO0FBQUEsTUFDWEMsT0FEVyxhQUNYQSxPQURXO0FBQUEsTUFDRkMsS0FERSxhQUNGQSxLQURFO0FBQUEsTUFDS0MsSUFETCxhQUNLQSxJQURMOztBQUVsQixNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLGNBQU1BLEtBQUssQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FITyxDQUlsQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxLQUEvQjtBQUdBLHNCQUNJLHFFQUFDLHFEQUFEO0FBQUEsMkJBQ0UscUVBQUMsWUFBRDtBQUNFLFdBQUssRUFBRUgsSUFBSSxDQUFDRSxRQUFMLENBQWNDLEtBRHZCO0FBRUUsZ0JBQVUsRUFBRyxvQkFBQUMsSUFBSSxFQUFJO0FBQ25CLFlBQU1DLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxJQUFyQjtBQUNBLFlBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxRQUFSLENBQWlCTCxLQUFqQixDQUF1QixDQUF2QixFQUEwQkcsSUFBMUIsQ0FBK0JDLEtBQTdDOztBQUNBLFlBQU1FLEtBQUssZ0JBQ1AscUVBQUMsU0FBRDtBQUNJLGdCQUFNLEVBQ0ZKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlUCxLQUFmLENBQXFCLENBQXJCLElBQTBCRSxPQUFPLENBQUNLLE1BQVIsQ0FBZVAsS0FBZixDQUFxQixDQUFyQixFQUF3QkcsSUFBeEIsQ0FBNkJLLFdBQXZELEdBQW9FLEVBRjVFO0FBSUksYUFBRyxFQUNDTixPQUFPLENBQUNLLE1BQVIsQ0FBZVAsS0FBZixDQUFxQixDQUFyQixJQUEwQkUsT0FBTyxDQUFDSyxNQUFSLENBQWVQLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0JHLElBQXhCLENBQTZCTSxPQUF2RCxHQUFpRTtBQUx6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKOztBQVVBLDRCQUNFLHFFQUFDLFlBQUQsQ0FBYyxJQUFkO0FBQ0ksWUFBRSxFQUFFUCxPQUFPLENBQUNRLEVBRGhCO0FBRUksZUFBSyxFQUFFSixLQUZYO0FBR0ksYUFBRyxFQUFFLGFBQVdKLE9BQU8sQ0FBQ1EsRUFINUI7QUFJSSw0QkFBa0IsNkJBQXNCUixPQUFPLENBQUNTLEtBQTlCLENBSnRCO0FBQUEsaUNBTUUscUVBQUMsS0FBRDtBQUFBLG9DQUNJLHFFQUFDLEtBQUQsQ0FBTyxJQUFQO0FBQVksa0JBQUksTUFBaEI7QUFBQSxxQ0FDSSxxRUFBQyxPQUFEO0FBQUEsMEJBQ0dULE9BQU8sQ0FBQ1M7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU1JLHFFQUFDLEtBQUQsQ0FBTyxJQUFQO0FBQUEscUNBQ0k7QUFBQSxtQ0FBUVAsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBU0kscUVBQUMsS0FBRCxDQUFPLElBQVA7QUFBQSxxQ0FDSTtBQUFBLDBCQUFLRixPQUFPLENBQUNVO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXNCRDtBQXJDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkNIOztHQXJEUXJCLFc7VUFDMEJDLDREOzs7S0FEMUJELFc7QUFzRE1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjYjFlZDQwN2IyZDVkZThhOWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQ2FyZCxJbmRleFRhYmxlLHVzZUluZGV4UmVzb3VyY2VTdGF0ZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuXHJcbmNvbnN0IEdFVF9GSVJTVF9QUk9EVUNUUyA9IGdxbGBcclxucXVlcnkgZ2V0UHJvZHVjdHMoJHJvdzpJbnQhKXtcclxuICBwcm9kdWN0cyhmaXJzdDokcm93KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIGN1cnNvclxyXG4gICAgICBub2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgIG5vZGV7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbEludmVudG9yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWdlSW5mbyB7XHJcbiAgICAgIGhhc05leHRQYWdlXHJcbiAgICAgIGhhc1ByZXZpb3VzUGFnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKXsgICAgXHJcbiAgICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoR0VUX0ZJUlNUX1BST0RVQ1RTLCB7IHZhcmlhYmxlczogeyByb3c6IDIwIH0gfSk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuICAgIC8vY29uc29sZS5sb2coJ3N0b3JlZCBwcm9kdWN0cycsZGF0YS5wcm9kdWN0cy5lZGdlcyk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMuZWRnZXNcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgIGl0ZW1zPXtkYXRhLnByb2R1Y3RzLmVkZ2VzfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGl0ZW0ubm9kZTtcclxuICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByb2R1Y3QudmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcclxuICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZXMuZWRnZXNbMF0gPyBwcm9kdWN0LmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjIDonJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlcy5lZGdlc1swXSA/IHByb2R1Y3QuaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dCA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXsncHJvZHVjdC8nK3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgdmlldyBEZXRhaWxzIGZvciAke3Byb2R1Y3QudGl0bGV9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklOUiB7cHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyBwcm9kdWN0LnRvdGFsSW52ZW50b3J5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9SZXNvdXJjZUxpc3Q+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==