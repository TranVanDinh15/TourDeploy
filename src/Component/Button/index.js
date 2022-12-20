import styles from "./Button.module.scss";
import { Fragment } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({ children, to, href,span, onClick, ...propsAdd }) {
  let Comp = "button";
  let props = {
    onClick,
    ...propsAdd,
  };
  if (to) {
    Comp = Link;
    props.to=to
} else if (href) {
    Comp = "a";
    props.href=href
  }else if(span){
    Comp="span"
  }
  return (
    <Fragment>
      <Comp  className={cx("btn")} {...props}>
        {children}
      </Comp>
    </Fragment>
  );
}

export default Button;
