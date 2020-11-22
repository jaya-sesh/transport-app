class Signin
{
    constructor()
    {
        this.heading=createElement("h1");
        this.note=createP("h2");
        this.username = createInput('USERNAME');
        this.password = createInput('PASSWORD','password');
        this.loginButton = createButton('LOG IN');
        this.allUsersInfo=[];
    }
    hide()
    {
        this.heading.hide();
        this.note.hide();  
        this.username.hide(); 
        this.password.hide();
        this.loginButton.hide();
        
    }
    display()
    {
        this.heading.html("SIGN IN DETAILS:");
        this.note.html("PLEASE LOGIN BY ENTERING YOUR USERNAME  AND PASSWORD.");
        this.heading.position(displayWidth/2,displayHeight/2-200);
        this.loginButton.position(displayWidth/2,displayHeight/2+250);
        this.note.position(displayWidth/2-200,displayHeight/2-100);
        this.username.position(displayWidth/2,displayHeight/2+50);
        this.password.position(displayWidth/2,displayHeight/2+150);
        this.loginButton.mousePressed(()=>{
            
            userready.validate();
            
           
        })
    }

}