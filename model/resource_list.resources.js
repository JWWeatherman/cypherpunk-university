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
    '10 Minutes. The Bitcoin Standard Prologue.', // Header
    'Get a sneak peak of the best book ever published on what Bitcoin is, what it’s going to do in the world, and why it matters to you. This is the prologue to the economist Saifedean Ammous’ The Bitcoin Standard.', // Body
    new Link('LISTEN', 'https://bitcoinstandardintro.podbean.com/e/prologue-of-the-bitcoin-standard/'), // Button
    [
      new Link('Read', 'https://docs.google.com/document/d/1AOUazAHeG_49s53eJifosdY9cFVvA7ZZOhICwebAgws/edit?usp=sharing'),
    ] // Links
  ),
  new Resource(
    '3 Hours. Bitcoin and Economics.', // Header
    'A six-part lecture series by JW Weatherman on the economics of wealth creation, investment, speculation, and Bitcoin Maximalism.', // Body
    new Link('Watch', 'https://www.youtube.com/playlist?list=PLxxj-sCQ0oJJs9BmBJ5rY-n2JE9dOfGnt') // Button
  ),
  new Resource(
    '30 Minutes. Bitcoin Under the Hood.', // Header
    'A high-level overview of the Bitcoin software and its network that is appropriate for someone who is not a software developer.', // Body
    new Link('Watch', 'https://www.youtube.com/watch?v=Lx9zgZCMqXE&feature=youtu.be') // Bu#tton
  ),
  new Resource(
    '1 Hour. Shelling Out: The Origins of Money.', // Header
    'An excellent paper by Nick Szabo that is widely regarded as one of the best resources to understand money and the role Bitcoin is going to play globally.', // Body
    new Link('Listen', 'https://thecryptoconomy.com/2018/11/12/shelling-out-the-origins-of-money/'), // Bu#tton
    [
      new Link('Read', 'https://nakamotoinstitute.org/shelling-out/'),
    ] // Links
  ),
  new Resource(
    '1 Hour. Money, Blockchains, and Social Scalability.', // Header
    'Discover why the hidden secret to Bitcoin’s success is its prolific resource consumption and poor computational scalability and how those two features are buying something even more valuable: social scalability. This is something few understand.', // Body
    new Link('Listen', 'https://anchor.fm/thecryptoconomy/episodes/CryptoQuikRead_066---Money--Blockchains--and-Social-Scalability-e2ndsj'), // Bu#tton
    [
      new Link('Read', 'http://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html'),
    ] // Links
  ),
  new Resource(
    '1 Hour. Bitcoin Threat Model.', // Header
    'Look at Bitcoin through the eyes of an attacker to gain a greater understanding of the likelihood of Bitcoin’s success in becoming global, electronic cash.', // Body
    new Link('Listen', 'https://anchor.fm/thecryptoconomy/episodes/The-Bitcoin-Threat-Model-e35f5r'), // Bu#tton
    [
      new Link('Read', 'https://github.com/JWWeatherman/bitcoin_security_threat_model'),
    ] // Links
  ),
  new Resource(
    '1 Hour. Human Threat Model.', // Header
    'The Human Threat Model will give you a solid grasp of the current forms of human slavery that are still in existence. It reveals how socialism, prohibition, and legal tender slavery are actually subtle and devious forms of slavery. It also covers why Bitcoin is humankind’s best shot to bring about the end of slavery in ALL of its forms (once and for all).', // Body
    new Link('Listen', 'https://anchor.fm/thecryptoconomy/episodes/The-Human-Threat-Model-e35f6q'), // Bu#tton
    [
      new Link('Read', 'https://github.com/JWWeatherman/human_threat_model/blob/master/README.md'),
    ] // Links
  ),
  new Resource(
    '15 Minutes. Lightning Network Overview.', // Header
    'Learn how Bitcoin can scale to over a million transactions per second using cleverly delayed transactions.', // Body
    new Link('Watch', 'https://www.youtube.com/watch?v=3PcR4HWJnkY&feature=youtu.be') // Bu#tton
  ),
  new Resource(
    '1 Hour. Simplicity Smart Contracts.', // Header
    'Learn how Bitcoin will securely support complex smart contracts where other blockchains have failed.', // Body
    new Link('Watch', 'https://www.youtube.com/watch?v=VOeUq3oR2fk&t=436s') // Bu#tton
  ),
  new Resource(
    '30 Minutes. Liquid Sidechain.', // Header
    'Learn how sidechains allow Bitcoin to enable new features quickly and safely.', // Body
    new Link('Watch', 'https://www.youtube.com/watch?v=GwnFfp5xIag&list=PLseHpvCI1BjA6Ymrks1vxPj-JCwQRoM0T') // Bu#tton
  )
  // ADD ACTUAL RESOURCES HERE
]

/**
 * @type {Resource[]}
 */
module.exports = resources
