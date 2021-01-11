// Affichage d'une cool popup

setTimeout(function popup(){ 
    if(confirm("Hey le site xxxvidsxxx est trop bien.. vien dessus stp please...Press ok si tu veux visiter le site")===true){ 
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } 
}, 10000);  // j'ai utilisé  popup de type CONFIRM puisque j'ai souhaité que l'utilisateur accepte la demande de visiter le site.





// The psychedelic mode

function psychedelic(){
    document.body.style.backgroundColor = "magenta"; // Set the background color of the page to MAGENTA.

  
  
    let h = document.getElementsByClassName('HeadingCollection');
        for (let i=0;i<h.length;i++){
            h[i].style.color ='green';   // Set the color of the headings to GREEN.
            h[i].style.fontFamily ='Comic Sans';  // Set the font for headings to COMIC SANS.
        }

     let p = document.getElementsByClassName('ParagraphCollection');
        for (let i=0;i<p.length;i++){
            p[i].style.color ='blue';  // Set the color of the paragraphs to BLUE.
            p[i].style.fontFamily ='courier';  // Set the font for paragraphs to COURIER. N.B:This type of font did'nt work and i'm sure that my code is fine.
        }

}
