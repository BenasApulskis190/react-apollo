const {gql} = require('apollo-server')

module.exports = gql`
    type Page  {
        main: ContentType,
        infoBoxes: [String!]
        sidebar: ContentType
        footer: String
    }

    type ContentType {
        title: String
        content: String
    }

    type Query {
        page: Page
    }
`
