
var MainCanvas = require("MainCanvas");
cc.Class({
    extends: cc.Component,

    properties: {
        currentNum:0,

         wrongChooseButton:{
           type:cc.Button,
           default:null
	     },

         buttonA:{
            type:cc.Button,
            default:null
		 },
         buttonB:{
            type:cc.Button,
            default:null
		 },


         rightMarks:[cc.Sprite],


         chooseCompletedBool:false,
         
         wrongChooseButtonOpacity : 255,

         imageIndex : 1 ,

         gameSuccessTimer:0,

         mainCanvas:{
           default:null,
           type:MainCanvas
		 }

    
    },

   

    chooseCompleted(){
       cc.log("Choose completed");
       this.chooseCompletedBool = true;
        
        for(var i in this.rightMarks){
           this.rightMarks[i].node.active = false;        
		}

     
	},
    update(dt){
      if  (this.chooseCompletedBool)
      {
        this.wrongChooseButtonOpacity -= 20;
        this.wrongChooseButton.node.opacity = this.wrongChooseButtonOpacity;
        this.buttonA.node.x += (-140 - this.buttonA.node.x ) * dt * 5 ;
        this.buttonB.node.x += (160 - this.buttonB.node.x  ) * dt * 5 ;  
        this.wrongChooseButton.node.x += 10;
	  }
      if   (this.imageIndex ==5)
      {
        
         this.gameSuccessTimer+=dt;
         if (this.gameSuccessTimer>1){
           cc.log("Game Success");
           this.imageIndex=6;
           this.mainCanvas.gameSuccess();
		 }
	  }


	},

    
});
