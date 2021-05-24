(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luizun/Documentos/git/lobby-app/src/main.ts */"zUnb");


/***/ }),

/***/ "0WkM":
/*!*********************************************************************!*\
  !*** ./src/app/componnets/modal-confirm/modal-confirm.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmComponent", function() { return ModalConfirmComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/listados.service */ "Wo+T");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");





class ModalConfirmComponent {
    constructor(listadosSrv, dialogRef, data) {
        this.listadosSrv = listadosSrv;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        const { eliminar, grupo } = this.data;
        const info = this.data.info;
        this.typeGrupo = grupo;
        this.idGrupo = grupo ? info._id : info.grupo;
        if (!this.typeGrupo) {
            this.idTarjeta = info._id;
        }
        this.typeDelete = eliminar;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    eliminado() {
        if (this.typeDelete) {
            this.typeGrupo ? this.elimiarGrupo() : this.elimiarEnlace();
            return;
        }
        this.listadosSrv.quitarLista(this.listadosSrv.idGrupo, this.idTarjeta).subscribe((resp) => {
            this.listadosSrv.change.emit();
        });
        this.dialogRef.close();
    }
    elimiarEnlace() {
        this.listadosSrv.eliminarEnlace(this.listadosSrv.idGrupo, this.idTarjeta).subscribe((resp) => {
            this.listadosSrv.change.emit();
        });
        this.dialogRef.close();
    }
    elimiarGrupo() {
        this.listadosSrv.eliminarGrupo(this.listadosSrv.idGrupo).subscribe((resp) => {
            this.listadosSrv.change.emit();
        });
        this.dialogRef.close();
    }
}
ModalConfirmComponent.ɵfac = function ModalConfirmComponent_Factory(t) { return new (t || ModalConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_2__["ListadosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ModalConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalConfirmComponent, selectors: [["app-modal-confirm"]], decls: 8, vars: 2, consts: [[1, "contenido"], [1, "contenido-btn"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"]], template: function ModalConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_4_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_6_listener() { return ctx.eliminado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00BFEst\u00E1 seguro de ", ctx.typeDelete ? "eliminarlo" : "quitarlo", "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.typeDelete ? "Eliminar" : "Quitar", " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".contenido[_ngcontent-%COMP%] {\n  color: snow;\n}\n.contenido[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: snow;\n}\n.contenido[_ngcontent-%COMP%]   .contenido-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFsLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBRVIiLCJmaWxlIjoibW9kYWwtY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8ge1xuICAgIGNvbG9yOiBzbm93O1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHNub3c7XG4gICAgfVxuICAgIC5jb250ZW5pZG8tYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxufSJdfQ== */"] });


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
    production: false,
    // urlApi: 'http://localhost:5000/api/lobby/',
    // urlApi: 'https://still-eyrie-33337.herokuapp.com/api/lobby/'
    urlApi: 'https://app-lobby-luizun.herokuapp.com/api/lobby/'
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

/***/ "GG51":
/*!***************************************************************!*\
  !*** ./src/app/componnets/modal-edit/modal-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditComponent", function() { return ModalEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/listados.service */ "Wo+T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _boton_boton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../boton/boton.component */ "ZvI7");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-image-cropper */ "rIor");

















function ModalEditComponent_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.title);
} }
function ModalEditComponent_ng_container_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.title);
} }
const _c0 = function (a0) { return [a0]; };
function ModalEditComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ModalEditComponent_ng_container_0_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.changeName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function ModalEditComponent_ng_container_0_Template_div_cdkDropListDropped_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModalEditComponent_ng_container_0_div_9_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalEditComponent_ng_container_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.agregarEnlace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function ModalEditComponent_ng_container_0_Template_div_cdkDropListDropped_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ModalEditComponent_ng_container_0_div_17_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.info.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r0.todo)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.todo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r0.done)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, _r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.done);
} }
function ModalEditComponent_ng_template_1_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Privado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalEditComponent_ng_template_1_ng_container_18_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "boton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalEditComponent_ng_template_1_ng_container_18_ng_container_2_Template_boton_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r20.deleteImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r17.imgPreview, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "delete")("text", "Delete image");
} }
function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_ng_container_0_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r25.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Subir imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_image_cropper_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "image-cropper", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("imageCropped", function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_image_cropper_1_Template_image_cropper_imageCropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r27.imageCropped($event); })("imageLoaded", function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_image_cropper_1_Template_image_cropper_imageLoaded_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r29.imageLoaded(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("imageChangedEvent", ctx_r23.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_boton_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "boton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_boton_2_Template_boton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r30.cut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "content_cut")("text", "Save");
} }
function ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_ng_container_0_Template, 7, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_image_cropper_1_Template, 1, 3, "image-cropper", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_boton_2_Template, 1, 2, "boton", 27);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r19.imageChangedEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.imageChangedEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.imageChangedEvent);
} }
function ModalEditComponent_ng_template_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ModalEditComponent_ng_template_1_ng_container_18_ng_container_2_Template, 3, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ModalEditComponent_ng_template_1_ng_container_18_ng_template_3_Template, 3, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.imgPreview)("ngIfElse", _r18);
} }
function ModalEditComponent_ng_template_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "boton", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalEditComponent_ng_template_1_div_19_Template_boton_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.veryfImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r16.btnLoading ? "autorenew" : null)("text", !ctx_r16.btnLoading ? ctx_r16.data.type : null)("icon", ctx_r16.data.type === "Edit" ? "edit" : "save")("loading", ctx_r16.btnLoading)("desactivado", !ctx_r16.orderForm.valid && !ctx_r16.btnLoading);
} }
function ModalEditComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function ModalEditComponent_ng_template_1_Template_input_focusout_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.autoSubName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Abreviaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Kanji");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ModalEditComponent_ng_template_1_section_13_Template, 3, 0, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ModalEditComponent_ng_template_1_ng_container_18_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ModalEditComponent_ng_template_1_div_19_Template, 2, 5, "div", 19);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.orderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.listadosSrv.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.data.type === "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.imageChangedEvent);
} }
class ModalEditComponent {
    constructor(dialog, listadosSrv, formBuilder, dialogRef, data) {
        this.dialog = dialog;
        this.listadosSrv = listadosSrv;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.imgPreview = '';
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.todo = [];
        this.done = [];
    }
    ngOnInit() {
        this.formInit();
        this.grupo = this.data.grupo;
        this.info = this.data.info;
        if (!this.grupo && this.data.type === 'Edit') {
            this.imgPreview = this.info.imgUrl;
            this.orderForm.setValue({
                nombre: this.info.title,
                url: this.info.url,
                subNombre: this.info.subtitle,
                kanji: this.info.kanji,
                privado: this.info.privado,
                img: this.info.imgUrl
            });
        }
        if (this.grupo && this.data.type === 'Edit') {
            this.getListado();
            this.todo = this.info.listadoId;
        }
    }
    formInit() {
        this.orderForm = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            subNombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            kanji: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            privado: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    changeName(event) {
        this.info.name = event.target.value;
        this.edirGrupo();
    }
    veryfImage() {
        if (!this.orderForm.valid || this.btnLoading) {
            return;
        }
        if (this.imgFile) {
            const form = new FormData();
            form.append('file', this.imgFile);
            this.listadosSrv.subirImg(form).subscribe((data) => {
                this.orderForm.controls['img'].setValue(String(data.secure_url));
                this.editar();
            }, () => {
                this.editar();
                this.listadosSrv.alertaError(false, 'Error al guardar imagen');
            });
        }
        this.editar();
    }
    editar() {
        this.btnLoading = true;
        const { img: imgUrl, nombre: title, url, subNombre: subtitle, kanji, privado } = this.orderForm.value;
        const payload = {
            imgUrl,
            title,
            url,
            subtitle,
            kanji,
            privado
        };
        if (this.data.type === 'Edit') {
            this.listadosSrv.putDato(this.info._id, payload).subscribe((data) => {
                this.dialogRef.close();
                if (!data.ok) {
                    this.listadosSrv.alertaError(false);
                    return;
                }
                else {
                    this.listadosSrv.alertaOk();
                }
                this.listadosSrv.change.emit();
                this.btnLoading = true;
            });
        }
        else {
            this.listadosSrv.agregarDato(payload).subscribe((data) => {
                this.dialogRef.close();
                if (!data.ok) {
                    this.listadosSrv.alertaError(false);
                }
                else {
                    this.listadosSrv.alertaOk();
                }
                this.btnLoading = true;
            });
        }
    }
    edirGrupo() {
        const listadoId = this.info.listadoId.reduce((accumulator, currentValue) => [...accumulator, currentValue._id], []);
        const payload = {
            name: this.info.name,
            listadoId
        };
        this.listadosSrv.putGrupo(this.info._id, payload).subscribe((data) => {
            if (!data.ok) {
                this.dialogRef.close();
                this.listadosSrv.alertaError(true);
            }
        });
    }
    getListado() {
        this.listadosSrv.getListaTotal().subscribe((data) => {
            this.done = data.result;
        });
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.edirGrupo();
    }
    agregarEnlace() {
        const dialogRef = this.dialog.open(ModalEditComponent, {
            width: '250px',
            data: { type: 'Crear', info: {}, grupo: false }
        });
        dialogRef.afterClosed().subscribe(() => {
            setTimeout(() => {
                this.getListado();
            }, 1000);
        });
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
        const block = this.croppedImage.split(";");
        const contentType = block[0].split(":")[1];
        const realData = block[1].split(",")[1];
        const blob = this.b64toBlob(realData, contentType, 512);
        const file = this.blobToFile(blob, 'img.png');
        this.imgFile = new File([file], "img.png", { type: "image/png" });
    }
    cut() {
        this.imgPreview = this.croppedImage;
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    deleteImg() {
        this.imageChangedEvent = '';
        this.imgPreview = '';
        this.croppedImage = '';
        this.orderForm.controls['img'].setValue('');
    }
    b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        const byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    blobToFile(theBlob, fileName) {
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }
    autoSubName(event) {
        const filterValue = event.target.value;
        if (this.data.type === 'Edit') {
            return;
        }
        const splitName = filterValue.split(' ');
        const nuevoSubNombre = splitName.length === 1 ? splitName[0].slice(0, 2).toLocaleLowerCase() : `${splitName[0].slice(0, 1).toLocaleLowerCase()}${splitName[1].slice(0, 1).toLocaleLowerCase()}`;
        this.orderForm.controls['subNombre'].setValue(nuevoSubNombre);
    }
}
ModalEditComponent.ɵfac = function ModalEditComponent_Factory(t) { return new (t || ModalEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__["ListadosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ModalEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModalEditComponent, selectors: [["app-modal-edit"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["dato", ""], [1, "contenido-datos"], [1, "example-container"], ["matInput", "", "maxlength", "20", 3, "value", "keyup"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "contenido-boton"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["doneList", "cdkDropList"], ["cdkDrag", "", 1, "example-box"], [3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "nombre", "maxlength", "20", 3, "focusout"], ["matInput", "", "type", "text", "formControlName", "subNombre", "maxlength", "4"], ["matInput", "", "type", "text", "formControlName", "kanji", "maxlength", "3"], ["class", "checkbox", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "url"], [4, "ngIf"], ["class", "contenido-boton", 4, "ngIf"], [1, "checkbox"], ["formControlName", "privado"], [1, "contenido-img"], ["addImg", ""], ["width", "100%", 3, "src"], [3, "icon", "text", "click"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", 4, "ngIf"], [3, "icon", "text", "click", 4, "ngIf"], ["type", "file", "name", "file", "id", "file", "accept", "image/*", 1, "input-file", 3, "change"], ["for", "file"], ["mat-menu-item", "", 1, "btn"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "imageCropped", "imageLoaded"], [3, "icon", "text", "loading", "desactivado", "click"]], template: function ModalEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ModalEditComponent_ng_container_0_Template, 18, 11, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalEditComponent_ng_template_1_Template, 20, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.grupo)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_11__["BotonComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_13__["ImageCropperComponent"]], styles: ["@charset \"UTF-8\";\n.contenido-boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\nmat-label[_ngcontent-%COMP%] {\n  color: snow;\n}\ninput[_ngcontent-%COMP%] {\n  color: snow;\n}\n.contenido-datos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.example-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #1c1e21;\n  min-height: 60px;\n  background: #1c1e21;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n.contenido-boton[_ngcontent-%COMP%] {\n  justify-content: center;\n  height: 56.563px;\n  display: flex;\n  align-items: center;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #1c1e21;\n  color: snow;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: #242526;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n  .mat-form-field-infix {\n  width: auto !important;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nform[_ngcontent-%COMP%]   .contenido-img[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n}\n.input-file[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.input-file[_ngcontent-%COMP%]    + .js-labelFile[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 10px;\n  cursor: pointer;\n}\n.input-file[_ngcontent-%COMP%]    + .js-labelFile[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  content: \"\uF093\";\n}\n.input-file[_ngcontent-%COMP%]    + .js-labelFile.has-file[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\n  content: \"\uF00C\";\n  color: #5AAC7B;\n}\n.btn[_ngcontent-%COMP%] {\n  color: snow;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: snow;\n}\n.checkbox[_ngcontent-%COMP%] {\n  color: snow;\n  padding-bottom: 1.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFsLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7QUFHSjtBQURBO0VBQ0ksV0FBQTtBQUlKO0FBRkE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUFLSjtBQUZBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUtGO0FBRkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtGO0FBRkE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBS0o7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUtGO0FBRkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFLRjtBQUFBO0VBQ0UsVUFBQTtBQUdGO0FBQUE7RUFDRSxzREFBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0FBR0Y7QUFBQTtFQUNFLHNEQUFBO0FBR0Y7QUFBQTtFQUNJLHNCQUFBO0FBR0o7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUdGO0FBRkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFJSjtBQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHRDtBQUZFO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJSjtBQUhJO0VBRUUsWUFBQTtBQUlOO0FBRE07RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUVSO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFFRTtFQUNFLFdBQUE7QUFBSjtBQUlBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBREYiLCJmaWxlIjoibW9kYWwtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8tYm90b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbm1hdC1sYWJlbCB7XG4gICAgY29sb3I6IHNub3c7XG59XG5pbnB1dCB7XG4gICAgY29sb3I6IHNub3c7XG59XG4uY29udGVuaWRvLWRhdG9zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5leGFtcGxlLWxpc3Qge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMWMxZTIxO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMWMxZTIxO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGVuaWRvLWJvdG9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDU2LjU2M3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzFjMWUyMTtcbiAgY29sb3I6IHNub3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiAjMjQyNTI2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLmNvbnRlbmlkby1pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5pbnB1dC1maWxlIHtcblx0d2lkdGg6IDAuMXB4O1xuXHRoZWlnaHQ6IDAuMXB4O1xuXHRvcGFjaXR5OiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IC0xO1xuICArIC5qcy1sYWJlbEZpbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5pY29uOmJlZm9yZSB7XG4gICAgICAvL2ZvbnQtYXdlc29tZVxuICAgICAgY29udGVudDogXCJcXGYwOTNcIjtcbiAgICB9XG4gICAgJi5oYXMtZmlsZSB7XG4gICAgICAuaWNvbjpiZWZvcmUge1xuICAgICAgICAvL2ZvbnQtYXdlc29tZVxuICAgICAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICAgICAgICBjb2xvcjogIzVBQUM3QjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ0biB7XG4gIGNvbG9yOiBzbm93O1xuICBtYXQtaWNvbiB7XG4gICAgY29sb3I6IHNub3c7XG4gIH1cbn1cblxuLmNoZWNrYm94IHtcbiAgY29sb3I6IHNub3c7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ "Jgbd":
/*!*************************************************!*\
  !*** ./src/app/componnets/componnets.module.ts ***!
  \*************************************************/
/*! exports provided: CompoentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoentsModule", function() { return CompoentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tarjeta/tarjeta.component */ "k3iJ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _columna_columna_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./columna/columna.component */ "hhhB");
/* harmony import */ var _boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./boton-option/boton-option.component */ "wJFS");
/* harmony import */ var _boton_boton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boton/boton.component */ "ZvI7");
/* harmony import */ var _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-edit/modal-edit.component */ "GG51");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-image-cropper */ "rIor");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "uXqD");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _ajuste_tarjeta_ajuste_tarjeta_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ajuste-tarjeta/ajuste-tarjeta.component */ "xSme");
/* harmony import */ var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal-confirm/modal-confirm.component */ "0WkM");
/* harmony import */ var _edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-perfil/edit-perfil.component */ "e3ox");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class CompoentsModule {
}
CompoentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: CompoentsModule });
CompoentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function CompoentsModule_Factory(t) { return new (t || CompoentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](CompoentsModule, { declarations: [_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__["TarjetaComponent"],
        _columna_columna_component__WEBPACK_IMPORTED_MODULE_8__["ColumnaComponent"],
        _boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_9__["BotonOptionComponent"],
        _boton_boton_component__WEBPACK_IMPORTED_MODULE_10__["BotonComponent"],
        _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_11__["ModalEditComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
        _ajuste_tarjeta_ajuste_tarjeta_component__WEBPACK_IMPORTED_MODULE_19__["AjusteTarjetaComponent"],
        _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__["ModalConfirmComponent"],
        _edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_21__["EditPerfilComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]], exports: [_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_2__["TarjetaComponent"],
        _columna_columna_component__WEBPACK_IMPORTED_MODULE_8__["ColumnaComponent"],
        _boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_9__["BotonOptionComponent"],
        _boton_boton_component__WEBPACK_IMPORTED_MODULE_10__["BotonComponent"],
        _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_11__["ModalEditComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
        _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_20__["ModalConfirmComponent"]] }); })();


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
/* harmony import */ var _services_listados_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/listados.service */ "Wo+T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(listadosService) {
        this.listadosService = listadosService;
        this.title = 'lobby-app';
        if (!localStorage.getItem('key')) {
            localStorage.setItem('key', 'No Admin');
        }
        if (!localStorage.getItem('ajuste-tarjetas')) {
            localStorage.setItem('ajuste-tarjetas', 'Column');
        }
        if (!localStorage.getItem('ajuste-subnombre')) {
            localStorage.setItem('ajuste-subnombre', 'false');
        }
        if (!localStorage.getItem('ajuste-kanji')) {
            localStorage.setItem('ajuste-kanji', 'false');
        }
        // this.listadosService.validAdmin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_listados_service__WEBPACK_IMPORTED_MODULE_1__["ListadosService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");


class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(route, state) {
        this.auth.isAuthenticated$.subscribe((auth) => {
            if (!auth) {
                this.auth.loginWithRedirect();
            }
        });
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Wo+T":
/*!**********************************************!*\
  !*** ./src/app/services/listados.service.ts ***!
  \**********************************************/
/*! exports provided: ListadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosService", function() { return ListadosService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");







class ListadosService {
    constructor(_snackBar, http, auth) {
        this._snackBar = _snackBar;
        this.http = http;
        this.auth = auth;
        this.admin = false;
        this.totalTarjetas = 0;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ajusteTarjetas = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth.user$.subscribe((user) => this.client = user.sub.replace('auth0|', ''));
    }
    getUser() {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('client_id', this.client)
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}usuario`, options);
    }
    putUser(data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}usuario/${this.client}`, data);
    }
    crearGrupo() {
        const data = {
            client_id: this.client
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo`, data);
    }
    getGrupos() {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('client_id', this.client)
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo-listdo`, options);
    }
    putGruposOrden(data) {
        data.client_id = this.client;
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo/orden`, data);
    }
    getListaTotal() {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('client_id', this.client)
        };
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}lista`, options);
    }
    putDato(id, data) {
        data.client_id = this.client;
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}lista/${id}`, data);
    }
    putGrupo(id, data) {
        data.client_id = this.client;
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo/${id}`, data);
    }
    quitarLista(idGrupo, idTarjeta) {
        const data = {
            client_id: this.client
        };
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo/${idGrupo}/lista/${idTarjeta}`, data);
    }
    eliminarEnlace(idGrupo, idTarjeta) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo/${idGrupo}/lista/${idTarjeta}`);
    }
    eliminarGrupo(idGrupo) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}grupo/${idGrupo}`);
    }
    agregarDato(data) {
        data.client_id = this.client;
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi}lista`, data);
    }
    alertaError(emit, message) {
        let mensaje = message ? message : '⚠️ Error: No eres Admin 🔑';
        if (emit) {
            this.change.emit();
        }
        this._snackBar.open(mensaje, '❌', {
            duration: 5000,
        });
    }
    alertaOk() {
        this._snackBar.open('✔️ Se guardo correctamente', '', {
            duration: 2000,
        });
    }
    subirImg(file) {
        return this.http.post('https://api.cloudinary.com/v1_1/dzbpfuieg/image/upload?upload_preset=me7wb9ao', file);
    }
}
ListadosService.ɵfac = function ListadosService_Factory(t) { return new (t || ListadosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ListadosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ListadosService, factory: ListadosService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _componnets_componnets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componnets/componnets.module */ "Jgbd");
/* harmony import */ var _material_components_material_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-components/material-components.module */ "vPA8");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["es_ES"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _componnets_componnets_module__WEBPACK_IMPORTED_MODULE_8__["CompoentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _material_components_material_components_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__["AuthModule"].forRoot({
                domain: 'luizun.auth0.com',
                clientId: 'tDYc9Szsf1vWk3KM5Pv3Ty5fCOSwuMA1',
                cacheLocation: 'localstorage',
                useRefreshTokens: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _componnets_componnets_module__WEBPACK_IMPORTED_MODULE_8__["CompoentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _material_components_material_components_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_10__["AuthModule"]] }); })();


/***/ }),

/***/ "ZvI7":
/*!*****************************************************!*\
  !*** ./src/app/componnets/boton/boton.component.ts ***!
  \*****************************************************/
/*! exports provided: BotonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonComponent", function() { return BotonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");




const _c0 = function (a0) { return { "rotating": a0 }; };
function BotonComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.icon);
} }
function BotonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.text);
} }
const _c1 = function (a0) { return { "only": a0 }; };
class BotonComponent {
    constructor() {
        this.desactivado = false;
        this.loading = false;
    }
    ngOnInit() {
    }
}
BotonComponent.ɵfac = function BotonComponent_Factory(t) { return new (t || BotonComponent)(); };
BotonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BotonComponent, selectors: [["boton"]], inputs: { text: "text", icon: "icon", desactivado: "desactivado", loading: "loading" }, decls: 3, vars: 6, consts: [["mat-menu-item", "", 3, "disabled", "ngClass"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"]], template: function BotonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BotonComponent_mat_icon_1_Template, 2, 4, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BotonComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.desactivado)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.icon && !ctx.text || !ctx.icon && ctx.text));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-gap: 0.5rem;\n  align-items: center;\n  justify-items: center;\n  color: snow;\n}\nbutton.only[_ngcontent-%COMP%] {\n  grid-template-columns: auto;\n}\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: snow;\n}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: snow !important;\n  margin-right: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvdG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSwyQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7QUFFSiIsImZpbGUiOiJib3Rvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBncmlkLWdhcDogMC41cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBzbm93O1xuICAgICYub25seSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICB9XG4gICAgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogc25vdztcbiAgICB9XG59XG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24ge1xuICAgIGNvbG9yOiBzbm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "e3ox":
/*!*****************************************************************!*\
  !*** ./src/app/componnets/edit-perfil/edit-perfil.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditPerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPerfilComponent", function() { return EditPerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EditPerfilComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditPerfilComponent.ɵfac = function EditPerfilComponent_Factory(t) { return new (t || EditPerfilComponent)(); };
EditPerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPerfilComponent, selectors: [["app-edit-perfil"]], decls: 3, vars: 0, consts: [[1, "contenido"]], template: function EditPerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBlcmZpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "hhhB":
/*!*********************************************************!*\
  !*** ./src/app/componnets/columna/columna.component.ts ***!
  \*********************************************************/
/*! exports provided: ColumnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnaComponent", function() { return ColumnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/listados.service */ "Wo+T");
/* harmony import */ var _boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boton-option/boton-option.component */ "wJFS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tarjeta/tarjeta.component */ "k3iJ");








const _c0 = function (a0) { return { "row": a0 }; };
function ColumnaComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tarjeta", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const lista_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r0.colum));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datos", lista_r1);
} }
class ColumnaComponent {
    constructor(listadosSrv) {
        this.listadosSrv = listadosSrv;
        this.cambio = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.changeColums();
        this.columSub = this.listadosSrv.ajusteTarjetas.subscribe(() => this.changeColums());
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.listado.listadoId, event.previousIndex, event.currentIndex);
    }
    changeColums() {
        this.colum = localStorage.getItem('ajuste-tarjetas') === 'Column';
    }
    tarjetaSelect() {
        this.listadosSrv.idGrupo = this.listado._id;
    }
}
ColumnaComponent.ɵfac = function ColumnaComponent_Factory(t) { return new (t || ColumnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_2__["ListadosService"])); };
ColumnaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColumnaComponent, selectors: [["app-columna"]], inputs: { listado: "listado", list: "list" }, outputs: { cambio: "cambio" }, decls: 7, vars: 8, consts: [[1, "tarjeta-grupo", 3, "click"], [1, "title-grupo"], [3, "type", "data", "grupo"], ["cdkDropList", "", 1, "list-column", 3, "ngClass", "cdkDropListDropped"], [4, "ngFor", "ngForOf"], [1, "box", 3, "ngClass"], [3, "datos"]], template: function ColumnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnaComponent_Template_div_click_0_listener() { return ctx.tarjetaSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "boton-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ColumnaComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColumnaComponent_ng_container_6_Template, 3, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listado.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "Edit")("data", ctx.listado)("grupo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.colum));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listado.listadoId);
    } }, directives: [_boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_3__["BotonOptionComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_5__["TarjetaComponent"]], styles: [".cdk-overlay-container[_ngcontent-%COMP%], body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%;width:100%}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:none;outline:0}\ndl[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin-top:0}\naddress[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin-bottom:1em}\n.ant-motion-collapse[_ngcontent-%COMP%], .ant-motion-collapse-legacy[_ngcontent-%COMP%], .cdk-visually-hidden[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]:not(:root){overflow:hidden}\nbutton[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{overflow:visible}\npre[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{overflow:auto}\ndd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], legend[_ngcontent-%COMP%]{margin-bottom:.5em}\nprogress[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{vertical-align:baseline}\n.anticon[_ngcontent-%COMP%], button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}\n[ant-click-animating-without-extra-node=true][_ngcontent-%COMP%], [ant-click-animating=true][_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{position:relative}\n.cdk-overlay-backdrop[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{-webkit-tap-highlight-color:transparent}\n[class*=ant-][_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-clear, [class*=ant-][_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-reveal, [class*=ant-][_ngcontent-%COMP%]::-ms-clear, [class^=ant-][_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-clear, [class^=ant-][_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-reveal, [class^=ant-][_ngcontent-%COMP%]::-ms-clear{display:none}\n[class*=ant-][_ngcontent-%COMP%], [class*=ant-][_ngcontent-%COMP%]   *[_ngcontent-%COMP%], [class*=ant-][_ngcontent-%COMP%]   [_ngcontent-%COMP%]::after, [class*=ant-][_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before, [class^=ant-][_ngcontent-%COMP%], [class^=ant-][_ngcontent-%COMP%]   *[_ngcontent-%COMP%], [class^=ant-][_ngcontent-%COMP%]   [_ngcontent-%COMP%]::after, [class^=ant-][_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before{box-sizing:border-box}\ninput[_ngcontent-%COMP%]::-ms-clear, input[_ngcontent-%COMP%]::-ms-reveal{display:none}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::after, [_ngcontent-%COMP%]::before{box-sizing:border-box}\nhtml[_ngcontent-%COMP%]{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;--antd-wave-shadow-color:#1890ff;--scroll-bar:0}\nbody[_ngcontent-%COMP%]{margin:0;color:rgba(0,0,0,.85);font-size:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-variant:tabular-nums;line-height:1.5715;background-color:#fff;font-feature-settings:'tnum'}\n[tabindex='-1'][_ngcontent-%COMP%]:focus{outline:0!important}\nhr[_ngcontent-%COMP%]{box-sizing:content-box;height:0}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-weight:500}\nabbr[data-original-title][_ngcontent-%COMP%], abbr[title][_ngcontent-%COMP%]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;border-bottom:0;cursor:help}\naddress[_ngcontent-%COMP%]{font-style:normal;line-height:inherit}\ninput[type=password][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{-webkit-appearance:none}\nol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:0}\ndt[_ngcontent-%COMP%]{font-weight:500}\ndd[_ngcontent-%COMP%]{margin-left:0}\nblockquote[_ngcontent-%COMP%], figure[_ngcontent-%COMP%]{margin:0 0 1em}\ndfn[_ngcontent-%COMP%]{font-style:italic}\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}\nsmall[_ngcontent-%COMP%]{font-size:80%}\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0}\nsub[_ngcontent-%COMP%]{bottom:-.25em}\nsup[_ngcontent-%COMP%]{top:-.5em}\na[_ngcontent-%COMP%]{color:#1890ff;background-color:transparent;cursor:pointer;transition:color .3s;-webkit-text-decoration-skip:objects}\na[_ngcontent-%COMP%]:hover{color:#40a9ff}\na[_ngcontent-%COMP%]:active{color:#096dd9}\na[disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.25);cursor:not-allowed;pointer-events:none}\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-size:1em;font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace}\nimg[_ngcontent-%COMP%]{vertical-align:middle;border-style:none}\n[role=button][_ngcontent-%COMP%], a[_ngcontent-%COMP%], area[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type=range]), label[_ngcontent-%COMP%], select[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{touch-action:manipulation}\ntable[_ngcontent-%COMP%]{border-collapse:collapse}\ncaption[_ngcontent-%COMP%]{padding-top:.75em;padding-bottom:.3em;color:rgba(0,0,0,.45);text-align:left;caption-side:bottom}\nth[_ngcontent-%COMP%]{text-align:inherit}\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin:0;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}\n[type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%], button[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type=button][_ngcontent-%COMP%]{-webkit-appearance:button}\n[type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner, button[_ngcontent-%COMP%]::-moz-focus-inner{padding:0;border-style:none}\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%]{box-sizing:border-box;padding:0}\ninput[type=date][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%]{-webkit-appearance:listbox}\ntextarea[_ngcontent-%COMP%]{resize:vertical}\nfieldset[_ngcontent-%COMP%]{min-width:0;margin:0;padding:0;border:0}\nlegend[_ngcontent-%COMP%]{display:block;width:100%;max-width:100%;padding:0;color:inherit;font-size:1.5em;line-height:inherit;white-space:normal}\n[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}\n[type=search][_ngcontent-%COMP%]{outline-offset:-2px;-webkit-appearance:none}\n[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}\n[_ngcontent-%COMP%]::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}\noutput[_ngcontent-%COMP%]{display:inline-block}\nsummary[_ngcontent-%COMP%]{display:list-item}\ntemplate[_ngcontent-%COMP%]{display:none}\n[hidden][_ngcontent-%COMP%]{display:none!important}\n.clearfix[_ngcontent-%COMP%]::after, .clearfix[_ngcontent-%COMP%]::before{display:table;content:''}\nmark[_ngcontent-%COMP%]{padding:.2em;background-color:#feffe6}\n[_ngcontent-%COMP%]::selection{color:#fff;background:#1890ff}\n.clearfix[_ngcontent-%COMP%]::after{clear:both}\n.anticon[_ngcontent-%COMP%], .anticon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-block}\n.anticon[_ngcontent-%COMP%]{color:inherit;font-style:normal;line-height:0;text-align:center;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.anticon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{line-height:1}\n.anticon[_ngcontent-%COMP%]::before{display:none}\n.anticon[_ngcontent-%COMP%]   .anticon-icon[_ngcontent-%COMP%]{display:block}\n.anticon[tabindex][_ngcontent-%COMP%]{cursor:pointer}\n.anticon-spin[_ngcontent-%COMP%], .anticon-spin[_ngcontent-%COMP%]::before{display:inline-block;animation:loadingCircle 1s infinite linear}\n.fade-appear[_ngcontent-%COMP%], .fade-enter[_ngcontent-%COMP%], .fade-leave[_ngcontent-%COMP%]{animation-timing-function:linear}\n.fade-appear[_ngcontent-%COMP%], .fade-enter[_ngcontent-%COMP%], .fade-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.fade-appear.fade-appear-active[_ngcontent-%COMP%], .fade-enter.fade-enter-active[_ngcontent-%COMP%]{animation-name:antFadeIn;animation-play-state:running}\n.fade-leave.fade-leave-active[_ngcontent-%COMP%]{animation-name:antFadeOut;animation-play-state:running;pointer-events:none}\n.fade-appear[_ngcontent-%COMP%], .fade-enter[_ngcontent-%COMP%]{opacity:0}\n@keyframes antFadeIn{0%{opacity:0}100%{opacity:1}}\n@keyframes antFadeOut{0%{opacity:1}100%{opacity:0}}\n.move-up-appear[_ngcontent-%COMP%], .move-up-enter[_ngcontent-%COMP%], .move-up-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.move-up-appear.move-up-appear-active[_ngcontent-%COMP%], .move-up-enter.move-up-enter-active[_ngcontent-%COMP%]{animation-name:antMoveUpIn;animation-play-state:running}\n.move-up-leave.move-up-leave-active[_ngcontent-%COMP%]{animation-name:antMoveUpOut;animation-play-state:running;pointer-events:none}\n.move-up-appear[_ngcontent-%COMP%], .move-up-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.move-up-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.6,.04,.98,.34)}\n.move-down-appear[_ngcontent-%COMP%], .move-down-enter[_ngcontent-%COMP%], .move-down-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.move-down-appear.move-down-appear-active[_ngcontent-%COMP%], .move-down-enter.move-down-enter-active[_ngcontent-%COMP%]{animation-name:antMoveDownIn;animation-play-state:running}\n.move-down-leave.move-down-leave-active[_ngcontent-%COMP%]{animation-name:antMoveDownOut;animation-play-state:running;pointer-events:none}\n.move-down-appear[_ngcontent-%COMP%], .move-down-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.move-down-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.6,.04,.98,.34)}\n.move-left-appear[_ngcontent-%COMP%], .move-left-enter[_ngcontent-%COMP%], .move-left-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.move-left-appear.move-left-appear-active[_ngcontent-%COMP%], .move-left-enter.move-left-enter-active[_ngcontent-%COMP%]{animation-name:antMoveLeftIn;animation-play-state:running}\n.move-left-leave.move-left-leave-active[_ngcontent-%COMP%]{animation-name:antMoveLeftOut;animation-play-state:running;pointer-events:none}\n.move-left-appear[_ngcontent-%COMP%], .move-left-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.move-left-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.6,.04,.98,.34)}\n.move-right-appear[_ngcontent-%COMP%], .move-right-enter[_ngcontent-%COMP%], .move-right-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.move-right-appear.move-right-appear-active[_ngcontent-%COMP%], .move-right-enter.move-right-enter-active[_ngcontent-%COMP%]{animation-name:antMoveRightIn;animation-play-state:running}\n.move-right-leave.move-right-leave-active[_ngcontent-%COMP%]{animation-name:antMoveRightOut;animation-play-state:running;pointer-events:none}\n.move-right-appear[_ngcontent-%COMP%], .move-right-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.move-right-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.6,.04,.98,.34)}\n@keyframes antMoveDownIn{0%{transform:translateY(100%);transform-origin:0 0;opacity:0}100%{transform:translateY(0);transform-origin:0 0;opacity:1}}\n@keyframes antMoveDownOut{0%{transform:translateY(0);transform-origin:0 0;opacity:1}100%{transform:translateY(100%);transform-origin:0 0;opacity:0}}\n@keyframes antMoveLeftIn{0%{transform:translateX(-100%);transform-origin:0 0;opacity:0}100%{transform:translateX(0);transform-origin:0 0;opacity:1}}\n@keyframes antMoveLeftOut{0%{transform:translateX(0);transform-origin:0 0;opacity:1}100%{transform:translateX(-100%);transform-origin:0 0;opacity:0}}\n@keyframes antMoveRightIn{0%{transform:translateX(100%);transform-origin:0 0;opacity:0}100%{transform:translateX(0);transform-origin:0 0;opacity:1}}\n@keyframes antMoveRightOut{0%{transform:translateX(0);transform-origin:0 0;opacity:1}100%{transform:translateX(100%);transform-origin:0 0;opacity:0}}\n@keyframes antMoveUpIn{0%{transform:translateY(-100%);transform-origin:0 0;opacity:0}100%{transform:translateY(0);transform-origin:0 0;opacity:1}}\n@keyframes antMoveUpOut{0%{transform:translateY(0);transform-origin:0 0;opacity:1}100%{transform:translateY(-100%);transform-origin:0 0;opacity:0}}\n@keyframes loadingCircle{100%{transform:rotate(360deg)}}\n.ant-click-animating-node[_ngcontent-%COMP%], [ant-click-animating-without-extra-node=true][_ngcontent-%COMP%]::after{position:absolute;top:0;right:0;bottom:0;left:0;display:block;border-radius:inherit;box-shadow:0 0 0 0 #1890ff;box-shadow:0 0 0 0 var(--antd-wave-shadow-color);opacity:.2;animation:fadeEffect 2s cubic-bezier(.08,.82,.17,1),waveEffect .4s cubic-bezier(.08,.82,.17,1);animation-fill-mode:forwards;content:'';pointer-events:none}\n@keyframes waveEffect{100%{box-shadow:0 0 0 #1890ff;box-shadow:0 0 0 6px var(--antd-wave-shadow-color)}}\n@keyframes fadeEffect{100%{opacity:0}}\n.slide-up-appear[_ngcontent-%COMP%], .slide-up-enter[_ngcontent-%COMP%], .slide-up-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.slide-up-appear.slide-up-appear-active[_ngcontent-%COMP%], .slide-up-enter.slide-up-enter-active[_ngcontent-%COMP%]{animation-name:antSlideUpIn;animation-play-state:running}\n.slide-up-leave.slide-up-leave-active[_ngcontent-%COMP%]{animation-name:antSlideUpOut;animation-play-state:running;pointer-events:none}\n.slide-up-appear[_ngcontent-%COMP%], .slide-up-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.23,1,.32,1)}\n.slide-up-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}\n.slide-down-appear[_ngcontent-%COMP%], .slide-down-enter[_ngcontent-%COMP%], .slide-down-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.slide-down-appear.slide-down-appear-active[_ngcontent-%COMP%], .slide-down-enter.slide-down-enter-active[_ngcontent-%COMP%]{animation-name:antSlideDownIn;animation-play-state:running}\n.slide-down-leave.slide-down-leave-active[_ngcontent-%COMP%]{animation-name:antSlideDownOut;animation-play-state:running;pointer-events:none}\n.slide-down-appear[_ngcontent-%COMP%], .slide-down-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.23,1,.32,1)}\n.slide-down-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}\n.slide-left-appear[_ngcontent-%COMP%], .slide-left-enter[_ngcontent-%COMP%], .slide-left-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.slide-left-appear.slide-left-appear-active[_ngcontent-%COMP%], .slide-left-enter.slide-left-enter-active[_ngcontent-%COMP%]{animation-name:antSlideLeftIn;animation-play-state:running}\n.slide-left-leave.slide-left-leave-active[_ngcontent-%COMP%]{animation-name:antSlideLeftOut;animation-play-state:running;pointer-events:none}\n.slide-left-appear[_ngcontent-%COMP%], .slide-left-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.23,1,.32,1)}\n.slide-left-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}\n.slide-right-appear[_ngcontent-%COMP%], .slide-right-enter[_ngcontent-%COMP%], .slide-right-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.slide-right-appear.slide-right-appear-active[_ngcontent-%COMP%], .slide-right-enter.slide-right-enter-active[_ngcontent-%COMP%]{animation-name:antSlideRightIn;animation-play-state:running}\n.slide-right-leave.slide-right-leave-active[_ngcontent-%COMP%]{animation-name:antSlideRightOut;animation-play-state:running;pointer-events:none}\n.slide-right-appear[_ngcontent-%COMP%], .slide-right-enter[_ngcontent-%COMP%]{opacity:0;animation-timing-function:cubic-bezier(.23,1,.32,1)}\n.slide-right-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}\n@keyframes antSlideUpIn{0%{transform:scaleY(.8);transform-origin:0 0;opacity:0}100%{transform:scaleY(1);transform-origin:0 0;opacity:1}}\n@keyframes antSlideUpOut{0%{transform:scaleY(1);transform-origin:0 0;opacity:1}100%{transform:scaleY(.8);transform-origin:0 0;opacity:0}}\n@keyframes antSlideDownIn{0%{transform:scaleY(.8);transform-origin:100% 100%;opacity:0}100%{transform:scaleY(1);transform-origin:100% 100%;opacity:1}}\n@keyframes antSlideDownOut{0%{transform:scaleY(1);transform-origin:100% 100%;opacity:1}100%{transform:scaleY(.8);transform-origin:100% 100%;opacity:0}}\n@keyframes antSlideLeftIn{0%{transform:scaleX(.8);transform-origin:0 0;opacity:0}100%{transform:scaleX(1);transform-origin:0 0;opacity:1}}\n@keyframes antSlideLeftOut{0%{transform:scaleX(1);transform-origin:0 0;opacity:1}100%{transform:scaleX(.8);transform-origin:0 0;opacity:0}}\n@keyframes antSlideRightIn{0%{transform:scaleX(.8);transform-origin:100% 0;opacity:0}100%{transform:scaleX(1);transform-origin:100% 0;opacity:1}}\n@keyframes antSlideRightOut{0%{transform:scaleX(1);transform-origin:100% 0;opacity:1}100%{transform:scaleX(.8);transform-origin:100% 0;opacity:0}}\n.zoom-appear[_ngcontent-%COMP%], .zoom-enter[_ngcontent-%COMP%], .zoom-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-appear.zoom-appear-active[_ngcontent-%COMP%], .zoom-enter.zoom-enter-active[_ngcontent-%COMP%]{animation-name:antZoomIn;animation-play-state:running}\n.zoom-leave.zoom-leave-active[_ngcontent-%COMP%]{animation-name:antZoomOut;animation-play-state:running;pointer-events:none}\n.zoom-appear[_ngcontent-%COMP%], .zoom-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-appear-prepare[_ngcontent-%COMP%], .zoom-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n.zoom-big-appear[_ngcontent-%COMP%], .zoom-big-enter[_ngcontent-%COMP%], .zoom-big-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-big-appear.zoom-big-appear-active[_ngcontent-%COMP%], .zoom-big-enter.zoom-big-enter-active[_ngcontent-%COMP%]{animation-name:antZoomBigIn;animation-play-state:running}\n.zoom-big-leave.zoom-big-leave-active[_ngcontent-%COMP%]{animation-name:antZoomBigOut;animation-play-state:running;pointer-events:none}\n.zoom-big-appear[_ngcontent-%COMP%], .zoom-big-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-big-appear-prepare[_ngcontent-%COMP%], .zoom-big-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-big-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n.zoom-big-fast-appear[_ngcontent-%COMP%], .zoom-big-fast-enter[_ngcontent-%COMP%], .zoom-big-fast-leave[_ngcontent-%COMP%]{animation-duration:.1s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-big-fast-appear.zoom-big-fast-appear-active[_ngcontent-%COMP%], .zoom-big-fast-enter.zoom-big-fast-enter-active[_ngcontent-%COMP%]{animation-name:antZoomBigIn;animation-play-state:running}\n.zoom-big-fast-leave.zoom-big-fast-leave-active[_ngcontent-%COMP%]{animation-name:antZoomBigOut;animation-play-state:running;pointer-events:none}\n.zoom-big-fast-appear[_ngcontent-%COMP%], .zoom-big-fast-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-big-fast-appear-prepare[_ngcontent-%COMP%], .zoom-big-fast-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-big-fast-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n.zoom-up-appear[_ngcontent-%COMP%], .zoom-up-enter[_ngcontent-%COMP%], .zoom-up-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-up-appear.zoom-up-appear-active[_ngcontent-%COMP%], .zoom-up-enter.zoom-up-enter-active[_ngcontent-%COMP%]{animation-name:antZoomUpIn;animation-play-state:running}\n.zoom-up-leave.zoom-up-leave-active[_ngcontent-%COMP%]{animation-name:antZoomUpOut;animation-play-state:running;pointer-events:none}\n.zoom-up-appear[_ngcontent-%COMP%], .zoom-up-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-up-appear-prepare[_ngcontent-%COMP%], .zoom-up-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-up-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n.zoom-down-appear[_ngcontent-%COMP%], .zoom-down-enter[_ngcontent-%COMP%], .zoom-down-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-down-appear.zoom-down-appear-active[_ngcontent-%COMP%], .zoom-down-enter.zoom-down-enter-active[_ngcontent-%COMP%]{animation-name:antZoomDownIn;animation-play-state:running}\n.zoom-down-leave.zoom-down-leave-active[_ngcontent-%COMP%]{animation-name:antZoomDownOut;animation-play-state:running;pointer-events:none}\n.zoom-down-appear[_ngcontent-%COMP%], .zoom-down-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-down-appear-prepare[_ngcontent-%COMP%], .zoom-down-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-down-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n.zoom-left-appear[_ngcontent-%COMP%], .zoom-left-enter[_ngcontent-%COMP%], .zoom-left-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-left-appear.zoom-left-appear-active[_ngcontent-%COMP%], .zoom-left-enter.zoom-left-enter-active[_ngcontent-%COMP%]{animation-name:antZoomLeftIn;animation-play-state:running}\n.zoom-left-leave.zoom-left-leave-active[_ngcontent-%COMP%]{animation-name:antZoomLeftOut;animation-play-state:running;pointer-events:none}\n.zoom-left-appear[_ngcontent-%COMP%], .zoom-left-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-left-appear-prepare[_ngcontent-%COMP%], .zoom-left-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-left-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n.zoom-right-appear[_ngcontent-%COMP%], .zoom-right-enter[_ngcontent-%COMP%], .zoom-right-leave[_ngcontent-%COMP%]{animation-duration:.2s;animation-fill-mode:both;animation-play-state:paused}\n.zoom-right-appear.zoom-right-appear-active[_ngcontent-%COMP%], .zoom-right-enter.zoom-right-enter-active[_ngcontent-%COMP%]{animation-name:antZoomRightIn;animation-play-state:running}\n.zoom-right-leave.zoom-right-leave-active[_ngcontent-%COMP%]{animation-name:antZoomRightOut;animation-play-state:running;pointer-events:none}\n.zoom-right-appear[_ngcontent-%COMP%], .zoom-right-enter[_ngcontent-%COMP%]{transform:scale(0);opacity:0;animation-timing-function:cubic-bezier(.08,.82,.17,1)}\n.zoom-right-appear-prepare[_ngcontent-%COMP%], .zoom-right-enter-prepare[_ngcontent-%COMP%]{transform:none}\n.zoom-right-leave[_ngcontent-%COMP%]{animation-timing-function:cubic-bezier(.78,.14,.15,.86)}\n@keyframes antZoomIn{0%{transform:scale(.2);opacity:0}100%{transform:scale(1);opacity:1}}\n@keyframes antZoomOut{0%{transform:scale(1)}100%{transform:scale(.2);opacity:0}}\n@keyframes antZoomBigIn{0%{transform:scale(.8);opacity:0}100%{transform:scale(1);opacity:1}}\n@keyframes antZoomBigOut{0%{transform:scale(1)}100%{transform:scale(.8);opacity:0}}\n@keyframes antZoomUpIn{0%{transform:scale(.8);transform-origin:50% 0;opacity:0}100%{transform:scale(1);transform-origin:50% 0}}\n@keyframes antZoomUpOut{0%{transform:scale(1);transform-origin:50% 0}100%{transform:scale(.8);transform-origin:50% 0;opacity:0}}\n@keyframes antZoomLeftIn{0%{transform:scale(.8);transform-origin:0 50%;opacity:0}100%{transform:scale(1);transform-origin:0 50%}}\n@keyframes antZoomLeftOut{0%{transform:scale(1);transform-origin:0 50%}100%{transform:scale(.8);transform-origin:0 50%;opacity:0}}\n@keyframes antZoomRightIn{0%{transform:scale(.8);transform-origin:100% 50%;opacity:0}100%{transform:scale(1);transform-origin:100% 50%}}\n@keyframes antZoomRightOut{0%{transform:scale(1);transform-origin:100% 50%}100%{transform:scale(.8);transform-origin:100% 50%;opacity:0}}\n@keyframes antZoomDownIn{0%{transform:scale(.8);transform-origin:50% 100%;opacity:0}100%{transform:scale(1);transform-origin:50% 100%}}\n@keyframes antZoomDownOut{0%{transform:scale(1);transform-origin:50% 100%}100%{transform:scale(.8);transform-origin:50% 100%;opacity:0}}\n.ant-motion-collapse[_ngcontent-%COMP%], .ant-motion-collapse-legacy-active[_ngcontent-%COMP%]{transition:height .2s cubic-bezier(.645,.045,.355,1),opacity .2s cubic-bezier(.645,.045,.355,1)!important}\n.cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;position:fixed;z-index:1000}\n.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-overlay-backdrop[_ngcontent-%COMP%]{top:0;bottom:0;left:0;right:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto;z-index:1000}\n.cdk-overlay-backdrop.ant-modal-mask[_ngcontent-%COMP%]{opacity:1}\n.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;z-index:1000}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}\n.cdk-global-scrollblock[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{overflow-x:visible}\n.nz-overlay-transparent-backdrop[_ngcontent-%COMP%], .nz-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}\n.nz-animate-disabled.ant-drawer.ant-drawer-open[_ngcontent-%COMP%]   .ant-drawer-mask[_ngcontent-%COMP%]{animation:none;transition:none}\n.nz-animate-disabled.ant-drawer[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{transition:none}\n.nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal-mask[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal-mask.zoom-enter[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal-mask.zoom-enter-active[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal-mask.zoom-leave[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal-mask.zoom-leave-active[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal.zoom-enter[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal.zoom-enter-active[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal.zoom-leave[_ngcontent-%COMP%], .nz-animate-disabled[_ngcontent-%COMP%]   .ant-modal.zoom-leave-active[_ngcontent-%COMP%]{animation:none;transition:none}\n.nz-animate-disabled.ant-collapse[_ngcontent-%COMP%] > .ant-collapse-item[_ngcontent-%COMP%] > .ant-collapse-header[_ngcontent-%COMP%]   .ant-collapse-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%]   .ant-menu-item[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%]   .ant-menu-item[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%]   .ant-menu-item[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-title[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-title[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%], .nz-animate-disabled.ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-title[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs[_ngcontent-%COMP%]   .ant-tabs-bottom-content.ant-tabs-content-animated[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs[_ngcontent-%COMP%]   .ant-tabs-bottom-content[_ngcontent-%COMP%] > .ant-tabs-tabpane[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs[_ngcontent-%COMP%]   .ant-tabs-top-content.ant-tabs-content-animated[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs[_ngcontent-%COMP%]   .ant-tabs-top-content[_ngcontent-%COMP%] > .ant-tabs-tabpane[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs.ant-tabs-bottom[_ngcontent-%COMP%]   .ant-tabs-ink-bar-animated[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs.ant-tabs-left[_ngcontent-%COMP%]   .ant-tabs-ink-bar-animated[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs.ant-tabs-right[_ngcontent-%COMP%]   .ant-tabs-ink-bar-animated[_ngcontent-%COMP%], .nz-animate-disabled.ant-tabs.ant-tabs-top[_ngcontent-%COMP%]   .ant-tabs-ink-bar-animated[_ngcontent-%COMP%]{transition:none}\n\n.ant-btn[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]:empty, .ant-btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}\n.ant-btn.ant-btn-loading[_ngcontent-%COMP%]:not([disabled]), .ant-btn[_ngcontent-%COMP%]::before, .ant-btn[disabled][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{pointer-events:none}\n.ant-btn[_ngcontent-%COMP%]{line-height:1.5715;position:relative;font-weight:400;white-space:nowrap;text-align:center;border:1px solid #d9d9d9;box-shadow:0 2px 0 rgba(0,0,0,.015);cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;user-select:none;touch-action:manipulation;height:32px;padding:4px 15px;font-size:14px;border-radius:2px;color:rgba(0,0,0,.85);background:#fff}\n.ant-btn[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{background:0 0;right:0;bottom:0;left:0;position:absolute;top:0;content:''}\n.ant-btn[_ngcontent-%COMP%] > .anticon[_ngcontent-%COMP%]{line-height:1}\n.ant-btn[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]:active, .ant-btn[_ngcontent-%COMP%]:focus{outline:0}\n.ant-btn[_ngcontent-%COMP%]:not([disabled]):hover{text-decoration:none}\n.ant-btn[_ngcontent-%COMP%]:not([disabled]):active{outline:0;box-shadow:none}\n.ant-btn[disabled][_ngcontent-%COMP%]{cursor:not-allowed}\n.ant-btn-lg[_ngcontent-%COMP%]{height:40px;padding:6.4px 15px;font-size:16px;border-radius:2px}\n.ant-btn-sm[_ngcontent-%COMP%]{height:24px;padding:0 7px;font-size:14px;border-radius:2px}\n.ant-btn[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover{color:#40a9ff;border-color:#40a9ff}\n.ant-btn[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn[_ngcontent-%COMP%]:active{color:#096dd9;border-color:#096dd9}\n.ant-btn[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn[disabled][_ngcontent-%COMP%], .ant-btn[disabled][_ngcontent-%COMP%]:active, .ant-btn[disabled][_ngcontent-%COMP%]:focus, .ant-btn[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn[_ngcontent-%COMP%]:active, .ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover{text-decoration:none;background:#fff}\n.ant-btn-primary[_ngcontent-%COMP%]{color:#fff;background:#1890ff;border-color:#1890ff;text-shadow:0 -1px 0 rgba(0,0,0,.12);box-shadow:0 2px 0 rgba(0,0,0,.045)}\n.ant-btn-primary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-primary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-primary[_ngcontent-%COMP%]:focus, .ant-btn-primary[_ngcontent-%COMP%]:hover{color:#fff;background:#40a9ff;border-color:#40a9ff}\n.ant-btn-primary[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-primary[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-primary[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-primary[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-primary[_ngcontent-%COMP%]:active{color:#fff;background:#096dd9;border-color:#096dd9}\n.ant-btn-primary[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-primary[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-primary[disabled][_ngcontent-%COMP%], .ant-btn-primary[disabled][_ngcontent-%COMP%]:active, .ant-btn-primary[disabled][_ngcontent-%COMP%]:focus, .ant-btn-primary[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-primary[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-primary[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-primary[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-primary[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-primary[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-primary[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-primary[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-primary[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:not(:first-child):not(:last-child){border-right-color:#40a9ff;border-left-color:#40a9ff}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:not(:first-child):not(:last-child):disabled{border-color:#d9d9d9}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:first-child:not(:last-child){border-right-color:#40a9ff}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:first-child:not(:last-child)[disabled]{border-right-color:#d9d9d9}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%] + .ant-btn-primary[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:last-child:not(:first-child){border-left-color:#40a9ff}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%] + .ant-btn-primary[disabled][_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:last-child:not(:first-child)[disabled]{border-left-color:#d9d9d9}\n.ant-btn-ghost[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);background:0 0;border-color:#d9d9d9}\n.ant-btn-ghost[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-ghost[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-ghost[_ngcontent-%COMP%]:focus, .ant-btn-ghost[_ngcontent-%COMP%]:hover{color:#40a9ff;background:0 0;border-color:#40a9ff}\n.ant-btn-ghost[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-ghost[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-ghost[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-ghost[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-ghost[_ngcontent-%COMP%]:active{color:#096dd9;background:0 0;border-color:#096dd9}\n.ant-btn-ghost[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-ghost[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-ghost[disabled][_ngcontent-%COMP%], .ant-btn-ghost[disabled][_ngcontent-%COMP%]:active, .ant-btn-ghost[disabled][_ngcontent-%COMP%]:focus, .ant-btn-ghost[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-ghost[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-ghost[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-ghost[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-ghost[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-ghost[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-ghost[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-ghost[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-ghost[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dashed[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);background:#fff;border-color:#d9d9d9;border-style:dashed}\n.ant-btn-dashed[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dashed[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dashed[_ngcontent-%COMP%]:focus, .ant-btn-dashed[_ngcontent-%COMP%]:hover{color:#40a9ff;background:#fff;border-color:#40a9ff}\n.ant-btn-dashed[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dashed[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dashed[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dashed[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dashed[_ngcontent-%COMP%]:active{color:#096dd9;background:#fff;border-color:#096dd9}\n.ant-btn-dashed[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dashed[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dashed[disabled][_ngcontent-%COMP%], .ant-btn-dashed[disabled][_ngcontent-%COMP%]:active, .ant-btn-dashed[disabled][_ngcontent-%COMP%]:focus, .ant-btn-dashed[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-dashed[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-dashed[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dashed[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-dashed[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dashed[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dashed[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dashed[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dashed[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-danger[_ngcontent-%COMP%]{color:#fff;background:#ff4d4f;border-color:#ff4d4f;text-shadow:0 -1px 0 rgba(0,0,0,.12);box-shadow:0 2px 0 rgba(0,0,0,.045)}\n.ant-btn-danger[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-danger[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-danger[_ngcontent-%COMP%]:focus, .ant-btn-danger[_ngcontent-%COMP%]:hover{color:#fff;background:#ff7875;border-color:#ff7875}\n.ant-btn-danger[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-danger[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-danger[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-danger[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-danger[_ngcontent-%COMP%]:active{color:#fff;background:#d9363e;border-color:#d9363e}\n.ant-btn-danger[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-danger[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-danger[disabled][_ngcontent-%COMP%], .ant-btn-danger[disabled][_ngcontent-%COMP%]:active, .ant-btn-danger[disabled][_ngcontent-%COMP%]:focus, .ant-btn-danger[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-danger[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-danger[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-danger[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-danger[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-danger[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-danger[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-danger[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-danger[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-link[_ngcontent-%COMP%]{color:#1890ff;background:0 0;border-color:transparent;box-shadow:none}\n.ant-btn-link[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-link[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-link[_ngcontent-%COMP%]:focus, .ant-btn-link[_ngcontent-%COMP%]:hover{color:#40a9ff;background:0 0;border-color:#40a9ff}\n.ant-btn-link[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-link[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-link[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-link[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-link[_ngcontent-%COMP%]:active{color:#096dd9;background:0 0}\n.ant-btn-link[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-link[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-link[_ngcontent-%COMP%]:hover{background:0 0}\n.ant-btn-link[_ngcontent-%COMP%]:active, .ant-btn-link[_ngcontent-%COMP%]:focus, .ant-btn-link[_ngcontent-%COMP%]:hover{border-color:transparent}\n.ant-btn-link[disabled][_ngcontent-%COMP%], .ant-btn-link[disabled][_ngcontent-%COMP%]:active, .ant-btn-link[disabled][_ngcontent-%COMP%]:focus, .ant-btn-link[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:0 0;border-color:transparent;text-shadow:none;box-shadow:none}\n.ant-btn-link[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-link[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-link[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-link[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-link[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-link[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-link[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-link[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-text[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);background:0 0;border-color:transparent;box-shadow:none}\n.ant-btn-text[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-text[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-text[_ngcontent-%COMP%]:focus, .ant-btn-text[_ngcontent-%COMP%]:hover{color:#40a9ff}\n.ant-btn-text[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-text[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-text[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-text[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-text[_ngcontent-%COMP%]:active{color:#096dd9}\n.ant-btn-text[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-text[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-text[_ngcontent-%COMP%]:focus, .ant-btn-text[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.85);background:rgba(0,0,0,.018);border-color:transparent}\n.ant-btn-text[_ngcontent-%COMP%]:active{color:rgba(0,0,0,.85);background:rgba(0,0,0,.028);border-color:transparent}\n.ant-btn-text[disabled][_ngcontent-%COMP%], .ant-btn-text[disabled][_ngcontent-%COMP%]:active, .ant-btn-text[disabled][_ngcontent-%COMP%]:focus, .ant-btn-text[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:0 0;border-color:transparent;text-shadow:none;box-shadow:none}\n.ant-btn-text[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-text[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-text[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-text[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-text[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-text[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-text[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-text[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous[_ngcontent-%COMP%]{color:#ff4d4f;background:#fff;border-color:#ff4d4f}\n.ant-btn-dangerous[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous[_ngcontent-%COMP%]:focus, .ant-btn-dangerous[_ngcontent-%COMP%]:hover{color:#ff7875;background:#fff;border-color:#ff7875}\n.ant-btn-dangerous[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous[_ngcontent-%COMP%]:active{color:#d9363e;background:#fff;border-color:#d9363e}\n.ant-btn-dangerous[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous[disabled][_ngcontent-%COMP%], .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:active, .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:focus, .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]{color:#fff;background:#ff4d4f;border-color:#ff4d4f;text-shadow:0 -1px 0 rgba(0,0,0,.12);box-shadow:0 2px 0 rgba(0,0,0,.045)}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:focus, .ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:hover{color:#fff;background:#ff7875;border-color:#ff7875}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:active{color:#fff;background:#d9363e;border-color:#d9363e}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-primary[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%], .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:active, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:focus, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-primary[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]{color:#ff4d4f;background:0 0;border-color:transparent;box-shadow:none}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:focus, .ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:hover{color:#ff7875;background:0 0;border-color:transparent}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:active{color:#d9363e;background:0 0;border-color:transparent}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%], .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:active, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:focus, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:0 0;border-color:transparent;text-shadow:none;box-shadow:none}\n.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]{color:#ff4d4f;background:0 0;border-color:transparent;box-shadow:none}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:focus, .ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:hover{color:#ff7875;background:rgba(0,0,0,.018);border-color:transparent}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:active{color:#d9363e;background:rgba(0,0,0,.028);border-color:transparent}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-text[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%], .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:active, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:focus, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:0 0;border-color:transparent;text-shadow:none;box-shadow:none}\n.ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-dangerous.ant-btn-text[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-icon-only[_ngcontent-%COMP%]{width:32px;height:32px;padding:2.4px 0;font-size:16px;border-radius:2px;vertical-align:-1px}\n.ant-btn-icon-only[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-size:16px}\n.ant-btn-icon-only.ant-btn-lg[_ngcontent-%COMP%]{width:40px;height:40px;padding:4.9px 0;font-size:18px;border-radius:2px}\n.ant-btn-icon-only.ant-btn-lg[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-size:18px}\n.ant-btn-icon-only.ant-btn-sm[_ngcontent-%COMP%]{width:24px;height:24px;padding:0;font-size:14px;border-radius:2px}\n.ant-btn-icon-only.ant-btn-sm[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-size:14px}\n.ant-btn-round[_ngcontent-%COMP%]{height:32px;padding:4px 16px;font-size:14px;border-radius:32px}\n.ant-btn-round.ant-btn-lg[_ngcontent-%COMP%]{height:40px;padding:6.4px 20px;font-size:16px;border-radius:40px}\n.ant-btn-round.ant-btn-sm[_ngcontent-%COMP%]{height:24px;padding:0 12px;font-size:14px;border-radius:24px}\n.ant-btn-round.ant-btn-icon-only[_ngcontent-%COMP%]{width:auto}\n.ant-btn-circle[_ngcontent-%COMP%]{min-width:32px;padding-right:0;padding-left:0;text-align:center;border-radius:50%}\n.ant-btn-circle.ant-btn-lg[_ngcontent-%COMP%]{min-width:40px;border-radius:50%}\n.ant-btn-circle.ant-btn-sm[_ngcontent-%COMP%]{min-width:24px;border-radius:50%}\n.ant-btn[_ngcontent-%COMP%]::before{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;z-index:1;display:none;background:#fff;border-radius:inherit;opacity:.35;transition:opacity .2s;content:''}\n.ant-btn-group[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%], .ant-btn.ant-btn-loading[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]:active > span[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]:focus > span[_ngcontent-%COMP%]{position:relative}\n.ant-btn[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]{transition:margin-left .3s cubic-bezier(.645,.045,.355,1)}\n.ant-btn[_ngcontent-%COMP%]   .anticon.anticon-minus[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]   .anticon.anticon-plus[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{shape-rendering:optimizeSpeed}\n.ant-btn.ant-btn-loading[_ngcontent-%COMP%]::before{display:block}\n.ant-btn[_ngcontent-%COMP%] > .ant-btn-loading-icon[_ngcontent-%COMP%]{transition:all .3s cubic-bezier(.645,.045,.355,1)}\n.ant-btn[_ngcontent-%COMP%] > .ant-btn-loading-icon[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]{padding-right:8px;animation:none}\n.ant-btn[_ngcontent-%COMP%] > .ant-btn-loading-icon[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{animation:loadingCircle 1s infinite linear}\n.ant-btn[_ngcontent-%COMP%] > .ant-btn-loading-icon[_ngcontent-%COMP%]:only-child   .anticon[_ngcontent-%COMP%]{padding-right:0}\n.ant-btn-group[_ngcontent-%COMP%]{display:inline-flex}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:active, .ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:focus, .ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:hover, .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:active, .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:focus, .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:hover{z-index:2}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn[disabled][_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[disabled][_ngcontent-%COMP%]{z-index:0}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-icon-only[_ngcontent-%COMP%]{font-size:14px}\n.ant-btn-group-lg[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%], .ant-btn-group-lg[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]{height:40px;padding:6.4px 15px;font-size:16px;border-radius:0}\n.ant-btn-group-lg[_ngcontent-%COMP%]   .ant-btn.ant-btn-icon-only[_ngcontent-%COMP%]{width:40px;height:40px;padding-right:0;padding-left:0}\n.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%], .ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]{height:24px;padding:0 7px;font-size:14px;border-radius:0}\n.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%] > .anticon[_ngcontent-%COMP%], .ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%] > .anticon[_ngcontent-%COMP%]{font-size:14px}\n.ant-btn-group-sm[_ngcontent-%COMP%]   .ant-btn.ant-btn-icon-only[_ngcontent-%COMP%]{width:24px;height:24px;padding-right:0;padding-left:0}\n.ant-btn[_ngcontent-%COMP%] + .ant-btn-group[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] + .ant-btn-group[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:-1px}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%]:not(.ant-btn-primary):not([disabled]){border-left-color:transparent}\n.ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%]{border-radius:0}\n.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:only-child, .ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:only-child > .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:only-child, .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:only-child > .ant-btn[_ngcontent-%COMP%]{border-radius:2px}\n.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:first-child:not(:last-child), .ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child:not(:last-child) > .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:first-child:not(:last-child), .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child:not(:last-child) > .ant-btn[_ngcontent-%COMP%]{border-top-left-radius:2px;border-bottom-left-radius:2px}\n.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:last-child:not(:first-child), .ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child:not(:first-child) > .ant-btn[_ngcontent-%COMP%], .ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:last-child:not(:first-child), .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child:not(:first-child) > .ant-btn[_ngcontent-%COMP%]{border-top-right-radius:2px;border-bottom-right-radius:2px}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:first-child, .ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child > .ant-btn[_ngcontent-%COMP%]{margin-left:0}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn-group[_ngcontent-%COMP%]{float:left}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn-group[_ngcontent-%COMP%]:not(:first-child):not(:last-child) > .ant-btn[_ngcontent-%COMP%]{border-radius:0}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn-group[_ngcontent-%COMP%]:first-child:not(:last-child) > .ant-btn[_ngcontent-%COMP%]:last-child{padding-right:8px;border-top-right-radius:0;border-bottom-right-radius:0}\n.ant-btn-group[_ngcontent-%COMP%] > .ant-btn-group[_ngcontent-%COMP%]:last-child:not(:first-child) > .ant-btn[_ngcontent-%COMP%]:first-child{padding-left:8px;border-top-left-radius:0;border-bottom-left-radius:0}\n.ant-btn-group-rtl.ant-btn[_ngcontent-%COMP%] + .ant-btn-group[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] + .ant-btn-group[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn[_ngcontent-%COMP%] + .ant-btn-group[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn-group[_ngcontent-%COMP%] + .ant-btn[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn-group[_ngcontent-%COMP%] + .ant-btn-group[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-right:-1px;margin-left:auto}\n.ant-btn-group.ant-btn-group-rtl[_ngcontent-%COMP%]{direction:rtl}\n.ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:first-child:not(:last-child), .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child:not(:last-child) > .ant-btn[_ngcontent-%COMP%]{border-radius:0 2px 2px 0}\n.ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:last-child:not(:first-child), .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child:not(:first-child) > .ant-btn[_ngcontent-%COMP%]{border-radius:2px 0 0 2px}\n.ant-btn-group-rtl.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:first-child:not(:last-child), .ant-btn-group-rtl.ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child:not(:last-child) > .ant-btn[_ngcontent-%COMP%]{border-radius:0 2px 2px 0}\n.ant-btn-group-rtl.ant-btn-group-sm[_ngcontent-%COMP%] > .ant-btn[_ngcontent-%COMP%]:last-child:not(:first-child), .ant-btn-group-rtl.ant-btn-group-sm[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child:not(:first-child) > .ant-btn[_ngcontent-%COMP%]{border-radius:2px 0 0 2px}\n.ant-btn[_ngcontent-%COMP%] > .anticon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] + .anticon[_ngcontent-%COMP%]{margin-left:8px}\n.ant-btn-background-ghost[_ngcontent-%COMP%]{color:#fff;background:0 0!important;border-color:#fff}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]{color:#1890ff;background:0 0;border-color:#1890ff;text-shadow:none}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:hover{color:#40a9ff;background:0 0;border-color:#40a9ff}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:active{color:#096dd9;background:0 0;border-color:#096dd9}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-primary[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%], .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:active, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-primary[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]{color:#ff4d4f;background:0 0;border-color:#ff4d4f;text-shadow:none}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:hover{color:#ff7875;background:0 0;border-color:#ff7875}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:active{color:#d9363e;background:0 0;border-color:#d9363e}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-danger[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%], .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:active, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-danger[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]{color:#ff4d4f;background:0 0;border-color:#ff4d4f;text-shadow:none}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:hover{color:#ff7875;background:0 0;border-color:#ff7875}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:active{color:#d9363e;background:0 0;border-color:#d9363e}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%], .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:active, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]{color:#ff4d4f;background:0 0;border-color:transparent;text-shadow:none}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:hover{color:#ff7875;background:0 0;border-color:transparent}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:active{color:#d9363e;background:0 0;border-color:transparent}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%], .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:active, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:focus, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.25);background:#f5f5f5;border-color:#d9d9d9;text-shadow:none;box-shadow:none}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child{color:currentColor}\n.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:active > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:focus > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]:only-child::after, .ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled][_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:only-child::after{position:absolute;top:0;right:0;bottom:0;left:0;background:0 0;content:''}\n.ant-btn-two-chinese-chars[_ngcontent-%COMP%]::first-letter{letter-spacing:.34em}\n.ant-btn-two-chinese-chars[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(.anticon){margin-right:-.34em;letter-spacing:.34em}\n.ant-btn-block[_ngcontent-%COMP%]{width:100%}\n.ant-btn[_ngcontent-%COMP%]:empty{width:0;visibility:hidden;content:'\\a0'}\na.ant-btn[_ngcontent-%COMP%]{padding-top:.1px;line-height:30px}\na.ant-btn-lg[_ngcontent-%COMP%]{line-height:38px}\na.ant-btn-sm[_ngcontent-%COMP%]{line-height:22px}\n.ant-btn-rtl[_ngcontent-%COMP%]{direction:rtl}\n.ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%] + .ant-btn-primary[_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:last-child:not(:first-child){border-right-color:#40a9ff;border-left-color:#d9d9d9}\n.ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%] + .ant-btn-primary[disabled][_ngcontent-%COMP%], .ant-btn-group-rtl.ant-btn-group[_ngcontent-%COMP%]   .ant-btn-primary[_ngcontent-%COMP%]:last-child:not(:first-child)[disabled]{border-right-color:#d9d9d9;border-left-color:#40a9ff}\n.ant-btn-rtl.ant-btn[_ngcontent-%COMP%] > .ant-btn-loading-icon[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]{padding-right:0;padding-left:8px}\n.ant-btn[_ngcontent-%COMP%] > .ant-btn-loading-icon[_ngcontent-%COMP%]:only-child   .anticon[_ngcontent-%COMP%]{padding-left:0}\n.ant-btn-rtl.ant-btn[_ngcontent-%COMP%] > .anticon[_ngcontent-%COMP%] + span[_ngcontent-%COMP%], .ant-btn-rtl.ant-btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] + .anticon[_ngcontent-%COMP%]{margin-right:8px;margin-left:0}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background: #18191a !important;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  background: #242526;\n}\n.mat-mini-fab[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  padding: 6px 0 !important;\n}\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.rotating[_ngcontent-%COMP%] {\n  animation: rotating 2s linear infinite;\n}\n.list-column[_ngcontent-%COMP%] {\n  height: 85vh;\n  width: 100%;\n  max-width: 100%;\n  border: solid 0px #1c1e21;\n  min-height: 60px;\n  display: block;\n  overflow-y: scroll;\n  overflow: scroll;\n}\n.list-column.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  place-content: center;\n}\n.list-column[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none !important;\n}\napp-tarjeta[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 10px 15px 10px;\n  border-bottom: solid 1px #1c1e21;\n  color: snow;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: #242526;\n  font-size: 14px;\n}\n.box.row[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.list-column.list-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.title-grupo[_ngcontent-%COMP%] {\n  background-color: #1c1e21;\n  padding: 0px 15px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n.title-grupo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: snow;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  \n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvc3R5bGUvaW5kZXgubWluLmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL2J1dHRvbi9zdHlsZS9pbmRleC5taW4uY3NzIiwiLi4vLi4vLi4vLi4vY29sdW1uYS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBLGlDQUFpQyxXQUFXLENBQUMsVUFBVTtBQUFDLDJCQUEyQixvQkFBb0IsQ0FBQyxTQUFTO0FBQUMsaUNBQWlDLFlBQVk7QUFBQyx1QkFBdUIsaUJBQWlCO0FBQUMscUZBQXFGLGVBQWU7QUFBQyxnQkFBZ0IsZ0JBQWdCO0FBQUMsYUFBYSxhQUFhO0FBQUMsNEJBQTRCLGtCQUFrQjtBQUFDLGlCQUFpQix1QkFBdUI7QUFBQyx1QkFBdUIsbUJBQW1CO0FBQUMsaUZBQWlGLGlCQUFpQjtBQUFDLDJCQUEyQix1Q0FBdUM7QUFBQyxnTEFBZ0wsWUFBWTtBQUFDLHNKQUFzSixxQkFBcUI7QUFBQyxtQ0FBbUMsWUFBWTtBQUFDLG1CQUFtQixxQkFBcUI7QUFBQyxLQUFLLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLHlCQUF5QixDQUFDLDRCQUE0QixDQUFDLGdDQUFnQyxDQUFDLGNBQWM7QUFBa0MsS0FBSyxRQUFRLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLHNMQUFzTCxDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLDRCQUE0QjtBQUFDLHNCQUFzQixtQkFBbUI7QUFBQyxHQUFHLHNCQUFzQixDQUFDLFFBQVE7QUFBQyxrQkFBa0IscUJBQXFCLENBQUMsZUFBZTtBQUFDLHNDQUFzQyx5QkFBeUIsQ0FB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QTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWdFSjtBQTlERTtFQUNFLHdCQUFBO0FBZ0VKO0FBNURBO0VBQ0UsV0FBQTtBQStERjtBQTVEQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7QUE2REY7QUE1REU7RUFDRSxZQUFBO0FBOERKO0FBMURBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBNkRGO0FBeERBO0VBQ0UsVUFBQTtBQTJERjtBQXhEQTtFQUNFLHNEQUFBO0FBMkRGO0FBeERBO0VBQ0UsWUFBQTtBQTJERjtBQXhEQTtFQUNFLHNEQUFBO0FBMkRGO0FBeERBO0VBQ0UseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBMERGO0FBekRFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQTRESiIsImZpbGUiOiJjb2x1bW5hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnYXNzZXRzL3Njc3MvbWFpbi5zY3NzJztcbkBpbXBvcnQgXCJ+bmctem9ycm8tYW50ZC9zdHlsZS9pbmRleC5taW4uY3NzXCI7IC8qIEltcG9ydCBiYXNlIHN0eWxlcyAqL1xuQGltcG9ydCBcIn5uZy16b3Jyby1hbnRkL2J1dHRvbi9zdHlsZS9pbmRleC5taW4uY3NzXCI7ICAvKiBJbXBvcnQgb25lIGNvbXBvbmVudCdzIHN0eWxlcyAqL1xuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBiYWNrZ3JvdW5kOiAjMTgxOTFhICFpbXBvcnRhbnQ7fVxuXG4qLFxuKjphZnRlcixcbio6YmVmb3JlIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhpbmhlcml0KTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzI0MjUyNjtcbn1cbi5tYXQtbWluaS1mYWIgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIHBhZGRpbmc6IDZweCAwICFpbXBvcnRhbnQ7XG59XG4vLyAjMjQyNTI2XG4vLyAjMWMxZTIxXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpbmcgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi8ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5yb3RhdGluZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xufSIsIi5jZGstb3ZlcmxheS1jb250YWluZXIsYm9keSxodG1se2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9YSxhOmFjdGl2ZSxhOmZvY3VzLGE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7b3V0bGluZTowfWRsLGgxLGgyLGgzLGg0LGg1LGg2LG9sLHAscHJlLHVse21hcmdpbi10b3A6MH1hZGRyZXNzLGRsLG9sLHAscHJlLHVse21hcmdpbi1ib3R0b206MWVtfS5hbnQtbW90aW9uLWNvbGxhcHNlLC5hbnQtbW90aW9uLWNvbGxhcHNlLWxlZ2FjeSwuY2RrLXZpc3VhbGx5LWhpZGRlbixzdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59YnV0dG9uLGhyLGlucHV0e292ZXJmbG93OnZpc2libGV9cHJlLHRleHRhcmVhe292ZXJmbG93OmF1dG99ZGQsaDEsaDIsaDMsaDQsaDUsaDYsbGVnZW5ke21hcmdpbi1ib3R0b206LjVlbX1wcm9ncmVzcyxzdWIsc3Vwe3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfS5hbnRpY29uLGJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGU9dHJ1ZV0sW2FudC1jbGljay1hbmltYXRpbmc9dHJ1ZV0sc3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZX0uY2RrLW92ZXJsYXktYmFja2Ryb3AsaHRtbHstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9W2NsYXNzKj1hbnQtXSBpbnB1dDo6LW1zLWNsZWFyLFtjbGFzcyo9YW50LV0gaW5wdXQ6Oi1tcy1yZXZlYWwsW2NsYXNzKj1hbnQtXTo6LW1zLWNsZWFyLFtjbGFzc149YW50LV0gaW5wdXQ6Oi1tcy1jbGVhcixbY2xhc3NePWFudC1dIGlucHV0OjotbXMtcmV2ZWFsLFtjbGFzc149YW50LV06Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9W2NsYXNzKj1hbnQtXSxbY2xhc3MqPWFudC1dICosW2NsYXNzKj1hbnQtXSA6OmFmdGVyLFtjbGFzcyo9YW50LV0gOjpiZWZvcmUsW2NsYXNzXj1hbnQtXSxbY2xhc3NePWFudC1dICosW2NsYXNzXj1hbnQtXSA6OmFmdGVyLFtjbGFzc149YW50LV0gOjpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fWlucHV0OjotbXMtY2xlYXIsaW5wdXQ6Oi1tcy1yZXZlYWx7ZGlzcGxheTpub25lfSosOjphZnRlciw6OmJlZm9yZXtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbHtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuMTU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbXMtb3ZlcmZsb3ctc3R5bGU6c2Nyb2xsYmFyOy0tYW50ZC13YXZlLXNoYWRvdy1jb2xvcjojMTg5MGZmOy0tc2Nyb2xsLWJhcjowfUAtbXMtdmlld3BvcnR7d2lkdGg6ZGV2aWNlLXdpZHRofWJvZHl7bWFyZ2luOjA7Y29sb3I6cmdiYSgwLDAsMCwuODUpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsUm9ib3RvLCdIZWx2ZXRpY2EgTmV1ZScsQXJpYWwsJ05vdG8gU2Fucycsc2Fucy1zZXJpZiwnQXBwbGUgQ29sb3IgRW1vamknLCdTZWdvZSBVSSBFbW9qaScsJ1NlZ29lIFVJIFN5bWJvbCcsJ05vdG8gQ29sb3IgRW1vamknO2ZvbnQtdmFyaWFudDp0YWJ1bGFyLW51bXM7bGluZS1oZWlnaHQ6MS41NzE1O2JhY2tncm91bmQtY29sb3I6I2ZmZjtmb250LWZlYXR1cmUtc2V0dGluZ3M6J3RudW0nfVt0YWJpbmRleD0nLTEnXTpmb2N1c3tvdXRsaW5lOjAhaW1wb3J0YW50fWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjB9aDEsaDIsaDMsaDQsaDUsaDZ7Y29sb3I6cmdiYSgwLDAsMCwuODUpO2ZvbnQtd2VpZ2h0OjUwMH1hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdLGFiYnJbdGl0bGVde3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWQ7Ym9yZGVyLWJvdHRvbTowO2N1cnNvcjpoZWxwfWFkZHJlc3N7Zm9udC1zdHlsZTpub3JtYWw7bGluZS1oZWlnaHQ6aW5oZXJpdH1pbnB1dFt0eXBlPXBhc3N3b3JkXSxpbnB1dFt0eXBlPW51bWJlcl0saW5wdXRbdHlwZT10ZXh0XSx0ZXh0YXJlYXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX1vbCBvbCxvbCB1bCx1bCBvbCx1bCB1bHttYXJnaW4tYm90dG9tOjB9ZHR7Zm9udC13ZWlnaHQ6NTAwfWRke21hcmdpbi1sZWZ0OjB9YmxvY2txdW90ZSxmaWd1cmV7bWFyZ2luOjAgMCAxZW19ZGZue2ZvbnQtc3R5bGU6aXRhbGljfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGRlcn1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowfXN1Yntib3R0b206LS4yNWVtfXN1cHt0b3A6LS41ZW19YXtjb2xvcjojMTg5MGZmO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpjb2xvciAuM3M7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzfWE6aG92ZXJ7Y29sb3I6IzQwYTlmZn1hOmFjdGl2ZXtjb2xvcjojMDk2ZGQ5fWFbZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtjdXJzb3I6bm90LWFsbG93ZWQ7cG9pbnRlci1ldmVudHM6bm9uZX1jb2RlLGtiZCxwcmUsc2FtcHtmb250LXNpemU6MWVtO2ZvbnQtZmFtaWx5OlNGTW9uby1SZWd1bGFyLENvbnNvbGFzLCdMaWJlcmF0aW9uIE1vbm8nLE1lbmxvLENvdXJpZXIsbW9ub3NwYWNlfWltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXN0eWxlOm5vbmV9W3JvbGU9YnV0dG9uXSxhLGFyZWEsYnV0dG9uLGlucHV0Om5vdChbdHlwZT1yYW5nZV0pLGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhe3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb259dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWNhcHRpb257cGFkZGluZy10b3A6Ljc1ZW07cGFkZGluZy1ib3R0b206LjNlbTtjb2xvcjpyZ2JhKDAsMCwwLC40NSk7dGV4dC1hbGlnbjpsZWZ0O2NhcHRpb24tc2lkZTpib3R0b219dGh7dGV4dC1hbGlnbjppbmhlcml0fWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjA7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXR9W3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXItc3R5bGU6bm9uZX1pbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfWlucHV0W3R5cGU9ZGF0ZV0saW5wdXRbdHlwZT10aW1lXSxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxpbnB1dFt0eXBlPW1vbnRoXXstd2Via2l0LWFwcGVhcmFuY2U6bGlzdGJveH10ZXh0YXJlYXtyZXNpemU6dmVydGljYWx9ZmllbGRzZXR7bWluLXdpZHRoOjA7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowfWxlZ2VuZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuNWVtO2xpbmUtaGVpZ2h0OmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hde291dGxpbmUtb2Zmc2V0Oi0ycHg7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257Zm9udDppbmhlcml0Oy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259b3V0cHV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19dGVtcGxhdGV7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmNsZWFyZml4OjphZnRlciwuY2xlYXJmaXg6OmJlZm9yZXtkaXNwbGF5OnRhYmxlO2NvbnRlbnQ6Jyd9bWFya3twYWRkaW5nOi4yZW07YmFja2dyb3VuZC1jb2xvcjojZmVmZmU2fTo6c2VsZWN0aW9ue2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMTg5MGZmfS5jbGVhcmZpeDo6YWZ0ZXJ7Y2xlYXI6Ym90aH0uYW50aWNvbiwuYW50aWNvbiBzdmd7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmFudGljb257Y29sb3I6aW5oZXJpdDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOi0uMTI1ZW07dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5hbnRpY29uPip7bGluZS1oZWlnaHQ6MX0uYW50aWNvbjo6YmVmb3Jle2Rpc3BsYXk6bm9uZX0uYW50aWNvbiAuYW50aWNvbi1pY29ue2Rpc3BsYXk6YmxvY2t9LmFudGljb25bdGFiaW5kZXhde2N1cnNvcjpwb2ludGVyfS5hbnRpY29uLXNwaW4sLmFudGljb24tc3Bpbjo6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO2FuaW1hdGlvbjpsb2FkaW5nQ2lyY2xlIDFzIGluZmluaXRlIGxpbmVhcn0uZmFkZS1hcHBlYXIsLmZhZGUtZW50ZXIsLmZhZGUtbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXJ9LmZhZGUtYXBwZWFyLC5mYWRlLWVudGVyLC5mYWRlLWxlYXZle2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH0uZmFkZS1hcHBlYXIuZmFkZS1hcHBlYXItYWN0aXZlLC5mYWRlLWVudGVyLmZhZGUtZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudEZhZGVJbjthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfS5mYWRlLWxlYXZlLmZhZGUtbGVhdmUtYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudEZhZGVPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5mYWRlLWFwcGVhciwuZmFkZS1lbnRlcntvcGFjaXR5OjB9QGtleWZyYW1lcyBhbnRGYWRlSW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFudEZhZGVPdXR7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX0ubW92ZS11cC1hcHBlYXIsLm1vdmUtdXAtZW50ZXIsLm1vdmUtdXAtbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS5tb3ZlLXVwLWFwcGVhci5tb3ZlLXVwLWFwcGVhci1hY3RpdmUsLm1vdmUtdXAtZW50ZXIubW92ZS11cC1lbnRlci1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50TW92ZVVwSW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30ubW92ZS11cC1sZWF2ZS5tb3ZlLXVwLWxlYXZlLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRNb3ZlVXBPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5tb3ZlLXVwLWFwcGVhciwubW92ZS11cC1lbnRlcntvcGFjaXR5OjA7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjA4LC44MiwuMTcsMSl9Lm1vdmUtdXAtbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjYsLjA0LC45OCwuMzQpfS5tb3ZlLWRvd24tYXBwZWFyLC5tb3ZlLWRvd24tZW50ZXIsLm1vdmUtZG93bi1sZWF2ZXthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9Lm1vdmUtZG93bi1hcHBlYXIubW92ZS1kb3duLWFwcGVhci1hY3RpdmUsLm1vdmUtZG93bi1lbnRlci5tb3ZlLWRvd24tZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudE1vdmVEb3duSW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30ubW92ZS1kb3duLWxlYXZlLm1vdmUtZG93bi1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50TW92ZURvd25PdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5tb3ZlLWRvd24tYXBwZWFyLC5tb3ZlLWRvd24tZW50ZXJ7b3BhY2l0eTowO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4wOCwuODIsLjE3LDEpfS5tb3ZlLWRvd24tbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjYsLjA0LC45OCwuMzQpfS5tb3ZlLWxlZnQtYXBwZWFyLC5tb3ZlLWxlZnQtZW50ZXIsLm1vdmUtbGVmdC1sZWF2ZXthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9Lm1vdmUtbGVmdC1hcHBlYXIubW92ZS1sZWZ0LWFwcGVhci1hY3RpdmUsLm1vdmUtbGVmdC1lbnRlci5tb3ZlLWxlZnQtZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudE1vdmVMZWZ0SW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30ubW92ZS1sZWZ0LWxlYXZlLm1vdmUtbGVmdC1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50TW92ZUxlZnRPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5tb3ZlLWxlZnQtYXBwZWFyLC5tb3ZlLWxlZnQtZW50ZXJ7b3BhY2l0eTowO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4wOCwuODIsLjE3LDEpfS5tb3ZlLWxlZnQtbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjYsLjA0LC45OCwuMzQpfS5tb3ZlLXJpZ2h0LWFwcGVhciwubW92ZS1yaWdodC1lbnRlciwubW92ZS1yaWdodC1sZWF2ZXthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9Lm1vdmUtcmlnaHQtYXBwZWFyLm1vdmUtcmlnaHQtYXBwZWFyLWFjdGl2ZSwubW92ZS1yaWdodC1lbnRlci5tb3ZlLXJpZ2h0LWVudGVyLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRNb3ZlUmlnaHRJbjthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfS5tb3ZlLXJpZ2h0LWxlYXZlLm1vdmUtcmlnaHQtbGVhdmUtYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudE1vdmVSaWdodE91dDthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1vdmUtcmlnaHQtYXBwZWFyLC5tb3ZlLXJpZ2h0LWVudGVye29wYWNpdHk6MDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMDgsLjgyLC4xNywxKX0ubW92ZS1yaWdodC1sZWF2ZXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNiwuMDQsLjk4LC4zNCl9QGtleWZyYW1lcyBhbnRNb3ZlRG93bkluezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbnRNb3ZlRG93bk91dHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYW50TW92ZUxlZnRJbnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwJSk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFudE1vdmVMZWZ0T3V0ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAlKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYW50TW92ZVJpZ2h0SW57MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFudE1vdmVSaWdodE91dHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAlKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYW50TW92ZVVwSW57MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbnRNb3ZlVXBPdXR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MH19QGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlezEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlLFthbnQtY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZT10cnVlXTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOmluaGVyaXQ7Ym94LXNoYWRvdzowIDAgMCAwICMxODkwZmY7Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWFudGQtd2F2ZS1zaGFkb3ctY29sb3IpO29wYWNpdHk6LjI7YW5pbWF0aW9uOmZhZGVFZmZlY3QgMnMgY3ViaWMtYmV6aWVyKC4wOCwuODIsLjE3LDEpLHdhdmVFZmZlY3QgLjRzIGN1YmljLWJlemllciguMDgsLjgyLC4xNywxKTthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO2NvbnRlbnQ6Jyc7cG9pbnRlci1ldmVudHM6bm9uZX1Aa2V5ZnJhbWVzIHdhdmVFZmZlY3R7MTAwJXtib3gtc2hhZG93OjAgMCAwICMxODkwZmY7Ym94LXNoYWRvdzowIDAgMCA2cHggdmFyKC0tYW50ZC13YXZlLXNoYWRvdy1jb2xvcil9fUBrZXlmcmFtZXMgZmFkZUVmZmVjdHsxMDAle29wYWNpdHk6MH19LnNsaWRlLXVwLWFwcGVhciwuc2xpZGUtdXAtZW50ZXIsLnNsaWRlLXVwLWxlYXZle2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH0uc2xpZGUtdXAtYXBwZWFyLnNsaWRlLXVwLWFwcGVhci1hY3RpdmUsLnNsaWRlLXVwLWVudGVyLnNsaWRlLXVwLWVudGVyLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRTbGlkZVVwSW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30uc2xpZGUtdXAtbGVhdmUuc2xpZGUtdXAtbGVhdmUtYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFNsaWRlVXBPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5zbGlkZS11cC1hcHBlYXIsLnNsaWRlLXVwLWVudGVye29wYWNpdHk6MDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjMsMSwuMzIsMSl9LnNsaWRlLXVwLWxlYXZle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KX0uc2xpZGUtZG93bi1hcHBlYXIsLnNsaWRlLWRvd24tZW50ZXIsLnNsaWRlLWRvd24tbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS5zbGlkZS1kb3duLWFwcGVhci5zbGlkZS1kb3duLWFwcGVhci1hY3RpdmUsLnNsaWRlLWRvd24tZW50ZXIuc2xpZGUtZG93bi1lbnRlci1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50U2xpZGVEb3duSW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30uc2xpZGUtZG93bi1sZWF2ZS5zbGlkZS1kb3duLWxlYXZlLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRTbGlkZURvd25PdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5zbGlkZS1kb3duLWFwcGVhciwuc2xpZGUtZG93bi1lbnRlcntvcGFjaXR5OjA7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpfS5zbGlkZS1kb3duLWxlYXZle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KX0uc2xpZGUtbGVmdC1hcHBlYXIsLnNsaWRlLWxlZnQtZW50ZXIsLnNsaWRlLWxlZnQtbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS5zbGlkZS1sZWZ0LWFwcGVhci5zbGlkZS1sZWZ0LWFwcGVhci1hY3RpdmUsLnNsaWRlLWxlZnQtZW50ZXIuc2xpZGUtbGVmdC1lbnRlci1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50U2xpZGVMZWZ0SW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30uc2xpZGUtbGVmdC1sZWF2ZS5zbGlkZS1sZWZ0LWxlYXZlLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRTbGlkZUxlZnRPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS5zbGlkZS1sZWZ0LWFwcGVhciwuc2xpZGUtbGVmdC1lbnRlcntvcGFjaXR5OjA7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpfS5zbGlkZS1sZWZ0LWxlYXZle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KX0uc2xpZGUtcmlnaHQtYXBwZWFyLC5zbGlkZS1yaWdodC1lbnRlciwuc2xpZGUtcmlnaHQtbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS5zbGlkZS1yaWdodC1hcHBlYXIuc2xpZGUtcmlnaHQtYXBwZWFyLWFjdGl2ZSwuc2xpZGUtcmlnaHQtZW50ZXIuc2xpZGUtcmlnaHQtZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFNsaWRlUmlnaHRJbjthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfS5zbGlkZS1yaWdodC1sZWF2ZS5zbGlkZS1yaWdodC1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50U2xpZGVSaWdodE91dDthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNsaWRlLXJpZ2h0LWFwcGVhciwuc2xpZGUtcmlnaHQtZW50ZXJ7b3BhY2l0eTowO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKX0uc2xpZGUtcmlnaHQtbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpfUBrZXlmcmFtZXMgYW50U2xpZGVVcEluezAle3RyYW5zZm9ybTpzY2FsZVkoLjgpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFudFNsaWRlVXBPdXR7MCV7dHJhbnNmb3JtOnNjYWxlWSgxKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06c2NhbGVZKC44KTt0cmFuc2Zvcm0tb3JpZ2luOjAgMDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYW50U2xpZGVEb3duSW57MCV7dHJhbnNmb3JtOnNjYWxlWSguOCk7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCU7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnNjYWxlWSgxKTt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMTAwJTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW50U2xpZGVEb3duT3V0ezAle3RyYW5zZm9ybTpzY2FsZVkoMSk7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCU7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnNjYWxlWSguOCk7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCU7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGFudFNsaWRlTGVmdEluezAle3RyYW5zZm9ybTpzY2FsZVgoLjgpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtLW9yaWdpbjowIDA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFudFNsaWRlTGVmdE91dHswJXt0cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZVgoLjgpO3RyYW5zZm9ybS1vcmlnaW46MCAwO29wYWNpdHk6MH19QGtleWZyYW1lcyBhbnRTbGlkZVJpZ2h0SW57MCV7dHJhbnNmb3JtOnNjYWxlWCguOCk7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW50U2xpZGVSaWdodE91dHswJXt0cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAwO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZVgoLjgpO3RyYW5zZm9ybS1vcmlnaW46MTAwJSAwO29wYWNpdHk6MH19Lnpvb20tYXBwZWFyLC56b29tLWVudGVyLC56b29tLWxlYXZle2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH0uem9vbS1hcHBlYXIuem9vbS1hcHBlYXItYWN0aXZlLC56b29tLWVudGVyLnpvb20tZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21JbjthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfS56b29tLWxlYXZlLnpvb20tbGVhdmUtYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21PdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS56b29tLWFwcGVhciwuem9vbS1lbnRlcnt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4wOCwuODIsLjE3LDEpfS56b29tLWFwcGVhci1wcmVwYXJlLC56b29tLWVudGVyLXByZXBhcmV7dHJhbnNmb3JtOm5vbmV9Lnpvb20tbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc4LC4xNCwuMTUsLjg2KX0uem9vbS1iaWctYXBwZWFyLC56b29tLWJpZy1lbnRlciwuem9vbS1iaWctbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS56b29tLWJpZy1hcHBlYXIuem9vbS1iaWctYXBwZWFyLWFjdGl2ZSwuem9vbS1iaWctZW50ZXIuem9vbS1iaWctZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21CaWdJbjthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfS56b29tLWJpZy1sZWF2ZS56b29tLWJpZy1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50Wm9vbUJpZ091dDthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nO3BvaW50ZXItZXZlbnRzOm5vbmV9Lnpvb20tYmlnLWFwcGVhciwuem9vbS1iaWctZW50ZXJ7dHJhbnNmb3JtOnNjYWxlKDApO29wYWNpdHk6MDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMDgsLjgyLC4xNywxKX0uem9vbS1iaWctYXBwZWFyLXByZXBhcmUsLnpvb20tYmlnLWVudGVyLXByZXBhcmV7dHJhbnNmb3JtOm5vbmV9Lnpvb20tYmlnLWxlYXZle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43OCwuMTQsLjE1LC44Nil9Lnpvb20tYmlnLWZhc3QtYXBwZWFyLC56b29tLWJpZy1mYXN0LWVudGVyLC56b29tLWJpZy1mYXN0LWxlYXZle2FuaW1hdGlvbi1kdXJhdGlvbjouMXM7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH0uem9vbS1iaWctZmFzdC1hcHBlYXIuem9vbS1iaWctZmFzdC1hcHBlYXItYWN0aXZlLC56b29tLWJpZy1mYXN0LWVudGVyLnpvb20tYmlnLWZhc3QtZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21CaWdJbjthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nfS56b29tLWJpZy1mYXN0LWxlYXZlLnpvb20tYmlnLWZhc3QtbGVhdmUtYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21CaWdPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS56b29tLWJpZy1mYXN0LWFwcGVhciwuem9vbS1iaWctZmFzdC1lbnRlcnt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4wOCwuODIsLjE3LDEpfS56b29tLWJpZy1mYXN0LWFwcGVhci1wcmVwYXJlLC56b29tLWJpZy1mYXN0LWVudGVyLXByZXBhcmV7dHJhbnNmb3JtOm5vbmV9Lnpvb20tYmlnLWZhc3QtbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc4LC4xNCwuMTUsLjg2KX0uem9vbS11cC1hcHBlYXIsLnpvb20tdXAtZW50ZXIsLnpvb20tdXAtbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS56b29tLXVwLWFwcGVhci56b29tLXVwLWFwcGVhci1hY3RpdmUsLnpvb20tdXAtZW50ZXIuem9vbS11cC1lbnRlci1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50Wm9vbVVwSW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30uem9vbS11cC1sZWF2ZS56b29tLXVwLWxlYXZlLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRab29tVXBPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS56b29tLXVwLWFwcGVhciwuem9vbS11cC1lbnRlcnt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4wOCwuODIsLjE3LDEpfS56b29tLXVwLWFwcGVhci1wcmVwYXJlLC56b29tLXVwLWVudGVyLXByZXBhcmV7dHJhbnNmb3JtOm5vbmV9Lnpvb20tdXAtbGVhdmV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc4LC4xNCwuMTUsLjg2KX0uem9vbS1kb3duLWFwcGVhciwuem9vbS1kb3duLWVudGVyLC56b29tLWRvd24tbGVhdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi4yczthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS56b29tLWRvd24tYXBwZWFyLnpvb20tZG93bi1hcHBlYXItYWN0aXZlLC56b29tLWRvd24tZW50ZXIuem9vbS1kb3duLWVudGVyLWFjdGl2ZXthbmltYXRpb24tbmFtZTphbnRab29tRG93bkluO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnJ1bm5pbmd9Lnpvb20tZG93bi1sZWF2ZS56b29tLWRvd24tbGVhdmUtYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21Eb3duT3V0O2FuaW1hdGlvbi1wbGF5LXN0YXRlOnJ1bm5pbmc7cG9pbnRlci1ldmVudHM6bm9uZX0uem9vbS1kb3duLWFwcGVhciwuem9vbS1kb3duLWVudGVye3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjA7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjA4LC44MiwuMTcsMSl9Lnpvb20tZG93bi1hcHBlYXItcHJlcGFyZSwuem9vbS1kb3duLWVudGVyLXByZXBhcmV7dHJhbnNmb3JtOm5vbmV9Lnpvb20tZG93bi1sZWF2ZXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzgsLjE0LC4xNSwuODYpfS56b29tLWxlZnQtYXBwZWFyLC56b29tLWxlZnQtZW50ZXIsLnpvb20tbGVmdC1sZWF2ZXthbmltYXRpb24tZHVyYXRpb246LjJzO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9Lnpvb20tbGVmdC1hcHBlYXIuem9vbS1sZWZ0LWFwcGVhci1hY3RpdmUsLnpvb20tbGVmdC1lbnRlci56b29tLWxlZnQtZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21MZWZ0SW47YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ30uem9vbS1sZWZ0LWxlYXZlLnpvb20tbGVmdC1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50Wm9vbUxlZnRPdXQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZztwb2ludGVyLWV2ZW50czpub25lfS56b29tLWxlZnQtYXBwZWFyLC56b29tLWxlZnQtZW50ZXJ7dHJhbnNmb3JtOnNjYWxlKDApO29wYWNpdHk6MDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMDgsLjgyLC4xNywxKX0uem9vbS1sZWZ0LWFwcGVhci1wcmVwYXJlLC56b29tLWxlZnQtZW50ZXItcHJlcGFyZXt0cmFuc2Zvcm06bm9uZX0uem9vbS1sZWZ0LWxlYXZle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43OCwuMTQsLjE1LC44Nil9Lnpvb20tcmlnaHQtYXBwZWFyLC56b29tLXJpZ2h0LWVudGVyLC56b29tLXJpZ2h0LWxlYXZle2FuaW1hdGlvbi1kdXJhdGlvbjouMnM7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH0uem9vbS1yaWdodC1hcHBlYXIuem9vbS1yaWdodC1hcHBlYXItYWN0aXZlLC56b29tLXJpZ2h0LWVudGVyLnpvb20tcmlnaHQtZW50ZXItYWN0aXZle2FuaW1hdGlvbi1uYW1lOmFudFpvb21SaWdodEluO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnJ1bm5pbmd9Lnpvb20tcmlnaHQtbGVhdmUuem9vbS1yaWdodC1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uLW5hbWU6YW50Wm9vbVJpZ2h0T3V0O2FuaW1hdGlvbi1wbGF5LXN0YXRlOnJ1bm5pbmc7cG9pbnRlci1ldmVudHM6bm9uZX0uem9vbS1yaWdodC1hcHBlYXIsLnpvb20tcmlnaHQtZW50ZXJ7dHJhbnNmb3JtOnNjYWxlKDApO29wYWNpdHk6MDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMDgsLjgyLC4xNywxKX0uem9vbS1yaWdodC1hcHBlYXItcHJlcGFyZSwuem9vbS1yaWdodC1lbnRlci1wcmVwYXJle3RyYW5zZm9ybTpub25lfS56b29tLXJpZ2h0LWxlYXZle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43OCwuMTQsLjE1LC44Nil9QGtleWZyYW1lcyBhbnRab29tSW57MCV7dHJhbnNmb3JtOnNjYWxlKC4yKTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFudFpvb21PdXR7MCV7dHJhbnNmb3JtOnNjYWxlKDEpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC4yKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYW50Wm9vbUJpZ0luezAle3RyYW5zZm9ybTpzY2FsZSguOCk7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbnRab29tQmlnT3V0ezAle3RyYW5zZm9ybTpzY2FsZSgxKX0xMDAle3RyYW5zZm9ybTpzY2FsZSguOCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGFudFpvb21VcEluezAle3RyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMDtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMH19QGtleWZyYW1lcyBhbnRab29tVXBPdXR7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybS1vcmlnaW46NTAlIDB9MTAwJXt0cmFuc2Zvcm06c2NhbGUoLjgpO3RyYW5zZm9ybS1vcmlnaW46NTAlIDA7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGFudFpvb21MZWZ0SW57MCV7dHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm0tb3JpZ2luOjAgNTAlfX1Aa2V5ZnJhbWVzIGFudFpvb21MZWZ0T3V0ezAle3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm0tb3JpZ2luOjAgNTAlfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO29wYWNpdHk6MH19QGtleWZyYW1lcyBhbnRab29tUmlnaHRJbnswJXt0cmFuc2Zvcm06c2NhbGUoLjgpO3RyYW5zZm9ybS1vcmlnaW46MTAwJSA1MCU7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybS1vcmlnaW46MTAwJSA1MCV9fUBrZXlmcmFtZXMgYW50Wm9vbVJpZ2h0T3V0ezAle3RyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlO29wYWNpdHk6MH19QGtleWZyYW1lcyBhbnRab29tRG93bkluezAle3RyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJX19QGtleWZyYW1lcyBhbnRab29tRG93bk91dHswJXt0cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJX0xMDAle3RyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJTtvcGFjaXR5OjB9fS5hbnQtbW90aW9uLWNvbGxhcHNlLC5hbnQtbW90aW9uLWNvbGxhcHNlLWxlZ2FjeS1hY3RpdmV7dHJhbnNpdGlvbjpoZWlnaHQgLjJzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKSxvcGFjaXR5IC4ycyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSkhaW1wb3J0YW50fS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstdmlzdWFsbHktaGlkZGVue2JvcmRlcjowO2NsaXA6cmVjdCgwIDAgMCAwKTtoZWlnaHQ6MXB4O21hcmdpbjotMXB4O3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7b3V0bGluZTowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfS5jZGstb3ZlcmxheS1iYWNrZHJvcHt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuYW50LW1vZGFsLW1hc2t7b3BhY2l0eToxfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH0uY2RrLWdsb2JhbC1zY3JvbGxibG9jayBib2R5e292ZXJmbG93LXg6dmlzaWJsZX0ubnotb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwubnotb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MH0ubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtZHJhd2VyLmFudC1kcmF3ZXItb3BlbiAuYW50LWRyYXdlci1tYXNre2FuaW1hdGlvbjpub25lO3RyYW5zaXRpb246bm9uZX0ubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtZHJhd2VyPip7dHJhbnNpdGlvbjpub25lfS5uei1hbmltYXRlLWRpc2FibGVkIC5hbnQtbW9kYWwsLm56LWFuaW1hdGUtZGlzYWJsZWQgLmFudC1tb2RhbC1tYXNrLC5uei1hbmltYXRlLWRpc2FibGVkIC5hbnQtbW9kYWwtbWFzay56b29tLWVudGVyLC5uei1hbmltYXRlLWRpc2FibGVkIC5hbnQtbW9kYWwtbWFzay56b29tLWVudGVyLWFjdGl2ZSwubnotYW5pbWF0ZS1kaXNhYmxlZCAuYW50LW1vZGFsLW1hc2suem9vbS1sZWF2ZSwubnotYW5pbWF0ZS1kaXNhYmxlZCAuYW50LW1vZGFsLW1hc2suem9vbS1sZWF2ZS1hY3RpdmUsLm56LWFuaW1hdGUtZGlzYWJsZWQgLmFudC1tb2RhbC56b29tLWVudGVyLC5uei1hbmltYXRlLWRpc2FibGVkIC5hbnQtbW9kYWwuem9vbS1lbnRlci1hY3RpdmUsLm56LWFuaW1hdGUtZGlzYWJsZWQgLmFudC1tb2RhbC56b29tLWxlYXZlLC5uei1hbmltYXRlLWRpc2FibGVkIC5hbnQtbW9kYWwuem9vbS1sZWF2ZS1hY3RpdmV7YW5pbWF0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfS5uei1hbmltYXRlLWRpc2FibGVkLmFudC1jb2xsYXBzZT4uYW50LWNvbGxhcHNlLWl0ZW0+LmFudC1jb2xsYXBzZS1oZWFkZXIgLmFudC1jb2xsYXBzZS1hcnJvdyBzdmcsLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LW1lbnUsLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LW1lbnUgLmFudC1tZW51LWl0ZW0sLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LW1lbnUgLmFudC1tZW51LWl0ZW0gLmFudGljb24sLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LW1lbnUgLmFudC1tZW51LWl0ZW0gLmFudGljb24rc3BhbiwubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtbWVudSAuYW50LW1lbnUtc3VibWVudS10aXRsZSwubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtbWVudSAuYW50LW1lbnUtc3VibWVudS10aXRsZSAuYW50aWNvbiwubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtbWVudSAuYW50LW1lbnUtc3VibWVudS10aXRsZSAuYW50aWNvbitzcGFuLC5uei1hbmltYXRlLWRpc2FibGVkLmFudC10YWJzIC5hbnQtdGFicy1ib3R0b20tY29udGVudC5hbnQtdGFicy1jb250ZW50LWFuaW1hdGVkLC5uei1hbmltYXRlLWRpc2FibGVkLmFudC10YWJzIC5hbnQtdGFicy1ib3R0b20tY29udGVudD4uYW50LXRhYnMtdGFicGFuZSwubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtdGFicyAuYW50LXRhYnMtdG9wLWNvbnRlbnQuYW50LXRhYnMtY29udGVudC1hbmltYXRlZCwubnotYW5pbWF0ZS1kaXNhYmxlZC5hbnQtdGFicyAuYW50LXRhYnMtdG9wLWNvbnRlbnQ+LmFudC10YWJzLXRhYnBhbmUsLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LXRhYnMuYW50LXRhYnMtYm90dG9tIC5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkLC5uei1hbmltYXRlLWRpc2FibGVkLmFudC10YWJzLmFudC10YWJzLWxlZnQgLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWQsLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LXRhYnMuYW50LXRhYnMtcmlnaHQgLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWQsLm56LWFuaW1hdGUtZGlzYWJsZWQuYW50LXRhYnMuYW50LXRhYnMtdG9wIC5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVke3RyYW5zaXRpb246bm9uZX0iLCIuYW50LWJ0biwuYW50LWJ0bjplbXB0eSwuYW50LWJ0bj5zcGFue2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5hbnQtYnRuLmFudC1idG4tbG9hZGluZzpub3QoW2Rpc2FibGVkXSksLmFudC1idG46OmJlZm9yZSwuYW50LWJ0bltkaXNhYmxlZF0+Kntwb2ludGVyLWV2ZW50czpub25lfS5hbnQtYnRue2xpbmUtaGVpZ2h0OjEuNTcxNTtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXdlaWdodDo0MDA7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtib3gtc2hhZG93OjAgMnB4IDAgcmdiYSgwLDAsMCwuMDE1KTtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC42NDUsLjA0NSwuMzU1LDEpO3VzZXItc2VsZWN0Om5vbmU7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjtoZWlnaHQ6MzJweDtwYWRkaW5nOjRweCAxNXB4O2ZvbnQtc2l6ZToxNHB4O2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOnJnYmEoMCwwLDAsLjg1KTtiYWNrZ3JvdW5kOiNmZmZ9LmFudC1idG46YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG46Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bjpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuPmE6b25seS1jaGlsZDo6YWZ0ZXJ7YmFja2dyb3VuZDowIDA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Y29udGVudDonJ30uYW50LWJ0bj4uYW50aWNvbntsaW5lLWhlaWdodDoxfS5hbnQtYnRuLC5hbnQtYnRuOmFjdGl2ZSwuYW50LWJ0bjpmb2N1c3tvdXRsaW5lOjB9LmFudC1idG46bm90KFtkaXNhYmxlZF0pOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lfS5hbnQtYnRuOm5vdChbZGlzYWJsZWRdKTphY3RpdmV7b3V0bGluZTowO2JveC1zaGFkb3c6bm9uZX0uYW50LWJ0bltkaXNhYmxlZF17Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbnQtYnRuLWxne2hlaWdodDo0MHB4O3BhZGRpbmc6Ni40cHggMTVweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjJweH0uYW50LWJ0bi1zbXtoZWlnaHQ6MjRweDtwYWRkaW5nOjAgN3B4O2ZvbnQtc2l6ZToxNHB4O2JvcmRlci1yYWRpdXM6MnB4fS5hbnQtYnRuPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG46Zm9jdXMsLmFudC1idG46aG92ZXJ7Y29sb3I6IzQwYTlmZjtib3JkZXItY29sb3I6IzQwYTlmZn0uYW50LWJ0bjpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG46aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bjphY3RpdmV7Y29sb3I6IzA5NmRkOTtib3JkZXItY29sb3I6IzA5NmRkOX0uYW50LWJ0bjphY3RpdmU+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bltkaXNhYmxlZF0sLmFudC1idG5bZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bltkaXNhYmxlZF06Zm9jdXMsLmFudC1idG5bZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG5bZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG5bZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bltkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuW2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuW2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bltkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bltkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bltkaXNhYmxlZF0+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuOmFjdGl2ZSwuYW50LWJ0bjpmb2N1cywuYW50LWJ0bjpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kOiNmZmZ9LmFudC1idG4tcHJpbWFyeXtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzE4OTBmZjtib3JkZXItY29sb3I6IzE4OTBmZjt0ZXh0LXNoYWRvdzowIC0xcHggMCByZ2JhKDAsMCwwLC4xMik7Ym94LXNoYWRvdzowIDJweCAwIHJnYmEoMCwwLDAsLjA0NSl9LmFudC1idG4tcHJpbWFyeT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLXByaW1hcnk+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLXByaW1hcnk6Zm9jdXMsLmFudC1idG4tcHJpbWFyeTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQ6IzQwYTlmZjtib3JkZXItY29sb3I6IzQwYTlmZn0uYW50LWJ0bi1wcmltYXJ5OmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1wcmltYXJ5OmhvdmVyPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tcHJpbWFyeTpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLXByaW1hcnk6aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLXByaW1hcnk6YWN0aXZle2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMDk2ZGQ5O2JvcmRlci1jb2xvcjojMDk2ZGQ5fS5hbnQtYnRuLXByaW1hcnk6YWN0aXZlPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tcHJpbWFyeTphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cywuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC4yNSk7YmFja2dyb3VuZDojZjVmNWY1O2JvcmRlci1jb2xvcjojZDlkOWQ5O3RleHQtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVyPmE6b25seS1jaGlsZCwuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZ3JvdXAgLmFudC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1yaWdodC1jb2xvcjojNDBhOWZmO2JvcmRlci1sZWZ0LWNvbG9yOiM0MGE5ZmZ9LmFudC1idG4tZ3JvdXAgLmFudC1idG4tcHJpbWFyeTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOmRpc2FibGVke2JvcmRlci1jb2xvcjojZDlkOWQ5fS5hbnQtYnRuLWdyb3VwIC5hbnQtYnRuLXByaW1hcnk6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItcmlnaHQtY29sb3I6IzQwYTlmZn0uYW50LWJ0bi1ncm91cCAuYW50LWJ0bi1wcmltYXJ5OmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZClbZGlzYWJsZWRde2JvcmRlci1yaWdodC1jb2xvcjojZDlkOWQ5fS5hbnQtYnRuLWdyb3VwIC5hbnQtYnRuLXByaW1hcnkrLmFudC1idG4tcHJpbWFyeSwuYW50LWJ0bi1ncm91cCAuYW50LWJ0bi1wcmltYXJ5Omxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLWxlZnQtY29sb3I6IzQwYTlmZn0uYW50LWJ0bi1ncm91cCAuYW50LWJ0bi1wcmltYXJ5Ky5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdLC5hbnQtYnRuLWdyb3VwIC5hbnQtYnRuLXByaW1hcnk6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKVtkaXNhYmxlZF17Ym9yZGVyLWxlZnQtY29sb3I6I2Q5ZDlkOX0uYW50LWJ0bi1naG9zdHtjb2xvcjpyZ2JhKDAsMCwwLC44NSk7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDl9LmFudC1idG4tZ2hvc3Q+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1naG9zdD5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZ2hvc3Q6Zm9jdXMsLmFudC1idG4tZ2hvc3Q6aG92ZXJ7Y29sb3I6IzQwYTlmZjtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6IzQwYTlmZn0uYW50LWJ0bi1naG9zdDpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tZ2hvc3Q6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1naG9zdDpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWdob3N0OmhvdmVyPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1naG9zdDphY3RpdmV7Y29sb3I6IzA5NmRkOTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6IzA5NmRkOX0uYW50LWJ0bi1naG9zdDphY3RpdmU+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1naG9zdDphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWdob3N0W2Rpc2FibGVkXSwuYW50LWJ0bi1naG9zdFtkaXNhYmxlZF06YWN0aXZlLC5hbnQtYnRuLWdob3N0W2Rpc2FibGVkXTpmb2N1cywuYW50LWJ0bi1naG9zdFtkaXNhYmxlZF06aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMjUpO2JhY2tncm91bmQ6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2Q5ZDlkOTt0ZXh0LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1naG9zdFtkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZCwuYW50LWJ0bi1naG9zdFtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWdob3N0W2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQsLmFudC1idG4tZ2hvc3RbZGlzYWJsZWRdPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZ2hvc3RbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWdob3N0W2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWdob3N0W2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWdob3N0W2Rpc2FibGVkXT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFzaGVke2NvbG9yOnJnYmEoMCwwLDAsLjg1KTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7Ym9yZGVyLXN0eWxlOmRhc2hlZH0uYW50LWJ0bi1kYXNoZWQ+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYXNoZWQ+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhc2hlZDpmb2N1cywuYW50LWJ0bi1kYXNoZWQ6aG92ZXJ7Y29sb3I6IzQwYTlmZjtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiM0MGE5ZmZ9LmFudC1idG4tZGFzaGVkOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1kYXNoZWQ6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYXNoZWQ6Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYXNoZWQ6aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhc2hlZDphY3RpdmV7Y29sb3I6IzA5NmRkOTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiMwOTZkZDl9LmFudC1idG4tZGFzaGVkOmFjdGl2ZT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWRhc2hlZDphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhc2hlZFtkaXNhYmxlZF0sLmFudC1idG4tZGFzaGVkW2Rpc2FibGVkXTphY3RpdmUsLmFudC1idG4tZGFzaGVkW2Rpc2FibGVkXTpmb2N1cywuYW50LWJ0bi1kYXNoZWRbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tZGFzaGVkW2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhc2hlZFtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhc2hlZFtkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhc2hlZFtkaXNhYmxlZF0+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYXNoZWRbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhc2hlZFtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYXNoZWRbZGlzYWJsZWRdOmhvdmVyPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFzaGVkW2Rpc2FibGVkXT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vye2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZmY0ZDRmO2JvcmRlci1jb2xvcjojZmY0ZDRmO3RleHQtc2hhZG93OjAgLTFweCAwIHJnYmEoMCwwLDAsLjEyKTtib3gtc2hhZG93OjAgMnB4IDAgcmdiYSgwLDAsMCwuMDQ1KX0uYW50LWJ0bi1kYW5nZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhbmdlcjpmb2N1cywuYW50LWJ0bi1kYW5nZXI6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmZjc4NzU7Ym9yZGVyLWNvbG9yOiNmZjc4NzV9LmFudC1idG4tZGFuZ2VyOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1kYW5nZXI6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXI6Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYW5nZXI6aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhbmdlcjphY3RpdmV7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNkOTM2M2U7Ym9yZGVyLWNvbG9yOiNkOTM2M2V9LmFudC1idG4tZGFuZ2VyOmFjdGl2ZT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWRhbmdlcjphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF0sLmFudC1idG4tZGFuZ2VyW2Rpc2FibGVkXTphY3RpdmUsLmFudC1idG4tZGFuZ2VyW2Rpc2FibGVkXTpmb2N1cywuYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tZGFuZ2VyW2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF0+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdOmhvdmVyPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2VyW2Rpc2FibGVkXT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tbGlua3tjb2xvcjojMTg5MGZmO2JhY2tncm91bmQ6MCAwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tbGluaz5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWxpbms+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWxpbms6Zm9jdXMsLmFudC1idG4tbGluazpob3Zlcntjb2xvcjojNDBhOWZmO2JhY2tncm91bmQ6MCAwO2JvcmRlci1jb2xvcjojNDBhOWZmfS5hbnQtYnRuLWxpbms6Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWxpbms6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1saW5rOmZvY3VzPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tbGluazpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tbGluazphY3RpdmV7Y29sb3I6IzA5NmRkOTtiYWNrZ3JvdW5kOjAgMH0uYW50LWJ0bi1saW5rOmFjdGl2ZT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWxpbms6YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1saW5rOmhvdmVye2JhY2tncm91bmQ6MCAwfS5hbnQtYnRuLWxpbms6YWN0aXZlLC5hbnQtYnRuLWxpbms6Zm9jdXMsLmFudC1idG4tbGluazpob3Zlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LmFudC1idG4tbGlua1tkaXNhYmxlZF0sLmFudC1idG4tbGlua1tkaXNhYmxlZF06YWN0aXZlLC5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLC5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tbGlua1tkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZCwuYW50LWJ0bi1saW5rW2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tbGlua1tkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tbGlua1tkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tbGlua1tkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1saW5rW2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi10ZXh0e2NvbG9yOnJnYmEoMCwwLDAsLjg1KTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzpub25lfS5hbnQtYnRuLXRleHQ+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi10ZXh0PmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi10ZXh0OmZvY3VzLC5hbnQtYnRuLXRleHQ6aG92ZXJ7Y29sb3I6IzQwYTlmZn0uYW50LWJ0bi10ZXh0OmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi10ZXh0OmhvdmVyPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tdGV4dDpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLXRleHQ6aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLXRleHQ6YWN0aXZle2NvbG9yOiMwOTZkZDl9LmFudC1idG4tdGV4dDphY3RpdmU+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi10ZXh0OmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tdGV4dDpmb2N1cywuYW50LWJ0bi10ZXh0OmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjg1KTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjAxOCk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5hbnQtYnRuLXRleHQ6YWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg1KTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjAyOCk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5hbnQtYnRuLXRleHRbZGlzYWJsZWRdLC5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTpmb2N1cywuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC4yNSk7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O3RleHQtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG4tdGV4dFtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmhvdmVyPmE6b25seS1jaGlsZCwuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tdGV4dFtkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3Vze2NvbG9yOiNmZjRkNGY7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojZmY0ZDRmfS5hbnQtYnRuLWRhbmdlcm91cz5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWRhbmdlcm91cz5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzOmZvY3VzLC5hbnQtYnRuLWRhbmdlcm91czpob3Zlcntjb2xvcjojZmY3ODc1O2JhY2tncm91bmQ6I2ZmZjtib3JkZXItY29sb3I6I2ZmNzg3NX0uYW50LWJ0bi1kYW5nZXJvdXM6Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcm91czpob3Zlcj5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWRhbmdlcm91czpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcm91czpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzOmFjdGl2ZXtjb2xvcjojZDkzNjNlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItY29sb3I6I2Q5MzYzZX0uYW50LWJ0bi1kYW5nZXJvdXM6YWN0aXZlPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXSwuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmZvY3VzLC5hbnQtYnRuLWRhbmdlcm91c1tkaXNhYmxlZF06aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMjUpO2JhY2tncm91bmQ6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2Q5ZDlkOTt0ZXh0LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQsLmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWRhbmdlcm91c1tkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcm91c1tkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZmY0ZDRmO2JvcmRlci1jb2xvcjojZmY0ZDRmO3RleHQtc2hhZG93OjAgLTFweCAwIHJnYmEoMCwwLDAsLjEyKTtib3gtc2hhZG93OjAgMnB4IDAgcmdiYSgwLDAsMCwuMDQ1KX0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5PmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeTpmb2N1cywuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5OmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZmY3ODc1O2JvcmRlci1jb2xvcjojZmY3ODc1fS5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXByaW1hcnk6Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXByaW1hcnk6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5OmZvY3VzPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeTphY3RpdmV7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNkOTM2M2U7Ym9yZGVyLWNvbG9yOiNkOTM2M2V9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeTphY3RpdmU+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5OmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF0sLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmZvY3VzLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZCwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5re2NvbG9yOiNmZjRkNGY7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluaz5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazpmb2N1cywuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rOmhvdmVye2NvbG9yOiNmZjc4NzU7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbms6Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbms6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rOmZvY3VzPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazphY3RpdmV7Y29sb3I6I2Q5MzYzZTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazphY3RpdmU+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF0sLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06YWN0aXZlLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZCwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rW2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rW2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0e2NvbG9yOiNmZjRkNGY7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JveC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0PmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dD5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dDpmb2N1cywuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0OmhvdmVye2NvbG9yOiNmZjc4NzU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wMTgpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0OmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0OmhvdmVyPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dDpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXRleHQ6aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXRleHQ6YWN0aXZle2NvbG9yOiNkOTM2M2U7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wMjgpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0OmFjdGl2ZT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXRleHQ6YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXSwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTphY3RpdmUsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dFtkaXNhYmxlZF06Zm9jdXMsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dFtkaXNhYmxlZF06aG92ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMjUpO2JhY2tncm91bmQ6MCAwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDt0ZXh0LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dFtkaXNhYmxlZF0+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi10ZXh0W2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLXRleHRbZGlzYWJsZWRdOmhvdmVyPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tdGV4dFtkaXNhYmxlZF0+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWljb24tb25seXt3aWR0aDozMnB4O2hlaWdodDozMnB4O3BhZGRpbmc6Mi40cHggMDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjJweDt2ZXJ0aWNhbC1hbGlnbjotMXB4fS5hbnQtYnRuLWljb24tb25seT4qe2ZvbnQtc2l6ZToxNnB4fS5hbnQtYnRuLWljb24tb25seS5hbnQtYnRuLWxne3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cGFkZGluZzo0LjlweCAwO2ZvbnQtc2l6ZToxOHB4O2JvcmRlci1yYWRpdXM6MnB4fS5hbnQtYnRuLWljb24tb25seS5hbnQtYnRuLWxnPip7Zm9udC1zaXplOjE4cHh9LmFudC1idG4taWNvbi1vbmx5LmFudC1idG4tc217d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtwYWRkaW5nOjA7Zm9udC1zaXplOjE0cHg7Ym9yZGVyLXJhZGl1czoycHh9LmFudC1idG4taWNvbi1vbmx5LmFudC1idG4tc20+Kntmb250LXNpemU6MTRweH0uYW50LWJ0bi1yb3VuZHtoZWlnaHQ6MzJweDtwYWRkaW5nOjRweCAxNnB4O2ZvbnQtc2l6ZToxNHB4O2JvcmRlci1yYWRpdXM6MzJweH0uYW50LWJ0bi1yb3VuZC5hbnQtYnRuLWxne2hlaWdodDo0MHB4O3BhZGRpbmc6Ni40cHggMjBweDtmb250LXNpemU6MTZweDtib3JkZXItcmFkaXVzOjQwcHh9LmFudC1idG4tcm91bmQuYW50LWJ0bi1zbXtoZWlnaHQ6MjRweDtwYWRkaW5nOjAgMTJweDtmb250LXNpemU6MTRweDtib3JkZXItcmFkaXVzOjI0cHh9LmFudC1idG4tcm91bmQuYW50LWJ0bi1pY29uLW9ubHl7d2lkdGg6YXV0b30uYW50LWJ0bi1jaXJjbGV7bWluLXdpZHRoOjMycHg7cGFkZGluZy1yaWdodDowO3BhZGRpbmctbGVmdDowO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NTAlfS5hbnQtYnRuLWNpcmNsZS5hbnQtYnRuLWxne21pbi13aWR0aDo0MHB4O2JvcmRlci1yYWRpdXM6NTAlfS5hbnQtYnRuLWNpcmNsZS5hbnQtYnRuLXNte21pbi13aWR0aDoyNHB4O2JvcmRlci1yYWRpdXM6NTAlfS5hbnQtYnRuOjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xcHg7cmlnaHQ6LTFweDtib3R0b206LTFweDtsZWZ0Oi0xcHg7ei1pbmRleDoxO2Rpc3BsYXk6bm9uZTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czppbmhlcml0O29wYWNpdHk6LjM1O3RyYW5zaXRpb246b3BhY2l0eSAuMnM7Y29udGVudDonJ30uYW50LWJ0bi1ncm91cCwuYW50LWJ0bi1ncm91cD4uYW50LWJ0biwuYW50LWJ0bi1ncm91cD5zcGFuPi5hbnQtYnRuLC5hbnQtYnRuLmFudC1idG4tbG9hZGluZywuYW50LWJ0bjphY3RpdmU+c3BhbiwuYW50LWJ0bjpmb2N1cz5zcGFue3Bvc2l0aW9uOnJlbGF0aXZlfS5hbnQtYnRuIC5hbnRpY29ue3RyYW5zaXRpb246bWFyZ2luLWxlZnQgLjNzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKX0uYW50LWJ0biAuYW50aWNvbi5hbnRpY29uLW1pbnVzPnN2ZywuYW50LWJ0biAuYW50aWNvbi5hbnRpY29uLXBsdXM+c3Zne3NoYXBlLXJlbmRlcmluZzpvcHRpbWl6ZVNwZWVkfS5hbnQtYnRuLmFudC1idG4tbG9hZGluZzo6YmVmb3Jle2Rpc3BsYXk6YmxvY2t9LmFudC1idG4+LmFudC1idG4tbG9hZGluZy1pY29ue3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSl9LmFudC1idG4+LmFudC1idG4tbG9hZGluZy1pY29uIC5hbnRpY29ue3BhZGRpbmctcmlnaHQ6OHB4O2FuaW1hdGlvbjpub25lfS5hbnQtYnRuPi5hbnQtYnRuLWxvYWRpbmctaWNvbiAuYW50aWNvbiBzdmd7YW5pbWF0aW9uOmxvYWRpbmdDaXJjbGUgMXMgaW5maW5pdGUgbGluZWFyfS5hbnQtYnRuPi5hbnQtYnRuLWxvYWRpbmctaWNvbjpvbmx5LWNoaWxkIC5hbnRpY29ue3BhZGRpbmctcmlnaHQ6MH0uYW50LWJ0bi1ncm91cHtkaXNwbGF5OmlubGluZS1mbGV4fS5hbnQtYnRuLWdyb3VwPi5hbnQtYnRuOmFjdGl2ZSwuYW50LWJ0bi1ncm91cD4uYW50LWJ0bjpmb2N1cywuYW50LWJ0bi1ncm91cD4uYW50LWJ0bjpob3ZlciwuYW50LWJ0bi1ncm91cD5zcGFuPi5hbnQtYnRuOmFjdGl2ZSwuYW50LWJ0bi1ncm91cD5zcGFuPi5hbnQtYnRuOmZvY3VzLC5hbnQtYnRuLWdyb3VwPnNwYW4+LmFudC1idG46aG92ZXJ7ei1pbmRleDoyfS5hbnQtYnRuLWdyb3VwPi5hbnQtYnRuW2Rpc2FibGVkXSwuYW50LWJ0bi1ncm91cD5zcGFuPi5hbnQtYnRuW2Rpc2FibGVkXXt6LWluZGV4OjB9LmFudC1idG4tZ3JvdXAgLmFudC1idG4taWNvbi1vbmx5e2ZvbnQtc2l6ZToxNHB4fS5hbnQtYnRuLWdyb3VwLWxnPi5hbnQtYnRuLC5hbnQtYnRuLWdyb3VwLWxnPnNwYW4+LmFudC1idG57aGVpZ2h0OjQwcHg7cGFkZGluZzo2LjRweCAxNXB4O2ZvbnQtc2l6ZToxNnB4O2JvcmRlci1yYWRpdXM6MH0uYW50LWJ0bi1ncm91cC1sZyAuYW50LWJ0bi5hbnQtYnRuLWljb24tb25seXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLWxlZnQ6MH0uYW50LWJ0bi1ncm91cC1zbT4uYW50LWJ0biwuYW50LWJ0bi1ncm91cC1zbT5zcGFuPi5hbnQtYnRue2hlaWdodDoyNHB4O3BhZGRpbmc6MCA3cHg7Zm9udC1zaXplOjE0cHg7Ym9yZGVyLXJhZGl1czowfS5hbnQtYnRuLWdyb3VwLXNtPi5hbnQtYnRuPi5hbnRpY29uLC5hbnQtYnRuLWdyb3VwLXNtPnNwYW4+LmFudC1idG4+LmFudGljb257Zm9udC1zaXplOjE0cHh9LmFudC1idG4tZ3JvdXAtc20gLmFudC1idG4uYW50LWJ0bi1pY29uLW9ubHl7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy1sZWZ0OjB9LmFudC1idG4rLmFudC1idG4tZ3JvdXAsLmFudC1idG4tZ3JvdXAgLmFudC1idG4rLmFudC1idG4sLmFudC1idG4tZ3JvdXAgLmFudC1idG4rc3BhbiwuYW50LWJ0bi1ncm91cCBzcGFuKy5hbnQtYnRuLC5hbnQtYnRuLWdyb3VwKy5hbnQtYnRuLC5hbnQtYnRuLWdyb3VwKy5hbnQtYnRuLWdyb3VwLC5hbnQtYnRuLWdyb3VwPnNwYW4rc3BhbnttYXJnaW4tbGVmdDotMXB4fS5hbnQtYnRuLWdyb3VwIC5hbnQtYnRuLXByaW1hcnkrLmFudC1idG46bm90KC5hbnQtYnRuLXByaW1hcnkpOm5vdChbZGlzYWJsZWRdKXtib3JkZXItbGVmdC1jb2xvcjp0cmFuc3BhcmVudH0uYW50LWJ0bi1ncm91cCAuYW50LWJ0bntib3JkZXItcmFkaXVzOjB9LmFudC1idG4tZ3JvdXAtc20+LmFudC1idG46b25seS1jaGlsZCwuYW50LWJ0bi1ncm91cC1zbT5zcGFuOm9ubHktY2hpbGQ+LmFudC1idG4sLmFudC1idG4tZ3JvdXA+LmFudC1idG46b25seS1jaGlsZCwuYW50LWJ0bi1ncm91cD5zcGFuOm9ubHktY2hpbGQ+LmFudC1idG57Ym9yZGVyLXJhZGl1czoycHh9LmFudC1idG4tZ3JvdXAtc20+LmFudC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSwuYW50LWJ0bi1ncm91cC1zbT5zcGFuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmFudC1idG4sLmFudC1idG4tZ3JvdXA+LmFudC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSwuYW50LWJ0bi1ncm91cD5zcGFuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmFudC1idG57Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czoycHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoycHh9LmFudC1idG4tZ3JvdXAtc20+LmFudC1idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSwuYW50LWJ0bi1ncm91cC1zbT5zcGFuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmFudC1idG4sLmFudC1idG4tZ3JvdXA+LmFudC1idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSwuYW50LWJ0bi1ncm91cD5zcGFuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmFudC1idG57Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MnB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjJweH0uYW50LWJ0bi1ncm91cD4uYW50LWJ0bjpmaXJzdC1jaGlsZCwuYW50LWJ0bi1ncm91cD5zcGFuOmZpcnN0LWNoaWxkPi5hbnQtYnRue21hcmdpbi1sZWZ0OjB9LmFudC1idG4tZ3JvdXA+LmFudC1idG4tZ3JvdXB7ZmxvYXQ6bGVmdH0uYW50LWJ0bi1ncm91cD4uYW50LWJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpPi5hbnQtYnRue2JvcmRlci1yYWRpdXM6MH0uYW50LWJ0bi1ncm91cD4uYW50LWJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5hbnQtYnRuOmxhc3QtY2hpbGR7cGFkZGluZy1yaWdodDo4cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5hbnQtYnRuLWdyb3VwPi5hbnQtYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmFudC1idG46Zmlyc3QtY2hpbGR7cGFkZGluZy1sZWZ0OjhweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5hbnQtYnRuLWdyb3VwLXJ0bC5hbnQtYnRuKy5hbnQtYnRuLWdyb3VwLC5hbnQtYnRuLWdyb3VwLXJ0bC5hbnQtYnRuLWdyb3VwIC5hbnQtYnRuKy5hbnQtYnRuLC5hbnQtYnRuLWdyb3VwLXJ0bC5hbnQtYnRuLWdyb3VwIC5hbnQtYnRuK3NwYW4sLmFudC1idG4tZ3JvdXAtcnRsLmFudC1idG4tZ3JvdXAgc3BhbisuYW50LWJ0biwuYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cCsuYW50LWJ0biwuYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cCsuYW50LWJ0bi1ncm91cCwuYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cD5zcGFuK3NwYW4sLmFudC1idG4tcnRsLmFudC1idG4rLmFudC1idG4tZ3JvdXAsLmFudC1idG4tcnRsLmFudC1idG4tZ3JvdXAgLmFudC1idG4rLmFudC1idG4sLmFudC1idG4tcnRsLmFudC1idG4tZ3JvdXAgLmFudC1idG4rc3BhbiwuYW50LWJ0bi1ydGwuYW50LWJ0bi1ncm91cCBzcGFuKy5hbnQtYnRuLC5hbnQtYnRuLXJ0bC5hbnQtYnRuLWdyb3VwKy5hbnQtYnRuLC5hbnQtYnRuLXJ0bC5hbnQtYnRuLWdyb3VwKy5hbnQtYnRuLWdyb3VwLC5hbnQtYnRuLXJ0bC5hbnQtYnRuLWdyb3VwPnNwYW4rc3BhbnttYXJnaW4tcmlnaHQ6LTFweDttYXJnaW4tbGVmdDphdXRvfS5hbnQtYnRuLWdyb3VwLmFudC1idG4tZ3JvdXAtcnRse2RpcmVjdGlvbjpydGx9LmFudC1idG4tZ3JvdXAtcnRsLmFudC1idG4tZ3JvdXA+LmFudC1idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSwuYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cD5zcGFuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmFudC1idG57Ym9yZGVyLXJhZGl1czowIDJweCAycHggMH0uYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cD4uYW50LWJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLC5hbnQtYnRuLWdyb3VwLXJ0bC5hbnQtYnRuLWdyb3VwPnNwYW46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKT4uYW50LWJ0bntib3JkZXItcmFkaXVzOjJweCAwIDAgMnB4fS5hbnQtYnRuLWdyb3VwLXJ0bC5hbnQtYnRuLWdyb3VwLXNtPi5hbnQtYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCksLmFudC1idG4tZ3JvdXAtcnRsLmFudC1idG4tZ3JvdXAtc20+c3BhbjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5hbnQtYnRue2JvcmRlci1yYWRpdXM6MCAycHggMnB4IDB9LmFudC1idG4tZ3JvdXAtcnRsLmFudC1idG4tZ3JvdXAtc20+LmFudC1idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSwuYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cC1zbT5zcGFuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmFudC1idG57Ym9yZGVyLXJhZGl1czoycHggMCAwIDJweH0uYW50LWJ0bj4uYW50aWNvbitzcGFuLC5hbnQtYnRuPnNwYW4rLmFudGljb257bWFyZ2luLWxlZnQ6OHB4fS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3R7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOjAgMCFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiNmZmZ9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnl7Y29sb3I6IzE4OTBmZjtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6IzE4OTBmZjt0ZXh0LXNoYWRvdzpub25lfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1wcmltYXJ5PmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnk+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1wcmltYXJ5OmZvY3VzLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1wcmltYXJ5OmhvdmVye2NvbG9yOiM0MGE5ZmY7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOiM0MGE5ZmZ9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnk6Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1wcmltYXJ5OmhvdmVyPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnk6Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnk6YWN0aXZle2NvbG9yOiMwOTZkZDk7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOiMwOTZkZDl9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnk6YWN0aXZlPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnk6YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF0sLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXMsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLXByaW1hcnlbZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tcHJpbWFyeVtkaXNhYmxlZF0+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJ7Y29sb3I6I2ZmNGQ0ZjtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6I2ZmNGQ0Zjt0ZXh0LXNoYWRvdzpub25lfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyOmZvY3VzLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXI6aG92ZXJ7Y29sb3I6I2ZmNzg3NTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6I2ZmNzg3NX0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyOmhvdmVyPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcjpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXI6aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXI6YWN0aXZle2NvbG9yOiNkOTM2M2U7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOiNkOTM2M2V9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcjphY3RpdmU+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF0sLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06YWN0aXZlLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdOmZvY3VzLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZCwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyW2Rpc2FibGVkXTpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcltkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2VyW2Rpc2FibGVkXTpob3Zlcj5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJbZGlzYWJsZWRdPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3Vze2NvbG9yOiNmZjRkNGY7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOiNmZjRkNGY7dGV4dC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cz5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91czpmb2N1cywuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzOmhvdmVye2NvbG9yOiNmZjc4NzU7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOiNmZjc4NzV9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91czpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91czpob3Zlcj5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXM6Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzOmhvdmVyPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzOmFjdGl2ZXtjb2xvcjojZDkzNjNlO2JhY2tncm91bmQ6MCAwO2JvcmRlci1jb2xvcjojZDkzNjNlfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXM6YWN0aXZlPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91czphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXTpmb2N1cywuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXTpob3Zlcntjb2xvcjpyZ2JhKDAsMCwwLC4yNSk7YmFja2dyb3VuZDojZjVmNWY1O2JvcmRlci1jb2xvcjojZDlkOWQ5O3RleHQtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91c1tkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmhvdmVyPmE6b25seS1jaGlsZCwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXNbZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZDo6YWZ0ZXIsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91c1tkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzW2Rpc2FibGVkXT5hOm9ubHktY2hpbGQ6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6MCAwO2NvbnRlbnQ6Jyd9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmt7Y29sb3I6I2ZmNGQ0ZjtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1zaGFkb3c6bm9uZX0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluaz5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazpmb2N1cywuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazpob3Zlcntjb2xvcjojZmY3ODc1O2JhY2tncm91bmQ6MCAwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudH0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazpmb2N1cz5hOm9ubHktY2hpbGQsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbms6aG92ZXI+YTpvbmx5LWNoaWxke2NvbG9yOmN1cnJlbnRDb2xvcn0uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazpmb2N1cz5hOm9ubHktY2hpbGQ6OmFmdGVyLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rOmhvdmVyPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGluazphY3RpdmV7Y29sb3I6I2Q5MzYzZTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbms6YWN0aXZlPmE6b25seS1jaGlsZHtjb2xvcjpjdXJyZW50Q29sb3J9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbms6YWN0aXZlPmE6b25seS1jaGlsZDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDowIDA7Y29udGVudDonJ30uYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF0sLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmFjdGl2ZSwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjI1KTtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkOWQ5ZDk7dGV4dC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmFjdGl2ZT5hOm9ubHktY2hpbGQsLmFudC1idG4tYmFja2dyb3VuZC1naG9zdC5hbnQtYnRuLWRhbmdlcm91cy5hbnQtYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzPmE6b25seS1jaGlsZCwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkLC5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rW2Rpc2FibGVkXT5hOm9ubHktY2hpbGR7Y29sb3I6Y3VycmVudENvbG9yfS5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3QuYW50LWJ0bi1kYW5nZXJvdXMuYW50LWJ0bi1saW5rW2Rpc2FibGVkXTphY3RpdmU+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06Zm9jdXM+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF06aG92ZXI+YTpvbmx5LWNoaWxkOjphZnRlciwuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0LmFudC1idG4tZGFuZ2Vyb3VzLmFudC1idG4tbGlua1tkaXNhYmxlZF0+YTpvbmx5LWNoaWxkOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOjAgMDtjb250ZW50OicnfS5hbnQtYnRuLXR3by1jaGluZXNlLWNoYXJzOjpmaXJzdC1sZXR0ZXJ7bGV0dGVyLXNwYWNpbmc6LjM0ZW19LmFudC1idG4tdHdvLWNoaW5lc2UtY2hhcnM+Om5vdCguYW50aWNvbil7bWFyZ2luLXJpZ2h0Oi0uMzRlbTtsZXR0ZXItc3BhY2luZzouMzRlbX0uYW50LWJ0bi1ibG9ja3t3aWR0aDoxMDAlfS5hbnQtYnRuOmVtcHR5e3dpZHRoOjA7dmlzaWJpbGl0eTpoaWRkZW47Y29udGVudDonXFxhMCd9YS5hbnQtYnRue3BhZGRpbmctdG9wOi4xcHg7bGluZS1oZWlnaHQ6MzBweH1hLmFudC1idG4tbGd7bGluZS1oZWlnaHQ6MzhweH1hLmFudC1idG4tc217bGluZS1oZWlnaHQ6MjJweH0uYW50LWJ0bi1ydGx7ZGlyZWN0aW9uOnJ0bH0uYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cCAuYW50LWJ0bi1wcmltYXJ5Ky5hbnQtYnRuLXByaW1hcnksLmFudC1idG4tZ3JvdXAtcnRsLmFudC1idG4tZ3JvdXAgLmFudC1idG4tcHJpbWFyeTpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpe2JvcmRlci1yaWdodC1jb2xvcjojNDBhOWZmO2JvcmRlci1sZWZ0LWNvbG9yOiNkOWQ5ZDl9LmFudC1idG4tZ3JvdXAtcnRsLmFudC1idG4tZ3JvdXAgLmFudC1idG4tcHJpbWFyeSsuYW50LWJ0bi1wcmltYXJ5W2Rpc2FibGVkXSwuYW50LWJ0bi1ncm91cC1ydGwuYW50LWJ0bi1ncm91cCAuYW50LWJ0bi1wcmltYXJ5Omxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZClbZGlzYWJsZWRde2JvcmRlci1yaWdodC1jb2xvcjojZDlkOWQ5O2JvcmRlci1sZWZ0LWNvbG9yOiM0MGE5ZmZ9LmFudC1idG4tcnRsLmFudC1idG4+LmFudC1idG4tbG9hZGluZy1pY29uIC5hbnRpY29ue3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLWxlZnQ6OHB4fS5hbnQtYnRuPi5hbnQtYnRuLWxvYWRpbmctaWNvbjpvbmx5LWNoaWxkIC5hbnRpY29ue3BhZGRpbmctbGVmdDowfS5hbnQtYnRuLXJ0bC5hbnQtYnRuPi5hbnRpY29uK3NwYW4sLmFudC1idG4tcnRsLmFudC1idG4+c3BhbisuYW50aWNvbnttYXJnaW4tcmlnaHQ6OHB4O21hcmdpbi1sZWZ0OjB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzJztcblxuLnRhcmpldGEtZ3J1cG8ge1xuICAvLyB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxYzFlMjE7XG59XG5cbi5saXN0LWNvbHVtbiB7XG4gIGhlaWdodDogODV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAwcHggIzFjMWUyMTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgJi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmFwcC10YXJqZXRhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAxNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMWMxZTIxO1xuICAvLyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgY29sb3I6IHNub3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLy8gY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiAjMjQyNTI2O1xuICBmb250LXNpemU6IDE0cHg7XG4gICYucm93IHtcbiAgICB3aWR0aDogMTZyZW07XG4gIH1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubGlzdC1jb2x1bW4ubGlzdC1yb3cuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4udGl0bGUtZ3J1cG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZTIxO1xuICAvLyBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAyNiUpO1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiBzbm93O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9XG59IiwiLy8gTWVkaWEgUXVlcmllc1xuXG5AbWl4aW4gbW9iaWxlLXMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbW9iaWxlLXN9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZS1tIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1vYmlsZS1tfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtbCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtb2JpbGUtbH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0YSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyR0YWJsZXRhfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsYXB0b3AtcyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRsYXB0b3Atc30pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGFwdG9wLW0ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skbGFwdG9wLW19KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxhcHRvcC1sIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGxhcHRvcC1sfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wLWs0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3AtazR9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGJveC1zaXppbmcoJGJveC1tb2RlbCkge1xuICBib3gtc2l6aW5nOiAkYm94LW1vZGVsO1xufSJdfQ== */"] });


/***/ }),

/***/ "k3iJ":
/*!*********************************************************!*\
  !*** ./src/app/componnets/tarjeta/tarjeta.component.ts ***!
  \*********************************************************/
/*! exports provided: TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaComponent", function() { return TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boton-option/boton-option.component */ "wJFS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");



class TarjetaComponent {
    constructor() {
        this.img = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    }
    ngOnInit() {
        this.img = this.datos.imgUrl ? this.datos.imgUrl : this.img;
    }
    abirEnlace() {
        window.open(`${this.datos.url}`, '_blank');
    }
}
TarjetaComponent.ɵfac = function TarjetaComponent_Factory(t) { return new (t || TarjetaComponent)(); };
TarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TarjetaComponent, selectors: [["app-tarjeta"]], inputs: { datos: "datos" }, decls: 12, vars: 7, consts: [[1, "contenido"], ["alt", "img", 1, "img", 3, "src"], [1, "contenido-texto"], [1, "title"], [1, "subtitle"], [1, "btn-edit"], [3, "data", "type", "grupo"], [1, "contenido-btn"], ["mat-button", "", 3, "click"]], template: function TarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "boton-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarjetaComponent_Template_button_click_10_listener() { return ctx.abirEnlace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GO!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datos.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.datos.kanji, " /", ctx.datos.subtitle, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.datos)("type", "Edit")("grupo", false);
    } }, directives: [_boton_option_boton_option_component__WEBPACK_IMPORTED_MODULE_1__["BotonOptionComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".contenido[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 0.5rem;\n  background: #242526;\n}\n.contenido[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n}\n.contenido[_ngcontent-%COMP%]   .contenido-texto[_ngcontent-%COMP%] {\n  display: grid;\n  padding-right: 1rem;\n}\n.contenido[_ngcontent-%COMP%]   .contenido-texto[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\n.contenido[_ngcontent-%COMP%]   .contenido-texto[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #b0b3b8;\n  font-size: 14px;\n}\n.contenido-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0.5rem;\n  text-align: end;\n  color: snow;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhcmpldGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR047QUFESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBR047QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBRUYiLCJmaWxlIjoidGFyamV0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gIGdyaWQtZ2FwOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICMyNDI1MjY7XG4gIC5pbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbiAgLmNvbnRlbmlkby10ZXh0byB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgY29sb3I6ICNiMGIzYjg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG4uY29udGVuaWRvLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiBzbm93O1xufVxuXG4uYnRuLWVkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59Il19 */"] });


/***/ }),

/***/ "uXqD":
/*!*********************************************************!*\
  !*** ./src/app/componnets/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-perfil/edit-perfil.component */ "e3ox");
/* harmony import */ var _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-edit/modal-edit.component */ "GG51");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/listados.service */ "Wo+T");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _ajuste_tarjeta_ajuste_tarjeta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ajuste-tarjeta/ajuste-tarjeta.component */ "xSme");








class SidenavComponent {
    constructor(dialog, listadosService, auth) {
        this.dialog = dialog;
        this.listadosService = listadosService;
        this.auth = auth;
        this.seasons = ['Column', 'Row'];
        this.name = '';
        this.email = '';
        this.img = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    }
    ngOnInit() {
        this.favoriteSeason = localStorage.getItem('ajuste-tarjetas');
        this.ajusteSubnombre = Boolean(localStorage.getItem('ajuste-subnombre'));
        this.ajusteKanji = Boolean(localStorage.getItem('ajuste-kanji'));
        this.auth.user$.subscribe((user) => {
            const { picture, email, nickname } = user;
            this.name = nickname;
            this.img = picture;
            this.email = email;
            this.getUser();
        });
    }
    ajusteTarjeta(event) {
        localStorage.setItem('ajuste-tarjetas', event);
        this.listadosService.ajusteTarjetas.emit();
    }
    editarPerfil() {
        const data = {
            nickname: 'Nuevo User'
        };
        this.dialog.open(_edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_0__["EditPerfilComponent"], { data });
        // const paload = {
        //   nickname: 'Nuevo User',
        //   picture: this.listadosService.picture,
        // };
        // this.listadosService.putUser(paload).subscribe((edit: any) => {
        //   this.getUser();
        // })
    }
    getUser() {
        this.listadosService.getUser().subscribe((userDB) => {
            const { nickname, picture } = userDB.result;
            this.name = nickname ? nickname : this.name;
            this.img = picture ? picture : this.img;
        });
    }
    agregarEnlace() {
        const dialogRef = this.dialog.open(_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_1__["ModalEditComponent"], {
            width: '250px',
            data: { type: 'Crear', info: {}, grupo: false }
        });
        dialogRef.afterClosed().subscribe(() => {
            // setTimeout(() => {
            //   // this.getListado();
            // }, 1000);
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__["ListadosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["sidenav"]], decls: 15, vars: 4, consts: [[1, "contnido-txt-btn"], [1, "contenido-perfil"], [3, "src", "alt"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_9_listener() { return ctx.auth.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cerrar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tarjetas y Enlaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ajuste-tarjeta");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _ajuste_tarjeta_ajuste_tarjeta_component__WEBPACK_IMPORTED_MODULE_7__["AjusteTarjetaComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  color: snow;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 50%;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.contenido-perfil[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  margin-bottom: 8px;\n}\n\n.contenido-perfil[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.contnido-txt-btn[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, auto) 1fr;\n  align-items: center;\n  grid-gap: 0.5rem;\n  margin-bottom: 8px;\n}\n\n.contenido-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQURFO0VBQ0Usa0JBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSUYiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBjb2xvcjogc25vdztcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW1nIHtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY29udGVuaWRvLXBlcmZpbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4uY29udG5pZG8tdHh0LWJ0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmNvbnRlbmlkby10b2dnbGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMC41cmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ "vPA8":
/*!*******************************************************************!*\
  !*** ./src/app/material-components/material-components.module.ts ***!
  \*******************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "GaVp");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_1___default.a);
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]
        ], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]], exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]] }); })();


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
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PageModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', urlUpdateStrategy: 'eager' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wJFS":
/*!*******************************************************************!*\
  !*** ./src/app/componnets/boton-option/boton-option.component.ts ***!
  \*******************************************************************/
/*! exports provided: BotonOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonOptionComponent", function() { return BotonOptionComponent; });
/* harmony import */ var _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-edit/modal-edit.component */ "GG51");
/* harmony import */ var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-confirm/modal-confirm.component */ "0WkM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/listados.service */ "Wo+T");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _boton_boton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../boton/boton.component */ "ZvI7");










function BotonOptionComponent_boton_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "boton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BotonOptionComponent_boton_5_Template_boton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.copiarEnlace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Copy url")("icon", "content_copy");
} }
function BotonOptionComponent_boton_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "boton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BotonOptionComponent_boton_6_Template_boton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.eliminar(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Quitar")("icon", "close");
} }
function BotonOptionComponent_boton_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "boton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BotonOptionComponent_boton_8_Template_boton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.eliminar(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Eliminar")("icon", "delete");
} }
class BotonOptionComponent {
    constructor(dialog, listadosSrv) {
        this.dialog = dialog;
        this.listadosSrv = listadosSrv;
        this.clickCopy = false;
    }
    ngOnInit() {
    }
    edit() {
        this.dialog.open(_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_0__["ModalEditComponent"], {
            width: this.grupo ? '400px' : '400px',
            data: { type: this.type, info: this.data, grupo: this.grupo }
        });
    }
    copiarEnlace() {
        this.clickCopy = true;
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.data.url;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        setTimeout(() => this.clickCopy = false, 1500);
    }
    eliminar(eliminar) {
        this.dialog.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ModalConfirmComponent"], {
            data: { eliminar, info: this.data, grupo: this.grupo }
        });
    }
}
BotonOptionComponent.ɵfac = function BotonOptionComponent_Factory(t) { return new (t || BotonOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__["ListadosService"])); };
BotonOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BotonOptionComponent, selectors: [["boton-option"]], inputs: { type: "type", data: "data", grupo: "grupo" }, decls: 9, vars: 6, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "caja"], ["menu", "matMenu"], [3, "text", "icon", "click", 4, "ngIf"], [3, "text", "icon", "click"]], template: function BotonOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BotonOptionComponent_boton_5_Template, 1, 2, "boton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BotonOptionComponent_boton_6_Template, 1, 2, "boton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "boton", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BotonOptionComponent_Template_boton_click_7_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BotonOptionComponent_boton_8_Template, 1, 2, "boton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.grupo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.grupo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "Editar")("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listadosSrv.totalTarjetas > 1 && ctx.grupo);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_9__["BotonComponent"]], styles: [".caja {\n  background: #3a3b3c !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: snow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvdG9uLW9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUoiLCJmaWxlIjoiYm90b24tb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYWphIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2EzYjNjICFpbXBvcnRhbnQ7XG59XG5idXR0b24ge1xuICAgIGNvbG9yOiBzbm93O1xufSJdfQ== */"] });


