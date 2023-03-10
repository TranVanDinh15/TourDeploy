import styles from './form.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { handleCreateDescription } from '../../../handleEvent/handleEvent';
import { ToastContainer } from 'react-toastify';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
const cx = classNames.bind(styles);
function FormCreateDescriptionTour({ FormArray }) {
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
        maloaitour: '',
        manoidung: '',
        lichtrinhtheongay: '',
        noidung: '',
    });
    // Initialize a markdown parser
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    // Finish!
    function handleEditorChange({ html, text }) {
        // console.log('handleEditorChange', html, text);
        setRequestCreate({
            ...requestCreate,
            noidung: html,
        });
    }
    console.log(requestCreate);
    return (
        <div className={cx('FormContainer')}>
            <div className={cx('FormContainer__Item')}>
                <FontAwesomeIcon icon={faPlane} />
                Mô tả lịch trình
            </div>
            <div className={cx('FormContainer__FormItem')}>
                <div className={cx('FormContainer__FormItem__nav')}>
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
                            <span>Mã Nội Dung</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input
                                type={'text'}
                                value={requestCreate.manoidung}
                                onChange={(event) => {
                                    setRequestCreate({
                                        ...requestCreate,
                                        manoidung: event.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Lịch Trình Theo Ngày</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input
                                type={'text'}
                                value={requestCreate.lichtrinhtheongay}
                                onChange={(event) => {
                                    setRequestCreate({
                                        ...requestCreate,
                                        lichtrinhtheongay: event.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Nội Dung</span>
                        </div>
                        {/*<div className={cx('FormContainer__FormItem__input')}>
                            <input
                                type={'text'}
                                value={requestCreate.noidung}
                                onChange={(event) => {
                                    setRequestCreate({
                                        ...requestCreate,
                                        noidung: event.target.value,
                                    });
                                }}
                            />
                        </div> */}
                        <MdEditor
                            style={{ height: '300px', width: '900px' }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container__btn')}>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            handleCreateDescription(requestCreate);
                        }}
                    >
                        Tạo
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
export default FormCreateDescriptionTour;
