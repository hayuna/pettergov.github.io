let audioContext, source, analyser, dataArray, ctx;

window.onload = function() {
  const file = document.querySelector("#file");
  const btn = document.querySelector("#btn");
  const canvas = document.querySelector(".canvas");
  let audio = document.querySelector(".audio");


    // Function for click button Play
    btn.addEventListener('click', function() {
      createAudio();
      btn.disabled = true;
      file.disabled = true;

      createAudioNodes();
      initCanvas();
      audio.play(); 
    });

    ///////////////////--Function for button choose a file-////
    file.onchange = function() {
      createAudio();
      btn.disabled = true;
      file.disabled = true;

      const files = this.files; // FileList containing File objects selected by the user (DOM File API)
          
      audio.src = URL.createObjectURL(files[0]); // Creates a DOMString containing the specified File object
      
      createAudioNodes();
      
      initCanvas();
    }
    
    ///////////////////--Function Create Audio--///////////////
    function createAudio() {
      // Create an audio object like in html <audio>
      audio = new Audio();
      audio.src = 'Dee Yan-Key - The Game.mp3';
      audio.controls = true; // add play button and song-line;
      audio.loop = true; //song will play again and again
      audio.autoplay = true;
      audio.classList.add('audio');
      document.querySelector('#container').appendChild(audio); // Add audio obj to div class="audio"
    }

    ///////////////////--Function Create Audio Nodes--/////////
    function createAudioNodes() {
      // create the audio context
      audioContext = new AudioContext(); // (Interface) Audio-processing graph

      // setup a analyser
      analyser = audioContext.createAnalyser();

      // create a buffer source node
      source = audioContext.createBufferSource();

      // and connect to destination 
      source.connect(audioContext.destination);

      source = audioContext.createMediaElementSource(audio); // Give the audio context an audio source,
      // to which can then be played and manipulated
     // analyser = audioContext.createAnalyser(); // Create an analyser for the audio context

      source.connect(analyser); // Connects the audio context source to the analyser
      analyser.connect(audioContext.destination); // End destination of an audio graph in a given context
      // Sends sound to the speakers or headphones

      /////////////// ANALYSER FFTSIZE ////////////////////////
        // analyser.fftSize = 32;
        // analyser.fftSize = 64;
        // analyser.fftSize = 128;
        // analyser.fftSize = 256;
        // analyser.fftSize = 512;
        // analyser.fftSize = 1024;
        // analyser.fftSize = 2048;
        // analyser.fftSize = 4096;
        // analyser.fftSize = 8192;
        analyser.fftSize = 16384;
        // analyser.fftSize = 32768;

        // (FFT) is an algorithm that samples a signal over a period of time
        // and divides it into its frequency components (single sinusoidal oscillations).
        // It separates the mixed signals and shows what frequency is a violent vibration.

        // (FFTSize) represents the window size in samples that is used when performing a FFT

        // Lower the size, the less bars (but wider in size)
        ///////////////////////////////////////////////////////////
      
      //dataArray = new Uint8Array(analyser.frequencyBinCount); // Converts to 8-bit unsigned integer array
      // At this point dataArray is an array with length of bufferLength but no values
      //console.log('DATA-ARRAY: ', dataArray) // Check out this array of frequency values!
    }

    ///////////////////--Function init Canvas--////////////////
    function initCanvas() {
      ///////// <CANVAS> INITIALIZATION //////////
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx = canvas.getContext("2d");
      ///////////////////////////////////////////

      let canvasWidth = canvas.width;
      let canvasHeight = canvas.height;
      
      // find the center of the window
      centerX = canvasWidth / 2;
      centerY = canvasHeight / 2.3;

      ///////////////////--Function visualize--//////////////////
      function visualize() {
    
      requestAnimationFrame(visualize); // Takes callback function to invoke before visualize
      dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      let radius = 150;

          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      /////////////// Draw a circle//////////////////////
      ///////////////////////////////////////////////////
      function getRadians(degrees) {
        return (Math.PI/180)*degrees;
      }
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, getRadians(360));
      ctx.stroke();
      //Clear the canvas
      //ctx.clearRect(0, 0, canvas.width, canvas.height);

      let bars = 150; // amount of bars

      if(window.innerWidth <= 320){
        radius = 75;
        bars = 200;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        centerY = canvasHeight / 2.7;
      }
      /////////////////////////////////////////////////
      //////////////////////////////////////////////////      

      for(let i = 0; i < bars; i++) {
        //divide a circle into equal parts
        rads = 20 //Math.PI * 2 / bars;
        barHeight = dataArray[i] / 2;
        barWidth = 7;          

        // set coordinates
        x = centerX + Math.cos(rads * i) * (radius * 0.5);
        y = centerY + Math.sin(rads * i) * (radius * 0.5);
        x_end = centerX + Math.cos(rads * i)*(radius + barHeight);
        y_end = centerY + Math.sin(rads * i)*(radius + barHeight);

        //draw a bar
        drawBar(x, y, x_end, y_end, barWidth, dataArray[i]);
      }

      // Drawing a bar
      function drawBar(x1, y1, x2, y2, width){
      
        let grd = ctx.createLinearGradient(0, 0, 0, 600);
            grd.addColorStop(0, "rgba(255, 0, 0, 0.6)");
            grd.addColorStop(0.5, "rgb(0, 0, 255, 0.6)");
            grd.addColorStop(1, "rgba(255, 0, 0, 0.6)");
            
            

        //let lineColor = 'rgb(64, 255, 0, 0.6)';
        ctx.strokeStyle = grd; //lineColor; 
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();   
      }    
    }
    visualize();  
  }
}
