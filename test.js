// $(document).ready(function() {
	
// 	window.scrollTo(0, 1);

//     $('.js #menu-toggle').click(function (e) {
//     $('body').toggleClass('active');
//     e.preventDefault();
//     });

// });

$(function() {
    $('.toggle-sidebar').click(function() {
        toggleSidebar();
    });
});


function toggleSidebar() {
    if ($('#container').hasClass('display-sidebar')) {
        // Close Sidebar
        $('#container').removeClass('display-sidebar');
    } else {
        // Open Sidebar
        $('#container').addClass('display-sidebar');
    }
}