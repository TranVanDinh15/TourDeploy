import styles from './descriptionTour.module.scss';
import classNames from 'classnames/bind';
import Header from '../../Component/DefaultLayout/Header';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleInfo, faNoteSticky, faPaperclip, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck, faCircleDot } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function DescriptionTour() {
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
                    <span>Du lịch Hành Hương Israel 8N7Đ theo bước chân Giêsu từ Sài Gòn 2023</span>
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
                            <img src="https://dulichviet.com.vn/images/bandidau/images/CH%C3%82U%20%C3%81/Israel/du-lich-israel-noi-dat-thanh-du-lich-viet.jpg" />
                        </div>
                        <div className={cx('descriptionTourContainer__Item__content__Item__HightLight')}>
                            <div className={cx('HightLightTour__Heading')}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                <span>Điểm nhấn hành trình</span>
                            </div>
                            <div className={cx('HightLightTour__InforTour')}>
                                <div className={cx('HightLightTour__Item')}>
                                    <span>Hành trình</span>
                                    <span>Nazarêth - Bêthlehem - Giêrusalem</span>
                                </div>
                                <div className={cx('HightLightTour__Item')}>
                                    <span>Lịch trình</span>
                                    <span>8 ngày 7 đêm</span>
                                </div>
                                <div className={cx('HightLightTour__Item')}>
                                    <span>Khởi hành</span>
                                    <span>13/04; 11/05; 15/06; 10/07; 10/08; 12/10/2023</span>
                                </div>
                            </div>
                            <div className={cx('HightLightTour__Description')}>
                                <p>
                                    Du lịch Hành Hương - Du lịch Hành Hương Israel 8N7Đ theo bước chân Giêsu từ Sài Gòn
                                    2023 "Theo Chúa Giêsu thật tốt dường nào, đi với Chúa Giêsu thật tốt biết bao, sứ
                                    điệp của Chúa Giêsu là thiện hảo, đúng là phải thoát ra khỏi chính mình, từ khắp
                                    cùng bờ cõi trái đất để mang Chúa Giêsu đến cho những người khác! "Đức Giaó Hoàng
                                    Phanxicô. Trong cuộc đời mỗi người Kitô hữu, ai cũng ao ước được đặt chân đến Đất
                                    Thánh, miền đất mà Chúa Giêsu đã sinh ra, lớn lên, rao giảng Tin Mừng rồi Tử nạn và
                                    Phục Sinh. Một Đức Giêsu lịch sử, đã làm người, sống tại Israel - cầu nối của 3 lục
                                    địa Á, Âu, Phi. Đến đây để được sống, được tận hưởng bầu khí linh thiêng của hàng
                                    trăm triệu tín đồ trên khắp thế giới, được đặt tay lên tảng đá nơi Đức Mẹ quỳ gối
                                    đáp lời “Xin vâng”, quỳ cầu nguyện tại tảng đá mà Chúa Giêsu đã quỳ cầu nguyện trước
                                    cuộc khổ nạn, hôn kính tảng đá nơi đặt xác Chúa Giêsu hạ xuống từ thập giá…đi trên
                                    con đường lịch sử như Phúc Âm kể, vẫn thấy đâu đây hình bóng Chúa thấp thoáng trên
                                    mọi nẻo đường… còn bao nhiêu địa danh linh thiêng nữa, gắn với cuộc đời Đấng Cứu
                                    Thế, thật đáng yêu đáng kính, hấp dẫn mời gọi.
                                </p>
                            </div>
                        </div>
                        <div className={cx('HightLightTour__Heading')}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <span>Lịch trình</span>
                        </div>
                        <div className={cx('HightLightTour__dateSchedule')}>
                            <div className={cx('HightLightTour__dateSchedule__Item')}>
                                <div className={cx('HightLightTour__dateSchedule__Point')}>
                                    <FontAwesomeIcon icon={faCircleDot} />
                                </div>
                                <div className={cx('HightLightTour__dateSchedule__Heading')}>
                                    <span>NGÀY 1 | TP.HCM – ISRAEL (Ăn trên máy bay)</span>
                                </div>
                            </div>
                            <div className={cx('HightLightTour__dateSchedule__text')}>
                                <p>
                                    19h00 Quý khách tập trung tại Ga Quốc tế sân bay Tân Sơn Nhất, làm thủ tục trên
                                    chuyến bay của hãng hàng không Turkish Airlines lúc 21h25 để đến thành phố Tel Aviv
                                    – Israel (quá cảnh tại Istanbul, Thổ Nhĩ Kỳ), Lịch trình chuyến bay: TK 163 T SGNIST
                                    DK1 2210 0500 TK 784 T ISTTLV DK1 0700 0905 Quý khách ăn uống nghỉ đêm trên máy bay.
                                </p>
                            </div>
                        </div>
                        <div className={cx('HightLightTour__dateSchedule')}>
                            <div className={cx('HightLightTour__dateSchedule__Item')}>
                                <div className={cx('HightLightTour__dateSchedule__Point')}>
                                    <FontAwesomeIcon icon={faCircleDot} />
                                </div>
                                <div className={cx('HightLightTour__dateSchedule__Heading')}>
                                    <span>NGÀY 1 | TP.HCM – ISRAEL (Ăn trên máy bay)</span>
                                </div>
                            </div>
                            <div className={cx('HightLightTour__dateSchedule__text')}>
                                <p>
                                    19h00 Quý khách tập trung tại Ga Quốc tế sân bay Tân Sơn Nhất, làm thủ tục trên
                                    chuyến bay của hãng hàng không Turkish Airlines lúc 21h25 để đến thành phố Tel Aviv
                                    – Israel (quá cảnh tại Istanbul, Thổ Nhĩ Kỳ), Lịch trình chuyến bay: TK 163 T SGNIST
                                    DK1 2210 0500 TK 784 T ISTTLV DK1 0700 0905 Quý khách ăn uống nghỉ đêm trên máy bay.
                                </p>
                            </div>
                        </div>
                        <div className={cx('HightLightTour__dateSchedule')}>
                            <div className={cx('HightLightTour__dateSchedule__Item')}>
                                <div className={cx('HightLightTour__dateSchedule__Point')}>
                                    <FontAwesomeIcon icon={faCircleDot} />
                                </div>
                                <div className={cx('HightLightTour__dateSchedule__Heading')}>
                                    <span>NGÀY 1 | TP.HCM – ISRAEL (Ăn trên máy bay)</span>
                                </div>
                            </div>
                            <div className={cx('HightLightTour__dateSchedule__text')}>
                                <p>
                                    19h00 Quý khách tập trung tại Ga Quốc tế sân bay Tân Sơn Nhất, làm thủ tục trên
                                    chuyến bay của hãng hàng không Turkish Airlines lúc 21h25 để đến thành phố Tel Aviv
                                    – Israel (quá cảnh tại Istanbul, Thổ Nhĩ Kỳ), Lịch trình chuyến bay: TK 163 T SGNIST
                                    DK1 2210 0500 TK 784 T ISTTLV DK1 0700 0905 Quý khách ăn uống nghỉ đêm trên máy bay.
                                </p>
                            </div>
                        </div>
                        <div className={cx('HightLightTour__Heading')}>
                            <FontAwesomeIcon icon={faPaperclip} />
                            <span>Dịch vụ bao gồm và không bao gồm</span>
                        </div>
                    </div>
                    <div className={cx('descriptionTourContainer__Item__content__Item')}>
                        <div className={cx('descriptionTourContainer__Item__content__Item__navbar')}>
                            <div className={cx('descriptionTourContainer__Item__content__Item__navbarContainer')}>
                                <div className={cx('nameTour')}>
                                    <span>Du lịch Hành Hương Israel 8N7Đ theo bước chân Giêsu từ Sài Gòn 2023</span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Mã tour:</span>
                                    <span>16403</span>
                                </div>
                                <div className={cx('codeTour')}>
                                    <span>Thời gian:</span>
                                    <span>8 ngày 7 đêm</span>
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
                            <div className={cx('descriptionTourContainer__Item__content__Item__BoxPrice')}>
                                <div
                                    className={cx('descriptionTourContainer__Item__content__Item__BoxPrice__pricetour')}
                                >
                                    <span>Giá từ:</span>
                                    <span>49000000</span>
                                </div>
                                <div
                                    className={cx(
                                        'descriptionTourContainer__Item__content__Item__BoxPrice__optionDate',
                                    )}
                                >
                                    <input type={'date'} />
                                </div>
                                <div className={cx('btn__Contact')}>
                                    <button>Liên Hệ</button>
                                </div>
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
    );
}

export default DescriptionTour;
