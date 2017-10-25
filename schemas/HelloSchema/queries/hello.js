import { GraphQLList, GraphQLString } from 'graphql';

import HelloType from '../types/Hello';
import HelloModel from '../models/HelloModel';

export default {
    type: new GraphQLList(HelloType),
    async resolve(root, params, options) {
        return await HelloModel.find({});
    }
}
