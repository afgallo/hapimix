module.exports = {
  options: {
    styleSrc: "'self' https://rsms.me",
    fontSrc: "'self' https://rsms.me",
    imgSrc: "'self' https://tailwindui.com https://images.unsplash.com",
    // TODO: This will probably make security expers scream out loud!
    // Grab the CSP build once it's released: https://alpinejs.dev/advanced/csp
    scriptSrc: "'self' 'unsafe-eval'"
  }
}
