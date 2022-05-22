var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        imageobject = Img;

        imageobject.scaleToWidth(700);
        imageobject.scaleToHeight(510);
        imageobject.set({
            top:0,
            left:0
        });
        canvas.add(imageobject);
    });
	
};

function play(){
	i = 0;
	for (var i = 0; i < Infinity; i++) {		
	document.getElementById("myAudio").play();
	}
}
