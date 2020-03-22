// eslint-disable-next-line no-unused-vars
import store from '../../store/store';
export default (to, from, next) => {
    const DemoJson = {
    status: 200,
    message: "Product Fetched Successfully",
    data: {
        products: [
            {
                id: 8,
                name: "Bianca Potter",
                price: "23000",
                description: "Mathematics is the study of numbers, shapes and patterns. The word comes from the Greek word "μάθημα" (máthema), meaning "science, knowledge, or learning", and is sometimes shortened to maths (in England, Australia, Ireland, and New Zealand) or math (in the United States and Canada).",
                image: "https://cdn.filestackcontent.com/AOnBzb92QyDUD52ieE9s",
                created_at: "2020-03-12 23:09:29",
                updated_at: "2020-03-22 10:18:08"
            },
            {
                id: 3,
                name: "Ployster Beg",
                price: "50",
                description: "This is some text for the Ployster Beg",
                image: "https://cdn.filestackcontent.com/4ebnXLP2S1CGQFwT1jP9",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-22 10:18:17"
            },
            {
                id: 14,
                name: "alex idowu",
                price: "76876",
                description: "hghvhjvhvjhvjhvh",
                image: "https://cdn.filestackcontent.com/qJIzL6lgTKOanItutBI2",
                created_at: "2020-03-22 10:22:54",
                updated_at: "2020-03-22 10:22:54"
            },
            {
                id: 11,
                name: "Learn Java",
                price: "500030",
                description: "While this might seem a little hack-y, adding in data to the window object easily allows you to create global variables that are accessible from any other script or component being used on your app. In the past, I’ve used this as a quick and dirty method of storing and accessing API base urls, public keys, specific model IDs, and a variety of other small data items that I’d need to use across my whole frontend. There is a slight caveat with using this method though, and that’s how you access the data inside of Vue components. Inside of your template, you won’t be able to use something like the below, since Vue assumes the window object you’re trying to access will lie inside that same component:",
                image: "https://cdn.filestackcontent.com/0D4oRlZS4SukyeyrlBIs",
                created_at: "2020-03-13 11:14:27",
                updated_at: "2020-03-22 10:17:34"
            },
            {
                id: 2,
                name: "Macbook",
                price: "233",
                description: "This is some text for the Macbook",
                image: "https://cdn.filestackcontent.com/9aR4g6GT9RguCLM5GjFQ",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-22 10:18:25"
            },
            {
                id: 7,
                name: "Mathlab",
                price: "30000",
                description: "Mathematics is the science that deals with the logic of shape, quantity and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports.",
                image: "https://cdn.filestackcontent.com/EgdrUa8SpCxIV5o90iru",
                created_at: "2020-03-12 23:06:52",
                updated_at: "2020-03-22 10:17:42"
            },
            {
                id: 4,
                name: "Samsung LED",
                price: "3000",
                description: "This is some text for the Samsung LED",
                image: "https://cdn.filestackcontent.com/b2vHfCbDSYqMjaUOxQrn",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-22 10:17:51"
            },
            {
                id: 12,
                name: "Learn Javascript",
                price: "5000",
                description: "While this might seem a little hack-y, adding in data to the window object easily allows you to create global variables that are accessible from any other script or component being used on your app. In the past, I’ve used this as a quick and dirty method of storing and accessing API base urls, public keys, specific model IDs, and a variety of other small data items that I’d need to use across my whole frontend. There is a slight caveat with using this method though, and that’s how you access the data inside of Vue components. Inside of your template, you won’t be able to use something like the below, since Vue assumes the window object you’re trying to access will lie inside that same component:",
                image: "https://cdn.filestackcontent.com/GUGfjJ6JQ3CVPE9dTrHk",
                created_at: "2020-03-13 11:18:14",
                updated_at: "2020-03-22 10:18:37"
            },
            {
                id: 10,
                name: "Introduction to javascript",
                price: "100030",
                description: "Arguably the easiest way to move data from your Laravel application to a Vue frontend. Using either of the methods above you can just echo out JSON encoded data to be picked up by your app or its components. The biggest downside to this however, is extensibility. Your JavaScript will need to be exposed directly in your template files so that the engine can render out your data. This shouldn’t be a problem if you’re using Vue to add some basic interactivity to a page or area of your Laravel site, but you’ll easily hit a wall trying to force data into packed scripts.",
                image: "https://cdn.filestackcontent.com/ZZWx6QaoQAuUwdhZ55LA",
                created_at: "2020-03-13 09:56:10",
                updated_at: "2020-03-22 10:18:53"
            },
            {
                id: 13,
                name: "Ruby on Rails book",
                price: "50000",
                description: "In Chapter 5, we ended with a stub page for creating new users (Section 5.4). Over the course of the next six chapters, we’ll fulfill the promise implicit in this incipient signup page. In this chapter, we’ll take the first critical step by creating a data model for users of our site, together with a way to store that data. In Chapter 7, we’ll give users the ability to sign up for our site and create a user profile page. Once users can sign up, we’ll let them log in and log out as well (Chapter 8 and Chapter 9), and in Chapter 10 (Section 10.2.1) we’ll learn how to protect pages from improper access. Finally, in Chapter 11 and Chapter 12 we’ll add account activations (thereby confirming a valid email address) and password resets. Taken together, the material in Chapter 6 through Chapter 12 develops a full Rails login and authentication system. As you may know, there are various pre-built authentication solutions for Rails; Box 6.1 explains why, at least at first, it’s probably a better idea to roll your own.",
                image: "https://cdn.filestackcontent.com/U7Eam8BeQx2sT5TpAdRN",
                created_at: "2020-03-22 10:19:46",
                updated_at: "2020-03-22 10:19:46"
            },
            {
                id: 1,
                name: "LENOVO prenosnik Yoga 900 13ISK",
                price: "2000",
                description: "This is some text for the LENOVO prenosnik Yoga 900 13ISK",
                image: "https://cdn.filestackcontent.com/KvYXEXp6SPSRgGAnDRFF",
                created_at: "2020-03-12 14:22:04",
                updated_at: "2020-03-22 10:18:00"
            }
        ]
  }
  };

  store.dispatch('ManualData', DemoJson)
      .then(next);

    return next();
};
