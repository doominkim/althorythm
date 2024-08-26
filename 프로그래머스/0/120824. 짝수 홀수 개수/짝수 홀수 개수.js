function solution(num_list) {
    const odd = num_list.filter((v) => v % 2 === 0)
    return [odd.length, num_list.length - odd.length]
}