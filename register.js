console.log("Register page")
let saloon={
    name:"Pet Saloon",
    address:{
        street:"University",
        number:"808-444-3322",
        zip:"96826",
        city:"San Diego"
    },
    hours:{
        open:"09:00 PST",
        Close:"19:00"
    },
    pets:[]
}
let x=0;
class Pet {
    constructor(name, age, gender, breed, service, ownerName, contactPhone, comment) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = ownerName;
        this.phone = contactPhone;
        this.comment = comment;
        this.id=x++;
    }
}
let pet1=new Pet("Ollie",2,"Male","Shih Tzu","Haircut","Kamalani","888-888-8888","Please round face and shorten ears");
let pet2=new Pet("Hulk",1,"Male","Frenchie","Wash","James","444-444-4444","Please wash ears");
let pet3=new Pet("Stormi",3,"Female","Pom","Cut and wash","Raven","333-333-3333","please put hair in ponytail");
saloon.pets.push(pet1,pet2,pet3);
console.log(saloon.pets);
displayCards(pet1);
displayCards(pet2);
displayCards(pet3);

let txtName=document.getElementById("petName");
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender");
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService");
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone");
let txtComment=document.getElementById("comment");

function register(){
    console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtComment.value);
    let newPet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtComment.value)
    saloon.pets.push(newPet)
    console.log(saloon.pets)
    displayCards(newPet);
    clear();
}
function clear(){
    txtName.value='';
    txtAge.value='';
    txtGender.value='';
    txtBreed.value='';
    txtService.value='';
    txtOwner.value='';
    txtPhone.value='';
    txtComment.value='';
}


function simpleDisplay(){
    for(let i=0; i<saloon.pets.length;i++){
        console.log(saloon.pets[i].name);
    }
    
}
simpleDisplay();

function deletePet(petId){
    
    console.log("Delete pet function " +petId);
    let indexDelete;
    //serch pet
    for(let i=0;i<saloon.pets.length;i++){
        let pet=saloon.pets[i];
        if(petId==pet.id){
            indexDelete=i;
        }
    }
    //delete from HTML
    document.getElementById(petId).remove();
    //delete from array 
    saloon.pets.splice(indexDelete,1);
}

function searchPet(){
    let searchString=document.getElementById("searchString").value;
    for(let i=0;i<saloon.pets.length;i++){
        if(searchString==saloon.pets[i].name){
            document.getElementById(saloon.pets[i].id).classList.add("highlight");
        }
    }
    console.log(searchString);
    clear()
}
