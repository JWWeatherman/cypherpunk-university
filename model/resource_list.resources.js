class Link {
  /**
   * @param display {string}
   * @param url
   */
  constructor (display, url) {
    this.display = display
    this.url = url
  }
}

class Resource {
  /**
   * @param header
   * @param body {string}
   * @param button {Link}
   * @param links {[Link]}
   */
  constructor (header, body, button, links = []) {
    this.name = header
    this.body = body
    this.button = button
    this.links = links
  }
}

/**
 * @type {Resource[]}
 */
const exampleResources = [
    /**
     * 2 links
     */
    new Resource(
      'Some Cool Learning Resource', // Header
      'Create personalized notifications and emails, and have them delivered to each user at the ideal time of day.', // Body
      new Link('READ', '#'), // Button
      [new Link('Listen', '#'), new Link('Watch', '#')] // Links
    ),
    /**
     * 1 link
     */
    new Resource(
      'Some Cool Learning Resource', // Header
      'Millions of users? We\'ve got them all covered. We support most devices and all major SDKs.', // Body
      new Link('READ', '#'), // Button
      [new Link('Listen', '#')] // Links
    ),
    /**
     * no links
     * notice links property is omitted, the is because there is a default value set of an empty array.
     */
    new Resource(
      'Some Cool Learning Resource', // Header
      'Millions of users? We\'ve got them all covered. We support most devices and all major SDKs.', // Body
      new Link('READ', '#') // Button
    )
  ]

/**
 * @description This is the spot to place actual model.
 * When this array is populated it will be rendered automatically.
 * @type {Resource[]}
 */
const resources = [
  // ADD ACTUAL RESOURCES HERE
    new Resource(
      'This is a lovely resource!', // Header
      'Create personalized notifications and emails, and have them delivered to each user at the ideal time of day.', // Body
      new Link('READ', '#'), // Button
      [new Link('Listen', '#'), new Link('Watch', '#')] // Links
    ),
]

/**
 * @type {Resource[]}
 */
module.exports = resources.length ? resources : exampleResources
