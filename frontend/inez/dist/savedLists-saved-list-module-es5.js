(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["savedLists-saved-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/savedLists/saved-list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/savedLists/saved-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-muted\">Einkaufliste </h2>\r\n\r\n\r\n<div class=\"flexbox-forms\" >\r\n\r\n<form class=\" form-align\"  [formGroup]=\"checkoutForm\" (ngSubmit)=\"load(checkoutForm.value); checkoutForm.reset()\">\r\n      <label for=\"email\">\r\nLade alle bisherigen Einkaufslisten mit deiner Email   </label>\r\n    <input id=\"email\" type=\"text\" formControlName=\"email\">\r\n    <button type=\"submit\"  class=\"btn ml-1 btn-default\">Load</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n<div class=\"flexbox-forms\" >\r\n  <button *ngFor='let list of listsEmail; index as i' (click)=\"loadSpecificList(list)\"  class=\"btn ml-1 btn-default\">{{i +1}}</button>\r\n</div>\r\n\r\n<div class=\"flexbox-center\"> \r\n\r\n  <table  mat-table [dataSource]=\"purchaseListDTO.purchaseItemDTOList\"> \r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef> Produkt </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.produktDTO.name}} </td>\r\n        </ng-container>\r\n      \r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"defaultAmount\">\r\n          <th mat-header-cell *matHeaderCellDef> Menge </th>\r\n          <td mat-cell *matCellDef=\"let element\">  {{element.amount * element.produktDTO.defaultAmount}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"unit\">\r\n            <th mat-header-cell *matHeaderCellDef> unit </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.produktDTO.unit}} </td>\r\n          </ng-container>\r\n      \r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"beispiel\">\r\n          <th mat-header-cell *matHeaderCellDef> Beispiel </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.produktDTO.example}} </td>\r\n        </ng-container>\r\n      \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/savedLists/saved-list-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/savedLists/saved-list-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SavedListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedListRoutingModule", function() { return SavedListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _saved_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved-list.component */ "./src/app/layout/savedLists/saved-list.component.ts");




var routes = [
    {
        path: '',
        component: _saved_list_component__WEBPACK_IMPORTED_MODULE_3__["SavedListComponent"]
    }
];
var SavedListRoutingModule = /** @class */ (function () {
    function SavedListRoutingModule() {
    }
    SavedListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SavedListRoutingModule);
    return SavedListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/savedLists/saved-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/savedLists/saved-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexbox-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-align {\n  display: inline-block;\n  text-align: center;\n}\n\n.flexbox-forms {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.example-form {\n  padding-top: 2%;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NhdmVkTGlzdHMvQzpcXFVzZXJzXFxwZXRlclxcaW5lelxcZnJvbnRlbmRcXGluZXovc3JjXFxhcHBcXGxheW91dFxcc2F2ZWRMaXN0c1xcc2F2ZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NhdmVkTGlzdHMvc2F2ZWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0lOOztBRERJO0VBQ0UsV0FBQTtBQ0lOOztBREZJO0VBQ0UsZUFBQTtBQ0tOOztBREZJO0VBQ0UsY0FBQTtBQ0tOOztBREhJO0VBQ0UsV0FBQTtBQ01OIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NhdmVkTGlzdHMvc2F2ZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4Ym94LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZm9ybS1hbGlnbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZsZXhib3gtZm9ybXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcclxuICB9XHJcbiAgLmV4YW1wbGUtZm9ybSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5leGFtcGxlLWljb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH0iLCIuZmxleGJveC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tYWxpZ24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsZXhib3gtZm9ybXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/savedLists/saved-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/savedLists/saved-list.component.ts ***!
  \***********************************************************/
/*! exports provided: SavedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedListComponent", function() { return SavedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _domain_namespace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/namespace */ "./src/app/domain/namespace.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SavedListComponent = /** @class */ (function () {
    function SavedListComponent(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['name', 'defaultAmount', 'unit', 'beispiel'];
        this.purchaseListDTO = new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseListDTO"](null, new Array());
        this.checkoutForm = this.formBuilder.group({
            email: '',
        });
    }
    SavedListComponent.prototype.ngOnInit = function () {
        this.purchaseListDTO = new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseListDTO"]('', new Array());
        this.getEinkaufslist();
    };
    SavedListComponent.prototype.getEinkaufslist = function () {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/zettel/item/malte.petersen@frs.de").subscribe(function (data) { return console.log(data); });
    };
    SavedListComponent.prototype.onEnter = function (value) {
        var _this = this;
        var amount = parseInt(value.replace(/\D+/g, ''), 10);
        if (!amount) {
            amount = 1;
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/word/' + value).subscribe(function (name) {
            console.log(amount);
            if (_this.purchaseListDTO.purchaseItemDTOList.filter(function (data) { return data.produktDTO.id === name.id; }).length !== 0) {
                _this.purchaseListDTO.purchaseItemDTOList.map(function (data) {
                    if (data.produktDTO.id === name.id) {
                        data.amount = amount + data.amount;
                    }
                });
            }
            else {
                _this.purchaseListDTO.purchaseItemDTOList.push(new _domain_namespace__WEBPACK_IMPORTED_MODULE_4__["PurchaseItemDTOList"](name, amount));
            }
            _this.table.renderRows();
        });
    };
    SavedListComponent.prototype.load = function (formData) {
        var _this = this;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/zettel/items/' + formData.email).subscribe(function (data) {
            console.log(data);
            _this.listsEmail = data;
            _this.purchaseListDTO = _this.listsEmail[0];
            _this.table.renderRows();
        });
    };
    SavedListComponent.prototype.loadSpecificList = function (purchaseListDTO) {
        this.purchaseListDTO = purchaseListDTO;
        this.table.renderRows();
    };
    SavedListComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTable"])
    ], SavedListComponent.prototype, "table", void 0);
    SavedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved-list',
            template: __webpack_require__(/*! raw-loader!./saved-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/savedLists/saved-list.component.html"),
            styles: [__webpack_require__(/*! ./saved-list.component.scss */ "./src/app/layout/savedLists/saved-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], SavedListComponent);
    return SavedListComponent;
}());



/***/ }),

/***/ "./src/app/layout/savedLists/saved-list.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/savedLists/saved-list.module.ts ***!
  \********************************************************/
/*! exports provided: SavedListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedListModule", function() { return SavedListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _saved_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saved-list-routing.module */ "./src/app/layout/savedLists/saved-list-routing.module.ts");
/* harmony import */ var _saved_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saved-list.component */ "./src/app/layout/savedLists/saved-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SavedListModule = /** @class */ (function () {
    function SavedListModule() {
    }
    SavedListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _saved_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["SavedListRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],],
            declarations: [_saved_list_component__WEBPACK_IMPORTED_MODULE_5__["SavedListComponent"]]
        })
    ], SavedListModule);
    return SavedListModule;
}());



/***/ })

}]);
//# sourceMappingURL=savedLists-saved-list-module-es5.js.map