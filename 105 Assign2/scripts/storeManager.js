const KEY_LS = "users";
function saveUser(user){
/*console.log(user);*/ //this is an object
let oldUsers=readUsers();
console.log(oldUsers);
oldUsers.push(user);
let val = JSON.stringify(oldUsers);//convert into string
console.log(val);//this is an string (JSON)
localStorage.setItem(KEY_LS,val);

}

function readUsers(){
    let users =  localStorage.getItem(KEY_LS);
    
    if(!users){
        console.log("No users :(...");
        return [];
    }else{
        console.log("We have users:)...");
    let listUsers=JSON.parse(users);//parse users back into an array
    /*console.log(listUsers);*/
    return listUsers;
    }
}
