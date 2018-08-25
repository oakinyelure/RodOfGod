import { GiveModule } from './give.module';

describe('GiveModule', () => {
  let giveModule: GiveModule;

  beforeEach(() => {
    giveModule = new GiveModule();
  });

  it('should create an instance', () => {
    expect(giveModule).toBeTruthy();
  });
});
