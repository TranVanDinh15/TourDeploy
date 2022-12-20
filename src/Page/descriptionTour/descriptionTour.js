import styles from "./descriptionTour.module.scss";
import classNames from "classnames/bind";
import Header from "../../Component/DefaultLayout/Header";
import { FaAngleDown, FaBolt, FaClock } from "react-icons/fa";
import { useState, useContext } from "react";
import Comment from "../../SocialPlugin/Commentplugin";
import store from "../../redux/userReducer";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/themes/light.css";
import { context } from "../../../src/AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { inforTour } from "../../redux/userSlice";
const cx = classNames.bind(styles);
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
function DescriptionTour() {
  const [dateTour, setDateTour] = useState("");
  const [amountPerSonBig, setAmountPerSonBig] = useState(0);
  const [amountChilren, setAmountChildren] = useState(0);
  const [pricePerSonBig, setPricePerSonBig] = useState(1391000);
  const [priceChildren, setPriceChildren] = useState(1182327);
  const [checkLost, setCheckLost] = useState(true);
  const contextUser = useContext(context);
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const totalCost =
    pricePerSonBig * amountPerSonBig + priceChildren * amountChilren;
  const isTour = store.getState().user.tour.currentTour;
  
  console.log(contextUser);
  return (
    <>
      <Header />
      <div className={cx("wrapperDescript")}>
        {isTour ? (
          <div className={cx("containerDescript")}>
            <div className={cx("containerDescriptItem")}>
              <div className={cx("backGroundtour")}>
                <img src={isTour.image} alt="" />
              </div>
              <div className={cx("titleDiscript")}>
                {/* <span>ToursVn >> descriptiontour</span> */}
              </div>
            </div>
            <div className={cx("contentDescript")}>
              <div className={cx("NameToursDescript")}>
                <h3>{isTour.name}</h3>
                <div className={cx("titleTour")}>
                  Hành trình <span> 1 ngày </span> tham quan{" "}
                  <span>{isTour.name}</span>
                </div>
                <div className={cx("ServiceDescript")}>
                  <span>Về dịch vụ này</span>
                </div>
                <div className={cx("descriptionTour")}>
                  <p>{isTour.descriptionHTML}</p>
                </div>
                <div className={cx("ServiceDescript")} id={"Package"}>
                  <span>Các gói dịch vụ</span>
                </div>
                <div className={cx("Package")}>
                  <div className={cx("Package__title")}>
                    <span>Vui lòng chọn ngày & gói dịch vụ</span>
                  </div>
                  <div className={cx("dateTour")}>
                    <span>Xin chọn ngày đi tour</span>
                    <input
                      type={"date"}
                      min="2022-26-07"
                      value={dateTour}
                      onChange={(event) => {
                        console.log(event);
                        setDateTour(event.target.value);
                      }}
                    />
                    {(dateTour && day > dateTour.slice(8, 10)) ||
                    month > dateTour.slice(5, 7) ||
                    year > dateTour.slice(0, 4) ? (
                      <span style={{ color: "red" }}>Ngày không hợp lệ</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={cx("amount__title")}>
                    <span>Số Lượng</span>
                  </div>
                  <div className={cx("amountPerson")}>
                    <span>Người lớn</span>
                    <span className={cx("PricePerson")}>
                      {pricePerSonBig.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                    <input
                      type={"number"}
                      min={"0"}
                      max={"92"}
                      value={amountPerSonBig}
                      onChange={(event) => {
                        setAmountPerSonBig(event.target.value);
                      }}
                    />
                  </div>
                  <div className={cx("amountPerson")}>
                    <span>Trẻ em(3-11)</span>
                    <span className={cx("PricePerson")}>
                      {priceChildren.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                    <input
                      type={"number"}
                      min={"0"}
                      max={"92"}
                      value={amountChilren}
                      onChange={(event) => {
                        setAmountChildren(event.target.value);
                      }}
                    />
                  </div>
                  <div className={cx("Pay")}>
                    <div className={cx("TextPrice")}>
                      <div className={cx("priceContainer")}>
                        <span>
                          {totalCost.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                        <Tippy
                          render={(attrs) => (
                            <div className="boxDetail" tabIndex="-1" {...attrs}>
                              <div className={cx("detailOrder")}>
                                <div className={cx("detailTitle")}>
                                  <span>Chi tiết đơn hàng</span>
                                </div>
                                <div className={cx("TypeService")}>
                                  <span>Gói dịch vụ</span>
                                  <span>{isTour.name}</span>
                                </div>
                                <div className={cx("dateTour")}>
                                  <span>Ngày giờ</span>
                                  <span>{dateTour}</span>
                                </div>
                                <div className={cx("amountDetail")}>
                                  <span>Người lớn</span>
                                  <span>
                                    x<span>{amountPerSonBig}</span>
                                  </span>
                                  <span>
                                    {(
                                      pricePerSonBig * amountPerSonBig
                                    ).toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}{" "}
                                  </span>
                                </div>
                                <div className={cx("amountDetail")}>
                                  <span>Trẻ em</span>
                                  <span>
                                    x<span>{amountChilren}</span>
                                  </span>
                                  <span>
                                    {(
                                      priceChildren * amountChilren
                                    ).toLocaleString("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                          placement="top-end"
                          // interactive
                        >
                          <span className={cx("detailDown")}>
                            Chi tiết
                            <FaAngleDown className={cx("AngleDown")} />
                          </span>
                        </Tippy>
                        {checkLost == false ? (
                          <span style={{ color: "red" }}>
                            Xin điền đầy đủ thông tin
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <span>
                        Vui lòng hoàn tất các mục yêu cầu để chuyển đến bước
                        tiếp theo
                      </span>
                    </div>
                    <div className={cx("PayBtn")}>
                      <button>Thêm vào giỏ hàng</button>
                      <button
                        onClick={() => {
                          if (
                            (amountPerSonBig != 0 || amountChilren != 0) &&
                            dateTour != "" &&
                            contextUser
                          ) {
                            const inforTours={
                              totalCost: totalCost,
                              amount: `Nguời lớn ${amountPerSonBig}, trẻ em ${amountChilren}`,
                              day: dateTour
                            }
                            dispatch(inforTour(inforTours))
                            navigate("/informationClient");
                          } else if (!contextUser) {
                            navigate("/login");
                          } else {
                            setCheckLost(false);
                          }
                        }}
                      >
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
                <div className={cx("ServiceDescript")}>
                  <span>Toàn cảnh</span>
                </div>
                <div className={cx("videoTour")}>
                  <iframe
                    width="700"
                    height="400"
                    src={isTour.video}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className={cx("PriceService")}>
                <div className={cx("PriceServiceItem")}>
                  <h3>₫ 1,391,000</h3>
                  <span>Giá tốt độc quyền hoàn tiền</span>
                </div>
                <div className={cx("contentService")}>
                  <span>
                    <FaClock className={cx("icon")} /> Đặt trước cho ngày mai
                  </span>
                  <span>
                    <FaBolt className={cx("icon2")} />
                    Xác thực tức thời
                  </span>
                </div>
                <div className={cx("btn")}>
                  <a href="#Package">Chọn các gói dịch vụ</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={cx("comment")}>
          <div className={cx("ServiceDescript")}>
            <span>Đánh giá của bạn về dịch vụ </span>
          </div>
          <Comment
            dataHref={"https://tranvandinh15.github.io/avgmovie/"}
            width={"100%"}
            numPost={10}
          />
        </div>
      </div>
    </>
  );
}
export default DescriptionTour;
