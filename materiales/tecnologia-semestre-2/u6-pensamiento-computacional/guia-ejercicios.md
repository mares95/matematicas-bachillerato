# Guía de actividades — Unidad 6: El pensamiento computacional como estrategia para la solución de problemas

**Tecnología · Año 1 · Semestre 2**

## Parte A — Opción múltiple / Verdadero y Falso

1. Dividir un problema grande en partes más pequeñas se llama: **(a) abstracción / (b) descomposición)**.
2. Ignorar detalles irrelevantes y quedarse con lo esencial de un problema se llama: **(a) abstracción / (b) reconocimiento de patrones)**.
3. Un rombo en un diagrama de flujo representa: **(a) una decisión / (b) un proceso)**.
4. Una falla de sintaxis es detectada automáticamente por la computadora. **(V / F)**
5. Una falla de lógica siempre genera un mensaje de error visible. **(V / F)**
6. Si un programa generado por IA "se ve bien", no es necesario probarlo con casos de prueba antes de usarlo. **(V / F)**

## Parte B — Traza de algoritmos (ejecuta el algoritmo a mano)

7. Usando el algoritmo del "mayor de tres números" de los apuntes, ¿qué resultado da con a=12, b=4, c=9? Muestra la traza paso a paso.
8. Usando el algoritmo de "contar números pares entre 1 y N" de los apuntes, ¿qué resultado da con N=7? Muestra la traza paso a paso.

## Parte C — Mini-proyecto: diseña tu propio algoritmo

9. Diseña un algoritmo (en pseudocódigo o diagrama de flujo) que reciba una calificación (0-100) y determine si el estudiante "Aprobó" (60 o más) o "No aprobó" (menos de 60). Pruébalo a mano con al menos 2 casos: uno donde apruebe y otro donde no.

**Lista de cotejo para el mini-proyecto (Parte C):**

| Criterio | Cumple |
|---|---|
| El algoritmo tiene inicio, proceso claro y fin | ☐ |
| Usa correctamente una estructura condicional | ☐ |
| Se probó a mano con al menos 2 casos distintos | ☐ |
| El resultado de ambas pruebas es el esperado | ☐ |

---

## Clave de respuestas

1. **(b)** descomposición
2. **(a)** abstracción
3. **(a)** una decisión
4. **V**
5. **F** — una falla de lógica no genera error visible; el programa corre pero da un resultado incorrecto
6. **F** — siempre debe probarse con casos de prueba antes de confiar en el código
7. Traza: ¿12>4? Sí → mayor=12. ¿9>12? No → mayor sigue siendo 12. **Resultado: 12**
8. Traza: i=1(no),2(sí,c=1),3(no),4(sí,c=2),5(no),6(sí,c=3),7(no). **Resultado: contador = 3** (los pares 2,4,6)
9. Respuesta modelo:
```
Inicio
  Leer calificacion
  Si calificacion >= 60 entonces
      Escribir "Aprobó"
  Si no
      Escribir "No aprobó"
  Fin Si
Fin
```
Prueba 1 (calificacion=75): 75≥60 → "Aprobó" ✓. Prueba 2 (calificacion=45): 45≥60 es falso → "No aprobó" ✓. Se evalúa también con la lista de cotejo.
