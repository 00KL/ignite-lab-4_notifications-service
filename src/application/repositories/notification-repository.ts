import { Notification } from '@application/entities/notification';

export abstract class NotificationRepository {
  abstract findById(Notification: string): Promise<Notification | null>;
  abstract create(notification: Notification): Promise<void>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
