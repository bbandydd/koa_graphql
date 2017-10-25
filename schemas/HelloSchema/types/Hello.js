import {
    GraphQLObjectType,
} from 'graphql';

import HelloFields from './HelloFields';

export default new GraphQLObjectType({
    name: 'Hello',
    fields: HelloFields,
})