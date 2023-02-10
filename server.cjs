const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./game.db');
const WebSocketServer = require('ws');
screen = {};
screen1 = {};
screen2 = {};

const wss = new WebSocketServer.Server({ 
    port: 8081, 
    host:'192.168.1.100' 
})
const wss1 = new WebSocketServer.Server({ 
  port: 8082, 
  host:'192.168.1.100' 
})

const wss2 = new WebSocketServer.Server({ 
  port: 8083, 
  host:'192.168.1.100' 
})

// const corsOptions = {
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   origin: 'http://192.168.1.100:5173',
//   optionsSuccessStatus: 200
// }

app.use(cors('*'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


wss.on("connection",(socket, req) => {
  console.log("Client Connected")
  let id = 0;
  while (true) {
    if (!screen.hasOwnProperty(id)) { screen[id] = socket; break; }
     id++;
  }

  socket.on("close", () => delete screen[id]);

  socket.on("message", msg => {
  let message = msg.toString().replace(/(<([^>]+)>)/gi, "");
  // console.log(message);
  for (let s in screen) {
      screen[s].send(message);   
  }
  });
  
});

console.log("The WebSocket server is running at 192.168.1.102:8081");

wss1.on("connection",(socket, req) => {
  console.log("Settings Connected")
  let id = 0;
  while (true) {
    if (!screen1.hasOwnProperty(id)) { screen1[id] = socket; break; }
     id++;
  }

  socket.on("close", () => delete screen1[id]);

  socket.on("message", msg => {
  let message = msg.toString().replace(/(<([^>]+)>)/gi, "");
  // console.log(message);
  for (let s in screen1) {
      screen1[s].send(message);   
  }
  });
  
});

wss2.on("connection",(socket, req) => {
  console.log("Controller Connected")
  let id = 0;
  while (true) {
    if (!screen2.hasOwnProperty(id)) { screen2[id] = socket; break; }
     id++;
  }

  socket.on("close", () => delete screen2[id]);

  socket.on("message", msg => {
  let message = msg.toString().replace(/(<([^>]+)>)/gi, "");
  // console.log(message);
  for (let s in screen2) {
      screen2[s].send(message);   
  }
  });
  
});

 
//API call for configuration Data
app.get('/conf_data', (req, res) => {
  fs.readFile('json/configuration.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Error reading file' });
    }
    const jsonData = JSON.parse(data);
    return res.json(jsonData);
  });
});


//API call for controller data
app.get('/cont_data', (req, res) => {
  fs.readFile('json/controller.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Error reading file' });
    }
    const jsonData = JSON.parse(data);
    return res.json(jsonData);
  });
});

//Controller
app.post('/cont', (req, res) => {
   let body = req.body;
   console.log(req.body);
   if(body.player_name1 == undefined){
    console.log("Empty");
    res.send("No name for player!")
   }
   else if(body.game_mode == 'multi'){
    db.run(`INSERT INTO multi(player1,player1_score,player2,player2_score) VALUES(?,?,?,?)`, [body.player_name1,0,body.player_name2,0], function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID} in MultiMode`);
    });
      fs.writeFile('json/controller.json', JSON.stringify(body), (err) => {
      if (err) throw err;
      res.send('The data was successfully written to file');
  
    });

   }
   //else if(body.game_mode === 'single')
  else{
   db.run(`INSERT INTO game(player_name,perfect_shot,score) VALUES(?,?,?)`, [body.player_name1,0,0], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID} in Single Mode`);
  });
    fs.writeFile('json/controller.json', JSON.stringify(body), (err) => {
    if (err) throw err;
    res.send('The data was successfully written to file');

  });

}
   })

   //Configuration
  app.post('/conf', (req, res) => {
    let body = req.body;
    fs.writeFile('json/configuration.json', JSON.stringify(body), (err) => {
        if (err) throw err;
        res.send('The data was successfully written to file');
      });
  })

//Score Update
  app.post('/score', (req, res) => {
    let body = req.body;
     if(body.shot == undefined || body.score == undefined || body.player_name== undefined){
      res.send("Something wrong with data sent");
      console.log("Data not complete");
    }
    else{
    let data = [body.shot, body.score,body.player_name];

    let sql = `UPDATE game
            SET perfect_shot = ?,
            score = ?
            WHERE player_name = ?`;

    db.run(sql, data, function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
      res.send('Update successfull');

    });
  }
  })


//Multiplayer Score
app.post('/multiscore', (req, res) => {
  let body = req.body;
  if(body.player1_score == undefined || body.player_name1 == undefined || body.player_name2== undefined){
    res.send("Something wrong with data sent");
    console.log("Data not complete");
  }
  else{
  let data = [body.player1_score,body.player2_score,body.player_name1,body.player_name2];

  let sql = `UPDATE multi
          SET player1_score = ?,
          player2_score = ?
          WHERE player1 = ? AND
          player2 = ?`;

  db.run(sql, data, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes} in Multimode`);
    res.send('Multi Update successfull');

  });
}
})

  app.get("/players", (req, res) => {
    db.all("SELECT player_name, perfect_shot, score FROM game ORDER BY score DESC", (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to retrieve players" });
      }
      res.json(rows);
    });
  });
 
app.listen(5000, () => {
    console.log("Server started on port 5000")
})