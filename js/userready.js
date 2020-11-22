class UserReady{
    constructor(){}

    async start(){
          user = new User();
          var userCountRef = await database.ref('users').once("value");
          if(userCountRef.exists()){
             allUsers=userCountRef.val();
            }
             signin=new Signin();
             signin.display();
        }

        validate(){
               var uname=signin.username.value();
               var pword=signin.password.value();
                for(var u in allUsers){
                   if(allUsers[u].name === uname && allUsers[u].password===pword){
                    login=true
                    break;
                  }
                 else{login=false}
                  }
                  if(login===true){
                     signin.hide()
                     registerScreen=new RegisterScreen();
                     registerScreen.display();
                     }
                     else{
                     // signin.hide()
                      alert("Username and Password Invalid")
                      
                     }
               
        }
    
}