import classNames from "classnames/bind";
import Slider from "react-slick";
import styles from "./Slider.scss";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import { createContext, useEffect, useState } from "react";
import { postDataLocal } from "../../LocalStorage/localstorage";
import { useDispatch } from "react-redux";
import SearchResult from "../Header/SearchResult/SearchResult";
const cx = classNames.bind(styles);
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}

function SimpleSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const dispatch = useDispatch();
  const getLocal = JSON.parse(localStorage.getItem("searchValue"));
  const [valueInput, setValueInput] = useState("");
  const [arraySearch, setArraySearch] = useState(getLocal ? getLocal : []);
  // EnterText kiểm tra xem người dùng có Nhập gì vào ô tìm kiếm không
  const [enterText, setEnterText] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setArraySearch((prev) => {
      const newArray = [valueInput, ...arraySearch];
      console.log(newArray);
      postDataLocal(newArray);
      return newArray;
    });
  };

  return (
    <div>
      <Slider {...settings} >
        <div className="ImageItem" 
        onClick={()=>{
          setEnterText(false)
        }}
        >
          <img src="https://technext.github.io/trip-spot/images/banner5.jpg" alt="" />
        </div>
        {/* <div className="ImageItem">
          <img
            src="https://ik.imagekit.io/tvlk/blog/2022/03/dia-diem-du-lich-mui-ne-cover.jpg"
            alt=""
          />
        </div>
        <div className="ImageItem">
          <img
            src="https://vcdn-dulich.vnecdn.net/2022/03/25/hoian-1943-1648198035.jpg"
            alt=""
          />
        </div>
        <div className="ImageItem">
          <img
            src="https://dulichdaibang.com/wp-content/uploads/2020/12/Ba-Na-Hills-15-12.jpg"
            alt=""
          />
        </div> */}
      </Slider>
      <div className="title__Slider">
        <h1>Đã đến lúc cho một cuộc hành trình mới</h1>
        <span>
          Tìm những nơi tuyệt vời để ở, ăn, mua sắm hoặc tham quan từ các địa
          phương
        </span>
      </div>
      <div className="SearchSlider">
        <div className="SearchSlider__container">
          <div className="SearchIcon">
            <FaSearch />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type={"text"}
              placeholder={"Bất cứ nơi nào"}
              value={valueInput}
              onChange={(e) => {
                setValueInput(e.target.value);
                setEnterText(true);
              }}
              onFocus={(e) => {
                e.stopPropagation()
                setEnterText(true);
              }}
              onBlur={()=>{
              }}
            />
          </form>
          <div className="Find">
            <span>Tìm kiếm</span>
          </div>
        </div>
      </div>
      {enterText ? (
        <SearchResult inputValue={valueInput} setEnterText={setEnterText} />
      ) : (
        ""
      )}
    </div>
  );
}
export default SimpleSlider;
