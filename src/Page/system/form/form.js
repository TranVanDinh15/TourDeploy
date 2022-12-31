import styles from './form.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { handleCreateTour, handleCreatTour, handleGetAllAroadTour } from '../../../handleEvent/handleEvent';
import { ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);
// tentour: DataTypes.STRING,
// songayditour: DataTypes.INTEGER,
// backGround: DataTypes.BLOB,
// hinhanh1: DataTypes.BLOB,
// hinhanh2: DataTypes.BLOB,
// hinhanh3: DataTypes.BLOB,
// hinhanh4: DataTypes.BLOB,
// video: DataTypes.STRING,
// gioithieutour: DataTypes.STRING,
// maloaitour: DataTypes.STRING,
// maloaimien: DataTypes.STRING,
// matournuocngoai: DataTypes.STRING,
function FormCreateTour({ FormArray }) {
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const newFileReader = new FileReader();
            newFileReader.readAsDataURL(file);
            newFileReader.onload = () => {
                resolve(newFileReader.result);
            };
            newFileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const [requestCreate, setRequestCreate] = useState({
        tentour: '',
        songayditour: '',
        backGround: '',
        hinhanh1: '',
        chiPhi: '',
        video: '',
        gioithieutour: '',
        maloaitour: '',
        maloaimien: '',
        matournuocngoai: '',
    });
    const [allAbroadTour, setAllAbroadTour] = useState('');
    useEffect(() => {
        handleGetAllAroadTour(setAllAbroadTour);
    }, []);
    console.log(requestCreate);
    return (
        <div className={cx('FormContainer')}>
            <div className={cx('FormContainer__Item')}>
                <FontAwesomeIcon icon={faGlobe} />
                Chi tiết Tour
            </div>
            <div className={cx('FormContainer__FormItem')}>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Tên Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.tentour}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    tentour: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Số ngày đi Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.songayditour}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    songayditour: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Video mô tả</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.video}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    video: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Chi Phí</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.chiPhi}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    chiPhi: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Giới thiệu Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.gioithieutour}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    gioithieutour: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Mã Tour Nước Ngoài</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.matournuocngoai}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    matournuocngoai: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Mã Loại Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.maloaitour}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    maloaitour: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Mã loại miền</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input
                            type={'text'}
                            value={requestCreate.maloaimien}
                            onChange={(event) => {
                                setRequestCreate({
                                    ...requestCreate,
                                    maloaimien: event.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>BackGround</span>
                    </div>

                    <div className={cx('FormContainer__FormItem__file')}>
                        <input
                            type={'file'}
                            onChange={async (event) => {
                                const file = event.target.files[0];
                                const base64 = await convertBase64(file);
                                console.log(base64);
                                setRequestCreate({
                                    ...requestCreate,
                                    backGround: base64,
                                });
                            }}
                        />
                        <div className={cx('FormContainer__FormItem__icon')}>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        {requestCreate.backGround ? (
                            <div className={cx('FormContainer__FormItem__boxImage')}>
                                <img src={requestCreate.backGround} />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>

                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Ảnh Mô Tả 1</span>
                    </div>

                    <div className={cx('FormContainer__FormItem__file')}>
                        <input
                            type={'file'}
                            onChange={async (event) => {
                                const file = event.target.files[0];
                                const base64 = await convertBase64(file);
                                console.log(base64);
                                setRequestCreate({
                                    ...requestCreate,
                                    hinhanh1: base64,
                                });
                            }}
                        />
                        <div className={cx('FormContainer__FormItem__icon')}>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        {requestCreate.hinhanh1 ? (
                            <div className={cx('FormContainer__FormItem__boxImage')}>
                                <img src={requestCreate.hinhanh1} />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('FormContainer__FormItem__container__btn')}>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        handleCreateTour(requestCreate);
                    }}
                >
                    Tạo
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
export default FormCreateTour;
