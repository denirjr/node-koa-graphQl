const { GraphQLObjectType, GraphQLObjectType } = require('graphql');
const gadgetGraphQLType = require('./gadgetType');
const Gadget = require('./../models/gadget');

const Mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        addGadget: {
           type: gadgetGraphQLType, 
        }
    }
})

module.exports = Mutation