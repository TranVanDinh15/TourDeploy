import Header from "../../Component/DefaultLayout/Header";
import styles from "./signup.module.scss";
import classNames from "classnames/bind";
import { FaLock, FaUser, FaSignature, FaMobileAlt, FaCheckCircle  } from "react-icons/fa";
import Button from "../../Component/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { requestLogin, requestRegister } from "../../requetApi/post";
import  Toast  from "../../Toast/Toast";
const cx = classNames.bind(styles);
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.user);
  console.log(stateUser)
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [firstName, setFistName]=useState("")
  const [lastName, setLastName]=useState("")
  const [roleId, setRoleId]=useState("")
  const [phone, setphone]=useState("")
  const [gender, setGender]=useState("")
  const [toast, setToast]=useState(false)
  const [missParam, setMissParam]=useState(false)
  let success={
    icon: <FaCheckCircle/>,
    status: 'Success',
    description: 'Đăng ký thành công !!',
    color: "#4ba155"
  }
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <>
    <Header />
      {toast? < Toast content={success}/>:''}
      <div className={cx("wrapper")}>
        <div className={cx("form")}>
          <form action="">
            <div className={cx("Heading")}>
              <h4>Đăng Ký</h4>
              {missParam ? <span>Vui lòng nhập đầy đủ thông tin ! :))</span>: ''}
            </div>
            <div className={cx("User")}>
              <FaSignature className="icon" />
              <input type={"text"} placeholder="Họ và tên đệm" onChange={(e)=>{
                setFistName(e.target.value)
              }}/>
            </div>
            <div className={cx("User")}>
              <FaSignature className="icon" />
              <input type={"text"} placeholder="Tên của bạn" onChange={(e)=>{
                setLastName(e.target.value)
              }}/>
            </div>
            <div className={cx("User")}>
              <FaUser className="icon" />
              <input type={"text"} placeholder="Email" onChange={handleEmail} />
            </div>
            <div className={cx("User")}>
              <FaLock className="icon" />
              <input
                type={"password"}
                placeholder="Mật khẩu"
                onChange={handlePassword}
              />
            </div>
            <div className={cx("User")}>
              <FaSignature className="icon" />
              <input type={"text"} placeholder="Role ID" onChange={(e)=>{
                setRoleId(e.target.value)
              }}/>
            </div>
            <div className={cx("User")}>
              <FaMobileAlt className="icon" />
              <input type={"text"} placeholder="Số điện thoại" onChange={(e)=>{
                setphone(e.target.value)
              }}/>
            </div>
            <div className={cx("User")}>
                <h5>Ngày sinh</h5>
              <input type={"date"}  />
            </div>
            <div className={cx("UserGender")}>
                <h5>Giới tính :</h5>
                <label className={cx("UserGender__item")} htmlFor="male">
                    <span>Nam</span>
                    <input type={"radio"} name="gender" id="male" value={"male"} onChange={(e)=>{
                      setGender(e.target.value)
                    }}/>
                </label>
                <label className={cx("UserGender__item")} htmlFor="female"  onChange={(e)=>{
                      setGender(e.target.value)
                    }}>
                    <span>Nữ</span>
                    <input type={"radio"} name="gender" id="female" value={"female"}/>
                </label>
                <label className={cx("UserGender__item")} htmlFor="otherGenders">
                    <span>Khác</span>
                    <input type={"radio"} name="gender" id="otherGenders" value={"otherGenders"}  onChange={(e)=>{
                      setGender(e.target.value)
                    }}/>
                </label>
            </div>
            <div style={{ color: "red" }} className={cx("errorNotification")}>
              {stateUser.currentUser}
            </div>
            <div className={cx("btn")}>
              <Button
                className={cx("btn__Item")}
                children={"Đăng ký "}
                onClick={(event) => {
                  event.preventDefault();
                  const param={
                    email: userEmail,
                    password: userPassword,
                    roleId: roleId,
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender
                  }
                  if(param.email=='' || param.firstName=='' || param.lastName==''|| param.password=='' || param.gender=='' || param.roleId==''){
                    setMissParam(true)
                  }
                  requestRegister(param, dispatch, navigate, setToast)
                  window.scrollBy(0, -500)
                }}
              />
            </div>
          </form>
        </div>
        <div className={cx("image_container")}>
          <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-9.jpg" />
        </div>
      </div>
    </>
  );
}

export default Signup;
