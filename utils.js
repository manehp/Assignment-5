
// Program that multiplies two matrices

const N = 4;

// This function multiplies
// mat1[][] and mat2[][], and
// stores the result in res[][]
function matrixProduct(mat1, mat2, res)
{
	let i, j, k;
	for (i = 0; i < N; i++) {
		for (j = 0; j < N; j++) {
			res[i][j] = 0;
			for (k = 0; k < N; k++)
				res[i][j] += mat1[i][k] * mat2[k][j];
		}
	}
}

// To store result
	let res = new Array(N);
	for (let k = 0; k < N; k++)
		res[k] = new Array(N);
		
	let mat1 = [ [ 1, 1, 1, 1 ],
					[ 2, 2, 2, 2 ],
					[ 3, 3, 3, 3 ],
					[ 4, 4, 4, 4 ] ];

	let mat2 = [ [ 1, 1, 1, 1 ],
					[ 2, 2, 2, 2 ],
					[ 3, 3, 3, 3 ],
					[ 4, 4, 4, 4 ] ];

	matrixProduct(mat1, mat2, res);

	console.log("The Product Of Matrices is");
	for (i = 0; i < N; i++) {
		for (j = 0; j < N; j++)
			console.log(res[i][j] + " ");
		console.log(" ");
	}
	module.exports = {
		matrixProduct: matrixProduct
	}


	
	


 
//  program that gives the sum of two matrices
  
 // This function adds mat1[][] and mat2[][], and stores
 // the result in res[][]
 function sumOfMatrices(mat1, mat2, res)
 {
	 for (i = 0; i < N; i++)
		 for (j = 0; j < N; j++)
			 res[i][j] = mat1[i][j] + mat2[i][j];
 }
  
 
  
	 // To store result
	 for (let k = 0; k < N; k++)
		 res[k] = new Array(N);
		  
    sumOfMatrices(mat1, mat2, res);
  
	 console.log("The Sum Of Matrices is");
	 for (i = 0; i < N; i++)
	 {
		 for (j = 0; j < N; j++)
			 console.log(res[i][j] + " ");
		 console.log(" ");
	 }
	 module.exports = {
		sumOfMatrices: sumOfMatrices
	}
	
	
// Function to calculate sum of each row
	
// / Get the size m and n
	var m= 4;
	var n= 4;
	 
	function sumOfEachRow(mat)
	{
	 
		let i,j,sum = 0;
	 
		console.log("Finding Sum of each row:");
	 
		// finding the row sum
		for (i = 0; i < m; ++i) {
			for (j = 0; j < n; ++j) {
	 
				// Add the element
				sum = sum + mat[i][j];
			}
	 
			// Print the row sum
			console.log( "Sum of the row "
				+ i + " = " + sum);
	 
			// Reset the sum
			sum = 0;
		}
	}
	 

	 
        // Get the matrix elements
		let mat = [ [ 1, 1, 1, 1 ],
					[ 2, 2, 2, 2 ],
					[ 3, 3, 3, 3 ],
					[ 4, 4, 4, 4 ] ];

	 
		// Get each row sum
		sumOfEachRow(mat);
	
		module.exports = {
			sumOfEachRow: sumOfEachRow
		}



// Write a function named countWords 
function countWords(str) {
	return str.trim().split(/\s+/).length;
}
	   
const sentence = 'Give         me the   count of    all words    in this sentence!';
console.log('Sentence: '+sentence);
console.log('Total words: '+countWords(sentence));

module.exports = {
	countWords: countWords
}

// function trim
function trim(string){
    let trim = false;
    let finalWord = "";
    for (let i = 0; i < string.length; i++){
      if (string[i] !== " "){
        trim = true
      }
      if (trim){
        finalWord = finalWord.concat(string[i])
      }
    }
    return finalWord;
  }
  let word = "   hello      " 
  console.log(trim(word));
  
  module.exports = {
	trim: trim
}