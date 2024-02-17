import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('CountRecipient Notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-test' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-test' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'another-recipient' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-test',
    });

    expect(count).toEqual(2);
  });
});
