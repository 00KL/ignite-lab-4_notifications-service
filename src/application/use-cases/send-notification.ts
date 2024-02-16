import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { NotificationRepository } from '../repositories/notification-repository';
import { Notification } from './../entities/notification';
interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

/// A vantagem de usar as interfaces acima criadas é que uma vez que
/// se obdece ao SOLID as interfaces não terão as propriedades atuais
/// removidas, apenas novas acrescentadas.
/// Então, se uma aplicação esperar receber de volta um Notification ela irá
/// receber uma instância de Notification certamente.
@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // Persistir essa notificação no banco de dados
    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
