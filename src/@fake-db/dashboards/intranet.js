import {getCustomDateTime, getNewDate} from "../../@jumbo/utils/dateHelper";

const today = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const currentMonth = monthNames[today.getMonth()];
const pastMonth = monthNames[today.getMonth() - 1];

export const intranet = {
  members: [
    {
      id: 1,
      name: "Albert Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 2,
      name: "John Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 3,
      name: "Jackson Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 4,
      name: "Jonty Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 5,
      name: "Jonathan Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 6,
      name: "Shane Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 7,
      name: "Lisa Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 8,
      name: "Cheeni Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 9,
      name: "Chilbram Hall",
      profilePic: "https://via.placeholder.com/150x150"
    },
    {
      id: 10,
      name: "Danny Hall",
      profilePic: "https://via.placeholder.com/150x150"
    }
  ],
  projectsList: [
    {
      id: 21,
      name: "Jumbo React",
      dueDate: "July 30, 2020",
      isDelayed: false,
      progress: 70,
      team: [ 1, 2, 5, 6, 8, 9 ]
    },
    {
      id: 22,
      name: "Wieldy",
      dueDate: "July 25, 2020",
      isDelayed: false,
      progress: 60,
      team: [ 1, 2, 3, 5 ]
    },
    {
      id: 24,
      name: "Mouldify",
      dueDate: "July 09, 2020",
      isDelayed: true,
      progress: 90,
      team: [ 2, 6, 9, 10 ]
    },
    {
      id: 28,
      name: "Jumbo React Admin",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 20,
      team: [ 2, 3, 4, 5, 6, 8 ]
    },
    {
      id: 29,
      name: "Drift Angular",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 40,
      team: [ 1, 2, 3, 5, 6, 8, 9, 10 ]
    },
    {
      id: 30,
      name: "Jumbo React",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 70,
      team: [ 2, 3, 5, 6, 7, 8 ]
    },
    {
      id: 32,
      name: "Wieldy",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 60,
      team: [ 1, 2, 3, 6, 9 ]
    },
    {
      id: 34,
      name: "Mouldify",
      dueDate: "July 15, 2020",
      isDelayed: true,
      progress: 90,
      team: [ 5, 6, 7 ]
    },
    {
      id: 38,
      name: "Jumbo React Admin",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 20,
      team: [ 1, 2, 5, 6, 7, 8 ]
    },
    {
      id: 39,
      name: "Drift Angular",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 40,
      team: [ 1, 2, 3, 4, 5, 6 ]
    },
    {
      id: 41,
      name: "Jumbo React",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 70,
      team: [ 4, 5, 8, 9 ]
    },
    {
      id: 42,
      name: "Wieldy",
      dueDate: "06-25-2020",
      isDelayed: false,
      progress: 60,
      team: [ 4, 5, 6, 2, 3 ]
    },
    {
      id: 44,
      name: "Mouldify",
      dueDate: "July 15, 2020",
      isDelayed: true,
      progress: 90,
      team: [ 1, 5, 9 ]
    },
    {
      id: 48,
      name: "Jumbo React Admin",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 20,
      team: [ 1, 2, 4, 5 ]
    },
    {
      id: 49,
      name: "Drift Angular",
      dueDate: "July 15, 2020",
      isDelayed: false,
      progress: 40,
      team: [ 1, 2, 3, 4, 5, 6, 8, 9 ]
    }
  ],
  userActivities: [
    {
      id: 1,
      date: "July 10, 2020",
      title: "ios App Launched",
      description: "Chat project's ios app is released today",
      logo: "/images/dashboard/intranet/companyLogo1.svg",
      color: "#5F5F5F"
    },
    {
      id: 2,
      date: "July 09, 2020",
      title: "Android App Launched",
      description: "Chat project's Android app is released today",
      logo: "/images/dashboard/intranet/companyLogo2.svg",
      color: "#EE7200"
    },
    {
      id: 3,
      date: "July 09, 2020",
      title: "Wieldy Hook version launched",
      description: "Wieldy Hook version is launched.",
      logo: "/images/dashboard/intranet/companyLogo3.svg",
      color: "#005FEE"
    },
    {
      id: 4,
      date: "July 08, 2020",
      title: "Jumbo React design launched",
      description: "Jumbo React design is ready to be implemented.",
      logo: "/images/dashboard/intranet/companyLogo4.svg",
      color: "#BA57DD"
    },
    {
      id: 5,
      date: "July 08, 2020",
      title: "Gest App launched",
      description: "Gest project's ios app is released today",
      logo: "/images/dashboard/intranet/companyLogo1.svg",
      color: "#C03F3F"
    },
    {
      id: 6,
      date: "July 07, 2020",
      title: "App Status changed",
      description: "App status has been changed to launched.",
      logo: "/images/dashboard/intranet/companyLogo2.svg",
      color: "#17A9FC"
    }
  ],
  newRequests: [
    {
      id: 32,
      user: {
        id: 21,
        name: "Julia Robert",
        username: "julia.robert",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      created_at: getCustomDateTime()
    },
    {
      id: 33,
      user: {
        id: 22,
        name: "Joe Lee",
        username: "joe.lee",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      created_at: getCustomDateTime(-1)
    },
    {
      id: 34,
      user: {
        id: 23,
        name: "Chang Lee",
        username: "chang.lee",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      created_at: getCustomDateTime(-15, "days", "MMMM DD, YYYY")
    },
    {
      id: 35,
      user: {
        id: 24,
        name: "Mickey Arthur",
        username: "mickey.arthur",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      created_at: getCustomDateTime(-32, "days", "MMMM DD, YYYY")
    },
    {
      id: 36,
      user: {
        id: 25,
        name: "Shane Watson",
        username: "shane.watson",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      created_at: getCustomDateTime(-35, "days", "MMMM DD, YYYY")
    }
  ],
  headerChartData: [
    {name: "Jan", Income: 12000, Expanse: 3000},
    {name: "Feb", Income: 45000, Expanse: 30000},
    {name: "Mar", Income: 7000, Expanse: 27000},
    {name: "Apr", Income: 35000, Expanse: 17000},
    {name: "May", Income: 33000, Expanse: 22000},
    {name: "Jun", Income: 34000, Expanse: 16000},
    {name: "Jul", Income: 45000, Expanse: 19000},
    {name: "Aug", Income: 10000, Expanse: 2000},
    {name: "Sep", Income: 25000, Expanse: 14000},
    {name: "Oct", Income: 6000, Expanse: 3000},
    {name: "Nov", Income: 50000, Expanse: 20000},
    {name: "Dec", Income: 43000, Expanse: 4000},
    {name: "", Income: 10000, Expanse: 2000}
  ],
  userDetails: {
    id: 123,
    name: "John Doe",
    profile_pic: "https://via.placeholder.com/150x150",
    job_title: "General Manager",
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    badge: "/images/dashboard/intranet/badge.png",
    stats: {
      followers: 457,
      courses: 12,
      following: 697
    }
  },
  productsList: [
    {
      id: 1,
      name: "Jumbo",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#03DAC5",
      sales_data: {
        income: 1800,
        sold_qty: 250,
        sales_inflation: 100
      }
    },
    {
      id: 2,
      name: "React",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#FF9F1C",
      sales_data: {
        income: 890,
        sold_qty: 100,
        sales_inflation: 20
      }
    },
    {
      id: 3,
      name: "Flexile",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#55DDE0",
      sales_data: {
        income: 3500,
        sold_qty: 450,
        sales_inflation: 120
      }
    },
    {
      id: 4,
      name: "Drift",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#2BA444",
      sales_data: {
        income: 380,
        sold_qty: 135,
        sales_inflation: -25
      }
    },
    {
      id: 5,
      name: "Wield",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#EF8354",
      sales_data: {
        income: 9000,
        sold_qty: 1250,
        sales_inflation: 125
      }
    },
    {
      id: 6,
      name: "Apple",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#ce93d8",
      sales_data: {
        income: 1800,
        sold_qty: 250,
        sales_inflation: 100
      }
    },
    {
      id: 7,
      name: "Oracle",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#dce775",
      sales_data: {
        income: 890,
        sold_qty: 100,
        sales_inflation: 20
      }
    },
    {
      id: 8,
      name: "eBook",
      logo: "https://via.placeholder.com/40x40",
      colorCode: "#bdbdbd",
      sales_data: {
        income: 3500,
        sold_qty: 450,
        sales_inflation: 120
      }
    }
  ],
  userPhotos: [
    {
      id: 1,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Beauty with Beast",
      thumb: "",
      size: 2.5
    },
    {
      id: 2,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Nature Love",
      thumb: "",
      size: 2
    },
    {
      id: 3,
      photo_url: "https://via.placeholder.com/400x400",
      caption: "Forest",
      thumb: "",
      size: 3.5
    },
    {
      id: 4,
      photo_url: "https://via.placeholder.com/400x400",
      caption: "Nature at its best",
      thumb: "",
      size: 5
    },
    {
      id: 5,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Sea House",
      thumb: "",
      size: 3.5
    },
    {
      id: 6,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Minimal",
      thumb: "",
      size: 4
    },
    {
      id: 7,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Beauty with Beast",
      thumb: "",
      size: 2.5
    },
    {
      id: 8,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Nature Love",
      thumb: "",
      size: 2
    },
    {
      id: 9,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Forest",
      thumb: "",
      size: 3.5
    },
    {
      id: 10,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Nature at its best",
      thumb: "",
      size: 5
    },
    {
      id: 11,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Sea House",
      thumb: "",
      size: 3.5
    },
    {
      id: 12,
      photo_url: "https://via.placeholder.com/600x400",
      caption: "Minimal",
      thumb: "",
      size: 4
    }
  ],
  calendarEvents: [
    {
      id: 123,
      event_name: "Meeting with John",
      color: "#0795F4",
      isAttended: true,
      scheduled_with: {id: 12, name: "John Doe"},
      date: getNewDate(4, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 124,
      event_name: "Launch of App",
      color: "#5D9405",
      isAttended: false,
      scheduled_with: {id: 12, name: "Robert Key"},
      date: getNewDate(3, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 125,
      event_name: "Call with Era",
      color: "#03DAC5",
      isAttended: false,
      scheduled_with: {id: 12, name: "Era"},
      date: getNewDate(2, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 126,
      event_name: "Pay credit card bill",
      color: "#FF8C00",
      isAttended: true,
      scheduled_with: {id: 12, name: "Credit Manager"},
      date: getNewDate(1, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 127,
      event_name: "Visit the client",
      color: "#03DAC5",
      isAttended: false,
      scheduled_with: {id: 12, name: "Dhruva Sharma"},
      date: getNewDate(1, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 128,
      event_name: "Team Meeting",
      color: "#5D9405",
      isAttended: true,
      scheduled_with: {id: 12, name: "Team"},
      date: getNewDate(0, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 129,
      event_name: "Tech Seminar",
      color: "#0795F4",
      isAttended: true,
      scheduled_with: {id: 12, name: "Denly Jack"},
      date: getNewDate(0, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 130,
      event_name: "Visit Mr. John",
      color: "#5D9405",
      isAttended: false,
      scheduled_with: {id: 12, name: "John Doe"},
      date: getNewDate(0, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 131,
      event_name: "Launch Gest Web App",
      color: "#FF8C00",
      isAttended: false,
      scheduled_with: {id: 12, name: "CJ"},
      date: getNewDate(0, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 132,
      event_name: "Team Lunch",
      color: "#0795F4",
      isAttended: false,
      scheduled_with: {id: 12, name: "Team"},
      date: getNewDate(-1, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 133,
      event_name: "Talk with Google representative",
      color: "#5D9405",
      isAttended: true,
      scheduled_with: {id: 12, name: "Jacky Google"},
      date: getNewDate(-2, "DD MMM, YYYY, hh:mm a")
    },
    {
      id: 134,
      event_name: "Corona Test",
      color: "#FF8C00",
      isAttended: false,
      scheduled_with: {id: 12, name: "Team"},
      date: getNewDate(-3, "DD MMM, YYYY, hh:mm a")
    }
  ],
  taskCategories: [
    {id: 12, label: "Personal Tasks", slug: "personal"},
    {id: 13, label: "Professional Tasks", slug: "professional"},
    {id: 14, label: "Extra Tasks", slug: "extra"}
  ],
  tasksList: [
    {
      id: 1,
      title: "Home Page Changes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 2,
      isCompleted: true,
      category: "personal"
    },
    {
      id: 2,
      title: "Launch Gest App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 4,
      isCompleted: false,
      category: "professional"
    },
    {
      id: 3,
      title: "Visit to John",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 0,
      isCompleted: true,
      category: "extra"
    },
    {
      id: 4,
      title: "Work on personal website",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 5,
      isCompleted: false,
      category: "personal"
    },
    {
      id: 5,
      title: "Work on Jumbo React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 2,
      isCompleted: false,
      category: "professional"
    },
    {
      id: 6,
      title: "Take Team for Lunch",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 1,
      isCompleted: false,
      category: "extra"
    },
    {
      id: 7,
      title: "Call Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 0,
      isCompleted: true,
      category: "personal"
    },
    {
      id: 8,
      title: "Team Meeting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 2,
      isCompleted: true,
      category: "professional"
    },
    {
      id: 9,
      title: "Review System and Hardwares",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 2,
      isCompleted: false,
      category: "extra"
    },
    {
      id: 10,
      title: "Meet Mr. Era",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 0,
      isCompleted: false,
      category: "personal"
    },
    {
      id: 11,
      title: "Start Table Tennis",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 2,
      isCompleted: true,
      category: "extra"
    },
    {
      id: 12,
      title: "Work on Wieldy ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      unreadComments: 0,
      isCompleted: false,
      category: "professional"
    }
  ],
  dailyFeed: [
    {
      id: 1,
      user: {
        id: 100,
        name: "Atul Midha",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "PROJECT_INVITATION",
      metaData: {
        sender: {
          id: 123,
          name: "Murli Swami",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        project: {id: 12, name: "Mouldify"}
      },
      likes: 123,
      shares: 25,
      timeRange: "10:30 am - 22.07.20", //  timeFromNow(),
      createdAt: getCustomDateTime(-5, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 2,
      user: {
        id: 101,
        name: "Dinesh Suthar",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "PHOTOS_UPLOADED",
      metaData: {
        user: {
          id: 1234,
          name: "Tanmay Goswami",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        group: "Art Lovers",
        count: 6,
        photos: [
          {
            id: 1,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Beauty with Beast"
          },
          {
            id: 2,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Nature Love"
          },
          {
            id: 3,
            photo_url: "https://via.placeholder.com/400x400",
            caption: "Forest"
          },
          {
            id: 4,
            photo_url: "https://via.placeholder.com/400x400",
            caption: "Nature at its best"
          },
          {
            id: 5,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Sea House"
          },
          {
            id: 6,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Minimal"
          }
        ]
      },
      likes: 129,
      shares: 25,
      timeRange: "09:30 am - 22.07.20",
      createdAt: getCustomDateTime(-7, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 3,
      user: {
        id: 102,
        name: "John Doe",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "SHARED_POST",
      metaData: {
        user: {
          id: 124,
          name: "Jacky Roy",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        post: {title: "This is Beginning"}
      },
      likes: 5677,
      shares: 345,
      timeRange: "06:30 am - 22.07.20",
      createdAt: getCustomDateTime(-8, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 4,
      user: {
        id: 105,
        name: "North Taylor",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "PROJECT_INVITATION",
      metaData: {
        sender: {
          id: 130,
          name: "Joe Root",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        project: {id: 13, name: "Jumbo"}
      },
      likes: 234,
      shares: 86,
      timeRange: "03:30 am - 22.07.20",
      createdAt: getCustomDateTime(-10, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 5,
      user: {
        id: 756,
        name: "Peter Broad",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "PHOTOS_UPLOADED",
      metaData: {
        user: {
          id: 1234,
          name: "James Anderson",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        count: 8,
        group: "Javascript Experts",
        photos: [
          {
            id: 1,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Beauty with Beast"
          },
          {
            id: 2,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Nature Love"
          },
          {
            id: 3,
            photo_url: "https://via.placeholder.com/400x400",
            caption: "Forest"
          },
          {
            id: 4,
            photo_url: "https://via.placeholder.com/400x400",
            caption: "Nature at its best"
          },
          {
            id: 5,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Sea House"
          },
          {
            id: 6,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Minimal"
          },
          {
            id: 7,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Beauty with Beast"
          },
          {
            id: 8,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Nature Love"
          }
        ]
      },
      likes: 457,
      shares: 54,
      timeRange: "12:30 am - 22.07.20",
      createdAt: getCustomDateTime(-15, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 6,
      user: {
        id: 455,
        name: "Rose Taylor",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "SHARED_POST",
      metaData: {
        user: {
          id: 765,
          name: "Robert Twose",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        post: {title: "Introduction to Javascript"}
      },
      likes: 768,
      shares: 567,
      timeRange: "11:30 pm - 21.07.20",
      createdAt: getCustomDateTime(-1, "hours", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 7,
      user: {
        id: 676,
        name: "Williams Blake",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "PROJECT_INVITATION",
      metaData: {
        sender: {
          id: 544,
          name: "Janifer decibel",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        project: {id: 16, name: "Wieldy"}
      },
      likes: 856,
      shares: 45,
      timeRange: "10:30 pm - 21.07.20",
      createdAt: getCustomDateTime(-3, "hours", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 8,
      user: {
        id: 906,
        name: "Steve Law",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "PHOTOS_UPLOADED",
      metaData: {
        user: {
          id: 786,
          name: "Dhruva Sharma",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        count: 3,
        group: "React Lovers",
        photos: [
          {
            id: 1,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Beauty with Beast"
          },
          {
            id: 2,
            photo_url: "https://via.placeholder.com/600x400",
            caption: "Nature Love"
          },
          {
            id: 3,
            photo_url: "https://via.placeholder.com/400x400",
            caption: "Forest"
          }
        ]
      },
      likes: 768,
      shares: 43,
      timeRange: "09:30 pm - 21.07.20",
      createdAt: getCustomDateTime(-6, "hours", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 9,
      user: {
        id: 678,
        name: "Brett Heavy",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "SHARED_POST",
      metaData: {
        user: {
          id: 657,
          name: "Ian hughes",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        post: {title: "A road to good development"}
      },
      likes: 76656,
      shares: 4566,
      timeRange: "05:30 pm - 21.07.20",
      createdAt: getCustomDateTime(-10, "hours", "MMMM DD, YYYY, h:mm:ss a")
    }
  ],
  latestNotifications: [
    {
      type: "INVITATION",
      total: 5,
      records: [
        {
          id: 1,
          user: {
            id: 100,
            name: "Atul Midha",
            profile_pic: "https://via.placeholder.com/150x150"
          },
          type: "PROJECT_INVITATION",
          metaData: {
            sender: {
              id: 123,
              name: "Murli Swami",
              profile_pic: "https://via.placeholder.com/150x150"
            },
            project: {id: 12, name: "Mouldify"}
          },
          timeRange: "10:30 am - 22.07.20", //  timeFromNow(),
          createdAt: getCustomDateTime(
            -5,
            "minutes",
            "MMMM DD, YYYY, h:mm:ss a"
          )
        },
        {
          id: 2,
          user: {
            id: 676,
            name: "Williams Blake",
            profile_pic: "https://via.placeholder.com/150x150"
          },
          type: "PROJECT_INVITATION",
          metaData: {
            sender: {
              id: 544,
              name: "Janifer decibel",
              profile_pic: "https://via.placeholder.com/150x150"
            },
            project: {id: 16, name: "Wieldy"}
          },
          timeRange: "10:30 pm - 21.07.20",
          createdAt: getCustomDateTime(-3, "hours", "MMMM DD, YYYY, h:mm:ss a")
        }
      ]
    },
    {
      type: "MESSAGES",
      total: 2,
      records: [
        {
          id: 1,
          name: "Remy Sharp",
          content: "You have a new friend suggestion: ",
          avatar: "https://via.placeholder.com/150x150",
          icon: "all-inclusive",
          time: "5h",
          media: "",
          status: "unread"
        },
        {
          id: 2,
          name: "Travis Howard",
          content: "You have a new friend suggestion: ",
          avatar: "https://via.placeholder.com/150x150",
          icon: "info",
          time: "10h",
          media: "",
          status: "unread"
        }
      ]
    },
    {
      type: "FEEDS",
      total: 25,
      records: [
        {
          id: 1,
          user: {
            id: 100,
            name: "Atul Midha",
            profile_pic: "https://via.placeholder.com/150x150"
          },
          type: "PROJECT_INVITATION",
          metaData: {
            sender: {
              id: 123,
              name: "Harmayni Croft",
              profile_pic: "https://via.placeholder.com/150x150"
            },
            project: {id: 12, name: "Mouldify"}
          },
          likes: 123,
          shares: 25,
          timeRange: "10:30 am - 22.07.20",
          createdAt: getCustomDateTime(
            -7,
            "minutes",
            "MMMM DD, YYYY, h:mm:ss a"
          )
        },
        {
          id: 2,
          user: {
            id: 101,
            name: "Dinesh Suthar",
            profile_pic: "https://via.placeholder.com/150x150"
          },
          type: "PHOTOS_UPLOADED",
          metaData: {
            user: {
              id: 1234,
              name: "Tanmay Goswami",
              profile_pic: "https://via.placeholder.com/150x150"
            },
            group: "Art Lovers",
            count: 5,
            photos: [
              {
                id: 1,
                photo_url: "https://via.placeholder.com/600x400",
                caption: "Beauty with Beast"
              },
              {
                id: 2,
                photo_url: "https://via.placeholder.com/600x400",
                caption: "Nature Love"
              },
              {
                id: 3,
                photo_url: "https://via.placeholder.com/400x400",
                caption: "Forest"
              },
              {
                id: 4,
                photo_url: "https://via.placeholder.com/400x400",
                caption: "Nature at its best"
              },
              {
                id: 5,
                photo_url: "https://via.placeholder.com/600x400",
                caption: "Sea House"
              }
            ]
          },
          timeRange: "09:30 am - 22.07.20",
          createdAt: getCustomDateTime(
            -7,
            "minutes",
            "MMMM DD, YYYY, h:mm:ss a"
          )
        },
        {
          id: 3,
          user: {
            id: 102,
            name: "John Doe",
            profile_pic: "https://via.placeholder.com/150x150"
          },
          type: "SHARED_POST",
          metaData: {
            user: {
              id: 124,
              name: "Jacky Roy",
              profile_pic: "https://via.placeholder.com/150x150"
            },
            post: {title: "This is Beginning"}
          },
          likes: 5677,
          shares: 345,
          timeRange: "06:30 am - 22.07.20",
          createdAt: getCustomDateTime(
            -8,
            "minutes",
            "MMMM DD, YYYY, h:mm:ss a"
          )
        }
      ]
    }
  ],
  projectWorked: {
    id: 1,
    projectName: "Jumbo React",
    workedHours: [
      {
        workDate: "",
        hours: 2
      },
      {
        workDate: "",
        hours: 2
      },
      {
        workDate: "",
        hours: 2
      }
    ]
  },
  projects: [
    {
      label: "jumbo react",
      value: "jumbo-react",
      color: "#6200EE",
      totalHours: 20,
      dailyAverageHours: 11,
      data: [
        {month: "Jan", queries: 400, deals: 400},
        {month: "Feb", queries: 500, deals: 600},
        {month: "Mar", queries: 400, deals: 300},
        {month: "Apr", queries: 350, deals: 200},
        {month: "May", queries: 700, deals: 700},
        {month: "Jun", queries: 100, deals: 600},
        {month: "Jul", queries: 500, deals: 50},
        {month: "Aug", queries: 350, deals: 550},
        {month: "Sep", queries: 300, deals: 200},
        {month: "Oct", queries: 200, deals: 500},
        {month: "Nov", queries: 200, deals: 600},
        {month: "Dec", queries: 200, deals: 100}
      ]
    },
    {
      label: "Wieldy",
      value: "wieldy",
      color: "#F5A32F",
      totalHours: 15,
      dailyAverageHours: 7,
      data: [
        {month: "Jan", queries: 400, deals: 400},
        {month: "Feb", queries: 500, deals: 700},
        {month: "Mar", queries: 400, deals: 300},
        {month: "Apr", queries: 350, deals: 400},
        {month: "May", queries: 700, deals: 700},
        {month: "Jun", queries: 100, deals: 800},
        {month: "Jul", queries: 500, deals: 50},
        {month: "Aug", queries: 350, deals: 550},
        {month: "Sep", queries: 300, deals: 300},
        {month: "Oct", queries: 200, deals: 500},
        {month: "Nov", queries: 200, deals: 700},
        {month: "Dec", queries: 200, deals: 200}
      ]
    },
    {
      label: "Drift Angular",
      value: "drift-angular",
      color: "#FF4081",
      totalHours: 18,
      dailyAverageHours: 9,
      data: [
        {month: "Jan", queries: 400, deals: 500},
        {month: "Feb", queries: 500, deals: 400},
        {month: "Mar", queries: 400, deals: 600},
        {month: "Apr", queries: 350, deals: 200},
        {month: "May", queries: 700, deals: 900},
        {month: "Jun", queries: 100, deals: 600},
        {month: "Jul", queries: 500, deals: 50},
        {month: "Aug", queries: 350, deals: 600},
        {month: "Sep", queries: 300, deals: 200},
        {month: "Oct", queries: 200, deals: 500},
        {month: "Nov", queries: 200, deals: 800},
        {month: "Dec", queries: 200, deals: 300}
      ]
    }
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
  ourOfficeData: {
    title: "Our Office",
    description:
      "Fusce eget dolor id justo lictus commodo pharetra nisi. Donec velit libero",
    socialProfiles: [
      {title: "twitter", url: ""},
      {title: "facebook", url: ""},
      {title: "instagram", url: ""}
    ],
    addresses: [
      {
        label: "Head Office",
        addressLine1: "488, blingum road",
        addressLine2: "JP Street",
        city: "NJ",
        state: "California",
        zipCode: 455473,
        phoneNumber: "+01-992856-8535",
        emailAddress: "bob.bulider@jobportal.com",
        mapDirectionLink:
          "https://www.google.com/maps/place/RSETI,SBI,BIKANER/@28.017662,73.3346816,19z/data=!4m12!1m6!3m5!1s0x0:0x728b47887e97d499!2sLotus+Dairy!8m2!3d28.0161051!4d73.3321255!3m4!1s0x393fdd88866b7461:0x92ed0b10ac41fa6d!8m2!3d28.0177013!4d73.3361341"
      },
      {
        label: "Representative Office",
        addressLine1: "Rani bajar",
        addressLine2: "Jaipur road",
        city: "Bikaner",
        state: "Rajasthan",
        zipCode: 334004,
        phoneNumber: "+01-336558-8535",
        emailAddress: "john-smith@jobportal.com",
        mapDirectionLink:
          "https://www.google.com/maps/place/RSETI,SBI,BIKANER/@28.017662,73.3346816,19z/data=!4m12!1m6!3m5!1s0x0:0x728b47887e97d499!2sLotus+Dairy!8m2!3d28.0161051!4d73.3321255!3m4!1s0x393fdd88866b7461:0x92ed0b10ac41fa6d!8m2!3d28.0177013!4d73.3361341"
      }
    ]
  },
  monthlyTopChart: {
    title: "Views",
    hoverButton: {
      text: "Monthly",
      color: "#5D9405",
      hoverText: "Past Month",
      hoverColor: "#fff"
    },
    analyticData: {
      amount: "386,200",
      label: "Total Views",
      percentage: "98%",
      onHover: {
        amount: "390,200",
        percentage: "98.8%"
      }
    },
    primaryColor: {
      solid: "#ADDC4C",
      light: "#D7F5B1"
    },
    secondaryColor: {
      solid: "#C8372D",
      light: "#FADEE3"
    },
    chartData: {
      current: [
        {label: 1 + ", " + currentMonth, value: 100},
        {label: 2 + ", " + currentMonth, value: 120},
        {label: 3 + ", " + currentMonth, value: 130},
        {label: 4 + ", " + currentMonth, value: 120},
        {label: 5 + ", " + currentMonth, value: 110},
        {label: 6 + ", " + currentMonth, value: 105},
        {label: 7 + ", " + currentMonth, value: 110},
        {label: 8 + ", " + currentMonth, value: 120},
        {label: 9 + ", " + currentMonth, value: 130},
        {label: 10 + ", " + currentMonth, value: 140},
        {label: 11 + ", " + currentMonth, value: 145},
        {label: 12 + ", " + currentMonth, value: 140},
        {label: 13 + ", " + currentMonth, value: 130},
        {label: 14 + ", " + currentMonth, value: 125}
      ],
      past: [
        {label: 1 + ", " + pastMonth, value: 100},
        {label: 2 + ", " + pastMonth, value: 120},
        {label: 3 + ", " + pastMonth, value: 130},
        {label: 4 + ", " + pastMonth, value: 120},
        {label: 5 + ", " + pastMonth, value: 110},
        {label: 6 + ", " + pastMonth, value: 105},
        {label: 7 + ", " + pastMonth, value: 110},
        {label: 8 + ", " + pastMonth, value: 100},
        {label: 9 + ", " + pastMonth, value: 90},
        {label: 10 + ", " + pastMonth, value: 95},
        {label: 11 + ", " + pastMonth, value: 80},
        {label: 12 + ", " + pastMonth, value: 60},
        {label: 13 + ", " + pastMonth, value: 65},
        {label: 14 + ", " + pastMonth, value: 50}
      ]
    }
  },
  annualTopChart: {
    title: "Orders",
    hoverButton: {
      text: "Annual",
      color: "#FF8C00",
      hoverText: "Last Year",
      hoverColor: "#fff"
    },
    analyticData: {
      amount: "80,800",
      label: "New Orders",
      percentage: "28%",
      onHover: {
        amount: "10,784",
        percentage: "40.8%"
      }
    },
    primaryColor: {
      solid: "#FF8C00",
      light: "#FFDE99"
    },
    secondaryColor: {
      solid: "#ADDC4C",
      light: "#D7F5B1"
    },
    chartData: {
      current: [
        {label: "January", value: 100},
        {label: "February", value: 120},
        {label: "March", value: 130},
        {label: "April", value: 120},
        {label: "May", value: 110},
        {label: "June", value: 105},
        {label: "July", value: 110},
        {label: "August", value: 120},
        {label: "September", value: 130},
        {label: "October", value: 140},
        {label: "November", value: 145},
        {label: "December", value: 140}
      ],
      past: [
        {label: "January", value: 100},
        {label: "February", value: 120},
        {label: "March", value: 130},
        {label: "April", value: 120},
        {label: "May", value: 110},
        {label: "June", value: 105},
        {label: "July", value: 110},
        {label: "August", value: 100},
        {label: "September", value: 90},
        {label: "October", value: 95},
        {label: "November", value: 80},
        {label: "December", value: 60}
      ]
    }
  },
  visitedChart: {
    today: [
      {label: "01 am", value: 100, visits: 125},
      {label: "03 am", value: 120, visits: 103},
      {label: "05 am", value: 130, visits: 89},
      {label: "07 am", value: 120, visits: 96},
      {label: "09 am", value: 110, visits: 122},
      {label: "11 am", value: 105, visits: 111},
      {label: "01 pm", value: 110, visits: 78},
      {label: "03 pm", value: 120, visits: 91},
      {label: "05 pm", value: 130, visits: 32},
      {label: "07 pm", value: 140, visits: 35},
      {label: "09 pm", value: 145, visits: 85},
      {label: "11 pm", value: 140, visits: 123}
    ],
    yesterday: [
      {label: "01 am", value: 100, visits: 100},
      {label: "03 am", value: 120, visits: 100},
      {label: "05 am", value: 130, visits: 100},
      {label: "07 am", value: 120, visits: 100},
      {label: "09 am", value: 110, visits: 100},
      {label: "11 am", value: 105, visits: 100},
      {label: "01 pm", value: 110, visits: 100},
      {label: "03 pm", value: 100, visits: 100},
      {label: "05 pm", value: 90, visits: 100},
      {label: "07 pm", value: 95, visits: 100},
      {label: "09 pm", value: 80, visits: 100},
      {label: "11 pm", value: 60, visits: 100}
    ]
  },
  messages: [
    {
      user: {
        id: 1,
        name: "Domnic Harris",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      message: "I think its a good idea, lets do it then.",
      date: getCustomDateTime(-5, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      user: {
        id: 2,
        name: "Joe Root",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      message: "Hey, lets have a cricket match this sunday, what you say?",
      date: getCustomDateTime(-15, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      user: {
        id: 3,
        name: "Dennis lilly",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      message: "George has invited you for the dinner, will you go?",
      date: getCustomDateTime(-45, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      user: {
        id: 4,
        name: "Sara Taylor",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      message:
        "Hi, I have shared some documents with you, please go through them.",
      date: getCustomDateTime(-55, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    }
  ],
  headerNotifications: [
    {
      id: 2,
      user: {
        id: 101,
        name: "Dinesh Suthar",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "POSTING",
      metaData: {
        post: {
          type: "album",
          title: "This is Beginning",
          owner: {
            id: 545,
            name: "Martin Guptil",
            profile_pic: "https://via.placeholder.com/150x150"
          }
        }
      },
      createdAt: getCustomDateTime(-27, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 3,
      user: {
        id: 102,
        name: "John Doe",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "SHARED_POST",
      metaData: {
        post: {
          title: "This is Beginning",
          owner: {
            id: 545,
            name: "Martin Guptil",
            profile_pic: "https://via.placeholder.com/150x150"
          }
        }
      },
      createdAt: getCustomDateTime(-50, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 1,
      user: {
        id: 100,
        name: "Atul Midha",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "INVITATION",
      metaData: {
        user: {
          id: 105,
          name: "North Taylor",
          profile_pic: "https://via.placeholder.com/150x150"
        },
        group: {id: 12, name: "Global Health"}
      },
      date: getCustomDateTime(-90, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    },
    {
      id: 4,
      user: {
        id: 105,
        name: "Sara John",
        profile_pic: "https://via.placeholder.com/150x150"
      },
      type: "BIRTHDAY",
      createdAt: getCustomDateTime(-150, "minutes", "MMMM DD, YYYY, h:mm:ss a")
    }
  ],
  siteVisitors: {
    title: "Site Visitors Statistics",
    description:
      "Lorem ipsum is dummy content Cenas in erat accumsan, hendrerit lorem vel,",
    countryList: [
      {
        name: "United State",
        flagCode: "us",
        visitors: "12,455",
        badgeColor: "#D72934",
        chartGradientColor: "#fef5f6",
        data: [
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
        ]
      },
      {
        name: "France",
        flagCode: "fr",
        visitors: "445",
        badgeColor: "#3F51B5",
        chartGradientColor: "#e8eaf5",
        data: [
          {month: "Jan", amount: 800},
          {month: "Feb", amount: 850},
          {month: "Mar", amount: 1350},
          {month: "Apr", amount: 700},
          {month: "May", amount: 1100},
          {month: "Jun", amount: 900},
          {month: "Jul", amount: 1600},
          {month: "Aug", amount: 900},
          {month: "Sep", amount: 1250},
          {month: "Oct", amount: 1000},
          {month: "Nov", amount: 1200},
          {month: "Dec", amount: 800}
        ]
      },
      {
        name: "Germany",
        flagCode: "gm",
        visitors: "36,855",
        badgeColor: "#FFA005",
        chartGradientColor: "#f8f4ed",
        data: [
          {month: "Jan", amount: 1100},
          {month: "Feb", amount: 850},
          {month: "Mar", amount: 1400},
          {month: "Apr", amount: 800},
          {month: "May", amount: 1100},
          {month: "Jun", amount: 900},
          {month: "Jul", amount: 1200},
          {month: "Aug", amount: 900},
          {month: "Sep", amount: 1300},
          {month: "Oct", amount: 1000},
          {month: "Nov", amount: 800},
          {month: "Dec", amount: 900}
        ]
      },
      {
        name: "Spain",
        flagCode: "es",
        visitors: "9,877",
        badgeColor: "#5D9405",
        chartGradientColor: "#f9fcec",
        data: [
          {month: "Jan", amount: 600},
          {month: "Feb", amount: 850},
          {month: "Mar", amount: 1200},
          {month: "Apr", amount: 700},
          {month: "May", amount: 1300},
          {month: "Jun", amount: 900},
          {month: "Jul", amount: 1200},
          {month: "Aug", amount: 900},
          {month: "Sep", amount: 1320},
          {month: "Oct", amount: 800},
          {month: "Nov", amount: 1000},
          {month: "Dec", amount: 750}
        ]
      }
    ]
  }
};
