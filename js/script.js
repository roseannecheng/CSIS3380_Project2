/**
 * Get list of contacts and convert as an array
 */
 let contacts = document.getElementsByClassName("contact-item cf");
 let array = Array.from(contacts);
 // console.log(array);
 // console.log(array.length);
 
 /** Count number of pages needed based on total items and items displayed per page */
 const itemCount = array.length;
 const itemsPerPage = 10;
 let currentPage = 1;
 const numberOfPages = Math.ceil(itemCount / itemsPerPage);
 
 /** Calls the createButtons function to create the buttons */
 createButtons();
 
 const displayContacts = (currentPage)=>{
     const startPage = (currentPage - 1) * itemsPerPage; //refers to the starting index 
     const endPage = startPage + itemsPerPage; //ending index from contacts list
     const pageItems = array.slice(startPage, endPage); 
 
     let itemsArray = new Array();
     for(let i = 0; i < pageItems.length; i++){
         item = pageItems[i].outerHTML;
         itemsArray.push(item);
         // console.log(item); //this is the one we want displayed (the contact details and join date)
         // console.log(itemsArray);
     }
 
     //creates a string called output then concatenates each element of the itemsArray
     let output = "";
     for(let i = 0; i < itemsArray.length; i++){
         output += `${itemsArray[i]}`;
         // console.log(output);
     }
 
     //sets the innerHTML of contact-list class to output to only show items of the array after array.slice
     return document.getElementsByClassName("contact-list")[0].innerHTML = output;
  
 }
 
 //this initially sets the index.html to show page 1 contact list of the first 10 contacts
 displayContacts(1);
 
 /** Create <a> tags for pagination */
 function createButtons(){
     let pagination = document.getElementsByClassName("pagination")[1];
     // console.log(pagination);
 
     for(let i = 1; i <= numberOfPages; i++){
         let aTag = document.createElement('a');
         aTag.setAttribute("id", "tags");
         aTag.innerText = i;
 
         aTag.onclick = function() {
             let btnValue = this.text;
             console.log(btnValue); //shows the value of button clicked
             displayContacts(btnValue); //calls the displayContacts function every time a button is clicked and sets currentPage to it
         }
 
         pagination.appendChild(aTag);
 
     }
 }