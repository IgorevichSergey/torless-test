import { TorlessPage } from './app.po';

describe('torless App', () => {
  let page: TorlessPage;

  beforeEach(() => {
    page = new TorlessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
