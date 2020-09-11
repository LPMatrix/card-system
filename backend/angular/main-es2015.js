(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-agent/add-agent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-agent/add-agent.component.ts ***!
  \********************************************************/
/*! exports provided: AddAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAgentComponent", function() { return AddAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _mimetype_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mimetype-validator */ "./src/app/admin/add-agent/mimetype-validator.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AddAgentComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r43.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AddAgentComponent {
    constructor(adminService, adminAuthService) {
        this.adminService = adminService;
        this.adminAuthService = adminAuthService;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.adminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], [_mimetype_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]])
        });
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.adminForm.patchValue({ image: file });
        this.adminForm.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSubmit() {
        if (!this.adminForm.valid) {
            return;
        }
        this.adminService.createAgent(this.adminForm.value);
    }
    logout() {
        this.adminAuthService.logout();
    }
}
AddAgentComponent.ɵfac = function AddAgentComponent_Factory(t) { return new (t || AddAgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"])); };
AddAgentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAgentComponent, selectors: [["app-add-agent"]], decls: 102, vars: 3, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-xs", "rounded-circle"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-md", "rounded-circle"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/admin/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["src", "../assets/images/faces/face8.jpg", "alt", "profile image", 1, "img-xs", "rounded-circle"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/admin/dashboard", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/admin/add-agent", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-th-large-outline"], ["routerLink", "/admin/view-agent", 1, "nav-link"], ["routerLink", "/admin/profile", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-description"], ["enctype", "multipart/form-data", 1, "forms-sample", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputName1"], ["type", "text", "formControlName", "name", "id", "exampleInputName1", "placeholder", "Name", 1, "form-control"], ["for", "exampleInputEmail3"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail3", "placeholder", "Email", 1, "form-control"], ["for", "exampleInputPassword4"], ["type", "password", "formControlName", "password", "id", "exampleInputPassword4", "placeholder", "Password", 1, "form-control"], [1, "input-group", "col-xs-12"], ["color", "basic", "type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [1, "image-preview"], ["alt", "adminForm.value.title", 3, "src"]], template: function AddAgentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAgentComponent_Template_a_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "View Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Add Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Add Agent Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "form", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddAgentComponent_Template_form_ngSubmit_73_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAgentComponent_Template_button_click_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](91); return _r42.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Pick an image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddAgentComponent_Template_input_change_90_listener($event) { return ctx.onImagePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AddAgentComponent_div_92_Template, 2, 1, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "footer", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.adminForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.adminForm.get("image").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.adminForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["input[type =\"file\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n  .image-preview[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    margin: 1rem 0;\r\n  }\r\n  .image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLWFnZW50L2FkZC1hZ2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRkLWFnZW50L2FkZC1hZ2VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZSA9XCJmaWxlXCJdIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmltYWdlLXByZXZpZXcge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgfVxyXG4gIC5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAgentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-agent',
                templateUrl: './add-agent.component.html',
                styleUrls: ['./add-agent.component.css']
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }, { type: src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/add-agent/mimetype-validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/add-agent/mimetype-validator.ts ***!
  \*******************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
        fileReader.addEventListener("loadend", () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = '';
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                    isValid = true;
                    break;
                default:
                    isValid = false;
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");








function AdminProfileComponent_mat_error_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r99.message);
} }
class AdminProfileComponent {
    constructor(adminAuthService) {
        this.adminAuthService = adminAuthService;
        this.loading = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.adminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    onSubmit() {
        if (!this.adminForm.valid) {
            return;
        }
        if (this.adminForm.value.confirmpassword !== this.adminForm.value.newpassword) {
            this.message = "No match";
            return;
        }
        this.loading = true;
        this.message = null;
        const password = this.adminForm.value.password;
        const newpassword = this.adminForm.value.newpassword;
        const confirmpassword = this.adminForm.value.confirmpassword;
        this.adminAuthService.changeProfile(password, newpassword, confirmpassword)
            .subscribe(responseData => {
            this.adminForm.setValue({
                'password': null,
                'newpassword': null,
                'confirmpassword': null
            });
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    logout() {
        this.adminAuthService.logout();
    }
}
AdminProfileComponent.ɵfac = function AdminProfileComponent_Factory(t) { return new (t || AdminProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"])); };
AdminProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProfileComponent, selectors: [["app-admin-profile"]], decls: 94, vars: 5, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-xs", "rounded-circle"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-md", "rounded-circle"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "admin/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["src", "../assets/images/faces/face8.jpg", "alt", "profile image", 1, "img-xs", "rounded-circle"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/admin/dashboard", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/admin/add-agent", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-th-large-outline"], ["routerLink", "/admin/view-agent", 1, "nav-link"], ["routerLink", "admin/profile", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "forms-sample", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputPassword4"], ["formControlName", "password", "type", "password", "id", "exampleInputPassword4", "placeholder", "Password", 1, "form-control"], ["formControlName", "newpassword", "type", "password", "id", "exampleInputNewPassword4", "placeholder", "New Password", 1, "form-control"], [4, "ngIf"], ["formControlName", "confirmpassword", "type", "password", "id", "exampleInputConfirmPassword4", "placeholder", "Confirm Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function AdminProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProfileComponent_Template_a_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "View Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminProfileComponent_Template_form_ngSubmit_71_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AdminProfileComponent_mat_error_80_Template, 2, 1, "mat-error", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "footer", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.adminForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.adminForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["@-webkit-keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  @keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  .spinner[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    border-top-color: #000000;\r\n    -webkit-animation: spinner .8s linear infinite;\r\n            animation: spinner .8s linear infinite;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxJQUFJLHlCQUF5QixDQUFDO0VBQ2hDOztFQUZGO0lBQ0ksSUFBSSx5QkFBeUIsQ0FBQztFQUNoQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1wcm9maWxlL2FkbWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbiAgfVxyXG4gICBcclxuICAuc3Bpbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXIgLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-profile',
                templateUrl: './admin-profile.component.html',
                styleUrls: ['./admin-profile.component.css']
            }]
    }], function () { return [{ type: src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AdminComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.title = "Login";
        this.credentialsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    register() {
        this.title = "Please wait....";
        this.router.navigateByUrl("admin/dashboard");
        console.log("clicked");
    }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 33, vars: 5, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "Submit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Username", "formControlName", "name", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled", "click"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], [1, "form-check-label"], ["type", "checkbox", "checked", "", 1, "form-check-input"], [1, "validator-error"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("Submit", function AdminComponent_Template_form_Submit_6_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_26_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Keep me signed in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.name.valid && ctx.credentialsForm.controls.name.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.agents = [];
        this.agentStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.users = [];
        this.userStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    getCounts() {
        return this.http.get(BACKEND_URL + 'admin/counts');
    }
    getAgentStatusListener() {
        return this.agentStatusListener.asObservable();
    }
    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    }
    createAgent(agent) {
        const postCredentials = new FormData();
        postCredentials.append('name', agent.name);
        postCredentials.append('email', agent.email);
        postCredentials.append('password', agent.password);
        postCredentials.append('image', agent.image, agent.name);
        this.http.post(BACKEND_URL + 'admin/agent', postCredentials)
            .subscribe(responseData => {
            this.agents.push(responseData.agent);
            this.agentStatusListener.next(this.agents);
            this.router.navigateByUrl('/admin/dashboard');
        });
    }
    geAgentUsers() {
        this.http.get(BACKEND_URL + 'admin/agents-users')
            .subscribe(responseData => {
            this.users = responseData.users;
            this.agents = responseData.agents;
            this.userStatusListener.next(this.users);
            this.agentStatusListener.next(this.agents);
        });
    }
    approve(userId) {
        const postData = {
            approval: true
        };
        this.http.post(BACKEND_URL + 'admin/agent/user/approve/' + userId, postData)
            .subscribe(responseData => {
            const getUsers = [...this.users];
            const userFiltered = getUsers.findIndex(p => p._id === userId);
            getUsers[userFiltered] = responseData.user;
            this.users = [...getUsers];
            this.userStatusListener.next(this.users);
        });
    }
    agentAccountStatus(agentId) {
        const postData = {
            agentId: agentId
        };
        this.http.post(BACKEND_URL + 'admin/agent/account', postData)
            .subscribe(responseData => {
            const agentFilter = this.agents.findIndex(p => p._id === agentId);
            this.agents[agentFilter] = responseData.agent;
            this.agentStatusListener.next(this.agents);
        });
    }
    deleteAgent(agentId) {
        this.http.delete(BACKEND_URL + 'admin/agent/remove/' + agentId)
            .subscribe(responseData => {
            const getAgents = [...this.agents];
            const getFilteredAgent = getAgents.filter(p => p._id !== agentId);
            this.agents = [...getFilteredAgent];
            this.agentStatusListener.next(this.agents);
        });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/dashboard-page/dashboard-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/dashboard-page/dashboard-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../card/card.component */ "./src/app/card/card.component.ts");















function DashboardPageComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-card", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", user_r27 == null ? null : user_r27.uniqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r27);
} }
function DashboardPageComponent_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", row_r28.firstname, " ", row_r28.middlename, " ", row_r28.lastname, " ");
} }
function DashboardPageComponent_mat_header_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unique ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r29.uniqueId), " ");
} }
function DashboardPageComponent_mat_header_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.email, " ");
} }
function DashboardPageComponent_mat_header_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Updated On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r31.updatedAt), " ");
} }
function DashboardPageComponent_mat_header_cell_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r32.gender, " ");
} }
function DashboardPageComponent_mat_header_cell_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " D.O.B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r33.dob, " ");
} }
function DashboardPageComponent_mat_header_cell_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r34.zone, " ");
} }
function DashboardPageComponent_mat_header_cell_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r35.unit, " ");
} }
function DashboardPageComponent_mat_header_cell_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r36.phone_no, " ");
} }
function DashboardPageComponent_mat_header_cell_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.state, " ");
} }
function DashboardPageComponent_mat_header_cell_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardPageComponent_mat_cell_137_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPageComponent_mat_cell_137_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const row_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onApprove(row_r38._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + row_r38.uniqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn badge ", row_r38.approve ? "badge-success" : "badge-danger", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r38.approve ? "Approved" : "Approve");
} }
function DashboardPageComponent_mat_header_row_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function DashboardPageComponent_mat_row_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class DashboardPageComponent {
    constructor(adminService, adminAuthService) {
        this.adminService = adminService;
        this.adminAuthService = adminAuthService;
        this.displayedColumns = [
            'Name', 'Unique Id', 'Email', 'Updated On', 'Gender', 'D.O.B', 'Zone',
            'Unit', 'Phone No', 'State', 'Action'
        ];
        this.users = [];
        this.agents = [];
        this.counts = { userCount: 0, agentCount: 0 };
        this.arrayCount = 0;
    }
    ngOnInit() {
        this.adminService.geAgentUsers();
        this.usersSubscription = this.adminService.getUserStatusListener()
            .subscribe(responseData => {
            this.users = responseData;
            this.counts.userCount = this.users.length;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users);
        });
        this.agentsSubscription = this.adminService.getAgentStatusListener()
            .subscribe(responseData => {
            this.agents = responseData;
            this.counts.agentCount = this.agents.length;
        });
    }
    onApprove(userId) {
        this.adminService.approve(userId);
        // this.getCount();
    }
    logout() {
        this.adminAuthService.logout();
    }
    ngOnDestroy() {
        this.usersSubscription.unsubscribe();
        this.agentsSubscription.unsubscribe();
    }
    onAccountStatus(agentId) {
        this.adminService.agentAccountStatus(agentId);
    }
    onDelete(agentId) {
        this.adminService.deleteAgent(agentId);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}
DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) { return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"])); };
DashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardPageComponent, selectors: [["app-dashboard-page"]], viewQuery: function DashboardPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 148, vars: 8, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-xs", "rounded-circle"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-md", "rounded-circle"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/admin/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["src", "../assets/images/faces/face8.jpg", "alt", "profile image", 1, "img-xs", "rounded-circle"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "#", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/admin/add-agent", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-th-large-outline"], ["routerLink", "/admin/view-agent", 1, "nav-link"], ["routerLink", "/admin/profile", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "col-md-6", "grid-margin", "stretch-card", "average-price-card"], [1, "card", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between", "pb-2", "align-items-center"], [1, "font-weight-semibold", "mb-0"], [1, "icon-holder"], [1, "mdi", "mdi-briefcase-outline"], [1, "d-flex", "justify-content-between"], ["class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-md-12", "grid-margin"], [1, "card"], [1, "card-title", "mb-0"], [1, "example-header"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "example-container", "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Unique Id"], ["matColumnDef", "Email"], ["matColumnDef", "Updated On"], ["matColumnDef", "Gender"], ["matColumnDef", "D.O.B"], ["matColumnDef", "Zone"], ["matColumnDef", "Unit"], ["matColumnDef", "Phone No"], ["matColumnDef", "State"], ["matColumnDef", "Action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "data"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["mat-sort-header", ""], ["data-toggle", "modal", 1, "btn", "btn-secondary"], [3, "click"]], template: function DashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPageComponent_Template_a_click_23_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Add Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "View Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, DashboardPageComponent_div_91_Template, 14, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Registered Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DashboardPageComponent_Template_input_keyup_102_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-table", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](105, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, DashboardPageComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, DashboardPageComponent_mat_cell_107_Template, 2, 3, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](108, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, DashboardPageComponent_mat_header_cell_109_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, DashboardPageComponent_mat_cell_110_Template, 3, 3, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](111, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, DashboardPageComponent_mat_header_cell_112_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, DashboardPageComponent_mat_cell_113_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](114, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, DashboardPageComponent_mat_header_cell_115_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, DashboardPageComponent_mat_cell_116_Template, 3, 3, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](117, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, DashboardPageComponent_mat_header_cell_118_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, DashboardPageComponent_mat_cell_119_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](120, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, DashboardPageComponent_mat_header_cell_121_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, DashboardPageComponent_mat_cell_122_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](123, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, DashboardPageComponent_mat_header_cell_124_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, DashboardPageComponent_mat_cell_125_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](126, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, DashboardPageComponent_mat_header_cell_127_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, DashboardPageComponent_mat_cell_128_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](129, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, DashboardPageComponent_mat_header_cell_130_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, DashboardPageComponent_mat_cell_131_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](132, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, DashboardPageComponent_mat_header_cell_133_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, DashboardPageComponent_mat_cell_134_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](135, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, DashboardPageComponent_mat_header_cell_136_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, DashboardPageComponent_mat_cell_137_Template, 6, 5, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, DashboardPageComponent_mat_header_row_138_Template, 1, 0, "mat-header-row", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, DashboardPageComponent_mat_row_139_Template, 1, 0, "mat-row", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "mat-paginator", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "footer", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts == null ? null : ctx.counts.userCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts == null ? null : ctx.counts.agentCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  overflow-x: scroll;\r\n}\r\n\r\n.example-header[_ngcontent-%COMP%] {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] { \r\n  overflow-x: scroll;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\r\n  word-wrap: initial;\r\n  display: table-cell;\r\n  padding: 0px 10px;\r\n  line-break: unset;\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkLXBhZ2UvZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LXRhYmxlIHsgXHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWF0LWNlbGwsXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHdvcmQtd3JhcDogaW5pdGlhbDtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWF0LXJvdyxcclxuLm1hdC1oZWFkZXItcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-page',
                templateUrl: './dashboard-page.component.html',
                styleUrls: ['./dashboard-page.component.css']
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }, { type: src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/view/view.component.ts ***!
  \**********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../card/card.component */ "./src/app/card/card.component.ts");















function ViewComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-card", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", user_r122 == null ? null : user_r122.uniqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r122);
} }
function ViewComponent_mat_header_cell_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewComponent_mat_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r123.name, " ");
} }
function ViewComponent_mat_header_cell_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewComponent_mat_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r124.email, " ");
} }
function ViewComponent_mat_header_cell_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Added On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewComponent_mat_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r125.updatedAt), " ");
} }
function ViewComponent_mat_header_cell_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewComponent_mat_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r126.is_active ? "Active" : "Disabled", " ");
} }
function ViewComponent_mat_header_cell_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewComponent_mat_cell_119_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_mat_cell_119_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const row_r127 = ctx.$implicit; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.onAccountStatus(row_r127 == null ? null : row_r127._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_mat_cell_119_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const row_r127 = ctx.$implicit; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.onDelete(row_r127 == null ? null : row_r127._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn badge ", (row_r127 == null ? null : row_r127.is_active) ? "badge-danger" : "badge-success", " mr-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (row_r127 == null ? null : row_r127.is_active) ? "Deactivate" : "Activate", " ");
} }
function ViewComponent_mat_header_row_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ViewComponent_mat_row_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class ViewComponent {
    constructor(adminService, adminAuthService) {
        this.adminService = adminService;
        this.adminAuthService = adminAuthService;
        this.displayedColumns = [
            'Name', 'Email', 'Added On', 'Status', 'Action'
        ];
        this.users = [];
        this.agents = [];
        this.counts = { userCount: 0, agentCount: 0 };
        this.arrayCount = 0;
    }
    ngOnInit() {
        this.adminService.geAgentUsers();
        this.usersSubscription = this.adminService.getUserStatusListener()
            .subscribe(responseData => {
            this.users = responseData;
            this.counts.userCount = this.users.length;
        });
        this.agentsSubscription = this.adminService.getAgentStatusListener()
            .subscribe(responseData => {
            this.agents = responseData;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.agents);
            this.counts.agentCount = this.agents.length;
        });
    }
    logout() {
        this.adminAuthService.logout();
    }
    ngOnDestroy() {
        this.usersSubscription.unsubscribe();
        this.agentsSubscription.unsubscribe();
    }
    onAccountStatus(agentId) {
        this.adminService.agentAccountStatus(agentId);
    }
    onDelete(agentId) {
        this.adminService.deleteAgent(agentId);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], viewQuery: function ViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 130, vars: 8, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-xs", "rounded-circle"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-md", "rounded-circle"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/admin/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["src", "../assets/images/faces/face8.jpg", "alt", "profile image", 1, "img-xs", "rounded-circle"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/admin/dashboard", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/admin/add-agent", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-th-large-outline"], ["routerLink", "/admin/view-agent", 1, "nav-link", "active"], ["routerLink", "/admin/profile", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "col-md-6", "grid-margin", "stretch-card", "average-price-card"], [1, "card", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between", "pb-2", "align-items-center"], [1, "font-weight-semibold", "mb-0"], [1, "icon-holder"], [1, "mdi", "mdi-briefcase-outline"], [1, "d-flex", "justify-content-between"], ["class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-md-12", "grid-margin"], [1, "card"], [1, "card-title", "mb-0"], [1, "example-header"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "example-container", "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Added On"], ["matColumnDef", "Status"], ["matColumnDef", "Action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "data"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["mat-sort-header", ""], [3, "click"], [1, "btn", "badge", "badge-danger", 3, "click"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewComponent_Template_a_click_23_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Alabidun Mubarak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Add Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "View Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ViewComponent_div_91_Template, 14, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Registered Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ViewComponent_Template_input_keyup_102_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-table", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](105, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ViewComponent_mat_header_cell_106_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, ViewComponent_mat_cell_107_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](108, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ViewComponent_mat_header_cell_109_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ViewComponent_mat_cell_110_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](111, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ViewComponent_mat_header_cell_112_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ViewComponent_mat_cell_113_Template, 3, 3, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](114, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ViewComponent_mat_header_cell_115_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ViewComponent_mat_cell_116_Template, 2, 1, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](117, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, ViewComponent_mat_header_cell_118_Template, 2, 0, "mat-header-cell", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, ViewComponent_mat_cell_119_Template, 5, 4, "mat-cell", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ViewComponent_mat_header_row_120_Template, 1, 0, "mat-header-row", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ViewComponent_mat_row_121_Template, 1, 0, "mat-row", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "mat-paginator", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "footer", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts == null ? null : ctx.counts.userCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts == null ? null : ctx.counts.agentCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow-x: scroll;\r\n}\r\n\r\n\r\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\r\n  word-wrap: initial;\r\n  display: table-cell;\r\n  padding: 0px 10px;\r\n  line-break: unset;\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7OztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWF0LWNlbGwsXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHdvcmQtd3JhcDogaW5pdGlhbDtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWF0LXJvdyxcclxuLm1hdC1oZWFkZXItcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.css']
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }, { type: src_app_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardComponent", function() { return AgentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agent.service */ "./src/app/agent/agent.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../card/card.component */ "./src/app/card/card.component.ts");













function AgentDashboardComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-card", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", user_r70 == null ? null : user_r70.uniqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", user_r70);
} }
function AgentDashboardComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", row_r71.firstname, " ", row_r71.middlename, " ", row_r71.lastname, " ");
} }
function AgentDashboardComponent_mat_header_cell_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unique ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r72.uniqueId), " ");
} }
function AgentDashboardComponent_mat_header_cell_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r73.email, " ");
} }
function AgentDashboardComponent_mat_header_cell_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Updated On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r74.updatedAt), " ");
} }
function AgentDashboardComponent_mat_header_cell_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r75.gender, " ");
} }
function AgentDashboardComponent_mat_header_cell_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " D.O.B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r76.dob, " ");
} }
function AgentDashboardComponent_mat_header_cell_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r77.zone, " ");
} }
function AgentDashboardComponent_mat_header_cell_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r78.unit, " ");
} }
function AgentDashboardComponent_mat_header_cell_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r79.phone_no, " ");
} }
function AgentDashboardComponent_mat_header_cell_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r80.state, " ");
} }
function AgentDashboardComponent_mat_header_cell_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentDashboardComponent_mat_cell_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + row_r81.uniqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn badge ", row_r81.approve ? "badge-success" : "badge-danger", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r81.approve ? "Approved" : "Approve");
} }
function AgentDashboardComponent_mat_header_row_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function AgentDashboardComponent_mat_row_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class AgentDashboardComponent {
    constructor(agentService, authService) {
        this.agentService = agentService;
        this.authService = authService;
        this.displayedColumns = [
            'Name', 'Unique Id', 'Email', 'Updated On', 'Gender', 'D.O.B', 'Zone',
            'Unit', 'Phone No', 'State', 'Action'
        ];
        this.users = [];
        this.counts = { userCount: 0 };
    }
    ngOnInit() {
        this.agentService.getUsers();
        this.userSubscription = this.agentService.getUserStatusListener()
            .subscribe(responseData => {
            this.users = responseData;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users);
            this.counts.userCount = this.users.length;
        });
        this.authService.getAgentDataStatus()
            .subscribe(responseData => {
            this.userInformation = responseData;
        });
    }
    logout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.userSubscription.unsubscribe();
    }
}
AgentDashboardComponent.ɵfac = function AgentDashboardComponent_Factory(t) { return new (t || AgentDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agent_service__WEBPACK_IMPORTED_MODULE_4__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
AgentDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentDashboardComponent, selectors: [["app-agent-dashboard"]], viewQuery: function AgentDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 128, vars: 12, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile image", 1, "img-xs", "rounded-circle", 3, "src"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["alt", "Profile image", 1, "img-md", "rounded-circle", 3, "src"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/agent/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["alt", "profile image", 1, "img-xs", "rounded-circle", 3, "src"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/agent/dashboard", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/agent/capture", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-th-large-outline"], ["routerLink", "/agent/profile", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "col-md-6", "grid-margin", "stretch-card", "average-price-card"], [1, "card", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between", "pb-2", "align-items-center"], [1, "font-weight-semibold", "mb-0"], [1, "icon-holder"], [1, "mdi", "mdi-briefcase-outline"], [1, "d-flex", "justify-content-between"], ["class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-md-12", "grid-margin"], [1, "card"], [1, "card-title", "mb-0"], [1, "example-container", "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "Name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "Unique Id"], ["matColumnDef", "Email"], ["matColumnDef", "Updated On"], ["matColumnDef", "Gender"], ["matColumnDef", "D.O.B"], ["matColumnDef", "Zone"], ["matColumnDef", "Unit"], ["matColumnDef", "Phone No"], ["matColumnDef", "State"], ["matColumnDef", "Action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "data"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["mat-sort-header", ""], ["data-toggle", "modal", 1, "btn", "btn-secondary"]], template: function AgentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentDashboardComponent_Template_a_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add Bio-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AgentDashboardComponent_div_74_Template, 14, 2, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Registered Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-table", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AgentDashboardComponent_mat_header_cell_86_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AgentDashboardComponent_mat_cell_87_Template, 2, 3, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, AgentDashboardComponent_mat_header_cell_89_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AgentDashboardComponent_mat_cell_90_Template, 3, 3, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](91, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AgentDashboardComponent_mat_header_cell_92_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AgentDashboardComponent_mat_cell_93_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](94, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, AgentDashboardComponent_mat_header_cell_95_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AgentDashboardComponent_mat_cell_96_Template, 3, 3, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](97, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AgentDashboardComponent_mat_header_cell_98_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AgentDashboardComponent_mat_cell_99_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](100, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AgentDashboardComponent_mat_header_cell_101_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, AgentDashboardComponent_mat_cell_102_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](103, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AgentDashboardComponent_mat_header_cell_104_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AgentDashboardComponent_mat_cell_105_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](106, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, AgentDashboardComponent_mat_header_cell_107_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AgentDashboardComponent_mat_cell_108_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](109, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AgentDashboardComponent_mat_header_cell_110_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AgentDashboardComponent_mat_cell_111_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](112, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, AgentDashboardComponent_mat_header_cell_113_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, AgentDashboardComponent_mat_cell_114_Template, 2, 1, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](115, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, AgentDashboardComponent_mat_header_cell_116_Template, 2, 0, "mat-header-cell", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, AgentDashboardComponent_mat_cell_117_Template, 6, 5, "mat-cell", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, AgentDashboardComponent_mat_header_row_118_Template, 1, 0, "mat-header-row", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AgentDashboardComponent_mat_row_119_Template, 1, 0, "mat-row", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "mat-paginator", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "footer", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInformation == null ? null : ctx.userInformation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInformation == null ? null : ctx.userInformation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counts == null ? null : ctx.counts.userCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  overflow-x: scroll;\r\n}\r\n\r\n.example-header[_ngcontent-%COMP%] {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow-x: scroll;\r\n}\r\n\r\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\r\n  word-wrap: initial;\r\n  display: table-cell;\r\n  padding: 0px 10px;\r\n  line-break: unset;\r\n  width: 100%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQtZGFzaGJvYXJkL2FnZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9hZ2VudC1kYXNoYm9hcmQvYWdlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWF0LWNlbGwsXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHdvcmQtd3JhcDogaW5pdGlhbDtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWF0LXJvdyxcclxuLm1hdC1oZWFkZXItcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-dashboard',
                templateUrl: './agent-dashboard.component.html',
                styleUrls: ['./agent-dashboard.component.css']
            }]
    }], function () { return [{ type: _agent_service__WEBPACK_IMPORTED_MODULE_4__["AgentService"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/agent/agent-profile/agent-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/agent/agent-profile/agent-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: AgentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentProfileComponent", function() { return AgentProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");








function AgentProfileComponent_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r100.message);
} }
class AgentProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.agent = {
            name: '',
            email: '',
            image: '',
        };
        this.loading = false;
    }
    ngOnInit() {
        this.init();
        this.authService.getProfile()
            .subscribe(responseData => {
            this.agent = responseData.agent;
            this.userInformation = responseData.agent;
            this.agentForm.setValue({
                'name': responseData.agent.name,
                'email': responseData.agent.email,
                'password': null,
                'newpassword': null,
                'confirmpassword': null
            });
        });
    }
    init() {
        this.agentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    onSubmit() {
        if (!this.agentForm.valid) {
            return;
        }
        const password = this.agentForm.value.password;
        const confirmpassword = this.agentForm.value.confirmpassword;
        const newpassword = this.agentForm.value.newpassword;
        if (password !== null && newpassword !== null && confirmpassword !== newpassword) {
            this.message = "No match";
            return;
        }
        this.loading = true;
        this.message = null;
        this.authService.changeProfile(this.agentForm.value)
            .subscribe(responseData => {
            this.agent = responseData.agent;
            this.userInformation = responseData.agent;
            this.agentForm.setValue({
                'name': responseData.agent.name,
                'email': responseData.agent.email,
                'password': null,
                'newpassword': null,
                'confirmpassword': null
            });
            this.authService.agentData.next(responseData.agent);
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
    logout() {
        this.authService.logout();
    }
}
AgentProfileComponent.ɵfac = function AgentProfileComponent_Factory(t) { return new (t || AgentProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AgentProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentProfileComponent, selectors: [["app-agent-profile"]], decls: 92, vars: 10, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile image", 1, "img-xs", "rounded-circle", 3, "src"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["alt", "Profile image", 1, "img-md", "rounded-circle", 3, "src"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["alt", "profile image", 1, "img-xs", "rounded-circle", 3, "src"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/agent", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/agent/profile", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "forms-sample", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputName1"], ["formControlName", "name", "type", "text", "id", "exampleInputName1", "placeholder", "Name", 1, "form-control"], ["for", "exampleInputEmail3"], ["formControlName", "email", "type", "email", "id", "exampleInputEmail3", "placeholder", "Email", 1, "form-control"], ["for", "exampleInputPassword4"], ["formControlName", "password", "type", "password", "id", "exampleInputPassword4", "placeholder", "Password", 1, "form-control"], ["formControlName", "newpassword", "type", "password", "id", "exampleInputNewPassword4", "placeholder", "New Password", 1, "form-control"], [4, "ngIf"], ["formControlName", "confirmpassword", "type", "password", "id", "exampleInputConfirmPassword4", "placeholder", "Confirm Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function AgentProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentProfileComponent_Template_a_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgentProfileComponent_Template_form_ngSubmit_61_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AgentProfileComponent_mat_error_78_Template, 2, 1, "mat-error", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "footer", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInformation == null ? null : ctx.userInformation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInformation == null ? null : ctx.userInformation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.agentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["@-webkit-keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  @keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  .spinner[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    border-top-color: #000000;\r\n    -webkit-animation: spinner .8s linear infinite;\r\n            animation: spinner .8s linear infinite;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQtcHJvZmlsZS9hZ2VudC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxJQUFJLHlCQUF5QixDQUFDO0VBQ2hDOztFQUZGO0lBQ0ksSUFBSSx5QkFBeUIsQ0FBQztFQUNoQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9hZ2VudC1wcm9maWxlL2FnZW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbiAgfVxyXG4gICBcclxuICAuc3Bpbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXIgLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-profile',
                templateUrl: './agent-profile.component.html',
                styleUrls: ['./agent-profile.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agent/agent.component.ts":
/*!******************************************!*\
  !*** ./src/app/agent/agent.component.ts ***!
  \******************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AgentComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AgentComponent {
    constructor(router) {
        this.router = router;
        this.title = "Login";
    }
    register() {
        this.title = "Please wait....";
        console.log(this.credentialsForm);
    }
    ngOnInit() {
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
}
AgentComponent.ɵfac = function AgentComponent_Factory(t) { return new (t || AgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentComponent, selectors: [["app-agent"]], decls: 32, vars: 5, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "Submit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Username or Email", "formControlName", "email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled", "click"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], ["routerLink", "/forgot-password"], [1, "validator-error"]], template: function AgentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("Submit", function AgentComponent_Template_form_Submit_6_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AgentComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AgentComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentComponent_Template_button_click_26_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.name.valid && ctx.credentialsForm.controls.name.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent',
                templateUrl: './agent.component.html',
                styleUrls: ['./agent.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agent/agent.service.ts":
/*!****************************************!*\
  !*** ./src/app/agent/agent.service.ts ***!
  \****************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
class AgentService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
        this.userStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    }
    createUser(user) {
        // const postCredentials = new FormData();
        // postCredentials.append('firstname', user.firstname);
        // postCredentials.append('middlename', user.middlename);
        // postCredentials.append('lastname', user.lastname);
        // postCredentials.append('email', user.email);
        // postCredentials.append('gender', user.gender);
        // postCredentials.append('dob', user.dob);
        // postCredentials.append('zone', user.zone);
        // postCredentials.append('unit', user.unit);
        // postCredentials.append('phone_no', user.phone_no);
        // postCredentials.append('state', user.state);
        // postCredentials.append('vehicle_no', user.vehicle_no);
        // postCredentials.append('password', user.password);
        // postCredentials.append('image', user.image);
        // postCredentials.append('fingerprint_thumb', user.fingerprint_thumb);
        // postCredentials.append('fingerprint_index', user.firstname);
        // console.log(postCredentials.get("image"));
        // console.log(postData);
        this.http.post(BACKEND_URL + 'agent/user', user)
            .subscribe(responseData => {
            this.users.push(responseData.user);
            this.userStatusListener.next(this.users);
            this.router.navigateByUrl('/agent/dashboard');
        });
    }
    getUsers() {
        this.http.get(BACKEND_URL + 'agent/user')
            .subscribe(responseData => {
            this.users = responseData.users;
            this.userStatusListener.next(this.users);
        });
    }
}
AgentService.ɵfac = function AgentService_Factory(t) { return new (t || AgentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AgentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AgentService, factory: AgentService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agent/capture/capture.component.ts":
/*!****************************************************!*\
  !*** ./src/app/agent/capture/capture.component.ts ***!
  \****************************************************/
/*! exports provided: CaptureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureComponent", function() { return CaptureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var _state_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-file */ "./src/app/agent/capture/state-file.ts");
/* harmony import */ var _agent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../agent.service */ "./src/app/agent/agent.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function CaptureComponent_webcam_78_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "webcam", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function CaptureComponent_webcam_78_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.handleImage($event); })("cameraSwitched", function CaptureComponent_webcam_78_Template_webcam_cameraSwitched_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.cameraWasSwitched($event); })("initError", function CaptureComponent_webcam_78_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.handleInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 500)("width", 500)("trigger", ctx_r83.triggerObservable)("allowCameraSwitch", ctx_r83.allowCameraSwitch)("switchCamera", ctx_r83.nextWebcamObservable)("videoOptions", ctx_r83.videoOptions);
} }
function CaptureComponent_option_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r91);
} }
function CaptureComponent_button_172_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureComponent_button_172_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CaptureComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r86.webcamImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const stateRecord = _state_file__WEBPACK_IMPORTED_MODULE_4__["externalParameters"].states;
class CaptureComponent {
    constructor(agentService, authService) {
        this.agentService = agentService;
        this.authService = authService;
        this.states = stateRecord;
        this.title = "Take Picture";
        // toggle webcam on/off
        this.showWebcam = false;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    triggerSnapshot() {
        this.trigger.next();
        this.toggleWebcam();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
        if (this.showWebcam == true) {
            this.title = "Switch Camera Off";
        }
        else {
            this.title = "Take Picture";
        }
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
        this.showWebcam = !this.showWebcam;
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
        this.init();
        this.authService.getAgentDataStatus()
            .subscribe(responseData => {
            this.userInformation = responseData;
        });
    }
    init() {
        this.agentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            middlename: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            zone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]+[0-9]*$/)]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            vehicle_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            fingerprint_thumb: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            fingerprint_index: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    onSubmit() {
        this.agentForm.value.image = this.webcamImage.imageAsDataUrl;
        if (!this.agentForm.valid && this.agentForm.value.image === null) {
            return;
        }
        this.agentService.createUser(this.agentForm.value);
    }
    logout() {
        this.authService.logout();
    }
}
CaptureComponent.ɵfac = function CaptureComponent_Factory(t) { return new (t || CaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agent_service__WEBPACK_IMPORTED_MODULE_5__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
CaptureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptureComponent, selectors: [["app-capture"]], decls: 198, vars: 12, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile image", 1, "img-xs", "rounded-circle", 3, "src"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["alt", "Profile image", 1, "img-md", "rounded-circle", 3, "src"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/agent/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["alt", "profile image", 1, "img-xs", "rounded-circle", 3, "src"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/agent/dashboard", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/agent/capture", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-th-large-outline"], ["routerLink", "/agent/profile", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-12", "grid-margin"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "form-sample", 3, "formGroup", "ngSubmit"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], [1, "card-description"], [1, "col-md-6"], [1, "form-group", "row"], [1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["formControlName", "firstname", "type", "text", 1, "form-control"], ["formControlName", "middlename", "type", "text", 1, "form-control"], ["formControlName", "lastname", "type", "text", 1, "form-control"], ["formControlName", "email", "type", "text", 1, "form-control"], ["formControlName", "gender", 1, "form-control"], ["type", "text", "formControlName", "dob", "placeholder", "dd/mm/yyyy", 1, "form-control"], ["formControlName", "zone", 1, "form-control"], ["formControlName", "unit", "type", "text", 1, "form-control"], ["formControlName", "phone_no", "type", "text", 1, "form-control"], ["formControlName", "state", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "vehicle_no", 1, "form-control"], ["class", "btn btn-secondary", "color", "basic", "type", "button", 3, "click", 4, "ngIf"], ["color", "basic", "type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "image-preview", 4, "ngIf"], ["formControlName", "fingerprint_thumb", "type", "file", 1, "form-control"], ["formControlName", "fingerprint_index", "type", "file", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageCapture", "cameraSwitched", "initError"], [1, "image-preview"], ["alt", "agentForm.value.title", 3, "src"]], template: function CaptureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureComponent_Template_a_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add Bio-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Bio Data Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "form", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CaptureComponent_Template_form_ngSubmit_77_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CaptureComponent_webcam_78_Template, 1, 6, "webcam", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Personal info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "MIddle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "select", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "select", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Category1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Category2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Category3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Category4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "select", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, CaptureComponent_option_159_Template, 2, 1, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Vehicle Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Passport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, CaptureComponent_button_172_Template, 2, 0, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureComponent_Template_button_click_174_listener() { return ctx.toggleWebcam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, CaptureComponent_div_176_Template, 2, 1, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Fingerprint Thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Fingerprint Index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Save Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "footer", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInformation == null ? null : ctx.userInformation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInformation == null ? null : ctx.userInformation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.agentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebcam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebcam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webcamImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.agentForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamComponent"]], styles: ["input[type =\"file\"][_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n  .image-preview[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    margin: 1rem 0;\r\n  }\r\n  .image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvY2FwdHVyZS9jYXB0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9jYXB0dXJlL2NhcHR1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGUgPVwiZmlsZVwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5pbWFnZS1wcmV2aWV3IHtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gIH1cclxuICAuaW1hZ2UtcHJldmlldyBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-capture',
                templateUrl: './capture.component.html',
                styleUrls: ['./capture.component.css']
            }]
    }], function () { return [{ type: _agent_service__WEBPACK_IMPORTED_MODULE_5__["AgentService"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agent/capture/state-file.ts":
/*!*********************************************!*\
  !*** ./src/app/agent/capture/state-file.ts ***!
  \*********************************************/
/*! exports provided: externalParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalParameters", function() { return externalParameters; });
const externalParameters = {
    states: [
        "Abia",
        "Adamawa",
        "Anambra",
        "Akwa Ibom",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Enugu",
        "Edo",
        "Ekiti",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
    ]
};


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");










class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/dashboard-page/dashboard-page.component */ "./src/app/admin/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _admin_add_agent_add_agent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/add-agent/add-agent.component */ "./src/app/admin/add-agent/add-agent.component.ts");
/* harmony import */ var _agent_agent_dashboard_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent/agent-dashboard/agent-dashboard.component */ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts");
/* harmony import */ var _agent_capture_capture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agent/capture/capture.component */ "./src/app/agent/capture/capture.component.ts");
/* harmony import */ var _auth_admin_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/admin/login/login.component */ "./src/app/auth/admin/login/login.component.ts");
/* harmony import */ var _auth_agent_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/agent/login/login.component */ "./src/app/auth/agent/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_admin_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/admin.auth.guard */ "./src/app/auth/admin.auth.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-profile/admin-profile.component */ "./src/app/admin/admin-profile/admin-profile.component.ts");
/* harmony import */ var _agent_agent_profile_agent_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./agent/agent-profile/agent-profile.component */ "./src/app/agent/agent-profile/agent-profile.component.ts");
/* harmony import */ var _auth_user_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/user.auth.guard */ "./src/app/auth/user.auth.guard.ts");
/* harmony import */ var _auth_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/login/forgot-password/forgot-password.component */ "./src/app/auth/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _auth_login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login/reset-password/reset-password.component */ "./src/app/auth/login/reset-password/reset-password.component.ts");
/* harmony import */ var _auth_agent_agent_forgot_password_agent_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/agent/agent-forgot-password/agent-forgot-password.component */ "./src/app/auth/agent/agent-forgot-password/agent-forgot-password.component.ts");
/* harmony import */ var _auth_agent_agent_reset_password_agent_reset_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/agent/agent-reset-password/agent-reset-password.component */ "./src/app/auth/agent/agent-reset-password/agent-reset-password.component.ts");
/* harmony import */ var _admin_view_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/view/view.component */ "./src/app/admin/view/view.component.ts");
























const routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "agent", redirectTo: 'agent/dashboard' },
    { path: "home", canActivate: [_auth_user_auth_guard__WEBPACK_IMPORTED_MODULE_16__["UserAuthGuard"]], component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "admin", redirectTo: 'admin/dashboard' },
    { path: "dashboard", canActivate: [_auth_user_auth_guard__WEBPACK_IMPORTED_MODULE_16__["UserAuthGuard"]], component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: "admin/login", component: _auth_admin_login_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"] },
    { path: "agent/login", component: _auth_agent_login_login_component__WEBPACK_IMPORTED_MODULE_10__["AgentLoginComponent"] },
    { path: "admin/dashboard", canActivate: [_auth_admin_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AdminAuthGuard"]], component: _admin_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"] },
    { path: "agent/dashboard", canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], component: _agent_agent_dashboard_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["AgentDashboardComponent"] },
    { path: "agent/capture", canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], component: _agent_capture_capture_component__WEBPACK_IMPORTED_MODULE_8__["CaptureComponent"] },
    { path: "admin/add-agent", canActivate: [_auth_admin_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AdminAuthGuard"]], component: _admin_add_agent_add_agent_component__WEBPACK_IMPORTED_MODULE_6__["AddAgentComponent"] },
    { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "profile", canActivate: [_auth_user_auth_guard__WEBPACK_IMPORTED_MODULE_16__["UserAuthGuard"]], component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: "agent/profile", canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], component: _agent_agent_profile_agent_profile_component__WEBPACK_IMPORTED_MODULE_15__["AgentProfileComponent"] },
    { path: "admin/profile", canActivate: [_auth_admin_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AdminAuthGuard"]], component: _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_14__["AdminProfileComponent"] },
    { path: "forgot-password", component: _auth_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordComponent"] },
    { path: "reset/:token", component: _auth_login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordComponent"] },
    { path: "agent/forgot-password", component: _auth_agent_agent_forgot_password_agent_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["AgentForgotPasswordComponent"] },
    { path: "agent/reset/:token", component: _auth_agent_agent_reset_password_agent_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["AgentResetPasswordComponent"] },
    { path: "admin/view-agent", component: _admin_view_view_component__WEBPACK_IMPORTED_MODULE_21__["ViewComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(userAuthService, authService, adminAuthService) {
        this.userAuthService = userAuthService;
        this.authService = authService;
        this.adminAuthService = adminAuthService;
        this.title = 'ecard-system';
    }
    ngOnInit() {
        this.userAuthService.autoAuthUser();
        this.authService.autoAuthUser();
        this.adminAuthService.autoAuthAdmin();
        if (this.userAuthService.getUserAuthStatus()) {
            this.userAuthService.getUserData();
        }
        if (this.authService.getAuthStatus()) {
            this.authService.getAgentData();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _auth_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _admin_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/dashboard-page/dashboard-page.component */ "./src/app/admin/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _admin_add_agent_add_agent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/add-agent/add-agent.component */ "./src/app/admin/add-agent/add-agent.component.ts");
/* harmony import */ var _agent_capture_capture_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./agent/capture/capture.component */ "./src/app/agent/capture/capture.component.ts");
/* harmony import */ var _agent_agent_dashboard_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./agent/agent-dashboard/agent-dashboard.component */ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts");
/* harmony import */ var _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-profile/admin-profile.component */ "./src/app/admin/admin-profile/admin-profile.component.ts");
/* harmony import */ var _agent_agent_profile_agent_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./agent/agent-profile/agent-profile.component */ "./src/app/agent/agent-profile/agent-profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_admin_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/admin/login/login.component */ "./src/app/auth/admin/login/login.component.ts");
/* harmony import */ var _auth_agent_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/agent/login/login.component */ "./src/app/auth/agent/login/login.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./card-back/card-back.component */ "./src/app/card-back/card-back.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _error_interceptor_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./error-interceptor.service */ "./src/app/error-interceptor.service.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var _auth_agent_agent_forgot_password_agent_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth/agent/agent-forgot-password/agent-forgot-password.component */ "./src/app/auth/agent/agent-forgot-password/agent-forgot-password.component.ts");
/* harmony import */ var _auth_agent_agent_reset_password_agent_reset_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./auth/agent/agent-reset-password/agent-reset-password.component */ "./src/app/auth/agent/agent-reset-password/agent-reset-password.component.ts");
/* harmony import */ var _auth_login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./auth/login/reset-password/reset-password.component */ "./src/app/auth/login/reset-password/reset-password.component.ts");
/* harmony import */ var _auth_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./auth/login/forgot-password/forgot-password.component */ "./src/app/auth/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _admin_view_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/view/view.component */ "./src/app/admin/view/view.component.ts");







































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _error_interceptor_service__WEBPACK_IMPORTED_MODULE_30__["ErrorInterceptorService"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_36__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_31__["WebcamModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        _agent_agent_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _admin_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_15__["DashboardPageComponent"],
        _admin_add_agent_add_agent_component__WEBPACK_IMPORTED_MODULE_16__["AddAgentComponent"],
        _agent_capture_capture_component__WEBPACK_IMPORTED_MODULE_17__["CaptureComponent"],
        _agent_agent_dashboard_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["AgentDashboardComponent"],
        _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_19__["AdminProfileComponent"],
        _agent_agent_profile_agent_profile_component__WEBPACK_IMPORTED_MODULE_20__["AgentProfileComponent"],
        _auth_admin_login_login_component__WEBPACK_IMPORTED_MODULE_22__["AdminLoginComponent"],
        _auth_agent_login_login_component__WEBPACK_IMPORTED_MODULE_23__["AgentLoginComponent"],
        _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_25__["CardBackComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_26__["CardComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"],
        _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_29__["LoadingSpinnerComponent"],
        _auth_login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"],
        _auth_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_35__["ForgotPasswordComponent"],
        _auth_agent_agent_forgot_password_agent_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__["AgentForgotPasswordComponent"],
        _auth_agent_agent_reset_password_agent_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["AgentResetPasswordComponent"],
        _admin_view_view_component__WEBPACK_IMPORTED_MODULE_37__["ViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_36__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_31__["WebcamModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                    _agent_agent_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _admin_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_15__["DashboardPageComponent"],
                    _admin_add_agent_add_agent_component__WEBPACK_IMPORTED_MODULE_16__["AddAgentComponent"],
                    _agent_capture_capture_component__WEBPACK_IMPORTED_MODULE_17__["CaptureComponent"],
                    _agent_agent_dashboard_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["AgentDashboardComponent"],
                    _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_19__["AdminProfileComponent"],
                    _agent_agent_profile_agent_profile_component__WEBPACK_IMPORTED_MODULE_20__["AgentProfileComponent"],
                    _auth_admin_login_login_component__WEBPACK_IMPORTED_MODULE_22__["AdminLoginComponent"],
                    _auth_agent_login_login_component__WEBPACK_IMPORTED_MODULE_23__["AgentLoginComponent"],
                    _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_25__["CardBackComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_26__["CardComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"],
                    _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_29__["LoadingSpinnerComponent"],
                    _auth_login_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"],
                    _auth_login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_35__["ForgotPasswordComponent"],
                    _auth_agent_agent_forgot_password_agent_forgot_password_component__WEBPACK_IMPORTED_MODULE_32__["AgentForgotPasswordComponent"],
                    _auth_agent_agent_reset_password_agent_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["AgentResetPasswordComponent"],
                    _admin_view_view_component__WEBPACK_IMPORTED_MODULE_37__["ViewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_36__["AngularMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    ngx_webcam__WEBPACK_IMPORTED_MODULE_31__["WebcamModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _error_interceptor_service__WEBPACK_IMPORTED_MODULE_30__["ErrorInterceptorService"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/admin.auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth/admin.auth.guard.ts ***!
  \******************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _admin_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AdminAuthGuard {
    constructor(adminAuthService, router) {
        this.adminAuthService = adminAuthService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.adminAuthService.getAdminAuthStatus();
        if (!isAuth) {
            return this.router.navigate(['/admin', 'login']);
        }
        return isAuth;
    }
}
AdminAuthGuard.ɵfac = function AdminAuthGuard_Factory(t) { return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__["AdminAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminAuthGuard, factory: AdminAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _admin_auth_service__WEBPACK_IMPORTED_MODULE_1__["AdminAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/admin.auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/admin.auth.service.ts ***!
  \********************************************/
/*! exports provided: AdminAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthService", function() { return AdminAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
class AdminAuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.getAuthStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    login(user) {
        return this.http.post(BACKEND_URL + 'admin/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(responseData => this.onHandleAuthentication(responseData)));
    }
    onHandleAuthentication(responseData) {
        const token = responseData.token;
        if (token) {
            this.token = token;
            const expiresIn = responseData.expiresIn;
            this.isAuthenticated = true;
            this.getAuthStatusListener.next(true);
            this.setTokenTimer(expiresIn);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + +expiresIn * 1000);
            this.saveAuthData(token, expirationDate);
        }
    }
    getAdminAuthStatus() {
        return this.isAuthenticated;
    }
    getAuthStatusEventListener() {
        return this.getAuthStatusListener.asObservable();
    }
    getToken() {
        return this.token;
    }
    setTokenTimer(expiresIn) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expiresIn * 1000);
    }
    autoAuthAdmin() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const currentDate = new Date();
        const expiresIn = authInformation.expiresIn.getTime() - currentDate.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.getAuthStatusListener.next(true);
            this.setTokenTimer(expiresIn / 1000);
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.getAuthStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigateByUrl('/admin/login');
    }
    saveAuthData(token, expiresIn) {
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminExpiresIn', expiresIn.toISOString());
    }
    getAuthData() {
        const token = localStorage.getItem('adminToken');
        const expiresInDuration = localStorage.getItem('adminExpiresIn');
        if (!token || !expiresInDuration) {
            return;
        }
        return {
            token: token,
            expiresIn: new Date(expiresInDuration)
        };
    }
    clearAuthData() {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminExpiresIn');
    }
    changeProfile(password, newpassword, confirmpassword) {
        const postData = {
            password: password,
            newpassword: newpassword,
            confirmpassword: confirmpassword
        };
        return this.http.post(BACKEND_URL + 'admin/profile', postData);
    }
}
AdminAuthService.ɵfac = function AdminAuthService_Factory(t) { return new (t || AdminAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AdminAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminAuthService, factory: AdminAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/admin/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/admin/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.auth.service */ "./src/app/auth/admin.auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AdminLoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminLoginComponent {
    constructor(router, adminAuthService) {
        this.router = router;
        this.adminAuthService = adminAuthService;
        this.title = "Login";
        this.loading = false;
    }
    ngOnInit() {
        this.adminAuthService.autoAuthAdmin();
        if (this.adminAuthService.getAdminAuthStatus()) {
            this.router.navigateByUrl('/admin');
        }
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        this.title = "Please wait....";
        if (!this.credentialsForm.valid) {
            this.title = "Login";
            return;
        }
        this.loading = true;
        this.adminAuthService.login(this.credentialsForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.title = "Login";
            this.loading = false;
        }))
            .subscribe(responseData => {
            this.router.navigateByUrl('/admin');
            this.credentialsForm.reset();
        });
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 33, vars: 8, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], [1, "form-check-label"], ["type", "checkbox", "checked", "", 1, "form-check-input"], [1, "validator-error"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminLoginComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminLoginComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Keep me signed in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.email.valid && ctx.credentialsForm.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@-webkit-keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  @keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  .spinner[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    border-top-color: #000000;\r\n    -webkit-animation: spinner .8s linear infinite;\r\n            animation: spinner .8s linear infinite;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksSUFBSSx5QkFBeUIsQ0FBQztFQUNoQzs7RUFGRjtJQUNJLElBQUkseUJBQXlCLENBQUM7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cclxuICB9XHJcbiAgIFxyXG4gIC5zcGlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/agent/agent-forgot-password/agent-forgot-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/auth/agent/agent-forgot-password/agent-forgot-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AgentForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentForgotPasswordComponent", function() { return AgentForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth/auth.service.ts");







function AgentForgotPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r105.message);
} }
function AgentForgotPasswordComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AgentForgotPasswordComponent {
    constructor(router, _location, authService) {
        this.router = router;
        this._location = _location;
        this.authService = authService;
        this.title = "Submit";
        this.loading = false;
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
    onSubmit() {
        this.title = "Please wait....";
        if (!this.credentialsForm.valid) {
            return;
        }
        this.loading = true;
        this.authService.forgotPassword(this.credentialsForm.value.email)
            .subscribe(responseData => {
            this.loading = false;
            this.credentialsForm.reset();
            this.message = responseData.message;
            this.title = "Submit";
        });
    }
}
AgentForgotPasswordComponent.ɵfac = function AgentForgotPasswordComponent_Factory(t) { return new (t || AgentForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AgentForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentForgotPasswordComponent, selectors: [["app-agent-forgot-password"]], decls: 24, vars: 5, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], ["class", "col-lg-4 mx-auto", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], [1, "text-black", "cursor", 3, "click"], [1, "validator-error"]], template: function AgentForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AgentForgotPasswordComponent_div_6_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgentForgotPasswordComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AgentForgotPasswordComponent_div_16_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentForgotPasswordComponent_Template_a_click_22_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.email.valid && ctx.credentialsForm.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWdlbnQvYWdlbnQtZm9yZ290LXBhc3N3b3JkL2FnZW50LWZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-forgot-password',
                templateUrl: './agent-forgot-password.component.html',
                styleUrls: ['./agent-forgot-password.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/agent/agent-reset-password/agent-reset-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/agent/agent-reset-password/agent-reset-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AgentResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentResetPasswordComponent", function() { return AgentResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AgentResetPasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentResetPasswordComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password does not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AgentResetPasswordComponent {
    constructor(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.title = "Submit";
        this.loading = false;
    }
    ngOnInit() {
        this.init();
        this.loading = true;
        this.route.params.subscribe((params) => {
            if (params['token']) {
                this.token = params['token'];
                this.authService.getResetPassword(this.token)
                    .subscribe(responseData => {
                    this.loading = false;
                    this.agentId = responseData.agentId;
                }, error => {
                    this.router.navigateByUrl('/agent');
                });
            }
        });
    }
    init() {
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        if (!this.credentialsForm.valid) {
            return;
        }
        if (this.credentialsForm.value.password !== this.credentialsForm.value.confirmpassword) {
            return;
        }
        this.loading = true;
        const password = this.credentialsForm.value.password;
        const confirmpassword = this.credentialsForm.value.confirmpassword;
        this.authService.postResetPassword(password, confirmpassword, this.token, this.agentId)
            .subscribe(responseData => {
            this.message = responseData.message;
            this.loading = false;
            this.router.navigateByUrl('agent/login');
        });
    }
}
AgentResetPasswordComponent.ɵfac = function AgentResetPasswordComponent_Factory(t) { return new (t || AgentResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AgentResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentResetPasswordComponent, selectors: [["app-agent-reset-password"]], decls: 28, vars: 7, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "confirmpassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "validator-error"]], template: function AgentResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgentResetPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AgentResetPasswordComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AgentResetPasswordComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.confirmpassword.valid && ctx.credentialsForm.controls.confirmpassword.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWdlbnQvYWdlbnQtcmVzZXQtcGFzc3dvcmQvYWdlbnQtcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-reset-password',
                templateUrl: './agent-reset-password.component.html',
                styleUrls: ['./agent-reset-password.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/agent/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/agent/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: AgentLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentLoginComponent", function() { return AgentLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AgentLoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentLoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AgentLoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = "Login";
        this.loading = false;
    }
    ngOnInit() {
        this.authService.autoAuthUser();
        if (this.authService.getAuthStatus()) {
            this.router.navigateByUrl('/agent');
        }
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        this.title = "Please wait....";
        if (!this.credentialsForm.valid) {
            this.title = "Login";
            return;
        }
        this.loading = true;
        this.authService.login(this.credentialsForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loading = false;
            this.title = "Login";
        }))
            .subscribe(responseData => {
            this.router.navigateByUrl('/agent/dashboard');
            this.credentialsForm.reset();
        });
    }
}
AgentLoginComponent.ɵfac = function AgentLoginComponent_Factory(t) { return new (t || AgentLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AgentLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentLoginComponent, selectors: [["app-agent-login"]], decls: 32, vars: 8, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], ["routerLink", "/agent/forgot-password", 1, "text-black"], [1, "validator-error"]], template: function AgentLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgentLoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AgentLoginComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AgentLoginComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.email.valid && ctx.credentialsForm.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@-webkit-keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  @keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  .spinner[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    border-top-color: #000000;\r\n    -webkit-animation: spinner .8s linear infinite;\r\n            animation: spinner .8s linear infinite;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZ2VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksSUFBSSx5QkFBeUIsQ0FBQztFQUNoQzs7RUFGRjtJQUNJLElBQUkseUJBQXlCLENBQUM7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hZ2VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cclxuICB9XHJcbiAgIFxyXG4gIC5zcGlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agent-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getAuthStatus();
        if (!isAuth) {
            this.router.navigate(['/agent', 'login']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.auth.service */ "./src/app/auth/admin.auth.service.ts");






class AuthInterceptor {
    constructor(userAuthService, authService, adminAuthService) {
        this.userAuthService = userAuthService;
        this.authService = authService;
        this.adminAuthService = adminAuthService;
        // ...
    }
    intercept(req, next) {
        const token = this.authService.getToken();
        const userToken = this.userAuthService.getToken();
        const adminToken = this.adminAuthService.getToken();
        const authRequest = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + token,
                AdminAuthorization: "Bearer " + adminToken,
                UserAuthorization: "Bearer " + userToken
            })
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.agentData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    getAgentDataStatus() {
        return this.agentData.asObservable();
    }
    getAgentData() {
        this.http.get(BACKEND_URL + 'agent/profile')
            .subscribe(responseData => {
            this.agentData.next(responseData.agent);
        });
    }
    login(user) {
        return this.http.post(BACKEND_URL + 'agent/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(responseData => this.onHandleAuthentication(responseData)));
    }
    onHandleAuthentication(responseData) {
        const token = responseData.token;
        if (token) {
            this.token = token;
            const expiresIn = responseData.expiresIn;
            this.setTimer(expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + expiresIn * 1000);
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate);
            this.agentData.next(responseData.agent);
        }
    }
    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getAuthStatus() {
        return this.isAuthenticated;
    }
    setTimer(expiresIn) {
        console.log('Setting Timer: ' + expiresIn);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expiresIn * 1000);
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/agent', 'login']);
    }
    // Auto Login
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const currentDateStamp = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - currentDateStamp.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.setTimer(expiresIn / 1000);
        }
    }
    saveAuthData(token, expiresIn) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expiresIn.toISOString());
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expiresIn = localStorage.getItem('expiresIn');
        if (!token || !expiresIn) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expiresIn),
        };
    }
    forgotPassword(email) {
        const postData = {
            email: email
        };
        return this.http.post(BACKEND_URL + 'agent/reset', postData);
    }
    getResetPassword(token) {
        return this.http.get(BACKEND_URL + 'agent/reset/' + token);
    }
    postResetPassword(password, confirmpassword, token, agentId) {
        const postData = {
            password: password,
            token: token,
            agentId: agentId
        };
        return this.http.post(BACKEND_URL + 'agent/reset/' + token, postData);
    }
    getProfile() {
        return this.http.get(BACKEND_URL + 'agent/profile');
    }
    changeProfile(agent) {
        return this.http.post(BACKEND_URL + 'agent/profile', agent);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/auth/login/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user.auth.service */ "./src/app/auth/user.auth.service.ts");







function ForgotPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r101.message);
} }
function ForgotPasswordComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ForgotPasswordComponent {
    constructor(router, _location, userAuthController) {
        this.router = router;
        this._location = _location;
        this.userAuthController = userAuthController;
        this.title = "Submit";
        this.loading = false;
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
    onSubmit() {
        this.title = "Please wait....";
        if (!this.credentialsForm.valid) {
            return;
        }
        this.loading = true;
        this.userAuthController.forgotPassword(this.credentialsForm.value.email)
            .subscribe(responseData => {
            this.loading = false;
            this.credentialsForm.reset();
            this.message = responseData.message;
            this.title = "Submit";
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 24, vars: 5, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], ["class", "col-lg-4 mx-auto", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], [1, "text-black", "cursor", 3, "click"], [1, "validator-error"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForgotPasswordComponent_div_16_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_a_click_22_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.email.valid && ctx.credentialsForm.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".cursor[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29ye1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, userAuthService) {
        this.router = router;
        this.userAuthService = userAuthService;
        this.title = "Login";
        this.loading = false;
    }
    ngOnInit() {
        this.userAuthService.autoAuthUser();
        if (this.userAuthService.getUserAuthStatus()) {
            this.router.navigateByUrl('/home');
        }
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        this.title = "Please wait....";
        if (!this.credentialsForm.valid) {
            this.title = "Login";
            return;
        }
        this.loading = true;
        this.userAuthService.login(this.credentialsForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.title = "Login";
            this.loading = false;
        }))
            .subscribe(responseData => {
            this.router.navigateByUrl('/');
            this.credentialsForm.reset();
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 8, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "form-group", "d-flex", "justify-content-between"], [1, "form-check", "form-check-flat", "mt-0"], ["routerLink", "/forgot-password", 1, "text-black"], [1, "validator-error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.email.valid && ctx.credentialsForm.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@-webkit-keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  @keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  .spinner[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    border-top-color: #000000;\r\n    -webkit-animation: spinner .8s linear infinite;\r\n            animation: spinner .8s linear infinite;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksSUFBSSx5QkFBeUIsQ0FBQztFQUNoQzs7RUFGRjtJQUNJLElBQUkseUJBQXlCLENBQUM7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cclxuICB9XHJcbiAgIFxyXG4gIC5zcGlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/login/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ResetPasswordComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password does not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(route, userAuthService, router) {
        this.route = route;
        this.userAuthService = userAuthService;
        this.router = router;
        this.title = "Submit";
        this.loading = false;
    }
    ngOnInit() {
        this.init();
        this.loading = true;
        this.route.params.subscribe((params) => {
            if (params['token']) {
                this.token = params['token'];
                this.userAuthService.getResetPassword(this.token)
                    .subscribe(responseData => {
                    this.loading = false;
                    this.userId = responseData.userId;
                }, error => {
                    this.router.navigateByUrl('/');
                });
            }
        });
    }
    init() {
        this.credentialsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        if (!this.credentialsForm.valid) {
            return;
        }
        if (this.credentialsForm.value.password !== this.credentialsForm.value.confirmpassword) {
            return;
        }
        this.loading = true;
        const password = this.credentialsForm.value.password;
        const confirmpassword = this.credentialsForm.value.confirmpassword;
        this.userAuthService.postResetPassword(password, confirmpassword, this.token, this.userId)
            .subscribe(responseData => {
            this.message = responseData.message;
            this.loading = false;
            this.router.navigateByUrl('/login');
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 28, vars: 7, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "password", "placeholder", "*********", "formControlName", "password", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "mdi", "mdi-check-circle-outline"], ["class", "validator-error", 4, "ngIf"], ["type", "password", "placeholder", "*********", "formControlName", "confirmpassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "validator-error"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_div_15_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResetPasswordComponent_div_24_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.password.valid && ctx.credentialsForm.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.credentialsForm.controls.confirmpassword.valid && ctx.credentialsForm.controls.confirmpassword.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.credentialsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/user.auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/user.auth.guard.ts ***!
  \*****************************************/
/*! exports provided: UserAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuard", function() { return UserAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class UserAuthGuard {
    constructor(userAuthService, router) {
        this.userAuthService = userAuthService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.userAuthService.getUserAuthStatus();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
UserAuthGuard.ɵfac = function UserAuthGuard_Factory(t) { return new (t || UserAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthGuard, factory: UserAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/user.auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/user.auth.service.ts ***!
  \*******************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
class UserAuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    getUserDataStatus() {
        return this.userData.asObservable();
    }
    getUserData() {
        this.http.get(BACKEND_URL + 'user/profile')
            .subscribe(responseData => {
            this.userData.next(responseData.user);
        });
    }
    login(user) {
        return this.http.post(BACKEND_URL + 'user/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(responseData => this.onHandleAuthentication(responseData)));
    }
    onHandleAuthentication(responseData) {
        const token = responseData.token;
        if (token) {
            this.token = token;
            const expiresIn = responseData.expiresIn;
            this.setTimer(expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + expiresIn * 1000);
            this.saveAuthData(token, expirationDate);
            this.userData.next(responseData.user);
        }
    }
    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getUserAuthStatus() {
        return this.isAuthenticated;
    }
    setTimer(expiresIn) {
        console.log('Setting Timer: ' + expiresIn);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expiresIn * 1000);
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/login']);
    }
    // Auto Login
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const currentDateStamp = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - currentDateStamp.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.setTimer(expiresIn / 1000);
        }
    }
    saveAuthData(token, expiresIn) {
        localStorage.setItem('userToken', token);
        localStorage.setItem('userExpiresIn', expiresIn.toISOString());
    }
    clearAuthData() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userExpiresIn');
    }
    getAuthData() {
        const token = localStorage.getItem('userToken');
        const expiresIn = localStorage.getItem('userExpiresIn');
        if (!token || !expiresIn) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expiresIn)
        };
    }
    forgotPassword(email) {
        const postData = {
            email: email
        };
        return this.http.post(BACKEND_URL + 'user/reset', postData);
    }
    getResetPassword(token) {
        return this.http.get(BACKEND_URL + 'user/reset/' + token);
    }
    postResetPassword(password, confirmpassword, token, userId) {
        const postData = {
            password: password,
            token: token,
            userId: userId
        };
        return this.http.post(BACKEND_URL + 'user/reset/' + token, postData);
    }
    getProfile() {
        return this.http.get(BACKEND_URL + 'user/profile');
    }
    changeProfile(password, newpassword, confirmpassword) {
        const postData = {
            password: password,
            newpassword: newpassword,
            confirmpassword: confirmpassword
        };
        return this.http.post(BACKEND_URL + 'user/profile', postData);
    }
}
UserAuthService.ɵfac = function UserAuthService_Factory(t) { return new (t || UserAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UserAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthService, factory: UserAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/card-back/card-back.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-back/card-back.component.ts ***!
  \**************************************************/
/*! exports provided: CardBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBackComponent", function() { return CardBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardBackComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardBackComponent.ɵfac = function CardBackComponent_Factory(t) { return new (t || CardBackComponent)(); };
CardBackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardBackComponent, selectors: [["app-card-back"]], decls: 6, vars: 0, consts: [[1, "credit-card-wrap"], [1, "mk-icon-world-map"], [1, "credit-card-inner"], [1, "credit-font"]], template: function CardBackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This identity card is not transferable. It must be produced at any time if requested by any officer of the company or authorised person(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtYmFjay9jYXJkLWJhY2suY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardBackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-back',
                templateUrl: './card-back.component.html',
                styleUrls: ['./card-back.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { data: "data" }, decls: 22, vars: 8, consts: [[1, "credit-card-wrap"], [1, "mk-icon-world-map"], [1, "credit-card-inner"], [1, "header"], [1, "credit-logo"], [1, "shape"], [1, "txt"], [1, "text"], [1, "mk-icon-sim"], [2, "width", "80px", "height", "80px", "border-radius", "50%", 3, "src"], [1, "credit-font", "credit-card-number"], [1, "foot"], [1, "clearfix"], [1, "pull-left"], [1, "credit-font", "credit-author"], [1, "pull-right", "credit-author", "credit-card-date"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NUPENG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data == null ? null : ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.data == null ? null : ctx.data.firstname, " ", ctx.data == null ? null : ctx.data.middlename.charAt(0), ". ", ctx.data == null ? null : ctx.data.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 6, ctx.data == null ? null : ctx.data.uniqueId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.gender);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/error-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/error-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function() { return ErrorInterceptorService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






// import { MatDialog } from '@angular/material';
class ErrorInterceptorService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((error) => {
            let errorMessage = "Sorry, we couldn't complete your request. Please try again in a moment.";
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            // window.alert(errorMessage);
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptorService.ɵfac = function ErrorInterceptorService_Factory(t) { return new (t || ErrorInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ErrorInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptorService, factory: ErrorInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ErrorInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ErrorComponent {
    constructor(data) {
        this.data = data;
        this.message = "Sorry, we couldn't complete your request. Please try again in a moment.";
    }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-body-1", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Okay!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 0, consts: [[1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-xs", "rounded-circle"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["src", "../assets/images/faces/face8.jpg", "alt", "Profile image", 1, "img-md", "rounded-circle"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["href", "profile.html", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], ["href", "../index.html", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Azeez Oje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-back/card-back.component */ "./src/app/card-back/card-back.component.ts");






class HomeComponent {
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
    }
    ngOnInit() {
        this.userAuthService.getProfile()
            .subscribe(responseData => {
            this.user = responseData.user;
        });
        this.userAuthService.getUserDataStatus()
            .subscribe(responseData => {
            this.userInformation = responseData;
        });
    }
    logout() {
        this.userAuthService.logout();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 69, vars: 8, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile image", 1, "img-xs", "rounded-circle", 3, "src"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["alt", "Profile image", 1, "img-md", "rounded-circle", 3, "src"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["alt", "profile image", 1, "img-xs", "rounded-circle", 3, "src"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/profile", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-sm-12", "col-md-6"], [3, "data"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-card", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-card-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "footer", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userInformation == null ? null : ctx.userInformation.firstname, " ", ctx.userInformation == null ? null : ctx.userInformation.middlename, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userInformation == null ? null : ctx.userInformation.firstname, " ", ctx.userInformation == null ? null : ctx.userInformation.middlename, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _card_back_card_back_component__WEBPACK_IMPORTED_MODULE_4__["CardBackComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/user.auth.service */ "./src/app/auth/user.auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");








function ProfileComponent_mat_error_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r98.message);
} }
class ProfileComponent {
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
        this.loading = false;
    }
    ngOnInit() {
        this.init();
        this.userAuthService.getUserDataStatus()
            .subscribe(responseData => {
            this.userInformation = responseData;
        });
    }
    init() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    onSubmit() {
        if (!this.userForm.valid) {
            return;
        }
        if (this.userForm.value.confirmpassword !== this.userForm.value.newpassword) {
            this.message = "No match";
            return;
        }
        this.loading = true;
        this.message = null;
        const password = this.userForm.value.password;
        const newpassword = this.userForm.value.newpassword;
        const confirmpassword = this.userForm.value.confirmpassword;
        this.userAuthService.changeProfile(password, newpassword, confirmpassword)
            .subscribe(responseData => {
            this.userForm.setValue({
                'password': null,
                'newpassword': null,
                'confirmpassword': null
            });
            this.loading = false;
        }, error => {
            this.loading = false;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 84, vars: 12, consts: [[1, "container-scroller"], [1, "navbar", "default-layout", "col-lg-12", "col-12", "p-0", "fixed-top", "d-flex", "flex-row"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["alt", "Profile image", 1, "img-xs", "rounded-circle", 3, "src"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], [1, "dropdown-header", "text-center"], ["alt", "Profile image", 1, "img-md", "rounded-circle", 3, "src"], [1, "mb-1", "mt-3", "font-weight-semibold"], [1, "font-weight-light", "text-muted", "mb-0"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-dashboard"], ["routerLink", "/login", 1, "dropdown-item"], [1, "dropdown-item-icon", "ti-power-off"], ["type", "button", "data-toggle", "offcanvas", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], [1, "mdi", "mdi-menu"], [1, "container-fluid", "page-body-wrapper"], ["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["alt", "profile image", 1, "img-xs", "rounded-circle", 3, "src"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["routerLink", "/profile", 1, "nav-link", "active"], [1, "menu-icon", "typcn", "typcn-bell"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "page-title-header"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "forms-sample", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputPassword4"], ["formControlName", "password", "type", "password", "id", "exampleInputPassword4", "placeholder", "Password", 1, "form-control"], ["formControlName", "newpassword", "type", "password", "id", "exampleInputNewPassword4", "placeholder", "New Password", 1, "form-control"], [4, "ngIf"], ["formControlName", "confirmpassword", "type", "password", "id", "exampleInputConfirmPassword4", "placeholder", "Confirm Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Card System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_61_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ProfileComponent_mat_error_70_Template, 2, 1, "mat-error", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "footer", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Copyright \u00A9 2020. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Hand-crafted & made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userInformation == null ? null : ctx.userInformation.firstname, " ", ctx.userInformation == null ? null : ctx.userInformation.middlename, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userInformation == null ? null : ctx.userInformation.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userInformation == null ? null : ctx.userInformation.firstname, " ", ctx.userInformation == null ? null : ctx.userInformation.middlename, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["@-webkit-keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  @keyframes spinner {\r\n    to {transform: rotate(360deg);}\r\n  }\r\n   \r\n  .spinner[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    border-top-color: #000000;\r\n    -webkit-animation: spinner .8s linear infinite;\r\n            animation: spinner .8s linear infinite;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxJQUFJLHlCQUF5QixDQUFDO0VBQ2hDOztFQUZGO0lBQ0ksSUFBSSx5QkFBeUIsQ0FBQztFQUNoQzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbiAgfVxyXG4gICBcclxuICAuc3Bpbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXIgLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _auth_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ring[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 51px;\r\n    height: 51px;\r\n    margin: 6px;\r\n    border: 6px solid rgb(14, 8, 107);\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: rgb(14, 8, 107) transparent transparent transparent;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    -webkit-animation-delay: -0.45s;\r\n            animation-delay: -0.45s;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    -webkit-animation-delay: -0.15s;\r\n            animation-delay: -0.15s;\r\n  }\r\n  @-webkit-keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixzRUFBOEQ7WUFBOUQsOERBQThEO0lBQzlELGlFQUFpRTtFQUNuRTtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCByZ2IoMTQsIDgsIDEwNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE0LCA4LCAxMDcpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxuICB9XHJcbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICB9XHJcbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLXJpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 24, vars: 0, consts: [["id", "sidebar", 1, "sidebar", "sidebar-offcanvas"], [1, "nav"], [1, "nav-item", "nav-profile"], ["href", "#", 1, "nav-link"], [1, "profile-image"], ["src", "../assets/images/faces/face8.jpg", "alt", "profile image", 1, "img-xs", "rounded-circle"], [1, "dot-indicator", "bg-success"], [1, "text-wrapper"], [1, "profile-name"], [1, "designation"], [1, "nav-item", "nav-category"], [1, "nav-item"], ["href", "index.html", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-document-text"], [1, "menu-title"], ["href", "profile.html", 1, "nav-link"], [1, "menu-icon", "typcn", "typcn-bell"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Azeez Oje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    // apiUrl: 'http://localhost:3000/api/'
    apiUrl: 'https://digicapture.herokuapp.com/api/'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Emmanuel\Desktop\CoreFiles\Programming\angularProjects\card-system\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map