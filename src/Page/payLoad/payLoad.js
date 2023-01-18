import styles from './payLoad.module.scss';
import classNames from 'classnames/bind';
import Header from '../../Component/DefaultLayout/Header';
const cx = classNames.bind(styles);
function PayLoad() {
    return (
        <div className={cx('payLoadWrapper')}>
            <Header />
            <div className={cx('payLoadContainer')}>
                <div className={cx('descriptionTourContainer__Item__title')}>
                    <span>Trang Chủ > Đặt Tour ></span>
                </div>
                <div className={cx('payLoadContainer__Item')}>
                    <div className={cx('payLoadContainer__Item__Image')}>
                        <img src="https://dulichviet.com.vn/images/bandidau/Ch%C3%A2u%20M%E1%BB%B9/du-lich-My/du-lich-bo-dong-hoa-ky-du-lich-viet(1).jpg" />
                    </div>
                    <div className={cx('payLoadContainer__Item__contentTour')}>
                        <div className={cx('payLoadContainer__Item__contentTour__Heading')}>
                            <span>
                                Du lịch Mỹ mùa Xuân Bờ Đông Hoa Kỳ New York - Philadelphia - Washington D.C từ Tp.HCM
                                2023
                            </span>
                        </div>
                        <ul className={cx('payLoadContainer__Item__contentTour__listed')}>
                            <li>Mã tour: đs</li>
                            <li>Thời gian: ffda</li>
                            <li>Giá: 16216</li>
                            <li>Ngày khởi hành: 16216</li>
                            <li>Nơi khởi hành: 16216</li>
                            <li>Số chỗ còn nhận: 16216</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('payLoadContainer__Item__contentTour__TableDetailTour')}>
                    <div className={cx('Heading__TableDetailTour')}>
                        <span>Bảng Tour Chi Tiết</span>
                    </div>
                    <table>
                        <tr>
                            <th>Loại giá \ độ tuổi</th>
                            <th>Người lớn (trên 11 tuổi)</th>
                            <th>Trẻ em (5 đến 11 tuổi)</th>
                            <th>Trẻ nhỏ (2 đến 5 tuổi)</th>
                            <th>Sơ sinh (nhỏ hơn 2 tuổi)</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PayLoad;
