const {gql} = require('apollo-server')

module.exports = gql`
    type Page  {
        main: ContentType,
        navBar: [Menu!]
        infoBoxes: [String!]
        sidebar: ContentType
        footer: String
    }

    type ContentType {
        title: String
        content: String
    }

    type Menu {
        link: String
        text: String
        submenu: SubMenu
    }

    type SubMenu {
        id: String,
        items: [SubMenuItems]
    }

    type SubMenuItems {
        link: String
        text: String
    }

    type Query {
        page: Page
    }

    type Mutation {
        submitContactForm(firstName: String, lastName: String, message: String):String
    }
`
