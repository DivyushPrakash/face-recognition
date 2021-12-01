Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:100
});

Webcam.attach("#webcam");

function clickimage(){
    Webcam.snap(function(photothalink){
    document.getElementById("clickedimage").innerHTML='<img id="selfie" src="'+photothalink+'">';
    });

}

console.log(ml5.version);
 
var myfacemodel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-MW9E2KCe/model.json",modelloaded);

function modelloaded(){
    console.log("My model loaded");
}

function check(){
photo=document.getElementById("selfie");
myfacemodel.classify(photo,getresult);
}

function getresult(error,result){
    if(error){
        console.error(error);
    }
     else {
         console.log(result);
         document.getElementById("name").innerHTML=result[0].label;
         document.getElementById("accuracy").innerHTML=result[0].confidence;
     }
}