class Newspaper {
    constructor(title, type) {
      this.title = title;
      this.type = type;
    }
  }
  
  let newspapers = new Array() 
  async function populate() { 
     const requestURL = "https://api.jsonbin.io/v3/qs/6571ca610574da7622d19657"; 
     const request = new Request(requestURL); 
     const response = await fetch(request); 
     if (response.ok) { 
       const news = await response.json(); 
       createNewspapers(news.record);
       showHeader(); 
       showNewspapers(); 
     } else {
       alert("Помилка");
     } 
  } 
  
  function createNewspapers(obj) { 
    let news = obj; 
    for (let s of news) { 
      let newspaper = new Newspaper(s.title, s.type);
      newspapers.push(newspaper); 
    } 
  } 
  
  function showHeader() { 
    const header = document.querySelector("header"); 
    const myh1 = document.createElement("h1"); 
    myh1.innerText = "Список газет"; 
    header.appendChild(myh1); 
  } 
  
  function showNewspapers() { 
    const main = document.querySelector("article"); 
    const divst = document.createElement("div"); 
    const divnotst = document.createElement("div"); 
    const myh2st = document.createElement("h2"); 
    const myh2notst = document.createElement("h2"); 
    myh2st.textContent = "Друковані видання"; 
    myh2notst.textContent = "Електронні видання"; 
    const mylistst = document.createElement("ul"); 
    const mylistnotst = document.createElement("ul"); 
    for (let s of newspapers) { 
      const listItem = document.createElement("li"); 
      listItem.textContent = s.title; 
      if (s.type == "printed") 
       mylistst.appendChild(listItem); 
      else mylistnotst.appendChild(listItem); 
    } 
    divst.appendChild(myh2st); 
    divst.appendChild(mylistst); 
    divnotst.appendChild(myh2notst); 
    divnotst.appendChild(mylistnotst); 
    main.appendChild(divst); 
    main.appendChild(divnotst); 
  } 
  
  populate();
  