import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

/// A vantagem de usar as interfaces acima criadas é que uma vez que
/// se obdece ao SOLID as interfaces não terão as propriedades atuais
/// removidas, apenas novas acrescentadas.
/// Então, se uma aplicação esperar receber de volta um Notification ela irá
/// receber uma instância de Notification certamente.
@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const selectedNotification =
      await this.notificationRepository.findById(notificationId);

    if (!selectedNotification) {
      throw new NotificationNotFound();
    }

    selectedNotification.cancel();
    await this.notificationRepository.save(selectedNotification);
  }
}
