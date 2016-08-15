/* globals fetch */
import 'wahtwg-fetch'
import config from '../../config'

class Image {
  constructor(options) {
    this.isLoaded: options.isLoaded || false
    this.isVisible: options.isVisible || false
    this.url: options.url || null
    this.user: options.user || null
    this.date: options.date || null
    this.id: options.id || null
  }

  loaded() {
    this.isLoaded = true
  }

  show() {
    this.isVisible = true
  }

  get(type, value) {
    let url = `${config.instagram.api}${type}s/${value}/media/recent`
    fetch(url).then((res) => {
      console.log(res)
    })
  }
})

export default Image
