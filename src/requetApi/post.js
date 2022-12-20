import axios from "axios";
import { startLogin, LoginSuccess, LoginError, resgiterError, resgiterStart, resgiterSuccess } from "../redux/userSlice";
const requestLogin = (user, dispatch, navigate) => {
  dispatch(startLogin());
  // navigate('/loading')
  try {
     axios
      .post("https://bookingtour.herokuapp.com/api/log-in", user)
      .then((res) => {
        if (res.data.errCode == 0) {
          dispatch(LoginSuccess(res.data));
          localStorage.setItem('user', JSON.stringify(res.data.user))
          navigate("/");
        } 
        else {
          dispatch(LoginSuccess(res.data.message));
          // navigate("/login");
        }
      });
  } catch (error) {
    dispatch(LoginError());
  }
};
const requestLogout = async (id, navigate) => {
  navigate('/loading')
  const res = await axios.post(
    "https://bookingtour.herokuapp.com/api/log-out",
    {
      id,
    }
  );
  console.log(res.data);
  if (res.data.errCode == 0) {
    localStorage.setItem("user", null);
    navigate('/')
    window.location.reload()
  }
};
export const requestRegister= (user, dispatch , navigate, setToast)=>{
  dispatch(resgiterStart())
  try {
    axios.post('https://bookingtour.herokuapp.com/api/create-new-user', user)
    .then((res)=>{
      if(res.data.errCode==0){
        dispatch(resgiterSuccess(res.data))
        setToast(true)
        setTimeout(()=>{
          navigate('/login')
        }, 1200)
      }
      else{
        dispatch(resgiterError())
      console.log(res.data.errMessage)
      }
    })
  } catch (error) {
    console.log(error)
  }
}
export { requestLogin, requestLogout };
