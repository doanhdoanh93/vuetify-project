import axios from "axios";
import router from "@/router";
import { useHeaderNameStore } from "@/store/header-name/header-name";
import from ''

router.beforeEach((to, from, next) => {
    const headerName = useHeaderNameStore();
    headerName.setHeaderName(to.meta.breadcrumbsTitle)
    next()
  });

const setHeader = (screenName: string) => {
  if (screenName) {
    axios.defaults.headers.post["keyName"]=screenName
}
    else {
        axios.defaults.headers.delete["keyName"]
    }  
};

export default setHeader
