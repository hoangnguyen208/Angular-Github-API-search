import { AngularGithubPage } from './app.po';

describe('angular-github App', () => {
  let page: AngularGithubPage;

  beforeEach(() => {
    page = new AngularGithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
