import styles from './descriptionTour.module.scss';
import classNames from 'classnames/bind';
import Header from '../../Component/DefaultLayout/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleInfo, faNoteSticky, faPaperclip, faStar, faTv } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { handleGetAllScheduleTour, handleGetDetailTour, handleGetSanTour } from '../../handleEvent/handleEvent';
import { Buffer } from 'buffer';
import { toast, ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);
function DescriptionTour() {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    const arrayNecessary = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faCircleInfo} />,
            name: 'Điểm nhấn hành trình',
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faCalendar} />,
            name: 'Lịch trình',
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faPaperclip} />,
            name: 'Dịch vụ bao gồm và không bao gồm',
        },
        {
            id: 4,
            icon: <FontAwesomeIcon icon={faNoteSticky} />,
            name: 'Ghi chú',
        },
        {
            id: 5,
            icon: <FontAwesomeIcon icon={faCalendarCheck} />,
            name: 'Ngày khởi hành khác',
        },
    ];
    const [detailTour, setDetailTour] = useState('');
    const [allScheduleTour, setAllScheduleTour] = useState('');
    const [offset, setOffset] = useState(0);
    const [isSchedule, setIsSchedule] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [detailSan, setDetailSan] = useState('');
    const [isSan, setIsSan] = useState(false);
    const [isNote, setIsNote] = useState(false);
    const [dateStart, setDateStart] = useState('');
    const handleToPayLoad = () => {
        if (!dateStart) {
            toast.warning('Vui lòng chọn ngày khởi hành !!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            navigate(`/thanh-toan-tour/${params.maloaitour}`);
        }
    };
    useEffect(() => {
        if (params) {
            handleGetDetailTour(params.id, setDetailTour);
            handleGetAllScheduleTour(params.maloaitour, setAllScheduleTour);
            handleGetSanTour(params.maloaitour, setDetailSan);
        }
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    console.log(dateStart);
    return (
        <div className={cx('descriptionTourContainer')}>
            <Header />
            <div className={cx('descriptionTourContainer__Item')}>
                <div className={cx('descriptionTourContainer__Item__title')}>
                    <span>Trang Chủ ></span>
                    <span>Loại Hình Du Lịch > </span>
                    <span>Du Lịch Hành Hương Israel 8N7Đ Theo Bước Chân Giêsu Từ Sài Gòn 2023 </span>
                </div>
                <div className={cx('descriptionTourContainer__Item__Heading')}>
                    <span>{detailTour ? detailTour.data.tour.tentour : ''}</span>
                </div>
                <div className={cx('descriptionTourContainer__Item__evaluate')}>
                    <span>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                </div>
                <div className={cx('descriptionTourContainer__Item__content')}>
                    <div className={cx('descriptionTourContainer__Item__content__Item')}>
                        <div className={cx('descriptionTourContainer__Item__content__Item__Image')}>
                            <img
                                src={
                                    detailTour
                                        ? new Buffer(detailTour.data.tour.backGround, 'base64').toString('binary')
                                        : ''
                                }
                            />
                        </div>
                        <div className={cx('descriptionTourContainer__Item__content__Item__HightLight')}>
                            <div className={cx('HightLightTour__Heading')}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                <span>Điểm nhấn hành trình</span>
                            </div>
                            <div className={cx('HightLightTour__InforTour')}>
                                <div className={cx('HightLightTour__Item')}>
                                    <span>Hành trình</span>
                                    <span>{detailTour ? detailTour.data.tour.matournuocngoai : ''}</span>
                                </div>
                                <div className={cx('HightLightTour__Item')}>
                                    <span>Lịch trình</span>
                                    <span>{detailTour ? detailTour.data.tour.songayditour : ''}</span>
                                </div>
                                <div className={cx('HightLightTour__Item')}>
                                    <span>Khởi hành</span>
                                    <span>13/04; 11/05; 15/06; 10/07; 10/08; 12/10/2023</span>
                                </div>
                            </div>
                            <div className={cx('HightLightTour__Description')}>
                                <p>{detailTour ? detailTour.data.tour.gioithieutour : ''}</p>
                            </div>
                        </div>
                        <div
                            className={cx('HightLightTour__Heading')}
                            onClick={(event) => {
                                if (isSchedule) {
                                    setIsSchedule(false);
                                } else {
                                    setIsSchedule(true);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faCalendar} />
                            <span>Lịch trình</span>
                        </div>
                        {isSchedule && allScheduleTour && allScheduleTour.errCode == 0
                            ? allScheduleTour.lichtrinh.map((item, index) => {
                                  return (
                                      <div className={cx('HightLightTour__dateSchedule')}>
                                          <div className={cx('HightLightTour__dateSchedule__Item')}>
                                              <div className={cx('HightLightTour__dateSchedule__Point')}>
                                                  <FontAwesomeIcon icon={faCircleDot} />
                                              </div>
                                              <div className={cx('HightLightTour__dateSchedule__Heading')}>
                                                  <span>{item.lichtrinhtheongay}</span>
                                              </div>
                                          </div>
                                          <div
                                              className={cx('HightLightTour__dateSchedule__text')}
                                              dangerouslySetInnerHTML={{ __html: item.noidung }}
                                          ></div>
                                      </div>
                                  );
                              })
                            : ''}
                        <div
                            className={cx('HightLightTour__Heading')}
                            onClick={(event) => {
                                if (isSan) {
                                    setIsSan(false);
                                } else {
                                    setIsSan(true);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faPaperclip} />
                            <span>Dịch vụ bao gồm và không bao gồm</span>
                        </div>
                        <div className={cx('HightLightTour__Heading__Content')}>
                            {detailSan && isSan
                                ? detailSan.map((item, index) => {
                                      return (
                                          <div
                                              className={cx('HightLightTour__Heading__Content__Item')}
                                              dangerouslySetInnerHTML={{ __html: item.dichvu }}
                                          ></div>
                                      );
                                  })
                                : ''}
                        </div>
                        <div
                            className={cx('HightLightTour__Heading')}
                            onClick={(event) => {
                                if (isNote) {
                                    setIsNote(false);
                                } else {
                                    setIsNote(true);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faNoteSticky} />
                            <span>Ghi chú</span>
                        </div>
                        {detailSan && isNote
                            ? detailSan.map((item, index) => {
                                  return (
                                      <div
                                          className={cx('HightLightTour__Heading__Content__Item')}
                                          dangerouslySetInnerHTML={{ __html: item.ghichu }}
                                      ></div>
                                  );
                              })
                            : ''}
                        <div
                            className={cx('HightLightTour__Heading')}
                            onClick={(event) => {
                                if (isVideo) {
                                    setIsVideo(false);
                                } else {
                                    setIsVideo(true);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faTv} />
                            <span>Video</span>
                        </div>
                        {isVideo ? (
                            <div className={cx('HightLightTour__Heading__Video')}>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={detailTour ? detailTour.data.tour.video : ''}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        ) : (
                            ''
                        )}
                        <div className={cx('HightLightTour__Heading')}>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            <span>Ngày khởi hành khác</span>
                        </div>
                    </div>
                    <div className={cx('descriptionTourContainer__Item__content__Item')}>
                        <div className={cx('descriptionTourContainer__Item__content__Item__navbar')}>
                            <div className={cx('descriptionTourContainer__Item__content__Item__navbarContainer')}>
                                <div className={cx('nameTour')}>
                                    <span>{detailTour ? detailTour.data.tour.tentour : ''}</span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Mã tour:</span>
                                    <span>{detailTour ? detailTour.data.tour.maloaitour : ''}</span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Thời gian:</span>
                                    <span>{detailTour ? detailTour.data.tour.songayditour : ''}</span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Khởi hành:</span>
                                    <span>13/04; 11/05; 15/06; 10/07; 10/08; 12/10/2023 </span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Vận chuyển:</span>
                                    <span>Xe du lịch, Máy bay </span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Xuất phát:</span>
                                    <span>Thành phố Hồ Chí Minh</span>
                                </div>
                            </div>
                            <div className={cx(offset > 565.5 ? 'action' : '')}>
                                <div className={cx('descriptionTourContainer__Item__content__Item__BoxPrice')}>
                                    <div
                                        className={cx(
                                            'descriptionTourContainer__Item__content__Item__BoxPrice__pricetour',
                                        )}
                                    >
                                        <span>Giá từ:</span>
                                        <span>
                                            {detailTour
                                                ? detailTour.data.tour.chiPhi.toLocaleString('vi-VN', {
                                                      style: 'currency',
                                                      currency: 'VND',
                                                  })
                                                : ''}
                                        </span>
                                    </div>
                                    <div
                                        className={cx(
                                            'descriptionTourContainer__Item__content__Item__BoxPrice__optionDate',
                                        )}
                                    >
                                        <input
                                            type={'date'}
                                            value={dateStart}
                                            onChange={(event) => {
                                                setDateStart(event.target.value);
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={cx('btn__Contact')}
                                        onClick={(event) => {
                                            handleToPayLoad();
                                        }}
                                    >
                                        <button>Liên Hệ</button>
                                    </div>
                                </div>
                                <ul className={cx('descriptionTourContainer__Item__content__Item')}>
                                    {arrayNecessary.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                {item.icon}
                                                <span>{item.name}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default DescriptionTour;
