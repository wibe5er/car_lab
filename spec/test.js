// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    // create a new myCar object each time
    myCar = new Car("Subaru","Outback","Black");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    var year = new Date().getFullYear();
    it('should be the current year', function(){
      expect(myCar.year).to.equal(year);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).to.include.members([]);
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).to.include.members([]);
    });
  });

  describe('#sale', function(){
    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Frank");
      expect(myCar.previousOwners).to.include.members(["manufacturer"]);
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Frank");
      expect(myCar.currentOwner).to.equal("Frank");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("Blue");
      expect(myCar.color).to.equal("Blue");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.equal("off");
    });
  });

  describe("#driveTo", function(){
    it("should not return any value if car is off",function(){
      var x = myCar.driveTo("St. Helena");
      expect(x).to.equal(undefined);
    });
    it("should return Driving to St. Helena",function(){
      myCar.start();
      var x = myCar.driveTo("St. Helena");
      expect(x).to.equal("Driving to St. Helena");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      var x = myCar.park();
      expect(x).to.equal("Parked!!!");
    });

    it('should make sure to only work when the car is off', function(){
      myCar.start();
      var x = myCar.park();
      expect(x).to.equal(undefined);
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp("Laura");
      expect(myCar.passengers).to.include.members(["Laura"]);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.pickUp("Laura");
      expect(myCar.passengers).to.include.members([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp("Laura");
      myCar.dropOff("Laura");
      expect(myCar.passengers).to.include.members([]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pickUp("Laura");
      myCar.off();
      myCar.dropOff("Laura");
      expect(myCar.passengers).to.include.members(["Laura"]);
    });
  });

});


