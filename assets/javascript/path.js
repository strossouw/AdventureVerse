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
];

// Export the path list
function getPathList() {
    return paths;
}