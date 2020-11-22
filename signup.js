class Signup
{
    constructor()
    {
        this.heading=createElement("h1");
        this.note=createP("h2");
        this.username = createInput('USERNAME');
        this.password = createInput('PASSWORD','password');
        this.submitButton = createButton('SUBMIT');
    }
    hide()
    {
        this.password.hide();
        this.submitButton.hide();
        this.username.hide();
    }
    
    display()
    {
        this.heading.html("SIGN UP DETAILS");
        this.note.html("BEFORE SIGNING UP: THIS APP IS CREATED FOR THE CONVENIENCE OF TRANSPORTERS. YOU CAN ADD YOUR TRUCK DETAILS IN THIS APP FROM ANY PLACE ON EARTH.");
        this.heading.position(displayWidth/2,displayHeight/2-200);
        this.note.position(displayWidth/2-200,displayHeight/2-100);
        this.username.position(displayWidth/2,displayHeight/2+50);
        this.password.position(displayWidth/2,displayHeight/2+150);
        this.submitButton.position(displayWidth/2,displayHeight/2+250);
        this.submitButton.mousePressed(()=>{
            index+=1;
           // console.log(index)
            user.username=this.username.value();
            user.password=this.password.value();
            user.writeUser();
            this.password.hide();
            this.submitButton.hide();
            this.username.hide();
            //give greeting
            this.greeting.html("Hello " +user.username)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            this.greeting.html("Welcome to your own personalized truck record register " +user.username)
            this.greeting.position(displayWidth/2 - 70, displayHeight/2);
            

        })

        
    }

}