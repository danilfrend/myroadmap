
openCurrentTab = (event, tabName) => {

    // Get all tabs with class = "content-tab" and hide them
    var tabContent = document.querySelectorAll('.content-tab');
    tabContent.forEach(content => content.style.display = 'none');

    // Get all tabs with class = "tab" and remove state actve
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the current tab, and add an "active" state
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// // Set default tab to be open
// document.addEventListener('DOMContentLoaded' ,function() {
//     document.querySelector('.tab-content').style.display = 'block';
// });