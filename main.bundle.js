webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main{\n  margin-top:2rem;\n  margin-bottom: 2rem;\n}\n\n.portrait-tool img{\n  height:80px;\n  padding:10px 0;\n}\n\n.portrait{\n  height:100px;\n  border-radius: 20rem 20rem;\n}\n.aboutSection{\n  padding:0 10vw 0 10vw;\n}\n\n@media (max-width: 576px){\n  .aboutSection{\n    padding:0 5vw 3rem 5vw;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container-fluid\">\n      <h1 class=\"jumbotron-heading\">About</h1>\n      <p class=\"lead text-dark\">More about me here.</p>\n    </div>\n    <a routerLink=\"/\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to Home</a>\n    <a routerLink=\"/contact\" routerLinkActive=\"true\" class=\"btn btn-primary align-self-center mx-auto\">Contact me</a>\n  </section>\n  <section class=\"container-fluid aboutSection\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"mx-auto text-center text-justify\">\n          <img [src]=\"baseHref + 'portrait.jpg'\" class=\"portrait mb-2\">\n          <h1>Who am I?</h1>\n          <p>Hi, my name is Zafer Dogan. I'm a 28 years old Software Engineer / Freelance Graphic Designer / Self-Taught\n            Artist from Switzerland. Over the past ten years, I've had the opportunity\n            to build up a wide arrange of skills due to different projects I was involved in. I'm now in my last\n            semester at the HSR and am in-between fulltime jobs, which is why I've setup this\n            portfolio / \"services I offer\" page to take on small to middle sized projects on the side. I'm very flexible\n            with my time and can accommodate you from wherever you are. I'm looking forward to work with you.\n          </p>\n          <h5> I'm also on</h5>\n          <div>\n            <div class=\"d-inline mx-2\">\n              <span class=\"fa fa-facebook mr-2\"></span><a href=\"https://www.facebook.com/Zmote89/\" target=\"_blank\">Z-Mote from the\n              Z-Labs</a>\n            </div>\n            <div class=\"d-inline mx-2\">\n              <span class=\"fa fa-deviantart mr-2\"></span><a href=\"https://zmote.deviantart.com/\" target=\"_blank\">Zmote</a>\n            </div>\n            <div class=\"d-inline mx-2\">\n              <span class=\"fa fa-twitter mr-2\"></span><a href=\"https://twitter.com/zmotions\" target=\"_blank\">@zmotions</a>\n            </div>\n            <div class=\"d-inline mx-2\">\n              <span class=\"fa fa-soundcloud mr-2\"></span><a href=\"https://soundcloud.com/zmote\" target=\"_blank\">zmote</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <hr>\n  <section class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"mx-auto text-center text-justify aboutSection\">\n          <h1>What tools do I use?</h1>\n          <div class=\"col-md-12\">\n            <div class=\"mx-auto text-center my-md-2 portrait-tool\">\n              <img [src]=\"baseHref + 'toolThumbs/photoshop.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/illustrator.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/indesign.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/aftereffects.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/premiere.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/animate.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/maya.jpg'\">\n              <img [src]=\"baseHref + 'toolThumbs/blender.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/sketchup.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/webstorm.jpg'\">\n              <img [src]=\"baseHref + 'toolThumbs/phpstorm.png'\">\n              <img [src]=\"baseHref + 'toolThumbs/intellijidea.jpg'\">\n              <img [src]=\"baseHref + 'toolThumbs/clion.jpg'\">\n            </div>\n          </div>\n          <p>For visual work, I usually use the entire Adobe Collection, from Photoshop, Illustrator, InDesign to After\n            Effects, Premiere and Animate. For Coding, I usually rely on the Jetbrains\n            product family, from Webstorm, PHPStorm to IntelliJ IDEA, CLion and the sort. For 3D Work I usually use\n            Autodesk Maya LT, Blender or Google SketchUP. I'm generally quick to leanr new software\n            as the need rises.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__ = __webpack_require__("../../../../../src/constants/GalleryConstants.ts");
/**
 * Created by Zmote on 25.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.baseHref = __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__["a" /* GalleryConstants */].baseHref;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/about/about.component.css")]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/animation/animation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main{\n  margin-top:2rem;\n}\n\n.responsive-video {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 60px; overflow: hidden;\n}\n\n.responsive-video iframe,\n.responsive-video object,\n.responsive-video embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n@media only screen and (min-width : 992px) {\n  .responsive-video {\n    position: relative;\n    padding:0;\n  }\n\n  .responsive-video iframe,\n  .responsive-video object,\n  .responsive-video embed {\n    position: relative;\n    width: 50vw;\n    height: 25vw;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/animation/animation.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"mb-5\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container-fluid\">\n      <h1 class=\"jumbotron-heading\">Animation</h1>\n      <p class=\"lead text-dark\">I do 3D and 2D Animations. Have a look at the video below to gage what I'm capable\n        of doing.</p>\n    </div>\n    <a routerLink=\"/\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to Home</a>\n  </section>\n  <section class=\"col-md-12 text-center\">\n    <div class=\"responsive-video\">\n      <iframe src=\"https://www.youtube.com/embed/XxLPh-4h1UU\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/animation/animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by Zmote on 28.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnimationComponent = (function () {
    function AnimationComponent() {
    }
    return AnimationComponent;
}());
AnimationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-animation',
        template: __webpack_require__("../../../../../src/animation/animation.component.html"),
        styles: [__webpack_require__("../../../../../src/animation/animation.component.css")]
    })
], AnimationComponent);

