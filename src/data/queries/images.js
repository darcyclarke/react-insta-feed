import { GraphQLList as List } from 'graphql'
import fetch from '../../core/fetch'
import ImageItemType from '../types/ImageItemType'

const url = ''
let items = []
let lastFetchTask
let lastFetchTime = new Date(1970, 0, 1)

const images = {
  type: new List(ImageItemType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask
    }

    if ((new Date() - lastFetchTime) > 1000 * 3 /* 10 mins */) {
      lastFetchTime = new Date()
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.responseStatus === 200) {
            items = data.responseData.feed.entries
          }
          return items
        })
        .finally(() => {
          lastFetchTask = null
        })

      if (items.length) {
        return items
      }

      return lastFetchTask
    }

    return items
  }
}

export default images
