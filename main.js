function startclasification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qHzuY2doJ/model.json', modalready);
}

function modalready(){
    classifier.classify(gotresults)
}

function gotresults(error,results) {
    if (error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() *255 ) + 1;
        random_number_g = Math.floor(Math.random() *255 ) + 1;
        random_number_b = Math.floor(Math.random() *255 ) + 1;

        document.getElementById("result_lable").innerHTML ="I can hear - "+results[0].label;
        document.getElementById("result_comnfidense").innerHTML = 'accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";

        document.getElementById("result_lable").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_comnfidense").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById('cat');
        img1=document.getElementById('dog');
        img2=document.getElementById('cow');
        img3=document.getElementById('bgnoise');
        img4=document.getElementById('goat');
        img5=document.getElementById('horse');
        
    
        if (results[0].label == "Background Noise") {
      img.src = 'cat.png';
      img1.src = 'dog.png'; 
      img2.src = 'cow.png';
      img3.src = 'bgnoise.gif';
      img4.src = 'goat.png';
      img5.src = 'horse.png'
        }
        
        else if (results[0].label == "Cat") {
        
      img.src = 'cat.gif'; 
      img1.src = 'dog.png';
     img2.src = 'cow.png';
     img3.src = 'bgnoise.png'
     img4.src = 'goat.png';
     img5.src = 'horse.png'
}

        else if (results[0].label == "Cow") {

      img.src = 'cat.png'; 
      img1.src = 'dog.png';
      img2.src = 'cow.gif';
      img3.src = 'bgnoise.png';
      img4.src = 'goat.png';
      img5.src = 'horse.png'
      
        }

        else if (result[0].label == "Dog") {

            img.src = 'cat.png'; 
            img1.src = 'dog.gif';
            img2.src = 'cow.png';
            img3.src = 'bgnoise.png'
            img4.src = 'goat.png';
            img5.src = 'horse.png'
                    }

        else if (result[0].label == "Goat") {

         img.src = 'cat.png'; 
        img1.src = 'dog.png';
        img2.src = 'cow.png';
        img3.src = 'bgnoise.png'
        img4.src = 'goat.gif';
        img5.src = 'horse.png'
        }  
        
        else {

         img.src = 'cat.png'; 
        img1.src = 'dog.png';
        img2.src = 'cow.png';
        img3.src = 'bgnoise.png'
        img4.src = 'goat.png';
        img5.src = 'horse.gif'

                    }



 console.log('got result');
                }
}