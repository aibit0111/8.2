var fs = require('fs'); //importing the module of file system


function convert(filename) {
    fs.readFile(filename, 'utf8', function (error, data) //reading the file
    {
        var higher = data.toUpperCase();
        fs.writeFile(filename, higher, 'utf8', function (error) //overriding the file
        {
            if (error) throw error;
        });
    })
};

exports.convert = convert;