import styles from './ListTour.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleGetAbroadTour, handleGetAllTour } from '../../../handleEvent/handleEvent';
import { FaArrowRight } from 'react-icons/fa';
import { Buffer } from 'buffer';
import { ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);
function ListTours({ limit }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allTour, setAllTour] = useState('');
    let tourAbroad = '';
    // Get Api Tour
    useEffect(() => {
        // getTours(url, setListTour, limit);
        handleGetAllTour(setAllTour, 1);
    }, []);

    const ListTourWrapper = useRef();

    console.log(allTour);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')} ref={ListTourWrapper}>
                    {allTour
                        ? allTour.data.data.map((res, index) => {
                              const imageBuffer = new Buffer(res.backGround, 'base64').toString('binary');
                              return (
                                  <div key={index} className={cx('col')} onClick={() => {}}>
                                      <div className={cx('col__Image')}>
                                          <img src={imageBuffer} alt="" />
                                      </div>
                                      <div className={cx('propertiesTours')}>
                                          <div className={cx('price')}>{res.tentour}</div>
                                          <div className={cx('description')}>
                                              <span>Hành trình: </span>
                                              <span>{res.matournuocngoai}</span>
                                          </div>
                                          <div className={cx('date')}>
                                              <div className={cx('date__title')}>
                                                  <span>Thời gian: </span>
                                              </div>
                                              <div className={cx('date__Api')}>
                                                  <span>{res.songayditour}</span>
                                              </div>
                                          </div>
                                          <div className={cx('PriceTour')}>
                                              <span>
                                                  {res.chiPhi.toLocaleString('vi-VN', {
                                                      style: 'currency',
                                                      currency: 'VND',
                                                  })}
                                              </span>
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
                          })
                        : ''}
                </div>
            </div>
        </div>
    );
}

export default ListTours;
