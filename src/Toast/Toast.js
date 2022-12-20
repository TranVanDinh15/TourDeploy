import styles from "./Toast.module.scss";
import classNames from "classnames/bind";
import { Children } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
const cx = classNames.bind(styles);
function Toast({ content }) {
  return (
    <>
      <div style={{backgroundColor:content.color}} className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("icon")}>
          {content.icon}
          </div>
          <div className={cx("content")}>
            <span>{content.status}</span>
            <span>{content.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toast;
