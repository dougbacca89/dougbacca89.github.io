//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create arr to hold all object values
    var arr = [];
    //move object values into arr array
    arr = Object.values(object);
    //create arr2 to hold only string values from arr
    var arr2 = [];
        //loop through arr to find string values and push them into arr2
        for (var i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) === "string") {
                arr2.push(arr[i]);
            }
        }
    //return arr2 as to return all object's values as strings    
    return arr2.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    }
    else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var str = object.name;
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return "Welcome " + str + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var str1 = object.name;
    var str2 = object.species;
    str1 = str1.charAt(0).toUpperCase() + str1.slice(1);
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    return str1 + " is a " + str2;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //use if statement to make sure the object has a noises prop and noises in that prop
    if ((object.hasOwnProperty("noises")) && (object.noises.length >= 1)) {
        //if true return noises as a string separated by a space
        return object.noises.join(" ");
    }
    //use else to return "there are no noises" otherwise
    else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arr = [];
    arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
        else if (arr[i] === arr[arr.length - 1]) {
            return false;
        }
        else {
            continue;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
        
        if (object.hasOwnProperty("friends")) {
            if (object.friends.includes(name)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create array to hold non friend names
    var arr = [];
    //create loop to given array
    for (var i = 0; i < array.length; i++) {
        //if statement to make sure own name isnt added to non friends list
        if (name !== array[i].name) {
            //if first if passes new if to check if name is not in others friends list
            if (array[i].friends.includes(name) === false) {
                //if not friends push friends list owner name in to non friends array 
                arr.push(array[i].name);
            }
        }    
    }
    //return list of non friends
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
        for (var element of array) {
            if (key === element) {
                delete object[key];
            }    
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var b = [];
    var a = array.length;
    for(var i = 0; i < a; i++) {
        if (b.indexOf(array[i]) === -1) {
            b.push(array[i]);
        }
    }
    return b;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}