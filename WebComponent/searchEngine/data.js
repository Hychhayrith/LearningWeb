const elasticsearch = require('elasticsearch');
const cities = require('./cities.json');
const client = new elasticsearch.Client({
    hosts: [ 'http://localhost:9200' ]
});

const bulk = [];

// Ping to make sure whether the elasticsearch work fine
client.ping({
    requestTimeout: 30000,
}, (error) => {
    if(error) console.error("Elasticsearch cluster is down");
    else console.log("Everything is ok");
})


// create index
client.indices.create({
    index: 'chhayrith'
}, (error, response, status) => {
    if(error) console.error(error)
    else console.log("Created new index: " , response)
})

//adding information to index
// client.index({
//     index: 'scotch.io_tutorial',
//     id: '1',
//     type: 'cities_lists',
//     body: {
//         'key1' : 'content for key one',
//         'key2' : 'content for key two',
//         'key3' : 'content for key three'
//     }
// }, (error, response, status) => console.log(response));

cities.forEach(city => {
    bulk.push({index:{
        _index: "scotch.io-tutorial",
        _type : "cities_list"
    }})
    bulk.push(city)
});

client.bulk({body:bulk}, (err, response) => (err) ? console.log("Failed Bulk operation".red, err): console.log("successfully imported %s".green, cities.length));
