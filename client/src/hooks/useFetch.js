import { useCallback } from "react"
import { toast } from "react-toastify";
import api from "../api";

const useFetch = () => {

  const fetchData = useCallback(async (config, otherOptions) => {

    const { showSuccessToast = true, showErrorToast = true } = otherOptions || {};

    try {
      const { data } = await api.request(config);
      // console.log(data)
      if (showSuccessToast) toast.success(data.msg);
      return Promise.resolve(data);   
    }
    catch (error) {
      const msg = error.response?.data?.msg || error.message || "error";
      if (showErrorToast) toast.error(msg);
      return Promise.reject();
    }
  }, []);

  return fetchData;
}

export default useFetch