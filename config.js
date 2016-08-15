// ---------------------------------------
// Configuration
// ---------------------------------------

const SOURCE = './src/'
const DESTINATION = './build/'
const INSTAGRAM = {
  client: '34cd2bb12b194d43984f8d230097d64e',
  api: 'https://api.instagram.com/v1/',
  auth: () => `${this.api}oauth/authorize/?client_id=${this.client}&response_type=token`
}

module.exports = {
  instagram: INSTAGRAM,
  server: {
    port: process.env.PORT || 4000,
    ip: process.env.IP || '0.0.0.0'
  },
  paths: {
    source: SOURCE,
    destination: DESTINATION,
    scripts: {
      source: `${SOURCE}app.js`,
      watch: `${SOURCE}**/*.{js,jsx}`,
      destination: `${DESTINATION}scripts/`
    },
    styles: {
      source: `${SOURCE}**/*-styles.js`,
      watch: `${SOURCE}**/*-styles.js`,
      destination: `${DESTINATION}styles/`
    },
    images: {
      source: `${SOURCE}images/**/*.{jpeg,jpg,gif,png,svg,ico}`,
      watch: `${SOURCE}images/**/*.{jpeg,jpg,gif,png,svg,ico}`,
      destination: `${DESTINATION}images/`
    },
    fonts: {
      source: `${SOURCE}fonts/**/*.*`,
      watch: `${SOURCE}fonts/**/*.*`,
      destination: `${DESTINATION}fonts/`
    }
  }
}
