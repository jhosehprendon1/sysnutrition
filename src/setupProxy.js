const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://jhosehprendon.api-us1.com/api/3', 
        changeOrigin: true,
        pathRewrite: {
            '^/api' : '/'
        }
    }));
};