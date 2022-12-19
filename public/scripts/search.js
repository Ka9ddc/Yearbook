let students = {
    data: [
      {
        studentName: "Alejandro Neves",
        phrase: "Life shrinks or expands in proportion with one's courage. -Anaïs Nin",
        image: "public/images/students/alejandro.jpeg",
      },
      {
        studentName: "Anna Aparecida",
        phrase: "Não importa se o desafio é forte, grande ou difícil demais, porque a determinação de vencer supera qualquer coisa!",
        image: "public/images/students/anna-aparecida.jpg",
      },
      {
        studentName: "Anna Clara",
        phrase: "“As vezes oque você acha que é um abismo, é Deus te ensinando a voar, evoluir e amadurecer”",
        image: "public/images/students/anna-clara.jpg",
      },
      {
        studentName: "Carlos Henrique",
        phrase: "I attribute my success to this - I never gave or took any excuse. -Florence Nightingale",
        image: "public/images/students/carlos.jfif",
      },
      {
        studentName: "Cássio Rodrigues",
        phrase: "“ Qualquer um consegue escrever código que um computador entende. Bons programadores escrevem código que humanos entendem” — Martin Fowler",
        image: "public/images/students/cassio.jfif",
      },
      {
        studentName: "Cauã Gutemberg",
        phrase: "If you have everything under control, you're not moving fast enough. -Mario Andretti",
        image: "public/images/students/caua.jpg",
      },
      {
        studentName: "Eliel Junio",
        phrase: "“Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum porque tu estás comigo.” -Salmo 23",
        image: "public/images/students/eliel.webp",
      },
      {
        studentName: "Erik Kaue",
        phrase: "Se você tem tudo sobre controle, você não está se movendo rápido o suficiente.",
        image: "public/images/students/erik.jpg",
      },
      {
        studentName: "Evilyn Silva",
        phrase: "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.",
        image: "public/images/students/evilyn.jpg",
      },
      {
        studentName: "Gabriel Martins",
        phrase: "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
        image: "public/images/students/gabriel.png",
      },
      {
        studentName: "Guilherme Nascimento",
        phrase: "Não existe um caminho para a felicidade. A felicidade é o caminho.",
        image: "public/images/students/guilherme.png",
      },
      {
        studentName: "Gustavo Pires",
        phrase: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        image: "public/images/students/gustavo.jpeg",
      },
      {
        studentName: "Heloysa Gonçalves",
        phrase: "Saber encontrar a alegria na alegria dos outros é o segredo da felicidade.",
        image: "public/images/students/heloysa.jfif",
      },
      {
        studentName: "Igor Quirino",
        phrase: "A alegria de fazer o bem é a única felicidade verdadeira.",
        image: "public/images/students/igor.jpg",
      },
      {
        studentName: "Jade Bianca",
        phrase: "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
        image: "public/images/students/jade.jpg",
      },
      {
        studentName: "João Pedro",
        phrase: "Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.",
        image: "public/images/students/joao-pedro.jpg",
      },
      {
        studentName: "João Vitor",
        phrase: "É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso.",
        image: "public/images/students/joao-vitor.jpg",
      },
      {
        studentName: "Leticia Ferreira",
        phrase: "Pessimismo leva à fraqueza, otimismo ao poder.",
        image: "public/images/students/leticia.jpeg",
      },
      {
        studentName: "Lucas Ferreira",
        phrase: "Pessimismo leva à fraqueza, otimismo ao poder.",
        image: "public/images/students/lucas.jpg",
      },
      {
        studentName: "Melissa Maia",
        phrase: "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
        image: "public/images/students/melissa.jpeg",
      },
      {
        studentName: "Murylo Ferreira",
        phrase: "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.",
        image: "public/images/students/mauro.png",
      },
      {
        studentName: "Nathalia Carlos",
        phrase: "Se um homem não descobriu nada pelo qual morreria, não está pronto para viver.",
        image: "public/images/students/nathalia.jpg",
      },
      {
        studentName: "Pedro Alves",
        phrase: "Somente quando encontramos o amor, é que descobrimos o que nos faltava na vida.",
        image: "public/images/students/pedro-alves.jpg",
      },
      {
        studentName: "Pedro Henrique",
        phrase: "Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão.",
        image: "public/images/students/pedro-henrique.jpg",
      },
      {
        studentName: "Rafael Campelo",
        phrase: "A alegria evita mil males e prolonga a vida.",
        image: "public/images/students/rafael.png",
      },
      {
        studentName: "Ryan Micael",
        phrase: "Não preciso de aplausos, vou fazer tudo apropriadamente.",
        image: "public/images/students/ryan.jpeg",
      },
      {
        studentName: "Sofia Benício",
        phrase: "A amizade duplica as alegrias e divide as tristezas.",
        image: "public/images/students/sofia.jpg",
      },
      {
        studentName: "Steven Andria",
        phrase: "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
        image: "public/images/students/steven.jpeg",
      },
      {
        studentName: "Suzana Leandro",
        phrase: "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
        image: "public/images/students/suzana.jpeg",
      },
      {
        studentName: "Théo Ariston",
        phrase: "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
        image: "public/images/students/theo.jpg",
      },
      
    ],
  };

  for(let i of students.data){
    //Create card
    let card = document.createElement("div");
    //Card should have a category and should stay hidden initially

    card.classList.add("card", i.category);
    //image div

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //student name
    let name = document.createElement("h5");
    name.classList.add("student-name");
    name.innerText = i.studentName.toUpperCase();
    container.appendChild(name);
    //phrase
    let phrase = document.createElement("h6");
    phrase.innerText = i.phrase;
    container.appendChild(phrase);

    card.appendChild(container);
    document.getElementById("students").appendChild(card);
  }

  //parameter passed from button (Parameter same as category)
  function filterStudent(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
      //check if value equals innerText
      if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
      }
      else{
        button.classList.remove("active");
      }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through the cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if(value  == "all") {
        element.classList.remove("hide");
      }
      else{
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    })
  };


 //Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".student-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});


  //initially display all students
  window.onload = () => {
    filterstudent("all");
  }

  // Click enter to search

  var enterInput = document.getElementById("search-input");

// Execute a function when the user presses a key on the keyboard
enterInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search").click();
  }
});