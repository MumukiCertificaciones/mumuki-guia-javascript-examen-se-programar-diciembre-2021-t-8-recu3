function transform(texto) {
  let  textoSinTildes = texto.toString().toLowerCase(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return textoSinTildes.replace('ano', 'año');
}

describe("", function() {
  let juan = {
    nombre: "Juan Arrever",
    destinos: ["Liverpool", "Acapulco", "Costa del Este"],
    fechaUltimoViaje: "14/10/2011"
  };
  
  let elena = {
    nombre: "Elena Chalver",
    destinos: ["Costa del Este", "Lozano"],
    fechaUltimoViaje: "15/09/2016"
  };
  
  let gustavo = {
    nombre: "Gustavo Girot",
    destinos: ["Villa La Angostura", "Bariloche", "San Martín de Los Andres", "Costa del Este"],
    fechaUltimoViaje: "08/03/2021"
  };
  
  it("el resumen de gustavo nos provee su información", function() {
    assert.equal(transform($FUNCION(gustavo)), transform("gustavo girot $STRING_VIAJE 08/03/2021 $STRING_VECES 4 viajes"))
  })
  
  it("el resumen de juan nos provee su información", function() {
    assert.equal(transform($FUNCION(juan)), transform("juan arrever $STRING_VIAJE 14/10/2011 $STRING_VECES 3 viajes"))
  })
  
  it("el resumen de elena nos provee su información", function() {
    assert.equal(transform($FUNCION(elena)), transform("elena chalver $STRING_VIAJE 15/09/2016 $STRING_VECES 2 viajes"))
  })
})