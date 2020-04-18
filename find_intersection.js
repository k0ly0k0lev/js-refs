const testArr = ["1, 2, 3, 4, 5", "5, 2, 12, 3, 20"]

function findIntersectionSolutionOne(arr) {

    const [LIST_ONE, LIST_TWO] = arr.map(res => res.split(', '))
    const MAP_RESULT = {}
    const FINAL_RESULT = []

    for (item of LIST_ONE) {
        MAP_RESULT[item] = true
    }

    for (item of LIST_TWO) {
        if (MAP_RESULT[item]) {
            FINAL_RESULT.push(item)
        }
    }

    return FINAL_RESULT.length ? FINAL_RESULT.join(', ') : false
}

findIntersectionSolutionOne(testArr)
