import styles from './form.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { handleCreateAboadSytem } from '../../../handleEvent/handleEvent';
const cx = classNames.bind(styles);
function FormCreateAbroadTour({ FormArray }) {
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
        matournuocngoai: '',
        tencactournuocngoai: '',
    });
    console.log(requestCreate);
    return (
        <div className={cx('FormContainer')}>
            <div className={cx('FormContainer__Item')}>
                <FontAwesomeIcon icon={faPlane} />
                Chi Tiết Tour
            </div>
            <div className={cx('FormContainer__FormItem')}>
                <div className={cx('FormContainer__FormItem__nav')}>
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
                            <span>Tên Các Tour Nước Ngoài</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input
                                type={'text'}
                                value={requestCreate.tencactournuocngoai}
                                onChange={(event) => {
                                    setRequestCreate({
                                        ...requestCreate,
                                        tencactournuocngoai: event.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={cx('FormContainer__FormItem__container__btn')}>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            handleCreateAboadSytem(requestCreate);
                        }}
                    >
                        Tạo
                    </button>
                </div>
            </div>
        </div>
    );
}
export default FormCreateAbroadTour;
