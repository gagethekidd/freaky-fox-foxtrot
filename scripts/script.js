$(document).ready(function() {
  
    //   here is an array of objects. Each array item is an object.
    const myDataArrayOfObjects = [
       {
       show: "Gage likes Juice WRLD",
         status: "He listened to 'Ador You' this morning"
        },
       {
        show: "He uses Old Spice body wash",
         venue: "It helps him code."
         },
      {
        show: "He lives at Bellamy",
        notes: "It's a nice situation."
         }
      ];
    
      
     $.each(myDataArrayOfObjects, (index, item) => {
       
       $('#thisP').append("<li>" + item.show + "</li>");
       
     
       
     })
      
    $('#thisP').append("this " + myDataArrayOfObjects[0].show + ", " + "status = " + myDataArrayOfObjects[0].status); 
    
    });