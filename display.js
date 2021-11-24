function displayCards(aPet){
    let petsDiv=document.getElementById("pets");
    let tmp=
    `
    <div id="${aPet.id}" class="pet">
    <h1>${aPet.name}</h1>
    <p>Age: ${aPet.age}</p>
    <p>Gender: ${aPet.gender}</p>
    <p>Breed: ${aPet.breed}</p>
    <p>Service: ${aPet.service}</p>
    <p>Comment: ${aPet.comment}</p>
    <button onclick="deletePet(${aPet.id});">Delete</button>
    </div>
    `;
    petsDiv.innerHTML+=tmp;
}
