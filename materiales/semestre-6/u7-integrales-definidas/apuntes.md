# Unidad 7 — Integrales definidas

**Semestre 6 · Cálculo Integral**

## Objetivo de la unidad

Calcular e interpretar integrales definidas como el área concreta bajo una curva, comprendiendo el Teorema Fundamental del Cálculo (regla de Barrow), y aplicarlas al cálculo de áreas entre curvas.

---

## 1. De las sumas de Riemann a la integral definida

Para aproximar el área bajo una curva $y=f(x)$ entre $x=a$ y $x=b$, se divide la región en rectángulos delgados y se suma su área (**suma de Riemann**). Entre más rectángulos (más delgados), mejor es la aproximación. La **integral definida** es el valor exacto al que tiende esa suma cuando el número de rectángulos crece indefinidamente:

$$\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^n f(x_i)\,\Delta x$$

## 2. Teorema Fundamental del Cálculo (regla de Barrow)

Si $F$ es una primitiva de $f$ (es decir, $F'=f$), entonces:

$$\int_a^b f(x)\,dx = F(b)-F(a)$$

Este resultado es lo que conecta la derivación con el cálculo de áreas: **no hace falta usar sumas de Riemann** para calcular el valor exacto, basta encontrar una primitiva y evaluarla en los extremos.

> **Ejemplo resuelto:** $\displaystyle\int_1^3 (2x+1)\,dx$
> Primitiva: $F(x)=x^2+x$.
> $F(3)-F(1)=(9+3)-(1+1)=12-2=\mathbf{10}$

## 3. Propiedades de la integral definida

$$\int_a^a f(x)\,dx=0\qquad \int_a^b f(x)\,dx=-\int_b^a f(x)\,dx\qquad \int_a^b f\,dx+\int_b^c f\,dx=\int_a^c f\,dx$$

## 4. Área bajo una curva

Si $f(x)\geq0$ en $[a,b]$, el área de la región entre la curva y el eje X es:

$$A=\int_a^b f(x)\,dx$$

> **Ejemplo:** área bajo $y=x^2$ entre $x=0$ y $x=2$: $\displaystyle\int_0^2 x^2\,dx=\left[\frac{x^3}{3}\right]_0^2=\frac{8}{3}-0=\frac{8}{3}\ \text{u}^2$

## 5. Área entre dos curvas

Si $f(x)\geq g(x)$ en $[a,b]$ (siendo $a,b$ los puntos de intersección), el área entre ambas es:

$$A=\int_a^b \big[f(x)-g(x)\big]\,dx$$

**Procedimiento:** 1) igualar las funciones para hallar los puntos de intersección, 2) identificar cuál está arriba en ese intervalo, 3) integrar la diferencia (arriba − abajo).

> **Ejemplo resuelto:** área entre $y=x+2$ (recta) y $y=x^2$ (parábola).
> Intersecciones: $x^2=x+2 \Rightarrow x^2-x-2=0 \Rightarrow (x-2)(x+1)=0 \Rightarrow x=-1,\ x=2$.
> En ese intervalo la recta está arriba de la parábola. Área $=\displaystyle\int_{-1}^{2}\big[(x+2)-x^2\big]dx=\left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^{2}$
> En $x=2$: $2+4-\frac{8}{3}=\frac{10}{3}$. En $x=-1$: $0.5-2+\frac13=-\frac{7}{6}$.
> Área $=\dfrac{10}{3}-\left(-\dfrac{7}{6}\right)=\dfrac{20}{6}+\dfrac{7}{6}=\dfrac{27}{6}=\mathbf{4.5\ u^2}$

## 6. (Introducción) Volumen de un sólido de revolución — método del disco

Al girar la región bajo $y=f(x)$ (con $f(x)\geq0$) en $[a,b]$ alrededor del eje X, se genera un sólido cuyo volumen es:

$$V=\pi\int_a^b [f(x)]^2\,dx$$

> **Ejemplo:** girar $y=\sqrt{x}$ en $[0,4]$ alrededor del eje X:
> $V=\pi\displaystyle\int_0^4 x\,dx=\pi\left[\frac{x^2}{2}\right]_0^4=\pi(8)=\mathbf{8\pi}\ \text{u}^3$

---

## Errores comunes

- Restar en el orden equivocado: es siempre $F(b)-F(a)$, con $b$ el límite **superior**.
- Al calcular área entre curvas, olvidar verificar cuál función va "arriba" (si se resta al revés, el resultado da negativo).
- Confundir integral definida (da un número) con integral indefinida (da una función + C).

## Resumen / formulario rápido

- Barrow: $\int_a^b f\,dx=F(b)-F(a)$
- Área bajo curva: $A=\int_a^b f\,dx$ (con $f\geq0$)
- Área entre curvas: $A=\int_a^b(\text{arriba}-\text{abajo})\,dx$
- Volumen de revolución (disco): $V=\pi\int_a^b[f(x)]^2dx$