//# sourceMappingURL=animation.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-nav-main></app-nav-main>\n<router-outlet></router-outlet>\n<app-footer-main></app-footer-main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_component__ = __webpack_require__("../../../../../src/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appHome_appHome_component__ = __webpack_require__("../../../../../src/appHome/appHome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slideshow_slideshow_component__ = __webpack_require__("../../../../../src/slideshow/slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__infocards_infocards_component__ = __webpack_require__("../../../../../src/infocards/infocards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gallery_container_gallery_container_component__ = __webpack_require__("../../../../../src/gallery-container/gallery-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__code_code_component__ = __webpack_require__("../../../../../src/code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants_RoutesContainer__ = __webpack_require__("../../../../../src/constants/RoutesContainer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__animation_animation_component__ = __webpack_require__("../../../../../src/animation/animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notfound_notfound_component__ = __webpack_require__("../../../../../src/notfound/notfound.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// TODO: Adjust image sizes, make thumbnails for small images and load full size for modal
// TODO: Break up code into more components and directives
// TODO: Gather belonging elements into modules
// TODO: Check navbar scroll issue on some mobiles
// TODO: Form nested components
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__appHome_appHome_component__["a" /* AppHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__slideshow_slideshow_component__["a" /* SlideShowComponent */],
            __WEBPACK_IMPORTED_MODULE_8__infocards_infocards_component__["a" /* InfoCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__gallery_container_gallery_container_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_12__code_code_component__["a" /* CodeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__animation_animation_component__["a" /* AnimationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__notfound_notfound_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__constants_RoutesContainer__["a" /* RoutesContainer */].appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/appHome/appHome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".appBody{\n  width:75%;\n  height:100vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/appHome/appHome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-slide-show></app-slide-show>\n<app-info-card></app-info-card>\n"

/***/ }),

/***/ "../../../../../src/appHome/appHome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slideshow_slideshow_component__ = __webpack_require__("../../../../../src/slideshow/slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infocards_infocards_component__ = __webpack_require__("../../../../../src/infocards/infocards.component.ts");
/**
 * Created by Zmote on 21.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppHomeComponent = (function () {
    function AppHomeComponent() {
    }
    return AppHomeComponent;
}());
AppHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home [class="container-fluid appHome"]',
        template: __webpack_require__("../../../../../src/appHome/appHome.component.html"),
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__slideshow_slideshow_component__["a" /* SlideShowComponent */], __WEBPACK_IMPORTED_MODULE_2__infocards_infocards_component__["a" /* InfoCardComponent */]],
        styles: [__webpack_require__("../../../../../src/appHome/appHome.component.css")]
    })
], AppHomeComponent);

//# sourceMappingURL=appHome.component.js.map

/***/ }),

