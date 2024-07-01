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

let date;

function prevOnClick() {
    date = new Date(date.setMonth(date.getMonth() - 1));
    updateCalendar()
}

function nextOnClick() {
    date = new Date(date.setMonth(date.getMonth() + 1));
    updateCalendar()
}

function updateCalendar() {
    $("#calendar__month").html(MONTHS[date.getMonth()]);
    $("#calendar__year").html(date.getFullYear());

    $("#calendar__body").empty();
    const [startDaysToPad, daysInMonth, endDaysToPad] = calculateMonth(date);
    populateCalendarBody(startDaysToPad, daysInMonth, endDaysToPad);
}

function createCalendar() {
    // Add calendar header and empty body.
    $("#calendar")
        .addClass("calendar")
        .append(
            $("<div id='calendar__header' class='calendar__header'></div>").append(
                $("<button class='calendar__prev' onclick='prevOnClick()'></button>")
                    .append("<img src='/assets/svg/cursor-left.svg' alt='previous month' />"),
                $("<div></div>")
                    .append(
                        $(`<span id='calendar__month' class='calendar__month'>${MONTHS[date.getMonth()]}</span>`),
                        $(`<span id='calendar__year' class='calendar__year'>${date.getFullYear()}</span>`)
                    ),
                $("<button class='calendar__next' onclick='nextOnClick()'></button>")
                    .append("<img src='/assets/svg/cursor-right.svg' alt='next month'/>")
            )
        )
        .append(
            $("<div id='calendar__day_of_week' class='calendar__day_of_week'></div>")
        )
        .append(
            $("<div id='calendar__body' class='calendar__body'></div>")
        )

    /* Populate the body of the calendar */

    for (const dayOfWeek of DAYS) {
        $("#calendar__day_of_week").append($(`<div class="calendar__day_of_week_text">${dayOfWeek}</div>`));
    }

    const [startDaysToPad, daysInMonth, endDaysToPad] = calculateMonth(date);
    populateCalendarBody(startDaysToPad, daysInMonth, endDaysToPad);
}

function calculateMonth(date) {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    return [
        new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
        daysInMonth,
        7 - new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay() - 1
    ];
}

function populateCalendarBody(startDaysToPad, daysInMonth, endDaysToPad) {

    const currentDate = new Date();

    for (let i = 0; i < startDaysToPad; i++) {
        $("#calendar__body").append("<div class='calendar__day_empty'></div>");
    }

    for (let i = 1; i <= daysInMonth; i++) {
        $("#calendar__body").append(
            $(`<div id='${i}' class='calendar__day'></div>`).append(
                $(`<h2 class='calendar__date_header'>${i}</h2>`)
            )
        );

        if (date.getFullYear() === currentDate.getFullYear() &&
            date.getMonth() === currentDate.getMonth() &&
            i === currentDate.getDate()) {
            $(`#${i}`).addClass("calendar__current_date")
        }
    }

    for (let i = 0; i < endDaysToPad; i++) {
        $("#calendar__body").append("<div class='calendar__day_empty'></div>");
    }

    /* Add events to calendar */

    const eventsInMonth = EVENTS.filter(e =>
        e.date.getFullYear() === date.getFullYear() && e.date.getMonth() === date.getMonth()
    );

    for (let event of eventsInMonth) {
        $(`#${event.date.getDate()}`).append(
            $(`<span class='calendar__event'>${event.name}</span>`)
        );
    }
}

$(document).ready(
    () => {
        date = new Date();
        createCalendar();
    });
