import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    type: "groupHeader",
    groupTitle: "AVERIS FILTER TOGGLER"
  },
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <Icon.Home size={20} />,
        id: "eCommerceDash",
        title: "Filter 1",
        type: "item",
        icon: <Icon.GitPullRequest size={20} />,
        permissions: ["admin"],
        navLink: "/ecommerce-dashboard"
  },
  {
    id: "treeView",
    title: "Filter 2",
    icon: <Icon.GitPullRequest size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/todo/all"
  },
  {
    id: "raiseSupport",
    title: "SUBMIT",
    icon: <Icon.PlayCircle size={20} />,
    type: "external-link",
    newTab: true,
    permissions: ["admin", "editor"],
    navLink: "https://pixinvent.ticksy.com/"
  }
]

export default navigationConfig
