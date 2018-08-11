import { MusicStoreModule } from './music-store.module';

describe('MusicStoreModule', () => {
  let musicStoreModule: MusicStoreModule;

  beforeEach(() => {
    musicStoreModule = new MusicStoreModule();
  });

  it('should create an instance', () => {
    expect(musicStoreModule).toBeTruthy();
  });
});
