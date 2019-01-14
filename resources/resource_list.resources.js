class Link {
  /**
   * @param display {string}
   * @param link {string}
   */
  constructor ({display, link} = {display: 'READ', link: '#'}) {
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

function fakeResourcesGen () {
  return [
    new Resource('Some Cool Learning Resource', 'Create personalized notifications and emails, and have them delivered to each user at the ideal time of day.', new Link(), [new Link({display: 'Listen'}), new Link({display: 'Watch'})]),
    new Resource('Some Cool Learning Resource', 'Millions of users? We\'ve got them all covered. We support most devices and all major SDKs.', new Link(), [new Link({display: 'Listen'}), new Link({display: 'Watch'})]),
    new Resource('Some Cool Learning Resource', 'Monitor the conversion of your notifications and emails in real time.', new Link(), [new Link({display: 'Watch'})])
  ]
}

const resources = fakeResourcesGen()

module.exports = resources
