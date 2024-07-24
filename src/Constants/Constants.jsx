"use client";

import { TbGridDots } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { IoBag, IoPeopleSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CalendarBlank, Users, Wallet } from "phosphor-react/dist";
import logo from "../../public/wta.png";
import toyota from "../../public/toyota.png";
import manProfile from "../../public/manProfile.png";
import femaleProfile from "../../public/femaleProfile.png";
import postBy from "../../public/postBy.png";
import post1 from "../../public/post1.png";
import avathar1 from "../../public/avathar1.png";
import avathar2 from "../../public/avathar2.png";

export const sidebarView = [
  {
    label: "Home",
    icon: <GoHomeFill />,
    href: "/",
  },
  {
    label: "Jobs",
    icon: <IoBag />,
    href: "/jobs",
  },
  {
    label: "Candidates",
    icon: <IoPeopleSharp />,
    href: "/candidates",
  },

  {
    label: "Chat",
    icon: <IoChatbubbleEllipsesOutline />,
    href: "/chat",
  },
];

export const checkPath = (pathName) => {
  switch (pathName) {
    case "/":
      return <GoHomeFill />;
    case "/jobs":
      return <IoBag />;
    case "/candidates":
      return <IoPeopleSharp />;
    case "/chat":
      return <IoChatbubbleEllipsesOutline />;
    default:
      return null;
  }
};

export const dashboardCards = [
  {
    label: "Total Views",
    count: "43",
    percentage: "7.5%",
    inDays: "7",
    icon: <CalendarBlank size={20} />,
    bg: "rgba(0, 152, 207, 0.16)",
    color: "#0098CF",
  },
  {
    label: "Total Applied",
    count: "24",
    percentage: "3.45%",
    inDays: "7",
    icon: <Users size={20} />,
    color: "#F49B00",
    bg: "rgba(244, 155, 0, 0.25)",
  },
  {
    label: "Hired",
    count: "2",
    percentage: "7.5%",
    inDays: "7",
    icon: <Wallet size={20} />,
    color: "#3CA654",
    bg: "rgba(36, 170, 20, 0.24)",
  },
];

export const dummyData = [
  {
    id: "JB561",
    job: "UX Designer",
    status: "Active",
    postedBy: { name: "Sindhu", initials: "SI" },
    postedOn: "25/06/24",
    views: 32,
    clicks: 9,
  },
  {
    id: "JB562",
    job: "Network Administrator",
    status: "Pending",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "24/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB563",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "23/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB564",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "22/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB565",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "21/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB572",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "24/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB573",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "23/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB574",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "22/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB575",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "21/06/24",
    views: 38,
    clicks: 6,
  },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "job", label: "Job" },
  // { key: "status", label: "Status" },  
  { key: "postedBy.name", label: "Posted By" }, 
  { key: "postedOn", label: "Posted On" },
  { key: "views", label: "Views" },
  { key: "clicks", label: "Clicks" },
];

export const checkbox_verifications = [
  { label: "Email Verification", name: "email_verification", isOrg: false },
  { label: "Add Company Info", name: "company_info", isOrg: true },
  { label: "Share tech stack", name: "tech_stack", isOrg: true },
  { label: "Invite Co Workers", name: "co_workers", isOrg: false },
  { label: "Post a Job", name: "post_job", isOrg: true },
];

// Fake profile page data

export const sugesstedFollows = [
  {
    img: logo,
    company_name: "wipro",
    desc: "design tech",
  },
  {
    img: logo,
    company_name: "WTA",
    desc: "Service tech",
  },
  {
    img: logo,
    company_name: "facebook",
    desc: "social media tech",
  },
];

export const sugesstedJobs = [
  {
    img: logo,
    designation: "UI/UX Designer",
    company_name: "WTA Studios",
  },
  {
    img: toyota,
    designation: "Brand Designer",
    company_name: "Toyota",
  },
];

export const peopleYouMayKnow = [
  {
    img: femaleProfile,
    name: "Kavitha Sinde",
    institute: "Birla Institute of Technology",
    yearZone: "2010 - 2014",
  },
  {
    img: manProfile,
    name: "Aryan Bhatt",
    institute: "Birla Institute of Technology",
    yearZone: "2012 - 2016",
  },
];

export const posts = [
  {
    post_id:"123",
    profileImg: postBy,
    personName: "Ethan Marques",
    work: "Product Designer at Dell Techno",
    timeAgo: "24m ago",
    postDesc:
      "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ",
    likes: "20",
    comments: "30",
    shares: "10",
    postImage: post1,
  },
  {
    post_id:"456",
    profileImg: postBy,
    personName: "Ethan Marques",
    work: "Product Designer at Dell Techno",
    timeAgo: "24m ago",
    postDesc:
      "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ",
    likes: "20",
    comments: "30",
    shares: "10",
    postImage: post1,
  },
  {
    post_id:"406",
    profileImg: postBy,
    personName: "Ethan Marques",
    work: "Product Designer at Dell Techno",
    timeAgo: "24m ago",
    postDesc:
      "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ",
    likes: "20",
    comments: "30",
    shares: "10",
    postImage: post1,
  },
  {
    post_id:"956",
    profileImg: postBy,
    personName: "Ethan Marques",
    work: "Product Designer at Dell Techno",
    timeAgo: "24m ago",
    postDesc:
      "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ",
    likes: "20",
    comments: "30",
    shares: "10",
    postImage: post1,
  },
];

export const recentFriends = [
  { img: manProfile, name: "person1" },
  { img: femaleProfile, name: "person2" },
  { img: postBy, name: "person3" },
  { img: avathar2, name: "person4" },
];
