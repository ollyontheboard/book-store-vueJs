
export default (to, from, next) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        return next("/authenticated/dashboard");
    }
    return next();
};
