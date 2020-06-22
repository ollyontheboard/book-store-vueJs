// eslint-disable-next-line no-unused-vars
import store from '../../store/store';
export default (to, from, next) => {
    const DemoJson = {
    status: 200,
    message: "Product Fetched Successfully",
    data: {
        products: []
  }
  };

  store.dispatch('ManualData', DemoJson)
      .then(next);

    return next();
};
