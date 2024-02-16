import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Content('Hello, World!');
    const notification = new Notification({
      recipientId: 'recipient-id',
      content,
      category: 'category',
      createdAt: new Date(),
    });

    expect(notification.recipientId).toBe('recipient-id');
    expect(notification.content).toBe(content);
    expect(notification.category).toBe('category');
    expect(notification.createdAt).toBeInstanceOf(Date);
  });
});
