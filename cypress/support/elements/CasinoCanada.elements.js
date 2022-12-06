class CasinoCanadaElement {
  menuBonus = () => '[data-testid="nav-item-0"]';
  menuCasinos = () => '[data-testid="nav-item-1"]';
  dropdownMenu = () => '[data-testid="mega-menu"]';
  optionMenu = (position) => `[data-testid="mega-menu-link-${position}"]`;
  casinosList = () => '[data-testid="ranking"] > div > span';
  filterTitle = () => '[data-testid="filterTitle"]';
  checkboxStar = () => '[for="star-rating-0"] > span';
  checkboxBonus = () => '[for="bonus-rating-0"] > span';
  titleListCasinos = () => '[data-testid="card"]';
  itemCasino = () => '[data-testid="ranking"]';
  iconStar = () => '[data-testid="starFull-icon"]';
  iconBonus = () => "div > div > div:last-child > div > div";
}

export const casinoCanadaElement = new CasinoCanadaElement();
