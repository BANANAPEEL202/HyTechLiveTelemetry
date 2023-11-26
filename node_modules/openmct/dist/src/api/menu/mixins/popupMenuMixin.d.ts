declare namespace _default {
    namespace methods {
        /**
         * @private
         */
        function _calculatePopupPosition(menuElement: any): any;
        /**
         * @private
         */
        function _getMenuPositionBasedOnPlacement(menuDimensions: any): any;
        /**
         * @private
         */
        function _preventMenuOverflow(menuPosition: any, menuDimensions: any): {
            x: any;
            y: any;
        };
    }
    function mounted(): void;
    function data(): {
        top: string;
        left: string;
    };
    namespace computed {
        function styleObject(): any;
    }
}
export default _default;
//# sourceMappingURL=popupMenuMixin.d.ts.map