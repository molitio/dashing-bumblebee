const http = require("http");
const fs = require("fs");
function getCircularReplacer() {
  const ancestors = [];
  return function (key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
}

const requestListener = (req, res) => {
  //console.dir(req, { depth: 0 });
  const client = { ...req.client };
  console.info("client: ", client);

  try {
    const logObject = { ...client };
    fs.writeFileSync(
      "./log.json",
      JSON.stringify(logObject, getCircularReplacer())
    );
    // file written successfully
  } catch (err) {
    console.error(err);
  }
  res.write("Polo\n");
  res.end();
};

const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running");
});
