import styles from './ListTour.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleGetAbroadTour, handleGetAllTour } from '../../../handleEvent/handleEvent';
import { FaArrowRight } from 'react-icons/fa';
import { Buffer } from 'buffer';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';
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
                <div className={cx('toolFilter')}></div>
                <div className={cx('row')} ref={ListTourWrapper}>
                    <div className={cx('placeStart')}>
                        <div className={cx('placeStart__Item')}>
                            <div className={cx('placeStart__Heading')}>
                                <span>Bạn muốn khởi hành ở đâu ?</span>
                            </div>
                            <div className={cx('placeStart__check')}>
                                <div className={cx('placeStart__check__Item')}>
                                    <input type={'checkbox'} />
                                    <span>Thành phố Hồ Chí Minh</span>
                                </div>
                                <div className={cx('placeStart__check__Item')}>
                                    <input type={'checkbox'} />
                                    <span>Hà Nội</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('toolFilter__Icon')}>
                        <FontAwesomeIcon icon={faList} />
                        <FontAwesomeIcon icon={faBorderAll} />
                    </div>
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
                                                  <button
                                                      className={cx('btnBooking__Item')}
                                                      onClick={(event) => {
                                                          event.preventDefault();
                                                          navigate(
                                                              `/DescriptionTour${res.maloaimien}/${res.maloaitour}`,
                                                          );
                                                      }}
                                                  >
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
