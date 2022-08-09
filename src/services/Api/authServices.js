import axios from "axios"
import { API_URL } from "../../util/config"

// const userObj={email: "abhinav@gmail.com",
//     password: "Abhinav123"}
export const login = async (navigation,userObj) => {
   
    try {
     let user= await axios.post(`${API_URL}/user/login` ,userObj)
      navigation.navigate("Todo")
      return user.data
    } catch (e) {
      console.log(e)
      
    }
  }
  export const register = async (navigation,userObj) => {
   
    try {
     let user= await axios.post(`${API_URL}/user/register` ,userObj)
      navigation.navigate("Login")
      return user.data
    } catch (e) {
      console.log(e)
      
    }
  }