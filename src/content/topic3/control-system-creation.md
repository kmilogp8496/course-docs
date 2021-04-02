# Creación de un sistema de monitorización y control para un proceso

## Ejercicio

### Crear un sistema de control con SCADA sencillo utilizando una interfaz visual para interactuar con un proceso, el sistema tendrá elementos indicadores para observar los estados de las variables, elementos actuadores como botones e interruptores para ejercer sobre los procesos, gráficos históricos con el comportamiento de las variables en el tiempo

### Requisitos

- Contar con interfaz visual donde se puedan apreciar las magnitudes controladas
- Disponer de controles en la misma interfaz para operar sobre los actuadores
- Los sensores a utilizar deben ser propuestos, los mismos deberán ser acordes a las tareas
- El acondicionamiento de la señal no se realizará, se indicará las señales
- Se debe disponer de la posibilidad de simular las mediciones de los sensores y ver una simulación temporal con las medidas del mismo hasta que el sistema alcance un estado estacionario
- Posibilidad de comunicación con api REST para obtener las lecturas de los sensores

#### Control de temperatura y luz en una habitación

Se desea controlar el encendido y apagado de las luces en una habitación, así como la temperatura de la misma, a lo largo de los horarios del día.

#### Control de llenado en un tanque

Se desea controlar el llenado de un tanque de un hotel el cual posee 4 motores para esta tarea. También se cuenta con una cisterna para almacenar el agua proveniente de la calle.
