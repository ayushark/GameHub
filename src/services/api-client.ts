import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "859d28b7ea0645639966e107ac65467c",
  },
});
