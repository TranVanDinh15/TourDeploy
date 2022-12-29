import styles from './headerSystem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../Component/DefaultLayout/Header/Logo';
const cx = classNames.bind(styles);
function HeaderSystem({ title }) {
    return (
        <div className={cx('HeaderSystemWrapper')}>
            <div className={cx('HeaderSystemWrapper__one')}>
                <div className={cx('HeaderSystemWrapper__one__List')}>
                    <div className={cx('HeaderSystemWrapper__one__List__Item')}>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className={cx('HeaderSystemWrapper__one__List__Item__Heading')}>
                            <span>system</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('HeaderSystemWrapper__two')}>
                <div className={cx('HeaderSystemWrapper__one__List__Item')}>
                    <div>
                        {/* <FontAwesomeIcon icon={faUserGroup} />
                         */}
                        {title ? title.icon : ''}
                    </div>
                    <div className={cx('HeaderSystemWrapper__one__List__Item__Heading')}>
                        <span>{title ? title.name : ''}</span>
                    </div>
                </div>
                <div className={cx('HeaderSystemWrapper__two__Logo')}>
                    <Logo />
                </div>
            </div>
        </div>
    );
}

export default HeaderSystem;
