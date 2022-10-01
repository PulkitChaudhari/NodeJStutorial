const dbConnection = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnection();
    let result = await data.updateOne(
        {name: "note 7 pro max"},
        {$set: { name : 'note 7 pro max',price : 500}}
        );
    // updateone updates only single data even in case of multiple data of same name
    // in case of same name updateone changes only first data
    // use update to update all the entries for the given identifying field
    console.warn(result);
}

updateData(); 