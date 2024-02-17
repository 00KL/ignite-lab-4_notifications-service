import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';

type Override = Partial<Notification>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    recipientId: 'recipient-test',
    content: new Content('Hello, World!'),
    category: 'category',
    ...override,
  });
}
