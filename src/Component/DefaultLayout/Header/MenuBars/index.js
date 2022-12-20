import styles from "./MenuBars.module.scss";
import classNames from "classnames/bind";
const cx=classNames.bind(styles)
function MenuBars() {
    const classe=cx('wrapper',{
      
    })
    return (
        <div className={classe}>
            <div className={cx('container')}>
                
            </div>
        </div>
    );
}

export default MenuBars;