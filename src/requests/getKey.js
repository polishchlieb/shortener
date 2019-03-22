const { request, response } = require('express');

/**
 * @param {request} req (request)
 * @param {response} res (response)
 */
module.exports = (req, res) => {
    const urls = require('../urls.json');

    if(urls[req.params.key])
        res.redirect(urls[req.params.key]);
    else res.send('<h1>Not found</h1>');
}