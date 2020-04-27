// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateGrade(grades) {
    const minGrade = {
        A: 90,
        B: 80,
        C: 70,
        D: 60,
        F: 0
    }

    let avg = Math.round(grades.reduce((sum,num) => {
        return (sum+num);
    })/grades.length);

    for (let key in minGrade){
        if(minGrade[key] < avg){
            return key;
        }
    }
}
 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


