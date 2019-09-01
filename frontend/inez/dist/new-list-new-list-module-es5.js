(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-list-new-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/new-list/new-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/new-list/new-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-muted\">Einkaufliste </h2>\r\n\r\n\r\n<div class=\"flexbox-forms\" >\r\n  <form class=\" form-align\"  #form>\r\n    <label>Nächsten Artikel bitte eingeben: \r\n  <input #box  (keyup.enter)=\"onEnter(box.value); form.reset()\" />\r\n  </label>\r\n</form>\r\n\r\n<form class=\" form-align\"  [formGroup]=\"safeForm\" (ngSubmit)=\"save(safeForm.value); safeForm.reset()\">\r\n      <label for=\"email\">\r\n      Liste speichern mit Email \r\n    </label>\r\n    <input id=\"email\" type=\"text\" formControlName=\"email\">\r\n    <button type=\"submit\" class=\"btn ml-1 btn-default\">Save</button>\r\n\r\n  </form>\r\n\r\n  <button  class=\"btn ml-1 btn-danger\" (click)='clear()' >Clear list</button>\r\n\r\n</div>\r\n\r\n<div class=\"flexbox-center\"> \r\n\r\n  <table mat-table [dataSource]=\"purchaseListDTO.purchaseItemDTOList\"> \r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef> Produkt </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.produktDTO.name}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"defaultAmount\">\r\n          <th mat-header-cell *matHeaderCellDef> Menge </th>\r\n          <td mat-cell *matCellDef=\"let element\">  {{ element.amount * element.produktDTO.defaultAmount}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"unit\">\r\n            <th mat-header-cell *matHeaderCellDef> unit </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.produktDTO.unit}} </td>\r\n          </ng-container>\r\n      \r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"beispiel\">\r\n          <th mat-header-cell *matHeaderCellDef> Beispiel </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.produktDTO.example}} </td>\r\n        </ng-container>\r\n      \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/new-list/new-list-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/new-list/new-list-routing.module.ts ***!
  \************************************************************/
/*! exports provided: NewListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListRoutingModule", function() { return NewListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-list.component */ "./src/app/layout/new-list/new-list.component.ts");




var routes = [
    {
        path: '',
        component: _new_list_component__WEBPACK_IMPORTED_MODULE_3__["NewListComponent"]
    }
];
var NewListRoutingModule = /** @class */ (function () {
    function NewListRoutingModule() {
    }
    NewListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NewListRoutingModule);
    return NewListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/new-list/new-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/new-list/new-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexbox-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-align {\n  display: inline-block;\n  text-align: center;\n}\n\n.flexbox-forms {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.example-form {\n  padding-top: 2%;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25ldy1saXN0L0M6XFxVc2Vyc1xccGV0ZXJcXGluZXpcXGZyb250ZW5kXFxpbmV6L3NyY1xcYXBwXFxsYXlvdXRcXG5ldy1saXN0XFxuZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L25ldy1saXN0L25ldy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NOOztBRENFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSU47O0FEREk7RUFDRSxXQUFBO0FDSU47O0FERkk7RUFDRSxlQUFBO0FDS047O0FERkk7RUFDRSxjQUFBO0FDS047O0FESEk7RUFDRSxXQUFBO0FDTU4iLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbmV3LWxpc3QvbmV3LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGJveC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvcm0tYWxpZ257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mbGV4Ym94LWZvcm1ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXHJcbiAgfVxyXG4gIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1pY29uIHtcclxuICAgICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9IiwiLmZsZXhib3gtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWFsaWduIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4Ym94LWZvcm1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWljb24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/new-list/new-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/new-list/new-list.component.ts ***!
  \*******************************************************/
/*! exports provided: NewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListComponent", function() { return NewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _domain_namespace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/namespace */ "./src/app/domain/namespace.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var NewListComponent = /** @class */ (function () {
    function NewListComponent(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['name', 'defaultAmount', 'unit', 'beispiel'];
        this.purchaseListDTO = new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseListDTO"](null, new Array());
        this.safeForm = this.formBuilder.group({
            email: '',
        });
    }
    NewListComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('currentList')) {
            this.purchaseListDTO
                = JSON.parse(window.localStorage.getItem('currentList'));
            console.log(this.purchaseListDTO);
        }
        else {
            this.purchaseListDTO
                = new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseListDTO"](null, new Array());
            window.localStorage.setItem('currentList', JSON.stringify(this.purchaseListDTO));
        }
    };
    NewListComponent.prototype.onEnter = function (value) {
        var _this = this;
        if (value || value !== "") {
            var amount_1 = parseInt(value.replace(/\D+/g, ''), 10);
            if (!amount_1) {
                amount_1 = 1;
            }
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/word/' + value).subscribe(function (name) {
                if (_this.purchaseListDTO.purchaseItemDTOList.filter(function (data) { return data.produktDTO.id === name.id; }).length !== 0) {
                    _this.purchaseListDTO.purchaseItemDTOList.map(function (data) {
                        if (data.produktDTO.id === name.id) {
                            data.amount = amount_1 + data.amount;
                        }
                    });
                }
                else {
                    _this.purchaseListDTO
                        .purchaseItemDTOList.push(new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseItemDTOList"](name, amount_1));
                }
                window.localStorage.setItem('currentList', JSON.stringify(_this.purchaseListDTO));
                _this.table.renderRows();
            });
        }
    };
    NewListComponent.prototype.clear = function () {
        window.localStorage.clear();
        this.purchaseListDTO
            = new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseListDTO"](null, new Array());
        window.localStorage.setItem('currentList', JSON.stringify(this.purchaseListDTO));
        this.table.renderRows();
    };
    NewListComponent.prototype.save = function (formData) {
        this.purchaseListDTO
            .email = formData.email;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/zettel/list', this.purchaseListDTO).subscribe(function (data) { return console.log(data); });
    };
    NewListComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"])
    ], NewListComponent.prototype, "table", void 0);
    NewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-list',
            template: __webpack_require__(/*! raw-loader!./new-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/new-list/new-list.component.html"),
            styles: [__webpack_require__(/*! ./new-list.component.scss */ "./src/app/layout/new-list/new-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], NewListComponent);
    return NewListComponent;
}());



/***/ }),

/***/ "./src/app/layout/new-list/new-list.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/new-list/new-list.module.ts ***!
  \****************************************************/
/*! exports provided: NewListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListModule", function() { return NewListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-list.component */ "./src/app/layout/new-list/new-list.component.ts");
/* harmony import */ var _new_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-list-routing.module */ "./src/app/layout/new-list/new-list-routing.module.ts");







var NewListModule = /** @class */ (function () {
    function NewListModule() {
    }
    NewListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _new_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewListRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]],
            declarations: [_new_list_component__WEBPACK_IMPORTED_MODULE_5__["NewListComponent"]]
        })
    ], NewListModule);
    return NewListModule;
}());



/***/ })

}]);
//# sourceMappingURL=new-list-new-list-module-es5.js.map