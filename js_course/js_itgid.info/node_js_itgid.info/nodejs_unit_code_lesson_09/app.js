const mysql = require('mysql');
const http = require('http');
const url = require('url');

// конфигурация

const conn = mysql.createConnection({
    host: "server.mysql.tools",
    user: "nodetest",
    database: "test_database",
    password: "XXXYYY"
});

conn.connect(err => {
    if (err) {
        return console.error("Ошибка: " + err.message);

    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

http.createServer((req, res) => {
    let urlRequest = url.parse(req.url, true);
    const task = urlRequest.query.task;
    if (req.method === 'GET') {
        task == 2 ? task2(req, res) :
            task == 3 ? task3(req, res) :
            task == 4 ? task4(req, res) :
            task == 5 ? task5(req, res) : res.end('404');
    }

}).listen(3002);

const task2 = (req, res) => {
    let query = "SELECT * FROM user";
    return conn.query(query, (err, result, field) => {
        res.end(JSON.stringify(result.map(e => e["firstname"])));
    })
}
const task3 = (req, res) => {
    let query = "SELECT * FROM user";
    return conn.query(query, (err, result, field) => {
        res.end(JSON.stringify(result.map(e => e["email"])));
    })
}
const task4 = (req, res) => {
    let urlRequest = url.parse(req.url, true);
    const email = urlRequest.query.email;
    let query = `SELECT id FROM user WHERE email="${email}"`;
    return conn.query(query, (err, result, field) => {
        try {
            res.end(JSON.stringify(result[0].id));
        } catch {
            res.end(JSON.stringify(0));
        }
    })
}
const task5 = (req, res) => {
    let urlRequest = url.parse(req.url, true);
    const email = urlRequest.query.email;
    let query = `SELECT id,email FROM user WHERE email Like "%${email}%"`;
    return conn.query(query, (err, result, field) => {
        res.end(JSON.stringify(result.map(e => e["id"])));
    })
}