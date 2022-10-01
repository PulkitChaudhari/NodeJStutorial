const dbConnection = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnection();
    let result = await data.deleteOne({
        name:"note 7 pro max"
    })
    console.warn(result);
    if(result.acknowledged){
        console.log("record deleted");
    }
}

deleteData();