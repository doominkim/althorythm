function minMovesToSeat(seats: number[], students: number[]): number {
    const n = seats.length;
    seats.sort((a, b) => a-b)
    students.sort((a, b) => a-b)
    let answer = 0;
    console.log(seats, students)
    for(let i = 0; i < n; i++) {
        answer += Math.abs(seats[i] - students[i])
    }

    return answer;
};