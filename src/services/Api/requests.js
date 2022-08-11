import axios from "axios";
import { API_URL } from "../../util/config";

export const createApi = async (navigation,endpoint,token ,createDetails) => {
    const config =token&& {
        headers: { 'Authorization': `Bearer ${token}` }
    };
  try {
    console.log(createDetails, "api");
    const res=await axios.post(`${API_URL}${endpoint}`,createDetails,config);
    console.log("success",res);
    navigation.navigate("Todo");
  } catch (e) {
    console.log(e);
  }
};

export const getApi = async (navigation,endpoint,token) => {
    const config =token&& {
        headers: { 'Authorization': `Bearer ${token}` }
    };
   
    try {
     
     const result= await axios.get(`${API_URL}${endpoint}`,config);
     
     return result.data
    } catch (e) {
      console.log(e);
    }
  };