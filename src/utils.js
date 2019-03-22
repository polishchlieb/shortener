const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

exports.validURL = str => {
    return urlPattern.test(str);
}

exports.randomString = (length = 3) => {
    return Math.random().toString(36).substr(2, length);
}

exports.parseURL = (url = '') => {
    return encodeURIComponent(url).split('%20').join('+');
}