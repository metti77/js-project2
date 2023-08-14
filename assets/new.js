var today=new Date().getDay();  //roze hafte
var day;

switch (today) {
    case 0:
        day="یکشنبه";
        break;
        case 1:
            day="دوشنبه";
            break;
            case 2:
                day="سه شنبه";
                break;
                case 3:
                    day="چارشنبه";
                    break;
                    case 4:
                        day="پنجشنبه";
                        break;
                        case 5:
                            day="جمعه";
                            break;
                            case 6:
                                day="شنبه";
                                break;

                

    default: "not found";
        break;
}
console.log("امروز:" +day);

