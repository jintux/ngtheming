import { StylingPage } from './app.po';

describe('styling App', () => {
  let page: StylingPage;

  beforeEach(() => {
    page = new StylingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
