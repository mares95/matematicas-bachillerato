# Unidad 3 — Derivadas

**Semestre 5 · Cálculo Diferencial**

## Objetivo de la unidad

Interpretar la derivada como razón de cambio y como pendiente de la recta tangente, y calcular derivadas de funciones polinomiales, exponenciales, logarítmicas y trigonométricas con fluidez.

---

## 1. Definición de derivada (método de los cuatro pasos)

$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$$

Es la **razón de cambio instantánea** de $f$ y la **pendiente de la recta tangente** a la gráfica de $f$ en el punto $x$.

> **Ejemplo (derivada por definición):** $f(x)=x^2$
> 1. $f(x+h)=(x+h)^2=x^2+2xh+h^2$
> 2. $f(x+h)-f(x)=2xh+h^2$
> 3. $\dfrac{f(x+h)-f(x)}{h}=2x+h$
> 4. $\displaystyle\lim_{h\to0}(2x+h)=2x$
>
> Por lo tanto $f'(x)=2x$ (coincide con la regla de la potencia que veremos abajo).

## 2. Notaciones

$$f'(x)\qquad y'\qquad \frac{dy}{dx}\qquad \frac{d}{dx}\big[f(x)\big]$$

## 3. Tabla de derivadas básicas

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |

## 4. Reglas de derivación

| Regla | Fórmula |
|---|---|
| Suma/resta | $(f\pm g)'=f'\pm g'$ |
| Producto | $(f\cdot g)'=f'g+fg'$ |
| Cociente | $\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}$ |
| Cadena | $\big[f(g(x))\big]'=f'(g(x))\cdot g'(x)$ |

> **Ejemplo (regla de la cadena):** $f(x)=(3x+1)^5$
> $f'(x)=5(3x+1)^4\cdot3=15(3x+1)^4$

> **Ejemplo (producto):** $f(x)=x^2\sin x$
> $f'(x)=2x\sin x+x^2\cos x$

> **Ejemplo (cociente):** $f(x)=\dfrac{x+1}{x-1}$
> $f'(x)=\dfrac{(1)(x-1)-(x+1)(1)}{(x-1)^2}=\dfrac{-2}{(x-1)^2}$

> **Ejemplo (combinando reglas: producto + cadena):** $f(x)=e^{2x}\ln x$
> $f'(x)=2e^{2x}\ln x+e^{2x}\cdot\dfrac{1}{x}=e^{2x}\left(2\ln x+\dfrac1x\right)$

---

## Errores comunes

- Derivar $x^n$ como $x^{n-1}$ olvidando multiplicar por $n$.
- Aplicar la regla del producto como si fuera "derivar cada factor y multiplicar" (en vez de $f'g+fg'$).
- Olvidar la regla de la cadena al derivar una función compuesta, por ejemplo derivar $\sin(3x)$ como $\cos(3x)$ en lugar de $3\cos(3x)$.
- Seguir "derivando" un resultado que ya es la derivada final (aplicar la regla de la cadena de más).

## Resumen / formulario rápido

- $f'(x)=\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$ = pendiente de la tangente.
- $(x^n)'=nx^{n-1}$, $(e^x)'=e^x$, $(\ln x)'=1/x$, $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$.
- Producto: $f'g+fg'$. Cociente: $\dfrac{f'g-fg'}{g^2}$. Cadena: $f'(g(x))\cdot g'(x)$.
