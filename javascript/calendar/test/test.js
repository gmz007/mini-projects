function toggleSidebar() {
    console.log('toggleSidebar()');
    $("#sidebar").toggleClass("sidebar__collapsed");
    $("#container").toggleClass("container__expanded");
    $("#sidebar_toggle").toggleClass("sidebar_toggle__collapsed");
    $("#sidebar_toggle > i").toggleClass("fa-arrow-left fa-arrow-right");
}
