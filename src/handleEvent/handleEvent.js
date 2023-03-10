import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    createAroadTour,
    createDescription,
    createSan,
    createTour,
    getAbroadTour,
    getAllAroadTour,
    getAllScheduleTour,
    getAllTour,
    getALlTourPlace,
    getDetailSanTour,
    getDetailTour,
    loginUser,
    logoutUser,
} from '../Axios/axios';
import jwt_decode from 'jwt-decode';
import { actionLoginSuccess, actionLogOutSuccess } from '../redux/action/actionLogin';
import { async } from '@firebase/util';
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
export const handleLogout = async (dispatch, navigate) => {
    const response = await logoutUser();
    if (response) {
        if (response.data.status == 0) {
            const actionLogout = actionLogOutSuccess(response.data.user);
            dispatch(actionLogout);
        }
    }
    console.log(response);
};
export const handleLoginSystem = async (requestLogin, dispatch, navigate) => {
    try {
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
                if (decodedToken.user.role == process.env.REACT_APP_ADMIN) {
                    const action = actionLoginSuccess(response.data.token);
                    console.log(action);
                    dispatch(action);
                    navigate('/System/userSystem');
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleCreateAboadSytem = async (body) => {
    try {
        if (!body.matournuocngoai || !body.tencactournuocngoai) {
            toast.warn('Vui lòng nhập đầy đủ thông tin !', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            const response = await createAroadTour(body);
            if (response) {
                if (response.data.errCode == 0) {
                    toast.success('Tạo Thành Công!', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleClickTool = (isFormCreate, setIsFormCreate, setIsDescriptionTour) => {
    if (isFormCreate) {
        setIsFormCreate(false);
    } else {
        setIsFormCreate(true);
        setIsDescriptionTour(false);
    }
};
export const handleGetAllAroadTour = async (setState) => {
    try {
        const response = await getAllAroadTour();
        if (response) {
            console.log(response);
            setState(response.data.abroadTour);
        }
    } catch (error) {}
};
export const handleGetAbroadTour = async (matournuocngoai) => {
    try {
        const response = await getAbroadTour(matournuocngoai);
        if (response) {
            return response.data.data.tencactournuocngoai;
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleCreateTour = async (body) => {
    const response = await createTour(body);
    if (response) {
        if (response.data.errCode == 0) {
            toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
};
export const handleGetAllTour = async (setState, page) => {
    try {
        const response = await getAllTour(page);
        if (response) {
            setState(response);
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleCreateDescription = async (data) => {
    try {
        const response = await createDescription(data);
        if (response) {
            if (response.data.errCode == 0) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            if (response.data.errCode == 1) {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleGetDetailTour = async (maloaimien, setState) => {
    try {
        const response = await getDetailTour(maloaimien);
        if (response) {
            setState(response);
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleGetAllScheduleTour = async (maloaitour, setState) => {
    try {
        const response = await getAllScheduleTour(maloaitour);
        if (response) {
            setState(response.data);
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleGetTourAllPlace = async (diemxuatphat, setState) => {
    try {
        const result = await getALlTourPlace(diemxuatphat);
        if (result) {
            setState(result);
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleCreateSan = async (body) => {
    try {
        const response = await createSan(body);
        if (response) {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
};
export const handleGetSanTour = async (maloaitour, setState) => {
    try {
        const response = await getDetailSanTour(maloaitour);
        if (response) {
            if (response.data.errCode == 0) {
                setState(response.data.data);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
