describe('Test weatherMapApi functionality', () => {
  beforeEach(() => {

  });

  // Override the baseUrl as below
  Cypress.config('baseUrl', 'http://api.openweathermap.org/data/2.5/weather');

  it('should be able to search CityWeather by City name as Paris,fr', () => {
    const APPID = Cypress.config().APPID;
    const cityName = 'Paris,fr';
    const url = `?q=${cityName}&APPID=${APPID}`;

    cy.request(url).as('cityWeatherResponse');
    cy.get('@cityWeatherResponse')
      .its('status')
      .should('equal', 200);

    // Please note cy.request() yields the response as an object literal containing properties such as:body, status, header, duration
    cy.request(url).then(response => {
      expect(response).to.have.property('status', 200);
      expect(response.body).to.have.property('main');
      expect(response.body).to.have.property('coord');
    });

    // To access the values from json body
    cy.request(url).its('body')
      .then(body => {
        const maxtemp = body.main.temp_max;
        cy.log('maxtemp is', maxtemp);
        const mintemp = body.main.temp_min;
        cy.log('min temp is', mintemp);
      });
  });

  it('should be able to search CityWeather by City Id as 2988507', () => {
    const APPID = Cypress.config().APPID;
    const cityId = 2988507;

    // eslint-disable-next-line no-unused-vars
    const url = `?id=${cityId}&APPID=${APPID}`;
    cy.request(url).its('body')
      .then(body => {
        const maxtemp = body.main.temp_max;
        cy.log('maxtemp is', maxtemp);
        const mintemp = body.main.temp_min;
        cy.log('min temp is', mintemp);
      });
  });

  it('To understand post and put request', () => {
    let url = 'http://dummy.restapiexample.com/api/v1/create';
    const body = {name : 'test', salary : '123', age : '23'};

    // POST should have the type, url, and body
    cy.request('POST', url, body)
      .its('body')
      .its('data')
      .should('include', {name : 'test'});

    // Put operation
    url = 'http://dummy.restapiexample.com/api/v1/update/1';
    const item = {name : 'test1'};
    cy.request({method : 'PUT', url, body : item, failOnStatusCode : false})
      .its('status')
      .should('eq', 401);
  });
});
