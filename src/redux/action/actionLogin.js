const actionLoginSuccess = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: payload,
    };
};
const actionLogOutSuccess = (payload) => {
    return {
        type: 'LOGOUT_SUCCESS',
        payload: payload,
    };
};
export { actionLoginSuccess, actionLogOutSuccess };
