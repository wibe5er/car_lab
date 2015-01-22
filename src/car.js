function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
	
}


Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;

	// QUESTION TO REVIEW LATER: WHY CAN'T WE USE 'THIS' instead of 'newOwner' just like we did in the 
	// constructor and protptype file example
};

Car.prototype.paint = function(newColor){
	this.color = (newColor);
};

Car.prototype.start = function () {
	this.state = "on";
};

Car.prototype.off = function () {
	this.state = "off";
};

Car.prototype.driveTo = function (destination) {
	if (this.state === "on") {
	console.log("driving to " + destination);
	}
};

Car.prototype.pick_up = function (name) {
	if (this.state === "on") {
		console.log("driving to pick up " + name);
		this.passengers.push(name);
	}
};

Car.prototype.dropOff = function (name) {
	if (this.passengers.indexOf(name) !== -1 && this.state === "on") {
		this.passengers.pop(name);
	}
};





module.exports=Car;