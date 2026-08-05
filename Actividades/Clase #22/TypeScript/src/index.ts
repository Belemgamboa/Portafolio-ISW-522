import { INotification } from "./interface/INotification";
import { EmailNotification } from "./classes/EmailNotification";
import { SmsNotification } from "./classes/SmsNotification";
import { NotificationService } from "./services/NotificationService";

const email = new EmailNotification("prueba@gmail.com", "Hola ISW-521", "Prueba");
const sms = new SmsNotification("+506 8753 2167", "Recibiendo pin: 8756");
const queue : INotification[]=[email,sms];
const service = new NotificationService();
service.processNotifications(queue);