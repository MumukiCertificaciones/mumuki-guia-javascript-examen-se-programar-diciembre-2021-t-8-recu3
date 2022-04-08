function transform(texto) {
  return texto.toString().toLowerCase(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

describe("", function() {
  it("Está fresco si la temperatura es" + (Number($TEMPERATURA_CORTE) - 2), function() {
    assert.equal(transform($FUNCION(Number($TEMPERATURA_CORTE) - 2)), "esta fresco");
  });
  
  it("Está fresco si la temperatura es" +  $TEMPERATURA_MENOR, function() {
    assert.equal(transform($FUNCION(Number($TEMPERATURA_MENOR))), "esta fresco");
  });
  
  it("Está caluroso si la temperatura es" + $TEMPERATURA_CORTE, function() {
    assert.equal(transform($FUNCION(Number($TEMPERATURA_CORTE))), "esta caluroso");
  });
  
  it("Está caluroso si la temperatura es" + (Number($TEMPERATURA_CORTE) + 1), function() {
    assert.equal(transform($FUNCION(Number($TEMPERATURA_CORTE) +1)), "esta caluroso");
  });
});