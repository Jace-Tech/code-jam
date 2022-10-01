const input = "4/3*2/4"

const getResult = (input = "") => {
   try {
      const operators = ["+", "-", "*", "/", "%"]
      const operator = operators.find(operator => input.substring(2, input.length - 3).includes(operator))
   
      if(!operator) throw new Error("Invalid Arithematic operator")
   
      const arr = input.split(operator)
      const firstFraction = arr[0]
      const secondFraction = arr[1]
   
      const denominator = [firstFraction.split("/")[1], secondFraction.split("/")[1]]
      const numerators = [firstFraction.split("/")[0], secondFraction.split("/")[0]]
   
      let lcm = getLCM(denominator[0], denominator[1])
      let numerator = 0
      switch (operator) {
         case "+":
            numerator = (+numerators[0]) + (+numerators[1])
            break;

         case "-":
            numerator = (+numerators[0]) - (+numerators[1])
            break;

         case "*":
            numerator = (+numerators[0]) * (+numerators[1])
            break;

         case "/":
            numerator = (+numerators[0]) / (+numerators[1])
            break;

         case "%":
            numerator = (+numerators[0]) % (+numerators[1])
            break;
      
         default:
            break;
      }
   
      let divisor = getDivisor(numerator, lcm)
      let result = `${numerator}/${lcm}`
   
      while(divisor) {
         numerator /= divisor
         lcm /= divisor
         result = `${numerator}/${lcm}`
         divisor = getDivisor(numerator, lcm)
      }
      return result
   } catch (e) {
      console.error(e.message)
      return e.message
   }
}

const getDivisor = (numerator, denominator) => {
   const divisor = ((numerator % 2 == 0) &&( denominator % 2 == 0)) ? 2 :
                  ((numerator % 3 == 0) &&( denominator % 3 == 0)) ? 3 :
                  ((numerator % 5 == 0) &&( denominator % 5 == 0)) ? 5 : null
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