/***/ "../../../../../src/code/code.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main{\n  margin-top:2rem;\n}\n\n.thumbnail-image{\n  width:100%;\n  height:auto;\n}\n\n@media (max-width: 768px){\n  .thumbnail-image{\n    height:auto;\n    width:100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/code/code.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"mb-5\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container-fluid\">\n      <h1 class=\"jumbotron-heading\">Coding</h1>\n      <p class=\"lead text-dark\">I'm a professional software engineer. Here are some projects I worked on and my repo.</p>\n    </div>\n    <a routerLink=\"/\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to Home</a>\n  </section>\n  <section class=\"container-fluid w-75\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <a href=\"https://github.com/Zmote\" target=\"_blank\">\n        <img class=\"thumbnail-image\" [src]=\"baseHref + 'github.png'\">\n        </a>\n      </div>\n      <div class=\"col-md-9 align-self-center\">\n        <h1>Github</h1>\n        <p>In my free time I work on personal projects, learning new frameworks, experimenting and preparing assignments\n          for some of my \"students\" I instruct over at the\n          <a href=\"http://it-club-oberland.ch/\" target=\"_blank\">IT Club</a>. On here you may have a look at some of my code. Go to my\n          Github Repository from <a href=\"https://github.com/Zmote\" target=\"_blank\">here</a>.</p>\n      </div>\n    </div>\n  </section>\n  <hr>\n  <section class=\"container-fluid w-75\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <a href=\"http://it-club-oberland.ch/\" target=\"_blank\">\n        <img class=\"thumbnail-image\" [src]=\"baseHref + 'pages/itclub_page.png'\">\n        </a>\n      </div>\n      <div class=\"col-md-9 align-self-center\">\n        <h1>IT Club</h1>\n        <p>In my work with the IT Club, an initiative to enhance IT knowledge in our locality, I've had the chance to prepare our blog and the IT Club Webpage. The\n          <a href=\"http://it-club-oberland.ch/\" target=\"_blank\">IT Club Webpage</a> was developed with WordPress and combines many of our social presence.</p>\n      </div>\n    </div>\n  </section>\n  <hr>\n  <section class=\"container-fluid w-75\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <a href=\"/\" target=\"_blank\">\n        <img class=\"thumbnail-image\" [src]=\"baseHref + 'pages/z-motions.png'\">\n        </a>\n      </div>\n      <div class=\"col-md-9 align-self-center\">\n        <h1>Z-Motions</h1>\n        <p>I've developed this site with Angular4 and the Bootstrap4 Framework.</p>\n      </div>\n    </div>\n  </section>\n  <hr>\n  <section class=\"container-fluid w-75\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <a href=\"https://github.com/Zmote/SA---RAD-LogShark\" target=\"_blank\">\n        <img class=\"thumbnail-image\" [src]=\"baseHref + 'pages/main_view_multiWindow_colored_settings.png'\">\n        </a>\n      </div>\n      <div class=\"col-md-9 align-self-center\">\n        <h1>LogShark</h1>\n        <p>During my term project I got the opportunity to develop a high performance logging application with Qt and C++. The application receives log data via the network and handles\n          multiple inputs from multiple applications, thus making a centralized log analysis possible. Parts of the code for the application are on my GitHub repository\n          <a href=\"https://github.com/Zmote/SA---RAD-LogShark\" target=\"_blank\">here</a>.</p>\n      </div>\n    </div>\n  </section>\n  <hr>\n  <section class=\"container-fluid w-75\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <a href=\"http://www.tomate-effretikon.ch/\" target=\"_blank\">\n        <img class=\"thumbnail-image\" [src]=\"baseHref + 'pages/restaurant_tomate.png'\">\n        </a>\n      </div>\n      <div class=\"col-md-9 align-self-center\">\n        <h1>Restaurant Tomate</h1>\n        <p>One of my earliest acquaintance in the IT world was with the <a href=\"http://intelligentworks.ch/\" target=\"_blank\">intelligentworks dogan company</a>.\n        After my internship there, we kept in touch and worked on various different projects together. One of those projects was the website of Restaurant Tomate\n          <a href=\"http://www.tomate-effretikon.ch/\" target=\"_blank\">http://www.tomate-effretikon.ch/</a>. This site was developed with the Bootstrap Framework and the doT.js JavaScript\n        Template Engine.</p>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/code/code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__ = __webpack_require__("../../../../../src/constants/GalleryConstants.ts");
/**
 * Created by Zmote on 25.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CodeComponent = (function () {
    function CodeComponent() {
        this.baseHref = __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__["a" /* GalleryConstants */].baseHref;
    }
    return CodeComponent;
}());
CodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-code',
        template: __webpack_require__("../../../../../src/code/code.component.html"),
        styles: [__webpack_require__("../../../../../src/code/code.component.css")]
    })
], CodeComponent);

//# sourceMappingURL=code.component.js.map

/***/ }),

/***/ "../../../../../src/constants/GalleryConstants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryConstants; });
/**
 * Created by Zmote on 26.10.2017.
 */
var GalleryConstants = (function () {
    function GalleryConstants() {
    }
    return GalleryConstants;
}());

