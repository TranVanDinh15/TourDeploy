import styles from "./inforClient.module.scss";
import classNames from "classnames/bind";
import Header from "../../Component/DefaultLayout/Header";
import { FaAngleDown, FaCheck, FaEllipsisH, FaPercent } from "react-icons/fa";
import store from "../../redux/userReducer";
import { context } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
const cx = classNames.bind(styles);
function InforClient() {
  const isTour = store.getState().user.tour.currentTour;
  const inForUser = useContext(context);
  const [checkClick, setCheckClick] = useState(true);
  const [national, setNational] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inforTour = store.getState().user.inforTour.currentInforTour;
  console.log(store.getState().user.inforTour.currentInforTour);
  return (
    <div className={cx("InforClientWrapper")}>
      <Header />
      <div className={cx("InforClientWrapper")}>
        <div className={cx("statusOrder")}>
          <div className={cx("ChooseOrder")}>
            <span className={cx("GreenCheck")}>
              <FaCheck />
            </span>
            <span>Chọn đơn hàng</span>
          </div>
          <div className={cx("lineGreen")}></div>
          <div className={cx("ChooseOrder")}>
            <span className={cx("OrangeCheck")}>
              <FaEllipsisH />
            </span>
            <span>Điền thông tin</span>
          </div>
          <div className={cx("lineGrey")}></div>
          <div className={cx("ChooseOrderGrey")}>
            <span className={cx("GreyCheck")}></span>
            <span>Thanh Toán</span>
          </div>
        </div>
        <div className={cx("title")}>
          <span>Điền thông tin</span>
        </div>
        <div className={cx("FillInformation")}>
          <div className={cx("FillInformationItem1")}>
            <div className={cx("titleOrder")}>
              <span>Thông tin đơn hàng</span>
            </div>
            <div className={cx("inforOderBox")}>
              <div className={cx("inforOderBox__Image")}>
                <img src={isTour ? isTour.image : ""} />
              </div>
              <div className={cx("inforOderBox__NameTour")}>
                <span>{isTour ? isTour.name : ""}</span>
              </div>
            </div>
            <div className={cx("titleOrder")}>
              <span>Thông tin liên lạc</span>
            </div>
            <div className={cx("communications")}>
              <div className={cx("communications__Name")}>
                <span>{inForUser ? inForUser.displayName : ""}</span>
                {/* <span>
                  <FaPlus /> Thêm
                </span> */}
              </div>
              <div className={cx("communications__infor")}>
                <span>Họ</span>
                <span>{inForUser ? inForUser.displayName : ""}</span>
              </div>
              <div className={cx("communications__infor")}>
                <span>Tên</span>
                <span>{inForUser ? inForUser.displayName : ""}</span>
              </div>
              <div className={cx("communications__infor")}>
                <span>Quốc gia/khu vực</span>
                <input
                  type={"text"}
                  placeholder={"Quốc tịch"}
                  value={national}
                  onChange={(event) => {
                    setNational(event.target.value);
                  }}
                />
              </div>
              <div className={cx("communications__infor")}>
                <span>Số điện thoại</span>
                <input type={"text"} placeholder={"Nhập sđt liên lạc"} />
              </div>
              <div className={cx("communications__infor")}>
                <span>Email (để cập nhật thông tin đơn hàng của bạn)</span>
                <span>{inForUser ? inForUser.email : ""}</span>
                {/* <span><FaPenSquare/>Chỉnh sửa</span> */}
              </div>
            </div>
            <div className={cx("titleOrder")}>
              <span>Loại ưu đãi</span>
            </div>
            {checkClick ? (
              <div
                className={cx("discountTour")}
                onClick={() => {
                  setCheckClick(false);
                }}
              >
                <span>
                  <FaPercent />
                  Sử dụng mã ưu đãi
                </span>
              </div>
            ) : (
              ""
            )}
            {checkClick == false ? (
              <div className={cx("discountTourInput")}>
                <span
                  onClick={() => {
                    setCheckClick(true);
                  }}
                >
                  Nhập mã ưu đãi của bạn để nhận giảm giá
                  <FaAngleDown className={cx("AngleDown")} />
                </span>
                <div className={cx("inputItem")}>
                  <input type={"text"} placeholder={"Nhập mã khuyến mãi"} />
                  <button>Sử dụng</button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={cx("continues")}>
              <button>Tiếp Tục</button>
            </div>
          </div>
          <div className={cx("FillInformationItem2")}>
            <div className={cx("titleTour")}>
              <span>{isTour ? isTour.name : ""}</span>
            </div>
            <div className={cx("DateAmount")}>
              <div className={cx("dateBox")}>
                <span>Ngày</span>
                <span>{inforTour ? inforTour.day : ""}</span>
              </div>
              <div className={cx("amountBox")}>
                <span>Đơn vị</span>
                <span>{inforTour ? inforTour.amount : ""}</span>
              </div>
            </div>
            <div className={cx("totalTour")}>
              <span>Tổng cộng</span>
              <span>
                {inforTour?(inforTour.totalCost).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }):''}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforClient;
