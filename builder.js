

module.exports ={  
    

    
    doWork:function (creep) {
		
		if(creep.memory.toRepair==undefined){
			var roadToRepair = creep.room.find(FIND_STRUCTURES, { filter: function(object){ return (object.hits < (object.hitsMax/2) && object.hits<10000 ); } });
			creep.memory.toRepair=roadToRepair[0];
			
		}

		var toRepair=  Game.getObjectById(creep.memory.toRepair);
		var construction = creep.room.find(FIND_CONSTRUCTION_SITES);

        if(construction.length >0   && (creep.name.slice(-1)==0 || creep.name.slice(-1)==1)){

		            creep.moveTo(construction[0]);
			        creep.build(construction[0]);
			        

		  }else if(toRepair!= undefined &&  (creep.name.slice(-1)==0 || creep.name.slice(-1)==1)){

                    if(toRepair.hits < (toRepair.hitsMax/2) && toRepair.hits<10000 ){
                        creep.moveTo(toRepair);
                        creep.repair(toRepair);

                    }else{
						creep.memory.toRepair=undefined;
						
					}


		  }else {
        
                console.log("controller")
                if(creep.carry.energy > 0) {
                    creep.moveTo(creep.room.controller);
                    creep.upgradeController(creep.room.controller);
                }else{
					var link;
					if(creep.name.slice(0,5)=='W11N2'){
						link=Game.getObjectById(Game.rooms['W11N2'].memory.link4);
						creep.moveTo(link);
						link.transferEnergy(creep);
					}else if(creep.name.slice(0,5)=='W12N3'){
						link=Game.getObjectById(Game.rooms['W12N3'].memory.link2);
						creep.moveTo(link);
						link.transferEnergy(creep);
					}
				}
          
        
          }

    }//function
}

    
