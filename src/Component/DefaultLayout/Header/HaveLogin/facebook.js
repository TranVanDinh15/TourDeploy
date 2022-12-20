import classNames from "classnames/bind";
import styles from "./HaveLogin.module.scss";
import Tippy from "@tippyjs/react/headless";
import Button from "../../../Button";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { context } from "../../../../AuthProvider/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
const cx=classNames.bind(styles)
function HaveLoginFb() {
  const auth = getAuth();
    const userFb=useContext(context)
    const handleLogout=()=>{
      signOut(auth)
    window.location.reload()
    }
    return (
        <Tippy
        render={attrs => (
          <div className="box" tabIndex="-1" {...attrs}>
            <div className={cx('tippy-Container')}>
                <Button className={cx('tippy-Container__Item')} children={<span>Log out <FaArrowRight/></span>}  span
                onClick={handleLogout}
                />
            </div>
            <div className={cx('tippy-Container')}>
                {userFb && userFb.email==="0352396759asd@gmail.com"?<Button className={cx('tippy-Container__Item')} children={'Thêm chuyến du lịch'}  to={'/addTour'}/>:''}
            </div>
          </div>
          
        )}
        interactive
        placement="bottom-end"
      >
        <div className={cx('wrapperFB')}>
        <img src={ userFb.photoURL}/>
        {/* <Button className={cx('userNameFb')} children={userFb.displayName}/> */}
        </div>
        </Tippy>
    );
}

export default HaveLoginFb