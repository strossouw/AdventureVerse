// Define a constructor function for creating path objects
function Path(name, description, length) {
    this.name = name;
    this.description = description;
    this.length = length;
}

// Example paths
var paths = [
    new Path("Train", "Take the train to reach Mother Goose.", "long"),
    new Path("Walk", "Meander through the woods to reach Mother Goose.", "medium"),
    new Path("Fly", "Fly at night to reach Mother Goose.", "short"),
    new Path("Boat", "Sail across the river to reach Mother Goose.", "medium"),
    new Path("Bike", "Cycle through the countryside to reach Mother Goose.", "medium"),
    new Path("Teleport", "Use teleportation magic to instantly reach Mother Goose.", "short")
];

// Function to randomly select three paths
function getRandomPaths() {
    var shuffledPaths = paths.sort(() => 0.5 - Math.random()); // Shuffle the paths array
    return shuffledPaths.slice(0, 3); // Select the first three paths
}