(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\guardian\src\main.ts */"zUnb");


/***/ }),

/***/ "7DvR":
/*!************************************!*\
  !*** ./src/app/get-api.service.ts ***!
  \************************************/
/*! exports provided: GetApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApiService", function() { return GetApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class GetApiService {
    constructor(http) {
        this.http = http;
    }
    apiCall(id) {
        //alert(id);
        //return this.http.get('https://guardianeb.com/api/typing-practice/22');
        return this.http.get('https://guardianeb.com/api/typing-practice/' + id);
    }
}
GetApiService.ɵfac = function GetApiService_Factory(t) { return new (t || GetApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetApiService, factory: GetApiService.ɵfac, providedIn: 'root' });


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

/***/ "ENxF":
/*!**************************************************!*\
  !*** ./src/app/textfield/textfield.component.ts ***!
  \**************************************************/
/*! exports provided: TextfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldComponent", function() { return TextfieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["input"];
class TextfieldComponent {
    constructor() {
        this._disabled = true;
        this.typing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set disabled(val) {
        this._disabled = val;
        if (!val) {
            this.inputRef.nativeElement.value = '';
            const timeout = setTimeout(() => {
                this.inputRef.nativeElement.focus();
                clearTimeout(timeout);
            }, 100);
        }
    }
    get disabled() {
        return this._disabled;
    }
    ngOnInit() {
    }
    onKeyup(e) {
        this.typing.emit({
            value: e.target.value,
            key: e.key
        });
    }
    onKeydownSpace(e) {
        if (!e.target.value || e.target.value.endsWith(' ')) {
            // Not allowing more than one space
            e.preventDefault();
            return;
        }
    }
    restrictKeys(e) {
        // Not allowing enter key
        e.preventDefault();
        return;
    }
}
TextfieldComponent.ɵfac = function TextfieldComponent_Factory(t) { return new (t || TextfieldComponent)(); };
TextfieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextfieldComponent, selectors: [["app-textfield"]], viewQuery: function TextfieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
    } }, inputs: { disabled: "disabled" }, outputs: { typing: "typing" }, decls: 2, vars: 1, consts: [["placeholder", "Start typing here...", 1, "no-selection", 3, "disabled", "keydown.Enter", "keydown.ArrowLeft", "keydown.Space", "keyup", "paste"], ["input", ""]], template: function TextfieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.Enter", function TextfieldComponent_Template_textarea_keydown_Enter_0_listener($event) { return ctx.restrictKeys($event); })("keydown.ArrowLeft", function TextfieldComponent_Template_textarea_keydown_ArrowLeft_0_listener($event) { return ctx.restrictKeys($event); })("keydown.Space", function TextfieldComponent_Template_textarea_keydown_Space_0_listener($event) { return ctx.onKeydownSpace($event); })("keyup", function TextfieldComponent_Template_textarea_keyup_0_listener($event) { return ctx.onKeyup($event); })("paste", function TextfieldComponent_Template_textarea_paste_0_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, styles: ["[_nghost-%COMP%] {\r\n  padding: 16px;\r\n  display: block;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  outline: none;\r\n  width: 100%;\r\n  min-height: 100px;\r\n  height: -webkit-max-content;\r\n  height: max-content;\r\n  padding: 16px;\r\n  margin: 0;\r\n  resize: none;\r\n}\r\n.no-selection[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -webkit-touch-callout: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRmaWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InRleHRmaWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4ubm8tc2VsZWN0aW9uIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "LV43":
/*!****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _get_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-api.service */ "7DvR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ScoreboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time left: ", ctx_r0.time, " seconds");
} }
function ScoreboardComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time's up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreboardComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0(New)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ScoreboardComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.paragraphs = [{ text: '' }];
        this.dataarray = Array();
        this._start = false;
        this.timesUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.records = {
            best: 0,
            last: 0
        };
        this.lastBest = this.records.best;
        //super(('https://guardianeb.com/api/typing-practice/22'),'hello'); // Call the parent class's constructor
        console.log('from cononentst');
        this.route.queryParams.subscribe((params) => {
            this.api.apiCall(params.test_id).subscribe((data) => {
                this.myvar = data;
                this.myprocess();
                this.dataarray.push("arrayvalue");
            });
        });
        this.paragraphs = this.dataarray;
    }
    myprocess() {
        this.paragraphs = [{ text: this.myvar['data']['paragraph'] }];
        this.time_limit = this.myvar['data']['time_limit'];
        this.totalword = this.myvar['data']['paragraph'].match(/\w+/g).length;
        this.time = this.time_limit * 60;
        console.log('timing', this.time * 60);
        //console.log('data',this.myvar['data']['paragraph']);
        //this.resetTest();
        this.defaultTime = this.time;
    }
    set start(val) {
        this._start = val;
        if (val) {
            this.time = this.defaultTime;
            this.lastBest = this.records.best;
            this.startTimer();
        }
        else if (this.timer) {
            this.timesUp.emit(this.time);
            this.timer.unsubscribe();
        }
    }
    get start() {
        return this._start;
    }
    // constructor() { }
    ngOnInit() {
        this.lastBest = this.records.best;
    }
    startTimer() {
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000).subscribe(res => {
            if (res === this.defaultTime) {
                this.time = 0;
                this.timesUp.emit(0);
                this.timer.unsubscribe();
                this.timer = null;
            }
            else {
                this.time--;
            }
        });
    }
}
ScoreboardComponent.ɵfac = function ScoreboardComponent_Factory(t) { return new (t || ScoreboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_api_service__WEBPACK_IMPORTED_MODULE_2__["GetApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ScoreboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreboardComponent, selectors: [["app-scoreboard"]], inputs: { start: "start", score: "score", records: "records" }, outputs: { timesUp: "timesUp" }, decls: 18, vars: 9, consts: [["class", "timer", 4, "ngIf"], [1, "main-section"], [1, "scores-section"], [1, "wpm"], [1, "errors"], [1, "score"], [1, "records"], [1, "accuracy"], [1, "best"], ["class", "new-best", 4, "ngIf"], [1, "last"], [1, "timer"], [1, "new-best"]], template: function ScoreboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScoreboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreboardComponent_h2_1_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ScoreboardComponent_span_15_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Words per minute: ", ctx.score.wpm, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wrong Words ", ctx.score.errors, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Words: ", ctx.score.total, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Accuracy: ", ctx.score.accuracy, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Correct Words : ", ctx.score.correct, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastBest < ctx.records.best);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inaccuracy: ", ctx.score.inaccuracy, "%");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  text-align: center;\r\n  padding: 16px;\r\n}\r\n.timer[_ngcontent-%COMP%]{\r\n  @media only screen and (max-width:768px) {\r\n    font-size: 20px;\r\n  };\r\n  @media only screen and (max-width:575px) {\r\n    font-size: 18px;\r\n  };\r\n  @media only screen and (max-width:450px) {\r\n    font-size: 16px;\r\n  }\r\n}\r\n.scores-section[_ngcontent-%COMP%], .records[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  background: mediumseagreen;\r\n  font-size: 1.2rem;\r\n  width: 100%;\r\n  justify-content: center;\r\n  @media only screen and (max-width:768px) {\r\n    font-size: 18px;\r\n  }\r\n  @media only screen and (max-width:575px) {\r\n    font-size: 14px;\r\n  }\r\n\r\n}\r\n.main-section[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  \r\n  padding: 8px;\r\n  \r\n  color: #fff;\r\n  border: 1px solid;\r\n  \r\n  \r\n}\r\n.new-best[_ngcontent-%COMP%] {\r\n  color: yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzY29yZWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLnRpbWVye1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuLnNjb3Jlcy1zZWN0aW9uLFxyXG4ucmVjb3JkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IG1lZGl1bXNlYWdyZWVuO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubWFpbi1zZWN0aW9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IHtcclxuICAvKiBmbGV4LWdyb3c6IDE7ICovXHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIC8qIGZsZXgtYmFzaXM6IDA7ICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLm5ldy1iZXN0IHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _get_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-api.service */ "7DvR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.stopTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    //userData$:Observable<any>;
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.paragraphs = [{ text: '' }];
        this.dataarray = Array();
        //title="normal value";
        //console.warn(title);
        // this.paragraphs.push(text:"this is third nbcjkssjkjb sjcbsjckscns cjksc skc sjkcb sjkcbs cksbc sk");
        this.upcomingSentence = '';
        this.nextWord = '';
        this.previousWords = [];
        this.allWords = [];
        this.selectedParagraph = '';
        this.startTyping = false;
        this.score = {
            wpm: 0,
            errors: 0,
            total: 0,
            accuracy: 0,
            inaccuracy: 0,
            incorrect: 0,
            correct: 0
        };
        this.records = {
            best: parseInt(localStorage.getItem('best') || '0', 10),
            last: parseInt(localStorage.getItem('last') || '0', 10)
        };
        this.route.queryParams.subscribe((params) => {
            this.api.apiCall(params.test_id).subscribe((data) => {
                this.myvar = data;
                this.myprocess();
                this.dataarray.push("arrayvalue");
            });
        });
        this.paragraphs = this.dataarray;
    }
    myprocess() {
        this.paragraphs = [{ text: this.myvar['data']['paragraph'] }];
        this.time_limit = this.myvar['data']['time_limit'];
        this.totalword = this.myvar['data']['paragraph'].match(/\w+/g).length;
        //console.log('total length',this.totalword);
        //console.log('time_taken',this.myvar['data']['time_limit']);
        //console.log('data',this.myvar['data']['paragraph']);
        this.resetTest();
        this.defaultTime = this.time_limit;
        this.defaultTime = this.defaultTime * 60;
    }
    ngOnInit() {
        //sleep(300);
    }
    //console.log(this.paragraphs);
    newWordEntered(e) {
        if (this.startTyping) {
            const typedWords = e.value.split(' ');
            const score = {
                wpm: 0,
                errors: 0,
                total: this.totalword,
                accuracy: 0,
                inaccuracy: 0,
                incorrect: 0,
                correct: 0
            };
            this.previousWords = [];
            for (let i = 0; i < typedWords.length - 1; i++) {
                const typedWord = typedWords[i];
                const originalWord = this.allWords[i];
                const wordInfo = {
                    hasError: false,
                    word: originalWord
                };
                if (typedWord === originalWord) {
                    // score.total += 10;
                }
                else {
                    //score.total -= 5;
                    wordInfo.hasError = true;
                    score.errors++;
                }
                this.previousWords.push(wordInfo);
            }
            this.nextWord = this.allWords[typedWords.length - 1];
            this.upcomingSentence = this.allWords.slice(typedWords.length).join(' ');
            this.score = score;
        }
    }
    startTimer() {
        if (this.previousWords.length) {
            //this.resetTest();
            this.records.last = parseInt(localStorage.getItem('last') || '0', 10);
        }
        if (!this.startTyping) {
            this.score = {
                wpm: 0,
                errors: 0,
                total: this.totalword,
                accuracy: 0,
                inaccuracy: 0,
                incorrect: 0,
                correct: 0
            };
            this.startTyping = true;
        }
    }
    stopTimer() {
        if (this.startTyping) {
            this.startTyping = false;
        }
    }
    resetTest() {
        this.previousWords = [];
        this.selectedParagraph = this.paragraphs[Math.floor(Math.random() * this.paragraphs.length)].text;
        const firstSpaceIndex = this.selectedParagraph.indexOf(' ');
        this.upcomingSentence = this.selectedParagraph.substr(firstSpaceIndex + 1);
        this.nextWord = this.selectedParagraph.substr(0, firstSpaceIndex);
        this.allWords = this.selectedParagraph.split(' ');
        this.score.total = this.totalword;
        console.log('total score', this.score.total);
    }
    timesUp(timeInSeconds) {
        this.startTyping = false;
        this.score.wpm = Math.floor(this.previousWords.length / ((this.defaultTime - timeInSeconds) / 60));
        //this.score.wpm = this.score.wpm
        console.log('wpm', timeInSeconds);
        console.log('defaulttime', this.defaultTime);
        this.score.accuracy = this.previousWords.length ? parseFloat((((this.previousWords.length - this.score.errors) / this.previousWords.length) * 100).toFixed(2)) : 0;
        this.score.incorrect = this.previousWords.length;
        this.score.correct = this.previousWords.length - this.score.errors;
        //console.log('incorrect',this.score.correct);
        // this.score.inaccuracy = 100-this.score.accuracy;
        this.score.total = this.totalword;
        this.score.inaccuracy = this.previousWords.length ? parseFloat((100 - ((this.previousWords.length - this.score.errors) / this.previousWords.length) * 100).toFixed(2)) : 0;
        //console.log(typeof this.score.accuracy);
        //localStorage.setItem('best', '24');
        // if (this.score.total > this.records.best) {
        //localStorage.setItem('best', this.score.correct.toString());
        //this.records.best = 92;
        //this.records.best = this.score.total;
        //}
        //localStorage.setItem('last', this.score.total.toString());
        //this.resetTest();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_api_service__WEBPACK_IMPORTED_MODULE_1__["GetApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 9, consts: [[3, "start", "score", "records", "timesUp"], [3, "typedWords", "nextWord", "upcomingSentence"], [3, "disabled", "typing"], [1, "actions"], [3, "click", 4, "ngIf"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scoreboard", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timesUp", function AppComponent_Template_app_scoreboard_timesUp_1_listener($event) { return ctx.timesUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-paragraph", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-textfield", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("typing", function AppComponent_Template_app_textfield_typing_3_listener($event) { return ctx.newWordEntered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("start", ctx.startTyping)("score", ctx.score)("records", ctx.records);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("typedWords", ctx.previousWords)("nextWord", ctx.nextWord)("upcomingSentence", ctx.upcomingSentence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.startTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.startTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startTyping);
    } }, styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\nmain[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 70%;\r\n  background-color: white;\r\n  padding: 0 24px 24px;\r\n  @media only screen and (max-width:768px) {\r\n    padding: 16px;\r\n    width: 85%;\r\n  };\r\n  @media only screen and (max-width:575px) {\r\n    padding: 10px;\r\n    width: 100%;\r\n  };\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  border: none;\r\n  margin: 16px;\r\n  width: 100px;\r\n  color: #8bc34a;\r\n  border: solid #8bc34a;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 4px;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  outline: none;\r\n  border: none;\r\n  background-color: #8bc34a;\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEI7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0FBQ0Y7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9O1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDE2cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGNvbG9yOiAjOGJjMzRhO1xyXG4gIGJvcmRlcjogc29saWQgIzhiYzM0YTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjMzRhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "LV43");
/* harmony import */ var _paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paragraph/paragraph.component */ "c8ya");
/* harmony import */ var _textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textfield/textfield.component */ "ENxF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










