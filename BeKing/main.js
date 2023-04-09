

let add_list = document.getElementById("learn-more");
const desk = document.getElementById("desktop");

//Tentative de changemennt de texte du bouton au refresh de la page

// add_list.addEventListener("load", () =>{
//   if (add_list.textContent === "Build your Kingdom !") {
//     add_list.textContent === "Begin your Reign !"
//   } else if (add_list.textContent === "Begin your Reign !"){
//     add_list.textContent === "My Lord !"
//   } else if (add_list.textContent === "My Lord !"){
//     add_list.textContent === "Make your Destiny !"
//   } else if (add_list.textContent === "Make your Destiny !") {
//     add_list.textContent === "Click !"
//   }
// })



 add_list.addEventListener("click", () =>{

    //Injection de ma To do List

    //Ajout d'un tableau to do 
    let form = document.createElement("div");
    desk.appendChild(form);
    form.className = "list";

    //Ajout de l'icone de suppression du tableau

    let crossList = document.createElement("button");
    form.appendChild(crossList);
    crossList.className = "crossForm"
    crossList.innerHTML = `
    <span>❌</span>`

     //Suppression To do list
  
     crossList.addEventListener("click", () => {
        crossList.parentNode.remove();
      })

    //Ajout Couronne

    // let crown = document.createElement("img");
    // crown.src = "images/crown.png";
    // form.appendChild(crown);
    // crown.className = "king"

    let crown = document.createElement("span");
    form.appendChild(crown);
    crown.className = "king"
     crown.innerHTML = `<img src="images/crown.png">`


    //Ajout d'un Titre au tableau
    let title = document.createElement("div");
    form.appendChild(title);
    title.className = "titleList"
    title.innerHTML = `<input value="" placeholder="Title" class="inputTitle">`

    //Ajout de la division qui acceuillera les Categories/taches
    let task = document.createElement("div");
    form.appendChild(task);
    task.className = "generalTask"

    //Ajout de la division qui acceuillera les bouton créateur des Categories/taches
    let divButton = document.createElement("div");
    form.appendChild(divButton);
    divButton.className = "generalButton"
    

    //Boutons au click qui lance la création de lignes/Categorie

    
    //Ajout du bouton créateur de Categorie
    let buttonCat = document.createElement("button");
    divButton.appendChild(buttonCat);
    buttonCat.className = "newCat";
    buttonCat.innerHTML = `
    <span>Add Class⭐</span>`

    //Ajout du bouton créateur de Taches
    let buttonTask = document.createElement("button");
    divButton.appendChild(buttonTask);
    buttonTask.className = "newTask";
    buttonTask.innerHTML = `
    <span>Add Task✨</span>`
    

    //Ajout d'une Category et Taches

    // <button class="checkButt">💖</button>
    // <button class="closeButt">❌</button>`


    // Création d'une ligne de Category
    buttonCat.addEventListener("click", () => {
        // const generalTask = document.getElementsByClassName(".generalTask");
        let plusCat = document.createElement("div");
        task.appendChild(plusCat);
        plusCat.className = "catName"
        plusCat.innerHTML = `
        <span>⭐</span>
        <input value="" placeholder="Category" class="inputCat">`

        //Création des boutons

        let checkerButton = document.createElement("button");
        let crossButton = document.createElement("button");
        plusCat.appendChild(checkerButton);
        plusCat.appendChild(crossButton);
        checkerButton.className = "checkButt";
        crossButton.className = "closeButt";
        checkerButton.innerHTML = `<span>🖤</span>`
        crossButton.innerHTML = `<span>❌</span>`

            
    //Suppression d'une ligne de Taches

        
     crossButton.addEventListener("click", () => {
        crossButton.parentNode.remove();
      })


    //check la tache
        
    checkerButton.addEventListener("click", () => {

           if(checkerButton.textContent =="🖤"){
            checkerButton.textContent ="💝"
            plusCat.childNodes[3].style.textDecoration = "line-through";
           } else if(checkerButton.textContent =="💝"){
            checkerButton.textContent ="🖤"
            plusCat.childNodes[3].style.textDecoration = "none";
           }
        })

    }) 

    // Création d'une ligne de Taches
    buttonTask.addEventListener("click", () => {
        let plusTask = document.createElement("div");
        task.appendChild(plusTask);
        plusTask.className = "taskName"
        plusTask.innerHTML = `
        <span>✨</span>
        <input value="" placeholder="Tasks" class="inputTask">`

        //Création des boutons

        let checkerButtonn = document.createElement("button");
        let crossButtonn = document.createElement("button");
        plusTask.appendChild(checkerButtonn);
        plusTask.appendChild(crossButtonn);
        checkerButtonn.className = "checkButt";
        crossButtonn.className = "closeButt";
        checkerButtonn.innerHTML = `<span>🤍</span>`
        crossButtonn.innerHTML = `<span>❌</span>`
    
    //Suppression d'une ligne de Taches

        
     crossButtonn.addEventListener("click", () => {
        crossButtonn.parentNode.remove();
      })

    //check la tache

        
    checkerButtonn.addEventListener("click", () => {
           if(checkerButtonn.textContent =="🤍"){
            checkerButtonn.textContent ="💖"
            plusTask.childNodes[3].style.textDecoration = "line-through";
           } else if(checkerButtonn.textContent =="💖"){
            checkerButtonn.textContent ="🤍"
            plusTask.childNodes[3].style.textDecoration = "none";
           }
        })

    }) 


    // https://fr.javascript.info/mouse-drag-and-drop

    crown.addEventListener("mousedown", (event) => {

         // (1) la préparer au déplacement :  réglé en absolute et en haut par z-index
        form.style.position = 'absolute';
        form.style.zIndex = 1;
        
          // déplacez-le de tout parent actuel directement dans body
         // pour le placer par rapport à body
        document.body.append(form);

        // Centrer la balle aux coordonnées (pageX, pageY)
        function moveAt(pageX, pageY) {
            form.style.left = pageX - form.offsetWidth / 5 + 'px';
            form.style.top = pageY - form.offsetHeight / 3 + 'px';
        }
      
        // déplacer notre balle en positionnement absolu sous le pointeur
        moveAt(event.pageX, event.pageY);
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // (2) déplacer la balle sur le déplacement de la souris
        document.addEventListener('mousemove', onMouseMove);
      
        // (3) laisser tomber la balle, retirer les gestionnaires inutiles
          form.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          form.onmouseup = null;

        };

        form.ondragstart = function() {
            return false;
        }; 

        // desk.append(form);  
    })

 });




