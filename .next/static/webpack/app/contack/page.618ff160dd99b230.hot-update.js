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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaMinus_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaMinus!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.module.css */ \"(app-pages-browser)/./src/app/contack/contact.module.css\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Contack() {\n    _s();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onClickHandler = ()=>{\n        if (comment.trim() !== \"\" && email.trim() !== \"\") {\n            const newComment = {\n                text: comment,\n                email: email\n            };\n            setComments((prevComments)=>[\n                    ...prevComments,\n                    newComment\n                ]);\n            setComment(\"\");\n            setEmail(\"\");\n        }\n    };\n    const onChangeCommentHandler = (e)=>{\n        setComment(e.target.value);\n    };\n    const onChangeEmailHandler = (e)=>{\n        setEmail(e.target.value);\n    };\n    const onDeleteHandler = (index)=>{\n        const newComments = [\n            ...comments\n        ];\n        newComments.splice(index, 1);\n        setComments(newComments);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexbox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: onChangeEmailHandler,\n                        className: \"input-box\",\n                        placeholder: \"Your email...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexbox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n                        children: \"Comment\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: comment,\n                        onChange: onChangeCommentHandler,\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                        placeholder: \"Your comment...\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClickHandler,\n                        className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            comments.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default().comment),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Email: \",\n                                comment.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: comment.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>onDeleteHandler(index),\n                            className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"delete\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaMinus_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMinus, {}, void 0, false, {\n                                fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\UTS\\\\frontand\\\\src\\\\app\\\\contack\\\\page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Contack, \"ygYK0M4aYfswG6bL5HbxKm+RD70=\");\n_c = Contack;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contack);\nvar _c;\n$RefreshReg$(_c, \"Contack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjay9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDQztBQUNBO0FBQ3pDLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTVUsaUJBQWlCO1FBQ3JCLElBQUlOLFFBQVFPLElBQUksT0FBTyxNQUFNTCxNQUFNSyxJQUFJLE9BQU8sSUFBSTtZQUNoRCxNQUFNQyxhQUFhO2dCQUNqQkMsTUFBTVQ7Z0JBQ05FLE9BQU9BO1lBQ1Q7WUFDQUcsWUFBWSxDQUFDSyxlQUFpQjt1QkFBSUE7b0JBQWNGO2lCQUFXO1lBQzNEUCxXQUFXO1lBQ1hFLFNBQVM7UUFDWDtJQUNGO0lBRUEsTUFBTVEseUJBQXlCLENBQUNDO1FBQzlCWCxXQUFXVyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDM0I7SUFFQSxNQUFNQyx1QkFBdUIsQ0FBQ0g7UUFDNUJULFNBQVNTLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1FLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxjQUFjO2VBQUlkO1NBQVM7UUFDakNjLFlBQVlDLE1BQU0sQ0FBQ0YsT0FBTztRQUMxQlosWUFBWWE7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXdkIsc0VBQWdCOzswQkFDOUIsOERBQUNzQjtnQkFBSUMsV0FBV3ZCLG9FQUFjOztrQ0FDNUIsOERBQUMwQjt3QkFBR0gsV0FBV3ZCLGlFQUFXO2tDQUFFOzs7Ozs7a0NBQzVCLDhEQUFDMkI7d0JBQ0NDLE1BQUs7d0JBQ0xaLE9BQU9aO3dCQUNQeUIsVUFBVVo7d0JBQ1ZNLFdBQVU7d0JBQ1ZPLGFBQVk7Ozs7Ozs7Ozs7OzswQkFJaEIsOERBQUNSO2dCQUFJQyxXQUFXdkIsb0VBQWM7O2tDQUM1Qiw4REFBQzBCO3dCQUFHSCxXQUFXdkIsaUVBQVc7a0NBQUU7Ozs7OztrQ0FDNUIsOERBQUMrQjt3QkFDQ2YsT0FBT2Q7d0JBQ1AyQixVQUFVaEI7d0JBQ1ZVLFdBQVd2QixrRUFBWTt3QkFDdkI4QixhQUFZOzs7Ozs7a0NBRWQsOERBQUNFO3dCQUFPQyxTQUFTekI7d0JBQWdCZSxXQUFXdkIsbUVBQWE7a0NBQUU7Ozs7Ozs7Ozs7OztZQUs1RE0sU0FBUzRCLEdBQUcsQ0FBQyxDQUFDaEMsU0FBU2lCLHNCQUN0Qiw4REFBQ0c7b0JBQWdCQyxXQUFXdkIsb0VBQWM7O3NDQUN4Qyw4REFBQ3NCOztnQ0FBSTtnQ0FBUXBCLFFBQVFFLEtBQUs7Ozs7Ozs7c0NBQzFCLDhEQUFDa0I7c0NBQUtwQixRQUFRUyxJQUFJOzs7Ozs7c0NBQ2xCLDhEQUFDcUI7NEJBQU9DLFNBQVMsSUFBTWYsZ0JBQWdCQzs0QkFBUUksV0FBV3ZCLHNFQUFhO3NDQUN2RSw0RUFBQ0Qsa0ZBQU9BOzs7Ozs7Ozs7OzttQkFKQW9COzs7Ozs7Ozs7OztBQVVsQjtHQXBFU2xCO0tBQUFBO0FBc0VULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGFjay9wYWdlLmpzeD8wZTgxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYU1pbnVzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29udGFjdC5tb2R1bGUuY3NzXCJcclxuZnVuY3Rpb24gQ29udGFjaygpIHtcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmIChjb21tZW50LnRyaW0oKSAhPT0gXCJcIiAmJiBlbWFpbC50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgbmV3Q29tbWVudCA9IHtcclxuICAgICAgICB0ZXh0OiBjb21tZW50LFxyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgfTtcclxuICAgICAgc2V0Q29tbWVudHMoKHByZXZDb21tZW50cykgPT4gWy4uLnByZXZDb21tZW50cywgbmV3Q29tbWVudF0pO1xyXG4gICAgICBzZXRDb21tZW50KFwiXCIpO1xyXG4gICAgICBzZXRFbWFpbChcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbW1lbnRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlRW1haWxIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZUhhbmRsZXIgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5ld0NvbW1lbnRzID0gWy4uLmNvbW1lbnRzXTtcclxuICAgIG5ld0NvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRDb21tZW50cyhuZXdDb21tZW50cyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Ym94fT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+RW1haWw8L2gzPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsSGFuZGxlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJveFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwuLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Ym94fT5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+Q29tbWVudDwvaDM+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRIYW5kbGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY29tbWVudC4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9PlxyXG4gICAgICAgICAgPGRpdj5FbWFpbDoge2NvbW1lbnQuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2Pntjb21tZW50LnRleHR9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlSGFuZGxlcihpbmRleCl9IGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZX0+XHJcbiAgICAgICAgICA8RmFNaW51cyAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1pbnVzIiwic3R5bGVzIiwiQ29udGFjayIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiZW1haWwiLCJzZXRFbWFpbCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJvbkNsaWNrSGFuZGxlciIsInRyaW0iLCJuZXdDb21tZW50IiwidGV4dCIsInByZXZDb21tZW50cyIsIm9uQ2hhbmdlQ29tbWVudEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUVtYWlsSGFuZGxlciIsIm9uRGVsZXRlSGFuZGxlciIsImluZGV4IiwibmV3Q29tbWVudHMiLCJzcGxpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmbGV4Ym94IiwiaDMiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contack/page.jsx\n"));

/***/ })

});