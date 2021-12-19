const fs = require("fs"); 
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
//* call some web token to define log ^^ if log have problem the will report in web console luôn 
//*  npm i json-server jsonwebtoken body-parser --save-dev 
//* npm i json-server if you chưa install

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./database/users.json", "utf-8"));
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "85423112"; //*random key to see access-token
const expiresIn = "1h";

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}
function isLoginAuthenticated({username, password}) {
    return (
        userdb.users.findIndex((user) => user.username === username && user.pass === password) !== -1 
    ); //* find the match table 
}
function isSignupAuthenticated({username}) {
    return (
        userdb.users.findIndex((user) => user.username === username ) !== -1);}//* find the collum of match username
    

server.post("api/auth/register", (req,res)=>{
    const {username,email,phone,password, gender,role} = req.body;
    if(isSignupAuthenticated({username})){
        const status = 401;
        const message = "Username already taken";
        res.status(status).json({status,message}) //*taken err will appeare in web console
        return;
    }

    fs.readFile(".database/users.json", (err, data) => {
        if(err){
             const status = 401;
             const message = "err"; 
             res.status(status).json({status,message}) //*err when read file in system will appeare in web console
             return;
        }
         data = JSON.parser(data.toString()); 
        let last_item_id = data.users[data.user.length - 1].id;

        data.users.push({id: last_item_id +1, username:username,email:email,phone: phone, pass:password,  gender:gender, role:role });
        let writeData = fs.writeFile("./database/users.json", JSON.stringify(data), (err, result)=>{
            if (err) {
                const status = 401;
                const message = "err"; 
                res.status(status).json({status,message}) 
                return;
            }
        });
    });
    const access_token = createToken({username,password});
    res.status(200).json({access_token}); //* set status to be OKKKKK when create account success =)))
});

   server.post("/api/auth/login", (req,res)=>{
    const {username,password} = req.body;
    if(!isLoginAuthenticated({username,password})){
        const status = 401;
        const message = "Incorrect Username or Password";
        res.status(status).json({status,message}) //*wrong will appeare in web console
        return;
   }
   const access_token = createToken({username,password});
   res.status(200).json({access_token}); //* set status to be OKKK when login ok =)))
 });
 server.listen(5001, ()=>{
     console.log("running json api server");
 });

