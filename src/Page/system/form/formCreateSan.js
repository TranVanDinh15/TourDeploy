import styles from './form.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { handleCreateAboadSytem, handleCreateSan } from '../../../handleEvent/handleEvent';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const cx = classNames.bind(styles);
function FormCreateSanTour({ FormArray }) {
    const [requestCreate, setRequestCreate] = useState({
        maloaitour: '',
        masan: '',
        dichvu: '',
        ghichu: '',
    });
    console.log(requestCreate);
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    function handleEditorChange({ html, text }) {
        setRequestCreate({
            ...requestCreate,
            dichvu: html,
        });
    }
    function handleEditorNote({ html, text }) {
        setRequestCreate({
            ...requestCreate,
            ghichu: html,
        });
    }
    return (
        <div className={cx('FormContainer')}>
            <div className={cx('FormContainer__Item')}>
                <FontAwesomeIcon icon={faPlane} />
                Dịch vụ và ghi chú
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
                            <span>Mã san</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <input
                                type={'text'}
                                value={requestCreate.masan}
                                onChange={(event) => {
                                    setRequestCreate({
                                        ...requestCreate,
                                        masan: event.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Mô tả dịch vụ</span>
                        </div>
                        <div className={cx('FormContainer__FormItem__input')}>
                            <MdEditor
                                style={{ height: '300px', width: '900px' }}
                                renderHTML={(text) => mdParser.render(text)}
                                onChange={handleEditorChange}
                            />
                        </div>
                    </div>
                    <div className={cx('FormContainer__FormItem__container')}>
                        <div className={cx('FormContainer__FormItem__field')}>
                            <span>Ghi chú Tour</span>
                        </div>
                        <MdEditor
                            style={{ height: '300px', width: '900px' }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorNote}
                        />
                    </div>
                </div>
                <div className={cx('FormContainer__FormItem__container__btn')}>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            handleCreateSan(requestCreate);
                        }}
                    >
                        Tạo
                    </button>
                </div>
            </div>
        </div>
    );
}
export default FormCreateSanTour;
