export interface IMdcDialogClickEvent extends CustomEvent {
    detail: boolean;
}
export declare class MdcDialog {
    private element;
    private static id;
    header: string;
    accept: string;
    cancel: string;
    scrollable: boolean;
    focusAt: HTMLElement;
    private log;
    private diagElement;
    private mdcElement;
    private mdcDialogFoundation;
    private controlId;
    constructor(element: Element);
    show(showDialog?: boolean): void;
    private bind();
    private unbind();
    private attached();
    private detached();
    private onButtonAccept();
    private onButtonCancel();
    private scrollableChanged(newValue);
    private onTransitionEnd(evt);
}
