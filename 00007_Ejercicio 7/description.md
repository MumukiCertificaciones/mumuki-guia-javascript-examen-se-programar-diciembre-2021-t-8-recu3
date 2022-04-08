¡Dejemos atrás a JavaScript para pasar a Ruby! :tada:

La famosa novela gráfica Sandman tendrá pronto su propia serie :hourglass_flowing_sand:. También quieren desarrollar un videojuego de la misma y para ello vamos a modelar a su protagonista: `$OBJETO`. De él sabemos que:

* tiene un descanso inicial de $DESCANSO_INICIAL;
* puede `$METODO_INCREMENTA` una cantidad de minutos y aumentar su descanso en esa cantidad;
* si tiene menos de $DESCANSO_CORTE de descanso diremos que  `$METODO_DESCANSO`.

> Definí en Ruby, el objeto `$OBJETO` que tenga un atributo `@descanso` con su getter. El objeto entiende los mensajes `$METODO_INCREMENTA` (que recibe minutos como argumento) y `$METODO_DESCANSO`. No te olvides de inicializar el atributo `@descanso` con el valor correspondiente.