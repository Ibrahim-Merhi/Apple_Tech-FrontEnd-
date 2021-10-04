import React from "react";
import PersonIcon from '@mui/icons-material/Person';
export default function() {
  return [
    {
      title: "Blog Dashboard",
      
      to: "/dashboard/blog-overview",
      
      htmlAfter: ""
    },
    {
      title: "  Blog Posts",
      // htmlBefore: "<box-icon name='home' color='#800080' ></box-icon>",
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
      to: "/dashboard/inbox",
    },
   
  
    
   
  ];
}
