function calculateAverage() {

    const stringNumbers = document.getElementById("scores").value
    const stringArray = stringNumbers.split(",")
    const numOfEntries = stringArray.length
    let num = 0
    for (const item of stringArray) {
      num += parseInt(item)
    }
    const average = num/numOfEntries
    document.getElementById("grade").innerHTML = average
  }
