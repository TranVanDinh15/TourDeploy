import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../Axios/axios';
import jwt_decode from 'jwt-decode';
import { actionLoginSuccess } from '../redux/action/actionLogin';
const sign = require('jwt-encode');
export const handleLogin = async (requestLogin, dispatch, navigate) => {
    if (!requestLogin.email) {
        toast.warn('Vui lòng nhập email !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    if (!requestLogin.password) {
        toast.warn('Vui lòng nhập mật khẩu !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    if (requestLogin.email && requestLogin.password) {
        const jwt = sign(requestLogin, process.env.REACT_APP_KEY);
        const response = await loginUser({ enCode: jwt });
        if (response.data.token.errCode && response.data.token.errCode == -1) {
            toast.error('Email không tồn tại trong hệ thống !!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        let decodedToken = jwt_decode(response.data.token);
        console.log(decodedToken);
        if (decodedToken.errCode == 0) {
            const action = actionLoginSuccess(response.data.token);
            console.log(action);
            dispatch(action);
            navigate('/');
        }
    }
};
