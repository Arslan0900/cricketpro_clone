export const menuItems = [
  { title: "Live Score",url:"/LiveScore" },
  { title: "Series",url:"/Series" },
  {
    title: "Teams",url:"/Teams",
    // submenu: [
    //   { title: "Videos",url:"/Videos" },
    //   {title: " Feature",url:"/Feature"},
    //   { title: "Stats",url:"/stats",
    //     submenu: [
    //     { title: "Teams",url:"/Teams" }, 
    //     { title: "news" ,url:"/news"}
    //   ], },
    // ],
  },
  { title: "News",url:"/News" },
  { title: "Features",url:"/Features" },
  {
    title: "Stats",url:"Stats",
    submenu: [
      { title: "Teams",url:"/Teams" }, 
      { title: "news" ,url:"/news"}
    ],
  },
];
