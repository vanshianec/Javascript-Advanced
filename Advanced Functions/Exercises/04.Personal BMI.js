function personalBMI(name, age, weight, height) {
    let BMI = getBMI();
    let status = getStatus();
    let data =
        {
            age: age,
            weight: weight,
            height: height
        };
    let obj =
        {
            name: name,
            personalInfo: data,
            BMI: BMI,
            status: status
        };

    if (status === 'obese') {
        obj['recommendation'] = 'admission required';
    }

    function getBMI() {
        return Math.round(weight / Math.pow(height * 0.01, 2));
    }

    function getStatus() {
        if (BMI < 18.5) {
            return 'underweight';
        }
        if (BMI < 25) {
            return 'normal';
        }
        if (BMI < 30) {
            return 'overweight';
        }
        return 'obese';
    }

    return obj;
}

personalBMI('Honey Boo Boo', 9, 57, 137);