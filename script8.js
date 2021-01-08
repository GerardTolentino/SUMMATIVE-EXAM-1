class School {
constructor(name, location, population){
this.name = name;
this.location = location;
this.population = population;
this.displayInfo = ()=>{
console.log(${this.name} is located at ${this.location}. It has a population of
${this.population}.);
}
}
}
School.prototype.offer = function(courses){
console.log(this.name + " offers " + courses);
};
School.prototype.estYear = 1611;

//testing
let school = new School("UST", "Manila", 40000);
school.displayInfo();
school.offer(["Computer Science", "Information Technology", "Information Systems"]);
console.log(school.estYear);
