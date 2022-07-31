require('dotenv').config();

const {
  headerTitles,
  facilities,
  classes,
  instructors,
  mediaPartners,
  testimonies,
} = require('./jsonData');

exports.getHomepageView = (req, res) => {
  // all variable

  // render
  return res.render('pages/index', {
    facilites: facilities,
    classes: classes,
    instructors: instructors,
    mediaPartners: mediaPartners,
    testimonies: testimonies,
  });
};

exports.getInstructorView = (req, res) => {
  return res.render('pages/instructor', {
    headerTitle: headerTitles.instructor,
    instructors: instructors,
  });
};

exports.getAboutView = (req, res) => {
  return res.render('pages/about', {
    headerTitle: headerTitles.about,
    facilites: facilities,
    mediaPartners: mediaPartners,
    API_KEY: process.env.GOOGLE_API_KEY,
  });
};

exports.getMembershipView = (req, res) => {
  return res.render('pages/membership', {
    headerTitle: headerTitles.membership,
  });
};
