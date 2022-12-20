import Button from "../../Button";
import classNames from "classnames/bind";
import { FaStar, FaWalking } from "react-icons/fa";
import Introduction from "../Introduction";
import ListTours from "../ListTours/ListTours";
import styles from "./Content.module.scss";
import HotPlace from "../HotPlace/HotPlace";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <Introduction />
      <div className={cx("container")}>
        <div className={cx("Heading")}>
          <span>
            Đóng gói và đi______
            <img src="http://3.bp.blogspot.com/-kgxNCrexcag/Ux-wFGRroOI/AAAAAAAAAVo/NPNdgR-TG0g/s1600/plane.png"/>
          </span>
          <h1 className={cx("titleTour")}>Địa điểm đề xuất</h1>
          <span>
            <FaStar className={cx("starIcon")} style={{color: '#ffeb8d'}}/>
            <FaStar className={cx("starIcon")} style={{color: '#fed46b'}}/>
            <FaStar className={cx("starIcon")} style={{color: '#fbb53d'}}/>
            <FaStar className={cx("starIcon")} style={{color: '#fa9e1b'}}/>
            <FaStar className={cx("starIcon")} style={{color: '#666'}}/>
          </span>
        </div>
      </div>
      <ListTours limit={'4'}/>
        <div className={cx("MoreTour")}>
          <Button className={cx("btn")} children={"Xem Thêm"} to={"/AllTour"} />
        </div>
      <HotPlace/>
    </div>
  );
}

export default Content;
