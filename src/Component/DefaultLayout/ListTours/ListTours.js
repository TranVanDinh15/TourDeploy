import styles from './ListTour.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button/index';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { getTours } from '../../../requetApi/getTours';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const cx = classNames.bind(styles);
function ListTours({ limit }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [listTours, setListTour] = useState([]);
    const url = `https://bookingtour.herokuapp.com/api/get-tours-by-limit?limit=${limit}`;
    // Get Api Tour
    useEffect(() => {
        getTours(url, setListTour, limit);
    }, []);
    const ListTourWrapper = useRef();
    window.onscroll = (event) => {
        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
            ListTourWrapper.current.style.transform = 'translate(0)';
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')} ref={ListTourWrapper}>
                    {listTours.map((res, index) => {
                        if (res.id != 1) {
                            return (
                                <div
                                    key={index}
                                    className={cx('col')}
                                    onClick={() => {
                                        // dispatch(callTours(res));
                                        // navigate('/descriptionTour');
                                    }}
                                >
                                    <div className={cx('col__Image')}>
                                        <img src={res.image} alt="" />
                                    </div>
                                    <div className={cx('propertiesTours')}>
                                        <div className={cx('price')}>
                                            Từ <span>500.000 đ</span>
                                        </div>
                                        <div className={cx('description')}>
                                            <span>{res.name}</span>
                                            {/* <span>$88.00 cho một người</span> */}
                                        </div>
                                        <div className={cx('footer')}>
                                            <div className={cx('btnBooking')}>
                                                <button className={cx('btnBooking__Item')}>
                                                    Book ngay <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ListTours;
