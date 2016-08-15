import { GraphQLSchema as Schema, GraphQLObjectType as ObjectType } from 'graphql'
import content from './queries/content'
import images from './queries/images'

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: { content, images}
  })
})

export default schema
