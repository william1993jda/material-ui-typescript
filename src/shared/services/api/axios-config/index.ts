import axios from "axios";
import { errorInterceptors, responseInterceptor } from "./interceptors";
import { Environment } from "../../../environment";

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptors(error)
);

export { Api };