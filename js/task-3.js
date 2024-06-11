const profile = {
  username: "Jacob",
    playTime: 300,
    //Метод changeUsername(newName) повинен приймати рядок (нове ім’я)
  //  в параметр newName та змінювати значення властивості username на нове.Нічого не повертає.
  changeUsername(newName) {
    this.username = newName
    },
    //Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та 
    //збільшити на нього значення властивості playTime.Нічого не повертає.
  updatePlayTime(hours) {
    this.playTime += hours
    },
    //Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!,
  //  де<Username> — це ім’я профілю, а<amount> — кількість ігрових годин.
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`
  }
}


console.log(profile.getInfo()) // "Jacob has 300 active hours!"

profile.changeUsername("Marco")
console.log(profile.getInfo()) // "Marco has 300 active hours!"

profile.updatePlayTime(20)
console.log(profile.getInfo()) // "Marco has 320 active hours!"


//Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
// які спортсмен споживав протягом тижня.Функція очікує один параметр: days — масив об’єктів.
//Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.
//Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//У консоль будуть виведені результати її викликів.

