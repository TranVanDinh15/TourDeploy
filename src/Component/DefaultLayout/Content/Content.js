import Button from '../../Button';
import classNames from 'classnames/bind';
import { FaStar, FaWalking } from 'react-icons/fa';
import Introduction from '../Introduction';
import ListTours from '../ListTours/ListTours';
import styles from './Content.module.scss';
import HotPlace from '../HotPlace/HotPlace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <Introduction />
            <div className={cx('container')}>
                <div className={cx('Heading')}>
                    <span>
                        Đóng gói và đi______
                        <img src="http://3.bp.blogspot.com/-kgxNCrexcag/Ux-wFGRroOI/AAAAAAAAAVo/NPNdgR-TG0g/s1600/plane.png" />
                    </span>
                    <h1 className={cx('titleTour')}>Địa điểm đề xuất</h1>
                    <span className={cx('startIcon')}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                </div>
            </div>
            <ListTours limit={'4'} />
            <div className={cx('MoreTour')}>
                <Button className={cx('btn')} children={'Xem Thêm'} to={'/AllTour'} />
            </div>
            <HotPlace />
        </div>
    );
}

export default Content;
