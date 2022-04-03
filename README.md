## Open [Demo](https://teslo-sell.herokuapp.com/ "Hobbit lifestyles")
# Next.js Enop Shop

Run in local require Data.
```
docker-compose up -d
```

* -d, Mean __detached__


## Set environment Variables
Rename file __.env.template__ to __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/enopdb
```

* Build node modules and run nextjs server
```
yarn install
yarn dev
```


## Populate the database with test information

Make request to:
```
http://localhost:3000/api/seed
```