const BASE_URL = process.env.VUE_APP_API_URL;
//const BASE_URL = "http://127.0.0.1:8000/api";
export const APICall = {
    post(URL,data,token) {
        return fetch(`${BASE_URL}${URL}`,{
            method: "POST",
            body : JSON.stringify({...data}),
            headers :{
                "Content-Type": "application/json",
                "Authorization" : 'Bearer' + ' ' + token
               // "deviceId":"ewwejjiwe"
            }
        }).then((data)=> data.json())
    },
    get(URL,token) {
        return fetch(`${BASE_URL}${URL}`,{
            headers :{
                Authorization : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    }
}