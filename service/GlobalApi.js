import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const axiosClient = axios.create({
  baseURL: `${API_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = async (data) =>
  await axiosClient.post("/user-resumes", { data: data });
const GetAllUserResumes = async (email) =>
  axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${email}`);

export default {
  CreateNewResume,
  GetAllUserResumes,
};
