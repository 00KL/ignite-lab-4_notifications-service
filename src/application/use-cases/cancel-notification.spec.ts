import { CancelNotification } from './Cancel-notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel Notification', () => {
  it('should be able to Cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    );
  });
  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(
      cancelNotification.execute({
        notificationId: 'non-existent-notification',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
