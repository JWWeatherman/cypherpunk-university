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
 * @description This is the spot to place actual resources.
 * When this array is populated it will be rendered automatically.
 * @type {Resource[]}
 * @example-resource
 * new Resource(
 *   '15 minutes - Bitcoin Maximalst Manifesto', // Header
 *   'Get an introduction and overview of Bitcoin from the perspective of the cypherpunk movement that created it by JW Weatherman.', // Body
 *   new Link('LISTEN', 'https://www.stitcher.com/podcast/jw-weatherman-show/e/55158727'), // BuWATCHHtton
 *     [
 *       new Link('Read', 'https://github.com/JWWeatherman/bitcoinMaximalist/blob/master/README.md'),
 *       new Link('Watch', 'https://www.youtube.com/watch?v=361nU4Pl4ag')
 *     ] // Links
 *   )
 * )
 */
const resources = [
  new Resource(
    '15 minutes - Bitcoin Maximalst Manifesto', // Header
    'Get an introduction and overview of Bitcoin from the perspective of the cypherpunk movement that created it by JW Weatherman.', // Body
    new Link('LISTEN', 'https://www.stitcher.com/podcast/jw-weatherman-show/e/55158727'), // Button
    [
      new Link('Read', 'https://github.com/JWWeatherman/bitcoinMaximalist/blob/master/README.md'),
      new Link('Watch', 'https://www.youtube.com/watch?v=361nU4Pl4ag')
    ] // Links
  ),
  new Resource(
    '3 hours - Bitcoin and Economics', // Header
    'This six part lecture series by JW Weatherman will give you a solid understanding of economics you need to understand the problems bitcoin is designed to solve and why Bitcoin is the only viable and genuine attempt to create a better form of money.', // Body
    new Link('Watch', '#') // Button
  ),
  new Resource(
    '2 hours - Bitcoin Threat Model', // Header
    'The Bitcoin threat model is a systematic analysis By taking the perspective of an attacker Bitcoin you can gain a greater understanding of the design decisions and liklihood of Bitcoins success in becoming global electronic cash', // Body
    new Link('Watch', '#') // Button
  ),
  new Resource(
    '2 hours - Bitcoin Threat Model', // Header
    'The Bitcoin threat model is a systematic analysis By taking the perspective of an attacker Bitcoin you can gain a greater understanding of the design decisions and liklihood of Bitcoins success in becoming global electronic cash', // Body
    new Link('Watch', '#') // Button
  )
  // ADD ACTUAL RESOURCES HERE
]

/**
 * @type {Resource[]}
 */
module.exports = resources
