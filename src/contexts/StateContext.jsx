"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useState, useContext } from "react";
import profileImg from "../../public/verifiedProfile.png";
import { postBy } from "@/Constants/Constants";
import { makeNetworkCall } from "@/utilities/utils";
import { EditIcon } from "lucide-react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const pathName = usePathname();
  const [dummyUser] = useState({
    userId: "SIN177",
    name: "Sindhu Uppalapati",
    city: "Hyderabad",
    profile: "",
    isVerified: true,
    profileImg: profileImg,
    profileComplete: 33,
  });

  const [postModal, setPostModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loadingTerm, setLoadingTerm] = useState("");
  const [edit,setEdit] = useState(false)
  const [editingItem,setEditingItem] = useState({})

  const fetchPostsData = async (data) => {
    try {
      const { data } = await makeNetworkCall("", "", "get");
      const newPosts = data.map((item) => {
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

      setPosts(newPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const editingPost = (post)=>{

    setPostModal(true)
    setEdit(true)
    const {id,desc,post_image} = post
    setEditingItem({id:id,desc,post_image})
    console.log("data",post)
  }


  return (
    <StateContext.Provider
      value={{
        pathName,
        postModal,
        setPostModal,
        dummyUser,
        posts,
        setPosts,
        submitting,
        setSubmitting,
        setLoadingTerm,
        loadingTerm,
        fetchPostsData,
        editingPost,
        editingItem,
        setEditingItem,
edit,setEdit
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
