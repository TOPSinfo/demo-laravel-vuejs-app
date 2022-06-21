const BASE_URL = process.env.VUE_APP_API_URL;

export const APICall = {
    get(URL) {
        return fetch(`${BASE_URL}${URL}`).then((data) => data.json())
    },
    post(URL, data) {
        return fetch(`${BASE_URL}${URL}`, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((data) => data.json())
    },
    delete(URL, id) {
        return fetch(`${BASE_URL}${URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((data) => data.json())
    },
    put(URL, id, data) {
        return fetch(`${BASE_URL}${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((data) => data.json())
    }
}