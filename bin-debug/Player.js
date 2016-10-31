var VELOCITY = 0.2;
var oneFaceNumber = 4;
var faceNumber = 4;
var RIGHT = 0;
var DOWN = 1;
var LEFT = 2;
var UP = 3;
var MoveState = (function () {
    function MoveState(player, TargetX, TargetY) {
        this.player = player;
        this.CurrentPicture = 0;
        this.count = 0;
        this.TargetX = TargetX;
        this.TargetY = TargetY;
        var temp = ["r1_png", "r2_png", "r3_png", "r4_png", "d1_png", "d2_png", "d3_png", "d4_png", "l1_png", "l2_png", "l3_png", "l4_png", "u1_png", "u2_png", "u3_png", "u4_png"];
        this.MovePicture = new Array();
        for (var i = 0; i < faceNumber; i++) {
            this.MovePicture[i] = new Array();
        }
        for (var i = 0, count = 0; i < faceNumber; i++) {
            for (var j = 0; j < oneFaceNumber; j++) {
                this.MovePicture[i][j] = RES.getRes(temp[count]);
                count++;
            }
        }
        this.currentFace = DOWN;
    }
    var d = __define,c=MoveState,p=c.prototype;
    p.OnEnter = function () {
        var _this = this;
        var dx = this.TargetX - this.player.x;
        var dy = this.TargetY - this.player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        egret.Tween.get(this.player).to({ x: this.TargetX, y: this.TargetY }, distance / this.player.volocity).call(function () {
            _this.player.Macine.ChangeState(new IdleState(_this.player));
        }, this);
        if (dy >= 0) {
            if (Math.abs(dy) >= Math.abs(dx)) {
                this.targetFace = this.currentFace;
            }
            else if (dx >= 0) {
                this.targetFace = (this.currentFace + faceNumber - 1) % faceNumber;
            }
            else {
                //console.log("!!!")
                this.targetFace = (this.currentFace + 1) % faceNumber;
            }
        }
        else {
            if (Math.abs(dy) >= Math.abs(dx)) {
                this.targetFace = (this.currentFace + 2) % faceNumber;
            }
            else if (dx >= 0) {
                this.targetFace = (this.currentFace + faceNumber - 1) % faceNumber;
            }
            if (dx < 0) {
                this.targetFace = (this.currentFace + 1) % faceNumber;
            }
        }
        this.currentFace = this.targetFace;
        //console.log("("+this.player.x+","+this.player.y+")"+"dy="+dy+"  dx="+dx+"  targetFace="+this.targetFace);
        egret.startTick(this.enter, this);
    };
    p.enter = function () {
        this.count++;
        if (this.count % 15 == 0) {
            this.CurrentPicture++;
            this.CurrentPicture %= this.MovePicture.length;
            this.player.MyPlayer.texture = this.MovePicture[this.targetFace][this.CurrentPicture];
            this.count = 0;
        }
        return true;
    };
    p.OnExit = function () {
        egret.stopTick(this.enter, this);
        egret.Tween.removeTweens(this.player);
        this.count = 0;
    };
    return MoveState;
}());
egret.registerClass(MoveState,'MoveState',["State"]);
var IdleState = (function () {
    function IdleState(player) {
        this.player = player;
        this.CurrentPicture = 0;
        this.count = 0;
        var temp = ["i1_png", "i2_png", "i3_png", "i4_png", "i5_png"];
        this.IdlePicture = new Array();
        for (var i = 0; i < temp.length; i++) {
            this.IdlePicture.push(RES.getRes(temp[i]));
        }
    }
    var d = __define,c=IdleState,p=c.prototype;
    p.OnEnter = function () {
        egret.startTick(this.enter, this);
    };
    p.enter = function () {
        this.count++;
        if (this.count % 30 == 0) {
            this.CurrentPicture++;
            this.CurrentPicture %= this.IdlePicture.length;
            this.player.MyPlayer.texture = this.IdlePicture[this.CurrentPicture];
            this.count = 0;
        }
        return true;
    };
    p.OnExit = function () {
        egret.stopTick(this.enter, this);
        egret.Tween.removeTweens(this.player);
        this.count = 0;
    };
    return IdleState;
}());
egret.registerClass(IdleState,'IdleState',["State"]);
var StateMacine = (function () {
    function StateMacine(x) {
        this.Myplayer = x;
        this.CurrentState = new IdleState(x);
        this.CurrentState.OnEnter();
    }
    var d = __define,c=StateMacine,p=c.prototype;
    p.ChangeState = function (e) {
        this.CurrentState.OnExit();
        e.OnEnter();
        this.CurrentState = e;
    };
    return StateMacine;
}());
egret.registerClass(StateMacine,'StateMacine');
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.volocity = VELOCITY;
        this.MyPlayer = this.createBitmapByName("b1_png");
        this.Macine = new StateMacine(this);
        this.addChild(this.MyPlayer);
        this.width = this.MyPlayer.width;
        this.height = this.MyPlayer.height;
        this.MyPlayer.x = -25;
        this.MyPlayer.y = -80;
    }
    var d = __define,c=Player,p=c.prototype;
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Player;
}(egret.DisplayObjectContainer));
egret.registerClass(Player,'Player');
//# sourceMappingURL=Player.js.map