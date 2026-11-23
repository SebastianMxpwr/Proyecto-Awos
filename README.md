# Proyecto-Awos

Ejercicio de 2020 de la materia AWOS, para practicar **yargs**, **promesas** y el módulo **fs** de Node.js.

## Qué hace

Es una aplicación de línea de comandos que genera números (del 0 al 99) o letras (de la a a la z) al azar, y los imprime en la consola o los guarda en un archivo `.txt`.

| Comando | Qué hace |
|---------|----------|
| `node app.js imprimirn -e 5 -s Numero` | Imprime 5 números al azar |
| `node app.js crearn -e 5 -s Numero` | Guarda 5 números en `Archivos_Numeros/` |
| `node app.js imprimirl -e 5 -s Letra` | Imprime 5 letras al azar |
| `node app.js crearl -e 5 -s Letra` | Guarda 5 letras en `Archivos_Letras/` |

- `-e` (`--extencion`): cuántos números o letras se generan.
- `-s` (`--secuencia`): debe decir exactamente `Numero` o `Letra`.

Hay que correrla desde la carpeta del proyecto, porque los archivos se guardan con rutas relativas.

## Estado

Ejercicio terminado: se conserva tal cual, sin mantenimiento. Tiene fallas conocidas: las letras siempre salen en mayúsculas, a veces aparece la palabra "undefined" entre las letras y `imprimirn -s Letra` crea un archivo de letras en lugar de imprimir.
