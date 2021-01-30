// firstClassTicketEventHandler
function firstClassTicketEventHandler(isIncrease) {
    const ticketInput = document.getElementById("firstClassTicketCount");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    // increase 
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    // decrease 
    else if ((isIncrease == false) && (ticketCount > 0)) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    total();
}


// economyTicketEventHandler
function economyTicketEventHandler(isIncrease) {
    const ticketInput = document.getElementById("economyTicketCount");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    // increase 
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    // decrease 
    else if ((isIncrease == false) && (ticketCount > 0)) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    total();
}


// subTotal function 
function total() {
    const firstClassTicketInput = document.getElementById("firstClassTicketCount");
    const firstTicketCount = parseInt(firstClassTicketInput.value);

    const economyTicketInput = document.getElementById("economyTicketCount")
    const economyTicketCount = parseInt(economyTicketInput.value);

    const subTotalPrice = firstTicketCount * 150 + economyTicketCount * 100;
    document.getElementById("subTotal").innerText = "$" + subTotalPrice;

    const vat = Math.round(subTotalPrice * 0.1);
    document.getElementById("vatAmount").innerText = "$" + vat;

    const total = subTotalPrice + vat;
    document.getElementById("total").innerText = "$" + total;
}


// bonus part 
    document.getElementById("bookNowButton").addEventListener("click", function() {
        document.getElementById("beforeBooking").style.display = "none";
        document.getElementById("afterBooking").style.display = "block";

        document.getElementById("afterBookingFirstTicket").innerText = firstClassTicketCount.value;
        document.getElementById("afterBookingEconomyTicket").innerText = economyTicketCount.value;

        var total = document.getElementById("total").innerText;
        document.getElementById("afterBookingTotal").innerText = total;
    })

    