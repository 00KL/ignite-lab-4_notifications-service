import { SendNotification } from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'recipient-id',
      content: 'Hello, World!',
      category: 'category',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
