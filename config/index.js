const artifactDetails = require("../ArtifactDetails.json");
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  web: {
    artifact: artifactDetails,
    name: artifactDetails.name,
    version: artifactDetails.version,
    port: process.env.SERVER_PORT || 3050
  },
  service: {
    MONGO_URL: process.env.MONGO_URL
  }
};