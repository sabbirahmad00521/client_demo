 // Get input element
 var filterInput = document.getElementById('filterInput');
 // Add event listener
 filterInput.addEventListener('keyup', filterNames);

 function filterNames() {
     // Get value of input
     var filterValue = document.getElementById('filterInput').value.toUpperCase();

     // Get names ul
     var ul = document.getElementById('names');
     // Get lis from ul
     var li = ul.querySelectorAll('li.collection-item');

     // Loop through collection-item lis
     for (var i = 0; i < li.length; i++) {
         var a = li[i].getElementsByTagName('a')[0];
         // If matched
         if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
             li[i].style.display = '';
         } else {
             li[i].style.display = 'none';
         };
     };
 };
