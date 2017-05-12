if (window.File && window.FileReader) {
    // Great success! All the File APIs are supported.
} else {
    alert('The File APIs are not fully supported in this browser.');
}

var obj = {};

var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(obj) {
        var text = reader.result.replace(/(\r\n|\n|\r)/gm,"");
        var arr = text.split(' ')

        for (i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                if (!obj[arr[i]]) {
                    obj[arr[i]] = 0;
                }
                obj[arr[i]]++;
            }
        }

        

        document.write('Object created:<br><pre>' + JSON.stringify(obj, null, ' '))
        console.log(obj);
    };
    reader.readAsText(input.files[0]);
};

console.log(obj);
