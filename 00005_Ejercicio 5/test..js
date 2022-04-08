describe("", function() {
  it("Las plantas que están listas para trasplantar de [$ALTURA_MAYOR, 29, 5, $ALTURA_CORTE] son [$ALTURA_MAYOR, 29]", function() {
    assert.deepEqual($FUNCION([Number($ALTURA_MAYOR), 29, 5, Number($ALTURA_CORTE)]), [Number($ALTURA_MAYOR), 29])
  })
  
  it("La unica planta que está lista para trasplantar de [44, 12, $ALTURA_MENOR, 5] es [44]", function() {
    assert.deepEqual($FUNCION([44, 12, Number($ALTURA_MENOR), 5]), [44])
  })
  
  it("No hay plantas que esten listas para trasplantar de [15, 10, 3, 11]", function() {
    assert.deepEqual($FUNCION([15, 10, 3, 11]), [])
  })
})