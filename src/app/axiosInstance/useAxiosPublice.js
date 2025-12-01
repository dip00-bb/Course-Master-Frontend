import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: 'https://course-master-backend-zeta.vercel.app/',
});