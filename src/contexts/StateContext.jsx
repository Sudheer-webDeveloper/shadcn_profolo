"use client"; 

import { usePathname } from "next/navigation";
import React, { createContext, useState, useContext } from "react";
import profileImg from "../../public/assets/verifiedProfile.png";
import { postBy } from "@/Constants/Constants";
import { makeNetworkCall } from "@/utilities/utils";

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
  const [edit, setEdit] = useState(false);
  const [editingItem, setEditingItem] = useState({});

  const fetchPostsData = async () => {
    try {
      const { data } = await makeNetworkCall("", "", "get");
      const newPosts = data.map((item) => ({
        ...item,
        profileImg: postBy,
        personName: "Ethan Marques",
        work: "Product Designer at Dell Techno",
        timeAgo: "24m ago",
        likes: "20",
        comments: "30",
        shares: "10",
      }));
      setPosts(newPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const editingPost = (post) => {
    setPostModal(true);
    setEdit(true);
    const { id, desc, post_image } = post;
    setEditingItem({ id, desc, post_image });
    console.log("Editing post:", post);
  };

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
        loadingTerm,
        setLoadingTerm,
        fetchPostsData,
        editingPost,
        editingItem,
        setEditingItem,
        edit,
        setEdit,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);
