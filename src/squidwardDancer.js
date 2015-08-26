var SquidwardDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer squidwardDancer" src="assets/squidward.gif" alt="Squidward">');
  this.setPosition(top, left);
};

SquidwardDancer.prototype = Object.create(Dancer.prototype);

SquidwardDancer.prototype.constructor = SquidwardDancer;