//import { RouterTestingModule } from '@angular/router/testing';
const routes = [
    {
        path: ':test_id',
        component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
    }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_2__["ScoreboardComponent"],
        _paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_3__["ParagraphComponent"],
        //RouterModule,
        _textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__["TextfieldComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], [_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_2__["ScoreboardComponent"],
    _paragraph_paragraph_component__WEBPACK_IMPORTED_MODULE_3__["ParagraphComponent"],
    //RouterModule,
    _textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__["TextfieldComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], []);
class AppRoutingModule {
}


/***/ }),

/***/ "c8ya":
/*!**************************************************!*\
  !*** ./src/app/paragraph/paragraph.component.ts ***!
  \**************************************************/
/*! exports provided: ParagraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphComponent", function() { return ParagraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ParagraphComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", word_r1.hasError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r1.word ? word_r1.word + " " : "");
} }
class ParagraphComponent {
    constructor(elementRef, renderer) {
        // this.scrollToElement();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.typedWords = [];
        this.nextWord = '';
        this.upcomingSentence = '';
    }
    // scrollToElement() {
    //   console.log('from scroll into');
    //   const element = this.elementRef.nativeElement.targetElement');
    //   console.log('from scroll into',element);
    //   //element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
    ngOnInit() {
    }
}
ParagraphComponent.ɵfac = function ParagraphComponent_Factory(t) { return new (t || ParagraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ParagraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParagraphComponent, selectors: [["app-paragraph"]], inputs: { typedWords: "typedWords", nextWord: "nextWord", upcomingSentence: "upcomingSentence" }, decls: 6, vars: 3, consts: [[1, "para_class"], ["class", "previous", 3, "error", 4, "ngFor", "ngForOf"], ["id", "targetElement", 1, "next"], [1, "upcoming"], [1, "previous"]], template: function ParagraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ParagraphComponent_span_1_Template, 2, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.typedWords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nextWord ? ctx.nextWord + " " : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcomingSentence);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\r\n  padding: 16px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n.para_class[_ngcontent-%COMP%]{\r\noverflow-y: auto;\r\nmax-height: 185px;\r\n\r\n\r\n}\r\n.previous[_ngcontent-%COMP%] {\r\n  opacity: 0.6;\r\n\r\n}\r\n.previous.error[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-weight: bold;\r\n  background-color: lightcyan;}\r\n.next[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: deepskyblue;\r\n  background-color: lightcyan;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUI7OztBQUdqQjtBQUNBO0VBQ0UsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwyQkFBMkIsQ0FBQztBQUU5QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InBhcmFncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxucCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG4ucGFyYV9jbGFzc3tcclxub3ZlcmZsb3cteTogYXV0bztcclxubWF4LWhlaWdodDogMTg1cHg7XHJcblxyXG5cclxufVxyXG4ucHJldmlvdXMge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuXHJcbn1cclxuLnByZXZpb3VzLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjt9XHJcblxyXG4ubmV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGRlZXBza3libHVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcclxufVxyXG4iXX0= */"] });


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