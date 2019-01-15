const {resources, titleData: {title, subTitle}} = require('../model')

function getIndex (req, res, next) {
  res.render('index', {title, subTitle, resources})
}

module.exports = {getIndex}
