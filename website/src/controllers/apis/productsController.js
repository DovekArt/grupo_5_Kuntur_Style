const db = require("../../database/models");

module.exports = {
  async list(req, res) {
      const { rows, count } = await db.Product.findAndCountAll({
        include : ['category','images'],
      });

      res.send({
          meta: {
              totalCount: count,
          },
          data: rows,
      });
  },
};