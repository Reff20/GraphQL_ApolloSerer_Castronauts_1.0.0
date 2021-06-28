const {gql} = require('apollo-server');

const typeDefs = gql`

    type Query{
        trackForHome:[Track!]!
    }

    "Track é um grupo de módulos que ensina sobre um módulo específico"
    type Track{
        id: ID!
        
        "Título da track!"
        title: String!

        "Autor da track"
        author: Author!

        "Thumbnail da track"
        thumbnail: String

        "Duração da track"
        length: Int

        "Contagem da quantidade de módulos da track"
        modulesCount: Int
    }

    type Author{
        id: ID!

        "Nome e Sobrenome do autor"
        name: String!

        "Foto de perfil do autor"
        photo: String
    }
`;

module.exports = typeDefs;