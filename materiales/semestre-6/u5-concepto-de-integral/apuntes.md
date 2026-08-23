# Unidad 5 — Concepto de integral como antiderivada

**Semestre 6 · Cálculo Integral**

## Objetivo de la unidad

Comprender los conceptos de diferencial, primitiva y antiderivada, y construir la idea de integral indefinida como el proceso inverso de la derivación.

---

## 1. Primitiva o antiderivada

Una función $F$ es **primitiva** (o antiderivada) de $f$ si $F'(x)=f(x)$.

> **Ejemplo:** $F(x)=x^2$ es primitiva de $f(x)=2x$, porque $F'(x)=2x$.

Cualquier primitiva de $f$ se puede escribir como $F(x)+C$, con $C$ una constante real, porque la derivada de una constante es cero. Por eso, cuando integramos, siempre agregamos la **constante de integración** $C$: representa una familia infinita de curvas, todas con la misma "forma" pero desplazadas verticalmente.

## 2. Integral indefinida

$$\int f(x)\,dx = F(x)+C \iff F'(x)=f(x)$$

El símbolo $\int$ indica el proceso de integración, $f(x)$ es el **integrando** y $dx$ indica la variable respecto de la cual integramos.

## 3. Propiedades de linealidad

$$\int \big(f(x)\pm g(x)\big)\,dx=\int f(x)\,dx \pm \int g(x)\,dx \qquad\qquad \int k\,f(x)\,dx = k\int f(x)\,dx\ \ (k\text{ constante})$$

## 4. Reglas básicas de integración

| Función | Integral |
|---|---|
| $k$ (constante) | $kx+C$ |
| $x^n\ (n\neq-1)$ | $\dfrac{x^{n+1}}{n+1}+C$ |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert+C$ |
| $e^x$ | $e^x+C$ |
| $a^x\ (a>0,a\neq1)$ | $\dfrac{a^x}{\ln a}+C$ |

> **Ejemplo resuelto:** $\displaystyle\int (3x^2-4x+5)\,dx = x^3-2x^2+5x+C$
> *Comprobación:* $\dfrac{d}{dx}(x^3-2x^2+5x+C)=3x^2-4x+5$ ✓ coincide con el integrando.

> **Ejemplo resuelto:** $\displaystyle\int\left(\frac{2}{x}+3e^x\right)dx = 2\ln|x|+3e^x+C$
> *Comprobación:* $\dfrac{d}{dx}(2\ln|x|+3e^x)=\dfrac{2}{x}+3e^x$ ✓

⚠️ Error común: usar la regla de la potencia $\left(\frac{x^{n+1}}{n+1}\right)$ cuando $n=-1$; en ese caso el denominador sería 0. Para $\int \frac1x\,dx$ **siempre** se usa $\ln|x|+C$.

## 5. Interpretación geométrica

Como todas las primitivas de una misma función difieren solo en una constante $C$, sus gráficas son **traslaciones verticales** unas de otras: todas tienen la misma pendiente en cada valor de $x$ (porque comparten la misma derivada), pero cruzan el eje Y en puntos distintos según el valor de $C$.

---

## Resumen / formulario rápido

- $\int f\,dx = F(x)+C \iff F'=f$
- $\int x^n dx=\dfrac{x^{n+1}}{n+1}+C\ (n\neq-1)$, $\int \dfrac1x dx=\ln|x|+C$, $\int e^x dx=e^x+C$
- La integral es lineal: se puede integrar término a término y sacar constantes.
- Nunca olvides el $+C$ en la integral indefinida.
