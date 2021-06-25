function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("mobilenet",modelLoaded);
}
function draw(){
image(video,0,0,300,250);
classifier.classify(video,gotResult);
}
function preload(){

}
function modelLoaded(){
  console.log("model is Loaded") ;
}
function gotResult(error,result){
if(error){
console.log(error);
}
else{
  console.log(result);
document.getElementById("Object_name").innerHTML=result[0].label;
document.getElementById("Accuracy_name").innerHTML=result[0].confidence.toFixed(3);
}

}

