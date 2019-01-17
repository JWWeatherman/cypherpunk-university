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
      'Get started with our free plan - no credit card required', // Header
      'Create personalized notifications and emails, and have them delivered to each user at the ideal time of day.', // Body
      new Link('CONTACT US FOR DETAILS', '#'), // Button
      [new Link('Listen', '#'), new Link('Watch', '#')] // Links
    ),
    /**
     * 1 link
     */
    new Resource(
      'Pro and Premium options from just $99/mo', // Header
      'Millions of users? We\'ve got them all covered. We support most devices and all major SDKs.', // Body
      new Link('GET STARTED FOR FREE', '#'), // Button
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
 * @description This is the spot to place actual resources.
 * When this array is populated it will be rendered automatically.
 * @type {Resource[]}
 */
const resources = [
    new Resource(
      '3 hours - Bitcoin and Economics by JW Weatherman', // Header
      'This 6 part lecture series will give you a solid understanding of economics you need to understand the problems bitcoin is designed to solve and why only Bitcoin is the only viable and genuine attempt to create a better form of money.', // Body
      new Link('WATCH', '#'), // Button
    ),
  // ADD ACTUAL RESOURCES HERE
]

/**
 * @type {Resource[]}
 */
module.exports = resources.length ? resources : exampleResources
