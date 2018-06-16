##Travis: 
[![Build Status](https://travis-ci.com/pdkim/03-asynchronous-callbacks.svg?branch=pk03)](https://travis-ci.com/pdkim/03-asynchronous-callbacks)

## Lab 03 Asynchronous Callbacks
Description: Export an asynchronous function that takes in an array of filepaths that will callback an error if anything is wrong or returns data.  It must return the data as a string in the order the data was originally mapped.  If an error occurs, it should stop the operation immediately and return an error.  If no errors, error should be undefined.

## Requirements
The file reader module should have the function signature (paths, callback) => undefined
On failure, the file reader module should invoke the callback with an error callback(error)
On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(undefined, result)

##Tests
1. Checks if an error is returned if the filepath is incorrect.
Passing? Yes
2. Checks multiple files and should return an error if one of them is incorrect.
Passing?  Yes
3. Checks if data can be returned if no errors are found.
Passing?  Yes
4. Check if data can be returned for all files in the array.
Passing?  Yes