// TODO: Check if baseHref even needed, the backslash less syntax might be enough for auto-resolve of links
GalleryConstants.baseHref = 'assets/img/';
GalleryConstants.threeDImageArray = [
    GalleryConstants.baseHref + '3dgallery/vehicle_02_design_by_zmote-d6tzun5.jpg',
    GalleryConstants.baseHref + '3dgallery/kervansaray_design001.jpg',
    GalleryConstants.baseHref + '3dgallery/architecture.jpg',
    GalleryConstants.baseHref + '3dgallery/cargo_ship_by_zmote-d6p1ugd.jpg',
    GalleryConstants.baseHref + '3dgallery/city_of_winterburg__final_layout_by_zmote-d6pzdzu.jpg',
    GalleryConstants.baseHref + '3dgallery/clientwork_cam_model_preview_by_zmote-d5m7yu0.jpg',
    GalleryConstants.baseHref + '3dgallery/dat_face_by_zmote-daadprp.jpg',
    GalleryConstants.baseHref + '3dgallery/medieval_hostel__with_solar_panels_by_zmote-d79iekf.jpg',
    GalleryConstants.baseHref + '3dgallery/rensei_ruin___unknown_nameless___design_001_by_zmote-da8ikxr.jpg',
    GalleryConstants.baseHref + '3dgallery/survey_copter_by_zmote-d78gnav.jpg',
    GalleryConstants.baseHref + '3dgallery/wacom_intuos5_model_tribute_by_z_mote-d56co5v.jpg',
    GalleryConstants.baseHref + '3dgallery/the_barrel_inn_by_zmote-d7g24kx.png',
    GalleryConstants.baseHref + '3dgallery/caylarrrrr_by_z_mote-d499mx4.png'
];
GalleryConstants.twoDImageArray = [
    GalleryConstants.baseHref + '2dgallery/a_purposeful_meeting____by_zmote-d75n3tb.jpg',
    GalleryConstants.baseHref + '2dgallery/arriving_in_a_strange_world_by_zmote-d6kl0yj.jpg',
    GalleryConstants.baseHref + '2dgallery/color_sketch_004i_by_zmote-d66shah.jpg',
    GalleryConstants.baseHref + '2dgallery/cuneyt_arkin_by_z_mote-d5dpyt6.jpg',
    GalleryConstants.baseHref + '2dgallery/el_presidente_by_zmote-dbj89t6.png',
    GalleryConstants.baseHref + '2dgallery/for_funz_by_zmote-d6kcnld.jpg',
    GalleryConstants.baseHref + '2dgallery/material_study_005_by_zmote-d6bpklj.jpg',
    GalleryConstants.baseHref + '2dgallery/winterburg_fountain_final_by_zmote-d6rcq79.jpg',
    GalleryConstants.baseHref + '2dgallery/winterburg_marketscene_final_by_zmote-d6vurgd.jpg',
    GalleryConstants.baseHref + '2dgallery/world_of_seyyare___entire_map__full_resolution_by_zmote-d6qfu09.jpg'
];
GalleryConstants.conceptImageArray = [
    GalleryConstants.baseHref + 'concept/001.jpg',
    GalleryConstants.baseHref + 'concept/30_30_costume_design_sketches____by_zmote-d6t0wp3.jpg',
    GalleryConstants.baseHref + 'concept/arriving_at_narufo___scene_concept_by_zmote-da8m9ak.jpg',
    GalleryConstants.baseHref + 'concept/Bild004.jpg',
    GalleryConstants.baseHref + 'concept/caricature_sketch_001.jpg',
    GalleryConstants.baseHref + 'concept/colorSketchv1.jpg',
    GalleryConstants.baseHref + 'concept/compositional_experiment___pictorial_compsotion_00_by_zmote-da9o4fu.jpg',
    GalleryConstants.baseHref + 'concept/compositional_experiments_by_zmote-da9639e.jpg',
    GalleryConstants.baseHref + 'concept/imaginary_piece_019_by_zmote-d681a0m.jpg',
    GalleryConstants.baseHref + 'concept/imaginary_piece_020_by_zmote-d681sm4.jpg',
    GalleryConstants.baseHref + 'concept/inktober__010_by_zmote-dbq8bg8.jpg',
    GalleryConstants.baseHref + 'concept/lineart_for_contest_corkya_by_zmote-d5k1sx9.jpg',
    GalleryConstants.baseHref + 'concept/logoprototypesheets.jpg',
    GalleryConstants.baseHref + 'concept/n_waves_logo_design_sketches_by_zmote-dbrbjbj.jpg',
    GalleryConstants.baseHref + 'concept/quick_scene_sketch_by_zmote-dbl8gox.jpg',
    GalleryConstants.baseHref + 'concept/scene_sketch_004_by_zmote-dbrdmks.jpg',
    GalleryConstants.baseHref + 'concept/scene_sketch_007_by_zmote-dblb53y.jpg',
    GalleryConstants.baseHref + 'concept/scene_wip_001___world_building_course_by_zmote-d6u402d.jpg',
    GalleryConstants.baseHref + 'concept/some_ship_by_zmote-dbqu6zv.jpg',
    GalleryConstants.baseHref + 'concept/the_longing___a_quick_concept_by_zmote-da8mz2g.jpg',
    GalleryConstants.baseHref + 'concept/united_we_stand_divided_we_fall_wip_by_zmote-d6i583a.jpg',
    GalleryConstants.baseHref + 'concept/Unti3tled-1.jpg',
    GalleryConstants.baseHref + 'concept/vehicle_final____by_zmote-d6tw8uz.jpg',
    GalleryConstants.baseHref + 'concept/week_04___clothing_sketches____by_zmote-d6spqr2.jpg',
    GalleryConstants.baseHref + 'concept/week_10_thumbnail_batches____first_6_out_of_200_xd_by_zmote-d6enp2q.jpg',
    GalleryConstants.baseHref + 'concept/wip___journey_on_a_whale_by_zmote-da8w8s7.jpg',
    GalleryConstants.baseHref + 'concept/wip_sketch_001_out_of_the_woods_by_zmote-d98bou0.jpg'
];
GalleryConstants.designImageArray = [
    GalleryConstants.baseHref + 'designs/57a945bb69a58de2c4da952e0ff8af95-d68yzcu.png',
    GalleryConstants.baseHref + 'designs/alienOnWatch.jpg',
    GalleryConstants.baseHref + 'designs/bersichtimageware_by_zmote-d5t47tr.png',
    GalleryConstants.baseHref + 'designs/BestelineLogo.JPG',
    GalleryConstants.baseHref + 'designs/brotherlogo_by_zmote-d5t47b7.png',
    GalleryConstants.baseHref + 'designs/cemilabisample-08.png',
    GalleryConstants.baseHref + 'designs/color_composition_by_zmote-d5s17oj.jpg',
    GalleryConstants.baseHref + 'designs/computerdesign_by_zmote-d5t4819.png',
    GalleryConstants.baseHref + 'designs/designwork_002_by_z_mote-d5cgn2y.jpg',
    GalleryConstants.baseHref + 'designs/designwork_003_by_z_mote-d5cgnb8.jpg',
    GalleryConstants.baseHref + 'designs/designwork_010_by_z_mote-d5fn5j4.jpg',
    GalleryConstants.baseHref + 'designs/Ekol_kids_Flyer_a5_front.jpg',
    GalleryConstants.baseHref + 'designs/ekolFrühanmeldung_frontDEUTSCHCMYKPRINTREADYA4.jpg',
    GalleryConstants.baseHref + 'designs/EliteFlyer_front_CMYK_mitBescnittzugabe1mm.jpg',
    GalleryConstants.baseHref + 'designs/erdal_bakkal_by_zmote-d5qijdr.jpg',
    GalleryConstants.baseHref + 'designs/flyerA4RGB.jpg',
    GalleryConstants.baseHref + 'designs/geleneksel_tanisma_cayi_2013_by_zmote-d5vu12a.jpg',
    GalleryConstants.baseHref + 'designs/iftar-flyer-simple-v4.jpg',
    GalleryConstants.baseHref + 'designs/iftar-flyer-v3.jpg',
    GalleryConstants.baseHref + 'designs/ITClub_fuer_Damen.jpg',
    GalleryConstants.baseHref + 'designs/iw3dwithreflection_by_zmote-d5t47ok.png',
    GalleryConstants.baseHref + 'designs/kermes2013_by_zmote-d608dab.jpg',
    GalleryConstants.baseHref + 'designs/logofinal.jpg',
    GalleryConstants.baseHref + 'designs/Mehmet Dogan pm2world Visitenkarte.jpg',
    GalleryConstants.baseHref + 'designs/MPM GmbH Logo Neu ok.jpg',
    GalleryConstants.baseHref + 'designs/new_facebook_avatar_by_zmote-dborjiz.jpg',
    GalleryConstants.baseHref + 'designs/Oberuzwil Pinocchip 4-Seitig PDF-1.jpg',
    GalleryConstants.baseHref + 'designs/pinochio_back.jpg',
    GalleryConstants.baseHref + 'designs/pinochio_front.jpg',
    GalleryConstants.baseHref + 'designs/rejected_logo_desgns____by_zmote-d5xkz9m.jpg',
    GalleryConstants.baseHref + 'designs/some_icon_designs_by_zmote-dazfkq1.jpg',
    GalleryConstants.baseHref + 'designs/some_inbetween_design_work_by_zmote-d6oamv8.jpg',
    GalleryConstants.baseHref + 'designs/säntis.jpg',
    GalleryConstants.baseHref + 'designs/tomateKurierIcon2.jpg',
    GalleryConstants.baseHref + 'designs/tomateKurierIcon3D.jpg',
    GalleryConstants.baseHref + 'designs/wanna_be_friends__by_zmote-d5rypzq.jpg'
];
//# sourceMappingURL=GalleryConstants.js.map

