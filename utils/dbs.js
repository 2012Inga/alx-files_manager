// utils/db.js
const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    this.database = this.client.db(database);
    this.isConnected = false;

    this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      this.isConnected = true;
      console.log('Connected successfully to MongoDB');
    } catch (error) {
      this.isConnected = false;
      console.error('Error connecting to MongoDB:', error);
    }
  }

  isAlive() {
    return this.isConnected;
  }

  async nbUsers() {
    try {
      const usersCollection = this.database.collection('users');
      const userCount = await usersCollection.countDocuments();
      console.log('users')
      return userCount;
    } catch (error) {
      console.error('Error fetching user count:', error);
      return 0;
    }
  }

  async nbFiles() {
    try {
      const filesCollection = this.database.collection('files');
      const fileCount = await filesCollection.countDocuments();
      return fileCount;
    } catch (error) {
      console.error('Error fetching file count:', error);
      return 0;
    }
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
