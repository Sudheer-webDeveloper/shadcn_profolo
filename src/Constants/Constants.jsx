"use client";

import { TbGridDots } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { IoBag, IoPeopleSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CalendarBlank, Users, Wallet } from "phosphor-react/dist";

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
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "25/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB563",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "25/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB564",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "25/06/24",
    views: 38,
    clicks: 6,
  },
  {
    id: "JB565",
    job: "Network Administrator",
    status: "Active",
    postedBy: { name: "Gaurav", initials: "GA" },
    postedOn: "25/06/24",
    views: 38,
    clicks: 6,
  },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "job", label: "Job" },
  { key: "status", label: "Status" },
  { key: "postedBy.name", label: "Posted By" }, // Handle nested property
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
