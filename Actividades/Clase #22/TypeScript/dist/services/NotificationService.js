"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    processNotifications(notifications) {
        console.log("Analizando notificaciones por bloque\n\n");
        for (const notification of notifications) {
            notification.send();
        }
        console.log("Finalizacion del bloque de notificacion\n\n");
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=NotificationService.js.map