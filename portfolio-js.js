function openDesc(desc, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(desc).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// function showLi(id) {
//     var work = document.getElementById('1');
//     for (var i = 0; i < items.length; i++) {
//         items[i].style.display = 'block';
//     }
// }

function showNavbar(id) {
    document.getElementById("navbar").style.display = 'block';

    var items = document.getElementsByClassName("hide");
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';
}
// function showList(id) {
//     document.getElementById("navbar").style.display = 'block';

//     document.getElementById("navbar-button").onclick = function() {
//         document.getElementById(id).innerHTML 
//     }
// }


// this was for setting each li to a specific id and calling on in when the button was clicked within the picture. 
// function displayLi(id) {
//     var list1 = document.getElementById("li-1");
//     var list2 = document.getElementById("li-2");
//     var list3 = document.getElementById("li-3");
//     for (var i = 0; i < items.length; i++){
//         items[i].style.display = 'block';
//     }


// }