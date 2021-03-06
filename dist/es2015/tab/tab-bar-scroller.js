var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, containerless, TaskQueue } from 'aurelia-framework';
import { MDCTabBarScroller } from '@material/tabs';
import * as util from '../util';
let MdcTabBarScroller = class MdcTabBarScroller {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.activeTabIndex = 0;
        this.ariaBefore = 'scroll back button';
        this.ariaNext = 'scroll forward button';
        this.icon = false;
        this.text = false;
        this.primary = false;
        this.accent = false;
        this.stopChangedEvent = false;
    }
    bind() { }
    unbind() { }
    attached() {
        this.taskQueue.queueTask(() => {
            this.icon = this.hasChildIcons();
            this.text = this.hasChildText();
            this.mdcTabBarScroller = new MDCTabBarScroller(this.elementTabBarScroller);
            this.activeTabIndexChanged(this.activeTabIndex);
            if (this.mdcTabBarScroller.tabBar) {
                this.mdcTabBarScroller.tabBar.listen('MDCTabBar:change', this.onChange.bind(this));
                this.mdcTabBarScroller.tabBar.preventDefaultOnClick = true;
            }
        });
        this.primaryChanged(this.primary);
        this.accentChanged(this.accent);
    }
    detached() {
        if (this.mdcTabBarScroller) {
            if (this.mdcTabBarScroller.tabBar) {
                this.mdcTabBarScroller.tabBar.unlisten('MDCTabBar:change', this.onChange.bind(this));
                this.mdcTabBarScroller.tabBar.destroy();
            }
            this.mdcTabBarScroller.destroy();
        }
    }
    onChange({ detail: tabs }) {
        this.stopChangedEvent = true;
        this.activeTabIndex = tabs.activeTabIndex;
        util.fireEvent(this.element, 'on-change', { detail: { activeTabIndex: tabs.activeTabIndex } });
    }
    activeTabIndexChanged(newValue) {
        if (this.stopChangedEvent) {
            this.stopChangedEvent = false;
            return;
        }
        const value = parseInt(newValue, 10);
        if (this.mdcTabBarScroller && this.mdcTabBarScroller.tabBar) {
            this.mdcTabBarScroller.tabBar.activeTabIndex = value;
        }
    }
    hasChildIcons() {
        const count = this.elementTabBar.getElementsByClassName('amb-tab-is-icon').length;
        return (count !== 0);
    }
    hasChildText() {
        const count = this.elementTabBar.getElementsByClassName('amb-tab-is-text').length;
        return (count !== 0);
    }
    iconChanged(newValue) {
        const value = util.getBoolean(newValue);
        if (!value) {
            this.elementTabBar.classList.remove('mdc-tab-bar--icons-with-text');
            this.elementTabBar.classList.remove('mdc-tab-bar--icon-tab-bar');
        }
        else {
            if (util.getBoolean(this.text)) {
                this.elementTabBar.classList.add('mdc-tab-bar--icons-with-text');
            }
            else {
                this.elementTabBar.classList.add('mdc-tab-bar--icon-tab-bar');
            }
        }
    }
    textChanged(newValue) {
        const value = util.getBoolean(newValue);
        if (!value) {
            this.elementTabBar.classList.remove('mdc-tab-bar--icons-with-text');
            if (util.getBoolean(this.icon)) {
                this.elementTabBar.classList.add('mdc-tab-bar--icon-tab-bar');
            }
        }
        else {
            if (util.getBoolean(this.icon)) {
                this.elementTabBar.classList.add('mdc-tab-bar--icons-with-text');
            }
        }
    }
    primaryChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-primary');
        if (value) {
            this.accent = false;
        }
    }
    accentChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-accent');
        if (value) {
            this.primary = false;
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "activeTabIndex", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "ariaBefore", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "ariaNext", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "icon", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "text", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "primary", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTabBarScroller.prototype, "accent", void 0);
MdcTabBarScroller = __decorate([
    containerless(),
    inject(Element, TaskQueue),
    __metadata("design:paramtypes", [Element, TaskQueue])
], MdcTabBarScroller);
export { MdcTabBarScroller };
