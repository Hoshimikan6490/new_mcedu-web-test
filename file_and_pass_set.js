const { app } = require('./index.js');

const pas_specify = function () {
  app.get('/database/blockID_and_more', function (req, res) {
    res.render(`pages/database/blockID_and_more`);
  });

  app.get('/database/faq', function (req, res) {
    res.render(`pages/database/faq`);
  });

  app.get('/database/urls', function (req, res) {
    res.render(`pages/database/urls`);
  });

  app.get('/default/about_makecode/what_is_makecode', function (req, res) {
    res.render(`pages/default/about_makecode-what_is_makecode`);
  });

  app.get('/default/about_makecode/work_of_makecode', function (req, res) {
    res.render(`pages/default/about_makecode-work_of_makecode`);
  });

  app.get('/default/edu_only_contents', function (req, res) {
    res.render(`pages/default/edu_only_contents`);
  });

  app.get('/default/how_to_backup', function (req, res) {
    res.render(`pages/default/how_to_backup`);
  });

  app.get('/default/how_to_MultiPlay', function (req, res) {
    res.render(`pages/default/how_to_MultiPlay`);
  });

  app.get('/default/how_to_reinstall', function (req, res) {
    res.render(`pages/default/how_to_reinstall`);
  });

  app.get('/default/how_to_TakePicture', function (req, res) {
    res.render(`pages/default/how_to_TakePicture`);
  });

  app.get('/default/how_to_update', function (req, res) {
    res.render(`pages/default/how_to_update`);
  });

  app.get('/terms_and_PrivacyPolicy/PrivacyPolicy', function (req, res) {
    res.render(`pages/terms_and_PrivacyPolicy/PrivacyPolicy`);
  });

  app.get('/terms_and_PrivacyPolicy/terms', function (req, res) {
    res.render(`pages/terms_and_PrivacyPolicy/terms`);
  });

  app.get('/update_info/version_1-18-32', function (req, res) {
    res.render(`pages/update_info/version_1-18-32`);
  });

  app.get('/update_info/version_1-17-30-5', function (req, res) {
    res.render(`pages/update_info/version_1-17-30-5`);
  });

  app.get('/useful_info/how_to_edu_to_be', function (req, res) {
    res.render(`pages/useful_info/how_to_edu_to_be`);
  });

  app.get('how_to_make_geography', function (req, res) {
    res.render(`pages/useful_info/how_to_make_geography`);
  });

  app.get('/useful_info/how_to_make_ResourcePack', function (req, res) {
    res.render(`pages/useful_info/how_to_make_ResourcePack`);
  });

  app.get('/useful_info/how_to_use_CustomSkin', function (req, res) {
    res.render(`pages/useful_info/how_to_use_CustomSkin`);
  });

  app.get('/useful_info/how_to_use_ResourcePack', function (req, res) {
    res.render(`pages/useful_info/how_to_use_ResourcePack`);
  });

  app.get('/useful_info/useful_ShortcutKeys', function (req, res) {
    res.render(`pages/useful_info/useful_ShortcutKeys`);
  });

  app.get('/about_us', function (req, res) {
    res.render(`pages/about_us`);
  });

  app.get('/help', function (req, res) {
    res.render(`pages/help`);
  });

  app.get('/', function (req, res) {
    res.render(`pages/index`);
  });

  app.get('/using_and_recommend_ResourcePacks', function (req, res) {
    res.render(`pages/using_and_recommend_ResourcePacks`);
  });

  app.use((req, res, next) => {
    res.status(404).render(`pages/404`);
  });
};

module.exports.pas_specify = pas_specify;
