var width = 500;
var height = 500;

function update(activeAnchor) {
    var group = activeAnchor.getParent();

    var topLeft = group.get('.topLeft')[0];
    var topRight = group.get('.topRight')[0];
    var bottomRight = group.get('.bottomRight')[0];
    var bottomLeft = group.get('.bottomLeft')[0];
    var image = group.get('Image')[0];

    var anchorX = activeAnchor.getX();
    var anchorY = activeAnchor.getY();

    // update anchor positions
    switch (activeAnchor.getName()) {
        case 'topLeft':
            topRight.setY(anchorY);
            bottomLeft.setX(anchorX);
            break;
        case 'topRight':
            topLeft.setY(anchorY);
            bottomRight.setX(anchorX);
            break;
        case 'bottomRight':
            bottomLeft.setY(anchorY);
            topRight.setX(anchorX);
            break;
        case 'bottomLeft':
            bottomRight.setY(anchorY);
            topLeft.setX(anchorX);
            break;
    }

    image.position(topLeft.position());

    var width = topRight.getX() - topLeft.getX();
    var height = bottomLeft.getY() - topLeft.getY();
    if(width && height) {
        image.width(width);
        image.height(height);
    }
}
function addAnchor(group, x, y, name) {
    var stage = group.getStage();
    var layer = group.getLayer();

    var anchor = new Konva.Circle({
        x: x,
        y: y,
        stroke: '#666',
        fill: '#ddd',
        strokeWidth: 2,
        radius: 8,
        name: name,
        draggable: true,
        dragOnTop: false
    });

    anchor.on('dragmove', function() {
        update(this);
        layer.draw();
    });
    anchor.on('mousedown touchstart', function() {
        group.setDraggable(false);
        this.moveToTop();
    });
    anchor.on('dragend', function() {
        group.setDraggable(true);
        layer.draw();
    });
    // add hover styling
    anchor.on('mouseover', function() {
        var layer = this.getLayer();
        document.body.style.cursor = 'pointer';
        this.setStrokeWidth(4);
        layer.draw();
    });
    anchor.on('mouseout', function() {
        var layer = this.getLayer();
        document.body.style.cursor = 'default';
        this.setStrokeWidth(2);
        layer.draw();
    });

    group.add(anchor);
}

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();
stage.add(layer);

// Bandana
function drawBandana(){
    var bandanaImg = new Konva.Image({
        width: 341,
        height: 400
    });

    var bandanaGroup = new Konva.Group({
        x: 180,
        y: 50,
        draggable: true
    });
    
    layer.add(bandanaGroup);

    bandanaGroup.add(bandanaImg);
    addAnchor(bandanaGroup, 0, 0, 'topLeft');
    addAnchor(bandanaGroup, 341, 0, 'topRight');
    addAnchor(bandanaGroup, 341, 401, 'bottomRight');
    addAnchor(bandanaGroup, 0, 401, 'bottomLeft');

    var imageObj1 = new Image();
    imageObj1.onload = function() {
        bandanaImg.image(imageObj1);
        layer.draw();
    };
    imageObj1.src = 'assets/img/bigitems/bandana.png';

    bandanaGroup.on('mouseenter', showAnchors);
    bandanaGroup.on('mouseleave', hideAnchors);
}

// Cap
function drawCap(){
    var capImg = new Konva.Image({
        width: 400,
        height: 247
    });

    var capGroup = new Konva.Group({
        x: 20,
        y: 110,
        draggable: true
    });
    layer.add(capGroup);
    capGroup.add(capImg);
    addAnchor(capGroup, 0, 0, 'topLeft');
    addAnchor(capGroup, 400, 0, 'topRight');
    addAnchor(capGroup, 400, 247, 'bottomRight');
    addAnchor(capGroup, 0, 247, 'bottomLeft');

    var imageObj2 = new Image();
    imageObj2.onload = function() {
        capImg.image(imageObj2);
        layer.draw();
    };
    imageObj2.src = 'assets/img/bigitems/cap.png';

    capGroup.on('mouseenter', showAnchors);
    capGroup.on('mouseleave', hideAnchors);
}

// Glass
function drawGlass(){
    var glassImg = new Konva.Image({
        width: 400,
        height: 80
    });

    var glassGroup = new Konva.Group({
        x: 20,
        y: 110,
        draggable: true
    });
    layer.add(glassGroup);
    glassGroup.add(glassImg);
    addAnchor(glassGroup, 0, 0, 'topLeft');
    addAnchor(glassGroup, 400, 0, 'topRight');
    addAnchor(glassGroup, 400, 80, 'bottomRight');
    addAnchor(glassGroup, 0, 80, 'bottomLeft');

    var imageObj3 = new Image();
    imageObj3.onload = function() {
        glassImg.image(imageObj3);
        layer.draw();
    };
    imageObj3.src = 'assets/img/bigitems/glass.png';

    glassGroup.on('mouseenter', showAnchors);
    glassGroup.on('mouseleave', hideAnchors);
}

