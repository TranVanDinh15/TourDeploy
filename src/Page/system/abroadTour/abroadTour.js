import styles from './abroadTour.module.scss';
import classNames from 'classnames/bind';
import HeaderSystem from '../headerSystem/headerSystem';
import NavBar from '../navbar/navBar';
import Tool from '../tool/tool';
import { navBarAbroadTour, toolAroadTour } from '../arrayData/arrayData';
import FormCreateAccount from '../form/userAccountForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import FormCreateAbroadTour from '../form/formCreateAboadTour';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import FormTable from '../form/formTable';
import { handleGetAllAroadTour } from '../../../handleEvent/handleEvent';
const cx = classNames.bind(styles);
function AbroadTour() {
    const abroadTourTitle = {
        name: 'Tour nước ngoài',
        icon: <FontAwesomeIcon icon={faPlane} />,
    };
    const titleTable = [
        {
            name: 'Mã Tour Nước Ngoài',
        },
        {
            name: 'Tên Các Tour Nước Ngoài',
        },
    ];
    const [allAbroadTour, setAllAbroadTour] = useState('');
    const [isFormCreate, setIsFormCreate] = useState(false);
    useEffect(() => {
        handleGetAllAroadTour(setAllAbroadTour);
    }, []);
    return (
        <div className={cx('AbroadTourWrapper')}>
            <HeaderSystem title={abroadTourTitle} />
            <Tool arrayData={toolAroadTour} isFormCreate={isFormCreate} setIsFormCreate={setIsFormCreate} />
            {isFormCreate ? (
                <NavBar
                    navBarArray={navBarAbroadTour}
                    FormCreateAccount={isFormCreate ? <FormCreateAbroadTour /> : ''}
                />
            ) : (
                ''
            )}
            <NavBar
                navBarArray={navBarAbroadTour}
                FormCreateAccount={<FormTable titleTable={titleTable} contentTable={allAbroadTour} />}
            />
            <ToastContainer />
        </div>
    );
}

export default AbroadTour;
