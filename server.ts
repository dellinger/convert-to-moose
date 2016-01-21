var koa = require('koa');
var serve = require('koa-static');
var app = koa();

app.use(serve('.'));

app.listen(3000, err => {
    console.log("Server listening on port 3000");
});
