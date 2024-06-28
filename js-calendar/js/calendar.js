const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

const EVENTS = [
    {
        date: new Date(2024, 6, 2),
        name: "Event 1"
    },
    {
        date: new Date(2024, 6, 3),
        name: "Event 2"
    },
    {
        date: new Date(2024, 6, 5),
        name: "Event 3"
    },
    {
        date: new Date(2024, 6, 5),
        name: "Event 4"
    },
    {
        date: new Date(2024, 6, 13),
        name: "Event with a very long name"
    }
];

function prevOnClick() {
    console.log("prev clicked");
}

function nextOnClick() {
    console.log("next clicked");
}

function createCalendar() {

    const date = new Date();

    // Add calendar header and empty body.
    $("#calendar")
        .addClass("calendar")
        .append(
            $("<div id='calendar-header' class='calendar__header'></div>").append(
                $("<button class='calendar__prev' onclick='prevOnClick()'></button>"),
                $("<div></div>")
                    .append(
                        $(`<span class='calendar__month'>${MONTHS[date.getMonth()]}</span>`),
                        $(`<span class='calendar__year'>${date.getFullYear()}</span>`)
                    ),
                $("<button class='calendar__next' onclick='nextOnClick()'></button>")
            )
        )
        .append(
            $("<div id='calendar-body' class='calendar__body'></div>")
        )

    /* Populate the body of the calendar */

    for (const dayOfWeek of DAYS) {
        $("#calendar-body").append($(`<div class="calendar__day_header">${dayOfWeek}</div>`));
    }

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const startDaysToPad = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const endDaysToPad = 7 - new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay() - 1;

    for (let i = 0; i < startDaysToPad; i++) {
        $("#calendar-body").append("<div class='calendar__day_empty'></div>");
    }

    for (let i = 1; i <= daysInMonth; i++) {
        $("#calendar-body").append(
            $(`<div id='${i}' class='calendar__day'></div>`).append(
                $(`<h2 class='calendar__date_header'>${i}</h2>`)
            )
        );

        if (i === date.getDate()) {
            $(`#${i}`).addClass("calendar__current_date")
        }
    }

    for (let i = 0; i < endDaysToPad; i++) {
        $("#calendar-body").append("<div class='calendar__day_empty'></div>");
    }

    /* Add events to calendar */

    for (let event of EVENTS) {
        if (event.date.getMonth() !== date.getMonth() + 1)
            continue;

        $(`#${event.date.getDate()}`).append(
            $(`<span class='calendar__event'>${event.name}</span>`)
        );
    }
}

$(document).ready(createCalendar);
