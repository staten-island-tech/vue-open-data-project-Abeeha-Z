function Bencool(showtimes) {
    let mappedtimes = showtimes.map((show, index) => ({index: [show.time.split(":")]} ))
    console.log(mappedtimes) 
    mappedtimes = mappedtimes.filter((index, show) => parseInt(show[0]) >= 6 && (parseInt(show[0]) <= 9 && show[1] <= 30) )
    return mappedtimes
}

const showtime = [
    { time: "6:00 PM", availableSeats: 5},
    { time: "7:30 PM", availableSeats: 10 },
    { time: "9:00 PM", availableSeats: 2 },
    { time: "10:30 PM", availableSeats: 15 }
]

console.log(Bencool(showtime))