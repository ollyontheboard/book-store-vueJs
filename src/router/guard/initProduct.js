// eslint-disable-next-line no-unused-vars
import store from '../../store/store';
export default (to, from, next) => {
    const DemoJson = {
    status: 200,
    message: "Product Fetched Successfully",
    data: {
        products: [
            {
                id: 2,
                name: "Ruby on Rails",
                price: "233",
                description: "This is some text for the Macbook",
                image: "https://cdn.filestackcontent.com/tTmVEI5NRuyn28k0hs5z",
                created_at: "2020-03-25 18:09:57",
                updated_at: "2020-03-25 18:16:53"
            },
            {
                id: 4,
                name: "Vue js",
                price: "3000",
                description: "This is some text for the Samsung LED",
                image: "https://cdn.filestackcontent.com/SGpOTHw7SEuQ2JLekrcb",
                created_at: "2020-03-25 18:09:57",
                updated_at: "2020-03-25 18:17:01"
            },
            {
                id: 1,
                name: "Php and Laravel",
                price: "2000",
                description: "This is some text for the LENOVO prenosnik Yoga 900 13ISK",
                image: "https://cdn.filestackcontent.com/LtU9lvKBRWips1C3Bmvu",
                created_at: "2020-03-25 18:09:56",
                updated_at: "2020-03-25 18:17:17"
            },
            {
                id: 3,
                name: "Java and Scala",
                price: "50",
                description: "This is some text for the Ployster Beg",
                image: "https://cdn.filestackcontent.com/36LWuHVHSAGgKKXpmN3j",
                created_at: "2020-03-25 18:09:57",
                updated_at: "2020-03-25 18:20:20"
            }
        ]
  }
  };

  store.dispatch('ManualData', DemoJson)
      .then(next);

    return next();
};
