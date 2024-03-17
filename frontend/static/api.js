//https://openlibrary.org/people/mekBot/books/want-to-read.json
//"https://openlibrary.org/search.json?q=the+edible+woman"
//http://openlibrary.org/api/volumes/brief/%3Cid-type%3E/%3Cid-value%3E.json
//https://openlibrary.org/people/mekBot/books/already-read.json
 
/* const fetchData = async () => {
   try{
      const res = await fetch("https://openlibrary.org/people/mekBot/books/already-read.json");
      if (!res.ok){
            throw new Error('Nope');
      }
           const data = await res.json()
           libros(data);
   } catch (error){
      console.error("error");
   }
 }               

   fetchData();
         

function libros(libro) {
    const titles = [];
    const idImg = [];
    const autor = [];

    libro.reading_log_entries.forEach(grupo => { 
        titles.push(grupo.work.title), 
        idImg.push(grupo.work.cover_id),
        autor.push(grupo.work.author_names);
        });
    
        for (let i = 0; i < titles.length; i++) {
             if (titles[i] === null) {
                continue;
             }else{
             const main = document.querySelector("main");
                const article = document.createElement("article");
                const title = document.createTextNode(titles[i]);
                const h2 = document.createElement("h2");
                const img = document.createElement("img");
                const aut = document.createElement("p");
                const autCont = document.createTextNode(autor[i]);
                    main.appendChild(article);
                    h2.appendChild(title);
                    article.appendChild(h2);
                    article.appendChild(img);
                    img.src = `https://covers.openlibrary.org/b/id/${idImg[i]}-M.jpg`; 
                    aut.appendChild(autCont);  
                    article.appendChild(aut);
                
                
             }}}*/

             fetch('http://127.0.0.1:8000/cover?cover_id=*')
               .then((response) => response.json())
               .then((data) => {cover(data)})

               function cover(data) {
                  const url = [];
                  const titulo = [];
                  for (let i = 0; i < data.length; i++) {
                          url.push(data[i].cover_url);
                          titulo.push(data[i].title);
                     }
                     for (let i = 0; i < url.length; i++) {
                        
                  const main = document.querySelector("main");
                  const article = document.createElement("article");
                  const title = document.createTextNode(titulo[i]);
                  const h2 = document.createElement("h2");
                  const imag = document.createElement("img");
                      main.appendChild(article);
                      h2.appendChild(title);
                      article.appendChild(h2);
                      article.appendChild(imag);
                      imag.src =`./images/${url[i]}`; 
                     }

               }