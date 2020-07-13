
var GameManager = require("GameManager");


cc.Class({
    extends: cc.Component,

    properties: {
       num:0,
       testbool:true,

       gameManager:{
        default:null,
        type:GameManager
	   },

       rightAudio:{
        type:cc.AudioSource,
        default:null
	   },

       wrongAudio:{
        type:cc.AudioSource,
        default:null
	   },

       rightMark:{
        type:cc.Sprite,
        default:null
	   },

       wrongMark:{
        type:cc.Sprite,
        default:null
	   },

       wrongMarkB:{
        type:cc.Sprite,
        default:null
	   },
       wrongMarkBOpacity:0,

       numLabel:{
        type:cc.Label,
        default:null
	   },

       used:true,
       firstTouch:true,
	   rightIndex:false,

    },

    testFun(){
        
        if  (this.gameManager.chooseCompletedBool){
        
          if(this.num == this.gameManager.imageIndex){
              if (!this.rightIndex)
              {
                 this.gameManager.imageIndex++;
                 cc.log("Right choose");
                 cc.log(this.num,this.gameManager.imageIndex);

                 this.rightAudio.play();
                 this.numLabel.node.active = true;
                 this.rightIndex = true;
			  }else{
              
			  }
             
		  }else
          {
             
              
			  
              if(this.rightIndex){
              
			  }else{
              this.wrongMarkBOpacity=0;
              this.wrongAudio.play();
			  }

              
		  }


		}else{
         this.used ?this.chooseRight() : this.chooseWrong();
        this.firstTouch = false;
		}
    
       
    },

    chooseRight(){
     

      this.firstTouch ? this.gameManager.currentNum++: null;
      
      cc.log("right choose");
      cc.log(this.gameManager.currentNum);
      this.rightAudio.play();
      this.rightMark.node.active = true;

      if (this.gameManager.currentNum ==5){
     //  cc.log("choose completed");
         this.gameManager.chooseCompleted();

	  }


	},

    chooseWrong(){
      cc.log("wrong choose");
      this.wrongAudio.play();
      this.wrongMark.node.active = true;
	},



    start(){
     //this.node.x =0;
     //  this.audioSource = this.getComponent(AudioSource);
    },

     update (dt) {
       

       this.wrongMarkBOpacity-= 10;
       this.wrongMarkB.node.opacity = this.wrongMarkBOpacity;
     
     },
});
