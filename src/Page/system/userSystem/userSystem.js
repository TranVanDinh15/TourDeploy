import styles from './userSystem.module.scss';
import classNames from 'classnames/bind';
import HeaderSystem from '../headerSystem/headerSystem';
import NavBar from '../navbar/navBar';
import Tool from '../tool/tool';
import { navBarArray, toolArray } from '../arrayData/arrayData';
const cx = classNames.bind(styles);
function UserSystem() {
    return (
        <div className={cx('UserSystemWrapper')}>
            <HeaderSystem />
            <Tool arrayData={toolArray} />
            <NavBar navBarArray={navBarArray} />
        </div>
    );
}

export default UserSystem;
