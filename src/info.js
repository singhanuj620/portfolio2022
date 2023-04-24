import FreeCodeCamp from "./Images/Projects/freecodecamp.png"
import UrlShortner from "./Images/Projects/urlshortner.png"
import InstagramBot from "./Images/Projects/instagrambot.png"
import Inventory from "./Images/Projects/inventory.png"
import Typeform from "./Images/Projects/typeform.png"

export const info = {
    name: 'Anuj Singh',
    projects: [
        {
            title: 'Starbucks Stock Control & Optimization',
            description: 'Developed using cutting-edge technologies such as ReactJS, Redux, and Jest unit testing, this suite of three powerful front-end applications was meticulously crafted to meet the specific needs of Starbucks, a prominent player in the food and beverage industry. Designed to enable store owners to efficiently manage their inventory levels across multiple geographic locations, these applications leverage the power of modern frontend development to provide a seamless and intuitive user experience and dynamic inventory management based on customer demand and occasion, this suite represents a significant step forward in the field of inventory management. By leveraging the power of ReactJS and other frontend technologies, Starbucks can now provide its store owners with an unprecedented level of control and visibility over their inventory, ensuring that they can always meet the needs of their customers, no matter where they are located.',
            image: Inventory,
            github: '',
            demo: '',
        },
        {
            title: 'Typeform Survey Application ReactJS Clone',
            description: 'This a ReactJS and Redux project that emulates the popular survey platform Typeform. It offers an intuitive and responsive user interface to create and analyze custom surveys, collect data and share results. It can be easily integrated with other technologies to suit a wide range of applications. With its modern frontend technologies, the Typeform Survey Application ReactJS Clone is an indispensable tool for businesses, marketers and researchers seeking valuable insights and data.',
            image: Typeform,
            github: 'https://github.com/singhanuj620/typeform_clone',
            demo: 'https://master--incomparable-otter-5378ec.netlify.app/',
        },
        // {
        //     title: 'URL Shortner with nodeJs and mongoDb',
        //     description: 'Web Application made with nodejs and mongoDb that shorts the full url and tracks the number of times it is clicked. It was a side project which was made in a hackathon that afterwards was made to use in college fest for more effective management like to track the popularity and engagement of the event hosted by students among the public. This project was suffient enough to make use of CRUD operations in the mongoDb via expressJs.',
        //     image: UrlShortner,
        //     github: 'https://github.com/singhanuj620/urlShortner',
        //     demo: '',
        // },
        {
            title: 'Web Scrapping Project',
            description: 'This project utilizes Cheerio and ExpressJS to scrape the freecodecamp website and present the extracted data in a user-friendly table format. By leveraging the power of web scraping and advanced backend frameworks, users can quickly access and analyze a wide range of data related to user profiles, course descriptions, and project details. With its intuitive design and sorting/filtering features, this project offers valuable insights and information that can be used to make informed decisions and strategies.',
            image: FreeCodeCamp,
            github: 'https://github.com/singhanuj620/freecodecamp_scrap',
            demo: ''
        },
        {
            title: 'Instagram Bot',
            description: 'This bot was a fun project when the instagram algorithm was promoting the accounts that were highly engaging with other posts. With the help of this bot you can login into your instagram profile via chromium browser and for a provided hashtag this bot will go and like post on your behalf.',
            image: InstagramBot,
            github: 'https://github.com/singhanuj620/Instagram_Bot',
            demo: '',
        }
    ],
    blogs: [
        {
            title: 'JWT explained with project',
            url: 'https://dev.to/singhanuj620/jwt-explained-with-project-37en',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Bpn-Mt0W--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k7bl3s7umm65659of2iw.jpg'
        },
        {
            title: 'React Redux | Learn the redux easily with project',
            url: 'https://dev.to/singhanuj620/react-redux-learn-the-redux-easily-with-project-aji',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6o_TkDzJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ndnzyl98cm6oui9vm8jx.png'
        },
        {
            title: 'Mongoose Populate() in most simple way',
            url: 'https://dev.to/singhanuj620/mongoose-populate-in-most-simple-way-how-to-import-a-collection-into-another-schema-in-mongodb-4nnf',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--shTyd8F7--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dwcj63fdldqgmvtptoga.png'
        },
        {
            title: 'useReducer () | React Hook with project',
            url: 'https://dev.to/singhanuj620/usereducer-react-hook-with-project-1pg',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--fFxTBYJJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ymvtsr1kbu17lcl61bbm.png'
        }
    ],
    skillsIcon: [
        { name: 'Javascript', url: 'https://img.icons8.com/color/240/000000/javascript--v1.png' },
        { name: 'ReactJS', url: 'https://img.icons8.com/officel/80/000000/react.png' },
        { name: 'Redux', url: 'https://img.icons8.com/color/48/null/redux.png' },
        { name: 'NodeJS', url: 'https://img.icons8.com/color/144/000000/nodejs.png' },
        { name: 'Python', url: 'https://img.icons8.com/color/144/000000/python--v1.png' },
        { name: 'MongoDB', url: 'https://img.icons8.com/color/144/000000/mongodb.png' },
        { name: 'Git', url: 'https://img.icons8.com/color/144/000000/git.png' }
    ]
}