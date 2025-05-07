
// List titles for all project PlainListCards
const techStack = "Tech Stack";
const links = "Project Links";
const coreFeatures = "Core Features";  

//Media Wrangler Project Lists
const MWStackItems = [
  {label: "Backend: ", text: "Java, Spring Boot, Hibernate, MySQL"},
  {label: "Frontend: ", text: "React, Material-UI (MUI), Formik"},
  {label: "External API: ", text: "TMDB"}    
];

const MWFeatures = [
  { text: "User authentication and account management"},
  { text: "Movie search with streaming info"},
  { text: "Create custom lists (e.g., Favorites, Watchlist)"},
  { text: "Write, like, and comment on reviews"},
  { text: "Review journal (edit & delete)"},
  { text: "Random movie generator"}, 
  { text: "Release calendar"}, 
  { text: "Community discussion board"}
];

const MWLinks = [
  { label: "GitHub — ", text: "Original Repo", href: "https://github.com/RBurkhardt87/media-wrangler" },
  { label: "GitHub — ", text: "Expansion Repo", href: "https://github.com/RBurkhardt87/media-wrangler-expand" },
  { label: "Project Demo Video — ", text: "Coming Soon"},
  { label: "Project Presentation — ", text: "Slideshow", href: "https://docs.google.com/presentation/d/1Q6HOewM0bPnU61V9ypXlkjknPRM4q6VMtil-CI6yPhs/present" }
];



//Begonia Baby Project Lists
const BBStackItems = [
  {label: "Backend: ", text: "Java, Spring Boot, Hibernate, MySQL"},
  {label: "Frontend: ", text: "React, Material-UI (MUI), Formik"},
];

const BBFeatures = [
  { text: "User registration and login (authentication in progress)"},
  { text: "Secure data storage in MySQL"},
  { text: "Breastfeeding session logging"},
  { text: "Diaper output tracking"},
  { text: "Sleep tracking with nap/nighttime option"},
  { text: "Forms designed for parent and clinical use"}
];

const BBLinks = [
  { label: "GitHub — ", text: "Original Repo", href: "https://github.com/RBurkhardt87/BFAppProject" },
  { label: "Project Demo Video — ", text: "Coming Soon"},
  { label: "Project Presentation — ", text: "Coming Soon"}
];


//Wishlist Application Project Lists
const WLStackItems = [
  { label: "Backend: ", text: "Java, Spring Boot, Hibernate (JPA), MySQL" },
  { label: "Frontend: ", text: "Thymeleaf (server-side rendering), Bootstrap, CSS" }
];

const WLFeatures = [
  { text: "Create, view, update, and delete wish list items" },
  { text: "Add item details such as name, description, price, and store info" },
  { text: "Server-rendered pages using Thymeleaf templates" },
  { text: "Form validation for required fields" },
  { text: "Persistent data storage using MySQL" },
  { text: "Minimalist design with Bootstrap and custom CSS" }
];

const WLLinks = [
  { label: "GitHub — ", text: "Original Repo", href: "https://github.com/RBurkhardt87/christmas-list" },
  { label: "Project Demo Video — ", text: "Coming Soon"},
  { label: "Project Presentation — ", text: "Coming Soon"}
];


// eslint-disable-next-line react-refresh/only-export-components
export {  techStack, coreFeatures, links, MWFeatures, MWLinks, MWStackItems, BBFeatures, BBLinks, BBStackItems, WLFeatures, WLLinks, WLStackItems };
