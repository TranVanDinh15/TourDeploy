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
function FormCreateAccount({ FormArray }) {
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        date: '',
        address: '',
    });
    console.log(requestCreate);
    return (
        <div className={cx('FormContainer')}>
            <div className={cx('FormContainer__Item')}>
                <FontAwesomeIcon icon={faUser} />
                Chi tiết tài khoản
            </div>
            <div className={cx('FormContainer__FormItem')}>
                <div className={cx('FormContainer__FormItem__nav')}>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Họ và tên đệm</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input type={'text'} />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Tên</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input type={'text'} />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>email</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input type={'text'} />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Mật khẩu</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input type={'password'} />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Giới tính</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <select id="framework">
                                <option value="">Khác</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Ngày Sinh</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input type={'date'} />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Địa chỉ</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input type={'text'} />
                        </div>
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container__btn')}>
                    <button>Tạo</button>
                </div>
            </div>
        </div>
    );
}
export default FormCreateAccount;
