function Benz(model,color,year,type){   //object constructor
    this.model=model,
    this.color=color,
    this.year=year,
    this.type=type;
}

var Benz2=new Benz("gclass","red",2010,"sedan");
var Benz3=new Benz("sls","blue",2021,"sport");
console.log(Benz3);
console.log(Benz2);