const db = require("../../database/models");

module.exports = {
  async list(req, res) {
      const { rows, count } = await db.User.findAndCountAll({
        include: ['addresses'],
        attributes: { exclude: ['password', 'telefono'] }
      });

      res.send({
          meta: {
              totalCount: count,
          },
          data: rows,
      });
  },
};