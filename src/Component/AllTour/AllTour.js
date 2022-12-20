import styles from "./AllTour.module.scss"
import classNames from "classnames/bind";
import Header from "../DefaultLayout/Header";
import ListTours from "../DefaultLayout/ListTours/ListTours";
const cx= classNames.bind(styles)
function AllTours() {
    return (
        <div >
            <Header/>
            <div className={cx("wrapperAllTours")}>
                <div className={cx("Container")}>
                    <div className={cx("title")}>
                        <h3>Các dịch vụ nổi bật</h3>
                    </div>
                    <ListTours limit={'100'} className={cx("ListTours")}/>
                </div>
            </div>
        </div>
    );
}

export default AllTours;