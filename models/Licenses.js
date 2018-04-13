const db = require('../db');

const GET_ALL_DATA = 'SELECT * FROM licenses';
const ADD_NEW_LICENSE = 'INSERT INTO licenses (product, feature) VALUES ($1, $2)';
const UPDATE_LICENSE = 'UPDATE licenses SET product=$2, feature=$3 WHERE id=$1';
const DELETE_LICENSE = 'DELETE from licenses WHERE id=$1';


class Licenses {

  static async getAllData(req, res) {
    const { rows, err } = await db.query(GET_ALL_DATA);

    if (err) {
      res.status(400).json(err.message);
      return false;
    }

    res.json(rows);
  }


  static async addNewLicense(req, res) {
    const { product, feature } = req.body;

    // if (!product || !feature) {
    //   res.status(400).json('Product or feature are undefined');
    //   return false;
    // }

    const { err } = await  db.query(ADD_NEW_LICENSE, [product, feature]);

    if (err) {
      res.status(400).json(err.message);
      return false;
    }

    res.status(201).json('Everything went OK'); // Created - status for headers
  }


  static async updateLicense(req, res) {
    const { id } = req.params;
    const { product, feature } = req.body;

    const { err } = await db.query(UPDATE_LICENSE, [id, product, feature]);

    if (err) {
      res.status(400).json(err.message);
      return false;
    }

    res.json('Updated license'); // Created - status for headers
  }


  static async deleteLicense(req, res) {
    const { id } = req.params;

    const { err } = await db.query(DELETE_LICENSE, [id]);

    if (err) {
      res.status(400).json(err.message);
      return false;
    }

    res.json('Deleted license');
  }
}


module.exports = Licenses;