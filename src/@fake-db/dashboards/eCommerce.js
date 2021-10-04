import React from "react";
import {getTodayDate, getYesterdayDate} from "../../@jumbo/utils/dateHelper";
import {
  EventAvailable,
  DateRange,
  LocalAtm,
  EventNote,
  RotateLeft,
  Cake,
  Error,
  Warning,
  Replay,
  Subscriptions,
  Share,
  TouchApp
} from "@material-ui/icons";

export const eCommerce = {
  newOrders: {
    title: "New Orders",
    desc: "32 new this Month",
    orderList: [
      {
        id: 21,
        name: "Julia Robert",
        email: "@julia.robert",
        orders: 3,
        status: "rejected",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      {
        id: 22,
        name: "Joe Lee",
        email: "@joe.lee",
        orders: 3,
        status: "pending",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      {
        id: 23,
        name: "Chang Lee",
        email: "@chang.lee",
        orders: 3,
        status: "paid",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      {
        id: 24,
        name: "Mickey Arthur",
        email: "@mickey.arthur",
        orders: 3,
        status: "progress",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      {
        id: 25,
        name: "Shane Watson",
        email: "@shane.watson",
        orders: 3,
        status: "completed",
        profile_pic: "https://via.placeholder.com/150x150"
      }
    ]
  },
  saleHistory: [
    {name: "J", amt: 1400},
    {name: "F", amt: 2210},
    {name: "M", amt: 1000},
    {name: "A", amt: 2000},
    {name: "M", amt: 1400},
    {name: "J", amt: 2300},
    {name: "J", amt: 500},
    {name: "A", amt: 2000},
    {name: "S", amt: 1500},
    {name: "O", amt: 1000},
    {name: "N", amt: 2000},
    {name: "D", amt: 500},
    {name: "M", amt: 1000},
    {name: "A", amt: 2000},
    {name: "M", amt: 1400}
  ],

  yearlyProfit: {
    title: "Yearly Profit",
    subTitle: "$125K +",
    desc: "Post 9 month data",
    chartData: [ 100, 300 ]
  },
  salesStatistic: {
    title: "Sales Statistic",
    statisticList: [
      {
        icon: <EventAvailable />,
        value: "48548",
        title: "Orders Monthly"
      },

      {
        icon: <EventNote />,
        value: "6,875",
        title: "Orders Weekly"
      },

      {
        icon: <LocalAtm />,
        value: "$210,213",
        title: "Average Revenue"
      },

      {
        icon: <LocalAtm />,
        value: "$692,874",
        title: "Total Revenue"
      },

      {
        icon: <DateRange />,
        value: "9,223",
        title: "Total Orders"
      },
      {
        icon: <DateRange />,
        value: "8,543",
        title: "Past Orders"
      }
    ],
    salesStatisticData: [
      {name: "Jan", uv: 9000},
      {name: "Feb", uv: 12000},
      {name: "Mar", uv: 7000},
      {name: "Apr", uv: 12000},
      {name: "May", uv: 14000},
      {name: "Jun", uv: 18500},
      {name: "Jul", uv: 14000},
      {name: "Aug", uv: 17000},
      {name: "Sep", uv: 15000},
      {name: "Oct", uv: 18000},
      {name: "Nov", uv: 19500},
      {name: "Dec", uv: 16000}
    ],
    salesGaugeData: [
      {
        category: "Total Orders",
        value: 65,
        full: 100
      },
      {
        category: "Past Orders",
        value: 80,
        full: 100
      },
      {
        category: "Total Revenue",
        value: 90,
        full: 100
      }
    ]
  },
  applicationsData: {
    colors: [ "#0795F4", "#8DCD03", "#23036A" ],
    pieData: [
      {
        name: "Windows",
        value: 25.85
      },
      {
        name: "Apple",
        value: 50.85
      },
      {
        name: "Android ",
        value: 25.91
      }
    ],
    applicationsList: [
      "/images/dashboard/window.png",
      "/images/dashboard/apple.png",
      "/images/dashboard/android.png"
    ]
  },
  notifications: [
    {
      id: 1,
      bgColor: "#D7F5B1",
      color: "#8DCD03",
      content:
        "Product pricing database was successfully updated on 13 August, 05:30PM",
      showIcon: false,
      icon: <RotateLeft />
    },
    {
      id: 2,
      bgColor: "#F2E7FE",
      color: "#7F39FB",
      content:
        "Guptil, Naresh and 5 other friends have birthday, wish them now!",
      showIcon: false,
      icon: <Cake />
    },
    {
      id: 3,
      bgColor: "#FFC7D1",
      color: "#E00930",
      content: "12 orders are cancelled due to payment issue",
      showIcon: true,
      icon: <Error />
    },
    {
      id: 4,
      bgColor: "#FFDE99",
      color: "#FF8C00",
      content: "System running slow due to heavy traffic.",
      showIcon: false,
      icon: <Warning />
    }
  ],
  recentOrders: [
    {
      orderId: 3454,
      customer: {
        name: "Alisha Chinai",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      orderDate: getTodayDate(),
      deliveryDate: getTodayDate(),
      status: "onHold"
    },
    {
      orderId: 3455,
      customer: {
        name: "Chang Lee",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      orderDate: getTodayDate(),
      deliveryDate: getTodayDate(),
      status: "completed"
    },
    {
      orderId: 3456,
      customer: {
        name: "Mickey Arthur",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      orderDate: getTodayDate(),
      deliveryDate: getTodayDate(),
      status: "completed"
    },
    {
      orderId: 3457,
      customer: {
        name: "Shane Watson",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      orderDate: getYesterdayDate(),
      deliveryDate: getTodayDate(),
      status: "delayed"
    },
    {
      orderId: 3458,
      customer: {
        name: "Shane Watson",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      orderDate: "20.06.2020",
      deliveryDate: "21.06.2020",
      status: "cancelled"
    },
    {
      orderId: 3458,
      customer: {
        name: "Amelia",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      orderDate: getTodayDate(),
      deliveryDate: getTodayDate(),
      status: "onHold"
    }
  ],
  onlineSignups: [
    {month: "Jan", count: 2000},
    {month: "Feb", count: 1450},
    {month: "Mar", count: 1100},
    {month: "Apr", count: 1400},
    {month: "May", count: 900},
    {month: "Jun", count: 1600},
    {month: "Jul", count: 1300},
    {month: "Aug", count: 1800},
    {month: "Sep", count: 1200},
    {month: "Oct", count: 1600}
  ],
  lastMonthSaleStats: [
    {date: "3", value: 2000},
    {date: "6", value: 1450},
    {date: "9", value: 1650},
    {date: "12", value: 1200},
    {date: "15", value: 1800},
    {date: "18", value: 1300},
    {date: "21", value: 1550},
    {date: "24", value: 1850},
    {date: "27", value: 1400},
    {date: "30", value: 950}
  ],
  totalRevenue: [
    {month: "Jan", amount: 1000},
    {month: "Feb", amount: 850},
    {month: "Mar", amount: 1400},
    {month: "Apr", amount: 700},
    {month: "May", amount: 1100},
    {month: "Jun", amount: 900},
    {month: "Jul", amount: 1600},
    {month: "Aug", amount: 900},
    {month: "Sep", amount: 1250},
    {month: "Oct", amount: 1000},
    {month: "Nov", amount: 1400},
    {month: "Dec", amount: 1800}
  ],
  totalEmails: [
    {month: "Jan", sent: 1600, bounced: 1600},
    {month: "Feb", sent: 1000, bounced: 1400},
    {month: "Mar", sent: 1100, bounced: 1100},
    {month: "Apr", sent: 1200, bounced: 800},
    {month: "May", sent: 1300, bounced: 1300},
    {month: "Jun", sent: 1450, bounced: 1900},
    {month: "Jul", sent: 1800, bounced: 1800},
    {month: "Aug", sent: 2000, bounced: 1700},
    {month: "Sep", sent: 1700, bounced: 1400},
    {month: "Oct", sent: 1400, bounced: 1100},
    {month: "Nov", sent: 1600, bounced: 1500},
    {month: "Dec", sent: 1800, bounced: 1800}
  ],
  popularProducts: [
    {
      id: 1,
      name: "Creative Watch",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 200,
      sale_price: 180,
      featured_image: "https://via.placeholder.com/80x80",
      variants: [
        {
          label: "Color",
          type: "color",
          options: [
            {slug: "purple", value: "purple"},
            {slug: "green", value: "green"},
            {slug: "yellow", value: "yellow"}
          ]
        }
      ],
      inStock: true
    },
    {
      id: 2,
      name: "Galaxy Sonic Headphone",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 100,
      sale_price: 80,
      featured_image: "https://via.placeholder.com/80x80",
      variants: [
        {
          label: "Color",
          type: "color",
          options: [
            {slug: "black", value: "black"},
            {slug: "red", value: "red"},
            {slug: "blue", value: "blue"}
          ]
        }
      ],
      inStock: true
    },
    {
      id: 3,
      name: "Smart Lamp",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 300,
      sale_price: 250,
      featured_image: "https://via.placeholder.com/80x80",
      variants: [
        {
          label: "Color",
          type: "color",
          options: [
            {slug: "red", value: "red"},
            {slug: "green", value: "green"},
            {slug: "orange", value: "orange"}
          ]
        }
      ],
      inStock: false
    },
    {
      id: 4,
      name: "iPower Speaker",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 400,
      sale_price: 300,
      featured_image: "https://via.placeholder.com/80x80",
      variants: [
        {
          label: "Size",
          type: "size",
          options: [
            {slug: "30wt", value: "30Wt"},
            {slug: "40wt", value: "40Wt"},
            {slug: "50wt", value: "50Wt"}
          ]
        }
      ],
      inStock: true
    },
    {
      id: 5,
      name: "Study Lamp",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 200,
      sale_price: 160,
      featured_image: "https://via.placeholder.com/80x80",
      variants: [
        {
          label: "Color",
          type: "color",
          options: [
            {slug: "red", value: "red"},
            {slug: "blue", value: "blue"}
          ]
        }
      ],
      inStock: true
    },
    {
      id: 6,
      name: "T-Shirt",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 150,
      sale_price: 120,
      featured_image: "https://via.placeholder.com/600x400",
      variants: [
        {
          label: "Size",
          type: "size",
          options: [
            {slug: "small", value: "Small"},
            {slug: "medium", value: "Medium"},
            {slug: "large", value: "Large"}
          ]
        }
      ],
      inStock: true
    },
    {
      id: 7,
      name: "Bizinto 1 Three Pin",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 150,
      sale_price: 120,
      featured_image: "https://via.placeholder.com/600x400",
      inStock: true
    },
    {
      id: 8,
      name: "Running Shoes",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 150,
      sale_price: 120,
      featured_image: "https://via.placeholder.com/600x450",
      inStock: true
    },
    {
      id: 9,
      name: "football",
      description: "Lorem Ipsum is simply dummy text of the printing ",
      price: 150,
      sale_price: 120,
      featured_image: "https://via.placeholder.com/600x400",
      inStock: true
    }
  ],
  productDetails: {
    title: "Product Title",
    product_image: "https://via.placeholder.com/342x165",
    productPrice: "$225.00"
  },
  browserHistory: [
    {
      browserName: "Firefox",
      image: "/images/dashboard/firefox.png",
      user: 14500,
      browserData: [
        {month: "Jan", user: 1500},
        {month: "", user: 400},
        {month: "Feb", user: 2000},
        {month: "Mar", user: 1200},
        {month: "Apr", user: 2200},
        {month: "May", user: 4600},
        {month: "Jun", user: 4300},
        {month: "July", user: 2900},
        {month: "Aug", user: 4800},
        {month: "Sep", user: 1500}
      ],
      color: "#8DCD03"
    },
    {
      browserName: "Google Chrome",
      image: "/images/dashboard/chrome.png",
      user: 15500,
      browserData: [
        {month: "Jan", user: 200},
        {month: "Feb", user: 1300},
        {month: "Mar", user: 550},
        {month: "Apr", user: 500},
        {month: "May", user: 1700},
        {month: "Jun", user: 450},
        {month: "Jul", user: 770},
        {month: "Aug", user: 900}
      ],
      color: "#7F39FB"
    },
    {
      browserName: "Safari",
      image: "/images/dashboard/safari.png",
      user: 16500,
      browserData: [
        {month: "Jan", user: 450},
        {month: "Feb", user: 300},
        {month: "Mar", user: 1350},
        {month: "Apr", user: 275},
        {month: "May", user: 500},
        {month: "Jun", user: 650},
        {month: "Jul", user: 900},
        {month: "Aug", user: 550}
      ],
      color: "#FF8C00"
    },
    {
      browserName: "Internet explorer",
      image: "/images/dashboard/internet_explorer.png",
      user: 5500,
      browserData: [
        {month: "Jan", user: 3500},
        {month: "Feb", user: 2000},
        {month: "Mar", user: 1200},
        {month: "Apr", user: 2200},
        {month: "May", user: 2600},
        {month: "Jun", user: 4300},
        {month: "July", user: 2900},
        {month: "Aug", user: 3800},
        {month: "Sep", user: 1500}
      ],
      color: "#2A2AFF"
    },
    {
      browserName: "Google Chrome",
      image: "/images/dashboard/chrome.png",
      user: 15500,
      browserData: [
        {month: "Jan", user: 200},
        {month: "Feb", user: 1300},
        {month: "Mar", user: 550},
        {month: "Apr", user: 500},
        {month: "May", user: 1700},
        {month: "Jun", user: 450},
        {month: "Jul", user: 770},
        {month: "Aug", user: 900}
      ],
      color: "#7F39FB"
    },
    {
      browserName: "Firefox",
      image: "/images/dashboard/firefox.png",
      user: 14500,
      browserData: [
        {month: "Jan", user: 1500},
        {month: "", user: 400},
        {month: "Feb", user: 2000},
        {month: "Mar", user: 1200},
        {month: "Apr", user: 2200},
        {month: "May", user: 4600},
        {month: "Jun", user: 4300},
        {month: "July", user: 2900},
        {month: "Aug", user: 4800},
        {month: "Sep", user: 1500}
      ],
      color: "#8DCD03"
    }
  ],
  siteTraffic: {
    title: "Site Traffic",
    siteTrafficList: [
      {
        icon: <TouchApp />,
        label: "New Visitor",
        bgColor: "#D7F5B1",
        color: "#5D9405"
      },
      {
        icon: <Replay />,
        label: "Repeated User",
        bgColor: "#FFDE99",
        color: "#D36F1A"
      },
      {
        icon: <Subscriptions />,
        label: "Subscriber",
        bgColor: "#9BE7FD",
        color: "#0356AF"
      },
      {
        icon: <Share />,
        label: "Share",
        bgColor: "#F2E7FE",
        color: "#7F39FB"
      }
    ]
  }
};
