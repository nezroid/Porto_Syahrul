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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaMinus_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaMinus!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.module.css */ \"(app-pages-browser)/./src/app/contack/contact.module.css\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Contack() {\n    _s();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onClickHandler = ()=>{\n        if (comment.trim() !== \"\" && email.trim() !== \"\") {\n            const newComment = {\n                text: comment,\n                email: email\n            };\n            setComments((prevComments)=>[\n                    ...prevComments,\n                    newComment\n                ]);\n            setComment(\"\");\n            setEmail(\"\");\n        }\n    };\n    const onChangeCommentHandler = (e)=>{\n        setComment(e.target.value);\n    };\n    const onChangeEmailHandler = (e)=>{\n        setEmail(e.target.value);\n    };\n    const onDeleteHandler = (index)=>{\n        const newComments = [\n            ...comments\n        ];\n        newComments.splice(index, 1);\n        setComments(newComments);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexbox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: onChangeEmailHandler,\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                        placeholder: \"Your email...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexbox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                        children: \"Comment\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: comment,\n                        onChange: onChangeCommentHandler,\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                        placeholder: \"Your comment...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClickHandler,\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            comments.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().comment),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Email: \",\n                                comment.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: comment.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>onDeleteHandler(index),\n                            className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"delete\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaMinus_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMinus, {}, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Contack, \"ygYK0M4aYfswG6bL5HbxKm+RD70=\");\n_c = Contack;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contack);\nvar _c;\n$RefreshReg$(_c, \"Contack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjay9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDQztBQUNBO0FBQ3pDLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTVUsaUJBQWlCO1FBQ3JCLElBQUlOLFFBQVFPLElBQUksT0FBTyxNQUFNTCxNQUFNSyxJQUFJLE9BQU8sSUFBSTtZQUNoRCxNQUFNQyxhQUFhO2dCQUNqQkMsTUFBTVQ7Z0JBQ05FLE9BQU9BO1lBQ1Q7WUFDQUcsWUFBWSxDQUFDSyxlQUFpQjt1QkFBSUE7b0JBQWNGO2lCQUFXO1lBQzNEUCxXQUFXO1lBQ1hFLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTVEseUJBQXlCLENBQUNDO1FBQzlCWCxXQUFXVyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDM0I7SUFFQSxNQUFNQyx1QkFBdUIsQ0FBQ0g7UUFDNUJULFNBQVNTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1FLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxjQUFjO2VBQUlkO1NBQVM7UUFDakNjLFlBQVlDLE1BQU0sQ0FBQ0YsT0FBTztRQUMxQlosWUFBWWE7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXdkIsc0VBQWdCOzswQkFDOUIsOERBQUNzQjtnQkFBSUMsV0FBV3ZCLG9FQUFjOztrQ0FDNUIsOERBQUMwQjt3QkFBR0gsV0FBV3ZCLGlFQUFXO2tDQUFFOzs7Ozs7a0NBQzVCLDhEQUFDMkI7d0JBQ0NDLE1BQUs7d0JBQ0xaLE9BQU9aO3dCQUNQeUIsVUFBVVo7d0JBQ1ZNLFdBQVd2QixrRUFBWTt3QkFDdkI4QixhQUFZOzs7Ozs7Ozs7Ozs7MEJBSWhCLDhEQUFDUjtnQkFBSUMsV0FBV3ZCLG9FQUFjOztrQ0FDNUIsOERBQUMwQjt3QkFBR0gsV0FBV3ZCLGlFQUFXO2tDQUFFOzs7Ozs7a0NBQzVCLDhEQUFDK0I7d0JBQ0NmLE9BQU9kO3dCQUNQMkIsVUFBVWhCO3dCQUNWVSxXQUFXdkIsa0VBQVk7d0JBQ3ZCOEIsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDRTt3QkFBT0MsU0FBU3pCO3dCQUFnQmUsV0FBV3ZCLG1FQUFhO2tDQUFFOzs7Ozs7Ozs7Ozs7WUFLNURNLFNBQVM0QixHQUFHLENBQUMsQ0FBQ2hDLFNBQVNpQixzQkFDdEIsOERBQUNHO29CQUFnQkMsV0FBV3ZCLG9FQUFjOztzQ0FDeEMsOERBQUNzQjs7Z0NBQUk7Z0NBQVFwQixRQUFRRSxLQUFLOzs7Ozs7O3NDQUMxQiw4REFBQ2tCO3NDQUFLcEIsUUFBUVMsSUFBSTs7Ozs7O3NDQUNsQiw4REFBQ3FCOzRCQUFPQyxTQUFTLElBQU1mLGdCQUFnQkM7NEJBQVFJLFdBQVd2QixzRUFBYTtzQ0FDdkUsNEVBQUNELGtGQUFPQTs7Ozs7Ozs7Ozs7bUJBSkFvQjs7Ozs7Ozs7Ozs7QUFVbEI7R0FwRVNsQjtLQUFBQTtBQXNFVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbnRhY2svcGFnZS5qc3g/MGU4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFNaW51cyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRhY3QubW9kdWxlLmNzc1wiXHJcbmZ1bmN0aW9uIENvbnRhY2soKSB7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoY29tbWVudC50cmltKCkgIT09IFwiXCIgJiYgZW1haWwudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgdGV4dDogY29tbWVudCxcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldENvbW1lbnRzKChwcmV2Q29tbWVudHMpID0+IFsuLi5wcmV2Q29tbWVudHMsIG5ld0NvbW1lbnRdKTtcclxuICAgICAgc2V0Q29tbWVudChcIlwiKTtcclxuICAgICAgc2V0RW1haWwoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb21tZW50SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUVtYWlsSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdDb21tZW50cyA9IFsuLi5jb21tZW50c107XHJcbiAgICBuZXdDb21tZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0Q29tbWVudHMobmV3Q29tbWVudHMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleGJveH0+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PkVtYWlsPC9oMz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbEhhbmRsZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbC4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhib3h9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5Db21tZW50PC9oMz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudEhhbmRsZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBjb21tZW50Li4uXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Y29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+XHJcbiAgICAgICAgICA8ZGl2PkVtYWlsOiB7Y29tbWVudC5lbWFpbH08L2Rpdj5cclxuICAgICAgICAgIDxkaXY+e2NvbW1lbnQudGV4dH08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGVIYW5kbGVyKGluZGV4KX0gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfT5cclxuICAgICAgICAgIDxGYU1pbnVzIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWNrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhTWludXMiLCJzdHlsZXMiLCJDb250YWNrIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJlbWFpbCIsInNldEVtYWlsIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsIm9uQ2xpY2tIYW5kbGVyIiwidHJpbSIsIm5ld0NvbW1lbnQiLCJ0ZXh0IiwicHJldkNvbW1lbnRzIiwib25DaGFuZ2VDb21tZW50SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlRW1haWxIYW5kbGVyIiwib25EZWxldGVIYW5kbGVyIiwiaW5kZXgiLCJuZXdDb21tZW50cyIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZsZXhib3giLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contack/page.jsx\n"));

/***/ })

});