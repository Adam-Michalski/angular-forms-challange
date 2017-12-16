import { Chalange1FormsPage } from './app.po';

describe('chalange1-forms App', () => {
  let page: Chalange1FormsPage;

  beforeEach(() => {
    page = new Chalange1FormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
