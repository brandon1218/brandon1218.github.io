// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       

       bgmAudio:{
        default:null,
        type:cc.AudioSource
	   },
       gameSuccessAudio:{
        default:null,
        type:cc.AudioSource
	   },
       successEffect:{
        default:null,
        type:cc.Node
	   }
    },
 
 

    reloadScene(){
       cc.director.loadScene("Scene");
	},

    muteButton(){
       this.bgmAudio.pause();
	},

    start () {
       this.bgmAudio.play();
    },
    gameSuccess(){
       this.bgmAudio.pause();
       this.gameSuccessAudio.play();
       this.successEffect.active = true;
	}
   
});
