import ApolloClient from 'apollo-boost'

const client = new ApolloClient({ uri: "https://us1.prisma.sh/zcmerris-71a88b/back-end/dev" })

export { client }