import axios from "axios";
const service = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 10000,
})



function getList() {
    return service.get("/api/pods/list?zone=local&namespace=default&size=10&page=1")
}
export default getList;