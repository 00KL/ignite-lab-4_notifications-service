import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

/// A vantagem de usar as interfaces acima criadas é que uma vez que
/// se obdece ao SOLID as interfaces não terão as propriedades atuais
/// removidas, apenas novas acrescentadas.
/// Então, se uma aplicação esperar receber de volta um Notification ela irá
/// receber uma instância de Notification certamente.
@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