/***/ }),

/***/ "../../../../../src/constants/RoutesContainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appHome_appHome_component__ = __webpack_require__("../../../../../src/appHome/appHome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code_component__ = __webpack_require__("../../../../../src/code/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GalleryConstants__ = __webpack_require__("../../../../../src/constants/GalleryConstants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_container_gallery_container_component__ = __webpack_require__("../../../../../src/gallery-container/gallery-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_animation_component__ = __webpack_require__("../../../../../src/animation/animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notfound_notfound_component__ = __webpack_require__("../../../../../src/notfound/notfound.component.ts");
/**
 * Created by Zmote on 26.10.2017.
 */








var RoutesContainer = (function () {
    function RoutesContainer() {
    }
    return RoutesContainer;
}());

RoutesContainer.appRoutes = [
    {
        path: '3d',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_container_gallery_container_component__["a" /* GalleryComponent */],
        data: {
            title: '3D Gallery',
            description: 'Here are some examples of my 3D Work. Click on the image previews to enlarge.',
            links: __WEBPACK_IMPORTED_MODULE_4__GalleryConstants__["a" /* GalleryConstants */].threeDImageArray
        }
    },
    {
        path: '2d',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_container_gallery_container_component__["a" /* GalleryComponent */],
        data: {
            title: '2D Gallery',
            description: 'Here are some examples of my 2D Work. Click on the image previews to enlarge.',
            links: __WEBPACK_IMPORTED_MODULE_4__GalleryConstants__["a" /* GalleryConstants */].twoDImageArray
        }
    },
    {
        path: 'concept',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_container_gallery_container_component__["a" /* GalleryComponent */],
        data: {
            title: 'Concept Gallery',
            description: 'Here are some examples of my various conceptual works. Click on the image previews to enlarge.',
            links: __WEBPACK_IMPORTED_MODULE_4__GalleryConstants__["a" /* GalleryConstants */].conceptImageArray
        }
    },
    {
        path: 'design',
        component: __WEBPACK_IMPORTED_MODULE_5__gallery_container_gallery_container_component__["a" /* GalleryComponent */],
        data: {
            title: 'Design Gallery',
            description: 'Here are some examples of my Design and Vector work. Click on the image previews to enlarge.',
            links: __WEBPACK_IMPORTED_MODULE_4__GalleryConstants__["a" /* GalleryConstants */].designImageArray
        }
    },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'code', component: __WEBPACK_IMPORTED_MODULE_2__code_code_component__["a" /* CodeComponent */] },
    { path: 'animation', component: __WEBPACK_IMPORTED_MODULE_6__animation_animation_component__["a" /* AnimationComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__appHome_appHome_component__["a" /* AppHomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__notfound_notfound_component__["a" /* NotFoundComponent */] }
];
//# sourceMappingURL=RoutesContainer.js.map

/***/ }),

