// import base64 from 'react-native-base64';

export const base_url = 'https://www.worldphotographersclub.com'
export const video_url = 'https://youtu.be/FUiu-cdu6mA';
export const video_url1 = 'https://www.pexels.com/video/a-man-feeding-the-elephants-3569572/';
export const blog_base_url = 'https://www.worldphotographersclub.com/mblog/api'
export const cookieName = 'WPC_USER_SESSION'
export const domain = 'https://www.worldphotographersclub.com/'

// const header = new Headers()
// header.append("Accept", "application/json");

export const headers = {
    "Accept": "application/json"
}
export const WHITE_COLOR1 = "#EDF0F0";
export const CREAM = "#FFEFEF";
export const PEACH = "#F34C4C";
export const LINEAR_WHITE = "#080E1D00";
export const LINEAR_BLUE = "#121E3B";
export const NAVY_BLUE = "#222831";
export const HEADER_COLOR = "#353B46";
export const UPGRADE_GOLD = "#CFB53B";
export const UPGRADE_GOLD1 = "#EB7700";
export const UPGRADE_BLACK = "#1C1B1B";
export const UPGRADE_BLACK1 = "#3A3A3A";
export const PINK = "#FD5F4B";
export const UPGRADE_RED = "#B20000";
export const UPGRADE_RED1 = "#590000";
export const TEXT_BLUE = "#2F7ED8";
export const ICON_COLOR = "#808080";
export const TEXT_COLOR = "#8EC3FF";
export const TEXT_COLOR1 = "#F6306C";
export const BADGE_COLOR = "#11294A";
export const GRAY_TEXT = "#A8A8A8";
export const PLACEHOLDER_COLOR = "#AEAEAE";
export const CARD_COLOR = "#EBEBEB";
export const BORDER_COLOR = "#E3E3E3";
export const CYAN = "#00ADB5";
export const PLUS_COLOR = '#313131';
export const THEME_COLOR = '#307FD9';
export const SEARCH_COLOR = '#636363';
export const LINE_COLOR = '#11224D';
export const LINE_COLOR1 = '#5B6684';
export const LINE_COLOR2 = '#C5C5C5';
export const LINE_COLOR3 = '#E6E6E6';
export const BOTTOM_COLOR = '#707070';
export const TROPHY_COLOR = '#19223D';
export const TROPHY_TEXT_COLOR = '#E8CB3B';
export const INTEREST_COLOR = '#111829';
export const HEADER_SECTION_COLOR = '#252C39';
export const THEME_COLOR_BACKGROUND = '#080E1D';
export const INPUT_TEXT = '#6D6D6D';
export const CLOSED_COMP = '#D93052';
export const UPGRADE_COLOR = '#253150';
export const THEME_COLOR_BACKGROUND_OPACITY = 'rgba(8, 14, 29, 0.9)';
export const WHITE = "#FFFFFF";
export const GRAY1 = "#8B8B8B";
export const PREMIUM_RED = "#EC1F1F";
export const APPLY_NOW = "#30D9A5";
export const COMP_COLOR = "#30B6D9";
export const BACKGROUND = "#F9F9F9";
export const OFF_WHITE = "#F5F5F7";
export const LIGHT_GRAY = "#ECECF2";
export const LIGHT_GRAY1 = "#515151";
export const GRAY = "#999";
export const OTHER_GRAY = '#5D5D5D';
export const BLACK = "#000000";
export const STAR_ACTIVE = '#FBB03B';
export const STAR_INACTIVE = '#7A7A7A';
export const DARK_COLOR = 'rgb(67, 66, 66)';
export const SUCCESS = '#32CF56';
export const WARNING = "#F5B93D";
export const ERROR = "#E63749";
// export const basicAuth = base64.encode(`${base_url}:${ID_CODE}`)
export const basicAuth = 'base64.encode(`${base_url}:${ID_CODE}`)'
export const ID_CODE = "e2b1b93e3082485a308992c8c30e06c1";
export const defaultImage = 'https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png'


export const apiUrl = {
    generalUrl: `${base_url}/api`,
    competitionUrl: `${base_url}/mcomp/api`,
    selectPhotoUrl: `${base_url}/mcomp/api`,
    header: headers
}

