const input = "4/3+2/4"

const getResult = (input = "") => {
   const arr = input.split("+")
   const firstFraction = arr[0]
   const secondFraction = arr[1]

   const denominator = [firstFraction.split("/")[1], secondFraction.split("/")[1]]
   const numerators = [firstFraction.split("/")[0], secondFraction.split("/")[0]]

   let lcm = getLCM(denominator[0], denominator[1])
   let numerator = numerators.reduce((total, next) => (+total) + (+next), 0)

   let divisor = getDivisor(numerator, lcm)
   let result = `${numerator}/${lcm}`

   while(divisor) {
      numerator /= divisor
      lcm /= divisor
      result = `${numerator}/${lcm}`
      divisor = getDivisor(numerator, lcm)
   }
   return result
}

const getDivisor = (numerator, denominator) => {
   const divisor = ((numerator % 2 == 0) && (denominator % 2 == 0)) ? 2 :
                   ((numerator % 3 == 0) && (denominator % 3 == 0)) ? 3 :
                   ((numerator % 5 == 0) && (denominator % 5 == 0)) ? 5 : null
   return divisor
}

const getLCM = (a, b) => {
   const higestNum = a > b ? a : b;
   let lcm = a * b
   for(let i = higestNum; i > 1; i--) {
      if((a % i == 0) && (b % i == 0)) {
         lcm = i
      }
   }
   return lcm
}

console.log(getResult(input))