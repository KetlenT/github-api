import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  client_secret:"68bd23ad1550e57831d5e69119abc8fe3fba80d1",
  client_id:"Iv1.ea2d65ab593c7b86"
});

export default api;