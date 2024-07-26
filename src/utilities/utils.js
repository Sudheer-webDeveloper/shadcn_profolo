import { postBy } from "@/Constants/Constants";
import axios from "axios";

export const makeNetworkCall = async (route, obj, method, headers) => {
  try {
    const options = {
      method,
      url: `http://localhost:4000/${route}`,

      responseType: "json",
    };
    if (headers) {
      options.headers = {
        "Content-Type": "application/json",
        "x-auth-token": "" || "",
      };
    }
    if (obj) {
      options.data = obj;
    }
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const creatingDummyData = async(data) => {
  const dummyData = data.map((item) => {
    return {
      ...item,
      profileImg: postBy,
      personName: "Ethan Marques",
      work: "Product Designer at Dell Techno",
      timeAgo: "24m ago",
      likes: "20",
      comments: "30",
      shares: "10",
    };
  });

  return dummyData;
};
