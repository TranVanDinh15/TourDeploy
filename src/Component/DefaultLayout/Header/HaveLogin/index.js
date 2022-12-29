import styles from './HaveLogin.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Button from '../../../Button';
import { requestLogout } from '../../../../requetApi/post';
import { useNavigate } from 'react-router';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { handleLogout } from '../../../../handleEvent/handleEvent';

const cx = classNames.bind(styles);
function HaveLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const getUserLocalStorage = JSON.parse(localStorage.getItem('user'));

    const inforUser = useSelector((state) => state.userLogin.user);
    let decoded = null;
    if (inforUser) {
        decoded = jwt_decode(inforUser);
    }
    return (
        <Tippy
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <div className={cx('tippy-Container')}>
                        <Button
                            className={cx('tippy-Container__Item')}
                            children={'Log out'}
                            span
                            onClick={() => {
                                handleLogout(dispatch, navigate);
                            }}
                        />
                    </div>
                </div>
            )}
            interactive
            placement="bottom"
        >
            <div className={cx('wrapper')}>
                {inforUser ? (
                    <Button
                        className={cx('userName')}
                        children={decoded ? decoded.user.firstName + decoded.user.lastName : ''}
                    />
                ) : (
                    ''
                )}
            </div>
        </Tippy>
    );
}

export default HaveLogin;
