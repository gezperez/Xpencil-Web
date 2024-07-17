import ApiBase from '../ApiBase';

class CategoryApi extends ApiBase {
  getCategory = (id: number) => {
    return this.call(`/category/${id}`);
  };

  getAllCategories = () => {
    return this.call(`/category`);
  };
}

export default new CategoryApi();
