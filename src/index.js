module.exports = function check(str, bracketsConfig) {
  while (true) {
    let iter = 0;
    bracketsConfig.forEach(item => {
        if (str.includes(item[0] + item[1])) {
            
            str = str.replace(item[0] + item[1], '')
            
            iter++;
        }
    })
    if (iter === 0) {
        break;
    }
}
if (str === '') {
    return true;
} else {
    return false;
}
}
