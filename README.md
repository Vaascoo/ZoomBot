# ZoomBot
A Discord Bot that upon given a command with a keyword, responds with the corresponding zoom meeting url.

## Backend
Http Server(basically a REST api) with just an endpoint at /api.  
You can interact with it by making a GET request with params: name, type.

## Dependencies
python3, nodejs, npm, pip  
axios, discord.js, express

```sh
npm install axios discord.js express
```

### Usage

Replace <class> in tests/jsonGenerator.py with the name of the class (preferrably a one word acronym).  
Run it to generate the json (written to json.txt).  
Use node's JSON.parse to parse it to a json object and paste it in server/src/fetch.js (var RAW = <json>).  
Set the following environment variables :  
  TOKEN = \<your-discord-token\>  
  API_PATH = http://localhost:8000/api (unless you change it)  

### Running
Windows:
```sh
npm run all
```

Linux :
```sh
npm run api & npm run bot & disown
```
