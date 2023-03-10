import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Logo from './Logo';
import ListMenu from './ListMenu';
import ListIcon from './ListIcon';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const ListMenuItem = [
    {
        name: 'HOME',
        to: '/',
    },
    {
        name: 'CÁCH ĐI DU LỊCH',
        to: '/tours',
    },
    {
        name: 'ƯU ĐÃI',
        to: '/blog',
    },
    {
        name: 'MỤC ĐÍCH',
        to: '/purpose',
    },
];

function Header() {
    const headerRef = useRef();
    window.onscroll = () => {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            headerRef.current.style.backgroundColor = '#ddd';
            headerRef.current.style.boxShadow = '0 2px 0px rgb(204, 204, 204, #ddd)';
        } else {
            headerRef.current.style.backgroundColor = 'white';
        }
    };
    const [isSubNav, setIsSubNav] = useState(false);
    return (
        <div className={cx('wrapper')} ref={headerRef}>
            <div className={cx('headerOne')}>
                <div
                    className={cx('headerOne__Hotline')}
                    onClick={(event) => {
                        if (isSubNav) {
                            setIsSubNav(false);
                        } else {
                            setIsSubNav(true);
                        }
                    }}
                >
                    <span>Hotline: </span>
                    <span>0123456389</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                {isSubNav ? <div className={cx('headerOne__SubNav')}></div> : ''}
            </div>
            <div className={cx('container')}>
                <Logo />
                <ListMenu />
                <ListIcon />
            </div>
        </div>
    );
}
export { ListMenuItem };
export default Header;
