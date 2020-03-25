// eslint-disable-next-line no-unused-vars
import store from '../../store/store';
export default (to, from, next) => {
    const DemoJson = {
    status: 200,
    message: "Product Fetched Successfully",
    data: {
        products: [
            {
                id: 1,
                name: "LENOVO prenosnik Yoga 900 13ISK",
                price: "2000",
                description: "This is some text for the LENOVO prenosnik Yoga 900 13ISK",
                image: "https://cdn.filestackcontent.com/LtU9lvKBRWips1C3Bmvu",
                created_at: "2020-03-25 18:09:56",
                updated_at: "2020-03-25 18:10:15"
            },
            {
                id: 3,
                name: "Ployster Beg",
                price: "50",
                description: "This is some text for the Ployster Beg",
                image: "https://cdn.filestackcontent.com/36LWuHVHSAGgKKXpmN3j",
                created_at: "2020-03-25 18:09:57",
                updated_at: "2020-03-25 18:10:26"
            },
            {
                id: 4,
                name: "Samsung LED",
                price: "3000",
                description: "This is some text for the Samsung LED",
                image: "https://cdn.filestackcontent.com/SGpOTHw7SEuQ2JLekrcb",
                created_at: "2020-03-25 18:09:57",
                updated_at: "2020-03-25 18:10:33"
            },
            {
                id: 2,
                name: "Macbook",
                price: "233",
                description: "This is some text for the Macbook",
                image: "https://cdn.filestackcontent.com/tTmVEI5NRuyn28k0hs5z",
                created_at: "2020-03-25 18:09:57",
                updated_at: "2020-03-25 18:11:13"
            }
        ]
  }
  };

  store.dispatch('ManualData', DemoJson)
      .then(next);

    return next();
};
