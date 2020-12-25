const rookout = require('rookout');

rookout.start({
    token: '83aecbbfd1e4fcfc1b8e053d422aaef4f9840b23a405ecb1ffdaa9bb535b2afc',
    labels: {
      env: 'dev'
    }
})

const getTodosByFilter = require('../services/getTodosByFilter');

const homePage = async (req, res) => {
  const data = await getTodosByFilter(req.params.shown);
  res.render('index', data);
};

module.exports = {
  homePage,
};
