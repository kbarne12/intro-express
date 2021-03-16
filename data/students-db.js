const students = [
    {student: 'Tavon Austin', present: true},
    {student: 'Bruce Irvin', present: false},
    {student: 'Carl Joseph', present: true},
    {student: 'Geno Smith', present: false}

]

module.exports = {
    getAll: function() {
        return students
    }
};