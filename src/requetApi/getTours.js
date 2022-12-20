import axios from "axios";
import ListTours from "../Component/DefaultLayout/ListTours/ListTours";
const getTours=(url,setListTour, limit)=>{
    axios.get(url)
    .then((response)=>{
      setListTour(response.data.data)
    })
}
const searchTour=(param, setTourSearch)=>{
  const url=`https://bookingtour.herokuapp.com/api/search-tour-by-name?q=${param}`
  axios.get(url)
  .then((res)=>{
    console.log(res)
    setTourSearch(prev=>res)
  })
}
const getTourSearch=(limit, setGetTour)=>{
  const url=`https://bookingtour.herokuapp.com/api/get-tours-by-limit?limit=${limit}`
  axios.get(url)
  .then((res)=>{
    setGetTour(res)
  })
}
export {getTours, searchTour, getTourSearch}

