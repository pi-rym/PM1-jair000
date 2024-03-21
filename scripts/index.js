class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(id, title, description, imgUrl) {
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((act) => act.id !== id);
  }
}

const repository = new Repository();
const activity = new Activity();

const handleDelete = (e) => {
  const btnID = e.target.id;
  repository.deleteActivity(btnID);
  ActivitiesConverted();
};

const createCard = (activity) => {
  const { id, title, description, imgUrl } = activity;
  const card = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardDescription = document.createElement("p");
  const cardImg = document.createElement("img");
  const borrar = document.createElement("button");

  borrar.classList.add("btnDel");
  borrar.textContent = "X";
  borrar.id = id;

  borrar.addEventListener("click", handleDelete);
  card.classList.add("card");
  card.id = `card-${id}`;
  cardTitle.innerHTML = title;
  cardDescription.innerHTML = description;
  cardImg.src = imgUrl;
  card.appendChild(borrar);
  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);

  return card;
};

const ActivitiesConverted = () => {
  const container = document.getElementById("activity-container");
  container.innerHTML = "";

  const activities = repository.getAllActivities();
  const htmlActivities = activities.map((activity) => createCard(activity));

  htmlActivities.forEach((activityHTML) => {
    container.appendChild(activityHTML);
  });
};
const form = document.getElementById("activity-form");
const EventHandler = (e) => {
  e.preventDefault();
  const inputTitle = document.getElementById("titleInput");
  const inputDescription = document.getElementById("descriptionInput");
  const inputImgUrl = document.getElementById("imgInput");

  const titleValue = inputTitle.value;
  const descriptionValue = inputDescription.value;
  const imgValue = inputImgUrl.value;

  if (!titleValue || !descriptionValue || !imgValue) {
    return alert("Por favor rellenar los campos.");
  }
  const id = Date.now().toString();
  repository.createActivity(id, titleValue, descriptionValue, imgValue);
  ActivitiesConverted();
  form.reset();
};

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", EventHandler);
// TODO: Resolución de CHATGPT

// class Activity {
//   constructor(id, title, description, imgUrl) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.imgUrl = imgUrl;
//   }
// }
// class Repository {
//   constructor() {
//     this.activities = new Map();
//   }

//   static generateUniqueId() {
//     return Date.now().toString(36) + Math.random().toString(36).substring(2);
//   }

//   getAllActivities() {
//     return Array.from(this.activities.values());
//   }

//   createActivity(title, description, imgUrl) {
//     const id = Repository.generateUniqueId();
//     const activity = new Activity(id, title, description, imgUrl);
//     this.activities.set(id, activity);
//     return id; // Devuelve el ID generado para la actividad creada
//   }

//   deleteActivity(id) {
//     this.activities.delete(id);
//   }

//   getActivityById(id) {
//     return this.activities.get(id);
//   }
// }
