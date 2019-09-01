import fetch from 'isomorphic-unfetch'

export default (req, res) => {
    const {
        query : {tag}
    } = req
    
    console.log(`Tag buscada: ${tag}`)
    fetch(`https://www.reddit.com/r/${tag}.json`)
    .then(res => res.json())
    .then(json => res.end(JSON.stringify(json)))
    .catch(err => res.end(JSON.stringify(err)));
}
