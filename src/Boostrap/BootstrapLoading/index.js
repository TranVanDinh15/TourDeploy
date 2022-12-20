import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Loading.module.scss'
import classNames from 'classnames/bind';
const cx=classNames.bind(styles)
function Loading () {
    return (
        <div className={cx('wrapper')} >
        <div className="spinner-grow text-primary" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-secondary" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-success" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-danger" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-warning" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-info" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-pink" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
<div className="spinner-grow text-dark" role="status">
  {/* <span className="sr-only">Loading...</span> */}
</div>
        </div>
    );
}

export default  Loading
