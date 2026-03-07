/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/GlowCursor.js":
/*!**********************************!*\
  !*** ./components/GlowCursor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GlowCursor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction GlowCursor() {\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"GlowCursor.useEffect\": ()=>{\n            // 觸控裝置不套用自訂游標\n            const isTouch = window.matchMedia('(pointer: coarse)').matches;\n            if (isTouch) return;\n            // 隱藏所有元素的游標\n            const style = document.createElement('style');\n            style.innerHTML = '*, *::before, *::after { cursor: none !important; }';\n            style.id = 'cursor-none-override';\n            document.head.appendChild(style);\n            const handleMove = {\n                \"GlowCursor.useEffect.handleMove\": (e)=>{\n                    if (cursorRef.current) {\n                        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;\n                    }\n                }\n            }[\"GlowCursor.useEffect.handleMove\"];\n            window.addEventListener('mousemove', handleMove);\n            return ({\n                \"GlowCursor.useEffect\": ()=>{\n                    window.removeEventListener('mousemove', handleMove);\n                    const el = document.getElementById('cursor-none-override');\n                    if (el) el.remove();\n                }\n            })[\"GlowCursor.useEffect\"];\n        }\n    }[\"GlowCursor.useEffect\"], []);\n    const lineStyle = {\n        position: 'absolute',\n        background: 'rgba(255,255,255,0.75)',\n        pointerEvents: 'none'\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: cursorRef,\n        style: {\n            position: 'fixed',\n            left: 0,\n            top: 0,\n            pointerEvents: 'none',\n            zIndex: 9999,\n            // translate 以自身中心為基準\n            transform: 'translate3d(-9999px,-9999px,0)'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    ...lineStyle,\n                    width: 20,\n                    height: 1.5,\n                    top: -0.75,\n                    left: -10\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\components\\\\GlowCursor.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    ...lineStyle,\n                    width: 1.5,\n                    height: 20,\n                    top: -10,\n                    left: -0.75\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\components\\\\GlowCursor.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\components\\\\GlowCursor.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvR2xvd0N1cnNvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFFbEMsU0FBU0c7SUFDdEIsTUFBTUMsWUFBWUYsNkNBQU1BO0lBRXhCRCxnREFBU0E7Z0NBQUM7WUFDUixjQUFjO1lBQ2QsTUFBTUksVUFBVUMsT0FBT0MsVUFBVSxDQUFDLHFCQUFxQkMsT0FBTztZQUM5RCxJQUFJSCxTQUFTO1lBRWIsWUFBWTtZQUNaLE1BQU1JLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztZQUNyQ0YsTUFBTUcsU0FBUyxHQUFHO1lBQ2xCSCxNQUFNSSxFQUFFLEdBQUc7WUFDWEgsU0FBU0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOO1lBRTFCLE1BQU1PO21EQUFhLENBQUNDO29CQUNsQixJQUFJYixVQUFVYyxPQUFPLEVBQUU7d0JBQ3JCZCxVQUFVYyxPQUFPLENBQUNULEtBQUssQ0FBQ1UsU0FBUyxHQUFHLENBQUMsWUFBWSxFQUFFRixFQUFFRyxPQUFPLENBQUMsSUFBSSxFQUFFSCxFQUFFSSxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN0RjtnQkFDRjs7WUFFQWYsT0FBT2dCLGdCQUFnQixDQUFDLGFBQWFOO1lBQ3JDO3dDQUFPO29CQUNMVixPQUFPaUIsbUJBQW1CLENBQUMsYUFBYVA7b0JBQ3hDLE1BQU1RLEtBQUtkLFNBQVNlLGNBQWMsQ0FBQztvQkFDbkMsSUFBSUQsSUFBSUEsR0FBR0UsTUFBTTtnQkFDbkI7O1FBQ0Y7K0JBQUcsRUFBRTtJQUVMLE1BQU1DLFlBQVk7UUFDaEJDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxlQUFlO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLEtBQUs1QjtRQUNMSyxPQUFPO1lBQ0xtQixVQUFVO1lBQ1ZLLE1BQU07WUFDTkMsS0FBSztZQUNMSixlQUFlO1lBQ2ZLLFFBQVE7WUFDUixxQkFBcUI7WUFDckJoQixXQUFXO1FBQ2I7OzBCQUdBLDhEQUFDWTtnQkFBSXRCLE9BQU87b0JBQ1YsR0FBR2tCLFNBQVM7b0JBQ1pTLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JILEtBQUssQ0FBQztvQkFDTkQsTUFBTSxDQUFDO2dCQUNUOzs7Ozs7MEJBRUEsOERBQUNGO2dCQUFJdEIsT0FBTztvQkFDVixHQUFHa0IsU0FBUztvQkFDWlMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkgsS0FBSyxDQUFDO29CQUNORCxNQUFNLENBQUM7Z0JBQ1Q7Ozs7Ozs7Ozs7OztBQUlOIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXHBjIHJlc291cmNlXFx3ZWJcXHBlcnNvbmFsIHdlYnNpdGVcXGNtcyAtIFYxXFxjb21wb25lbnRzXFxHbG93Q3Vyc29yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2xvd0N1cnNvcigpIHtcbiAgY29uc3QgY3Vyc29yUmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDop7jmjqfoo53nva7kuI3lpZfnlKjoh6roqILmuLjmqJlcbiAgICBjb25zdCBpc1RvdWNoID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcbiAgICBpZiAoaXNUb3VjaCkgcmV0dXJuO1xuXG4gICAgLy8g6Zqx6JeP5omA5pyJ5YWD57Sg55qE5ri45qiZXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlubmVySFRNTCA9ICcqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHsgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7IH0nO1xuICAgIHN0eWxlLmlkID0gJ2N1cnNvci1ub25lLW92ZXJyaWRlJztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgaWYgKGN1cnNvclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGN1cnNvclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2UuY2xpZW50WH1weCwgJHtlLmNsaWVudFl9cHgsIDApYDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJzb3Itbm9uZS1vdmVycmlkZScpO1xuICAgICAgaWYgKGVsKSBlbC5yZW1vdmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e2N1cnNvclJlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAvLyB0cmFuc2xhdGUg5Lul6Ieq6Lqr5Lit5b+D54K65Z+65rqWXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC05OTk5cHgsLTk5OTlweCwwKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiDmsLTlubPnt5ogKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIC4uLmxpbmVTdHlsZSxcbiAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICBoZWlnaHQ6IDEuNSxcbiAgICAgICAgdG9wOiAtMC43NSxcbiAgICAgICAgbGVmdDogLTEwLFxuICAgICAgfX0gLz5cbiAgICAgIHsvKiDlnoLnm7Tnt5ogKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIC4uLmxpbmVTdHlsZSxcbiAgICAgICAgd2lkdGg6IDEuNSxcbiAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgdG9wOiAtMTAsXG4gICAgICAgIGxlZnQ6IC0wLjc1LFxuICAgICAgfX0gLz5cblxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiR2xvd0N1cnNvciIsImN1cnNvclJlZiIsImlzVG91Y2giLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInN0eWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaWQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVNb3ZlIiwiZSIsImN1cnJlbnQiLCJ0cmFuc2Zvcm0iLCJjbGllbnRYIiwiY2xpZW50WSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImxpbmVTdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsInBvaW50ZXJFdmVudHMiLCJkaXYiLCJyZWYiLCJsZWZ0IiwidG9wIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/GlowCursor.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"(pages-dir-node)/./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_GlowCursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlowCursor */ \"(pages-dir-node)/./components/GlowCursor.js\");\n\n\n\n\n\nconst P5Background = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/@swc\"), __webpack_require__.e(\"_pages-dir-node_components_P5Background_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/P5Background */ \"(pages-dir-node)/./components/P5Background.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"../components/P5Background\"\n        ]\n    },\n    ssr: false\n});\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P5Background, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlowCursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                style: {\n                    position: 'fixed',\n                    bottom: 20,\n                    right: 24,\n                    zIndex: 100,\n                    fontSize: 11,\n                    letterSpacing: '0.12em',\n                    color: 'rgba(255,255,255,0.3)',\n                    pointerEvents: 'none',\n                    fontFamily: \"'Inter', sans-serif\",\n                    fontWeight: 300\n                },\n                children: \"Chen Yen-Chi \\xa9 2026\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\pc resource\\\\web\\\\personal website\\\\cms - V1\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSjtBQUNTO0FBQ2U7QUFFbEQsTUFBTUcsZUFBZUYsbURBQU9BLENBQUMsSUFBTSxrVUFBb0M7Ozs7OztJQUFJRyxLQUFLOztBQUVqRSxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BELHFCQUNFOzswQkFDRSw4REFBQ0o7Ozs7OzBCQUNELDhEQUFDRCw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDSTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDQztnQkFBT0MsT0FBTztvQkFDYkMsVUFBVTtvQkFDVkMsUUFBUTtvQkFDUkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsVUFBVTtvQkFDVkMsZUFBZTtvQkFDZkMsT0FBTztvQkFDUEMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWkMsWUFBWTtnQkFDZDswQkFBRzs7Ozs7Ozs7QUFLVCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxwYyByZXNvdXJjZVxcd2ViXFxwZXJzb25hbCB3ZWJzaXRlXFxjbXMgLSBWMVxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBHbG93Q3Vyc29yIGZyb20gJy4uL2NvbXBvbmVudHMvR2xvd0N1cnNvcic7XHJcblxyXG5jb25zdCBQNUJhY2tncm91bmQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9QNUJhY2tncm91bmQnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQNUJhY2tncm91bmQgLz5cclxuICAgICAgPEdsb3dDdXJzb3IgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8Zm9vdGVyIHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgYm90dG9tOiAyMCxcclxuICAgICAgICByaWdodDogMjQsXHJcbiAgICAgICAgekluZGV4OiAxMDAsXHJcbiAgICAgICAgZm9udFNpemU6IDExLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjEyZW0nLFxyXG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjMpJyxcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCInSW50ZXInLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxyXG4gICAgICB9fT5cclxuICAgICAgICBDaGVuIFllbi1DaGkgwqkgMjAyNlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZHluYW1pYyIsIkdsb3dDdXJzb3IiLCJQNUJhY2tncm91bmQiLCJzc3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImZvb3RlciIsInN0eWxlIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInpJbmRleCIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwicG9pbnRlckV2ZW50cyIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "p5":
/*!*********************!*\
  !*** external "p5" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("p5");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();