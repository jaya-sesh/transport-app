class RegisterScreen
{
    constructor()
    {
        this.heading=createElement("h1");
        this.tranDate=createElement("h2");
        this.tSno=createInput("SNO.");
        /*this.tId=createInput("TRUCK NUMBER")
        this.dPhone=createInput("DRIVER PHONE NUMBER")
        this.dLicense=createInput("DRIVER LICENSE ID")
        this.vType=createInput("TYPE OF VEHICLE");
        this.wt=createInput("WEIGHT");
        this.pName=createInput("NAME OF THE PARTY");*/
        this.dest=createInput("DESTINATION");
        //this.dStatus=createInput("DELIVERED/NOT DELIVERED")
        this.addButton=createButton('ADD');
        this.viewButton=createButton('VIEW')
        this.updateButton=createButton('UPDATE')
        
    }
   // ready()
    //{
       // truckRegister.sno=this.tsno.value()
        //t//ruckRegister.destination=this.dest.value()
        /*truckRegister.driver_license=this.dLicense.value()
        truckRegister.driver_mobile=this.dPhone.value()
        truckRegister.goods_weight=this.wt.value()
        truckRegister.party_name= this.pName.value()
        truckRegister.pod= this.dStatus.value()
        truckRegister.truck_id=this.tId.value()
        truckRegister.vehicle_type=this.vType.value()*/
//}
    display()
    {
        this.heading.html("TRUCK REGISTER SCREEN")
        //this.tranDate=createElement("h2");\
        this.heading.position(displayWidth/2,displayHeight/4)
        this.tSno.position(displayWidth/2,displayHeight/2)
        this.dest.position(displayWidth/2,displayHeight/2+100)
        this.addButton.position(displayWidth/2-100,displayHeight/2+300)
        this.viewButton.position(displayWidth/2-50,displayHeight/2+300)
        this.updateButton.position(displayWidth/2-250,displayHeight/2+300)
        this.addButton.mousePressed(()=>{
        truckRegister.sno=this.tSno.value()
        truckRegister.destination=this.dest.value()
        console.log(truckRegister.sno)
            truckRegister.addTruckInfo();

        })
        this.viewButton.mousePressed(()=>{
            //truckRegister.sno=this.tSno.value()
            
            Register.viewTruckInfo()
                console.log(truckRegister.truckInform)
    
            })
            this.updateButton.mousePressed(()=>{
                truckRegister.sno=this.tSno.value()
                truckRegister.destination=this.dest.value()
                console.log(truckRegister.sno)
                    truckRegister.updateTruckInfo();
        
                })
    }
}