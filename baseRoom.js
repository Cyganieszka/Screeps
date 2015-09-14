
var controller;
var spawns;
var extensions;
var links;
var roads;
var walls;
var rampages;
var construction;
var sources;

module.exports = 

	reload: function(room){
		room.memory.constructions = creep.room.find(FIND_CONSTRUCTION_SITES,{
			filter: function(structure)
			{
				return structure.id;
			}
		});
		
		room.memory.constructions = creep.room.find(Game.MY_STRUCTURES, {
			filter: function(structure)
			{
				return (structure.structureType == Game.STRUCTURE_EXTENSION && structure.energy >= 200);
			}
		});
		
	
	},
	
	init: function(room){
		construction = room.memory.constructions;
	
	},

	getRole: function(role)
	{
	
	},

	getRoleBodyParts: function(role)
	{
	
	}
};