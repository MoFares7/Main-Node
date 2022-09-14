//! Read Files from Text

const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

//! Write FIles

fs.writeFile('./docs/blog1.txt', 'Hello , one', () => {
    console.log('file was done');
});

fs.writeFile('./docs/blog2.txt', 'Hello , second', () => {
    console.log('file was done');
});

//! Directories
if (fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder Created');
    })
}

//! Delete Files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('The File is Deleting');
    })
}