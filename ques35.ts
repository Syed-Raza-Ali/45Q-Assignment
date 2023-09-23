/*
 QUESTION NO 35;
 Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/
let animalName = ["dog","cat","cow"]
console.log(`\nlist of animals:`);
for (let i of animalName){
    console.log(i)
}

console.log(`\nStatement about each animal:`);

for (const animal of animalName)
if (animal === "dog") {
       console.log(`A ${animal} is a good pet`);    
}else if (animal === "cat") {
        console.log(`A ${animal} would be a good companion at home`)
}else if (animal === "cow") {
        console.log(`A ${animal} is an adorable pet that also give us milk`)
}

console.log("\nWhat these animal have in common");
console.log("Any of these animals would be a great pet!");



export{}
