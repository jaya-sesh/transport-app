class Register
{
   
    constructor()
    {
       
        //this.date=null
        this.sno=0
       // this.truckId=null
       // this.driverPhone=0
       // this.driverLicense=null
       // this.vehicleType=null
       // this.weight=0
       // this.partyName=null
        this.destination=null
        //this.deliveryStatus=null
        this.truckInform=[];

    }
    addTruckInfo()
    {
        var truck="trucks/"+this.sno
        database.ref(truck).set({
            //date:this.date,
            sno:this.sno,
            destination:this.destination,
            //driver_license:this.driverLicense,
            //driver_mobile:this.driverPhone,
           // goods_weight:this.weight,
           // party_name: this.partyName,
          //  pod: this.deliveryStatus,
          ///  truck_id:this.truckId,
          //  vehicle_type:this.vehicleType
        })

    }
   updateTruckInfo()
    {
        var truck="trucks/"+this.sno
        database.ref(truck).update({
            //date:this.date,
            
            destination:this.destination,
            //driver_license:this.driverLicense,
            //driver_mobile:this.driverPhone,
           // goods_weight:this.weight,
           // party_name: this.partyName,
          //  pod: this.deliveryStatus,
          ///  truck_id:this.truckId,
          //  vehicle_type:this.vehicleType
        })

    }
    
    static viewTruckInfo()
    {
        //var truck="trucks/"+this.sno
        var truckInfoRef = database.ref('trucks');
        truckInfoRef.on("value",(data)=>{
            this.truckInform=data.val();
            console.log(this.truckInform)

        })
    }
    
}