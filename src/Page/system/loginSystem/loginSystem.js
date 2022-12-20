import styles from "./loginSystem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function LoginSystem() {
  return <div className={cx("loginSystemWrapper")}>
    <div className={cx("loginSystemWrapper__Item")}>
        <div className={cx("loginSystemWrapper__Item__Heading")}>
            <span>Đăng Nhập</span>
        </div>
        <div className={cx("loginSystemWrapper__Item__Form")}>
            <div className={cx("loginSystemWrapper__Item__Form__Item")}>
                <span>Email</span>
            </div>
            <div className={cx("loginSystemWrapper__Item__Form__Input")}>
                <input type={"text"} placeholder={'...'}/>
            </div>
        </div>
        <div className={cx("loginSystemWrapper__Item__Form")}>
            <div className={cx("loginSystemWrapper__Item__Form__Item")}>
                <span>Password</span>
            </div>
            <div className={cx("loginSystemWrapper__Item__Form__Input")}>
                <input type={"password"} placeholder={'...'}/>
            </div>
        </div>
        <div className={cx("loginSystemWrapper__Item__btn")}>
           <button>Đăng Nhập</button>
        </div>
    </div>
  </div>;
}

export default LoginSystem;