/***/ "../../../../../src/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main{\n  margin-top:2rem;\n  margin-bottom: 2rem;\n}\n\n.card{\n  padding:2rem;\n}\n\n.card-block{\n  height:100%;\n}\n\n.card-img-top{\n  height:100px;\n  width:70px;\n  margin-bottom:1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container-fluid\">\n      <h1 class=\"jumbotron-heading\">Contact</h1>\n      <p class=\"lead text-dark\">Are you interested in my skills? Do you want to realize a project with me? If so, send\n        me an e-mail to\n        <a href=\"mailto:info@z-motions.ch\" class=\"font-weight-bold\">info@z-motions.ch</a>\n        and we can discuss the specifics.</p>\n    </div>\n    <a routerLink=\"/\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to Home</a>\n  </section>\n  <section class=\"container-fluid cards\">\n    <div class=\"row mx-auto text-center\">\n      <h2 class=\"col-md-12\">What are my rates?</h2>\n      <p class=\"col-md-8 mx-auto\">As my proficiency is different from subject to subject, I charge differently depending on the\n        project type. Below are some rates to give you an idea of how much I charge what kind of projects.\n        All rates are hourly rates. Keep in mind, these are only estimates.</p>\n    </div>\n    <div class=\"row mx-auto\">\n      <div class=\"card col-md-2\">\n        <img class=\"card-img-top\" [src]=\"baseHref + 'symbols/design_symbol.png'\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">3D</h4>\n          <p class=\"card-text\">From Models, Props to Rigs and Scenes. For 3D Work, I charge:</p>\n          <h4>25$ per hour</h4>\n        </div>\n      </div>\n      <div class=\"card col-md-2\">\n        <img class=\"card-img-top\" [src]=\"baseHref + 'symbols/design_symbol.png'\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">2D</h4>\n          <p class=\"card-text\">From Landscape Artwork, Comics, Paintings and Illustrations. For 2D Work, I charge:</p>\n          <h4>20$ per hour</h4>\n        </div>\n      </div>\n      <div class=\"card col-md-2\">\n        <img class=\"card-img-top\" [src]=\"baseHref + 'symbols/design_symbol.png'\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Design</h4>\n          <p class=\"card-text\">From Flyers, Logos, Brochures to Webelements; Magazine Designs, Business Cards and UI Designs. For Design Work, I charge:</p>\n          <h4>35$ per hour</h4>\n        </div>\n      </div>\n      <div class=\"card col-md-2\">\n        <img class=\"card-img-top\" [src]=\"baseHref + 'symbols/design_symbol.png'\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Concept</h4>\n          <p class=\"card-text\">From Character Development, Scene Concepts to Vehicle Prototypes. For any kind of conceptual work I charge:</p>\n          <h4>20$ per hour</h4>\n        </div>\n      </div>\n      <div class=\"card col-md-2\">\n        <img class=\"card-img-top\" [src]=\"baseHref + 'symbols/design_symbol_w_v2.png'\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Animations</h4>\n          <p class=\"card-text\">From 3D Animations, 2D Animations to simple Logo Animations or animated elements of any kind. For Animation Work I charge:</p>\n          <h4>30$ per hour</h4>\n        </div>\n      </div>\n      <div class=\"card col-md-2\">\n        <img class=\"card-img-top\" [src]=\"baseHref + 'symbols/design_symbol_s.png'\" alt=\"Card image cap\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Coding</h4>\n          <p class=\"card-text\">I'm a professional software engineer. From Websites, Desktop Apps to Mobile Apps, I charge:</p>\n          <h4>40$ per hour</h4>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__ = __webpack_require__("../../../../../src/constants/GalleryConstants.ts");
/**
 * Created by Zmote on 25.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactComponent = (function () {
    function ContactComponent() {
        this.baseHref = __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__["a" /* GalleryConstants */].baseHref;
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/contact/contact.component.css")]
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"fixed-bottom bg-dark footer d-none d-sm-block\">\n  <div class=\"container text-center\">\n    <span class=\"text-muted\">Developed with <a href=\"https://angular.io/\">Angular 4</a> by Zmote aka <a href=\"https://www.linkedin.com/in/zafer-dogan-20133186/\">Zafer Dogan</a> &#9400;2017. All rights reserved.</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by Zmote on 21.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer-main',
        template: __webpack_require__("../../../../../src/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/footer/footer.component.css")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/gallery-container/gallery-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main{\n  margin-top:1rem;\n}\n\n.col-md-4, .col-md-3{\n  padding:0;\n  margin:0;\n}\n\n.thumbs > img{\n  overflow:hidden;\n  height:100px;\n  width:auto;\n}\n\n.card:hover{\n  cursor:pointer;\n  -webkit-filter: brightness(50%);\n          filter: brightness(50%);\n}\n\n#exampleModalLong img{\n  width:auto;\n  max-height:88vh;\n  max-width: 100vw;\n  margin:auto;\n}\n\n#exampleModalLong{\n  padding:0 !important;\n  margin:0 !important;\n  cursor:pointer;\n}\n\n.modal-body{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  height:88vh;\n  width:100%;\n  padding:0;\n}\n\n.modal-dialog{\n  max-width:none;\n  height:100%;\n  margin:auto;\n}\n\n.closeButton > span{\n  color:white;\n  z-index:1051;\n}\n\n.jumbotron{\n  margin-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/gallery-container/gallery-container.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n\n  <section class=\"jumbotron text-center\">\n    <div class=\"container-fluid\">\n      <h1 class=\"jumbotron-heading\" [innerHtml]=\"title\"></h1>\n      <p class=\"lead text-dark\" [innerHtml]=\"description\">Sample description</p>\n    </div>\n    <a routerLink=\"/\" routerLinkActive=\"true\" class=\"btn btn-primary\">Back to Home</a>\n  </section>\n\n  <div class=\"album text-muted\">\n    <div class=\"container-fluid\">\n      <div class=\"row thumbs\">\n        <div class=\"card col-md-3\" data-toggle=\"modal\" data-target=\"#exampleModalLong\" *ngFor=\"let image of imageArray\">\n          <img (click)=\"loadImage($event)\" alt=\"Gallery picture\"\n               style=\"height:280px; width:100%\" src=\"{{image}}\" data-holder-rendered=\"true\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n</main>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n     aria-hidden=\"true\">\n  <button type=\"button\" class=\"btn btn-primary float-right\" data-dismiss=\"modal\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-body\">\n      <img src=\"\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/gallery-container/gallery-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/**
 * Created by Zmote on 24.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(route) {
        var _this = this;
        this.title = 'Sample Title';
        this.description = 'Sample description';
        route.data.subscribe(function (data) {
            _this.title = data.title;
            _this.description = data.description;
            _this.imageArray = data.links;
        });
    }
    GalleryComponent.prototype.loadImage = function (event) {
        $('#exampleModalLong').find('.modal-body').find('img').attr('src', event.target.src);
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gallery[class="container-fluid"]',
        template: __webpack_require__("../../../../../src/gallery-container/gallery-container.component.html"),
        styles: [__webpack_require__("../../../../../src/gallery-container/gallery-container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery-container.component.js.map

/***/ }),

/***/ "../../../../../src/infocards/infocards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-img-top{\n  width: 70px;\n  padding-bottom: 1rem;\n}\n\n.card{\n  padding: 1.5rem;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 576px){\n  .card{\n    margin-bottom: 2rem;\n    height:auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/infocards/infocards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-auto\" id=\"cardsHolder\">\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <img class=\"card-img-top\"\n           [src]=\"baseHref + 'symbols/design_symbol.png'\"\n           alt=\"Card image cap\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Designing your visual needs</h4>\n        <p class=\"card-text\">From 3D/2D Visuals to 3D/2D Animations, from Logo Designs to Magazine Designs, I provide I wide array of visual work.</p>\n        <a routerLink=\"/3d\" routerLinkActive=\"true\" class=\"btn btn-primary mb-1\">Go to 3D Gallery</a>\n        <a routerLink=\"/2d\" routerLinkActive=\"true\" class=\"btn btn-primary mb-1\">Go to 2D Gallery</a>\n        <a routerLink=\"/design\" routerLinkActive=\"true\" class=\"btn btn-primary mb-1\">Go to Design Gallery</a>\n        <a routerLink=\"/concept\" routerLinkActive=\"true\" class=\"btn btn-primary mb-1\">Go to Concept Gallery</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <img class=\"card-img-top\"\n           [src]=\"baseHref + '/symbols/design_symbol_s.png'\"\n           alt=\"Card image cap\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">Software solutions of all kind</h4>\n        <p class=\"card-text\">I'm a professional softwar engineer. From Desktop based solutions to Web based solutions, I can provide it for you.</p>\n        <a routerLink=\"/code\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to Coding section</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <img class=\"card-img-top\"\n           [src]=\"baseHref + '/symbols/design_symbol_w_v2.png'\"\n           alt=\"Card image cap\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">A flexible workhorse</h4>\n        <p class=\"card-text\">I'm an extra occupational student and therefore are very flexible with my time. Be at in the morning or late at night, I'll finish your work on time.</p>\n        <a  routerLink=\"/about\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to About section</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/infocards/infocards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__ = __webpack_require__("../../../../../src/constants/GalleryConstants.ts");
/**
 * Created by Zmote on 24.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InfoCardComponent = (function () {
    function InfoCardComponent() {
        this.baseHref = __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__["a" /* GalleryConstants */].baseHref;
    }
    return InfoCardComponent;
}());
InfoCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-card',
        template: __webpack_require__("../../../../../src/infocards/infocards.component.html"),
        styles: [__webpack_require__("../../../../../src/infocards/infocards.component.css")]
    })
], InfoCardComponent);

