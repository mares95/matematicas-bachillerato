# Unidad 4 — Sistemas de ecuaciones

**Semestre 1 · Pensamiento Matemático I (énfasis en aritmética y álgebra)**

## Objetivo de la unidad

Plantear y resolver sistemas de ecuaciones 2×2 y 3×3 a partir de situaciones contextualizadas, empleando distintos procedimientos y comprobando la respuesta.

---

## 1. Sistemas de dos ecuaciones con dos incógnitas (2×2)

### a) Sustitución

Se despeja una variable en una ecuación y se sustituye en la otra.

> $\begin{cases}x+y=7\\ 2x-y=2\end{cases}$
> De la primera: $y=7-x$. Sustituyendo: $2x-(7-x)=2 \Rightarrow 3x=9 \Rightarrow x=3,\ y=4$

### b) Igualación

Se despeja la **misma** variable en ambas ecuaciones y se igualan las expresiones.

### c) Reducción (suma y resta / eliminación)

Se multiplican las ecuaciones por números convenientes para que, al sumarlas, una variable se elimine.

> $\begin{cases}3x+2y=16\\ 2x-2y=4\end{cases}$
> Sumando directamente: $5x=20 \Rightarrow x=4,\ y=2$

### d) Método gráfico

Cada ecuación lineal representa una recta. El punto donde se cruzan **es** la solución del sistema.

### e) Determinantes (regla de Cramer, 2×2)

$$x=\dfrac{\begin{vmatrix}c_1&b_1\\c_2&b_2\end{vmatrix}}{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}}\qquad y=\dfrac{\begin{vmatrix}a_1&c_1\\a_2&c_2\end{vmatrix}}{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}}$$

para el sistema $\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}$, con $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$.

## 2. Clasificación de sistemas (interpretación geométrica)

| Tipo | Rectas | Nº de soluciones |
|---|---|---|
| Compatible determinado (S.C.D.) | se cruzan en un punto | Una única solución |
| Compatible indeterminado (S.C.I.) | son la misma recta | Infinitas soluciones |
| Incompatible (S.I.) | son paralelas (no se cruzan) | Ninguna solución |

Con determinantes: si el determinante del sistema (denominador) es **distinto de cero**, el sistema es S.C.D. Si es cero, hay que revisar si es S.C.I. o S.I.

## 3. Sistemas de tres ecuaciones con tres incógnitas (3×3)

### a) Reducción (eliminación gaussiana)

Se combina un par de ecuaciones para eliminar una variable, luego otro par, hasta quedarnos con una ecuación de una sola incógnita; después se sustituye "hacia atrás".

### b) Determinantes (regla de Cramer, 3×3)

Igual que en 2×2 pero con determinantes de orden 3 (regla de Sarrus): se sustituye la columna de la incógnita buscada por la columna de términos independientes y se divide entre el determinante del sistema.

> **Ejemplo (planteo):** "La suma de tres números es 12. El doble del primero más el segundo menos el tercero es 5. El primero menos el segundo más el doble del tercero es 9." → se traduce a
> $$\begin{cases}x+y+z=12\\ 2x+y-z=5\\ x-y+2z=9\end{cases}$$
> y se resuelve por reducción o por determinantes.

---

## Errores comunes

- Al usar reducción, olvidar multiplicar **toda** la ecuación (incluido el término independiente) por el factor elegido.
- Confundir "sin solución" (rectas paralelas) con "infinitas soluciones" (rectas coincidentes): hay que revisar si, además del determinante cero, las ecuaciones son o no múltiplos exactos una de otra.
- En 3×3, arrastrar un error de signo en la primera eliminación y que se propague a todo el resto del procedimiento (conviene comprobar la solución al final).

## Resumen / formulario rápido

- Métodos 2×2: sustitución, igualación, reducción, gráfico, determinantes.
- Determinante del sistema = 0 → no hay solución única (S.C.I. o S.I.).
- 3×3: reducción (Gauss) o Cramer.
- Siempre comprobar la solución sustituyendo en **todas** las ecuaciones originales.
