
const knex = require('knex')({
    client: 'pg',
    rejectUnauthorized: true,
    connection: {
      host: "ec2-52-7-39-178.compute-1.amazonaws.com",
      port: "5432",
      user: "qxxhwpxoiobccg",
      password: "8862c8a09c03bc495af74f2611828f7740e6ed04f1931f062e96c1c0599ae2fb",
      database: "dder50rg2ib5c3",
      ssl: true
    }
  });

  export default knex