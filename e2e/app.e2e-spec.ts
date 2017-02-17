import { Ng2AdalExamplePage } from './app.po';

describe('ng2-adal-example App', () => {
  let page: Ng2AdalExamplePage;

  beforeEach(() => {
    page = new Ng2AdalExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
