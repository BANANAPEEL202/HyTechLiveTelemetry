export default ActiveRoleSynchronizer;
declare class ActiveRoleSynchronizer {
    constructor(openmct: any);
    openmct: any;
    setActiveRoleFromChannelMessage(event: any): void;
    subscribeToRoleChanges(callback: any): void;
    unsubscribeFromRoleChanges(callback: any): void;
    broadcastNewRole(role: any): false | undefined;
    destroy(): void;
    #private;
}
//# sourceMappingURL=ActiveRoleSynchronizer.d.ts.map