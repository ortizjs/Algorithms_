function findBusiestPeriod(data) {
    // your code goes here
    let busiestMax = 0
    let busiestTimeMax;

    let totalPeopleInMall = 0 // 0
    for (let i = 0; i < data.length; i++) {

        let currentDataPoint = data[i]
        totalPeopleInMall = currentDataPoint[2] === 1 ? totalPeopleInMall += currentDataPoint[1] : totalPeopleInMall -= currentDataPoint[1]
        let nextDataPoint = data[i + 1];

        if (i < data.length - 1 && currentDataPoint[0] === data[i + 1][0]) {
            continue;
        } else {
            if (totalPeopleInMall > busiestMax) {
                busiestMax = totalPeopleInMall
                busiestTimeMax = currentDataPoint[0]
            }
        }
    }
    return busiestTimeMax
}

// 1440084737, 4, 0 ]
// 0th - timestamp
// 1st - number of people
// 2nd - exit = 0 entered = 1
// timeStamp = 1487799425 
//             14 entered
//.             6 left 
//.             8 people 
// There will be at least one datapoint in the array
// WE need to iterate over the input array
// at each point we need to keep track of:
//   the currentTimeStamp 
// leftpointer = start of the time frame for that timestamp
// rightpointer = denotes the end of that specific timestamp
// currentTimeStamp
// currentNumOfPeople
// totalNumPeople at point in time: 8
// 18 
// - 18
// 0 
// 18
// 
// totalNumPeople = 18
//[1487799425, 14, 1], 
//[1487799425, 4,  0],
//[1487799425, 2,  0]
//. 8 people that remained -- we need to account for as the busiest time 
// [1487800378, 10, 1],
// 18 
// [1487801478, 18, 0],
// [1487801478, 18, 1],
// count = 14
// 1
// 0
// counter 10
// for (let i = 0; i < data.length; i++) {
//   count = 14 
//.  current = data[i]
//.  next = data[i + 1]
//   if (current[0] === next[0]) {
//.    if (current[2] !== next[2]) {
//.      
//    }
//   } else {
//.   totalNumPeople > busiest.numPeople

//}

data = [[1487799425, 14, 1],
[1487799425, 4, 0],
[1487799425, 2, 0],
[1487800378, 10, 1],
[1487801478, 18, 0],
[1487801478, 18, 1],
[1487901013, 1, 0],
[1487901211, 7, 1],
[1487901211, 7, 0]]

//output: 1487800378 # since the increase in the number of people
// # in the mall is the highest at that point
console.log(findBusiestPeriod(data));
