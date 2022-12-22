import styles from './ListIcon.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../Button';
import { useContext, useRef, useState } from 'react';
import MenuBars from '../MenuBars';
import LogInOut from '../Login_out';
import { context } from '../../../../AuthProvider/AuthProvider';
import HaveLoginFb from '../HaveLogin/facebook';
import { FaShoppingBag, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import HaveLogin from '../HaveLogin';
const cx = classNames.bind(styles);
function ListIcon() {
    const userFb = useContext(context);
    console.log(userFb);
    const ref = useRef();
    let check = true;
    const [menuBar, setMenuBars] = useState();
    const handle = () => {
        if (check) {
            console.log(ref.current);
            ref.current.className = cx('display');
            check = false;
        } else {
            ref.current.className = cx('inputItem');
            check = true;
        }
    };
    const inforUser = useSelector((state) => state.userLogin.user);
    console.log(inforUser);
    let decoded = null;
    if (inforUser) {
        decoded = jwt_decode(inforUser);
    }
    return (
        <div className={cx('wrapper')}>
            <Button className={cx('iconItem')} children={<FaShoppingBasket />} />
            {userFb ? <HaveLoginFb /> : ''}
            {inforUser ? <HaveLogin /> : <LogInOut />}
            {menuBar && <MenuBars />}
            <div className={cx('inputItem')} ref={ref}>
                <form action="">
                    <input type={'text'} placeholder="Search" />
                </form>
            </div>
        </div>
    );
}

export default ListIcon;
