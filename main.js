var harvester = require('harvester');
var builder = require('builder');
var transporter = require('transporter');
var guard = require('guard');
var explorer = require('explorer');
var smallTransporter = require('smallTransporter');
// E12S1  W12N2 W12N2
var E12S1builderNr=[     'E12S1builder0',    'E12S1builder1']
var E12S1transporterNr=[ 'E12S1transporter0','E12S1transporter1']
var E12S1harvesterNr=[   'E12S1harvester0',  'E12S1harvester1']


if(Memory.turn==undefined){
    Memory.turn=0;
}else{
    Memory.turn++;
}
if(Memory.turn>2)Memory.turn=0;




for(var name in Game.creeps) {
    
	var creep = Game.creeps[name];
	
	 if(creep.name.slice(0,5)=='E12S1'){
	     
	if(creep.memory.role == 'harvester') {
	   
	    var index = E12S1harvesterNr.indexOf(name);
	    E12S1harvesterNr.splice(index, 1);
		harvester.doWork(creep);
	}
		if(creep.memory.role == 'transporter') {
		    
	   var index = E12S1transporterNr.indexOf(name);
	   E12S1transporterNr.splice(index, 1);
	        
	   transporter.doWork(creep);
    }
		if(creep.memory.role == 'builder') {
	    
		var index = E12S1builderNr.indexOf(name);
    	E12S1builderNr.splice(index, 1);
		
		builder.doWork(creep);
	} 
	     
	        
	    }
   
}
//if(Game.spawns.Spawn1==undefined) return;

 var allEnergy=0;
 var potencial=0;

//room1


 var allEnergy=Game.spawns.Spawn1.room.energyAvailable;
 var potencial=Game.spawns.Spawn1.room.energyCapacityAvailable;
 
    
    if(E12S1transporterNr.length && allEnergy>=300 ){
       
             Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE,MOVE,MOVE], E12S1transporterNr[0], {role: 'transporter'} );

 	}else if(E12S1harvesterNr.length &&allEnergy>=300  ){
 	         Game.spawns.Spawn1.createCreep( [WORK,WORK,CARRY,MOVE], E12S1harvesterNr[0], {role: 'harvester'} );
 		
    }else if(E12S1builderNr.length && allEnergy>=300 ){
        
             Game.spawns.Spawn1.createCreep( [WORK,WORK,CARRY,MOVE], E12S1builderNr[0], {role: 'builder'} );
 		
    }


}     
  

     
 
		    
		    