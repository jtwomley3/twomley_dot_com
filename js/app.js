console.log('js Loaded');

 $(function(){


   function addListItem(){
    let val = $('#list_item').val();

    if (val.length){
      $('#shoppingList').append('<li>' + val +
      "<img class='delete-icon' src='./images/Trash-can.png' alt='trashcan'></li>")

      $('#list_item').val(null)
     }

     return //console.log('button was clicked. Value = ' + val);
   }

  //  function removeListItem(el){
  //    return (console.log(el);)
  //  }






   $('#submitButton').click(addListItem)
   $('#list_item').keypress(function(e){
        e.which === 13 ? addListItem() : ''
      });

   $('.delete-icon').click(console.log("clicked"));

 });
