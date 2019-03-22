const utils = require('../utils');
const { writeFileSync } = require('fs');
const { request, response } = require('express');

/**
 * @param {request} req (request)
 * @param {response} res (response)
 */
module.exports = (req, res) => {
    if(!req.body.full || typeof req.body.full != 'string')
        return res.json({
            error: 'Full url was not provided'
        });

    if(!req.body.full.startsWith('http'))
        req.body.full = 'http://' + req.body.full;

    if(!utils.validURL(req.body.full))
        return res.json({
            error: 'Provided url is not valid'
        });

    const urls = require('../urls.json');

    if(req.body.short && !urls[req.body.short]
       && typeof req.body.short == 'string') {
        req.body.short = utils.parseURL(req.body.short);
        urls[req.body.short] = req.body.full;
        res.json({
            key: req.body.short
        });
    } else {
        let random = utils.randomString();
        while(urls.hasOwnProperty(random))
            random = utils.randomString();

        urls[random] = req.body.full;
        res.json({
            key: random
        });
    }

    writeFileSync('urls.json', JSON.stringify(urls));
}