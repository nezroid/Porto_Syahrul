"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contack/page",{

/***/ "(app-pages-browser)/./src/app/contack/page.jsx":
/*!**********************************!*\
  !*** ./src/app/contack/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaMinus_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaMinus!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.module.css */ \"(app-pages-browser)/./src/app/contack/contact.module.css\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Contack() {\n    _s();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onClickHandler = ()=>{\n        if (comment.trim() !== \"\" && email.trim() !== \"\") {\n            const newComment = {\n                text: comment,\n                email: email\n            };\n            setComments((prevComments)=>[\n                    ...prevComments,\n                    newComment\n                ]);\n            setComment(\"\");\n            setEmail(\"\");\n        }\n    };\n    const onChangeCommentHandler = (e)=>{\n        setComment(e.target.value);\n    };\n    const onChangeEmailHandler = (e)=>{\n        setEmail(e.target.value);\n    };\n    const onDeleteHandler = (index)=>{\n        const newComments = [\n            ...comments\n        ];\n        newComments.splice(index, 1);\n        setComments(newComments);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Komentar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexbox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: onChangeEmailHandler,\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                placeholder: \"Your email...\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexbox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                value: comment,\n                                onChange: onChangeCommentHandler,\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                placeholder: \"Your comment...\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onClickHandler,\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    comments.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().comment),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"Email: \",\n                                        comment.email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: comment.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>onDeleteHandler(index),\n                                    className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"delete\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaMinus_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMinus, {}, void 0, false, {\n                                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Contack, \"ygYK0M4aYfswG6bL5HbxKm+RD70=\");\n_c = Contack;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contack);\nvar _c;\n$RefreshReg$(_c, \"Contack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjay9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDQztBQUNBO0FBQ3pDLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTVUsaUJBQWlCO1FBQ3JCLElBQUlOLFFBQVFPLElBQUksT0FBTyxNQUFNTCxNQUFNSyxJQUFJLE9BQU8sSUFBSTtZQUNoRCxNQUFNQyxhQUFhO2dCQUNqQkMsTUFBTVQ7Z0JBQ05FLE9BQU9BO1lBQ1Q7WUFDQUcsWUFBWSxDQUFDSyxlQUFpQjt1QkFBSUE7b0JBQWNGO2lCQUFXO1lBQzNEUCxXQUFXO1lBQ1hFLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTVEseUJBQXlCLENBQUNDO1FBQzlCWCxXQUFXVyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDM0I7SUFFQSxNQUFNQyx1QkFBdUIsQ0FBQ0g7UUFDNUJULFNBQVNTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1FLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxjQUFjO2VBQUlkO1NBQVM7UUFDakNjLFlBQVlDLE1BQU0sQ0FBQ0YsT0FBTztRQUMxQlosWUFBWWE7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ04sOERBQUNEO2dCQUFJRSxXQUFXeEIsc0VBQWdCOztrQ0FDOUIsOERBQUNzQjt3QkFBSUUsV0FBV3hCLG9FQUFjOzswQ0FDNUIsOERBQUMyQjtnQ0FBR0gsV0FBV3hCLGlFQUFXOzBDQUFFOzs7Ozs7MENBQzVCLDhEQUFDNEI7Z0NBQ0NDLE1BQUs7Z0NBQ0xiLE9BQU9aO2dDQUNQMEIsVUFBVWI7Z0NBQ1ZPLFdBQVd4QixrRUFBWTtnQ0FDdkIrQixhQUFZOzs7Ozs7Ozs7Ozs7a0NBSWhCLDhEQUFDVDt3QkFBSUUsV0FBV3hCLG9FQUFjOzswQ0FDNUIsOERBQUMyQjtnQ0FBR0gsV0FBV3hCLGlFQUFXOzBDQUFFOzs7Ozs7MENBQzVCLDhEQUFDZ0M7Z0NBQ0NoQixPQUFPZDtnQ0FDUDRCLFVBQVVqQjtnQ0FDVlcsV0FBV3hCLGtFQUFZO2dDQUN2QitCLGFBQVk7Ozs7OzswQ0FFZCw4REFBQ0U7Z0NBQU9DLFNBQVMxQjtnQ0FBZ0JnQixXQUFXeEIsbUVBQWE7MENBQUU7Ozs7Ozs7Ozs7OztvQkFLNURNLFNBQVM2QixHQUFHLENBQUMsQ0FBQ2pDLFNBQVNpQixzQkFDdEIsOERBQUNHOzRCQUFnQkUsV0FBV3hCLG9FQUFjOzs4Q0FDeEMsOERBQUNzQjs7d0NBQUk7d0NBQVFwQixRQUFRRSxLQUFLOzs7Ozs7OzhDQUMxQiw4REFBQ2tCOzhDQUFLcEIsUUFBUVMsSUFBSTs7Ozs7OzhDQUNsQiw4REFBQ3NCO29DQUFPQyxTQUFTLElBQU1oQixnQkFBZ0JDO29DQUFRSyxXQUFXeEIsc0VBQWE7OENBQ3ZFLDRFQUFDRCxrRkFBT0E7Ozs7Ozs7Ozs7OzJCQUpBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxCO0dBeEVTbEI7S0FBQUE7QUEwRVQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb250YWNrL3BhZ2UuanN4PzBlODEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhTWludXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb250YWN0Lm1vZHVsZS5jc3NcIlxyXG5mdW5jdGlvbiBDb250YWNrKCkge1xyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbW1lbnQudHJpbSgpICE9PSBcIlwiICYmIGVtYWlsLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBjb25zdCBuZXdDb21tZW50ID0ge1xyXG4gICAgICAgIHRleHQ6IGNvbW1lbnQsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICB9O1xyXG4gICAgICBzZXRDb21tZW50cygocHJldkNvbW1lbnRzKSA9PiBbLi4ucHJldkNvbW1lbnRzLCBuZXdDb21tZW50XSk7XHJcbiAgICAgIHNldENvbW1lbnQoXCJcIik7XHJcbiAgICAgIHNldEVtYWlsKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ29tbWVudEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VFbWFpbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlSGFuZGxlciA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q29tbWVudHMgPSBbLi4uY29tbWVudHNdO1xyXG4gICAgbmV3Q29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldENvbW1lbnRzKG5ld0NvbW1lbnRzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPktvbWVudGFyPC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Ym94fT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RW1haWw8L2gzPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsSGFuZGxlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsLi4uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleGJveH0+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkNvbW1lbnQ8L2gzPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50SGFuZGxlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnQuLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT5cclxuICAgICAgICAgIDxkaXY+RW1haWw6IHtjb21tZW50LmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdj57Y29tbWVudC50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZUhhbmRsZXIoaW5kZXgpfSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9PlxyXG4gICAgICAgICAgPEZhTWludXMgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1pbnVzIiwic3R5bGVzIiwiQ29udGFjayIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiZW1haWwiLCJzZXRFbWFpbCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJvbkNsaWNrSGFuZGxlciIsInRyaW0iLCJuZXdDb21tZW50IiwidGV4dCIsInByZXZDb21tZW50cyIsIm9uQ2hhbmdlQ29tbWVudEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUVtYWlsSGFuZGxlciIsIm9uRGVsZXRlSGFuZGxlciIsImluZGV4IiwibmV3Q29tbWVudHMiLCJzcGxpY2UiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZsZXhib3giLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contack/page.jsx\n"));

/***/ })

});