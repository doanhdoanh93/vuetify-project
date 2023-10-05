import router from "@/router";
import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  const meta = router.currentRoute.value.meta;
  const breadcumbsTitle = meta.breadcrumbsTitle;
  config.headers["X-view"] = breadcumbsTitle;
  return config;
});
