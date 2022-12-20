import styles from './tool.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Tool({ arrayData }) {
    return (
        <div className={cx('ToolWrapper')}>
            <ul className={cx('ToolWrapper__List')}>
                {arrayData
                    ? arrayData.map((data, index) => {
                          return (
                              <li className={cx('ToolWrapper__List__Item')} key={index}>
                                  <button className={cx(data.backGroundBtn)}>
                                      {data.icon}
                                      {data.name}
                                  </button>
                              </li>
                          );
                      })
                    : ''}
            </ul>
        </div>
    );
}

export default Tool;
