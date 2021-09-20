import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import BlogPosts from "./views/BlogPosts";

export default [
  
  {
    path: "/dashboard/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/dashboard/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/dashboard/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  
  {
    path: "/dashboard/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
