export function generateHashtag(str) {
        str =  str.replace(/\s+/g,' ');
        if (str.length == 0 || str.length >= 141) {
        return false;
      } else {
        str = str.split(" ").map((x) => x[0].toUpperCase() + x.substring(1));
        return "#".concat(str.join(""));
      }
    }

// console.log(generateHashtag("Do                                                                        We have A Hashtag"));
// console.log(("code" + " ".repeat(140) + "wars").trim().length);

// var arr = generateHashtag("code" + " ".repeat(140) + "wars");
// console.log(arr[45] == "");