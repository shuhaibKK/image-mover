const data = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1334434982/es/foto/fantasma-aterrador-sobre-fondo-oscuro.jpg?s=2048x2048&w=is&k=20&c=bNSkbN8eIZfxsKeDjh_3L877SYbZUlVGynJh18G_j8c=",
  },
  {
    id: 2,
    image:"https://img.freepik.com/fotos-premium/casa-espeluznante-embrujada_999671-2896.jpg",
  },
  {
    id: 3,
    image: "https://img.freepik.com/fotos-premium/casa-noche-terror-casa-embrujada-dulce-hogar-casa-aterradora-imagen-fondo-pantalla-luna-roja-caza-fantasmas_921835-748.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais",
  },
]
const image=document.querySelector(".rimimage");
const right=document.querySelector(".s2img");


initial=1
window.addEventListener("DOMContentLoaded",()=>{
    const store=data[initial];
    image.src=store.image;
})

function name(sem){
  const store=data[initial];
  image.src=store.image;
}

right.addEventListener("click",function(){
  initial++

  if(initial>data.length - 1){
       initial=0
  }

   name(initial)
})




const dataTwo=[
  {
    id:1,
    image2:"https://images.inc.com/uploaded_files/image/1920x1080/getty_542959856_2000133320009280405_365308.jpg"
  },
  {
    id:2,
    image2:" https://hips.hearstapps.com/hmg-prod/images/woman-meditation-on-an-ocean-side-rock-royalty-free-image-1616630391.?crop=0.668xw:1.00xh;0.293xw,0&resize=640:* "
  },
  {
    id:3,
    image2:"https://www.acet-global.com/uploads/3/0/1/8/30185773/published/8061578.jpg?1607643668  "
  }
]

const left=document.querySelector('.s1img');
const immage=document.querySelector(".limmage");

intax=0

window.addEventListener("DOMContentLoaded",()=>{
  const toppest=dataTwo[intax];
  immage.src=toppest.image2
})
function colo(yes){
  const toppest=dataTwo[intax];
  immage.src=toppest.image2
}
left.addEventListener("click",()=>{
  intax++

  if(intax>dataTwo.length-1){
          intax=0
  }
  
  colo(intax)
})
