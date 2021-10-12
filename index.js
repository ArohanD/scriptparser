const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
const { parser } = require("./utils.js");

app.use(async (ctx) => {
    console.log('hit_')
  const rawText = fs.readFileSync("./test_scripts/Alien.txt").toString();
  const parsedText = parser(rawText) || "nothing";
  ctx.body = parsedText;
});

app.listen(3000);
