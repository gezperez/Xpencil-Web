import ApiBase from '../ApiBase';

class CurrencyApi extends ApiBase {
  getConversionRates = () => {
    return this.call('/currency/conversionRates');
  };

  getCurrencies = (id?: number) => {
    if (id) {
      return this.call(`/currency/${id}`);
    }

    return this.call('/currency');
  };
}

export default new CurrencyApi();
