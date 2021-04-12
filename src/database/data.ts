import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()


// export const mongoDBConnection = async() => mongodb.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology : true
//     },
//     async (error,client) => {
//         if(error) throw error;
//         console.log("DB connected")
//         const database = client.db()
//         const collection = database.collection("todos");

//         let dataFromMongo =     await collection.find().toArray();
//         console.log(dataFromMongo)
//     }
// )

// export const postDataToMongoDb = async() => mongodb.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology : true
//     },
//     async (error,client) => {
//         if(error) throw error;
//         console.log("DB connected")
//         const database = client.db()
//         const collection = database.collection("todos");

//         let sendDatatoMongo =     await collection.insertOne(
//             {
//             name:"usman 2",
//             email:"backup.muk@gmail.com"
//         },
//         (err,data)=>{
//             if(err) throw err;
//             console.log(data)
//         });
//         console.log(sendDatatoMongo)
//     }
// )


export const postDataToMongoDb = async() => mongodb.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology : true
    },
    async (error,client) => {
        if(error) throw error;
        console.log("DB connected")
        const database = client.db()
        const collection = database.collection("todos");
                    const filter = {
                        name : "user1"
                    }

                    const updatedData = {
                        email : "updated email"
                    }
        let sendDatatoMongo =     await collection.updateOne(filter,updatedData,
            (err,data)=>{
                //if(err) console.log(err);
                    console.log(data)
            }
            );
        console.log(sendDatatoMongo)
    }
)