import  axios from "axios"
import qs from "qs";

//添加请求拦截器
axios.interceptors.request.use(
    config => {
        return config;

    },
    error => {
        return Promise.reject(error);
    }
);

//添加响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.resolve(error.response);
    }
);

axios.defaults.baseURL="http://www.xxxxxxx.com/";
 axios.defaults.headers.post["Content-Type"] = "application/json";
 axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000;

//http://www.shmiaosuan.com/app/index.php?method52=b.bbs.getmymsg&iDisplayStart=0&iDisplayLength=10

export default {
    post(type,url, params) {
        return axios({
            method: "post",
            url,
            data: params
        }).then(response => {
            return response;
        });
    },
    get(type,url, params) {
        params = qs.stringify(params);
        return axios({
            method: "get", url, params
        }).then(response => {
            return response;
        })
    },
};


