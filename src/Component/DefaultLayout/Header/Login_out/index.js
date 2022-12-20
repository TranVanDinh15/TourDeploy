import styles from "./Loginout.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
const cx=classNames.bind(styles)
function LogInOut() {
  return (
    <>
      {/* <Button className={cx("iconItem_btn")} children={'Đăng ký'} to={'/signup'} /> */}
      <Button className={cx("iconItem_btn")} children={'Đăng nhập'} to={'/login'}/>
    </>
  );
}

export default LogInOut;
