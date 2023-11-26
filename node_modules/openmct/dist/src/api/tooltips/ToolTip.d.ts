export default Tooltip;
declare class Tooltip {
    constructor({ toolTipText, toolTipLocation, parentElement }?: {
        tooltipText: string;
        toolTipLocation: string;
        parentElement: null;
        toolTipText: any;
    });
    component: any;
    _destroy: any;
    isActive: boolean | null;
    destroy(): void;
    /**
     * @private
     **/
    private show;
}
//# sourceMappingURL=ToolTip.d.ts.map