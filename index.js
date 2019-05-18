function calculateAverage() {
    const stringNumbers = "34,35,37"
    const stringArray = stringNumbers.split(",")
    const numOfEntries = stringArray.length
    let num = 0
    for (const item of stringArray) {
      num += parseInt(item)
    }
    const average = num/numOfEntries
  }