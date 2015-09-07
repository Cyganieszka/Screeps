var harvester = require('harvester');
var builder = require('builder');
var transporter = require('transporter');
var guard = require('guard');
var explorer = require('explorer');
var smallTransporter = require('smallTransporter');
// W11N2  W12N2 W12N2
var W11N2builderNr=[     'W11N2builder0',    'W11N2builder1']
var W11N2transporterNr=[ 'W11N2transporter0','W11N2transporter1']
var W11N2harvesterNr=[   'W11N2harvester0',  'W11N2harvester1']

var W12N2builderNr=[     'W12N2builder0']
var W12N2transporterNr=[ 'W12N2transporter0']
var W12N2harvesterNr=[   'W12N2harvester0']

var W12N3builderNr=[      'W12N3builder0' ]
var W12N3transporterNr=[  'W12N3transporter0']
var W12N3harvesterNr=[    'W12N3harvester0' ]


var guardNr=['guard0','guard1'];
 var distanceHarvesterNr=[];
 var distanceTransporterNr=[];
var smallTransporterNr=['small0'];
var explorerNr=['explorer'];
var distanceBuilderNr=['Dbuilder0','Dbuilder1'];

if(Memory.turn==undefined){
    Memory.turn=0;
}else{
    Memory.turn++;
}
if(Memory.turn>2)Memory.turn=0;

console.log(Game.rooms.W12N2.controller.progress/ Game.rooms.W12N2.controller.progressTotal)

if(Game.rooms['W11N2'].memory.link1==undefined){
Game.rooms['W11N2'].memory.link1= Game.spawns.Spawn1.room.lookForAt('structure', 13,40)[0].id;
}
if(Game.rooms['W11N2'].memory.link2==undefined){
Game.rooms['W11N2'].memory.link2= Game.spawns.Spawn1.room.lookForAt('structure', 26,27)[0].id;
}
if(Game.rooms['W11N2'].memory.link3==undefined){
Game.rooms['W11N2'].memory.link3= Game.spawns.Spawn1.room.lookForAt('structure', 4,29)[0].id;
}
if(Game.rooms['W11N2'].memory.link4==undefined){
Game.rooms['W11N2'].memory.link4= Game.spawns.Spawn1.room.lookForAt('structure', 30,31)[0].id;
}
var link1 =Game.getObjectById(Game.rooms['W11N2'].memory.link1);
var link2 = Game.getObjectById(Game.rooms['W11N2'].memory.link2);
var link3 = Game.getObjectById(Game.rooms['W11N2'].memory.link3);
var link4 = Game.getObjectById(Game.rooms['W11N2'].memory.link4);

if(link1.energy>0 && link1.cooldown==0){
    if(link2.energy<link2.energyCapacity){
        link1.transferEnergy(link2);
    }else{
        link1.transferEnergy(link4);
    }
}
if(link3.energy>0 && link2.energy<link2.energyCapacity && link3.cooldown==0){
    link3.transferEnergy(link2);
}
if(link2.energy>0 && link2.cooldown==0){
    link2.transferEnergy(Game.rooms['W11N2'].storage);
}



