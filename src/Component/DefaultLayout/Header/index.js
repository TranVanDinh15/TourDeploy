import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Logo from "./Logo";
import ListMenu from "./ListMenu";
import ListIcon from "./ListIcon";
import { useRef } from "react";
const cx = classNames.bind(styles);
const ListMenuItem = [
  {
    name: "HOME",
    to: "/",
  },
  {
    name: "CÁCH ĐI DU LỊCH",
    to: "/tours",
  },
  {
    name: "ƯU ĐÃI",
    to: "/blog",
  },
  {
    name: "MỤC ĐÍCH",
    to: "/purpose",
  },
];

function Header() {
  const headerRef=useRef()
  window.onscroll=()=>{
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
      headerRef.current.style.backgroundColor='#ddd'
      headerRef.current.style.boxShadow='0 2px 0px rgb(204, 204, 204, #ddd)'
    }else{
      headerRef.current.style.backgroundColor='white'
    }
  }
  return (
    <div className={cx("wrapper")}
    ref={headerRef}
    >
      <div className={cx("container")} >
        <Logo />
        <ListMenu />
        <ListIcon/>
      </div>
    </div>
  );
}
export { ListMenuItem };
export default Header;
