/*eslint-env browser*/
//STEP 1
/*var favoriteMovies = ["Black Panther", "Titanic", "The Godfather", "Daddy's Daycar", "Star Wars"];
window.console.log(favoriteMovies[1]);*/

//STEP 2
/*var movies = new Array(5);
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
window.console.log(movies[0]);*/

//STEP 3
/*var movies = new Array(5);
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
window.console.log(movies.length);*/

//STEP 4
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
delete movies[0];
window.console.log(movies);*/


//STEP 5
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var i;
for (i = 0; i <= movies.length; i += 1) {
    window.console.log(movies[i] + "\n");
} */

//STEP 6
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var i;
for (i in movies) {
      window.console.log(movies[i] + "\n");
}*/

//STEP 7
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var i;
movies.sort();
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}*/

//STEP 8
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies =[]
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";
var i;
window.console.log("Movies I like\n\n\n\n");

for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}
window.console.log("\n\n\n\n");
window.console.log("Movies I reget to watch\n\n\n\n");

for (i in leastFavMovies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(leastFavMovies[i] + "\n");
}
}*/


//STEP 9

/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies =[]
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";
var i;
movies = movies.concat(leastFavMovies);
window.console.log("concation movies \n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}
movies.sort();
window.console.log("\n\n\nsorted movies \n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}
movies.reverse();
window.console.log("\n\n\nreverse-sort movies \n\n\n");
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
      window.console.log(movies[i] + "\n");
}
}*/

//STEP 10
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies =[]
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
movies = movies.pop();
window.console.log(movies);*/

//STEP 11
/*var movies = [];
movies[0] = "Black Panther";
movies[1] = "Titanic";
movies[2] = "The Godfather";
movies[3] = "Daddy's Daycar";
movies[4] = "Star Wars";
movies[5] = "Logan";
movies[6] = "Inception";
var leastFavMovies =[]
leastFavMovies[0] = "The Post";
leastFavMovies[1] = "Toy Story";
leastFavMovies[2] = "Baby Boss";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
movies = movies.shift();
window.console.log(movies);*/

//STEP 12

//STEP 13
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Ruvalcaba";
employee2["title"] = "full stack developer";
employee2["department"] = "information technology";
employee2["isCurrent"] = true;

var employee = [];
employee.push(employee1);
employee.push(employee2);


window.console.log(employee[1].name);*/

//STEP 14
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Mark";
employee2["title"] = "full stack developer";
employee2["department"] = "information technology";
employee2["isCurrent"] = true;

var employee = [];
employee.push(employee1);
employee.push(employee2);
var i;
for(i =0; i < employee.length; i += 1) {
   window.console.log(employee[i].name); 
}*/

//STEP 15
/*var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Mark";
employee2["title"] = "full stack developer";
employee2["department"] = "information technology";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 4267;
employee3["name"] = "Johny";
employee3["title"] = "Software Engineer";
employee3["department"] = "Computer Science";
employee3["isCurrent"] = false;


var employee = [];
employee.push(employee1);
employee.push(employee2);
employee.push(employee3);
var i;
for(i =0; i < employee.length; i += 1) {
    if(employee[i].isCurrent === true) {
   window.console.log(employee[i].name); 
}
}*/

//STEP 16
/*var movies = [["Black Panther", 1], ["Titanic", 2], ["The Godfather", 3], ["Daddy's Daycar", 4], ["Star Wars", 5]];


var movieNames = movies.filter(function (item) {
    "use strict";
    return typeof item == "string";
});

window.document.write(movieNames);*/


//STEP 17
/*var employee = ["Zak", "Mike", "Jessica", "Fred", "Mark"];
var showEmployee = function (p) {
   "use strict";
    window.console.log("Employees: \n\n\n\n");
    var i;
    for (i =0; i < p.length; i += 1) {
        window.console.log(p[i] + "\n");
    }
        
};showEmployee(employee);*/

//STEP 18
function filterValues(para)  {
    "use strict";
    var i;
    for (i = 0; i < para.length; i += 1) {
        window.console.log(para[i] + "\n");
        if ((para[i] != "flase") ||(para[i] != "null") || (para[i] != " ") ||(para[i] != 0)) {
            window.console.log(para[i]);
            }
    }
} filterValues(58, " ", 'abcd', true, null, false, 0);
    


//STEP 19

//STEP 20