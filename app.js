const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Importing tasks with updated file names
app.use("/task1", require("./tasks/task1.js"));
app.use("/task2", require("./tasks/task2.js"));
app.use("/task3", require("./tasks/task3.js"));
app.use("/task4", require("./tasks/task4.js"));
app.use("/task5", require("./tasks/task5.js"));
app.use("/task6", require("./tasks/task6.js"));
app.use("/task7", require("./tasks/task7.js"));
app.use("/task8", require("./tasks/task8.js"));
app.use("/task9", require("./tasks/task9.js"));
app.use("/task10", require("./tasks/task10.js"));
app.use("/task11", require("./tasks/task11.js"));
app.use("/task12", require("./tasks/task12.js"));
app.use("/task13", require("./tasks/task13.js"));
app.use("/task14", require("./tasks/task14.js"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));