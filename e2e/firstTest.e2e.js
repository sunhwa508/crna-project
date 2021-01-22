describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('main-text'))).toBeVisible();
  });

  it('should have to clicked', async () => {
    await element(by.id('main-button')).tap();
  });
});