for(var name in Game.creeps) {
    
	var creep = Game.creeps[name];
	
	 if(creep.name.slice(0,5)=='W11N2'){
	     
	if(creep.memory.role == 'harvester') {
	   
	    var index = W11N2harvesterNr.indexOf(name);
	    W11N2harvesterNr.splice(index, 1);
		harvester.doWork(creep);
	}
		if(creep.memory.role == 'transporter') {
		    
	   var index = W11N2transporterNr.indexOf(name);
	   W11N2transporterNr.splice(index, 1);
	        
	   transporter.doWork(creep);
    }
		if(creep.memory.role == 'builder') {
	    
		var index = W11N2builderNr.indexOf(name);
    	W11N2builderNr.splice(index, 1);
		
		builder.doWork(creep);
	} 
	     
	        
	    }else if(creep.name.slice(0,5)=='W12N2'){
	        
	        
	if(creep.memory.role == 'harvester') {
	   
	    var index = W12N2harvesterNr.indexOf(name);
	    W12N2harvesterNr.splice(index, 1);
		harvester.doWork(creep);
	}
		if(creep.memory.role == 'transporter') {
		    
	   var index = W12N2transporterNr.indexOf(name);
	   W12N2transporterNr.splice(index, 1);
	        
	   transporter.doWork(creep);
    }
    	if(creep.memory.role == 'builder') {
	    
		var index = W12N2builderNr.indexOf(name);
		W12N2builderNr.splice(index, 1);
		
		builder.doWork(creep);
	} 
	
	        
	    }else if(creep.name.slice(0,5)=='W12N3'){
	        
	if(creep.memory.role == 'harvester') {
	   
	    var index = W12N3harvesterNr.indexOf(name);
	    W12N3harvesterNr.splice(index, 1);
		harvester.doWork(creep);
	}
		if(creep.memory.role == 'transporter') {
		    
	   var index = W12N3transporterNr.indexOf(name);
	   W12N3transporterNr.splice(index, 1);
	        
	   transporter.doWork(creep);
    }
    	if(creep.memory.role == 'builder') {
	    
		var index = W12N3builderNr.indexOf(name);
	W12N3builderNr.splice(index, 1);
		
		builder.doWork(creep);
	} 
	
	    }
	

		if(creep.memory.role == 'distanceHarvester') {
	    var index = distanceHarvesterNr.indexOf(name);
	    distanceHarvesterNr.splice(index, 1);
		distanceHarvester.doWork(creep);
	}
	

    	if(creep.memory.role == 'distanceTransporter') {
		    
	   var index = distanceTransporterNr.indexOf(name);
	   distanceTransporterNr.splice(index, 1);
	        
	   distanceTransporter.doWork(creep);
    }
    
    	if(creep.memory.role == 'smallTransporter') {
		    
	   var index = smallTransporterNr.indexOf(name);
	   smallTransporterNr.splice(index, 1);
	        
	   smallTransporter.doWork(creep);
    }
		    

	
	if(creep.memory.role == 'guard') {
	    var index = guardNr.indexOf(name);
	     guardNr.splice(index, 1);
	     guard.doWork(creep);

    }
    	if(creep.memory.role == 'explorer') {
    	        var index = explorerNr.indexOf(name);
	     explorerNr.splice(index, 1);
        explorer.doWork(creep);
       

    }
    	if(creep.memory.role == 'distanceBuilder') {
    	        var index = distanceBuilderNr.indexOf(name);
	     distanceBuilderNr.splice(index, 1);
        distanceBuilder.doWork(creep);

    }
   
}
//if(Game.spawns.Spawn1==undefined) return;

 var allEnergy=0;
 var potencial=0;

//room1

if(Memory.turn==0){

 var allEnergy=Game.spawns.Spawn1.room.energyAvailable;
 var potencial=Game.spawns.Spawn1.room.energyCapacityAvailable;
 
    
    if(W11N2transporterNr.length && allEnergy>=900 ){
       
             Game.spawns.Spawn1.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], W11N2transporterNr[0], {role: 'transporter'} );

 	}else  if(smallTransporterNr.length &&allEnergy>=300 ){
 		 Game.spawns.Spawn1.createCreep( [CARRY,CARRY,CARRY,CARRY,CARRY,MOVE], smallTransporterNr[0], {role: 'smallTransporter'} );
     
    }else if(W11N2harvesterNr.length &&allEnergy>=900  ){
 	         Game.spawns.Spawn1.createCreep( [WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], W11N2harvesterNr[0], {role: 'harvester'} );
 		
    }else if(W11N2builderNr.length && allEnergy>=1400 ){
        
             Game.spawns.Spawn1.createCreep( [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], W11N2builderNr[0], {role: 'builder'} );
 		
    }else if(guardNr.length && allEnergy>=1100 ){
		Game.spawns.Spawn1.createCreep( [RANGED_ATTACK, RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL, TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH, MOVE,MOVE,MOVE,MOVE], guardNr[0], {role: 'guard'} );
    }

}else if(Memory.turn==1){
//room2

 allEnergy=Game.spawns.Spawn2.room.energyAvailable;
 potencial=Game.spawns.Spawn2.room.energyCapacityAvailable;
 
     if(W12N2transporterNr.length && allEnergy>=300 ){

              Game.spawns.Spawn2.createCreep([CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], W12N2transporterNr[0], {role: 'transporter'} );

 		
 	}else if(W12N2harvesterNr.length && allEnergy>=700 ){

 	        Game.spawns.Spawn2.createCreep( [WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], W12N2harvesterNr[0], {role: 'harvester'} );

 		
    }else if(W12N2builderNr.length && allEnergy>=700 ){
             Game.spawns.Spawn2.createCreep( [WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE], W12N2builderNr[0], {role: 'builder'} );

    }
    
}else if(Memory.turn==2){

//room3
 allEnergy=Game.spawns.Spawn3.room.energyAvailable;
 potencial=Game.spawns.Spawn3.room.energyCapacityAvailable;
 

 

      
    if(W12N3transporterNr.length && allEnergy>=600){

              Game.spawns.Spawn3.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], W12N3transporterNr[0], {role: 'transporter'} );

 		
 	}else if(W12N3harvesterNr.length && allEnergy>=750 ){

 	        Game.spawns.Spawn3.createCreep( [WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], W12N3harvesterNr[0], {role: 'harvester'} );

 		
    }else if(W12N3builderNr.length && allEnergy>=1200 ){
             Game.spawns.Spawn3.createCreep( [WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], W12N3builderNr[0], {role: 'builder'} );

    }
}     
  

     
 
		    
		    