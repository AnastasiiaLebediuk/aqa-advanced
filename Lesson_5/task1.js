const averageRating =71;

if (averageRating == null || averageRating <0 || averageRating > 100){
    console.log('Значення повинне бути більше 0 і не більше 100');
}else if (averageRating <60){
    console.log('Незадовільно');
} else if (averageRating >=60 && averageRating<=70){
    console.log('Задовільно');
} else if (averageRating >=71 && averageRating<=80){
    console.log('Добре');
} else if (averageRating >=81 && averageRating <=90){
    console.log('Дуже добре');
} else if (averageRating >=91 && averageRating <= 100){
    console.log('Відмінно');
}