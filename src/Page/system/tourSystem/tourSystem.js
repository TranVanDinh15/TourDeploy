import styles from './tourSytem.module.scss';
import classNames from 'classnames/bind';
import HeaderSystem from '../headerSystem/headerSystem';
import NavBar from '../navbar/navBar';
import Tool from '../tool/tool';
import { arrayNavbarTour, toolTour } from '../arrayData/arrayData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FormCreateTour from '../form/form';
import { useState } from 'react';
import FormCreateDescriptionTour from '../form/createDescriptionTour';
import FormCreateSanTour from '../form/formCreateSan';
const cx = classNames.bind(styles);
function TourSystem() {
    const title = {
        name: 'Tour',
        icon: <FontAwesomeIcon icon={faGlobe} />,
    };
    const [isTour, setIsTour] = useState(false);
    const [isDesciptionTour, setIsDescriptionTour] = useState(false);
    const [isSan, setIsSan] = useState(false);
    return (
        <div className={cx('TourSystemWrapper')}>
            <HeaderSystem title={title} />
            <Tool
                arrayData={toolTour}
                isFormCreate={isTour}
                setIsFormCreate={setIsTour}
                isFormDescription={isDesciptionTour}
                setIsFormDescription={setIsDescriptionTour}
                isSan={isSan}
                setIsSan={setIsSan}
            />
            {isTour ? (
                <NavBar navBarArray={arrayNavbarTour} FormCreateAccount={isTour ? <FormCreateTour /> : ''} />
            ) : (
                ''
            )}
            {isDesciptionTour ? (
                <NavBar
                    navBarArray={arrayNavbarTour}
                    FormCreateAccount={isDesciptionTour ? <FormCreateDescriptionTour /> : ''}
                />
            ) : (
                ''
            )}
            {isSan ? <NavBar navBarArray={arrayNavbarTour} FormCreateAccount={<FormCreateSanTour />} /> : ''}
        </div>
    );
}

export default TourSystem;
