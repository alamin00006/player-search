allplayer = () =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayer(data.player))
    document.getElementById('search-box').value = '';
}

const showPlayer = (players) =>{
    // console.log(players)
   const parent = document.getElementById('player-container');
  for(const player of players){
      console.log(player)
      const div = document.createElement('div');
      div.innerHTML =`<div class="card" style="width: 18rem;">
      <img src="${player.strThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <h5 class="card-title">${player.strNationality}</h5>
        <p> </p>
       
        <button class = "btn btn-danger">Delete</button>
        <button onclick="detailsId('${player.idPlayer}')" class = "btn btn-primary">Details</button>
      </div>
    </div>`;
    parent.appendChild(div)
  }

}

const detailsId = (info) =>{
    // console.log(info)
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
    .then(res => res.json())
    .then(data =>showDisplay(data.players[0]))
}
const showDisplay = (details) =>{
  const displayShow = document.getElementById('display-show');
  const div = document.createElement('div');
  div.innerHTML = `
  <p>${details.strDescriptionEN}</p>`
    displayShow.appendChild(div);
console.log(details)

}