import page from './page';

class InstrumentPage extends page {
  constructor () {
    super();

    // Selector vars
    this.marketHeadStatsValueSelector = 'span[automation-id="market-head-stats-value"]';
    this.headBreadcrumbsSelector = 'ul.head-breadcrumbs';
    this.crumbItemSelector = 'li[class = "crumb-item ng-star-inserted"]';
    this.tradeBtnSelector = 'div[automation-id = "trade-button"]';
    this.closeBtnSelector = 'div#popup-close-btn';
  }

  get marketHeadStatsValue () {
    return this.marketHeadStatsValueSelector;
  }

  get headBreadCrumbs () {
    return this.headBreadcrumbsSelector;
  }

  get crumbItems () {
    return this.crumbItemSelector;
  }

  get tradeBtn () {
    return this.tradeBtnSelector;
  }

  get closeBtn () {
    return this.closeBtnSelector;
  }
}

export default InstrumentPage;
