module.exports ={
    
doWork:function (creep) {
    
    var source=0;
    var target=0;
    var spawn=0;
    
    if(creep.name.slice(0,5)=='E12S1'){
        spawn=Game.spawns.Spawn1;
    }


    
//    console.log(creep.name);
// 	  console.log(spawn);

    var storage = creep.room.storage;
    
  
	
	if(storage!=undefined){
	    source=storage;
	}

	  for(var name in Game.creeps) {
             
        	var cr = Game.creeps[name];
        	
        	if(source==0){
            	if(cr.memory.role=='harvester' && creep.name.slice(-1)==cr.name.slice(-1) && creep.room==cr.room ){
                        source=cr;
                }
        	}
            
            if(target==0){
                if(cr.memory.role=='builder'&& creep.name.slice(-1)==cr.name.slice(-1) && creep.room==cr.room ){
                            target=cr;
                }
            }
             
    }
	
	//console.log(target);
	
	



    var emptyExtension=0;
    

        
    var structs= creep.room.find(FIND_MY_STRUCTURES,{filter:{structureType :STRUCTURE_EXTENSION}})
        for(var ext in structs){
            if(structs[ext].energy<50){
                target=structs[ext];
                break;
            }
        }
   
        
        if(spawn.energy <300){
               target=spawn;
            
        }
        
         if(source==0)source=spawn;
 
    
    if(creep.carry.energy ==0 ){
        creep.moveTo(source);
        source.transferEnergy(creep);
        
    }else{
          creep.moveTo(target);
          creep.transferEnergy(target);
    }
    
    
    }  
}