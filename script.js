const loadTreeCategory =()=> {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => displayTreecatagory(data.categories));
}

const displayTreecatagory =(tree)=>{
    // console.log(tree);

    const AllTreesCategories =document.getElementById("All-trees-categories");
    AllTreesCategories.innerHTML ="";

    tree.forEach(trees => {
        const treeBtn =document.createElement("div");
        treeBtn.innerHTML =`
     
<button onclick
="perTreeBtn(${trees.id})" class="btn w-[250px] h-[35px]">${trees.category_name}</button>
      `;
      AllTreesCategories.append(treeBtn);
    })
}





const perTreeBtn =(id)=> {
//    console.log(id);

const url =`https://openapi.programming-hero.com/api/category/${id} `;

fetch(url)
.then(res => res.json())
.then(json => displayperbtn(json.plants));

};

const displayperbtn=(plants)=>{
    // console.log(plant);

    const cardContainer =document.getElementById("card-container");
    cardContainer.innerHTML="";

  plants.forEach(plant => {
    // console.log(plant);

const plantBtn =document.createElement("div");
plantBtn.innerHTML=`

<div class="w-[344px] h-[381px] rounded-[8px] bg-[#CFF0DC]">

  <img src="./assets/about.png" class="w-[311px] h-[186px] rounded-[8px] pt-[16px] pl-[30px]" alt="">
   <h1 class="pl-7 pt-4 font-semibold">Mango Tree</h1>
   <p class="pl-7 pr-2 mt-2 text-[12px]">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green</p>
    
   <div class="flex justify-between px-7 mt-5">
    <button class="w-[86px] h-[28px] bg-[#DCFCE7] rounded-3xl text-[#15803D] text-[12px]">Fruit Tree</button>
    <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> 500</h1>
   </div>

   <button class="bg-[#15803D] w-[311px] h-[43px] rounded-3xl text-[#CFF0DC] ml-4 mt-2">Add to Cart</button>

</div>



`;

cardContainer.append(plantBtn);

  });




};


















loadTreeCategory();