let c1={name:"Cinema1", location: "north edsa", capacity: 500}
function show(movie){
  
    if(movie=="End Game"){
        console.log(`${movie} is showing End Game`)
    }
}
let x=show.call(c1,"End Game");
