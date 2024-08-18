function solution(my_string, letter) {
    const regexp = new RegExp(letter, 'g')
    return my_string.replace(regexp, "")
}