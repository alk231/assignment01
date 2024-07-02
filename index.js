document.getElementById("button").addEventListener('click',()=>{
  console.log("clicked");
  let [color1,color2]=colorChange();
  document.body.style.backgroundImage=`linear-gradient(to right,${color1},${color2}`;
  document.getElementById('para').textContent=color1+' '+color2;
});

colorChange=()=>{
  const color1=randomChange();
  const color2=randomChange();
  return [color1,color2];
}

randomChange=()=>{
  const letter="0123456789ABCDEF";
  let color="#";
  for(i=0;i<6;i++)
    {
      color=color+letter[Math.floor(Math.random()*15)];
    }
    return color;
}