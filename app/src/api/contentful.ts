import * as contentful from 'contentful'

const client = contentful.createClient({
    space: process.env.REACT_APP_COTENTFUL_SPACE,
    accessToken:  process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

export default client