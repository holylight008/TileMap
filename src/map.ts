let mapJason=[
    { x: 0, y: 0, walkAble: false },
    { x: 64, y: 0, walkAble: false },
    { x: 128, y: 0, walkAble: false },
    { x: 192, y: 0, walkAble: false },
    { x: 256, y: 0, walkAble: false },
    { x: 320, y: 0, walkAble: false },
    { x: 384, y: 0, walkAble: false },
    { x: 448, y: 0, walkAble: false },
    { x: 512, y: 0, walkAble: false },
    { x: 576, y: 0, walkAble: false },

    { x: 0, y: 64, walkAble: false },
    { x: 64, y: 64, walkAble: false },
    { x: 128, y: 64, walkAble: false },
    { x: 192, y: 64, walkAble: false },
    { x: 256, y: 64, walkAble: false },
    { x: 320, y: 64, walkAble: false },
    { x: 384, y: 64, walkAble: false },
    { x: 448, y: 64, walkAble: false },
    { x: 512, y: 64, walkAble: false },
    { x: 576, y: 64, walkAble: false },

    { x: 0, y: 128, walkAble: false },
    { x: 64, y: 128, walkAble: false },
    { x: 128, y: 128, walkAble: false },
    { x: 192, y: 128, walkAble: false },
    { x: 256, y: 128, walkAble: false },
    { x: 320, y: 128, walkAble: false },
    { x: 384, y: 128, walkAble: false },
    { x: 448, y: 128, walkAble: false },
    { x: 512, y: 128, walkAble: false },
    { x: 576, y: 128, walkAble: false },

    { x: 0, y: 192, walkAble: false },
    { x: 64, y: 192, walkAble: false },
    { x: 128, y: 192, walkAble: false },
    { x: 192, y: 192, walkAble: false },
    { x: 256, y: 192, walkAble: false },
    { x: 320, y: 192, walkAble: false },
    { x: 384, y: 192, walkAble: false },
    { x: 448, y: 192, walkAble: false },
    { x: 512, y: 192, walkAble: false },
    { x: 576, y: 192, walkAble: false },

    { x: 0, y: 256, walkAble: false },
    { x: 64, y: 256, walkAble: false },
    { x: 128, y: 256, walkAble: false },
    { x: 192, y: 256, walkAble: false },
    { x: 256, y: 256, walkAble: false },
    { x: 320, y: 256, walkAble: false },
    { x: 384, y: 256, walkAble: false },
    { x: 448, y: 256, walkAble: false },
    { x: 512, y: 256, walkAble: false },
    { x: 576, y: 256, walkAble: false },

    { x: 0, y: 320, walkAble: false },
    { x: 64, y: 320, walkAble: false },
    { x: 128, y: 320, walkAble: false },
    { x: 192, y: 320, walkAble: false },
    { x: 256, y: 320, walkAble: false },
    { x: 320, y: 320, walkAble: false },
    { x: 384, y: 320, walkAble: false },
    { x: 448, y: 320, walkAble: false },
    { x: 512, y: 320, walkAble: false },
    { x: 576, y: 320, walkAble: false },

    { x: 0, y: 384, walkAble: false },
    { x: 64, y: 384, walkAble: false },
    { x: 128, y: 384, walkAble: false },
    { x: 192, y: 384, walkAble: false },
    { x: 256, y: 384, walkAble: false },
    { x: 320, y: 384, walkAble: false },
    { x: 384, y: 384, walkAble: false },
    { x: 448, y: 384, walkAble: false },
    { x: 512, y: 384, walkAble: false },
    { x: 576, y: 384, walkAble: false },

    { x: 0, y: 448, walkAble: false },
    { x: 64, y: 448, walkAble: false },
    { x: 128, y: 448, walkAble: false },
    { x: 192, y: 448, walkAble: false },
    { x: 256, y: 448, walkAble: false },
    { x: 320, y: 448, walkAble: false },
    { x: 384, y: 448, walkAble: false },
    { x: 448, y: 448, walkAble: false },
    { x: 512, y: 448, walkAble: false },
    { x: 576, y: 448, walkAble: false },

    { x: 0, y: 512, walkAble: false },
    { x: 64, y: 512, walkAble: false },
    { x: 128, y: 512, walkAble: false },
    { x: 192, y: 512, walkAble: false },
    { x: 256, y: 512, walkAble: false },
    { x: 320, y: 512, walkAble: false },
    { x: 384, y: 512, walkAble: false },
    { x: 448, y: 512, walkAble: false },
    { x: 512, y: 512, walkAble: false },
    { x: 576, y: 512, walkAble: false },

    { x: 0, y: 576, walkAble: false },
    { x: 64, y: 576, walkAble: false },
    { x: 128, y: 576, walkAble: false },
    { x: 192, y: 576, walkAble: false },
    { x: 256, y: 576, walkAble: false },
    { x: 320, y: 576, walkAble: false },
    { x: 384, y: 576, walkAble: false },
    { x: 448, y: 576, walkAble: false },
    { x: 512, y: 576, walkAble: false },
    { x: 576, y: 576, walkAble: false },
];

