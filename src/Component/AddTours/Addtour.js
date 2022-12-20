import styles from "./Addtour.module.scss";
import classNames from "classnames/bind";
import Button from "../Button";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { postTour } from "../../FireBase/PostTour";
import ToastMessage from "../../Boostrap/Toast/Toast";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
const cx = classNames.bind(styles);
function Addtours() {
  const [name, setName] = useState("");
  const [decription, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [descriptionMardown, setDescriptionMarkdown] = useState("");
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState([
    {
      data: {
        errCode: 1,
      },
    },
  ]);
  const navigate = useNavigate();
  // Xử lý khi input thay đổi
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescript = (e) => {
    setDescription(e.target.value);
  };
  const handleVideo = (e) => {
    setVideo(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleMarkdown = (e) => {
    setDescriptionMarkdown(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handlePost = async (e) => {
    const url = `https://bookingtour.herokuapp.com/api/create-new-tour`;
    const data = {
      name: name,
      video: video,
      descriptionMarkdown: descriptionMardown,
      descriptionHTML: decription,
      image: image,
      price: price,
      country: country,
    };
    const post = await postTour(url, data, setResponse);
    // if (response[0].data.errCode == 0) {
    setStatus(true);
    // }
  };
  if (response[0].data.errCode == 0) {
    setTimeout(()=>{
      
      navigate("/");
    },1500)
  }
  return (
    <>
      <div className={cx("wrapperAllTours")}>
        <div className={cx("AllTourContainer")}>
          <div className={cx("heading")}>
            <h1>Thêm Tours</h1>
          </div>
          <Form action="" className={cx("Form")}>
            <div className={cx("FormItem")}>
              <label
                for="name"
                className={cx("FormItemInput")}
                onChange={handleName}
              >
                Tên Chuyến đi
                <input type={"text"} id={"name"} placeholder={"Nhập Tiêu đề"} />
              </label>
              <label for="2" className={cx("FormItemInput")}>
                Mô tả Chuyến đi
                <input
                  type={"text"}
                  id={"2"}
                  placeholder={"Mô tả"}
                  onChange={handleDescript}
                />
              </label>
            </div>
            <div className={cx("FormItem")}>
              <label for="3" className={cx("FormItemInput")}>
                Video
                <input
                  type={"text"}
                  id={"3"}
                  placeholder={"Link Ember"}
                  onChange={handleVideo}
                />
              </label>
              <label for="4" className={cx("FormItemInput")}>
                Price
                <input
                  type={"text"}
                  id={"4"}
                  placeholder={"Chi phí chuyến đi "}
                  onChange={handlePrice}
                />
              </label>
            </div>
            <div className={cx("FormItem")}>
              <label for="5" className={cx("FormItemInput")}>
                Quốc gia
                <input
                  type={"text"}
                  id={"5"}
                  placeholder={"Quốc Gia"}
                  onChange={handleCountry}
                />
              </label>
              <label for="6" className={cx("FormItemInput")}>
                description Mark down
                <input
                  type={"text"}
                  id={"6"}
                  placeholder={"descriptionMarkdown "}
                  onChange={handleMarkdown}
                />
              </label>
            </div>
            <div className={cx("image_input")}>
              <label for="7" className={cx("FormItemInput")}>
                Link ảnh
                <input
                  type={"text"}
                  id={"7"}
                  placeholder={"Link ảnh "}
                  onChange={handleImage}
                />
              </label>
            </div>
          </Form>
          <div className={cx("submit")}>
            <Button
              children={"Add"}
              className={cx("btn_submit")}
              onClick={handlePost}
            />
          </div>
        </div>
      </div>
      {response.length != 0 && response[0].data.errCode == 0 ? (
        <ToastMessage />
      ) : (
        ""
      )}
    </>
  );
}

export default Addtours;
