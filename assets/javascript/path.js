// Define a constructor function for creating path objects
function Path(name, description) {
    this.name = name;
    this.description = description;
}

// Example paths
var trainPath = new Path("Train", "Take the train to reach Mother Goose.");
var walkPath = new Path("Walk", "Meander through the woods to reach Mother Goose.");
var flyPath = new Path("Fly", "Fly at night to reach Mother Goose.");
var boatPath = new Path("Boat", "Sail across the river to reach Mother Goose.");
var bikePath = new Path("Bike", "Cycle through the countryside to reach Mother Goose.");
var teleportPath = new Path("Teleport", "Use teleportation magic to instantly reach Mother Goose.");

// Array to hold all paths
var paths = [trainPath, walkPath, flyPath, boatPath, bikePath, teleportPath];

// Function to randomly select three paths
function getRandomPaths() {
    var shuffledPaths = paths.sort(() => 0.5 - Math.random()); // Shuffle the paths array
    return shuffledPaths.slice(0, 3); // Select the first three paths
}

// Get three random paths
var randomPaths = getRandomPaths();

// Display the random paths
randomPaths.forEach(function(path) {
    console.log("Path: " + path.name);
    console.log("Description: " + path.description);
});