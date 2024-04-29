(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROXIMATE\Colmedica-Uniandinos\landing-terminos\src\main.ts */"zUnb");


/***/ }),

/***/ "6sN6":
/*!****************************************************************************!*\
  !*** ./src/app/politica-de-privacidad/politica-de-privacidad.component.ts ***!
  \****************************************************************************/
/*! exports provided: PoliticaDePrivacidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticaDePrivacidadComponent", function() { return PoliticaDePrivacidadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PoliticaDePrivacidadComponent {
    constructor() { }
    ngOnInit() {
        this.loadFavicon('assets/favicon/ColmedicaFavicons02.png');
    }
    loadFavicon(faviconUrl) {
        this.favicon = document.createElement('link');
        this.favicon.rel = 'shortcut icon';
        this.favicon.href = faviconUrl;
        document.head.appendChild(this.favicon);
    }
    ngOnDestroy() {
        if (this.favicon) {
            document.head.removeChild(this.favicon);
        }
    }
}
PoliticaDePrivacidadComponent.ɵfac = function PoliticaDePrivacidadComponent_Factory(t) { return new (t || PoliticaDePrivacidadComponent)(); };
PoliticaDePrivacidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoliticaDePrivacidadComponent, selectors: [["app-politica-de-privacidad"]], decls: 79, vars: 0, consts: [[1, "lp-pom-body"], ["id", "lp-pom-root", 1, "lp-element", "lp-pom-root"], ["id", "lp-pom-root-color-overlay"], [1, "lp-positioned-content"], ["id", "lp-pom-text-9", 1, "lp-element", "lp-pom-text", "nlh", 2, "height", "auto"], ["name", "_Hlk147481965"], ["href", "mailto:datospersonales@umd.com.co"], ["href", "https://www.umdcentrosmedicos.com/"], ["href", "https://www.colmedica.com/"], ["id", "lp-pom-text-10", 1, "lp-element", "lp-pom-text", "nlh", 2, "height", "auto"], [2, "text-align", "center"], [2, "color", "rgb(5, 18, 80)", "font-family", "Lato", "font-weight", "900", "font-style", "normal"], ["id", "lp-pom-block-8", 1, "lp-element", "lp-pom-block"], ["id", "lp-pom-block-8-color-overlay"], [1, "lp-pom-block-content"], [1, "backdrop__3tG5Hl"]], template: function PoliticaDePrivacidadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "INFORMACI\u00D3N SOBRE EL TRATAMIENTO DE LOS DATOS PERSONALES \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Para los efectos de esta autorizaci\u00F3n, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unidad M\u00E9dica y de Diagnostico S.A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "., NIT 830.001.007-7 en adelante \u201CUMD\u201D o la \u201Cempresa\u201D se debe considerar como el Responsable del Tratamiento de sus datos personales. El tratamiento de la informaci\u00F3n personal se realizar\u00E1 de acuerdo con: (i) el presente formato de consentimiento, (ii) nuestra Pol\u00EDtica de Tratamiento de Informaci\u00F3n Personal disponible en la p\u00E1gina web y (iii) la Ley 1581 de 2012 y sus normas reglamentarias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00BFC\u00D3MO SE UTILIZAR\u00C1 ESTA INFORMACI\u00D3N?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UMD recolectar\u00E1, usar\u00E1, procesar\u00E1 y almacenar\u00E1 sus datos personales, aqu\u00ED incluidos, as\u00ED como los que recopile en el futuro de forma manual y/o automatizada, al amparo del objeto social de la UMD, el cual es la prestaci\u00F3n de los servicios m\u00E9dicos, odontol\u00F3gicos y de apoyo diagn\u00F3stico con la finalidad de enviar informaci\u00F3n comercial relacionada con los servicios que ofrece UMD, as\u00ED como de actividades complementarias o afines, por medio de e-mail, tel\u00E9fono, celular, SMS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0\u00BFCU\u00C1LES SON MIS DERECHOS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cuento con los derechos de consulta, acceso, actualizaci\u00F3n, rectificaci\u00F3n y supresi\u00F3n de la informaci\u00F3n personal, solicitar la prueba del consentimiento otorgado y a radicar el reclamo respectivo ante la Superintendencia de Industria y Comercio (SIC). Declaro que he sido informado de que, si tengo alguna duda sobre este tratamiento o quiero ejercer mis derechos, me puedo poner en contacto con la empresa, a trav\u00E9s de los canales que se indican a continuaci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Responsable del Tratamiento: Unidad M\u00E9dica y de Diagnostico S.A -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " NIT 830.001.007-7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Canales datos personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ": correo electr\u00F3nico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "datospersonales@umd.com.co");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " p\u00E1gina web www.colmedica.com /opci\u00F3n \u201CCONT\u00C1CTENOS\u201D. Direcci\u00F3n F\u00EDsica Calle 93 # 19-25 Tel\u00E9fono 7 46 46 46 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Pol\u00EDtica de Tratamiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "www.umdcentrosmedicos.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "www.colmedica.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " - men\u00FA centros m\u00E9dicos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "AUTORIZACI\u00D3N PARA EL TRATAMIENTO DE DATOS PERSONALES\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Mediante el registro de sus datos en el presente formato, yo declaro lo siguiente: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " He le\u00EDdo, entiendo y consiento de manera libre y voluntaria que el tratamiento de mis datos personales antes mencionados podr\u00E1 incluir informaci\u00F3n sensible, la cual resulta indispensable para la prestaci\u00F3n eficiente del servicio y ser\u00E1n tratados de acuerdo con los t\u00E9rminos del presente documento, la pol\u00EDtica de tratamiento de UMD y la ley aplicable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Se me ha informado que el suministro de datos de naturaleza sensible y de menores de edad (ni\u00F1os, ni\u00F1as y adolescentes), se entender\u00E1 facultativo, salvo aquellos de los que tenga una obligaci\u00F3n legal de suministrar, como los requeridos para la prestaci\u00F3n de los servicios de salud y dem\u00E1s definidos en la Ley. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Entiendo y consiento que UMD trate mis datos personales durante el tiempo que sea razonable y necesario, y manifiesto que est\u00E1 autorizaci\u00F3n se hace extensiva a las atenciones asistenciales y administrativas futuras. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "En caso de actuar en representaci\u00F3n de un menor de edad, manifiesto que cuento con la facultad legal que me permite hacer estas declaraciones en su nombre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "AUTORIZACI\u00D3N PARA EL TRATAMIENTO DE DATOS PERSONALES\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    color: #000;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #0000ff;\r\n    text-decoration: none;\r\n}\r\n\r\n#lp-pom-root[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(255, 255, 255, 1);\r\n    border-style: none;\r\n    margin: auto;\r\n    padding-top: 0px;\r\n    border-radius: 0px;\r\n    min-width: 864px;\r\n    height: 917px;\r\n}\r\n\r\n#lp-pom-block-8[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(255, 255, 255, 1);\r\n    border-style: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n    border-radius: 0px;\r\n    width: 100%;\r\n    height: 917px;\r\n    position: relative;\r\n}\r\n\r\n#lp-pom-text-9[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(255, 255, 255, 0);\r\n    border-style: none;\r\n    border-radius: 0px;\r\n    left: 45px;\r\n    top: 77px;\r\n    z-index: 1;\r\n    width: 782px;\r\n    height: 812px;\r\n    position: absolute;\r\n}\r\n\r\n#lp-pom-text-10[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(255, 255, 255, 0);\r\n    border-style: none;\r\n    border-radius: 0px;\r\n    left: 170px;\r\n    top: 38px;\r\n    z-index: 2;\r\n    width: 499px;\r\n    height: 22px;\r\n    position: absolute;\r\n}\r\n\r\n#lp-pom-root[_ngcontent-%COMP%]   .lp-positioned-content[_ngcontent-%COMP%] {\r\n    top: 0px;\r\n    width: 864px;\r\n    margin-left: -432px;\r\n}\r\n\r\n#lp-pom-block-8[_ngcontent-%COMP%]   .lp-pom-block-content[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 864px;\r\n    height: 917px;\r\n}\r\n\r\n#lp-pom-root-color-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: none;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 917px;\r\n    min-height: 100%;\r\n}\r\n\r\n#lp-pom-block-8-color-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: none;\r\n    height: 917px;\r\n    width: 100%;\r\n    ;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    #lp-pom-root[_ngcontent-%COMP%] {\r\n        display: block;\r\n        background: rgba(255, 255, 255, 1);\r\n        border-style: none;\r\n        margin: auto;\r\n        padding-top: 0px;\r\n        border-radius: 0px;\r\n        min-width: 320px;\r\n        height: 1928px;\r\n    }\r\n\r\n    #lp-pom-block-8[_ngcontent-%COMP%] {\r\n        display: block;\r\n        background: rgba(255, 255, 255, 1);\r\n        border-style: none;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-bottom: 0px;\r\n        border-radius: 0px;\r\n        width: 100%;\r\n        height: 1928px;\r\n        position: relative;\r\n    }\r\n\r\n    #lp-pom-text-9[_ngcontent-%COMP%] {\r\n        display: block;\r\n        background: rgba(255, 255, 255, 0);\r\n        border-style: none;\r\n        border-radius: 0px;\r\n        left: 17px;\r\n        top: 128px;\r\n        z-index: 1;\r\n        width: 285px;\r\n        height: 1776px;\r\n        position: absolute;\r\n    }\r\n\r\n    #lp-pom-text-10[_ngcontent-%COMP%] {\r\n        display: block;\r\n        background: rgba(255, 255, 255, 0);\r\n        border-style: none;\r\n        border-radius: 0px;\r\n        left: 25px;\r\n        top: 38px;\r\n        z-index: 2;\r\n        width: 277px;\r\n        height: 66px;\r\n        position: absolute;\r\n    }\r\n\r\n    body[_ngcontent-%COMP%] {\r\n        color: #000;\r\n    }\r\n\r\n    a[_ngcontent-%COMP%] {\r\n        color: #0000ff;\r\n        text-decoration: none;\r\n    }\r\n\r\n    #lp-pom-root[_ngcontent-%COMP%]   .lp-positioned-content[_ngcontent-%COMP%] {\r\n        top: 0px;\r\n        width: 320px;\r\n        margin-left: -160px;\r\n    }\r\n\r\n    #lp-pom-block-8[_ngcontent-%COMP%]   .lp-pom-block-content[_ngcontent-%COMP%] {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 320px;\r\n        height: 1928px;\r\n    }\r\n\r\n    #lp-pom-root-color-overlay[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        background: none;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 1928px;\r\n        min-height: 100%;\r\n    }\r\n\r\n    #lp-pom-block-8-color-overlay[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        background: none;\r\n        height: 1928px;\r\n        width: 100%;\r\n        ;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGl0aWNhLWRlLXByaXZhY2lkYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVzs7QUFFZjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxVQUFVO1FBQ1YsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO1FBQ2QscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixNQUFNO1FBQ04sV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxXQUFXOztJQUVmO0FBQ0oiLCJmaWxlIjoicG9saXRpY2EtZGUtcHJpdmFjaWRhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzAwMDBmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2xwLXBvbS1yb290IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDg2NHB4O1xyXG4gICAgaGVpZ2h0OiA5MTdweDtcclxufVxyXG5cclxuI2xwLXBvbS1ibG9jay04IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkxN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbHAtcG9tLXRleHQtOSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBsZWZ0OiA0NXB4O1xyXG4gICAgdG9wOiA3N3B4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA3ODJweDtcclxuICAgIGhlaWdodDogODEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNscC1wb20tdGV4dC0xMCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBsZWZ0OiAxNzBweDtcclxuICAgIHRvcDogMzhweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogNDk5cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNscC1wb20tcm9vdCAubHAtcG9zaXRpb25lZC1jb250ZW50IHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDg2NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00MzJweDtcclxufVxyXG5cclxuI2xwLXBvbS1ibG9jay04IC5scC1wb20tYmxvY2stY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA4NjRweDtcclxuICAgIGhlaWdodDogOTE3cHg7XHJcbn1cclxuXHJcbiNscC1wb20tcm9vdC1jb2xvci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTE3cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbHAtcG9tLWJsb2NrLTgtY29sb3Itb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgaGVpZ2h0OiA5MTdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAjbHAtcG9tLXJvb3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTkyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNscC1wb20tYmxvY2stOCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTI4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgICNscC1wb20tdGV4dC05IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICB0b3A6IDEyOHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDI4NXB4O1xyXG4gICAgICAgIGhlaWdodDogMTc3NnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAjbHAtcG9tLXRleHQtMTAge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogMzhweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHdpZHRoOiAyNzdweDtcclxuICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMGZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAjbHAtcG9tLXJvb3QgLmxwLXBvc2l0aW9uZWQtY29udGVudCB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2xwLXBvbS1ibG9jay04IC5scC1wb20tYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDE5MjhweDtcclxuICAgIH1cclxuXHJcbiAgICAjbHAtcG9tLXJvb3QtY29sb3Itb3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTkyOHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2xwLXBvbS1ibG9jay04LWNvbG9yLW92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMTkyOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CaBO":
/*!****************************************************************************************!*\
  !*** ./src/app/tratamiento-datos-personales/tratamiento-datos-personales.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TratamientoDatosPersonalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TratamientoDatosPersonalesComponent", function() { return TratamientoDatosPersonalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TratamientoDatosPersonalesComponent {
    constructor() { }
    ngOnInit() {
        this.loadFavicon('assets/favicon/ColmedicaFavicons01.png');
    }
    loadFavicon(faviconUrl) {
        this.favicon = document.createElement('link');
        this.favicon.rel = 'shortcut icon';
        this.favicon.href = faviconUrl;
        document.head.appendChild(this.favicon);
    }
    ngOnDestroy() {
        if (this.favicon) {
            document.head.removeChild(this.favicon);
        }
    }
}
TratamientoDatosPersonalesComponent.ɵfac = function TratamientoDatosPersonalesComponent_Factory(t) { return new (t || TratamientoDatosPersonalesComponent)(); };
TratamientoDatosPersonalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TratamientoDatosPersonalesComponent, selectors: [["app-tratamiento-datos-personales"]], decls: 83, vars: 0, consts: [[1, "lp-pom-body"], ["id", "lp-pom-root", 1, "lp-element", "lp-pom-root"], ["id", "lp-pom-root-color-overlay"], [1, "lp-positioned-content"], ["id", "lp-pom-text-9", 1, "lp-element", "lp-pom-text", "nlh"], [1, "lplh-22", "lplh-26", 2, "text-align", "center"], [2, "color", "rgb(255, 255, 255)"], [2, "font-family", "ubuntu"], [2, "font-size", "22px"], [2, "font-size", "16px"], [2, "line-height", "26px"], [2, "font-family", "Ubuntu"], ["href", "https://lp.colmedica.com/tratamiento-de-datos-personales/clkn/http/lp.colmedica.com/planes/medicina-prepagada/"], [2, "font-size", "14px"], [2, "font-family", "Ubuntu", "font-weight", "400", "font-style", "normal"], [2, "color", "rgb(95, 224, 255)"], [2, "font-family", "Ubuntu", "font-weight", "400", "font-style", "normal", "font-size", "14px"], ["id", "lp-pom-block-8", 1, "lp-element", "lp-pom-block"], ["id", "lp-pom-block-8-color-overlay"], [1, "lp-pom-block-content"], [1, "backdrop__3tG5Hl"]], template: function TratamientoDatosPersonalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AUTORIZACI\u00D3N PARA EL TRATAMIENTO DE DATOS PERSONALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Autorizo a COLM\u00C9DICA MEDICINA PREPAGADA S.A., para que recolecte, almacene, use o circule mis datos personales en calidad de Responsable del tratamiento de acuerdo con LA POL\u00CDTICA DE TRATAMIENTO disponible en la p\u00E1gina www.colmedica.com \u00A0y con las siguientes finalidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0\u2022\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Efectuar el registro de sus datos para comunicarnos con Usted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00A0 \u2022\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Utilizarlos con fines de publicidad y prospecci\u00F3n comercial para hacerle llegar informaci\u00F3n de los productos, servicios y actividades que ofrece Colm\u00E9dica y sus filiales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0\u2022\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Invitarlo a participar en encuestas de opini\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sus derechos como titular del dato son los previstos en la Constituci\u00F3n, la Ley 1581 de 2012, especialmente los siguientes: a. conocer, actualizar y rectificar los datos personales frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o a aquellos cuyo tratamiento est\u00E9 prohibido o no haya sido autorizado; b. Solicitar prueba de la autorizaci\u00F3n otorgada; \u00A0c. Ser informado respecto del uso que se le ha dado a mis datos personales; d. Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la normatividad vigente; e. Revocar la autorizaci\u00F3n y/o solicitar la supresi\u00F3n del dato cuando no exista deber legal o contractual que lo impida; f. Acceder en forma gratuita a los datos personales que hayan sido objeto de Tratamiento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Declaro que me han sido informados los mecanismos dispuestos por COLM\u00C9DICA MEDICINA PREPAGADA S.A., \u00A0para ejercer estos derechos, los cuales son: P\u00E1gina web:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "www.colmedica.com\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "-opci\u00F3n CONT\u00C1CTENOS-,\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "oficinas de atenci\u00F3n a nivel nacional y en la direcci\u00F3n de correspondencia Calle 93 # 19-25.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Manifiesto que la presente autorizaci\u00F3n me fue solicitada y puesta de presente antes de entregar los datos personales y que la suscribo de forma libre y voluntaria una vez le\u00EDda en su totalidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  color: #000;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: #0000ff;\r\n  text-decoration: none;\r\n}\r\n#lp-pom-root[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background: rgba(255, 255, 255, 1);\r\n  border-style: none;\r\n  margin: auto;\r\n  padding-top: 0px;\r\n  border-radius: 0px;\r\n  min-width: 864px;\r\n  height: 771px;\r\n}\r\n#lp-pom-block-8[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background: rgba(0, 96, 169, 1);\r\n  border-style: none;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 0px;\r\n  border-radius: 0px;\r\n  width: 100%;\r\n  height: 771px;\r\n  position: relative;\r\n}\r\n#lp-pom-text-9[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0);\r\n  border-style: none;\r\n  border-radius: 0px;\r\n  left: 41px;\r\n  top: 57.5px;\r\n  z-index: 1;\r\n  width: 788px;\r\n  height: 639px;\r\n  position: absolute;\r\n}\r\n#lp-pom-root[_ngcontent-%COMP%]   .lp-positioned-content[_ngcontent-%COMP%] {\r\n  top: 0px;\r\n  width: 864px;\r\n  margin-left: -432px;\r\n}\r\n\r\n#lp-pom-root-color-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: none;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 771px;\r\n  min-height: 100%;\r\n}\r\n#lp-pom-block-8-color-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: none;\r\n  height: 771px;\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  #lp-pom-root[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(255, 255, 255, 1);\r\n    border-style: none;\r\n    margin: auto;\r\n    padding-top: 0px;\r\n    border-radius: 0px;\r\n    min-width: 320px;\r\n    height: 1701px;\r\n  }\r\n  #lp-pom-block-8[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(0, 96, 169, 1);\r\n    border-style: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n    border-radius: 0px;\r\n    width: 100%;\r\n    height: 1701px;\r\n    position: relative;\r\n  }\r\n  #lp-pom-text-9[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background: rgba(255, 255, 255, 0);\r\n    border-style: none;\r\n    border-radius: 0px;\r\n    left: 12px;\r\n    top: 39.5px;\r\n    z-index: 1;\r\n    width: 285px;\r\n    height: 1549px;\r\n    transform: scale(1.05);\r\n    transform-origin: 0 0;\r\n    -webkit-transform: scale(1.05);\r\n    -webkit-transform-origin: 0 0;\r\n    position: absolute;\r\n  }\r\n  body[_ngcontent-%COMP%] {\r\n    color: #000;\r\n  }\r\n  a[_ngcontent-%COMP%] {\r\n    color: #0000ff;\r\n    text-decoration: none;\r\n  }\r\n  #lp-pom-root[_ngcontent-%COMP%]   .lp-positioned-content[_ngcontent-%COMP%] {\r\n    top: 0px;\r\n    width: 320px;\r\n    margin-left: -160px;\r\n  }\r\n  #lp-pom-block-8[_ngcontent-%COMP%]   .lp-pom-block-content[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 320px;\r\n    height: 1701px;\r\n  }\r\n  #lp-pom-root-color-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: none;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1701px;\r\n    min-height: 100%;\r\n  }\r\n  #lp-pom-block-8-color-overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: none;\r\n    height: 1701px;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXRhbWllbnRvLWRhdG9zLXBlcnNvbmFsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFFBQVE7RUFDUixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTs7Ozs7O0tBTUs7QUFDTDtFQUNFO0lBQ0UsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InRyYXRhbWllbnRvLWRhdG9zLXBlcnNvbmFsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjMDAwMGZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4jbHAtcG9tLXJvb3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBtaW4td2lkdGg6IDg2NHB4O1xyXG4gIGhlaWdodDogNzcxcHg7XHJcbn1cclxuI2xwLXBvbS1ibG9jay04IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDk2LCAxNjksIDEpO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc3MXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jbHAtcG9tLXRleHQtOSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGxlZnQ6IDQxcHg7XHJcbiAgdG9wOiA1Ny41cHg7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNzg4cHg7XHJcbiAgaGVpZ2h0OiA2MzlweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuI2xwLXBvbS1yb290IC5scC1wb3NpdGlvbmVkLWNvbnRlbnQge1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiA4NjRweDtcclxuICBtYXJnaW4tbGVmdDogLTQzMnB4O1xyXG59XHJcbi8qICNscC1wb20tYmxvY2stOCAubHAtcG9tLWJsb2NrLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogODY0cHg7XHJcbiAgaGVpZ2h0OiA3NzFweDtcclxufSAqL1xyXG4jbHAtcG9tLXJvb3QtY29sb3Itb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzcxcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG4jbHAtcG9tLWJsb2NrLTgtY29sb3Itb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgaGVpZ2h0OiA3NzFweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNscC1wb20tYmxvY2stOCAubHAtcG9tLWJsb2NrLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgIGhlaWdodDogMTcwMXB4O1xyXG4gIH0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNscC1wb20tcm9vdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMTcwMXB4O1xyXG4gIH1cclxuICAjbHAtcG9tLWJsb2NrLTgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDk2LCAxNjksIDEpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTcwMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAjbHAtcG9tLXRleHQtOSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgdG9wOiAzOS41cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDI4NXB4O1xyXG4gICAgaGVpZ2h0OiAxNTQ5cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6ICMwMDAwZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gICNscC1wb20tcm9vdCAubHAtcG9zaXRpb25lZC1jb250ZW50IHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNjBweDtcclxuICB9XHJcbiAgI2xwLXBvbS1ibG9jay04IC5scC1wb20tYmxvY2stY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMTcwMXB4O1xyXG4gIH1cclxuICAjbHAtcG9tLXJvb3QtY29sb3Itb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3MDFweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICNscC1wb20tYmxvY2stOC1jb2xvci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDE3MDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Landing-Terminos';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tratamiento_datos_personales_tratamiento_datos_personales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tratamiento-datos-personales/tratamiento-datos-personales.component */ "CaBO");
/* harmony import */ var _politica_de_privacidad_politica_de_privacidad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./politica-de-privacidad/politica-de-privacidad.component */ "6sN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _tratamiento_datos_personales_tratamiento_datos_personales_component__WEBPACK_IMPORTED_MODULE_3__["TratamientoDatosPersonalesComponent"],
        _politica_de_privacidad_politica_de_privacidad_component__WEBPACK_IMPORTED_MODULE_4__["PoliticaDePrivacidadComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tratamiento_datos_personales_tratamiento_datos_personales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tratamiento-datos-personales/tratamiento-datos-personales.component */ "CaBO");
/* harmony import */ var _politica_de_privacidad_politica_de_privacidad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./politica-de-privacidad/politica-de-privacidad.component */ "6sN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: '/tratamiento-de-datos-personales', pathMatch: 'full' },
    { path: 'tratamiento-de-datos-personales', component: _tratamiento_datos_personales_tratamiento_datos_personales_component__WEBPACK_IMPORTED_MODULE_1__["TratamientoDatosPersonalesComponent"] },
    { path: 'app-politica-de-privacidad', component: _politica_de_privacidad_politica_de_privacidad_component__WEBPACK_IMPORTED_MODULE_2__["PoliticaDePrivacidadComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map