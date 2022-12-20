import styles from "./ListIcon.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import { useContext, useRef, useState } from "react";
import MenuBars from "../MenuBars";
import LogInOut from "../Login_out";
import { context } from "../../../../AuthProvider/AuthProvider";
import HaveLoginFb from "../HaveLogin/facebook";
import {  FaShoppingBag, FaShoppingBasket, FaShoppingCart} from "react-icons/fa";
const cx = classNames.bind(styles);
function ListIcon() {
  const userFb=useContext(context)
  console.log(userFb)
  const ref = useRef();
  let check = true;
  const [menuBar, setMenuBars] = useState();
  const handle = () => {
    if (check) {
      console.log(ref.current);
      ref.current.className = cx("display");
      check = false;
    } else {
      ref.current.className = cx("inputItem");
      check = true;
    }
  };
  return (
    <div className={cx("wrapper")}>
      <Button className={cx("iconItem")} children={<FaShoppingBasket />} />
      { userFb ? <HaveLoginFb/>:<LogInOut/>}
      {menuBar && <MenuBars />}
      <div className={cx("inputItem")} ref={ref}>
        <form action="">
          <input type={"text"} placeholder="Search" />
        </form>
      </div>
    </div>
  );
}

export default ListIcon;
