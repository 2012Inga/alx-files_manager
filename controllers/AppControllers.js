class AppController {
  static getStatus(req, res) {
    res.status(200).json({
      status: 'OK',
      "redis": true,
      "db": true
    });
  }
  static getStats(req, res) {
    res.status(200).json({
      status: 'OK',
      "users": 12,
      "files": 1231
    });
  }
}

module.exports = AppController;
