const redis = require('redis')

const PORT = proces.env.PORT || 5000
const REDIS_PORT = proces.env.PORT || 6379

client = redis.createClient(REDIS_POST)

// SAVE ONE
var save = ({key, value}) => {
    client.setex(key, 3600, value);
}

// SAVE MANY
var saveMany = (data) => {
  data.map(async ({key, value}) => {
    await save({key, value});
  })
};

// GET
var get = (key, next) => {
    client.get(key, (err, data) => {
        if(err) throw err
        if(data !== null){
            return data
        }else{
            if(next) next() 
            else throw 'no data'
        }
    })
};

// GET MANY
var getMany = (key, next) => {
    client.get(key, (err, data) => {
        if(err) throw err
        if(data !== null){
            return data
        }else{
            if(next) next() 
            else throw 'no data'
        }
    })
};

// GET AND SAVE
var saveAndGet = (data) => {
  let res = []
    save(data)
    data.map(async (data) => {
        res.push(get(data))
    })
    return res
};

// GET AND SAVE
var saveAndGetMany = (data) => {
    let res = []
      save(data)
      data.map(async (data) => {
          res.push(get(data))
      })
      return res
};
  




var db = () => {};

