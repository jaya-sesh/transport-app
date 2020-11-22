class Welcome
{
    constructor()
    {
        this.welcome=createElement("h1");
        this.signupButton = createButton('SIGN UP');
        this.signinButton = createButton('SIGN IN');
    }

    hide()
    {
            this.welcome.hide();
            this.signupButton.hide();  
            this.signinButton.hide();  
    }
    display()
    {
        this.welcome.html("WELCOME TO DIGITAL REGISTER APP ");
        this.welcome.position(displayWidth/2,displayHeight/2-50);
        this.signupButton.position(displayWidth/2,displayHeight/2+50);
        this.signinButton.position(displayWidth/2,displayHeight/2+150);
        this.signupButton.mousePressed(()=>{
            this.welcome.hide();
            this.signupButton.hide();  
            this.signinButton.hide(); 
            signup=new Signup();
            signup.display();

        })
        this.signinButton.mousePressed(()=>{
            this.welcome.hide();
            this.signupButton.hide();  
            this.signinButton.hide(); 
            signin=new Signin();
            signin.display();

        })
    }
}
