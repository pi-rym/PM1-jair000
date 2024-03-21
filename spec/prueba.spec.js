const { Activity, Repository } = require("../scripts/index");

describe("demo", function () {
  let repository;

  beforeEach(function () {
    repository = new Repository();
  });

  it("Debe ser una clase", function () {
    expect(typeof Activity).toBe("function");
    expect(typeof Repository).toBe("function");
  });

  it("Cada lista debe ser una instancia de Repository", function () {
    expect(repository instanceof Repository).toBeTruthy();
  });

  it("Debería agregar un elemento a la lista", function () {
    repository.createActivity("1", "Actividad 1", "Descripción 1", "img1.jpg");
    expect(repository.getAllActivities().length).toBe(1);
  });

  it("Debería eliminar el último elemento de la lista", function () {
    repository.createActivity("1", "Actividad 1", "Descripción 1", "img1.jpg");
    repository.createActivity("2", "Actividad 2", "Descripción 2", "img2.jpg");
    repository.deleteActivity("2");
    expect(repository.getAllActivities().length).toBe(1);
  });

  it("Debería retornar la lista de elementos", function () {
    repository.createActivity("1", "Actividad 1", "Descripción 1", "img1.jpg");
    repository.createActivity("2", "Actividad 2", "Descripción 2", "img2.jpg");
    expect(repository.getAllActivities().length).toBe(2);
  });
});
