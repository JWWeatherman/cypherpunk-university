const title = 'Cypherpunk University'
const subTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const {resources} = require('../resources')

function getIndex (req, res, next) {
  console.log(resources)
  res.render('index', {title, subTitle, resources})
}

module.exports = {getIndex}
