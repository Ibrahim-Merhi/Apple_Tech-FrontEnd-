import React from "react";
export default function() {
  return [
    {
      title: "Blog Dashboard",
      
      to: "/dashboard/blog-overview",
      
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      // htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/dashboard/blog-posts",
    },
    {
      title: "Add New Post",
      // htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/dashboard/add-new-post",
    },
    {
      title: "Admin Profile",
      // htmlBefore: '<i class="material-icons">person</i>',
      to: "/dashboard/user-profile-lite",
    },
    {
      title: "Inbox",
      // htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/dashboard/components-overview",
    },
   
    {
      title: "Subscriber",
      // htmlBefore: '<i class="material-icons">person</i>',
      to: "/dashboard/user-profile-lite",
    },
    {
      title: "Back to Home",
      // htmlBefore: '<i class="material-icons">person</i>',
      to: "/dashboard/user-profile-lite",
    },
   
  ];
}
