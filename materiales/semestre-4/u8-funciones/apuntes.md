# Unidad 8 — Funciones

**Semestre 4 · Matemáticas IV (Pre-Cálculo)**

## Objetivo de la unidad

Conocer el concepto de función, distinguirlo de una relación general, calcular dominio y rango, identificar tipos básicos de funciones y relacionarlas con su gráfica —como preparación directa para Cálculo Diferencial (Semestre 5).

---

## 1. Relación y función

- **Relación:** cualquier conjunto de pares ordenados $(x,y)$.
- **Función:** una relación en la que **cada valor de x** (entrada) se asocia con **un único valor de y** (salida).

> **Ejemplo:** $\{(1,2),(2,3),(1,5)\}$ **no** es función (x=1 tiene dos salidas distintas: 2 y 5).
> $\{(1,2),(2,2),(3,2)\}$ **sí** es función (cada x tiene una única y, aunque se repita el valor de y).

### Prueba de la recta vertical

En una gráfica, si **cualquier** recta vertical corta la curva en más de un punto, la relación **no** es función.

## 2. Dominio y rango

- **Dominio:** conjunto de todos los valores permitidos de $x$.
- **Rango:** conjunto de todos los valores que toma $y$.

> **Ejemplo:** $f(x)=\sqrt{x-3}$. El radicando no puede ser negativo: $x-3\geq0 \Rightarrow x\geq3$. **Dominio: $[3,\infty)$**. Como la raíz cuadrada nunca es negativa, **rango: $[0,\infty)$**.

> **Ejemplo:** $f(x)=\dfrac{1}{x-2}$. El denominador no puede ser 0: $x\neq2$. **Dominio: $\mathbb{R}\setminus\{2\}$**.

## 3. Tipos de funciones básicas

| Tipo | Ejemplo | Dominio | Rango |
|---|---|---|---|
| Constante | $f(x)=c$ | $\mathbb{R}$ | $\{c\}$ |
| Identidad | $f(x)=x$ | $\mathbb{R}$ | $\mathbb{R}$ |
| Valor absoluto | $f(x)=\lvert x\rvert$ | $\mathbb{R}$ | $[0,\infty)$ |
| Polinomial | $f(x)=x^2-3x+2$ | $\mathbb{R}$ | depende del grado |
| Por partes | ver abajo | depende | depende |

### Función por partes (piecewise)

Se define con reglas distintas según el intervalo de $x$.

> $$f(x)=\begin{cases}x+1 & \text{si } x<0\\ x^2 & \text{si } x\geq0\end{cases}$$
> $f(-2)=-2+1=-1$ (porque $-2<0$) · $f(3)=3^2=9$ (porque $3\geq0$)

## 4. Relación con las cónicas ya vistas

No toda ecuación de una cónica es una función: una circunferencia o una elipse completas **no** pasan la prueba de la recta vertical (para un mismo $x$ hay dos valores de $y$, arriba y abajo). Al despejar $y$ obtenemos **dos funciones** (la rama positiva y la negativa), por ejemplo de $x^2+y^2=25$: $y=\sqrt{25-x^2}$ y $y=-\sqrt{25-x^2}$.

Una parábola con eje vertical **sí** es función de $x$ (cada $x$ da un solo $y$); una parábola con eje horizontal **no** lo es.

---

## Errores comunes

- Pensar que una función no puede repetir valores de $y$ (falso: lo que no puede repetirse es el valor de $x$).
- Olvidar restricciones del dominio en raíces (radicando ≥ 0) y fracciones (denominador ≠ 0).
- Evaluar una función por partes con la regla equivocada por no fijarse bien en la desigualdad.

## Resumen / formulario rápido

- Función: cada $x$ → un único $y$. Prueba de la recta vertical.
- Dominio: raíces (radicando ≥0), fracciones (denominador ≠0); si no hay restricciones, dominio = ℝ.
- Constante, identidad, valor absoluto, polinomial, por partes: tipos básicos a reconocer con su gráfica.
