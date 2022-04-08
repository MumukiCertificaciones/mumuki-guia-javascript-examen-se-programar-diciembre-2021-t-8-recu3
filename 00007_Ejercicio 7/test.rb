it "$OBJETO tiene $DESCANSO_INICIAL de descanso inicial" do
  expect($OBJETO.descanso).to be $DESCANSO_INICIAL
end

it "$OBJETO aumenta su descanso en 10 si le enviamos $METODO_INCREMENTA 10" do
  $OBJETO.descanso = 20
  $OBJETO.$METODO_INCREMENTA 10
  expect($OBJETO.descanso).to be 30
end

it "$OBJETO aumenta su descanso en 48 si le enviamos $METODO_INCREMENTA 48" do
  $OBJETO.descanso = 10
  $OBJETO.$METODO_INCREMENTA 48 
  expect($OBJETO.descanso).to be 58
end

it "$OBJETO.$METODO_DESCANSO es verdadero si el descanso es menor a $DESCANSO_CORTE" do
  $OBJETO.descanso = ($DESCANSO_CORTE - 1)
  expect($OBJETO.$METODO_DESCANSO).to be true
end

it "$OBJETO.$METODO_DESCANSO es falso si el descanso es igual a $DESCANSO_CORTE" do
  $OBJETO.descanso = $DESCANSO_CORTE
  expect($OBJETO.$METODO_DESCANSO).to be false
end

it "$OBJETO.$METODO_DESCANSO es falso si el descanso es mayor a $DESCANSO_CORTE" do
  $OBJETO.descanso = ($DESCANSO_CORTE + 1)
  expect($OBJETO.$METODO_DESCANSO).to be false
end