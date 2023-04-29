
  let randomNumber = Math.floor(Math.random()*100);
  let randomNumber2 = Math.floor(Math.random()*100);

  const btnFirst = document.querySelector('.first');
  const btnSecond = document.querySelector('.second');


  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle ='#one';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth =  20;
  // ctx.globalCompositeOperation = 'multiply';


  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = randomNumber;
  let direction = true;
  
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; 
  });


  // function draw(e) {
  //   if(!isDrawing) return;
  //   ctx.lineWidth =  randomNumber;
  //   ctx.strokeStyle =`hsl(${hue}, 100%, 50%)`;
  //   ctx.beginPath();
  //   ctx.moveTo(lastX, lastY);
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   ctx.stroke();
  //   [lastX, lastY] = [e.offsetX, e.offsetY];  //destructuring an array
  //   ctx.lineWidth =  randomNumber2;
  //   hue = randomNumber;
  //   randomNumber = Math.floor(Math.random()*100);
  //   randomNumber2 = Math.floor(Math.random()*100);
  // };
  
  // function draw(e){
    // if(!isDrawing) return;
  //   ctx.moveTo(lastX, lastY);
  //   ctx.lineTo(e.offsetX, e.offsetY);
  //   ctx.stroke();
  //   [lastX, lastY] = [e.offsetX, e.offsetY]; 
  //    hue++;
  //   if(hue >= 360) {
  //     hue = 0;
  //   }
  //   if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //     direction = !direction;
  //   }
  
  //   if(direction) {
  //     ctx.lineWidth++;
  //   } else {
  //     ctx.lineWidth--;
  //   }
  // }

    
  function draw(e){
    if(!isDrawing) return;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.strokeStyle =`hsl(${hue}, 100%, 50%)`;
    [lastX, lastY] = [e.offsetX, e.offsetY]; 
     hue++;
    if(hue >= 360) {
      hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
  
    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
    //  
    //  
    //   ctx.strokeStyle =`hsl(${hue}, 100%, 50%)`;
    //   ctx.beginPath();
    //   ctx.moveTo(lastX, lastY);
    //   ctx.lineTo(e.offsetX, e.offsetY);
    //   ctx.stroke();
    //   [lastX, lastY] = [e.offsetX, e.offsetY];  //destructuring an array
    //   ctx.lineWidth =  randomNumber2;
    //   hue = randomNumber;
    //   randomNumber = Math.floor(Math.random()*100);
    //   randomNumber2 = Math.floor(Math.random()*100);
    // };

  
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
  document.addEventListener('click',);

  btnFirst.addEventListener('click', drawTwo);

