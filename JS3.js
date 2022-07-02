// Decision making statements

var x = 3
if (x>0){
    console.log('Yes its positive')
}else if (x<0){
    console.log('its negaitve')
}else{
    console.log('not positive not negative')
}

 let grade = 'C'
 switch (grade) {
    case 'A':
        console.log('Excelent')
        break;
    case 'B':
        console.log('Good')
        break;
    default:
        console.log('Invalid grade')
        break;
 }