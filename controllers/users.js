const getUsers = (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ status: "success", data: [] }));
};

const createUser = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const parsedData = JSON.parse(body);
    console.log(parsedData);

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "success", data: parsedData }));
  });
};

export { getUsers, createUser };