// Neck
function drawNeck(){
    var neckImg = new Konva.Image({
        width: 295,
        height: 295
    });

    var neckGroup = new Konva.Group({
        x: 20,
        y: 110,
        draggable: true
    });
    layer.add(neckGroup);
    neckGroup.add(neckImg);
    addAnchor(neckGroup, 0, 0, 'topLeft');
    addAnchor(neckGroup, 295, 0, 'topRight');
    addAnchor(neckGroup, 295, 295, 'bottomRight');
    addAnchor(neckGroup, 0, 295, 'bottomLeft');

    var imageObj4 = new Image();
    imageObj4.onload = function() {
        neckImg.image(imageObj4);
        layer.draw();
    };
    imageObj4.src = 'assets/img/bigitems/neck.png';

    neckGroup.on('mouseenter', showAnchors);
    neckGroup.on('mouseleave', hideAnchors);
}

// Smoke
function drawSmoke(){
    var smokeImg = new Konva.Image({
        width: 240,
        height: 194
    });

    var smokeGroup = new Konva.Group({
        x: 20,
        y: 110,
        draggable: true
    });
    layer.add(smokeGroup);
    smokeGroup.add(smokeImg);
    addAnchor(smokeGroup, 0, 0, 'topLeft');
    addAnchor(smokeGroup, 240, 0, 'topRight');
    addAnchor(smokeGroup, 240, 194, 'bottomRight');
    addAnchor(smokeGroup, 0, 194, 'bottomLeft');

    var imageObj5 = new Image();
    imageObj5.onload = function() {
        smokeImg.image(imageObj5);
        layer.draw();
    };
    imageObj5.src = 'assets/img/bigitems/smoke.png';

    smokeGroup.on('mouseenter', showAnchors);
    smokeGroup.on('mouseleave', hideAnchors);
}

// Smoke 2
function drawSmoke2(){
    var smoke2Img = new Konva.Image({
        width: 240,
        height: 194
    });

    var smoke2Group = new Konva.Group({
        x: 20,
        y: 110,
        draggable: true
    });
    layer.add(smoke2Group);
    smoke2Group.add(smoke2Img);
    addAnchor(smoke2Group, 0, 0, 'topLeft');
    addAnchor(smoke2Group, 240, 0, 'topRight');
    addAnchor(smoke2Group, 240, 194, 'bottomRight');
    addAnchor(smoke2Group, 0, 194, 'bottomLeft');

    var imageObj6 = new Image();
    imageObj6.onload = function() {
        smoke2Img.image(imageObj6);
        layer.draw();
    };
    imageObj6.src = 'assets/img/bigitems/smoke2.png';

    smoke2Group.on('mouseenter', showAnchors);
    smoke2Group.on('mouseleave', hideAnchors);
}

// Read Url
function previewFile() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    document.querySelector('#uploadImage .upload-mask').remove();
    var mainImg = new Konva.Image({
        width: 500,
        height: 500
    });

    var mainGroup = new Konva.Group({
        x: 0,
        y: 0,
        draggable: true
    });
    layer.add(mainGroup);
    mainGroup.add(mainImg);
    addAnchor(mainGroup, 0, 0, 'topLeft');
    addAnchor(mainGroup, 500, 0, 'topRight');
    addAnchor(mainGroup, 500, 500, 'bottomRight');
    addAnchor(mainGroup, 0, 500, 'bottomLeft');

    var mainObj = new Image();
    mainObj.onload = function() {
        mainImg.image(mainObj);
        layer.draw();
    };
    mainObj.src = reader.result;
    mainGroup.on('mouseenter', showAnchors);
    mainGroup.on('mouseleave', hideAnchors);

  }

  if (file) {
    reader.readAsDataURL(file);
  }
}

function drawLogo(){
    var logoImg = new Konva.Image({
        width: 167,
        height: 20
    });

    var logoGroup = new Konva.Group({
        x: 310,
        y: 470,
        draggable: true
    });
    layer.add(logoGroup);
    logoGroup.add(logoImg);
    //addAnchor(logoGroup, 0, 0, 'topLeft');
    //addAnchor(logoGroup, 386, 0, 'topRight');
    //addAnchor(logoGroup, 386, 46, 'bottomRight');
    //addAnchor(logoGroup, 0, 46, 'bottomLeft');

    var logoObj = new Image();
    logoObj.onload = function() {
        logoImg.image(logoObj);
        layer.draw();
    };
    logoObj.src = 'assets/img/logo.png';

}

document.getElementById('save').addEventListener('click', function() {
    drawLogo();
    setTimeout(function(){
    var dataURL = stage.toDataURL();
    window.open(dataURL);
    },20);
}, false);

function showAnchors() {
  this.find('Circle').show();
  layer.draw();
}

function hideAnchors() {
  this.find('Circle').hide();
  layer.draw();
}