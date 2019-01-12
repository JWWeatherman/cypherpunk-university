const faker = require('faker')

class Link {
  /**
   * @param display {string}
   * @param link {string}
   */
  constructor (display, link) {
    this.display = display
    this.link = link
  }
}

class Resource {
  /**
   * @param name {string}
   * @param body {string}
   * @param button {Link}
   * @param links {[Link]}
   */
  constructor (name, body, button, links = []) {
    this.name = name
    this.body = body
    this.button = button
    this.links = links
  }
}

function randomNum (upTo) {
  return Math.floor(Math.random() * upTo - 1) + 1
}

function fakeResourceGen () {
  const name = faker.lorem.words(randomNum(3))
  const body = faker.lorem.paragraph()
  const button = new Link('Go to ' + name, faker.internet.url)
  const links = new Array(2)
  links.fill(new Link(faker.lorem.word(), faker.internet.url()), 0)
  return new Resource(name, body, button, links)
}

function fakeResourcesGen () {
  const resources = new Array(100)
  resources.fill(fakeResourceGen(), 1)
  return resources
}

const resources = fakeResourcesGen()

module.exports = resources
