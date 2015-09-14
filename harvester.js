
module.exports  ={
	doWork: function(creep)
	{
    
    var sources = creep.room.find(FIND_SOURCES);
    var storage = creep.room.storage;
    
    var link1 =0;
    var link2 =0;
    
    var spawn=0;
    
    if(creep.name.slice(0,5)=='E12S1'){
        spawn=Game.spawns.Spawn1;
	}

    


	if(creep.name.slice(0,5)=='E12S1' ){

	  if(creep.carry.energy < creep.carryCapacity) {
				creep.moveTo(sources[creep.name.slice(-1)]);
				creep.harvest(sources[creep.name.slice(-1)]);
		}else{
			creep.moveTo(spawn);
			creep.transferEnergy(spawn);
		}

	return;
	}





        
	   
	  

	
	}
}