import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'42a4d10d1d7e4027858cf3b6acd02c80',
    }

})