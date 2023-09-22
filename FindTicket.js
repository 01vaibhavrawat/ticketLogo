const allAvailableTickets = [
    'Paris-Skopje', 'Zurich-Amsterdam', 'Prague-Zurich',
    'Barcelona-Berlin', 'Kiev-Prague', 'Skopje-Paris',
    'Amsterdam-Barcelona', 'Berlin-Kiev', 'Berlin-Amsterdam'
];

const visitedCities = ["Amsterdam", "Kiev", "Zurich", "Prague", 'Berlin', 'Barcelona']

let takenRoute = [];

    const ticketsObject = {};
    for (const ticket of allAvailableTickets) {
        const fromTo = ticket.split("-");
        const [start, end] = ticket.split('-');
        ticketsObject[fromTo[0]] = fromTo[1];
    }
    
    let fromCity = 'Kiev';
    
    while (takenRoute.length < visitedCities.length) {
        const toCity = ticketsObject[fromCity];
        takenRoute.push(fromCity);
        fromCity = toCity;
    };
    
    console.log( takenRoute);

This code will print this route on the console - [ 'Kiev', 'Prague', 'Zurich', 'Amsterdam', 'Barcelona', 'Berlin' ]

Explanation - First I have saved the given information, in the visitedCities and allAvailableTickets Array.
Then I have converted the allAvailableTickets in a Object
After that I have started my while loop with the first city kiev and the condition that it should stop when 
the number of visited cities are equal to the cities in the route.
I have used swapping inside the loop, to push from city in the answer Array. 
after that I have printed the takenRoute answer array to console.