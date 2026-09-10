```javascript
// Worker Data with Ratings

const workerData = {
    Electrician: [
        {
            name: "Ramesh",
            rating: 4.8,
            cost: 300
        },
        {
            name: "Suresh",
            rating: 4.5,
            cost: 280
        }
    ],

    Plumber: [
        {
            name: "Mahesh",
            rating: 4.7,
            cost: 350
        },
        {
            name: "Naresh",
            rating: 4.3,
            cost: 320
        }
    ],

    Carpenter: [
        {
            name: "Rajesh",
            rating: 4.9,
            cost: 400
        },
        {
            name: "Kiran",
            rating: 4.4,
            cost: 370
        }
    ]
};


// Store selected worker

let selectedWorker = null;


// Show workers based on selected service

function showWorkers() {

    let service =
        document.getElementById("service").value;

    let workersDiv =
        document.getElementById("workers");

    workersDiv.innerHTML = "";


    if (service === "") {
        return;
    }


    workerData[service].forEach(function(worker, index) {

        workersDiv.innerHTML += `

            <div class="worker-box">

                <input
                    type="radio"
                    name="worker"
                    onclick="selectWorker('${service}', ${index})"
                >

                👷 ${worker.name}
                ⭐ ${worker.rating}
                (₹${worker.cost}/hr)

            </div>

        `;
    });
}


// Select worker

function selectWorker(service, index) {

    selectedWorker =
        workerData[service][index];

}


// Calculate cost

function calculate() {

    let location =
        document.getElementById("location").value;

    let hours =
        document.getElementById("hours").value;


    if (
        !selectedWorker ||
        location === "" ||
        hours === ""
    ) {

        alert(
            "Please fill all details and select a worker"
        );

        return;
    }


    let total =
        selectedWorker.cost * hours;


    document.getElementById("result").innerHTML =

        "Location: " + location + "<br>" +

        "Worker: " + selectedWorker.name + "<br>" +

        "Rating: ⭐ " +
        selectedWorker.rating + "<br>" +

        "Hours: " + hours + "<br>" +

        "Total Cost: ₹" + total;
}


// Confirm booking

function confirmBooking() {

    if (!selectedWorker) {

        alert(
            "Please select a worker first"
        );

        return;
    }


    document.getElementById("confirmation").innerHTML =

        "✅ Booking Confirmed with " +

        selectedWorker.name +

        " (⭐ " +

        selectedWorker.rating +

        ")";
}
```