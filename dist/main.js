/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/js/index.js":
/*!*****************************!*\
  !*** ./src/img/js/index.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var newAgendBtn = document.getElementById(\"new-agend\");\n  var formAgend = document.getElementsByClassName(\"form\")[0];\n  var otherSection = document.getElementsByClassName(\"agendamento\")[0];\n  var submitBtn = document.getElementById(\"submit\");\n  if (newAgendBtn) {\n    newAgendBtn.addEventListener(\"click\", function () {\n      formAgend.style.display = \"block\";\n      if (otherSection) {\n        otherSection.style.display = \"none\";\n      }\n    });\n  }\n  if (submitBtn) {\n    submitBtn.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      insert();\n    });\n  }\n  function insert() {\n    var nameTutor = document.getElementById(\"name-tutor\");\n    var namePet = document.getElementById(\"name-pet\");\n    var number = document.getElementById(\"cellphone\");\n    var descriServ = document.getElementById(\"descri-serv\");\n    var date = document.getElementById(\"data\");\n    var hora = document.getElementById(\"hora\");\n    var horaValor = parseInt(hora.value.split(\":\")[0]);\n    console.log(\"nome do dono:\", nameTutor.value);\n    console.log(\"nome do pet:\", namePet.value);\n    console.log(\"Número:\", number.value);\n    console.log(\"Descrição:\", descriServ.value);\n    console.log(\"Data:\", date.value);\n    console.log(\"Horas:\", hora.value);\n    if (horaValor >= 9 && horaValor < 12) {\n      console.log(\"Bom dia\");\n    } else if (horaValor >= 13 && horaValor < 18) {\n      console.log(\"Boa tarde\");\n    } else {\n      console.log(\"Boa noite\");\n    }\n    otherSection.style.display = \"block\";\n    if (formAgend) {\n      formAgend.style.display = \"none\";\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/img/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/img/js/index.js"]();
/******/ 	
/******/ })()
;