

module.exports ={
    
doWork:function (creep) {
    
    var source= Game.getObjectById(Game.rooms['W11N2'].memory.link2);

    var storage = creep.room.storage;
    if(storage==undefined)return;
    
//     for(var name in Game.creeps) {
    
// 	var cr = Game.creeps[name];
	
// 	if(cr.memory.role=='harvester' && creep.name.slice(-1)==cr.name.slice(-1) && creep.room==cr.room ){
//             source=cr;
//             break;
//     }

//     }
  
  if(creep.carry.energy ===0 && source!=0){
        creep.moveTo(source)
        source.transferEnergy(creep);
  }else{
         creep.moveTo(storage)
        creep.transferEnergy(storage);
  }

    
    }  
}