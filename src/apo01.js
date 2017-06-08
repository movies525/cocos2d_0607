var apo01Layer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        cc.log(size.width+"X"+size.height);

        var colorLayer = new cc.LayerColor(
            cc.color(255,255,0),
            209,55
        );
        colorLayer.x = size.width/2;
        colorLayer.y = size.height/2;
        colorLayer.ignoreAnchorPointForPosition(false);
        this.addChild(colorLayer);

        var mylabel = new cc.LabelTTF("My Game","Arial",48);
        var labelSize = mylabel.getContentSize();
        cc.log(labelSize.width + 'x'+labelSize.height);
        mylabel.x = size.width/2;
        mylabel.y = size.height/2;
        mylabel.setColor(cc.color(0,13,255));
        this.addChild(mylabel);
        return true;
    },
});

var apo01Scene = cc.Scene.extend({
    ctor:function(){
        this._super();
        cc.log('a');
        var layer = new apo01Layer();
        this.addChild(layer);
    }
});
