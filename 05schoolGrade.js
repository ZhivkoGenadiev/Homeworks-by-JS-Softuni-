function schoolGrades(arr) {
    let schoolGrades = {};
    for (const line of arr) {
        let [student, ...grades] = line.split(" ");
        if (schoolGrades.hasOwnProperty(student)) {
            schoolGrades[student] = schoolGrades[student].concat(grades);
        } else {
            schoolGrades[student] = grades
        }
    }
    let sorted = Object.entries(schoolGrades).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [student, grades] of sorted) {
        let sumG = grades.map(Number).reduce((sum, num) => sum + num, 0);
        console.log(`${student}: ${(sumG / grades.length).toFixed(2)}`);
    }
}
schoolGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3 3'])