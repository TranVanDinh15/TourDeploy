import Header from '../../Component/DefaultLayout/Header';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import { createContext } from 'react';
import { sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../FireBase/config';
import { authGG, providerGG, signInGG } from '../../FireBase/googleConfigs';
const cx = classNames.bind(styles);
export const context = createContext();
function Login() {
    // Xử Lý sự kiện Login Fb
    const handleLoginFB = () => {
        signInWithPopup(auth, provider);
    };
    // Xử lý sự kiện Login GG
    const handleLoginGG = async () => {
        const sign = await signInWithPopup(authGG, providerGG);
        const user = auth.currentUser;
        sendEmailVerification(user);
        console.log(user);
    };
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <div className={cx('Heading')}>
                        <h4>Đăng Nhập</h4>
                    </div>
                    <div className={cx('formLogin')}>
                        <div className={cx('formLogin__Item')}>
                            <div className={cx('formLogin__Item__Heading')}>
                                <span>Email</span>
                                <input type={'text'} placeholder={'Nhập Email...'} />
                            </div>
                            <div className={cx('formLogin__Item__Heading')}>
                                <span>Password</span>
                                <input type={'password'} placeholder={'Nhập Password...'} />
                            </div>
                            <div className={cx('formLogin__Item__btn')}>
                                <button>Đăng Nhập</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('LoginApp')}>
                        <div className={cx('LoginAppIcon')} onClick={handleLoginFB}>
                            <FaFacebookSquare className={cx('icon_Item')} />
                            <span>Tiếp tục với Facebook</span>
                        </div>
                        <div className={cx('LoginAppIcon')} onClick={handleLoginGG}>
                            <FaGoogle className={cx('icon_Item')} />
                            <span>Tiếp tục với Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
