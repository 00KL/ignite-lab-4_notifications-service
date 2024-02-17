import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: any): Notification {
    return new Notification({
      id: raw.id,
      recipientId: raw.recipientId,
      content: raw.content,
      category: raw.category,
      readAt: raw.readAt,
      createdAt: raw.createdAt,
    });
  }
}
