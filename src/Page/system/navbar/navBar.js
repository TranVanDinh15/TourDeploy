import styles from './navBar.module.scss';
import classNames from 'classnames/bind';
import Properties from './properties';
import FormCreateAccount from '../form/userAccountForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function NavBar({ navBarArray, FormCreateAccount }) {
    return (
        <div className={cx('NavBarContainer')}>
            <div className={cx('NavBarWrapper')}>
                <div className={cx('NavBarWrapper__setting')}>
                    <FontAwesomeIcon icon={faGear} />
                    <span>Mục</span>
                </div>
                <div className={cx('NavBarWrapper__Item')}>
                    <ul className={cx('NavBarWrapper__Item__List')}>
                        {navBarArray
                            ? navBarArray.map((data, index) => {
                                  return <li key={index}>{data.name}</li>;
                              })
                            : ''}
                    </ul>
                </div>
            </div>
            <Properties children={FormCreateAccount} />
        </div>
    );
}
export default NavBar;
