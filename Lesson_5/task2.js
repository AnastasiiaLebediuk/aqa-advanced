const averageRating = -9;

switch (true) {
    case (averageRating == null || averageRating <0 || averageRating > 100):
      console.log('Значення повинне бути не менше 0 і не більше 100');
    break;
    case (averageRating <60):
      console.log('Незадовільно');
    break;
    case(averageRating >=60 && averageRating<=70):
      console.log('Задовільно');
    break;
    case (averageRating >=71 && averageRating<=80):
      console.log('Добре');
    break;
    case (averageRating >=81 && averageRating <=90):
      console.log('Дуже добре');
    break;
    case (averageRating >=91 && averageRating <= 100):
      console.log('Відмінно');
      break;
    default:
        console.log('Некоректне значення');
}