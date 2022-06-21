const BASE_URL ="http://127.0.0.1:8000/api";

export const APIcall = {
  post(URL,data,token,id) {
        return fetch(`${BASE_URL}${URL}${id}`, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json",
                 "Authorization" : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    },
     get(URL,token, ids) {
        return fetch(`${BASE_URL}${URL}${ids}`,{
            headers :{
                Authorization : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    },
}