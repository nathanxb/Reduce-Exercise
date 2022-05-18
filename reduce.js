
//reduce method, accepts object array and key, returns values of each with this key
function extractValue(arr, key) {
    return arr.reduce((accum, nextVal) => {
        accum.push(nextVal[key]);
        return accum;
    }, []);
}


//reduce, take string, return as object with keys as vowl, and values counting number of appearances in string
function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce((accum, nextVal) => {
        let lowerCase = nextVal.toLowerCase()
        if (vowels.indexOf(lowerCase) !== -1) {
            accum[lowerCase] ? accum[lowerCase]++ : accum[lowerCase] = 1;
        }
        return accum;
    }, {});
}

// takes object array, pulls index through reduce, adds key and value
function addKeyAndValue(arr, key, value) {
    return arr.reduce((accum, nextVal, idx) => {
        accum[idx][key] = value;
        return accum;
    }, arr);
}


//iterates through array with a callback, if true, send to first part of array, if false, send to second part of array
function partition(arr, callback) {
    return arr.reduce((accum, nextVal) => {
        callback(nextVal) ? accum[0].push(nextVal) : accum[1].push(nextVal);
        return accum;
    }, [[], []]);
}
