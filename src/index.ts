import { writeFileSync } from "fs"

function generateGaussian(mean: number ,std: number){
  // https://discourse.psychopy.org/t/javascript-gaussian-function/17724/2
        var _2PI = Math.PI * 2;
  var u1 = Math.random();
  var u2 = Math.random();
  
  var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
  var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

  return z0 * std + mean;
}

let sum = 0
let numbers = ''

// Generate 10,000 Gaussian random numbers
for (var i = 0; i < 100; i++) {
  const normalNumber = generateGaussian(75, 10)
  sum = sum + normalNumber
  numbers = numbers + normalNumber + '\n'
  console.log(normalNumber)
}

console.log("\n")
console.log(sum / i)
console.log("\n")
console.log(numbers)
writeFileSync("NormalNumbers.txt", numbers)


// Java

/*
* This is a program generates marks
* after reading in 2 text files.
*
* @author  Mr Coxall
* @version 1.0
* @since   2020-01-01
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

/**
* This is the marks program.
*/
final class Marks {

    /**
    * Prevent instantiation
    * Throw an exception IllegalStateException.
    * if this ever is called
    *
    * @throws IllegalStateException
    *
    */
    private Marks() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The generateMarks() function.
    *
    * @param arrayOfStudents the collection of students
    * @param arrayOfAssignments the collection of assignments
    * @return the generated marks
    */
    public static String[][] generateMarks(final Integer[] arrayOfStudents, 
                                       final Integer[] arrayOfAssignments) {

        // this is just a place holder!
        String[][] markArray = { { "", "Ass #1", "Ass #2" }, 
                           { "Sue", "76%", "88%" },
                           { "Bob", "46%", "81%" } };

        return markArray;
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        final ArrayList<String> listOfStudents = new ArrayList<String>();
        final ArrayList<String> listOfAssingments = new ArrayList<String>();
        final Path studentFilePath = Paths.get("../", args[0]);
        final Path assignmentFilePath = Paths.get("../", args[1]);
        final Charset charset = Charset.forName("UTF-8");

        try (BufferedReader readerStudent = Files.newBufferedReader(
                                     studentFilePath, charset)) {
            String lineStudent = null;
            while ((lineStudent = readerStudent.readLine()) != null) {
                listOfStudents.add(lineStudent);
                System.out.println(lineStudent);
            }
        } catch (IOException errorCode) {
            System.err.println(errorCode);
        }

        try (BufferedReader readerAssignment = Files.newBufferedReader(
                                     assignmentFilePath, charset)) {
            String lineAssignment = null;
            while ((lineAssignment = readerAssignment.readLine()) != null) {
                listOfAssingments.add(lineAssignment);
                System.out.println(lineAssignment);
            }
        } catch (IOException errorCode) {
            System.err.println(errorCode);
        }

        // Normal Distribution numbers
        Random random = new Random();

        for (int loopCounter = 0; loopCounter < 5; loopCounter++) {
            int mark = (int)Math.floor(random.nextGaussian()*10+75);
            System.out.println(mark);
        }

        // 

        System.out.println("\nDone.");
    }
}

