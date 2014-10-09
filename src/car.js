function Car(make, model, color){
  this.make = make;
  this.model = model;
  this.year = new Date().getFullYear();
  this.color = color;
  this.previousOwners = [];
  this.state = "off";
  this.currentOwner = "manufacturer";
  this.passengers = [];
}



Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(){
  this.state="on";
};

Car.prototype.off = function(){
  this.state="off";
};

Car.prototype.driveTo = function(destination){
  if(this.state === "on"){
    return "Driving to "+destination;
  }
};

Car.prototype.park = function(){
  if(this.state === "off"){
    return "Parked!!!";
  }
};

Car.prototype.pickUp = function(friend) {
  if(this.state === "on"){
    this.passengers.push(friend);
    return "Driving to pick up "+friend
  }
};

Car.prototype.dropOff = function(friend) {
  if(this.state === "on"){
    if(this.passengers.indexOf(friend) != -1){
      this.passengers.splice(this.passengers.indexOf(friend),1);
    }
  }
};

module.exports=Car;