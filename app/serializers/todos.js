import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractArray : function(store,primaryType,payload){
		payload = {todos: payload};
		return this._super(store,primaryType,payload);
	},

	extractSingle : function(store,primaryType,payload,recordId){
		payload = {todo: payload};
		return this._super(store,primaryType,payload,recordId);
	},
	serializeIntoHash : function(hash,type,snapshot,options){
		var json = this.serialize(snapshot,{includeId : true});
		Object.keys(json).forEach(function(key) {
			hash[key] = json[key];
		});
	}
});
