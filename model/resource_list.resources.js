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
    '10 minutes - Bitcoin Standard Prologue', // Header
    'Get an excellent introduction and overview of Bitcoin from Saifedean Ammous the author of indispensable book The Bitcoin Standard.', // Body
    new Link('LISTEN', 'https://bitcoinstandardintro.podbean.com/e/prologue-of-the-bitcoin-standard/'), // Button
    [
      new Link('Read', 'https://docs.google.com/document/d/1AOUazAHeG_49s53eJifosdY9cFVvA7ZZOhICwebAgws/edit?usp=sharing'),
    ] // Links
  ),
  new Resource(
    '3 hours - Bitcoin and Economics', // Header
    'This six part lecture series by will give you a solid understanding of economics you need to understand the problems bitcoin is designed to solve and why Bitcoin is the only viable and genuine attempt to create a better form of money.', // Body
    new Link('Watch', 'https://www.youtube.com/playlist?list=PLxxj-sCQ0oJJs9BmBJ5rY-n2JE9dOfGnt') // Button
  ),
  new Resource(
    '30 minutes - Bitcoin Under the Hood', // Header
    'A high-level overview of the bitcoin software and network that is appropriate for someone that is not a software developer.', // Body
    new Link('Watch', 'https://www.youtube.com/watch?v=Lx9zgZCMqXE&feature=youtu.be') // Bu#tton
  ),
  new Resource(
    '1 hour - Shelling Out: The Origins of Money', // Header
    'This excellent paper written by Nick Szabo is widely regarded as one of the best resources to understand money and the role bitcoin hopes to play globally', // Body
    new Link('Read', 'https://nakamotoinstitute.org/shelling-out/') // Bu#tton
  ),
  new Resource(
    '2 hours - Bitcoin Threat Model', // Header
    'Look at bitcoin through the eyes of an attacker to gain a greater understanding of the liklihood of Bitcoins success in becoming global electronic cash', // Body
    new Link('Read', 'https://github.com/JWWeatherman/bitcoin_security_threat_model') // Bu#tton
  ),
  new Resource(
    '2 hours - Human Threat Model', // Header
    'Gain a solid grasp of human slavery, its various forms including socialism, prohibition and legal tender slavery and how Bitcoin may bring about the end of it.', // Body
    new Link('Read', 'https://github.com/JWWeatherman/human_threat_model/blob/master/README.md') // Bu#tton
  )
  // ADD ACTUAL RESOURCES HERE
]

/**
 * @type {Resource[]}
 */
module.exports = resources
