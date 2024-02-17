import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

type CountRecipientNotificationsResponse = { count: number };

/// A vantagem de usar as interfaces acima criadas é que uma vez que
/// se obdece ao SOLID as interfaces não terão as propriedades atuais
/// removidas, apenas novas acrescentadas.
/// Então, se uma aplicação esperar receber de volta um Notification ela irá
/// receber uma instância de Notification certamente.
@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count =
      await this.notificationRepository.countManyByRecipientId(recipientId);

    return {
      count,
    };
  }
}
