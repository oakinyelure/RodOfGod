import { MessageStoreModule } from './message-store.module';

describe('MessageStoreModule', () => {
  let messageStoreModule: MessageStoreModule;

  beforeEach(() => {
    messageStoreModule = new MessageStoreModule();
  });

  it('should create an instance', () => {
    expect(messageStoreModule).toBeTruthy();
  });
});
