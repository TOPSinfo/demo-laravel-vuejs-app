const BASE_URL ="http://127.0.0.1:8000/api";

export const APICall = {
    get(URL,token) {
        return fetch(`${BASE_URL}${URL}`,{
            headers :{
                Authorization : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    },
    post(URL, data, token) {
        return fetch(`${BASE_URL}${URL}`, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json",
                 "Authorization" : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    },
    delete(URL, id, token) {
        return fetch(`${BASE_URL}${URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    },
    put(URL, id, data,token) {
        return fetch(`${BASE_URL}${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json",
                "Authorization" : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    }
}