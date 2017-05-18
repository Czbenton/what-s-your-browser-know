if (window.File && window.FileReader) {
    // Great success! All the File APIs are supported.
} else {
    alert('The File APIs are not fully supported in this browser.');
}

var obj = {};
var countArray = [];
var loader = document.getElementById("fileGetter");
loader.addEventListener("change", openFile);

function openFile(event) {
    console.log("event ", event);
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(obj) {
        var text = reader.result.replace(/(\r\n|\n|\r)/gm,"");
        var arr = text.split(' ')

        for (i = 0; i < arr.length; i++) {
            let word = arr[i];
            if (word) {
                if (!obj[word]) {
                    obj[word] = 0;
                }
                obj[word]+= 1;
            }
        }

        for(word in obj){
            countArray.push({word: obj[word]});
        }
        console.log("countArray ", countArray);



        document.write('Object created:<br><pre>' + JSON.stringify(countArray, null, ' '))
        console.log(obj);
    };
    reader.readAsText(input.files[0]);
};

console.log(obj);

var tanner = {
    name: "Tanner", 
    age: 33
}

for(clownshoe in tanner){
    console.log(tanner[clownshoe]); // tanner.name - age
}



