En una empresa de viajes :sailboat: guardan registro de los viajes realizados por sus clientes de la siguiente forma:

```javascript
let luca = {
  nombre: "Luca Maggio",
  destinos: ["Neuquén", "Salta", "Mendoza", "Córdoba"],
  fechaUltimoViaje: "15/11/2021"
}

let margarita = {
  nombre: "Margarita Lopez",
  destinos: ["Jujuy", "Tucumán"],
  fechaUltimoViaje: "19/09/2021"
}
```

> Definí la función `$FUNCION` que permita obtener un resumen de la información registrada. Por ejemplo:
>
```javascript
ム $FUNCION(luca)
"Luca Maggio $STRING_VIAJE 15/11/2021 $STRING_VECES 4 viajes"
>
ム $FUNCION(margarita)
"Margarita Lopez $STRING_VIAJE 19/09/2021 $STRING_VECES 2 viajes"
```
