import axios from "axios";

export const  loaddata = async(uri) => {
    await axios.get(process.env.REACT_APP_API + uri)
}