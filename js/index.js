const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navItems = document.querySelectorAll('nav a');
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Products';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';
let navItemOne = document.querySelector('nav a');
navItemOne.style.color = 'dodgerblue';
const newPrependContent = document.createElement('a');
newPrependContent.textContent = 'list';
const nav = document.querySelector('nav');

nav.appendChild(newPrependContent);
const newAppendContent = document.createElement('a');
newAppendContent.textContent = 'Github';
nav.prepend(newAppendContent);

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const ctaHOne = document.querySelector('.cta-text h1');
ctaHOne.textContent = siteContent['cta']['h1'];
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let codeSnippet = document.getElementById('middle-img');
codeSnippet.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainContH = document.querySelectorAll('.main-content h4');

mainContH[0].textContent = siteContent['main-content']['features-h4'];

mainContH[1].textContent = siteContent['main-content']['about-h4'];

const featuresContent = document.querySelectorAll('.main-content p');

featuresContent[0].textContent =
  siteContent['main-content']['features-content'];

featuresContent[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelectorAll('.bottom-content h4');

const bottomContentP = document.querySelectorAll('.bottom-content p');

bottomContent[0].textContent = siteContent['main-content']['services-h4'];

bottomContent[1].textContent = siteContent['main-content']['product-h4'];

bottomContentP[0].textContent = siteContent['main-content']['services-content'];

bottomContentP[1].textContent = siteContent['main-content']['product-content'];

bottomContent[2].textContent = siteContent['main-content']['vision-h4'];

bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactParagraph = document.querySelectorAll('.contact p');

contactParagraph[0].textContent = siteContent['contact']['address'];
contactParagraph[1].textContent = siteContent['contact']['phone'];
contactParagraph[2].textContent = siteContent['contact']['email'];

const footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent['footer']['copyright'];
