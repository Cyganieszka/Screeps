

module.exports  ={
	doWork: function(creep)
	{
    
   
   if(creep.room!==Game.rooms.W12N3){
       
    var exit = FIND_EXIT_TOP;
    creep.moveTo(creep.pos.findClosest(exit));
     console.log( creep.moveTo(creep.pos.findClosest(exit)));
  }else{
      creep.moveTo(creep.room.controller);
    creep.claimController(creep.room.controller);
  }

	}
}