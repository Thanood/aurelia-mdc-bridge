System.register(["aurelia-framework", "../util"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, util, MdcCardTitle;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcCardTitle = (function () {
                function MdcCardTitle() {
                    this.large = true;
                    this.showTitle = true;
                    this.showSubtitle = true;
                    this.showLarge = true;
                }
                MdcCardTitle.prototype.attached = function () {
                    if (!this.isAvatar) {
                        var avatarElement = this.elementPrimary.firstChild;
                        if (avatarElement) {
                            avatarElement.style.position = 'absolute';
                        }
                        this.elementPrimary.classList.add('mdc-mdc-card-avatar');
                    }
                    this.titleChanged(this.title);
                    this.subtitleChanged(this.subtitle);
                    this.largeChanged(this.large);
                };
                MdcCardTitle.prototype.titleChanged = function (newValue) {
                    this.showTitle = false;
                    this.showTitle = (newValue && newValue.length > 0);
                };
                MdcCardTitle.prototype.subtitleChanged = function (newValue) {
                    this.showSubtitle = false;
                    this.showSubtitle = (newValue && newValue.length > 0);
                };
                MdcCardTitle.prototype.largeChanged = function (newValue) {
                    this.showLarge = util.getBoolean(newValue);
                };
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcCardTitle.prototype, "class", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcCardTitle.prototype, "title", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcCardTitle.prototype, "subtitle", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcCardTitle.prototype, "large", void 0);
                MdcCardTitle = __decorate([
                    aurelia_framework_1.containerless(),
                    aurelia_framework_1.customElement('mdc-card-title')
                ], MdcCardTitle);
                return MdcCardTitle;
            }());
            exports_1("MdcCardTitle", MdcCardTitle);
        }
    };
});
