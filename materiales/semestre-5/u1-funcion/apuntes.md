# Unidad 1 — Función

**Semestre 5 · Cálculo Diferencial**

## Objetivo de la unidad

Comprender el concepto de función como herramienta para modelar la realidad: identificar su dominio y rango, reconocer sus tipos principales y operar con funciones (suma, resta, producto, cociente y composición).

---

## 1. ¿Qué es una función?

Una **función** $f:D\to\mathbb{R}$ asigna a cada elemento $x$ de un conjunto $D$ (dominio) **un único** valor $f(x)$.

- **Prueba de la recta vertical:** si una recta vertical corta la gráfica en más de un punto, no es función (a un mismo $x$ le corresponderían dos $y$ distintas).
- **Dominio:** todos los valores de $x$ para los que la función está definida.
- **Rango (o recorrido):** todos los valores que puede tomar $f(x)$.

## 2. Cálculo del dominio

| Tipo de función | Restricción | Dominio |
|---|---|---|
| Polinomial | ninguna | $\mathbb{R}$ |
| Racional $P(x)/Q(x)$ | $Q(x)\neq0$ | $\mathbb{R}\setminus\{\text{raíces de }Q\}$ |
| Raíz de índice par $\sqrt[n]{g(x)}$ | $g(x)\geq0$ | resolver la inecuación |
| Logarítmica $\log_a g(x)$ | $g(x)>0$ | resolver la inecuación |
| Exponencial $a^{x}$ | ninguna | $\mathbb{R}$ |

> **Ejemplo:** Dominio de $f(x)=\dfrac{1}{x-3}$: se excluye $x=3$ → $\mathrm{Dom}\,f=\mathbb{R}\setminus\{3\}$
>
> **Ejemplo:** Dominio de $f(x)=\sqrt{x-2}$: se necesita $x-2\geq0 \Rightarrow x\geq2$ → $\mathrm{Dom}\,f=[2,+\infty)$

## 3. Tipos de funciones

- **Lineal:** $f(x)=mx+b$ (gráfica: recta).
- **Polinomial:** $f(x)=a_nx^n+\dots+a_1x+a_0$.
- **Racional:** cociente de dos polinomios.
- **Exponencial:** $f(x)=a^x$, $a>0$, $a\neq1$.
- **Logarítmica:** $f(x)=\log_a x$ (inversa de la exponencial).
- **Trigonométrica:** $\sin x$, $\cos x$, $\tan x$, etc.
- **Definida por partes (a trozos):** distinta expresión según el intervalo de $x$.

## 4. Operaciones con funciones

Dadas $f$ y $g$:

$$(f+g)(x)=f(x)+g(x)\qquad (f-g)(x)=f(x)-g(x)$$
$$(f\cdot g)(x)=f(x)\cdot g(x)\qquad \left(\frac{f}{g}\right)(x)=\frac{f(x)}{g(x)}\ \ (g(x)\neq0)$$

**Composición:**
$$(g\circ f)(x)=g\big(f(x)\big)$$

El dominio de $g\circ f$ son los $x$ del dominio de $f$ tales que $f(x)$ esté en el dominio de $g$.

> **Ejemplo:** $f(x)=x+1$, $g(x)=x^2$.
> $(g\circ f)(x)=g(f(x))=(x+1)^2=x^2+2x+1$
> $(f\circ g)(x)=f(g(x))=x^2+1$
>
> Nótese que $(g\circ f)(x)\neq(f\circ g)(x)$: **la composición no es conmutativa.**

> **Ejemplo (dominio de un cociente):** $f(x)=x+2$, $g(x)=x-5$. $\left(\dfrac{f}{g}\right)(x)=\dfrac{x+2}{x-5}$, dominio $\mathbb{R}\setminus\{5\}$.

---

## Errores comunes

- Confundir dominio (valores de entrada) con rango (valores de salida).
- Olvidar excluir del dominio de una composición los valores donde $f(x)$ cae fuera del dominio de $g$.
- Pensar que $(f\circ g)(x)=(g\circ f)(x)$ siempre (en general son distintas).

## Resumen / formulario rápido

- Función: a cada $x$ le corresponde **un único** $f(x)$.
- Racional → excluir raíces del denominador. Raíz par → radicando ≥ 0. Logaritmo → argumento > 0.
- $(g\circ f)(x)=g(f(x))$, en general $\neq(f\circ g)(x)$.
