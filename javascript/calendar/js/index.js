function toggleSidebar() {
    $("#sidebar").toggleClass("sidebar__collapsed");
    $("#container").toggleClass("container__expanded");

    $("#sidebar__toggle").toggleClass("sidebar__toggle_collapsed");
    $(".sidebar__item").toggleClass("sidebar__item_collapsed");
    $(".sidebar__item > p").toggleClass("display-none");

    $("#sidebar__toggle > i").toggleClass("fa-arrow-left fa-arrow-right");
}