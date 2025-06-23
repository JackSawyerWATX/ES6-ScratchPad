const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES)


const HIGH_TEMPERATURES2 = {
  yesterday: 76,
  today: 78,
  tomorrow: 81
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2

console.log(HIGH_TEMPERATURES2)


const LOCAL_FORECAST = {
  yesterday2: { low: 61, high: 75 },
  today2: { low: 64, high: 77 },
  tomorrow2: { low: 68, high: 80 }
};

const { today2: { low: lowOfToday, high: highOfToday }} = LOCAL_FORECAST;

console.log(LOCAL_FORECAST.today2)


let a = 8, b = 6;
[a, b] = [b, a]
console.log(a, b)


function removeFirstTwo(list) {
  const [, , ...newList] = list
  return newList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);




const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

console.log("Average: " + half(stats));

// { max, min } is the destructuring assignment within the argument, which 
// extracts the max and min values directly from the stats object.

// The function then computes the average of max and min as before.


