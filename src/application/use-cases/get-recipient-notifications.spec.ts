import { GetRecipientNotifications } from './get-recipient-notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('GetRecipient Notification', () => {
  it('should be able to Get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-test',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-test' }),
        expect.objectContaining({ recipientId: 'recipient-test' }),
      ]),
    );
  });
});
