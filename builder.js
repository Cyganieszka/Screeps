

module.exports ={  
    

    
    doWork:function (creep) {
        
        var roadToRepair = creep.room.find(FIND_STRUCTURES, { filter: function(object){ return (object.hits < object.hitsMax && object.hits< 4000); } });
        var construction = creep.room.find(FIND_CONSTRUCTION_SITES);
        

        
          if(creep.name.slice(0,5)=='W11N2' && creep.carry.energy == 0){
              var    link4=Game.getObjectById(Game.rooms['W11N2'].memory.link4);
              creep.moveTo(link4);
              link4.transferEnergy(creep);
          }else{
            
        
        if(construction.length>0  ){
		  
		            creep.moveTo(construction[0]);
			        creep.build(construction[0]);
			        

		  }else if(roadToRepair.length>0  ){
		      
		       var object =roadToRepair[0];
		        if(creep.name.slice(-1)==1){
                   object =roadToRepair[roadToRepair.length-1];
                   console.log(object)
                 }
		       


                     if(object.hits < object.hitsMax && object.hits< 4000){
                        creep.moveTo(object);
                        creep.repair(object);
                    }


		  }else {
        
                
                if(creep.carry.energy > 0) {
                    creep.moveTo(creep.room.controller);
                    creep.upgradeController(creep.room.controller);
                }
          
        }
        
          }

    }//function
}

    
