import styles from './loginSystem.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { handleLoginSystem } from '../../../handleEvent/handleEvent';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);
function LoginSystem() {
    const [requestLogin, setRequestLogin] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className={cx('loginSystemWrapper')}>
            <div className={cx('loginSystemWrapper__Item')}>
                <div className={cx('loginSystemWrapper__Item__Heading')}>
                    <span>Đăng Nhập</span>
                </div>
                <div className={cx('loginSystemWrapper__Item__Form')}>
                    <div className={cx('loginSystemWrapper__Item__Form__Item')}>
                        <span>Email</span>
                    </div>
                    <div className={cx('loginSystemWrapper__Item__Form__Input')}>
                        <input
                            type={'text'}
                            placeholder={'...'}
                            value={requestLogin.email}
                            onChange={(event) => {
                                setRequestLogin({
                                    ...requestLogin,
                                    email: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('loginSystemWrapper__Item__Form')}>
                    <div className={cx('loginSystemWrapper__Item__Form__Item')}>
                        <span>Password</span>
                    </div>
                    <div className={cx('loginSystemWrapper__Item__Form__Input')}>
                        <input
                            type={'password'}
                            placeholder={'...'}
                            value={requestLogin.password}
                            onChange={(event) => {
                                setRequestLogin({
                                    ...requestLogin,
                                    password: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('loginSystemWrapper__Item__btn')}>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            handleLoginSystem(requestLogin, dispatch, navigate);
                        }}
                    >
                        Đăng Nhập
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoginSystem;
