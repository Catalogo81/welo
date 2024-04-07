import axios from "axios";

export async function getAllTransactions() {
  return axios
    .get(`${endPoint}`, {
      headers: {
        "content-type": "application/json"
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));
}


