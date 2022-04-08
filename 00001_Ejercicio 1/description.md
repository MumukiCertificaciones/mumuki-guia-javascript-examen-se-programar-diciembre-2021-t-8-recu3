Una extravagante repostería nos pidió ayuda para decorar su famosa torta rectangular de chocolate :chocolate_bar::

<gs-board>
  GBB/1.0
  size 4 3
  cell 0 0 Negro 1
  cell 0 1 Negro 1
  cell 0 2 Negro 1
  cell 1 0 Negro 1
  cell 1 1 Negro 1
  cell 1 2 Negro 1
  cell 2 0 Negro 1
  cell 2 1 Negro 1
  cell 2 2 Negro 1
  cell 3 0 Negro 1 
  cell 3 1 Negro 1
  cell 3 2 Negro 1 
  head 0 0
</gs-board>

Para eso crearemos un programa que ponga confites de color `$COLOR` en sus extremos de la siguiente forma:

<gs-board>
        GBB/1.0
        size 4 3
        cell 0 0 Negro 1 $COLOR 1
        cell 0 1 Negro 1
        cell 0 2 Negro 1 $COLOR 1
        cell 1 0 Negro 1
        cell 1 1 Negro 1
        cell 1 2 Negro 1
        cell 2 0 Negro 1
        cell 2 1 Negro 1
        cell 2 2 Negro 1
        cell 3 0 Negro 1 $COLOR 1
        cell 3 1 Negro 1
        cell 3 2 Negro 1 $COLOR 1
        head 0 0
</gs-board>

> Creá el programa que decore la torta de la forma solicitada. El cabezal comienza en el extremo Sur Oeste y no importa dónde termina.