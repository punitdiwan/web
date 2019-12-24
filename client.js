const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "ke0yb7u2",
  //projectId: 'jmhf2rn8',
  //dataset: 'landing-pages',
  dataset: "production",
  token: "", // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});

module.exports = client;
