// Define a constructor function for creating path objects
function Path(name, description, length) {
    this.name = name;
    this.description = description;
    this.length = length;
}

var paths = [
    new Path("Train", "Take the train to reach Mother Goose.", "12"),
    new Path("Walk", "Meander through the woods to reach Mother Goose.", "27"),
    new Path("Fly", "Fly at night to reach Mother Goose.", "2"),
];

// Export the path list
function getPathList() {
    return paths;
}