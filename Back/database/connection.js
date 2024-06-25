import pkg from 'mongoose';
const { connect, connection, disconnect } = pkg;
const uri = process.env.MONGO_DB_URL;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// const client = new MongoClient(uri);
// const databaseName = "Aula04";
// const collectionName = "produtos";

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await connect(uri, clientOptions);
    await connection.db.admin().command({ ping: 1 });
    console.log("Bem vindo Crocodile!");
  } catch(error) {
    // Ensures that the client will close when you finish/error
   console.log(`Erro ao conectar ao servidor MongoDB: ${error}`);
  }
}
run().catch((error) => console.log(error));

