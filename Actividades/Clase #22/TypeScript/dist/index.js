"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotification_1 = require("./classes/EmailNotification");
const SmsNotification_1 = require("./classes/SmsNotification");
const NotificationService_1 = require("./services/NotificationService");
const email = new EmailNotification_1.EmailNotification("prueba@gmail.com", "Hola ISW-521", "Prueba");
const sms = new SmsNotification_1.SmsNotification("+506 8753 2167", "Recibiendo pin: 8756");
const queue = [email, sms];
const service = new NotificationService_1.NotificationService();
service.processNotifications(queue);
//# sourceMappingURL=index.js.map