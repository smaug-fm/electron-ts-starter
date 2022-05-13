export class TimeoutError extends Error {
  name = TimeoutError.name;

  constructor(msg: string, timeout?: number) {
    super(`Timeout exceeded ${timeout}ms. ${msg}`);
  }
}

export class NotificationTimeoutError extends TimeoutError {
  name = NotificationTimeoutError.name;

  constructor(timeout?: number) {
    super(`Notification timed out.`, timeout);
  }
}

export class PrematureSpinWaitEndError extends Error {
  name = PrematureSpinWaitEndError.name;

  constructor() {
    super(`Spin-wait ended due to condition.`);
  }
}

export class UserStoppedError extends Error {
  name = UserStoppedError.name;
}

export class ClosedNotificationError extends UserStoppedError {
  name = ClosedNotificationError.name;

  constructor(notificationMessage: string) {
    super(`Closed notification ${notificationMessage}`);
  }
}
