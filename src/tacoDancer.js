var TacoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer tacoDancer" src="assets/taco.gif" alt="Taco">');
  this.setPosition(top, left);
};

TacoDancer.prototype = Object.create(Dancer.prototype);

TacoDancer.prototype.constructor = TacoDancer;