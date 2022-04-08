Un grupo de estudiantes nos solicitó ayuda para armar la bandera de su curso utilizando Gobstones :person_juggling:. La bandera tendrá 3 franjas de 4 celdas cada una y quieren probar la combinación de distintos colores. Para ello definiremos un procedimiento que reciba como argumento el color de las franjas superior e inferior y el color de la franja del medio. Por ejemplo, si lo invocamos con los colores `$COLOR_EXTREMOS` y `$COLOR_MEDIO` haciendo `$PROCEDIMIENTO($COLOR_EXTREMOS, $COLOR_MEDIO)` la bandera deberá verse así:

<gs-board>
        GBB/1.0
        size 4 3
        cell 0 0 $COLOR_EXTREMOS 1
        cell 0 1 $COLOR_MEDIO 1
        cell 0 2 $COLOR_EXTREMOS 1
        cell 1 0 $COLOR_EXTREMOS 1
        cell 1 1 $COLOR_MEDIO 1
        cell 1 2 $COLOR_EXTREMOS 1
        cell 2 0 $COLOR_EXTREMOS 1
        cell 2 1 $COLOR_MEDIO 1
        cell 2 2 $COLOR_EXTREMOS 1
        cell 3 0 $COLOR_EXTREMOS 1 
        cell 3 1 $COLOR_MEDIO 1
        cell 3 2 $COLOR_EXTREMOS 1 
        head 0 0
</gs-board>

> Definí el procedimiento `$PROCEDIMIENTO` que reciba dos colores y arme una bandera a partir de ellos. El cabezal comienza en el extremo Sur Oeste y no importa dónde finaliza.