var samsungRemote = require("samsung-remote");

module.exports = function(RED) {
    
    function samsungTV(config) {
        RED.nodes.createNode(this, config);
		this.ip = config.ip;
		this.command = config.command;
		this.name = config.name;
		this.remote = new samsungRemote({ip:this.ip});
		var node = this;
		
        this.on('input', function (msg) {
            
            var command = node.command || msg.command;			
			if(!command){
                msg.success = false;
                msg.err = "no command defined for samsungTV!";
                node.warn(msg.err);
				node.send(msg);
            }else{            
				node.remote.send(command, function callback(err) {
					if (err) {
						msg.success = false;
						msg.err = err;
						node.warn(msg.err);
					} else {
						msg.success = true;
					}
					node.send(msg);
				});
            }
            
        });
    }

    RED.nodes.registerType("samsungTV", samsungTV);
}