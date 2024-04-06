// Define a constructor function for creating character objects
function Character(name, characteristics) {
    this.name = name;
    this.characteristics = characteristics;
}

// Example characters
var characters = [
    new Character("Little Bo Peep", "Nice and caring shepherdess who lost her sheep."),
    new Character("Mary Quite Contrary", "Mean and bossy gardener who likes to tend to her garden."),
    new Character("Jack Sprat", "Busy and hardworking man who could eat no fat and his wife could eat no lean."),
    new Character("Simple Simon", "Nice but gullible young boy who met a pieman going to the fair."),
    new Character("Old King Cole", "Busy and jovial king who called for his pipe and called for his bowl."),
    new Character("Humpty Dumpty", "Nice and adventurous egg who likes long walks on the beach and is afraid of the dark."),
    new Character("Little Miss Muffet", "Busy and scared girl who sat on a tuffet eating her curds and whey."),
    new Character("Tom, Tom, the Piper's Son", "Mean and mischievous boy who stole a pig and ran away."),
    new Character("Wee Willie Winkie", "Nice and friendly child who runs through the town, upstairs and downstairs, in his nightgown."),
    new Character("The Queen of Hearts", "Mean and tyrannical ruler who loved making tarts and beheading anyone who stole them.")
];

// Function to randomly select a character
function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Get ten random characters
var randomCharacters = [];
for (var i = 0; i < 10; i++) {
    randomCharacters.push(getRandomCharacter());
}

// Display the random characters
randomCharacters.forEach(function(character) {
    console.log("Character: " + character.name);
    console.log("Characteristics: " + character.characteristics);
    console.log("---");
});