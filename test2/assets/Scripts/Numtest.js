
var GameManagerB = require("GameManagerB");


cc.Class({
    extends: cc.Component,

    properties: {
       
       num:1,
       
       gameManagerB:{
        default:null,
        type : GameManagerB,
	   },

       numMark:{
        default : null,
        type : cc.Label,
	   },

       rightAudio:{
        default:null,
        type:cc.AudioSource,
	   },

       wrongAudio:{
        default:null,
        type:cc.AudioSource,
	   },

       wrongMark:{
        default:null,
        type:cc.Sprite,

	   },

       wrongMarkOpacity: 255 ,
       firstClick: true
      

    },

   

    start () {

    },

    clickTest(){
        this.num == this.gameManagerB.currentNum ?this.rightChoose():this.wrongChoose();
      
        cc.log(this.gameManagerB.currentNum);
	},

    rightChoose(){
      cc.log("RightChoose"),
      this.firstClick = false;
      this.gameManagerB.currentNum++;

      this.numMark.node.active = true;
      this.rightAudio.play();
	},

    wrongChoose(){

      if  (this.firstClick){
       cc.log("WrongChoose");
      this.wrongAudio.play();
      this.wrongMark.node.active = true;
      this.wrongMarkOpacity =255;
	  }

     
	},



     update (dt) {
     
       
       this.wrongMarkOpacity -= 5;
       this.wrongMark.node.opacity = this.wrongMarkOpacity;
     },
});
