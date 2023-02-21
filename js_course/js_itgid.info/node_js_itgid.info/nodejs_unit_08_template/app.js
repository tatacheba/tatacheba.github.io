const http = require('http');
const url = require('url');
const {
    parse
} = require('querystring');


const t2 = (req, res) => {
    res.end('800');
}

const t3 = (req, res) => {
    res.end('900');
}

const t4 = (req, res) => {
    res.end('1100');
}

const t5 = (req, res) => {
    res.end('1200');
}

http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    let urlRequest = url.parse(req.url, true);
    if (req.method === 'GET') {
        (urlRequest.query.p == 70) ? t2(req, res): (urlRequest.query.p == 80) ? t3(req, res) : res.end('404');
    } else if (req.method === 'POST') {
        req.on('end', () => {
            let params = parse(body);
            (params.h == 80) ? t4(req, res): (params.h == 90) ? t5(req, res) : res.end('404');
        });
    }




















































