import styles from "./Global.module.scss";
import classNames from "classnames/bind";
import './Global.css'
const cx = classNames.bind(styles);
function Global({ children }) {
  return <div>{children}</div>;
}

export default Global;
