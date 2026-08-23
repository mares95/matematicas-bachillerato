# Unidad 4 — La Parábola

**Semestre 4 · Matemáticas IV (Geometría Analítica)**

## Objetivo de la unidad

Conocer la parábola como lugar geométrico, calcular su ecuación (ordinaria y general) conociendo sus elementos —con vértice en el origen y fuera de él—, y encontrar los elementos a partir de la ecuación general para resolver problemas de aplicación.

---

## 1. Definición

Una **parábola** es el lugar geométrico de los puntos P(x,y) del plano que equidistan de un punto fijo llamado **foco** (F) y de una recta fija llamada **directriz**.

## 2. Elementos

- **Vértice (V):** punto medio entre el foco y la directriz.
- **Foco (F):** punto fijo interior a la curva.
- **Directriz:** recta fija exterior a la curva.
- **Eje de simetría:** recta que pasa por el vértice y el foco.
- **Parámetro (p):** distancia del vértice al foco (igual a la distancia del vértice a la directriz).
- **Lado recto:** cuerda que pasa por el foco, perpendicular al eje; su longitud es $|4p|$.

## 3. Ecuación ordinaria con vértice en el origen

| Eje | Ecuación | Foco | Directriz | Abre hacia |
|---|---|---|---|---|
| Horizontal | $y^2=4px$ | $(p,0)$ | $x=-p$ | derecha si $p>0$, izquierda si $p<0$ |
| Vertical | $x^2=4py$ | $(0,p)$ | $y=-p$ | arriba si $p>0$, abajo si $p<0$ |

> **Ejemplo:** vértice $(0,0)$, foco $(3,0)$ → eje horizontal, $p=3$: $y^2=12x$.
> Verificación: el foco de $y^2=4px$ es $(p,0)=(3,0)$ ✓. Directriz $x=-3$. Lado recto $=|4p|=12$.

## 4. Ecuación ordinaria con vértice fuera del origen $(h,k)$

$$\text{Horizontal: } (y-k)^2=4p(x-h) \qquad \text{Vertical: } (x-h)^2=4p(y-k)$$

> **Ejemplo:** vértice $(3,-2)$, foco $(3,1)$. Mismo valor de $x$ ⟹ eje vertical. $p=1-(-2)=3$ (abre hacia arriba).
> $$(x-3)^2=12(y+2)$$
> Verificación: en el vértice $(3,-2)$: $(3-3)^2=0$ y $12(-2+2)=0$ ✓. El foco debe estar en $(h,k+p)=(3,-2+3)=(3,1)$ ✓.

## 5. De la ecuación general a la ordinaria (completando el cuadrado)

La parábola con eje vertical tiene forma general $Ax^2+Dx+Ey+F=0$ (sin término en $y^2$); con eje horizontal, $Cy^2+Dx+Ey+F=0$ (sin término en $x^2$).

> **Ejemplo:** $y^2+8y-4x+20=0$
> $y^2+8y=(y+4)^2-16$
> $(y+4)^2-16-4x+20=0 \Rightarrow (y+4)^2=4x-4=4(x-1)$
> **Vértice $(1,-4)$**, eje horizontal, $4p=4\Rightarrow p=1$ (abre a la derecha), **foco $(2,-4)$**, **directriz $x=0$**.
> Verificación: sustituyendo el vértice en la ecuación original: $16-32-4+20=0$ ✓.

---

## Errores comunes

- Confundir el signo de $p$: si la parábola abre a la izquierda o hacia abajo, $p$ es **negativo**.
- Olvidar que al completar el cuadrado hay que sumar/restar la misma cantidad en ambos lados (o compensarla del lado correcto).
- Calcular el lado recto sin el valor absoluto cuando $p<0$.

## Resumen / formulario rápido

- $y^2=4px$ (horizontal) / $x^2=4py$ (vertical), vértice en el origen.
- $(y-k)^2=4p(x-h)$ / $(x-h)^2=4p(y-k)$, vértice en $(h,k)$.
- $p$ = distancia vértice–foco; lado recto $=|4p|$.
