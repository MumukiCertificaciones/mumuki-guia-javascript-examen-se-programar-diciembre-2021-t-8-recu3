describe("", function() {
  it("'amarillo' es un color primario", function() {
    assert($FUNCION('amarillo'));
  });
  
  it("'rojo' es un color primario", function() {
    assert($FUNCION('rojo'));
  });
  
  it("'azul' es un color primario", function() {
    assert($FUNCION('azul'));
  });
  
  it("'naranja' no es un color primario", function() {
    assert(!$FUNCION('naranja'));
  });
  
  it("'verde' no es un color primario", function() {
    assert(!$FUNCION('verde'));
  });
})