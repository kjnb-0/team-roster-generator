function Employee(name) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    this.name = name;
}

module.exports = Employee;
