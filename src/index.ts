/**
 * Spit out csv file with grades
 *
 * By: Peter
 * Version: 1.0
 * Since: 2023-01-1
 */

// get arguments
import { readFileSync } from 'fs'
import { writeFileSync } from 'fs'

/**
 *
 * @param {number} gaussian mark range within the caluclation system
 * @param {number} dev standard deviation in the marking system
 * @returns {number} the mean of the numbers
 */
function gaussianEquation(gaussian: number, dev: number): number {
  // these are my constants and variables
  const temp1 = 1 - Math.random()
  const temp2 = Math.random()
  const calc =
    Math.sqrt(-2.0 * Math.log(temp1)) * Math.cos(2.0 * Math.PI * temp2)
  return calc * dev + gaussian
}

/**
 * The table
 *
 * @param {string} students the people in the table
 * @param {string} assignments the units and work in the tabl
 */
function csvTable(students: String[], assignments: String[]): void {
  // these are my constants and variables
  const worklength = assignments.length - 1

  // this creates the table, and pushes all of the
  // information into the array
  const table = []
  table.push(assignments)

  // creates the array of the student
  // that is in the students.txt file
  for (let total = 0; total < students.length; total++) {
    const arrayStud = []
    arrayStud.push(students[total])

    // creates the marks for each students that
    // are in the student.txt file
    for (let unit = 0; unit < worklength; unit++) {
      arrayStud.push(Math.round(gaussianEquation(75, 10)))
    }

    // pushes all the table values  into the array
    table.push(arrayStud)
  }

  // data text
  // https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
  // let csvContent = 'data:text/csv;charset=utf-8,'

  // this creates the CSV table
  const tableDone = table.join(',\n')
  writeFileSync('table.csv', tableDone)
}

// this is the file path used to get the sets
const studentFile = readFileSync('names1.txt', 'utf-8')
const studList = studentFile.split(/\r?\n/)
studList.pop()

// this reads in the file, and splits it to make
// the table look nice, with a nice utf-8 font
const workFile = readFileSync('units1.txt', 'utf-8')
const workF = workFile.split(/\r?\n/)
workF.pop()

// this organizes the table
csvTable(studList, workF)

// this reads and outputs the file
const csv = readFileSync('table.csv', 'utf-8')
console.log()
console.log(csv)

console.log('\nDone!')
