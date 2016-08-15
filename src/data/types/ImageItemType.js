import { GraphQLObjectType as ObjectType, GraphQLString as StringType, GraphQLNonNull as NonNull } from 'graphql'

const ImageItemType = new ObjectType({
  name: 'ImageItem',
  fields: {
    title: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    author: { type: StringType },
    publishedDate: { type: new NonNull(StringType) },
    contentSnippet: { type: StringType }
  }
})

export default ImageItemType
