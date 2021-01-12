// Compare the two code fragments

// 1st

// try {
//     work work
//   } catch (e) {
//     handle errors
//   } finally {
//     cleanup the working space
//   }

// 2nd

// try {
//     work work
//   } catch (e) {
//     handle errors
//   }
  
//   cleanup the working space

// Question: Is there an advantage to using 'finally', or are both code fragments equal?

// Answer: There is an advantage to using 'finally'. The code contained in 'finally'
// will run whether there is an error or not. The code in the 2nd block will only run
// if there are no errors.