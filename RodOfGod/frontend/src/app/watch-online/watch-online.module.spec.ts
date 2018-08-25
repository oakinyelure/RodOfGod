import { WatchOnlineModule } from './watch-online.module';

describe('WatchOnlineModule', () => {
  let watchOnlineModule: WatchOnlineModule;

  beforeEach(() => {
    watchOnlineModule = new WatchOnlineModule();
  });

  it('should create an instance', () => {
    expect(watchOnlineModule).toBeTruthy();
  });
});
