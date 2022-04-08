boleto_unico_de_persona = $BOLETO_1.new()
boleto_unico = $BOLETO_1.new()

boleto_saldo_de_persona = $BOLETO_2.new(100)
boleto_saldo = $BOLETO_2.new(200)

persona_con_boleto_unico = Persona.new(boleto_unico_de_persona)
persona_con_boleto_saldo = Persona.new(boleto_saldo_de_persona)

it "Si una persona viaja con su $BOLETO_1 el mismo pasa a estar usado" do
  persona_con_boleto_unico.$METODO_PERSONA
  expect(boleto_unico_de_persona.instance_variable_get('@usado')).to be true
end

it "Si una persona viaja con su $BOLETO_2 disminuye su saldo en $SALDO" do
  persona_con_boleto_saldo.$METODO_PERSONA
  expect(boleto_saldo_de_persona.instance_variable_get('@saldo')).to be (100 - $SALDO)
end

it "Si usamos un $BOLETO_1 el mismo pasa a estar usado" do
  boleto_unico.$METODO_BOLETO
  expect(boleto_unico.instance_variable_get('@usado')).to be true
end

it "Si usamos un $BOLETO_2 disminuye su saldo en $SALDO" do
  boleto_saldo.$METODO_BOLETO
  expect(boleto_saldo.instance_variable_get('@saldo')).to be (200 - $SALDO)
end