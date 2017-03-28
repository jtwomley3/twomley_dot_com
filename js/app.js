console.log('js Loaded');

 $(function(){


   function addListItem(){
    let val = $('#list_item').val();

    if (val.length){
      $('#shoppingList').append('<li>' + val +
      "<img class='delete-icon' src='./images/Trash-can.png' alt='trashcan'></li>")

      $('#list_item').val(null)

     }
     $('.delete-icon').click(function(e){
        var el =
          removeListItem(e.target)

        return
     });
     return //console.log('button was clicked. Value = ' + val);
   }

   function removeListItem(){


     return (console.log(target.id))
   }






   $('#submitButton').click(addListItem)
   $('#list_item').keypress(function(e){
        e.which === 13 ? addListItem() : ''
      });


 });
