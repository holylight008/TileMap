let VELOCITY:number=0.2;
let oneFaceNumber=4;
let faceNumber=4;
let RIGHT=0;
let DOWN=1;
let LEFT=2;
let UP=3;
interface State{
    OnEnter():void;
    OnExit():void;
}

class MoveState implements State{
    private MovePicture:egret.Texture[][];
    private currentFace:number;
    private player:Player;
    private CurrentPicture:number;
    private count:number;
    private TargetX:number;
    private TargetY:number;
    private targetFace:number;
    constructor(player:Player,TargetX:number,TargetY:number){
        this.player=player;
        this.CurrentPicture=0;
        this.count=0;
        this.TargetX=TargetX;
        this.TargetY=TargetY;
        let temp=["r1_png","r2_png","r3_png","r4_png","d1_png","d2_png","d3_png","d4_png","l1_png","l2_png","l3_png","l4_png","u1_png","u2_png","u3_png","u4_png"];
        this.MovePicture=new Array();
        for(let i=0;i<faceNumber;i++){
            this.MovePicture[i]=new Array();
        }
        for(let i=0,count=0;i<faceNumber;i++){
            for(let j=0;j<oneFaceNumber;j++){
                this.MovePicture[i][j]=RES.getRes(temp[count]);
                count++;
            }
        }
        this.currentFace=DOWN;
    }
    OnEnter():void{
        let dx=this.TargetX-this.player.x;
        let dy=this.TargetY-this.player.y;
        let distance=Math.sqrt(dx*dx+dy*dy);
        egret.Tween.get(this.player).to({x:this.TargetX,y:this.TargetY},distance/this.player.volocity).call(()=>{
            this.player.Macine.ChangeState(new IdleState(this.player));
        },this);
        
        if(dy>=0){
            if(Math.abs(dy)>=Math.abs(dx)){
                this.targetFace=this.currentFace;
            }else if(dx>=0){
                this.targetFace=(this.currentFace+faceNumber-1)%faceNumber;
            }else{
                //console.log("!!!")
                this.targetFace=(this.currentFace+1)%faceNumber;
            }
        }else{
            if(Math.abs(dy)>=Math.abs(dx)){
                this.targetFace=(this.currentFace+2)%faceNumber;
            }else if(dx>=0){
                this.targetFace=(this.currentFace+faceNumber-1)%faceNumber;
            }if(dx<0){
                this.targetFace=(this.currentFace+1)%faceNumber;
            }
        }
        this.currentFace=this.targetFace;
        //console.log("("+this.player.x+","+this.player.y+")"+"dy="+dy+"  dx="+dx+"  targetFace="+this.targetFace);
        egret.startTick(this.enter,this);
    }
    private enter():boolean{
        this.count++;
        if(this.count%15==0){
            this.CurrentPicture++;
            this.CurrentPicture%=this.MovePicture.length;
            this.player.MyPlayer.texture=this.MovePicture[this.targetFace][this.CurrentPicture];
            this.count=0;
        }
        return true;
    }
    OnExit():void{
        egret.stopTick(this.enter,this);
        egret.Tween.removeTweens(this.player);
        this.count=0;
    }
}



class IdleState implements State{
    private player:Player;
    private IdlePicture:egret.Texture[];
    private CurrentPicture:number;
    private count:number;
    constructor(player:Player){
        this.player=player;
        this.CurrentPicture=0;
        this.count=0;
        let temp=["i1_png","i2_png","i3_png","i4_png","i5_png"];
        this.IdlePicture=new Array();
        for(let i=0;i<temp.length;i++){
            this.IdlePicture.push(RES.getRes(temp[i]));
        }
    }
    OnEnter():void{
        egret.startTick(this.enter,this);
    }
    private enter():boolean{
        this.count++;
        if(this.count%30==0){
            this.CurrentPicture++;
            this.CurrentPicture%=this.IdlePicture.length;
            this.player.MyPlayer.texture=this.IdlePicture[this.CurrentPicture];
            this.count=0;
        }
        return true;
    }
    OnExit():void{
        egret.stopTick(this.enter,this);
        egret.Tween.removeTweens(this.player);
        this.count=0;
    }
}



class StateMacine{
    private CurrentState:State;
    private Myplayer:Player;
    public constructor(x:Player){
        this.Myplayer=x;
        this.CurrentState=new IdleState(x);
        this.CurrentState.OnEnter();
    }
    public ChangeState(e:State):void{
        this.CurrentState.OnExit();
        e.OnEnter();
        this.CurrentState = e;
    }

}



class Player extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.volocity=VELOCITY;
        this.MyPlayer=this.createBitmapByName("b1_png");
        this.Macine=new StateMacine(this);
        this.addChild(this.MyPlayer);
        this.width=this.MyPlayer.width;
        this.height=this.MyPlayer.height;
        this.MyPlayer.x=-25;
        this.MyPlayer.y=-80;
    }
    public Macine:StateMacine;
    public MyPlayer:egret.Bitmap;
    public volocity:number;
    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}