// http://www.codewars.com/r/tvuXLg

function Fruit(type, geoArea) {
    //this = {}
    this.type = type;
    this.geoArea = geoArea
    //returns this
    }
    
    Fruit.prototype.needsHeat = function(){
      if(this.geoArea === 'tropical') {
        return true;
      } 
      return false;
    }
    
    function Apple(appleStuff){
      //this = {}
      console.log("at the beginning:", this)
      //inherit fruit class
      Fruit.call(this, 'Apple', 'Northern Equitorial')
      console.log('Halfway through', this);
      this.variety = appleStuff.variety;
      this.color = appleStuff.color;
      console.log("at the end", this)
      // return this
    }
    
    Apple.prototype = Object.create(Fruit.prototype)
    Apple.prototype.isGoodInPie = function(){
      return true;
    }
    const banana = new Fruit('Banana', 'tropical');
    
    
    const apple = new Apple('Honeycrisp', 'Orangered');
    console.log(apple.needsHeat());
    console.log(banana.needsHeat());
    
    console.log(apple.isGoodInPie());
    // console.log(banana.isGoodInPie());
    
    
    
    const dan = {
      name: 'Dan'
    }
    function saysHiToFriend(friend){
      console.log(`${this.name} says hi to ${friend}`);
    }
    
    saysHiToFriend.call(dan, 'Stefan')