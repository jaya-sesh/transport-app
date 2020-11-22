class User
{
    constructor()
    {
        this.username=null;
        this.password=null;
        
    }
    writeUser()
    {
        var userIndex="users/"+this.username
        database.ref(userIndex).set({
            name:this.username,
            password:this.password
        })

    }
    static readUserInfo()
    {
        var userInfoRef = database.ref('users');
        userInfoRef.on("value",(data)=>{
            allUsers=data.val();
            console.log(allUsers)
            
        })
        return allUsers;
    }

    }

    
