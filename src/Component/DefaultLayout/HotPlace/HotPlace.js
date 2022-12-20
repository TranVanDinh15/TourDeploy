import Slider from "react-slick";
import "./Slick.css";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
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
function HotPlace() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow className="direction" />,
    prevArrow: <SamplePrevArrow className="direction" />,
  };
  return (
    <div className="PlaceHot">
      <div className="title__PlaceHot">
        <h3>Địa danh nổi tiếng</h3>
      </div>
      <div className="containerSlider">
      <Slider {...settings}>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp"
            alt=""
          />
          <div className="place">
            <span>Đà Nẵng</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/fdopxuk1tinxvtylpax8.webp"
            alt=""
          />
          <div className="place">
            <span>Phú Quốc</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gagpmpohflexp1kfy9vr.webp"
            alt=""
          />
          <div className="place">
            <span>Hồ Chí Minh</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ysnkhkzabobjbg72x3sz.webp"
            alt=""
          />
          <div className="place">
            <span>Hà Nội</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/cycozeddqrt6cd2agt0n.webp"
            alt=""
          />
          <div className="place">
            <span>Nha Trang</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ktxokazpkmecanujqnzg.webp"
            alt=""
          />
          <div className="place">
            <span>Đà Lạt</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gavvg3cqxgqveezzzez5.webp"
            alt=""
          />
          <div className="place">
            <span>Hội An</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/c2fu1xwsbjcu27dzwbxh.webp"
            alt=""
          />
          <div className="place">
            <span>Hạ Long</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/e21jepuleul1fjebaor4.webp"
            alt=""
          />
          <div className="place">
            <span>Sapa</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/r2h9wrgikhis4pdubns3.webp"
            alt=""
          />
          <div className="place">
            <span>Vũng Tàu</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ntvxdptpld8qjd9gv01h.webp"
            alt=""
          />
          <div className="place">
            <span>Huế</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/m3ilnnn3zfy88sq8hzmf.webp"
            alt=""
          />
          <div className="place">
            <span>Mũi Né - Phan Thiết</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/h4frkpsjdbkbtm5ajtw1.webp"
            alt=""
          />
          <div className="place">
            <span>Cần Thơ - DB sông Cửu Long</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/n1rxvzy9amuwd0oz6etu.webp"
            alt=""
          />
          <div className="place">
            <span>Quy Nhơn</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ssp7vyi1ovdkdndtg7eu.webp"
            alt=""
          />
          <div className="place">
            <span>Côn Đảo</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/pv8gftuu2hmdi7sghimz.webp"
            alt=""
          />
          <div className="place">
            <span>Đồng Hới - Quảng Bình</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/gnrtvywb0orrw4ydv6aj.webp"
            alt=""
          />
          <div className="place">
            <span>Hồng Kông</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ikx9n5zgtb7m8nhehxcx.webp"
            alt=""
          />
          <div className="place">
            <span>Singapore</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/csp9q32gccpnqbpmoozi.webp"
            alt=""
          />
          <div className="place">
            <span>Đài Bắc</span>
          </div>
        </div>
        <div className="containerCol">
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/whbrpalg9f77bskz34ow.webp"
            alt=""
          />
          <div className="place">
            <span>Bangkok</span>
          </div>
        </div>
      </Slider>
      </div>
    </div>
  );
}

export default HotPlace;
