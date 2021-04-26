// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    CdID: {
        type: String,
        required: true
    },
    HourPurch: {
        type: Number,
        required: true
    },
    DayPurch: {
        type: Number,
        required: true
    },
    StoreID: {
        type: String,
        required: true
    },
    PricePaid: {
        type: Number,
        required: true
    },
    SalesPersonID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Orders", OrdersSchema);