function Tape(t){t.length||(t=[" "]),this.tape=t,this.currentIndex=0}function Result(t,e){this.tape=t,this.result=e}function Machine(t,e,n){this.inputTape=new Tape(t),this.states=e,this.startState=n}Tape.prototype.currentSymbol=function(){return this.tape[this.currentIndex]},Tape.prototype.moveRight=function(){this.currentIndex--,-1==this.currentIndex&&(this.tape.unshift(" "),this.currentIndex=0)},Tape.prototype.moveLeft=function(){this.currentIndex++,this.currentIndex==this.tape.length&&this.tape.push(" ")},Tape.prototype.replaceCurrentSymbol=function(t){"*"!=t&&(this.tape[this.currentIndex]=t)},Machine.prototype.run=function(){var t=this.inputTape,e=this.getStateNamed(this.startState);for(console.log("Start State Name: "+this.startState),console.log("Start State Object: "+e);;){console.log("Current State: "+e);var n=this.getTupleFromState(e,t.currentSymbol());if(t.replaceCurrentSymbol(n.nextSymbol),"accept"==n.nextState||"reject"==n.nextState)return new Result(t,n.nextState);e=this.getStateNamed(n.nextState),"l"==n.direction?t.moveLeft():"r"==n.direction&&t.moveRight()}},Machine.prototype.validateStates=function(){var t=[];return this.states.forEach(function(e){t.push(e.name)}),this.states.forEach(function(e){return t.contains(e.nextState)?void 0:!1}),!0},Machine.prototype.getStateNamed=function(t){var e=null;return this.states.some(function(n){return console.log("Found state "+n.name),n.name==t||"*"==n.name?(e=n,!0):!1}),e},Machine.prototype.getTupleFromState=function(t,e){var n=null;return t.tuples.some(function(t){return t.currentSymbol==e||"*"==t.currentSymbol?(n=t,!0):!1}),n};