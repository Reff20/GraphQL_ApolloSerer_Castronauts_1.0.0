const { ApolloServer, MockList } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: ()=>({
        tracksForHome: () => new MockList([6, 9])
    }),
    Track: ()=>({
        id: () => 'track_01',
        title: () => 'O explorador espacial',
        author: () =>{
            return{
                name: 'Wik the cat!',
                photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
            };
        },
        thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => 1324,
        modulesCount: () => 6
        })
}

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev
    `)
})