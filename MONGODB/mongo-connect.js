const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017/aspire";

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();

    const db = client.db("aspire");
    const collection = db.collection("users");

    const inserter = await collection.insertMany([
      {
        _id: 9,
        firstName: "senthil",
        lastName: "k",
        gender: "male",
        email: "senthil.t@abc.com",
        salary: 1000,
        department: { name: "embedded" },
      },
      {
        _id: 10,
        firstName: "aswanth",
        lastName: "r",
        gender: "male",
        email: "ashwanth@abc.com",
        salary: 5700,
        department: { name: "computer" },
      },
    ]);

    console.log("record inserted with :" + inserter._id);

    await collection.updateOne({'email':"ashwanth@abc.com"},{$set:{'lastName':"ramana"}},{upsert:true});

    await collection.deleteOne({'firstName':"senthil"});

    //await collection.updateOne({'_id':"10"},{$set:{'_id':"9"}},{upsert:true});

    const cursor = collection.find({});

    await cursor.forEach((record) => {
      console.log(record);
    });
    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the function to connect
connectToMongoDB();
