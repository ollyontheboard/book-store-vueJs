import store from "../../store/store";

export default (to, from, next) => {
    const accessToken = localStorage.getItem("accessToken");
    const authMetadata = localStorage.getItem("authMetadata");
    if (accessToken) {
        store.dispatch('authInit', authMetadata)
            .then(next);
    }
    return next()
};




