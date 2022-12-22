const initialState = {
    user: null,
    isPending: false,
    errorLogin: false,
};
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isPending: false,
            };
        case 'PENDING_LOGIN':
            return {
                user: null,
                isPending: false,
            };
        default:
            return state;
    }
};
export default loginReducer;
