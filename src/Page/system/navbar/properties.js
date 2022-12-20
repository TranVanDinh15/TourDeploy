import styles from './navBar.module.scss';
import classNames from 'classnames/bind';
import Form from '../form/form';
const cx = classNames.bind(styles);
function Properties({ children }) {
    return <div className={cx('PropertiesContainer')}>{children}</div>;
}
export default Properties;
