const BASE_URL ="http://127.0.0.1:8000/api";

export const APIcalls = {
  post(URL,data,token) {
        return fetch(`${BASE_URL}${URL}`, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json",
                 "Authorization" : 'Bearer' + ' ' + token
            }
        }).then((data) => data.json())
    }
}