//# sourceMappingURL=infocards.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-logo{\n  width:2vw;\n  height:3vh;\n}\n\n.nav-link:hover{\n  color:white;\n  font-weight:bold;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.nav-active{\n  font-weight: bold;\n}\n\n@media (max-width: 768px){\n  .nav-link:hover{\n    font-size:1.2em;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n.nav-link{\n  color: #f0f0f0 !important;\n}\n\n.fa-bars{\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"\">Z-Motions</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mx-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/3d\" routerLinkActive=\"nav-active\">3D</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/2d\" routerLinkActive=\"nav-active\">2D</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/design\" routerLinkActive=\"nav-active\">Design</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/concept\" routerLinkActive=\"nav-active\">Concept</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/animation\" routerLinkActive=\"nav-active\">Animation</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/code\" routerLinkActive=\"nav-active\">Coding</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"nav-active\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"nav-active\">Contact</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by Zmote on 21.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = (function () {
    function NavComponent() {
    }
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-main',
        template: __webpack_require__("../../../../../src/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/navigation/navigation.component.css")]
    })
], NavComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main{\n  margin-top:2rem;\n}\n\n.jumbotron{\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  padding:0 !important;\n  margin:0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <section class=\"jumbotron text-center d-flex\">\n    <div class=\"container-fluid align-self-center\">\n      <h1 class=\"jumbotron-heading fa-2x\">404</h1>\n      <h1><span class=\"fa fa-frown-o \"></span></h1>\n      <p class=\"lead text-dark\">Page not found. Sorry.</p>\n      <a routerLink=\"/\" routerLinkActive=\"true\" class=\"btn btn-primary\">Go to Home</a>\n    </div>\n  </section>\n</main>\n"

/***/ }),

