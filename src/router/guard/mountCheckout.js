import store from "../../store/store";

export default (to, from, next) => {
    const data = localStorage.getItem("checkoutData");
    if (data) {
        store.dispatch('mountCheckoutData', data)
            .then(next);
    }
    return next()
};




