import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Home|Billy Morrison', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Billy Morrison',
  subtitle:
    'A UK based front end web developer, with a passion for learning and a love for all things tech.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'js.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://pdfhost.io/v/R60RN~kTz_Billy_Morrison_CVpdf.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.PNG',
    title: 'Crypto-Tracker - React Project',
    info:
      'This project uses the CoinGecko API to pull down the current price and price history of selected crypto currencies.',
    info2:
      ' It then saves the data in local storage so when the user returns, their selected currencies are displayed.',
    url: 'https://dreamy-bhaskara-28a950.netlify.app/',
    repo: 'https://github.com/Billy-2727/crypto-tracker',
  },
  {
    id: nanoid(),
    img: 'Project2.PNG',
    title: 'Loan Repayment Calculator',
    info:
      "In this project I use a calculation within JavaScript to diplay a user's monthly loan replayments, the total interest and the final amount to be paid",
    info2:
      'This project uses Materialize to get a basic form in place that would look good but also fits inline with googles standards of UI/UX',
    url: 'https://vigorous-bhabha-6e3b9f.netlify.app/',
    repo: 'https://github.com/Billy-2727/Loan-Calculator',
  },
  {
    id: nanoid(),
    img: 'Project3.PNG',
    title: 'Gatsby CMS Blog Page',
    info:
      'Gatsby is the main backbone of this project, is it used alongside Contentful CMS and GrapahQL',
    info2:
      'It works by using GraphQL which is part of Gatsby to pull down and query the Contentful API which inturn populates the blog section of the webpage, this allows a non technical person the ability to manage the blogs on the webpage without touching a line of code',
    url: 'https://reverent-goodall-6b9447.netlify.app/',
    repo: 'https://github.com/Billy-2727/CMS-Blog',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'billy.morrison27@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/billy-morrison-aa852a185/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Billy-2727',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
