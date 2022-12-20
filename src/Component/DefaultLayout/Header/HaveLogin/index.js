import styles from "./HaveLogin.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import Button from "../../../Button";
import { requestLogout } from "../../../../requetApi/post";
import { useNavigate } from "react-router";
const cx=classNames.bind(styles)
function HaveLogin() {
  const navigate=useNavigate()
  const getUserLocalStorage= JSON.parse(localStorage.getItem('user'))
  const handleLogout=()=>{
    requestLogout(getUserLocalStorage.id?getUserLocalStorage.id:'', navigate)
  }
    return (
        <Tippy
        render={attrs => (
          <div className="box" tabIndex="-1" {...attrs}>
            <div className={cx('tippy-Container')}>
                <Button className={cx('tippy-Container__Item')} children={'Log out'}  span
                onClick={handleLogout}
                />
                <Button className={cx('tippy-Container__Item1')} children={'Thêm chuyến du lịch'}  span/>
            </div>
            <div className={cx('tippy-Container')}>
                <Button className={cx('tippy-Container__Item')} children={'Thêm chuyến du lịch'}  span/>
            </div>
          </div>
          
        )}
        interactive
        placement="bottom"
      >
        <div className={cx('wrapper')}>
        {/* <img src={image ? image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZD3ax5r8GOo1604b8rE7fx5t_MJk3qKpS7w&usqp=CAU"}/> */}
        <Button className={cx('userName')} children={getUserLocalStorage.id? getUserLocalStorage.lastName +' '+ getUserLocalStorage.firstName : ''}/>
        </div>
        </Tippy>
    );
}

export default HaveLogin;