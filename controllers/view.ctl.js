const title = 'Cypherpunk University'
const subTitle = 'Powerful features for startups, enterprises, and everyone in between.'
const {resources} = require('../resources')

function getIndex (req, res, next) {
  res.render('index', {title, subTitle, resources})
}

module.exports = {getIndex}
