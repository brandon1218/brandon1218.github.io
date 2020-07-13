

cc.Class({
    extends: cc.Component,

    properties: {
      
        carNode: {
        type: cc.Node,
        default: null
    }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      
     let { carNode } = this;
  
    let mouseDown = false;
   
    carNode.on(cc.Node.EventType.MOUSE_DOWN, (event)=>{
        mouseDown = true;
    });
   
    carNode.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{
        if(!mouseDown) return;
       
        let delta = event.getDelta();
       
        carNode.x = carNode.x + delta.x;
        carNode.y = carNode.y + delta.y;
    });
   
    carNode.on(cc.Node.EventType.MOUSE_UP, (event)=>{
        mouseDown = false;
    });


    
    
    },

    start () {

    },

    // update (dt) {},
});
