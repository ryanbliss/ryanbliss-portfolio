/* eslint-disable global-require */
import PortfolioItem from '@/models/portfolio/portfolio-item';
import getCorzoHtml from '@/assets/portfolio/corzo/corzo-html';
import getPollenWiseHtml from '@/assets/portfolio/pollen-wise/pollen-wise-html';
import getUserbuddyHtml from '@/assets/portfolio/userbuddy/userbuddy-html';
import getSoarHtml from '@/assets/portfolio/soar/soar-html';
import getWordwarsHtml from '@/assets/portfolio/wordwars/wordwars-html';
import getSkipioHtml from '@/assets/portfolio/skipio/skipio-html';
import getKnowMeHtml from '@/assets/portfolio/knowme/knowme-html';
import getTaxzillaHtml from '@/assets/portfolio/taxzilla/taxzilla-html';
import getCabanaHtml from '@/assets/portfolio/cabana/cabana-html';
import getFlipbookHtml from '@/assets/portfolio/flipbook/flipbook-html';
import getHashtaggyHtml from '@/assets/portfolio/hashtaggy/hashtaggy-html';
import getCovidHtml from '@/assets/portfolio/covid/covid-html';

export const corzo = new PortfolioItem({
  id: 'corzo',
  name: 'Corzo',
  description: 'As a co-founder of Corzo, I helped build a note-taking tool for account executives that use Salesforce. Integrating with tools its users use each day, Corzo simplifies + consolidates workflows of enterprise account executives.',
  imagePath: require('@/assets/portfolio/corzo/feature-image.png'),
  html: getCorzoHtml(),
  tagNames: [
    'Javascript',
    'Node.js',
    'Vue.js',
    'Sketch',
    'Mixpanel',
    'Hotjar',
    'LucidChart',
  ],
  website: 'https://www.corzo.io',
  galleryImagePaths: [
    require('@/assets/portfolio/corzo/gallery/corzo-1.jpg'),
    require('@/assets/portfolio/corzo/gallery/corzo-2.jpg'),
    require('@/assets/portfolio/corzo/gallery/corzo-3.jpg'),
    require('@/assets/portfolio/corzo/gallery/corzo-4.jpg'),
  ],
  buttonText: 'Read Case Study',
});
export const pollenWise = new PortfolioItem({
  id: 'pollenwise',
  name: 'Pollen Wise',
  description: 'As a consultant, I rebuilt the Pollen Wise app — a way for allergy suffers to view local pollen counts, track symptoms, and learn about possible treatments. My redesign & rebuild helped them reach tens of thousands of new users through organic growth.',
  imagePath: require('@/assets/portfolio/pollen-wise/feature-image.png'),
  html: getPollenWiseHtml(),
  tagNames: [
    'Flutter + Dart',
    'Figma',
    'Custom',
    'LucidChart',
    'Firebase',
  ],
  website: 'https://apps.apple.com/us/app/pollen-wise/id1474856970',
  galleryImagePaths: [
    require('@/assets/portfolio/pollen-wise/gallery/pw-1.jpg'),
    require('@/assets/portfolio/pollen-wise/gallery/pw-2.jpg'),
    require('@/assets/portfolio/pollen-wise/gallery/pw-3.jpg'),
  ],
  buttonText: 'Read Case Study',
});
export const userbuddy = new PortfolioItem({
  id: 'userbuddy',
  name: 'Userbuddy',
  description: "As a fun side project, we are building an SDK for data-driven app developers. The idea is to standardize the feedback loop I've used on my top-rated apps: collect user sentiment/feedback, target cohorts with usability surveys & study invitations, and ask happy users to leave an app review.",
  imagePath: require('@/assets/portfolio/userbuddy/feature-image.jpg'),
  html: getUserbuddyHtml(),
  tagNames: [
    'Swift',
    'Vue.js',
    'Javascript',
    'Figma',
    'LucidChart',
  ],
  website: null,
  galleryImagePaths: [
    require('@/assets/portfolio/userbuddy/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
export const soar = new PortfolioItem({
  id: 'soar',
  name: 'Soar',
  description: 'From the founder of Ancestry.com, Soar is a platform for coaches and trainers various business needs (i.e. invoices, marketplace, etc.). As their UX consultant, I worked closely with their users to identify pain points, prototype ideas, and ship solutions.',
  imagePath: require('@/assets/portfolio/soar/feature-image.jpg'),
  html: getSoarHtml(),
  tagNames: [
    'Sketch',
    'Hotjar',
    'LucidChart',
    'Javascript',
  ],
  website: 'https://www.soar.com',
  galleryImagePaths: [
    require('@/assets/portfolio/soar/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
export const wordwars = new PortfolioItem({
  id: 'wordwars',
  name: 'Wordwars.io',
  description: 'What happens when you combine Scrabble with battle royale? Parachute down to any spot on the board and play words as fast as you can. Join words with opposing tiles to steal them; if you have no tiles left in play, you lose!',
  imagePath: require('@/assets/portfolio/wordwars/feature-image.jpg'),
  html: getWordwarsHtml(),
  tagNames: [
    'Unity + C#',
    'Sketch',
    'LucidChart',
    'Firebase',
  ],
  website: 'https://apps.apple.com/us/app/wordwars-io/id1448429683',
  galleryImagePaths: [
    require('@/assets/portfolio/wordwars/gallery/wordwars-1.jpg'),
    require('@/assets/portfolio/wordwars/gallery/wordwars-2.jpg'),
    require('@/assets/portfolio/wordwars/gallery/wordwars-3.jpg'),
    require('@/assets/portfolio/wordwars/gallery/wordwars-4.jpg'),
    require('@/assets/portfolio/wordwars/gallery/wordwars-5.jpg'),
  ],
  buttonText: 'Learn More',
});
export const skipio = new PortfolioItem({
  id: 'skipio',
  name: 'Skipio',
  description: "As Skipio's UX Design Manager, I oversaw their UX and analytics strategy for their web and mobile SMS-marketing automation platform. There, I met regularly with customers to understand their needs and iterate on wireframes.",
  imagePath: require('@/assets/portfolio/skipio/feature-image.jpg'),
  html: getSkipioHtml(),
  tagNames: [
    'Sketch',
    'Pendo',
    'Swift',
    'LucidChart',
  ],
  website: 'https://www.skipio.com',
  galleryImagePaths: [
    require('@/assets/portfolio/skipio/gallery/skipio-1.jpg'),
    require('@/assets/portfolio/skipio/gallery/skipio-2.jpg'),
    require('@/assets/portfolio/skipio/gallery/skipio-3.jpg'),
  ],
  buttonText: 'Learn More',
});
export const cabana = new PortfolioItem({
  id: 'cabana',
  name: 'Cabana',
  description: 'More of an experiment than an app, Cabana was an idea that we decided to market validate before development. Cabana converted a Pocket digital reading list into a physical magazine.',
  imagePath: require('@/assets/portfolio/cabana/feature-image.jpg'),
  html: getCabanaHtml(),
  tagNames: [
    'Sketch',
    'Hotjar',
    'LucidChart',
  ],
  website: 'https://cabana.webflow.io/',
  galleryImagePaths: [
    require('@/assets/portfolio/cabana/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
export const knowMe = new PortfolioItem({
  id: 'knowme',
  name: 'KnowMe',
  description: 'KnowMe aims to consolidate vast digital footprints into a private social network, allowing Spotify playlists to exist in the same journal entry as your Instagram Photos.',
  imagePath: require('@/assets/portfolio/knowme/feature-image.jpg'),
  html: getKnowMeHtml(),
  tagNames: [
    'Figma',
    'Swift',
    'LucidChart',
  ],
  website: 'https://www.knowme.life',
  galleryImagePaths: [
    require('@/assets/portfolio/knowme/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
export const taxzilla = new PortfolioItem({
  id: 'taxzilla',
  name: 'Taxzilla',
  description: 'The Taxzilla mobile was a companion to their web app — a web portal connecting independent contractors to accountants — allowing users to take photos of receipts to instantly log expenses, talk to their accountant, and more.',
  imagePath: require('@/assets/portfolio/taxzilla/feature-image.jpg'),
  html: getTaxzillaHtml(),
  tagNames: [
    'Sketch',
  ],
  website: null,
  galleryImagePaths: [
    require('@/assets/portfolio/taxzilla/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
export const flipbook = new PortfolioItem({
  id: 'flipbook',
  name: 'Flipbook',
  description: 'As a fun side project over a Christmas vacation, I built Flipbook — a way to turn a photo collection into a GIF-style image. It aimed to combine the simple UX of Snapchat Stories with a childhood favorite — a flip book.',
  imagePath: require('@/assets/portfolio/flipbook/feature-image.jpg'),
  html: getFlipbookHtml(),
  tagNames: [
    'Flutter + Dart',
    'Sketch',
    'Firebase',
  ],
  website: 'https://apps.apple.com/us/app/flipbook-photo-story-books/id1493150137',
  galleryImagePaths: [
    require('@/assets/portfolio/flipbook/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
export const hashtaggy = new PortfolioItem({
  id: 'hashtaggy',
  name: 'Hashtaggy',
  description: 'During college, despite having no credible experience, I co-founded Hashtaggy — a social media app aimed at helping people organize + find casual hangouts on campus. The app reached over 1,000 users at our school and raised over $40,000.',
  imagePath: require('@/assets/portfolio/hashtaggy/feature-image.jpg'),
  html: getHashtaggyHtml(),
  tagNames: [
    'Swift',
    'Sketch',
    'Firebase',
  ],
  website: 'https://www.facebook.com/hashtaggy/',
  galleryImagePaths: [
    require('@/assets/portfolio/hashtaggy/gallery/hashtaggy-1.jpg'),
    require('@/assets/portfolio/hashtaggy/gallery/hashtaggy-2.jpg'),
    require('@/assets/portfolio/hashtaggy/gallery/hashtaggy-3.jpg'),
    require('@/assets/portfolio/hashtaggy/gallery/hashtaggy-4.jpg'),
    require('@/assets/portfolio/hashtaggy/gallery/hashtaggy-5.jpg'),
  ],
  buttonText: 'Learn More',
});
export const covidQuiz = new PortfolioItem({
  id: 'covid',
  name: 'COVID-19 Quiz',
  description: 'As a project for Pollen Wise, I created a COVID-19 symptom quiz to help allergy suffers understand the differences between their allergy symptoms and possible COVID-19 symptoms, reaching thousands of people in 2020.',
  imagePath: require('@/assets/portfolio/covid/feature-image.jpg'),
  html: getCovidHtml(),
  tagNames: [
    'Vue.js',
    'Mixpanel',
    'Figma',
    'Javascript',
  ],
  website: 'https://quiz.pollenwise.com/quiz/46dea0f4-4998-4051-af9b-27c963c7b57b',
  galleryImagePaths: [
    require('@/assets/portfolio/covid/feature-image.jpg'),
  ],
  buttonText: 'Learn More',
});
