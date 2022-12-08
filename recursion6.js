// 1.  Find All Anagrams in a String...............................................................

let s = "cbaebabacd"
let p = "abc"

var findAnagrams = function (s, p) {

    function checkAnagram(s, t) {
        if (s.length !== t.length) return false;
        let obj = {}
        for (let i = 0; i < s.length; i++) {
            if (!obj[s[i]]) {
                obj[s[i]] = 1;
            } else {
                obj[s[i]]++;
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (!obj[t[i]]) {
                return false;
            } else {
                obj[t[i]]--;
            }
            if (obj[t[i]] == 0) {  // remove key 
                delete obj[t[i]];
            }
        }
        return true;
    };

    let str = ""
    for (let i = 0; i < p.length; i++) {
        str += s[i];
    }
    //console.log(str)
    let arr = []
    let ind = 0;
    if (checkAnagram(str, p)) arr.push(0)
    for (let i = p.length; i < s.length; i++) {
        str += s[i];
        //console.log(str)
        str = str.slice(1)
        ind++;
        //console.log(str)
        if (checkAnagram(str, p)) arr.push(ind);
    }
    return arr;
};
console.log(findAnagrams(s,p))