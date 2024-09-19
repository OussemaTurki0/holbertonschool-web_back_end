const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
            const lines = data.split('\n').filter(line => line.trim().length);
            const students = lines.slice(1).map(line => line.split(','));
            const fields = {};
            students.forEach(([firstname, , , field]) => {
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            console.log(`Number of students: ${students.length}`);
            for (const field in fields) {
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
            }
            resolve();
        });
    });
}

module.exports = countStudents;
