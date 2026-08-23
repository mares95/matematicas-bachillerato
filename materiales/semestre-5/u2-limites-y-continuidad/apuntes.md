# Unidad 2 — Límites y Continuidad

**Semestre 5 · Cálculo Diferencial**

## Objetivo de la unidad

Calcular límites de funciones aplicando métodos algebraicos, distinguir cuándo un límite existe y determinar si una función es continua en un punto.

---

## 1. Idea intuitiva de límite

$$\lim_{x\to a}f(x)=L$$

significa que $f(x)$ se acerca cada vez más a $L$ conforme $x$ se acerca a $a$ (sin necesidad de que $x$ llegue a valer $a$).

**Límites laterales:** por la izquierda $\lim_{x\to a^-}f(x)$ y por la derecha $\lim_{x\to a^+}f(x)$.

$$\lim_{x\to a}f(x)=L \iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L$$

Si los límites laterales son distintos, **el límite no existe**.

## 2. Cálculo directo (sustitución)

Si al sustituir $x=a$ se obtiene un número real, ese es el límite.

> $\lim_{x\to 2}(x^2+3x)=4+6=10$

## 3. Indeterminación $\dfrac{0}{0}$

Se resuelve **factorizando** y simplificando, o **racionalizando** (multiplicando por el conjugado) si hay raíces.

> **Ejemplo (factorización):** $\lim_{x\to3}\dfrac{x^2-9}{x-3}=\lim_{x\to3}\dfrac{(x-3)(x+3)}{x-3}=\lim_{x\to3}(x+3)=6$

> **Ejemplo (conjugado):** $\lim_{x\to0}\dfrac{\sqrt{x+4}-2}{x}$
> $=\lim_{x\to0}\dfrac{(\sqrt{x+4}-2)(\sqrt{x+4}+2)}{x(\sqrt{x+4}+2)}=\lim_{x\to0}\dfrac{x+4-4}{x(\sqrt{x+4}+2)}=\lim_{x\to0}\dfrac{1}{\sqrt{x+4}+2}=\dfrac14$

## 4. Límites al infinito (indeterminación $\infty/\infty$)

Para $\lim_{x\to\infty}\dfrac{P(x)}{Q(x)}$ con $P,Q$ polinomios, se comparan los grados:

| Comparación de grados | Resultado |
|---|---|
| grado($P$) < grado($Q$) | 0 |
| grado($P$) = grado($Q$) | cociente de los coeficientes principales |
| grado($P$) > grado($Q$) | $+\infty$ o $-\infty$ |

> $\lim_{x\to\infty}\dfrac{3x^2+2x}{5x^2-1}=\dfrac35$ (mismo grado)
>
> $\lim_{x\to\infty}\dfrac{2x+1}{x^2+3}=0$ (grado numerador menor)

## 5. Continuidad

Una función $f$ es **continua en $x=a$** si se cumplen las tres condiciones:

1. $f(a)$ existe.
2. $\displaystyle\lim_{x\to a}f(x)$ existe.
3. $\displaystyle\lim_{x\to a}f(x)=f(a)$.

### Tipos de discontinuidad

| Tipo | Qué pasa | Ejemplo |
|---|---|---|
| **Evitable (removible)** | el límite existe pero no coincide con $f(a)$, o $f(a)$ no está definida | "hueco" en la gráfica |
| **No evitable de salto** | los límites laterales existen pero son distintos | función a trozos mal empalmada |
| **No evitable esencial (asintótica)** | el límite es infinito | asíntota vertical |

> **Ejemplo (evitable):** $f(x)=\dfrac{x^2-4}{x-2}$ para $x\neq2$, y $f(2)=5$.
> $\lim_{x\to2}f(x)=\lim_{x\to2}(x+2)=4$, pero $f(2)=5\neq4$ → discontinuidad **evitable** en $x=2$.

> **Ejemplo (salto):** $f(x)=\begin{cases}x+1 & x<2\\ x^2+2 & x\geq2\end{cases}$
> $\lim_{x\to2^-}f(x)=3$, $\lim_{x\to2^+}f(x)=6$. Como $3\neq6$, el límite no existe → discontinuidad de **salto**.

---

## Errores comunes

- Sustituir directamente en una indeterminación $0/0$ y concluir (erróneamente) que el límite no existe, sin intentar factorizar o racionalizar primero.
- Olvidar revisar los **dos** límites laterales en funciones a trozos.
- Confundir "el límite no existe" con "la función no es continua": son conceptos relacionados pero distintos (una función puede no ser continua en un punto aunque el límite sí exista, si no coincide con $f(a)$).

## Resumen / formulario rápido

- $0/0$: factorizar o racionalizar.
- $\infty/\infty$ en racionales: comparar grados del numerador y denominador.
- Continuidad en $a$: $f(a)$ existe, el límite existe, y son iguales.