let ROW=10;
let LIST=10;
let LINKAREA=8;
let ONETILESIZE=64;
let manhadun=0;

class tile extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.bitmap=new egret.Bitmap();
        this.bitmap.x=0;
        this.bitmap.y=0;
        this.addChild(this.bitmap);

        this.weight=-1;
        this.preTile=null;
    }
    public walkAble:boolean;
    public bitmap:egret.Bitmap;
    public weight:number;
    public preTile:tile;
}

class MainMap extends egret.DisplayObjectContainer{
    private myMap:tile[];
    private objectOnMap:egret.DisplayObjectContainer[];
    private closedList:tile[];
    private openList:tile[];
    constructor(){
        super();
        this.myMap=new Array();
        this.objectOnMap=new Array();
        this.openList=new Array();
        this.closedList=new Array();
        for(let i=0;i<ROW*LIST;i++){
            if(Math.random()<0.5){
                mapJason[i].walkAble=false;
            }else{
                mapJason[i].walkAble=true;
            }
        }

        mapJason[0].walkAble=true;


        for(let i=0;i<ROW*LIST;i++){
            this.myMap[i]=new tile();
            this.myMap[i].walkAble=mapJason[i].walkAble;
            this.myMap[i].x=mapJason[i].x;
            this.myMap[i].y=mapJason[i].y;
            if(this.myMap[i].walkAble){
                this.myMap[i].bitmap.texture=RES.getRes("path_jpg");
            }else{
                this.myMap[i].bitmap.texture=RES.getRes("wall_jpg");
            }
            this.addChild(this.myMap[i]);
        }
    }
    public addObject(x:egret.DisplayObjectContainer):void{
        this.objectOnMap.push(x);
    }
    public delObject(x:egret.DisplayObjectContainer):boolean{
        let temp=this.objectOnMap.indexOf(x);
        if(temp!=-1){
            this.objectOnMap.splice(temp);
            return true;
        }else{
            console.log("Not Find");
        }
    }
    public searchObject(x:egret.DisplayObjectContainer):number{
        let temp=this.objectOnMap.indexOf(x);
        if(temp!=-1){
            return temp;
        }else{
            console.log("Not Find");
        }
    }


    private estimulate(start:tile,end:tile,method:number):number{
        if (method == 0)
            return Math.abs(end.x - start.x) + Math.abs(end.y - start.y);
    }
    private sortWeight(a:tile,b:tile){
        return a.weight-b.weight;
    }
    public findWay(startTile:tile,endTile:tile):boolean{
        this.closedList.push(startTile);
        for(let i=startTile.x-1;i<startTile.x+2;i++){
            for(let j=startTile.y-1;j<startTile.y+2;j++){
                if(i<0 || j<0){
                    continue;
                }
                //计算G函数步进
                let dg=1;
                if((j==startTile.y-1 ||j==startTile.y+1) && (i==startTile.x-1 || i==startTile.x+1)){
                    dg=1;
                }else{
                    dg=1.4;
                }
                let testTile:tile=new tile();
                testTile= this.myMap[j*ROW+i];
                console.log(j*ROW+i);
                //判断是否为当前地面
                if(i==startTile.x && j==startTile.y){
                    continue;
                }
                //判断8向联通的地面是否可走，不可走则跳过此次判断
                else if(testTile.walkAble==false){
                    continue;
                }
                //判断是否在已考察序列
                else if(this.closedList.indexOf(testTile)!=-1){
                    //若通过starttileG函数权值更小，则更新G函数
                    if(startTile.weight+dg<testTile.weight){
                        testTile.weight=startTile.weight+dg;
                        testTile.preTile=startTile;
                    }
                }
                //判断是否在未考察序列
                else if(this.openList.indexOf(testTile)!=-1){
                    //testTile到达endtile，递归结束
                    if(testTile.x==endTile.x && testTile.y==endTile.y){
                        endTile.preTile=testTile;
                        return true;
                    }
                    //计算testtile权值
                    else{
                        testTile.weight=startTile.weight+dg+this.estimulate(testTile,endTile,manhadun);
                        testTile.preTile=startTile;
                        this.openList.push(testTile);
                    }
                }
            }
        }
        if(this.openList.indexOf(startTile)!=-1){
            this.openList.splice(this.openList.indexOf(startTile));
        }
        this.openList.sort(this.sortWeight);
        let minWeight:tile=this.openList[0];
        console.log(minWeight.weight);
        return this.findWay(minWeight,endTile);
    }
}