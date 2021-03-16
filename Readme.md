Pre-requirements
Please run a docker mongo image / local mongo installation look into ./server/.env file for port and 
change host to localhost in ./server/.env
change proxy to http://localhost:8080 in ./client/package.json

Please use following commands
cd ./server 
npm install
npm start

cd ./client 
npm install
npm start

Please navigate to url http://localhost:3000/

This development does not include a user authentication at the moment some hard coded provision is included for the implementation


Docker 

Please use following commands

docker-compose build --no-cache
docker-compose up

to delete the existing record from the cotext since there is no delete action
docker-compose down -v