export const images = [
    {
        id: '1',
        name: 'John Doe',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1598813313965-fce39cd947d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman"

    },
    {
        id: '2',
        name: 'Sam Song',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman"

    },
    {
        id: '3',
        name: 'Ellen Tin',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1598282780498-8eda08ec1941?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman"
    },
    {
        id: '4',
        name: 'Pham Doe',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman"
    },
    {
        id: '5',
        name: 'Gabriel Mane',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman"
    },
    {
        id: '6',
        name: 'Girk Lok',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman",
    },
    {
        id: '7',
        name: 'Duck Slam',
        profile: 'Professional Photographer',
        uri: 'https://images.unsplash.com/photo-1586732711591-12c04655338f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        course: "Travel & Landscape Photography",
        price: 'Rs. 439',
        tutor: "with Nobert Von Niman"
    }
];

export const instructor = {
    id: '1',
    name: 'John Doe',
    profile: 'Professional Photographer',
    uri: 'https://images.unsplash.com/photo-1572515468941-b0409e3254da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2Zlc3Npb25hbCUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    course: "Travel & Landscape Photography",
    price: 'Rs. 439',
    tutor: "with Nobert Von Niman"

};

export const courses = [
    {
        id: "1",
        topic: "Introduction",
        content: 'Get to know Thai Hoang, our Master photographer'
    },
    {
        id: "2",
        topic: "Camera Preparation",
        content: 'Learn how to use the default camera apps on both Android and iOS'
    },
    {
        id: "3",
        topic: "3Rd Party Camera Apps",
        content: 'Check out these amazing apps on Android & IOS that you can use to take your photography and the process to the next level.'
    },
    {
        id: "4",
        topic: "Composition",
        content: 'Learn the amazing composition techniques to lift your framing to the next level'
    },

    {
        id: "5",
        topic: "Low Light Photography",
        content: 'Learn what you can do with low light using your mobile phone.'
    },
    {
        id: "6",
        topic: "Photo Editing",
        content: 'Learn the tips and tricks to edit your photos on your mobile phone'
    },
    {
        id: "7",
        topic: "Social Media",
        content: 'Learn how to effectively manage your Instagram account'
    },
]

export const coursesInfo = [
    {
        id: "1",
        topic: "Who should attend this course?",
        content: 'Everyone with a mobile phone \nEveryone with a passion for photography',
    },
    {
        id: "2",
        topic: "What are the requirements?",
        content: 'Passion for photography \nA mobile phone with a camera (iOS or Android)',
    },
    {
        id: "3",
        topic: "What all would you learn?",
        content: 'Learn how to compose \nLearn how to edit photos on mobile \nLearn which apps to use for editing or taking photos',
    },
    {
        id: "4",
        topic: "What would you get?",
        content: 'e-Certificate of Completion from WorldPhotographersClub.com',
    },
]

export const ClosedComp = [
    {
        id: "1",
        name: "Abstract",
        result: 'Checkout The Results',
    },
    {
        id: "2",
        name: "Advertisement",
        result: 'Checkout The Results',
    },
    {
        id: "3",
        name: "Mobile Photography",
        result: 'Checkout The Results',
    },
    {
        id: "4",
        name: "Street Photography",
        result: 'Checkout The Results',
    },
    {
        id: "5",
        name: "Travel Photographer Of The Year 2021",
        result: 'Checkout The Results',
    },
    {
        id: "6",
        name: "Colour Purple",
        result: 'Checkout The Results',
    },
    {
        id: "7",
        name: "Architecture",
        result: 'Checkout The Results',
    },
    {
        id: "8",
        name: "Fashion And Styles",
        result: 'Checkout The Results',
    },
    {
        id: "9",
        name: "Nature",
        result: 'Checkout The Results',
    },
    {
        id: "10",
        name: "Camera Tricks",
        result: 'Checkout The Results',
    },
    {
        id: "11",
        name: "Family And Kids",
        result: 'Checkout The Results',
    },
    {
        id: "12",
        name: "Motion Blur",
        result: 'Checkout The Results',
    },
    {
        id: "13",
        name: "Photo Of The Year 2020",
        result: 'Checkout The Results',
    },
    {
        id: "14",
        name: "Awesome Cover Photos",
        result: 'Checkout The Results',
    },
]

export const Options = [
    {
        id: "1",
        name: "Photo"
    },
    {
        id: "2",
        name: "Portfolio"
    },
    {
        id: "3",
        name: "Videos"
    },
    {
        id: "4",
        name: "Blog"
    },
    {
        id: "5",
        name: "Groups"
    },
    {
        id: "6",
        name: "Event"
    },
]

