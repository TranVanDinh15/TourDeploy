import styles from './form.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
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
function Form({ FormArray }) {
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
        hinhanh2: '',
        hinhanh3: '',
        hinhanh4: '',
        video: '',
        gioithieutour: '',
        maloaitour: '',
        maloaimien: '',
        matournuocngoai: '',
    });
    console.log(requestCreate);
    return (
        <div className={cx('FormContainer')}>
            <div className={cx('FormContainer__Item')}>
                <FontAwesomeIcon icon={faUser} />
                Chi tiết tài khoản
            </div>
            <div className={cx('FormContainer__FormItem')}>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Tên Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input type={'text'} />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Số ngày đi Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input type={'text'} />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Video mô tả</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input type={'text'} />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Giới thiệu Tour</span>
                    </div>
                    <div className={cx('FormContainer__FormItem__input')}>
                        <input type={'text'} />
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
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Ảnh Mô Tả 2</span>
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
                                    hinhanh2: base64,
                                });
                            }}
                        />
                        <div className={cx('FormContainer__FormItem__icon')}>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        {requestCreate.hinhanh2 ? (
                            <div className={cx('FormContainer__FormItem__boxImage')}>
                                <img src={requestCreate.hinhanh2} />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Ảnh Mô Tả 3</span>
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
                                    hinhanh3: base64,
                                });
                            }}
                        />
                        <div className={cx('FormContainer__FormItem__icon')}>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        {requestCreate.hinhanh3 ? (
                            <div className={cx('FormContainer__FormItem__boxImage')}>
                                <img src={requestCreate.hinhanh3} />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container')}>
                    <div className={cx('FormContainer__FormItem__field')}>
                        <span>Ảnh Mô Tả 4</span>
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
                                    hinhanh4: base64,
                                });
                            }}
                        />
                        <div className={cx('FormContainer__FormItem__icon')}>
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                        {requestCreate.hinhanh4 ? (
                            <div className={cx('FormContainer__FormItem__boxImage')}>
                                <img src={requestCreate.hinhanh4} />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Form;
