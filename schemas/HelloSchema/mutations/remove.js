import {
    GraphQLList,
    GraphQLString,
} from 'graphql';

import HelloType from '../types/Hello';
import HelloModel from '../models/HelloModel';

export default {
    type: new GraphQLList(HelloType),
    args: {
        ids: {
            name: 'ids',
            type: new GraphQLList(GraphQLString)
        }
    },
    async resolve (root, params, options) {
        let removedList = [];

        await Promise.all(params.ids.map(async (_id) => {
            const removed = await HelloModel.findOneAndRemove({
                _id
            });

            if (removed) {
                removedList.push(removed);
            }
        }));

        return removedList;
    }
}