function validateRequest(object) {
    if (object['method'] === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (object['uri'] === undefined || !/^[A-Za-z\d.]+$/g.test(object['uri'])) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (object['version'] === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (object['message'] === undefined || !/^((?![<>&'"\\]).)*$/g.test(object['message'])) {
        throw new Error('Invalid request header: Invalid Message');
    }
    if (!(object['method'] === 'GET' || object['method'] === 'POST' || object['method'] === 'DELETE' || object['method'] === 'CONNECT')) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!(object['version'] === 'HTTP/0.9' || object['version'] === 'HTTP/1.0' || object['version'] === 'HTTP/1.1' || object['version'] === 'HTTP/2.0')) {
        throw new Error('Invalid request header: Invalid Version');
    }
    return object;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'kkk.jjjj',
    version: 'HTTP/0.9',
    message: 'gdfg'
}));