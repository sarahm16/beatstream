const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        createProxyMiddleware('/', {
            target: "https://localhost:3000"
        })
    )

    //topHits() proxy
    app.use(
        proxy("/chart", {
            target: "https://api.deezer.com",
            changeOrigin: true
        })
    )

    //getTracklist() proxy
    app.use(
        proxy(`/artist`, {
            target: "https://api.deezer.com",
            changeOrigin: true
        })
    )

    //getArtist() proxy
    // app.use(
    //     proxy(`/search/artist/?q=${artist}`, {
    //         target: "https://api.deezer.com",
    //         changeOrigin: true
    //     })
    // )

    //searchQuery() proxy
    app.use(
        proxy(`/search`, {
            target: "https://api.deezer.com",
            changeOrigin: true
        })
    )

    app.use(
        proxy('/album', {
            target: "https://api.deezer.com",
            changeOrigin: true
        })
    )
}