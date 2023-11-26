export default tooltipHelpers;
declare namespace tooltipHelpers {
    namespace methods {
        function getTelemetryPathString(telemetryIdentifier: any): Promise<string | undefined>;
        function getObjectPath(objectIdentifier: any): any;
        function buildToolTip(tooltipText: any, tooltipLocation: any, elementRef: any): void;
        function hideToolTip(): void;
    }
}
//# sourceMappingURL=tooltipMixins.d.ts.map