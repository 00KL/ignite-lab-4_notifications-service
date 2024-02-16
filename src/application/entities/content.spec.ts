import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notificaiton content', () => {
    const content = new Content('Hello, World!');

    expect(content.value).toBe('Hello, World!');
  });

  it('should not be able to create a notification content with less than 3 characters', () => {
    expect(() => {
      new Content('Hi');
    }).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => {
      new Content(''.repeat(255));
    }).toThrow();
  });
});
