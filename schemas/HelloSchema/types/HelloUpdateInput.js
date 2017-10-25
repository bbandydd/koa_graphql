import {
    GraphQLInputObjectType
} from 'graphql';

import HelloFields from './HelloFields';

export default new GraphQLInputObjectType({
    name: 'HelloUpdateInput',
    fields: HelloFields,
});