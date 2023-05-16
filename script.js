function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;

    this.getAvgMark = function() {
        let avgMark = 0;
        for (let i = 0; i < this.marks.length; i++) {
            avgMark += this.marks[i];
        }
        return avgMark/this.marks.length;
    }

    this.getMedianMark = function() {
        let medianArray = this.marks.sort((a, b) => {
            return a - b;
        })
        let medianNumber = 0;
        
        let num1 = medianArray.length / 2 - 1;
        let num2 = Math.floor(medianArray.length / 2);
        
        if (medianArray.length % 2 === 0) {
            medianNumber = (medianArray[num1] + medianArray[num2]) / 2;
        } else {
            medianNumber = medianArray[num2];
        };
    
        return medianNumber;
    }

    this.getMaxMark = function() {
        let maxMark = this.marks[0];
        for (let i = 1; i < this.marks.length; i++) {
            if(this.marks[i] > maxMark) {
                maxMark = this.marks[i];
            }
        }
        return maxMark;
    }

    this.getMinMark = function() {
        let minMark = this.marks[0];
        for (let i = 1; i < this.marks.length; i++) {
            if(this.marks[i] < minMark) {
                minMark = this.marks[i];
            }
        }
        return minMark;
    }

    this.getTotal = function() {
        let total = 0;
        for (let i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    }

    this.getInfo = function() {
        console.log(`info about student: name - ${this.name} faculty - ${this.faculty} total - ${this.getTotal()}`);
    }
}

const student = new Student('Roman', 'JavaScript', [97, 93, 100, 98, 100]);

let avgMark = student.getAvgMark();
console.log(avgMark);

let medianMark = student.getMedianMark();
console.log(medianMark);

let maxMark = student.getMaxMark();
console.log(maxMark);

let minMark = student.getMinMark();
console.log(minMark);

let total = student.getTotal();
console.log(total);

student.getInfo();


