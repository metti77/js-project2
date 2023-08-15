var course={
    title:"had",
    age:45,
    time:1,
    views:0,
    updateview:function () {    //anonymous f
        return ++course.views;   //1 ezaf per view 
    }
}
course.updateview();      //farakhani in brye view 

console.log(course);