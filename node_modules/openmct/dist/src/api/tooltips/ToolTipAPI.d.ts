export default TooltipAPI;
/**
 * The TooltipAPI is responsible for adding custom tooltips to
 * the desired elements on the screen
 *
 * @memberof api/tooltips
 * @constructor
 */
declare class TooltipAPI {
    activeToolTips: any[];
    TOOLTIP_LOCATIONS: Readonly<{
        ABOVE: "above";
        BELOW: "below";
        RIGHT: "right";
        LEFT: "left";
        CENTER: "center";
    }>;
    /**
     * @private for platform-internal use
     */
    private showTooltip;
    /**
     * API method to allow for removing all tooltips
     */
    removeAllTooltips(): void;
    /**
     * A description of option properties that can be passed into the tooltip
     * @typedef {Object} TooltipOptions
     * @property {string} tooltipText text to show in the tooltip
     * @property {TOOLTIP_LOCATIONS} tooltipLocation location to show the tooltip relative to the parentElement
     * @property {HTMLElement} parentElement reference to the DOM node we're adding the tooltip to
     */
    /**
     * Tooltips take an options object that consists of the string, tooltipLocation, and parentElement
     * @param {TooltipOptions} options
     */
    tooltip(options: {
        /**
         * text to show in the tooltip
         */
        tooltipText: string;
        /**
         * location to show the tooltip relative to the parentElement
         */
        tooltipLocation: TOOLTIP_LOCATIONS;
        /**
         * reference to the DOM node we're adding the tooltip to
         */
        parentElement: HTMLElement;
    }): Tooltip;
}
/**
 * TooltipLocation
 */
type TOOLTIP_LOCATIONS = string;
/**
 * @readonly
 * @enum {String} TooltipLocation
 * @property {String} ABOVE The string for locating tooltips above an element
 * @property {String} BELOW The string for locating tooltips below an element
 * @property {String} RIGHT The pixel-spatial annotation type
 * @property {String} LEFT The temporal annotation type
 * @property {String} CENTER The plot-spatial annotation type
 */
declare const TOOLTIP_LOCATIONS: Readonly<{
    ABOVE: "above";
    BELOW: "below";
    RIGHT: "right";
    LEFT: "left";
    CENTER: "center";
}>;
import Tooltip from './ToolTip';
//# sourceMappingURL=ToolTipAPI.d.ts.map