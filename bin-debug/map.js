var mapJason = [
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
var ROW = 10;
var LIST = 10;
var LINKAREA = 8;
var ONETILESIZE = 64;
var manhadun = 0;
var tile = (function (_super) {
    __extends(tile, _super);
    function tile() {
        _super.call(this);
        this.bitmap = new egret.Bitmap();
        this.bitmap.x = 0;
        this.bitmap.y = 0;
        this.addChild(this.bitmap);
        this.weight = -1;
        this.preTile = null;
    }
    var d = __define,c=tile,p=c.prototype;
    return tile;
}(egret.DisplayObjectContainer));
egret.registerClass(tile,'tile');
var MainMap = (function (_super) {
    __extends(MainMap, _super);
    function MainMap() {
        _super.call(this);
        this.myMap = new Array();
        this.objectOnMap = new Array();
        this.openList = new Array();
        this.closedList = new Array();
        for (var i = 0; i < ROW * LIST; i++) {
            if (Math.random() < 0.5) {
                mapJason[i].walkAble = false;
            }
            else {
                mapJason[i].walkAble = true;
            }
        }
        mapJason[0].walkAble = true;
        for (var i = 0; i < ROW * LIST; i++) {
            this.myMap[i] = new tile();
            this.myMap[i].walkAble = mapJason[i].walkAble;
            this.myMap[i].x = mapJason[i].x;
            this.myMap[i].y = mapJason[i].y;
            if (this.myMap[i].walkAble) {
                this.myMap[i].bitmap.texture = RES.getRes("path_jpg");
            }
            else {
                this.myMap[i].bitmap.texture = RES.getRes("wall_jpg");
            }
            this.addChild(this.myMap[i]);
        }
    }
    var d = __define,c=MainMap,p=c.prototype;
    p.addObject = function (x) {
        this.objectOnMap.push(x);
    };
    p.delObject = function (x) {
        var temp = this.objectOnMap.indexOf(x);
        if (temp != -1) {
            this.objectOnMap.splice(temp);
            return true;
        }
        else {
            console.log("Not Find");
        }
    };
    p.searchObject = function (x) {
        var temp = this.objectOnMap.indexOf(x);
        if (temp != -1) {
            return temp;
        }
        else {
            console.log("Not Find");
        }
    };
    p.estimulate = function (start, end, method) {
        if (method == 0)
            return Math.abs(end.x - start.x) + Math.abs(end.y - start.y);
    };
    p.sortWeight = function (a, b) {
        return a.weight - b.weight;
    };
    p.findWay = function (startTile, endTile) {
        this.closedList.push(startTile);
        for (var i = startTile.x - 1; i < startTile.x + 2; i++) {
            for (var j = startTile.y - 1; j < startTile.y + 2; j++) {
                if (i < 0 || j < 0) {
                    continue;
                }
                //计算G函数步进
                var dg = 1;
                if ((j == startTile.y - 1 || j == startTile.y + 1) && (i == startTile.x - 1 || i == startTile.x + 1)) {
                    dg = 1;
                }
                else {
                    dg = 1.4;
                }
                var testTile = new tile();
                testTile = this.myMap[j * ROW + i];
                console.log(j * ROW + i);
                //判断是否为当前地面
                if (i == startTile.x && j == startTile.y) {
                    continue;
                }
                else if (testTile.walkAble == false) {
                    continue;
                }
                else if (this.closedList.indexOf(testTile) != -1) {
                    //若通过starttileG函数权值更小，则更新G函数
                    if (startTile.weight + dg < testTile.weight) {
                        testTile.weight = startTile.weight + dg;
                        testTile.preTile = startTile;
                    }
                }
                else if (this.openList.indexOf(testTile) != -1) {
                    //testTile到达endtile，递归结束
                    if (testTile.x == endTile.x && testTile.y == endTile.y) {
                        endTile.preTile = testTile;
                        return true;
                    }
                    else {
                        testTile.weight = startTile.weight + dg + this.estimulate(testTile, endTile, manhadun);
                        testTile.preTile = startTile;
                        this.openList.push(testTile);
                    }
                }
            }
        }
        if (this.openList.indexOf(startTile) != -1) {
            this.openList.splice(this.openList.indexOf(startTile));
        }
        this.openList.sort(this.sortWeight);
        var minWeight = this.openList[0];
        console.log(minWeight.weight);
        return this.findWay(minWeight, endTile);
    };
    return MainMap;
}(egret.DisplayObjectContainer));
egret.registerClass(MainMap,'MainMap');
//# sourceMappingURL=map.js.map