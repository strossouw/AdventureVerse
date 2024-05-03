// Define a constructor function for creating path objects
function Path(name, description, length, icon) {
    this.name = name;
    this.description = description;
    this.length = length;
    this.icon = icon; // New property for the icon
}

var paths = [
    new Path("Train", "Take the train to reach Mother Goose.", "12", "fa-train"),
    new Path("Walk", "Meander through the woods to reach Mother Goose.", "27", "fa-walking"),
    new Path("Fly", "Fly at night to reach Mother Goose.", "2", "fa-plane"),
];

// Export the path list
function getPathList() {
    return paths;
}