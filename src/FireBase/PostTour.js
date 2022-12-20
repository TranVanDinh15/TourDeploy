import axios from "axios"
const postTour=(url,data, setResponse)=>{
    axios.post(url,data)
    .then((res)=>{
        setResponse([res])
    })
}
export {postTour}