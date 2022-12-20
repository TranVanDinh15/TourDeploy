import styles from './Logo.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Logo() {
    return (
        <a href='/' className={cx('wrapper')}>
            {/* <img src='https://tranhoangkhang1212.github.io/travelix/assets/images/logo.webp' alt='Image Error'/> */}
            ToursVN
        </a>
    );
}

export default Logo
