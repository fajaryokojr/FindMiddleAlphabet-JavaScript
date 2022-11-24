var getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);


console.log(getMiddle('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))