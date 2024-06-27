import Views from './Views.js';
import sendEmail from './sendEmail.js';

Views.activeHamburguer();

Views.sound();

Views.slideCertifications();

// Fixando primeiro slide
Views.slideDivs(1);

sendEmail();

Views.buttonSoud();