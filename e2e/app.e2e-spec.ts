import { BetterfacebookPage } from './app.po';

describe('betterfacebook App', () => {
  let page: BetterfacebookPage;

  beforeEach(() => {
    page = new BetterfacebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
