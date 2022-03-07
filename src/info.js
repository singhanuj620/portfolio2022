import FreeCodeCamp from "./Images/Projects/freecodecamp.png"
import UrlShortner from "./Images/Projects/urlshortner.png"
import InstagramBot from "./Images/Projects/instagrambot.png"
import Inventory from "./Images/Projects/Inventory.png"

export const info = {
    name: 'Anuj Singh',
    projects: [
        {
            title: 'Inventory management application with reactJs',
            description: 'This application was a industry based project which was built using reactJs along with redux. The objective of this application is to keep track of the food items that to be brought for a store for the respective upcoming dates such that stocks are effectively organized and managed. ',
            image: Inventory,
            github: '',
            demo: '',
        },
        {
            title: 'Web Scrapping Project',
            description: 'This project will scrap the freecodecamp website and display the data in a table with the help of Cherrio and ExpressJS',
            image: FreeCodeCamp,
            github: 'https://github.com/singhanuj620/freecodecamp_scrap',
            demo: 'https://scrapcodecamp.herokuapp.com/'
        },
        {
            title: 'URL Shortner with nodeJs and mongoDb',
            description: 'Web Application made with nodejs and mongoDb that shorts the full url and tracks the number of times it is clicked.',
            image: UrlShortner,
            github: 'https://github.com/singhanuj620/urlShortner',
            demo: '',
        },
        {
            title: 'Instagram Bot',
            description: 'Web Application made with nodejs and mongoDb that shorts the full url and tracks the number of times it is clicked.',
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
            title: 'UrlShortner using Nodejs and MongoDb | Node.js Project',
            url: 'https://dev.to/singhanuj620/urlshortner-using-nodejs-and-mongodb-25ec',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--mCeV2cmD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/w5idkgb2ua68vsk0nwup.png'
        }
    ],
    skillsIcon: [
        { name: 'Javascript', url: 'https://img.icons8.com/color/240/000000/javascript--v1.png' },
        { name: 'ReactJS', url: 'https://img.icons8.com/officel/80/000000/react.png' },
        { name: 'NodeJS', url: 'https://img.icons8.com/color/144/000000/nodejs.png' },
        { name: 'Python', url: 'https://img.icons8.com/color/144/000000/python--v1.png' },
        { name: 'MongoDB', url: 'https://img.icons8.com/color/144/000000/mongodb.png' },
        { name: 'Git', url: 'https://img.icons8.com/color/144/000000/git.png' },
        { name: 'AdobeXD', url: 'https://img.icons8.com/color/144/000000/adobe-xd--v1.png' }
    ]
}