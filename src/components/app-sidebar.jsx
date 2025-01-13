// import * as React from "react"

// import { SearchForm } from "@/components/search-form"
// import { VersionSwitcher } from "@/components/version-switcher"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarRail,
// } from "@/components/ui/sidebar"

// // This is sample data.
// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Getting Started",
//       url: "#",
//       items: [
//         {
//           title: "Installation",
//           url: "#",
//         },
//         {
//           title: "Project Structure",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Building Your Application",
//       url: "#",
//       items: [
//         {
//           title: "Routing",
//           url: "#",
//         },
//         {
//           title: "Data Fetching",
//           url: "#",
//           isActive: true,
//         },
//         {
//           title: "Rendering",
//           url: "#",
//         },
//         {
//           title: "Caching",
//           url: "#",
//         },
//         {
//           title: "Styling",
//           url: "#",
//         },
//         {
//           title: "Optimizing",
//           url: "#",
//         },
//         {
//           title: "Configuring",
//           url: "#",
//         },
//         {
//           title: "Testing",
//           url: "#",
//         },
//         {
//           title: "Authentication",
//           url: "#",
//         },
//         {
//           title: "Deploying",
//           url: "#",
//         },
//         {
//           title: "Upgrading",
//           url: "#",
//         },
//         {
//           title: "Examples",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "API Reference",
//       url: "#",
//       items: [
//         {
//           title: "Components",
//           url: "#",
//         },
//         {
//           title: "File Conventions",
//           url: "#",
//         },
//         {
//           title: "Functions",
//           url: "#",
//         },
//         {
//           title: "next.config.js Options",
//           url: "#",
//         },
//         {
//           title: "CLI",
//           url: "#",
//         },
//         {
//           title: "Edge Runtime",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Architecture",
//       url: "#",
//       items: [
//         {
//           title: "Accessibility",
//           url: "#",
//         },
//         {
//           title: "Fast Refresh",
//           url: "#",
//         },
//         {
//           title: "Next.js Compiler",
//           url: "#",
//         },
//         {
//           title: "Supported Browsers",
//           url: "#",
//         },
//         {
//           title: "Turbopack",
//           url: "#",
//         },
//       ],
//     },
//   ],
// }

// export function AppSidebar({
//   ...props
// }) {
//   return (
//     (<SidebarProvider>
//       <Sidebar {...props}>
//       <SidebarHeader>
//         <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
//         <SearchForm />
//       </SidebarHeader>
//       <SidebarContent>
//         {/* We create a SidebarGroup for each parent. */}
//         {data.navMain.map((item) => (
//           <SidebarGroup key={item.title}>
//             <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {item.items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild isActive={item.isActive}>
//                       <a href={item.url}>{item.title}</a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         ))}
//       </SidebarContent>
//       <SidebarRail />
//     </Sidebar>
//     </SidebarProvider>)
//   );
// }
// import * as React from "react";
// import { SearchForm } from "@/components/search-form";
// import { VersionSwitcher } from "@/components/version-switcher";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarRail,
// } from "@/components/ui/sidebar";

// // This is sample data.
// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Getting Started",
//       url: "#",
//       items: [
//         {
//           title: "Installation",
//           url: "#",
//         },
//         {
//           title: "Project Structure",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Building Your Application",
//       url: "#",
//       items: [
//         {
//           title: "Routing",
//           url: "#",
//         },
//         {
//           title: "Data Fetching",
//           url: "#",
//           isActive: true,
//         },
//         {
//           title: "Rendering",
//           url: "#",
//         },
//         {
//           title: "Caching",
//           url: "#",
//         },
//         {
//           title: "Styling",
//           url: "#",
//         },
//         {
//           title: "Optimizing",
//           url: "#",
//         },
//         {
//           title: "Configuring",
//           url: "/chart",
//         },
//         {
//           title: "Testing",
//           url: "#",
//         },
//         {
//           title: "Authentication",
//           url: "#",
//         },
//         {
//           title: "Deploying",
//           url: "#",
//         },
//         {
//           title: "Upgrading",
//           url: "#",
//         },
//         {
//           title: "Examples",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "API Reference",
//       url: "#",
//       items: [
//         {
//           title: "Components",
//           url: "#",
//         },
//         {
//           title: "File Conventions",
//           url: "#",
//         },
//         {
//           title: "Functions",
//           url: "#",
//         },
//         {
//           title: "next.config.js Options",
//           url: "#",
//         },
//         {
//           title: "CLI",
//           url: "#",
//         },
//         {
//           title: "Edge Runtime",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Architecture",
//       url: "#",
//       items: [
//         {
//           title: "Accessibility",
//           url: "#",
//         },
//         {
//           title: "Fast Refresh",
//           url: "#",
//         },
//         {
//           title: "Next.js Compiler",
//           url: "#",
//         },
//         {
//           title: "Supported Browsers",
//           url: "#",
//         },
//         {
//           title: "Turbopack",
//           url: "#",
//         },
//       ],
//     },
//   ],
// };

// export function AppSidebar({ ...props }) {
//   const [selectedContent, setSelectedContent] = React.useState(null);

//   const handleMenuItemClick = (content) => {
//     setSelectedContent(content);
//   };

//   return (
//     <SidebarProvider>
//       <Sidebar {...props}>
//         <SidebarHeader>
//           <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
//           <SearchForm />
//         </SidebarHeader>
//         <SidebarContent>
//           {/* We create a SidebarGroup for each parent. */}
//           {data.navMain.map((item) => (
//             <SidebarGroup key={item.title}>
//               <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   {item.items.map((subItem) => (
//                     <SidebarMenuItem key={subItem.title}>
//                       <SidebarMenuButton
//                         asChild
//                         isActive={subItem.isActive}
//                         onClick={() => handleMenuItemClick(subItem.title)} // Update content on click
//                       >
//                         <a href={subItem.url}>{subItem.title}</a>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           ))}
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>

//       <div className="content-container">
//         {/* Display selected content */}
//         {selectedContent ? (
//           <div className="content">
//             <h2>{selectedContent}</h2>
//             <p>Details about {selectedContent}</p>
//             {/* Add any relevant content based on selected item */}
//           </div>
//         ) : (
//           <div className="default-content">
//             <h2>Select an item from the sidebar</h2>
//           </div>
//         )}
//       </div>
//     </SidebarProvider>
//   );
// }
import * as React from "react";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "/chart", // ChartDemo.jsx
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const [selectedContent, setSelectedContent] = React.useState(null);

  const handleMenuItemClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <SidebarProvider>
      <Sidebar {...props}>
        <SidebarHeader>
          <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
          <SearchForm />
        </SidebarHeader>
        <SidebarContent>
          {/* Main section with the 3 primary sidebar items */}
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    onClick={() => handleMenuItemClick("Table Demo")}
                  >
                    <a href="/dashboard/table">Table Demo</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    onClick={() => handleMenuItemClick("Chart Demo")}
                  >
                    <a href="/dashboard/chart">Chart Demo</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    onClick={() => handleMenuItemClick("Form Demo")}
                  >
                    <a href="/dashboard/card">Card and Form Demo</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    onClick={() => handleMenuItemClick("Form Demo")}
                  >
                    <a href="/dashboard/dialog">Pop up form</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {/* Add any additional sidebar items as necessary */}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* The rest of the sidebar groups from your original code */}
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={subItem.isActive}
                        onClick={() => handleMenuItemClick(subItem.title)}
                      >
                        <a href={subItem.url}>{subItem.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>

     
    </SidebarProvider>
  );
}