/***/ "../../../../../src/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by Zmote on 28.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__("../../../../../src/notfound/notfound.component.html"),
        styles: [__webpack_require__("../../../../../src/notfound/notfound.component.css")]
    })
], NotFoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/slideshow/slideshow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-item{\n  height:32rem;\n  overflow:hidden;\n}\n\n.carousel-item img{\n  min-height:32rem;\n  width:auto !important;\n}\n\n.carousel-caption{\n  margin-bottom:7rem !important;\n  background-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.7) 65%, transparent 100%);\n}\n\n.carousel-caption > h3{\n  font-size:2.4rem;\n}\n\n.carousel-caption > p{\n  font-size:1.2rem;\n  text-shadow: 0 0 10px rgba(0,0,0,0.3) !important;\n  font-family: Quicksand, sans-serif;\n  padding:1rem 8rem;\n}\n\n\n@media (max-width: 576px) {\n  #slideAlternative {\n    margin-top: 3.5rem;\n    margin-bottom: -1rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .carousel-caption > h3{\n    font-size:2rem;\n  }\n\n  .carousel-caption > p{\n    font-size:0.9rem;\n    font-family: Quicksand, sans-serif;\n    padding:1rem 1rem;\n  }\n\n  .carousel-caption{\n    margin-bottom:4.0rem;\n  }\n}\n\n@media (min-width: 992px) {\n  .carousel-caption{\n    margin-bottom:2.5em;\n  }\n  .carousel-caption > p{\n    padding:1rem 1rem;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/slideshow/slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-block d-sm-none mx-auto\" id=\"slideAlternative\">\n  <div class=\"col-md-12 my-auto\">\n    <h1>Z-Motions</h1>\n    <p>Some quick example text to build on the card title and make up the bulk of the card's\n      content.</p>\n  </div>\n</div>\n<div id=\"carouselExampleIndicators\" class=\"carousel slide mx-auto d-none d-sm-block my-auto\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"w-100\" [src]=\"baseHref + 'slideshow/wanna_be_friends__by_zmote-d5rypzq.jpg'\" alt=\"First slide\">\n      <div class=\"carousel-caption d-none d-sm-block\">\n        <h3>Z-Motions for all your needs</h3>\n        <p>I provide a wide arrange of services, from 3D/2D Animation to Programming of Web and Desktop applications. Whatever your needs, let's figure out a solution together.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"w-100\" [src]=\"baseHref + 'slideshow/2d3dgallery_zmf.jpg'\" alt=\"Second slide\">\n      <div class=\"carousel-caption d-none d-sm-block\">\n        <h3>3D/2D Visuals</h3>\n        <p>I'm a self-taught artist. I've worked in the field for about 4-5 years as a freelancer graphics designer. In my time as a freelancer and in the time after I've accumulated\n        knowledge in various areas. From Logo Designs to 3D/2D Animations, I'm produce the visuals you need.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"w-100\" [src]=\"baseHref + 'slideshow/programming.jpg'\" alt=\"Third slide\">\n      <div class=\"carousel-caption d-none d-sm-block\">\n        <h3>Programming</h3>\n        <p>I'm a professional software engineer. From Desktop Applications to Web based solutions, I provide a wide array of services. Let's work out your requirements and deliver you a great product.</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"fa fa-angle-left fa-4x\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"fa fa-angle-right fa-4x\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/slideshow/slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__ = __webpack_require__("../../../../../src/constants/GalleryConstants.ts");
/**
 * Created by Zmote on 21.10.2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SlideShowComponent = (function () {
    function SlideShowComponent() {
        this.baseHref = __WEBPACK_IMPORTED_MODULE_1__constants_GalleryConstants__["a" /* GalleryConstants */].baseHref;
    }
    return SlideShowComponent;
}());
SlideShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-slide-show',
        template: __webpack_require__("../../../../../src/slideshow/slideshow.component.html"),
        styles: [__webpack_require__("../../../../../src/slideshow/slideshow.component.css")]
    })
], SlideShowComponent);

//# sourceMappingURL=slideshow.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map