export const fontsLoaded = {
    light: require('../../assets/fonts/Montserrat-Light.otf'),
    regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
    medium: require('../../assets/fonts/Montserrat-Medium.ttf'),
    semiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    extraBold: require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
    italic: require('../../assets/fonts/Montserrat-Italic.ttf'),
    bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
    avenirMedium: require('../../assets/fonts/AvenirMedium.ttf'),
};

export const fonts = {
    // normal: 'Montserrat',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
    extraBold: 'Montserrat-ExtraBold',
    italic: 'Montserrat-Italic',
    bold: 'Montserrat-Bold',
    avenirMedium: 'AvenirMedium',
};

export const fontSize = {
    ten: '10@msr',
    eleven: '11@msr',
    twelve: '12@msr',
    fourteen: '14@msr',
    fifteen: '15@msr',
    sixteen: '16@msr',
    twenty: '20@msr',
    twentytwo: '22@msr',
    thirty: '30@msr',
    thirtyfive: '35@msr',
    eigthteen: '18@msr',
    nineteen: '19@msr',
    twentysix: '26@msr',
}

export const impDates = [
    {
        id: '1',
        text: "Start Date",
        date: '28, August 2021',
    },
    {
        id: '2',
        text: "Submission Close",
        date: '30, October 2021',
    },
    {
        id: '3',
        text: "Judging Start",
        date: '1, November 2021',
    },
    {
        id: '4',
        text: "Contest Results",
        date: '10, November 2021',
    },
];

export const imageList = [
    {
        id: '1',
        image: { uri: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
        name: 'Wedding'
    },
    {
        id: '2',
        image: { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
        name: 'Photography'
    },
    {
        id: '3',
        image: { uri: 'https://images.unsplash.com/photo-1630335436164-839072e2336f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        name: 'Sport'
    },
    {
        id: '4',
        image: { uri: 'https://images.unsplash.com/photo-1598974356907-2be514a02a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' },
        name: 'Widlife'
    },
    {
        id: '5',
        image: { uri: 'https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
        name: 'Travel'
    },
    {
        id: '6',
        image: { uri: 'https://media.istockphoto.com/photos/woman-taking-photo-of-breakfast-served-in-cafe-picture-id1040928664?b=1&k=20&m=1040928664&s=170667a&w=0&h=ckklslgTI5W0Y2Hmmv1F1UX9548W0YH8XZ92Hrib3Xg=' },
        name: 'Food'
    },
];

export const Masters = [
    {
        id: '1',
        name: 'Bobbi Petersen',
        image: { uri: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
        course: 'family & wedding photographer',
        country: 'USA'
    },
    {
        id: '2',
        name: 'Tarun Khiwal',
        image: { uri: 'https://media.istockphoto.com/photos/middle-aged-man-with-pleasant-face-expression-picture-id1005817658?b=1&k=20&m=1005817658&s=170667a&w=0&h=tpil3FJm2k6CHWiVczRjC-dBR8kP1ZckPMVETYX-89g=' },
        course: 'fashion photographer',
        country: 'India'
    },
    {
        id: '3',
        name: 'Shikha Khanna',
        image: { uri: 'https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-indian-woman-picture-id917499044?b=1&k=20&m=917499044&s=170667a&w=0&h=vqbUT1AThFnHHtmWiuxcAR-eskWlzerD1yMRdmkmcQk=' },
        course: 'fashion photographer',
        country: 'India'
    },
];

export const Discover = [
    {
        id: '1',
        name: "Abstract",
    },
    {
        id: '2',
        name: "Action",
    },
    {
        id: '3',
        name: "Animals",
    },
    {
        id: '4',
        name: "Architecture",
    },
    {
        id: '5',
        name: "Black & White",
    },
    {
        id: '6',
        name: "Colors",
    },
    {
        id: '7',
        name: "City",
    },
    {
        id: '8',
        name: "Fashion",
    },
    {
        id: '9',
        name: "Fine Nudes",
    },
    {
        id: '10',
        name: "Food",
    },
    {
        id: '11',
        name: "Landscapes",
    },
    {
        id: '12',
        name: "Macro",
    },
    {
        id: '13',
        name: "Manipulations",
    },
    {
        id: '14',
        name: "Nature",
    },
    {
        id: '15',
        name: "Night",
    },
];