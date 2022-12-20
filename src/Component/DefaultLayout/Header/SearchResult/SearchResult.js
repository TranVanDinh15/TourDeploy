import styles from "./SearchResult.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getTourSearch, searchTour } from "../../../../requetApi/getTours";
import axios from "axios";
import {
  FaRegWindowClose,
  FaStopCircle,
  FaTrash,
  FaXbox,
} from "react-icons/fa";
import useDebounce from "../../../hooks/useDebounce";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { Navigate, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { callTours } from "../../../../redux/userSlice";
const cx = classNames.bind(styles);
function SearchResult({ inputValue, setEnterText }) {
  // Lấy kết quả tìm kiếm từ localStorage
  const getResultSearch = JSON.parse(localStorage.getItem("searchValue"));
  const [value, setValue] = useState(getResultSearch ? getResultSearch : []);
  // State lưu trữ tour khi call Api Tour
  const [getTour, setGetTour] = useState({
    data: {
      data: [
        {
          name: "",
          image: "",
          descriptionHTML: "",
          id: "",
          descriptionMarkdown: "",
          priceData: "",
        },
      ],
    },
  });
  // Sử dụng debounce
  const debounce = useDebounce(inputValue, 200);
  const cleanHisTory = (e) => {
    setValue([]);
    localStorage.clear("searchValue");
  };
  const [searchResponse, setSearchResponse] = useState({
    data: {
      errCode: 1,
      errMessage: "Ok",
    },
  });
  const dispatch=useDispatch()
  // Call Api Search
  useEffect(() => {
    // searchTour(inputValue, setSearchResponse)
    if (inputValue == "") {
      return;
    }
    const url = `https://bookingtour.herokuapp.com/api/search-tour-by-name?q=${inputValue}`;
    axios.get(url).then((res) => {
      setSearchResponse(res);
    });
  }, [debounce]);
  // Call Api GetTour
  useEffect(() => {
    getTourSearch(8, setGetTour);
  }, []);
  const navigate=useNavigate()
  return (
    <div className={cx("wrapperResult")} onClick={(e) => {}}>
      {searchResponse.data.errCode == 0 && inputValue
        ? searchResponse.data.data.rows.map((data, index) => {
            if (data.id !== 1) {
              return (
                <div className={cx("ContainerListTourSearch")} key={index}
                onClick={(event)=>{
                  dispatch(callTours(data))
                  navigate('/descriptionTour')
                }}
                >
                  <div className={cx("ListTourSearch")}>
                    <div className={cx("ListTourSearch__Image")}>
                      <img src={data.image} alt="" />
                    </div>
                    <div className={cx("nameTourSearch")}>
                      <span>{data.name}</span>
                      <span>{data.country}</span>
                    </div>
                  </div>
                </div>
              );
            }
          })
        : ""}

      {inputValue ? (
        ""
      ) : (
        <div className={cx("containerResult")}>
          <div className={cx("historyFind")}>
            <div className={cx("heading")}>
              <span>Lịch sử tìm kiếm</span>
              <div className={cx("cleanHistory")} onClick={cleanHisTory}>
                <Tippy content="Xóa Lịch sử tìm kiếm">
                  <span className={cx("historyDelete")}>
                    <FaTrash />
                  </span>
                </Tippy>
                <FaRegWindowClose
                  className={cx("xmarkCLose")}
                  onClick={() => {
                    setEnterText(false);
                  }}
                />
              </div>
            </div>
            <div className={cx("listResult")}>
              {value.map((data, index) => {
                return <span key={index}>{data}</span>;
              })}
            </div>
          </div>
          <div className={cx("Place")}>
            <div className={cx("domesticHot")}>
              <div className={cx("headingOne")}>
                <span>Bán chạy nhất</span>
              </div>
              <div className={cx("domesticList")}>
                {getTour.data.data
                  ? getTour.data.data.map((resoures, index) => {
                      if (
                        resoures.descriptionMarkdown == "rr" ||
                        resoures.descriptionMarkdown == "rrrr"
                      ) {
                        return (
                          <div className={cx("domesticListItem")} key={index}
                          onClick={()=>{
                            console.log(resoures)
                            dispatch(callTours(resoures))
                            navigate('/descriptionTour')
                          }}
                          >
                            <div className={cx("domesticListItem__Image")}>
                              <img src={resoures.image} />
                            </div>
                            <div className={cx("domesticListItem__info")}>
                              <div className={cx("placeName")}>
                                <span>{resoures.name}</span>
                              </div>
                              <div className={cx("priceTour")}>
                                <span>
                                  {resoures.priceData
                                    ? resoures.priceData
                                    : "250.0000 đ"}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  : ""}
              </div>
            </div>
            <div className={cx("domesticHot")}>
              <div className={cx("headingOne")}>
                <span>Những địa điểm cho phép nhập cảnh</span>
              </div>
              <div className={cx("domesticList")}>
                {getTour.data.data
                  ? getTour.data.data.map((resoures, index) => {
                      if (resoures.descriptionMarkdown == "international") {
                        return (
                          <div className={cx("domesticListItem")} key={index}
                          onClick={(event)=>{
                            dispatch(callTours(resoures))
                            navigate('/descriptionTour')
                          }}
                          >
                            <div className={cx("domesticListItem__Image")}>
                              <img src={resoures.image} />
                            </div>
                            <div className={cx("domesticListItem__info")}>
                              <div className={cx("placeName")}>
                                <span>{resoures.name}</span>
                              </div>
                              <div className={cx("priceTour")}>
                                <span>230.000đ</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
