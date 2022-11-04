export function NameToDateInt(name) {
    return parseInt(name.split("A")[1]+name.split(".")[0]);
}

export function DateIntToName(dateint) {
    return "A"+dateint+".jpg";
}

export function NameFromPath(path) {
    return path.split("/").pop();
}

export function GetDateRange(arr) {
    if (Array.isArray(arr)) {
    let dateIntArray = arr.map(pic => NameToDateInt(pic.Name));
    console.log("DateIntArray ",JSON.stringify(dateIntArray,undefined,2))
    dateIntArray.sort((a, b) => a - b);
    return [DateIntToName(dateIntArray[0]),DateIntToName(dateIntArray[dateIntArray.length-1])];
    } else { 
        return []
    }
}