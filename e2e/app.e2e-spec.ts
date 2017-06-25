import { AngularDrugiPage } from './app.po';

describe('angular-drugi App', () => {
  let page: AngularDrugiPage;

  beforeEach(() => {
    page = new AngularDrugiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
