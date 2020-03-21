// eslint-disable-next-line no-unused-vars
import store from '../../store/store';
export default (to, from, next) => {
    const DemoJson = {
    status: 200,
    message: "Product Fetched Successfully",
    data: {
        products: [
            {
                id: 11,
                name: "Learn Java",
                price: "500030",
                description: "While this might seem a little hack-y, adding in data to the window object easily allows you to create global variables that are accessible from any other script or component being used on your app. In the past, I’ve used this as a quick and dirty method of storing and accessing API base urls, public keys, specific model IDs, and a variety of other small data items that I’d need to use across my whole frontend. There is a slight caveat with using this method though, and that’s how you access the data inside of Vue components. Inside of your template, you won’t be able to use something like the below, since Vue assumes the window object you’re trying to access will lie inside that same component:",
                image: "product-8.jpg",
                created_at: "2020-03-13 11:14:27",
                updated_at: "2020-03-21 16:08:41"
            },
            {
                id: 7,
                name: "Mathlab",
                price: "30000",
                description: "Mathematics is the science that deals with the logic of shape, quantity and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports.",
                image: "product-13.jpg",
                created_at: "2020-03-12 23:06:52",
                updated_at: "2020-03-13 10:02:42"
            },
            {
                id: 8,
                name: "Bianca Potter",
                price: "23000",
                description: "Mathematics is the study of numbers, shapes and patterns. The word comes from the Greek word knowledge, or learning",
                image: "product-3.jpg",
                created_at: "2020-03-12 23:09:29",
                updated_at: "2020-03-21 16:08:49"
            },
            {
                id: 3,
                name: "Ployster Beg",
                price: "50",
                description: "This is some text for the Ployster Beg",
                image: "product-details-4.jpg",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-21 16:08:59"
            },
            {
                id: 2,
                name: "Macbook",
                price: "233",
                description: "This is some text for the Macbook",
                image: "product-10.jpg",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-21 16:09:09"
            },
            {
                id: 10,
                name: "Introduction to javascript",
                price: "100030",
                description: "Arguably the easiest way to move data from your Laravel application to a Vue frontend. Using either of the methods above you can just echo out JSON encoded data to be picked up by your app or its components. The biggest downside to this however, is extensibility. Your JavaScript will need to be exposed directly in your template files so that the engine can render out your data. This shouldn’t be a problem if you’re using Vue to add some basic interactivity to a page or area of your Laravel site, but you’ll easily hit a wall trying to force data into packed scripts.",
                image: "product-2.jpg",
                created_at: "2020-03-13 09:56:10",
                updated_at: "2020-03-21 16:09:20"
            },
            {
                id: 4,
                name: "Samsung LED",
                price: "3000",
                description: "This is some text for the Samsung LED",
                image: "product-13.jpg",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-16 23:00:47"
            },
            {
                id: 1,
                name: "LENOVO prenosnik Yoga 900 13ISK",
                price: "2000",
                description: "This is some text for the LENOVO prenosnik Yoga 900 13ISK",
                image: "product-details-4.jpg",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-16 23:01:44"
            },
            {
                id: 12,
                name: "Learn Javascript",
                price: "5000",
                description: "While this might seem a little hack-y, adding in data to the window object easily allows you to create global variables that are accessible from any other script or component being used on your app. In the past, I’ve used this as a quick and dirty method of storing and accessing API base urls, public keys, specific model IDs, and a variety of other small data items that I’d need to use across my whole frontend. There is a slight caveat with using this method though, and that’s how you access the data inside of Vue components. Inside of your template, you won’t be able to use something like the below, since Vue assumes the window object you’re trying to access will lie inside that same component:",
                image: "product-2.jpg",
                created_at: "2020-03-13 11:18:14",
                updated_at: "2020-03-16 23:02:04"
            }
            ],
  }
  };

  store.dispatch('ManualData', DemoJson)
      .then(next);

    return next();
};
