const Pool = require("pg").Pool;
const pool = new Pool({
  user: "xodcpesnvrotee",
  host: "ec2-174-129-253-113.compute-1.amazonaws.com",
  database: "d86k5scvbco33e",
  password: "a65b2119c250578af373aa13eea77115aadcdb0c095a462b56b781e07dc216ed",
  port: 5432,
  ssl: true
});

const panti = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_panti INNER JOIN tbl_gambar ON tbl_panti.gambar_id= tbl_gambar.gambar_id",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const panti_owner = (request, response) => {
  pool.query(
    "SELECT * FROM tbl_panti INNER JOIN tbl_owner ON tbl_panti.owner_kode  = tbl_owner.owner_kode",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const kategori_panti = (request, response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM tbl_panti WHERE kategori_panti = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const users = (request, response) => {
  var email = request.body.email;
  var password = request.body.password; //post

  //post tapi bodynya banyak
  // var {param1, param2} = request.body
  //get
  //const _param = request.params.id

  pool.query(
    "SELECT * FROM tbl_user WHERE user_email = $1 AND user_password = $1",
    [email],
    [password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const new_user = (request, response) => {
  var first_name = request.body.id; //post
  var nama = request.body.nama;
  //post tapi bodynya banyak
  // var {param1, param2} = request.body
  //get
  //const _param = request.params.id

  pool.query(
    "SELECT * FROM tbl_panti WHERE id_panti = $1",
    [id],
    [nama],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// const users = (request, response) => {
//   var id = request.body.id; //post
// var nama = request.body.nama ;
//   //post tapi bodynya banyak
//   // var {param1, param2} = request.body
//   //get
//   //const _param = request.params.id

//   pool.query("SELECT * FROM tbl_panti WHERE id_panti = $1", [id],[nama], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

module.exports = {
  panti,
  panti_owner,
  kategori_panti,
  users
};
