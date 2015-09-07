
module.exports ={
    
    doWork:function (creep) {
    
    
    var toAttack=0;
    var toHeal=0;
    var minHist=-1;
    var minAttackHits=-1;
      var hostiles = {};
      
       	  for(var name in Game.creeps) {
       	      	var cr = Game.creeps[name];
       	      
            if(cr.owner=='Riveczka'){
                if(cr.hits<cr.hitsMax){
                    if(toHeal==0 || minHits> (cr.hits/cr.hitsMax) ){
                        minHits=cr.hits/cr.hitsMax;
                        toHeal=cr;
                    }
                }
            }else{
                if(toAttack==0 || minAttackHits > (cr.hits/cr.hitsMax)){
                    minAttackHits=cr.hits/cr.hitsMax;
                    toAttack=cr;
                }
                
            }
            break;
        }
        
        var whatToDo='';
        
        if(toHeal==0 && toAttack!=0){
            watToDo='attack';
        }else if(toHeal!=0 && toAttack==0){
            whatToDo='heal';
        }else if(toHeal!=0 && toAttack!=0){
            if(toHeal.memory.action=='attack'){
                whatToDo='heal';
            }else{
                watToDo='attack';
            }
        }
        
        creep.memory.action='whatToDo';
    	if(whatToDo=='attack'){
    	    
    	    if(creep.pos.inRangeTo(toAttack, 3)) {
                creep.rangedAttack(toAttack);
            }else{
                creep.moveTo(toAttack);
            }
    	}else 
    	if(whatToDo=='heal'){
    	    creep.memory.attackCreep='yes';
    	    creep.moveTo(toAttack);
    	    creep.heal(toHeal);
    	    
    	}else{
    	    if(creep.name.slice(-1)==0){
    	        creep.moveTo(14,24)
    	    }else if(creep.name.slice(-1)==1){
    	        creep.moveTo(19,47)
    	    }
    	    
    	     
    	}
    	
 }
}