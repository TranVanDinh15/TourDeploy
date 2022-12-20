import classNames from "classnames/bind";
import {  FaCar, FaPlaneDeparture, FaShip, FaUserAstronaut } from "react-icons/fa";
import styles from './Introduction.module.scss'
const cx=classNames.bind(styles)
function Introduction() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container__Item')}>
                    <div className={cx('icon')}>
                        <img src="https://img.pikbest.com/png-images/cartoon-toy-airplane-clipart_5882018.png!c1024wm0"/>
                    </div>
                    <div className={cx('title')}>
                        <span>Du lịch tốt nhất</span>
                    </div>
                </div>
                <div className={cx('container__Item')}>
                    <div className={cx('icon')}>
                    <img src="https://img.pikbest.com/png-images/cartoon-style-red-clipart-smoke-steam-ship-ship_5882512.png!c1024wm0"/>
                    </div>
                    <div className={cx('title')}>
                        <span>Du lịch trên biển</span>
                    </div>
                </div>
                <div className={cx('container__Item')}>
                    <div className={cx('icon')}>
                    <img src="https://icon-library.com/images/fiat-500_2894.png"/>
                    </div>
                    <div className={cx('title')}>
                        <span>Đặt chuyến đi của bạn</span>
                    </div>
                </div>
                <div className={cx('container__Item')}>
                    <div className={cx('icon')}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4342/4342898.png"/>
                    </div>
                    <div className={cx('title')}>
                        <span>Hỗ trợ khách hàng tận tâm</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;