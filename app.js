

let daily = document.querySelector("#daily");
let weekly = document.querySelector("#weekly");
let monthly = document.querySelector("#monthly");

dayHrsA = [[4,3],[6,9],[0,8],[6,5],[2,3],[1,2]];
montHrsA = [[36,30],[20,29],[40,45],[16,15],[12,13],[3,5]];
weekHrsA = [[16,10],[10,19],[20,25],[6,5],[2,3],[2,3]];

let cards = document.querySelectorAll(".card");

// daily.addEventListener("click",()=>{
//   daily.classList.add("selected");
//   weekly.classList.remove("selected");
//   monthly.classList.remove("selected");
//   for(let i = 0;i<cards.length;i++){
//     cards[i].lastElementChild.innerText = `Yesterday-${dayHrsA[i][0]}hrs`;
//     cards[i].children[1].innerText =`${dayHrsA[i][1]}hrs` ;
//   }
// });

// monthly.addEventListener("click",()=>{
//   daily.classList.remove("selected");
//   weekly.classList.remove("selected");
//   monthly.classList.add("selected");
//   for(let i = 0;i<cards.length;i++){
//     cards[i].lastElementChild.innerText = `Last Month-${montHrsA[i][0]}hrs`;
//     cards[i].children[1].innerText =`${montHrsA[i][1]}hrs` ;
//   }
// });

// weekly.addEventListener("click",()=>{
//   daily.classList.remove("selected");
//   weekly.classList.add("selected");
//   monthly.classList.remove("selected");
//   for(let i = 0;i<cards.length;i++){
//     cards[i].lastElementChild.innerText = `Last Week-${weekHrsA[i][0]}hrs`;
//     cards[i].children[1].innerText =`${weekHrsA[i][1]}hrs` ;
//   }
// });

fetch('data.json').then(function(response){
  return response.json();
}).then(function(data){
    daily.addEventListener("click",()=>{
      daily.classList.add("selected");
      weekly.classList.remove("selected");
      monthly.classList.remove("selected");
      for(let i=0;i<cards.length;i++){
        cards[i].lastElementChild.innerText = `Yesterday-${data[i].timeframes.daily.previous}hrs`;
        cards[i].children[1].innerText =`${data[i].timeframes.daily.current}hrs`;
      }
    });
    
    monthly.addEventListener("click",()=>{
      daily.classList.remove("selected");
      weekly.classList.remove("selected");
      monthly.classList.add("selected");
      for(let i = 0;i<cards.length;i++){
         cards[i].lastElementChild.innerText = `Last Month-${data[i].timeframes.monthly.previous}hrs`;
         cards[i].children[1].innerText =`${data[i].timeframes.monthly.current}hrs` ;
  }
    });
    
    weekly.addEventListener("click",()=>{
      daily.classList.remove("selected");
      weekly.classList.add("selected");
      monthly.classList.remove("selected");
      for(let i = 0;i<cards.length;i++){
        cards[i].lastElementChild.innerText = `Last Week-${data[i].timeframes.weekly.previous}hrs`;
        cards[i].children[1].innerText =`${data[i].timeframes.weekly.current}hrs` ;
      }
    });
}).catch(function(error){
  console.error("Something went wrong");
  console.error(error);
});



