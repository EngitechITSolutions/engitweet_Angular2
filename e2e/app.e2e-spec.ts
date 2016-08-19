import { EngitweetClientPage } from './app.po';

describe('engitweet-client App', function() {
  let page: EngitweetClientPage;

  beforeEach(() => {
    page = new EngitweetClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
