import { INotification } from "../interface/INotification";
export class NotificationService{

    public processNotifications(notifications:INotification[]):void{
        console.log("Analizando notificaciones por bloque\n\n");
        for(const notification of notifications){
            notification.send();
        }
        console.log("Finalizacion del bloque de notificacion\n\n");
    }
}