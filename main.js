var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();
function st()
{
    recog.start();
}
recog.onresult = function(event){
    console.log(event);
    eg = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = eg;
    if(eg == "take a selfie")
    {
        speak()
    }
    
}
function speak()
{
    var synth = window.speechSynthesis;
    sd = "taking your selfie in 5 seconds"
    ut = new SpeechSynthesisUtterance(sd);
    synth.speak(ut);
    Webcam.attach("#camera")
    setTimeout(function (){
        pic();
        save()
    },5000)
}
Webcam.set({
height:270, width:360,image_format:'jpg',jpg_quality:90
});
camera = document.getElementById("camera")
function pic()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img src="+data_uri+" id='pictur'>"
    })
}
function save()
{
    l = document.getElementById('lins');
    p = document.getElementById('pictur').src;
    l.href = p;
    l.click()
}