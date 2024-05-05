import mongoose from "mongoose";




export const conn = () => {
    mongoose
        .connect("mongodb+srv://riyaraghuwanshi0831:portfolioPass@clusterport.raemq2o.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPort", { dbName: "my_Portfolio" })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log("Some error occured while connecting to database:", err);
        });
};

