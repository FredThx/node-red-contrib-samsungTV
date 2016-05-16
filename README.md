node-red-contrib-samsungTV
========================
A <a href="http://nodered.org" target="_new">Node-RED</a> node for samsung smart TV.


Install
-------
Run command on Node-RED installation directory
npm install node-red-contrib-samsungTV

Tested on UE40EU6030WXYF TV model

Usage
------
- Drag an drop a samsungTV node
- set ip of the TV
- select a command in the list
or
- assign msg.command with a command string (ex : "KEY_POWEROFF")

TODO
------
Find a solution for "POWER ON".


Thanks
------
Thanks to Andrei Zharov for samsung-remote.

Thanks to jcoppens for node-red-contrib-internetattv. I've rewritten his code to work with me.