function Tuple(t,e,n,i){this.currentSymbol=t,this.nextSymbol=e,this.direction=n,this.nextState=i}function State(t){this.name=t,this.tuples=[],console.log("Created state named "+this.name)}State.prototype.addTuple=function(t){this.tuples.push(t)},State.prototype.getName=function(){return this.name};