/***/ }),

/***/ "xSme":
/*!***********************************************************************!*\
  !*** ./src/app/componnets/ajuste-tarjeta/ajuste-tarjeta.component.ts ***!
  \***********************************************************************/
/*! exports provided: AjusteTarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjusteTarjetaComponent", function() { return AjusteTarjetaComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-edit/modal-edit.component */ "GG51");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/listados.service */ "Wo+T");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");










function AjusteTarjetaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 7);
} }
function AjusteTarjetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AjusteTarjetaComponent_div_1_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grupo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", grupo_r2.name, " ");
} }
function AjusteTarjetaComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AjusteTarjetaComponent_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.crearGrupo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Agregar tarjeta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class AjusteTarjetaComponent {
    constructor(dialog, listadosSrv, auth) {
        this.dialog = dialog;
        this.listadosSrv = listadosSrv;
        this.auth = auth;
        this.grupos = [];
    }
    ngOnInit() {
        this.getGrupos();
        this.userSub = this.auth.user$.subscribe(() => this.getGrupos());
        this.listadoSub = this.listadosSrv.change.subscribe(() => this.getGrupos());
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.listadoSub.unsubscribe();
    }
    crearGrupo() {
        this.listadosSrv.crearGrupo().subscribe(() => this.listadosSrv.change.emit());
    }
    getGrupos() {
        this.listadosSrv.getGrupos().subscribe((grupos) => {
            this.grupos = grupos.result;
            this.listadosSrv.totalTarjetas = this.grupos.length;
        }, (error) => {
            if (!error.error.ordenDB) {
                this.crearGrupo();
            }
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.grupos, event.previousIndex, event.currentIndex);
        const payload = {
            grupoListId: this.grupos.map((grupo) => grupo._id)
        };
        this.listadosSrv.putGruposOrden(payload).subscribe(() => this.listadosSrv.change.emit());
    }
    agregarEnlace() {
        const dialogRef = this.dialog.open(_modal_edit_modal_edit_component__WEBPACK_IMPORTED_MODULE_1__["ModalEditComponent"], {
            width: '250px',
            data: { type: 'Crear', info: {}, grupo: false }
        });
        dialogRef.afterClosed().subscribe(() => {
            // setTimeout(() => {
            //   // this.getListado();
            // }, 1000);
        });
    }
}
AjusteTarjetaComponent.ɵfac = function AjusteTarjetaComponent_Factory(t) { return new (t || AjusteTarjetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_listados_service__WEBPACK_IMPORTED_MODULE_4__["ListadosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
AjusteTarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AjusteTarjetaComponent, selectors: [["ajuste-tarjeta"]], decls: 8, vars: 2, consts: [["cdkDropList", "", 1, "list", 3, "cdkDropListDropped"], ["class", "box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "contenido-btn"], [4, "ngIf"], ["mat-raised-button", "", "color", "basic", 3, "click"], ["cdkDrag", "", 1, "box"], ["class", "custom-placeholder", 4, "cdkDragPlaceholder"], [1, "custom-placeholder"]], template: function AjusteTarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function AjusteTarjetaComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AjusteTarjetaComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AjusteTarjetaComponent_ng_container_3_Template, 5, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AjusteTarjetaComponent_Template_button_click_4_listener() { return ctx.agregarEnlace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Agregar enlace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.grupos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.grupos.length < 4);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPlaceholder"]], styles: [".list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #1c1e21;\n  min-height: 60px;\n  display: block;\n  background: #1c1e21;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n\n.box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #1c1e21;\n  color: snow;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: #1c1e21;\n  font-size: 18px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.custom-placeholder[_ngcontent-%COMP%] {\n  background: #1c1e21;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.contenido-btn[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  grid-gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FqdXN0ZS10YXJqZXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUNGOztBQUlBO0VBQ0Usc0RBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzREFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6ImFqdXN0ZS10YXJqZXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFjMWUyMTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMxYzFlMjE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMxYzFlMjE7XG4gIGNvbG9yOiBzbm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogIzFjMWUyMTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmN1c3RvbS1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICMxYzFlMjE7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jb250ZW5pZG8tYnRuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"] });


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