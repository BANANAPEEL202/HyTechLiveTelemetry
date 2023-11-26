export default Overlay;
declare class Overlay {
    constructor({ buttons, autoHide, dismissable, element, onDestroy, onDismiss, size }?: {
        buttons: any;
        autoHide?: boolean | undefined;
        dismissable?: boolean | undefined;
        element: any;
        onDestroy: any;
        onDismiss: any;
        size: any;
    });
    container: HTMLDivElement;
    autoHide: boolean;
    dismissable: boolean;
    destroy: any;
    dismiss(): void;
    notifyAndDismiss(): void;
    /**
     * @private
     **/
    private show;
}
//# sourceMappingURL=Overlay.d.ts.map