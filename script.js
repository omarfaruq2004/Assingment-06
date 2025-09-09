const loadTreeCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayTreecatagory(data.categories));
};

const displayTreecatagory = (tree) => {
  const AllTreesCategories = document.getElementById("All-trees-categories");
  AllTreesCategories.innerHTML = "";

  tree.forEach((trees) => {
    const treeBtn = document.createElement("div");
    treeBtn.innerHTML = `
      <button id="categories-btn-${trees.id}" onclick="perTreeBtn(${trees.id})" class="btn w-[250px] h-[35px] rounded-xl all-trees-btn">${trees.category_name}</button>
    `;
    AllTreesCategories.append(treeBtn);
  });
};

const removeActive = () => {
  const allTreesBtn = document.querySelectorAll(".all-trees-btn");
  allTreesBtn.forEach((btn) => btn.classList.remove("active"));
};

const perTreeBtn = (id) => {
  const url =`https://openapi.programming-hero.com/api/category/${id}`;
  cardSpinner(true);

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      removeActive();
      const clickBtn = document.getElementById(`categories-btn-${id}`);
      clickBtn.classList.add("active");
      displayperbtn(json.plants);
    });
};

const treesModal = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeModal(data.plants));
};

const displayTreeModal = (modal) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
    <div class="md:w-[450px] md:h-[450px] space-y-2">
      <h1 class="text-[32px] font-semibold">${modal.name}</h1>
      <figure><img src="${modal.image}" class="w-[430px] h-[250px] mx-auto rounded-xl" alt=""></figure>
      <h1><span class="text-[20px] font-medium">Category:</span>${modal.category}</h1>
      <p><span class="text-[20px] font-medium">Price:</span><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${modal.price}</p>
      <p><span class="text-[20px] font-medium">Description:</span>${modal.description}</p>
    </div>
  `;
  document.getElementById("my_modal").showModal();
};

const displayperbtn = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  plants.forEach((plant) => {
    const plantBtn = document.createElement("div");
    plantBtn.innerHTML = `
      <div class="w-[344px] max-h-[500px] rounded-[8px] bg-[#CFF0DC] shadow-sm ">
        <figure><img src="${plant.image}" class="w-[300px] h-[186px] rounded-xl mx-auto" alt=""></figure>
        <h1 class="pl-7 pt-4 font-semibold" onclick="treesModal(${plant.id})">${plant.name}</h1>
        <p class="pl-7 pr-2 mt-2 text-[12px]">${plant.description}</p>
        <div class="flex justify-between px-7 mt-5">
          <button class="w-[150px] h-[28px] bg-[#DCFCE7] rounded-3xl text-[#15803D] text-[12px]">${plant.category}</button>
          <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}</h1>
        </div>
        <button onClick="addCardBtn(${plant.id})" class="bg-[#15803D] w-[311px] h-[43px] rounded-3xl text-[#CFF0DC] ml-4 mt-3 mb-5">Add to Cart</button>
      </div>
    `;
    cardContainer.append(plantBtn);
  });
  cardSpinner(false);
};

const addCardBtn = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayHistory(json.plants));
};

const displayHistory = (history) => {
  alert(`${history.name} has been added to the cart`);
  const modalContainer = document.getElementById("history-container");
  const historyAllCall = document.createElement("div");

  historyAllCall.innerHTML = `
    <div id="cart-item-${history.id}" data-price="${history.price}" class="w-[220px] h-[85px] bg-[#CFF0DC] shadow-sm rounded-xl ml-4 flex justify-between items-center px-5">
      <div>
        <h1>${history.name}</h1>
        <p><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${history.price}</p>
      </div>
      <div class="remove-btn" onclick="handleDelete('${history.id}')"><i class="fa-solid fa-xmark cursor-pointer"></i></div>
    </div>
  `;

  modalContainer.append(historyAllCall);
  const taka = parseInt(document.getElementById("Total-amount").innerText);
  const newAmount = taka + history.price;
  document.getElementById("Total-amount").innerText = newAmount;
};



const handleDelete = (deleteId) => {
  
  const cartItem = document.getElementById(`cart-item-${deleteId}`);

  if (cartItem) {
    const price = parseInt(cartItem.dataset.price);
    cartItem.remove();
    const currentTotal = parseInt(document.getElementById("Total-amount").innerText);
    const newTotal = currentTotal - price;
    document.getElementById("Total-amount").innerText = newTotal;
  }
};

const plantAll = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayPlantAll(json.plants));
};

const displayPlantAll = (shows) => {
  const displayCard = document.getElementById("display");
  displayCard.innerHTML = "";

  shows.forEach((show) => {
    const allCard = document.createElement("div");
    allCard.innerHTML = `
      <div class="w-[344px] max-h-[500px] rounded-[8px] bg-[#CFF0DC] shadow-sm ">
        <figure><img src="${show.image}" class="w-[300px] h-[186px] rounded-xl mx-auto" alt=""></figure>
        <h1 class="pl-7 pt-4 font-semibold" onclick="treesModal(${show.id})">${show.name}</h1>
        <p class="pl-7 pr-2 mt-2 text-[12px]">${show.description}</p>
        <div class="flex justify-between px-7 mt-5">
          <button class="w-[150px] h-[28px] bg-[#DCFCE7] rounded-3xl text-[#15803D] text-[12px]">${show.category}</button>
          <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${show.price}</h1>
        </div>
        <button onClick="addCardBtn(${show.id})" class="bg-[#15803D] w-[311px] h-[43px] rounded-3xl text-[#CFF0DC] ml-4 mt-3 mb-5">Add to Cart</button>
      </div>
    `;
    displayCard.append(allCard);
  });
};

const cardSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
  } else {
    document.getElementById("card-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

// Initial function calls
plantAll();
loadTreeCategory();