const input = [-1, -1, 2,  5]

// Median is the number in the middle of the sequence


const getMedium = (arr = []) => {
    const sorted = arr.sort((a, b) => a - b) 
    console.log(sorted)
    if(sorted.length % 2 == 0) {
        const half = sorted[sorted.length / 2], secondHalf = sorted[(sorted.length / 2) - 1]
        return ((half + secondHalf) / 2).toFixed(1)
    }
    return sorted[Math.floor(sorted.length / 2)]
}


console.log(getMedium(input))