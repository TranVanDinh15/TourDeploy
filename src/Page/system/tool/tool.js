import styles from './tool.module.scss';
import classNames from 'classnames/bind';
import { handleClickTool } from '../../../handleEvent/handleEvent';
const cx = classNames.bind(styles);
function Tool({ arrayData, isFormCreate, setIsFormCreate, isFormDescription, setIsFormDescription }) {
    return (
        <div className={cx('ToolWrapper')}>
            <ul className={cx('ToolWrapper__List')}>
                {arrayData
                    ? arrayData.map((data, index) => {
                          return (
                              <li className={cx('ToolWrapper__List__Item')} key={index}>
                                  <button
                                      className={cx(data.backGroundBtn)}
                                      onClick={(event) => {
                                          event.preventDefault();
                                          if (data.id == 1) {
                                              handleClickTool(isFormCreate, setIsFormCreate, setIsFormDescription);
                                          }
                                          if (data.id == 2) {
                                              if (isFormDescription) {
                                                  setIsFormDescription(false);
                                              } else {
                                                  setIsFormDescription(true);
                                                  setIsFormCreate(false);
                                              }
                                          }
                                      }}
                                  >
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
