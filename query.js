const Pool = require("pg").Pool;
const pool = new Pool({
  user: "xodcpesnvrotee",
  host: "ec2-174-129-253-113.compute-1.amazonaws.com",
  database: "d86k5scvbco33e",
  password: "a65b2119c250578af373aa13eea77115aadcdb0c095a462b56b781e07dc216ed",
  port: 5432,
  ssl: true
});

const users = (request, response) => {
  pool.query("SELECT * FROM tbl_panti", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// const users = (request, response) => {
//   var id = request.body.id; //post
//   //post tapi bodynya banyak
//   // var {param1, param2} = request.body
//   //get
//   //const _param = request.params.id

//   pool.query("SELECT * FROM tbl_panti WHERE id_panti = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

module.exports = {
  users
};
