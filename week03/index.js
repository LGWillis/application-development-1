console.log("Luke Willis");
console.log("Course: CS31103");
console.log("Week 3");

console.log("Version:", process.version);
console.log("Date/Time:", new Date());

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

const appConfig = {
  port: PORT,
  environment: NODE_ENV,
  startedAt: new Date()
};

console.log("App Configuration:");
console.log(JSON.stringify(appConfig, null, 2));