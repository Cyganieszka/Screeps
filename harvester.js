
module.exports  ={
	doWork: function(creep)
	{
    
    var sources = creep.room.find(FIND_SOURCES);
    var storage = creep.room.storage;
    
    var link1 =0;
    var link2 =0;
    
    var spawn=0;
    
    if(creep.name.slice(0,5)=='W11N2'){
        spawn=Game.spawns.Spawn1;
        link1 =Game.getObjectById(Game.rooms['W11N2'].memory.link1);
        link2 = Game.getObjectById(Game.rooms['W11N2'].memory.link2);
    }else if(creep.name.slice(0,5)=='W12N2'){
        spawn=Game.spawns.Spawn2;
    }else if(creep.name.slice(0,5)=='W12N3'){
        spawn=Game.spawns.Spawn3;
		link1=Game.getObjectById(Game.rooms['W12N3'].memory.link1);
    }

    


if(creep.name.slice(0,5)=='W12N2' ){

  if(creep.carry.energy < creep.carryCapacity) {
	        creep.moveTo(sources[creep.name.slice(-1)]);
 		    creep.harvest(sources[creep.name.slice(-1)]);
    }else{
        creep.moveTo(storage);
        creep.transferEnergy(storage);
    }

return;
}


if(creep.name.slice(0,5)=='W12N3'){

  if(creep.carry.energy < creep.carryCapacity) {
	        creep.moveTo(sources[creep.name.slice(-1)]);
 		    creep.harvest(sources[creep.name.slice(-1)]);
    }else{
		if(link1.energy<link1.energyCapacity){
			creep.moveTo(link1);
			creep.transferEnergy(link1);
		}else{
			creep.moveTo(storage);
			creep.transferEnergy(storage);
		}
        
    }

return;
}



        
	    if(creep.carry.energy < creep.carryCapacity) {
	        creep.moveTo(sources[creep.name.slice(-1)]);
 		    creep.harvest(sources[creep.name.slice(-1)]);
	    }else if(creep.name.slice(-1)==1 && link1!=undefined){
	    
	        creep.moveTo(link1);
	        creep.transferEnergy(link1);
	    }else if(creep.name.slice(-1)==0 && link2!=undefined){
	    
	        creep.moveTo(link2);
	        creep.transferEnergy(link2);
	    }
	  

	
	}
}