import styles from './userSystem.module.scss';
import classNames from 'classnames/bind';
import HeaderSystem from '../headerSystem/headerSystem';
import NavBar from '../navbar/navBar';
import Tool from '../tool/tool';
import { navBarArray, toolArray } from '../arrayData/arrayData';
import FormCreateAccount from '../form/userAccountForm';
const cx = classNames.bind(styles);
function UserSystem() {
    return (
        <div className={cx('UserSystemWrapper')}>
            <HeaderSystem />
            <Tool arrayData={toolArray} />
            <NavBar navBarArray={navBarArray} FormCreateAccount={<FormCreateAccount />} />
        </div>
    );
}

export default UserSystem;
