var PatrickDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer patrickDancer" src="assets/patrick.gif" alt="Patrick">');
  this.setPosition(top, left);
};

PatrickDancer.prototype = Object.create(Dancer.prototype);

PatrickDancer.prototype.constructor = PatrickDancer;