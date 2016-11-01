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
let STONEPROBBILITY=0.5;
let ONETILESIZE=64;
let manhadun=0;


class tile extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.bitmap=new egret.Bitmap();
        this.bitmap.x=0;
        this.bitmap.y=0;
        this.addChild(this.bitmap);

        this.weight=0;
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
    constructor(){
        super();
        this.myMap=new Array();
        this.objectOnMap=new Array();
        for(let i=0;i<ROW*LIST;i++){
            if(Math.random()<=STONEPROBBILITY){
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
            return Math.abs(end.x / ONETILESIZE - start.x / ONETILESIZE) + Math.abs(end.y / ONETILESIZE - start.y / ONETILESIZE);
    }
    private sortWeight(a:tile,b:tile){
        return a.weight-b.weight;
    }

    public findWay(startTile: tile, endTile: tile): boolean {
        startTile=this.myMap[startTile.y*ROW+startTile.x];
        endTile=this.myMap[endTile.y*ROW+endTile.x];
        if(endTile.walkAble==false){
            console.log("("+endTile.x+","+endTile.y+")"+"不可达");
            return false;
        }
        let currentTile: tile = startTile;
        currentTile.weight=0;
        let openList:tile[]=new Array();
        let closedList:tile[]=new Array();
        while (currentTile != endTile) {
            closedList.push(currentTile);
            let tempOpenList:tile[]=new Array();
            for (let i = currentTile.x - 1*ONETILESIZE; i < currentTile.x + 2*ONETILESIZE; i+=ONETILESIZE) {
                for (let j = currentTile.y - 1*ONETILESIZE; j < currentTile.y + 2*ONETILESIZE; j+=ONETILESIZE) {
                    if (i < 0 || j < 0 || j>9*ONETILESIZE ||i>9*ONETILESIZE) {
                        continue;
                    }
                    //计算G函数步进
                    let dg = 0;
                    if ((i == currentTile.x - 1*ONETILESIZE && j == currentTile.y) || (i == currentTile.x + 1*ONETILESIZE && j == currentTile.y) || (i == currentTile.x && j == currentTile.y - 1*ONETILESIZE) || (i == currentTile.x && j == currentTile.y + 1*ONETILESIZE)) {
                        dg = 1;
                    } else {
                        dg = 1.4;
                    }
                    
                    let testTile: tile = this.myMap[(j/ONETILESIZE) * ROW + i/ONETILESIZE];
                    
                    console.log("当前判断砖块坐标：" + "(" + i/ONETILESIZE + "," + j/ONETILESIZE + ")");
                    //判断是否为当前地面
                    if (i == currentTile.x && j == currentTile.y) {
                        continue;
                    }
                    //判断8向联通的地面是否可走，不可走则跳过此次判断
                    else if (testTile.walkAble == false) {
                        continue;
                    }
                    //判断是否在未考察序列
                    else if (testTile.walkAble) {
                        //testTile到达endtile
                        if (testTile== endTile) {
                            endTile.preTile = testTile;
                            console.log("("+endTile.x+","+endTile.y+")"+"已达到");
                            return true;
                        }
                        //计算testtile权值
                        else if (openList.indexOf(testTile) == -1 && closedList.indexOf(testTile)==-1) {
                            tempOpenList.push(testTile);
                            //console.log("openlist +"+"("+testTile.x+","+testTile.y+")");
                            testTile.weight = currentTile.weight + dg + this.estimulate(testTile, endTile, manhadun);
                            testTile.preTile = currentTile;
                        }
                    }
                }
            }
            if (openList.indexOf(currentTile) != -1) {
                let p=openList.indexOf(currentTile);
                for(let i=p;i<openList.length-1;i++){
                    openList[i]=openList[i+1];
                }
                openList.pop();
                //console.log("openlist -"+"("+currentTile.x+","+currentTile.y+")");
            }
            if(tempOpenList.length!=0){
                tempOpenList.sort(this.sortWeight);
                currentTile = tempOpenList.shift();;
                for(let i=0;i<tempOpenList.length;i++){
                    openList.push(tempOpenList[i]);
                }
                console.log("此次判断最小权值：" + currentTile.weight);
                console.log("此次选择点坐标：（"+currentTile.x+","+currentTile.y+")");
            }
            else if (openList.length != 0 ) {
                openList.sort(this.sortWeight);
                currentTile=openList[0];
                console.log("当前点已经无路可走");
                console.log("选择开放列表中的最小权值：" + currentTile.weight);
                console.log("开放列表中选择点坐标：（"+currentTile.x+","+currentTile.y+")");
            } else {
                console.log("当前判断列表为空且开放列表为空，未找到路径")
                return false;
            }
        }

    }
}