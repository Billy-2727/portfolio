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
  resume: 'https://pdfhost.io/v/R60RN~kTz_Billy_Morrison_CVpdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.PNG',
    title: 'Crypto-Tracker - React Project',
    info:
      'This project uses the CoinGecko API to pull down the current price & price history of selected crypto currencies.',
    info2:
      ' It then saves the data in local storage so when the user returns thier selected currencies are displayed.',
    url: 'https://dreamy-bhaskara-28a950.netlify.app/',
    repo: 'https://github.com/Billy-2727/crypto-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.PNG',
    title: 'Loan Repayment Calculator',
    info:
      'In this project I use a calculation within JavaScript to diplay a users monthly loan replayments, the total interest and the final amount to be paid',
    info2: 'This project uses materializecss to get a basic form inplace',
    url: 'https://vigorous-bhabha-6e3b9f.netlify.app/',
    repo: 'https://github.com/Billy-2727/Loan-Calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
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
