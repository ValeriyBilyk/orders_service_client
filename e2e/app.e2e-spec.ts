import { OrdersServicePage } from './app.po';

describe('orders-service App', () => {
  let page: OrdersServicePage;

  beforeEach(() => {
    page = new OrdersServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
