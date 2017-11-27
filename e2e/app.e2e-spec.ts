import { MealPlannerPage } from './app.po';

describe('meal-planner App', () => {
  let page: MealPlannerPage;

  beforeEach(() => {
    page = new MealPlannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
