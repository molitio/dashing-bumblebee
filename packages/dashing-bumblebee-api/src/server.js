const http = require("http");
const fs = require("fs");

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

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
