# Unidad 3 — Ecuaciones lineales y cuadráticas

**Semestre 1 · Pensamiento Matemático I (énfasis en aritmética y álgebra)**

## Objetivo de la unidad

Plantear y resolver ecuaciones lineales y cuadráticas —incluyendo símbolos de agrupación y coeficientes fraccionarios— para modelar situaciones contextualizadas, y despejar variables en fórmulas de distintas asignaturas.

---

## 1. Ecuaciones lineales

Una ecuación lineal tiene la forma $ax+b=c$. Se resuelve despejando la incógnita: lo que suma pasa restando, lo que multiplica pasa dividiendo (y viceversa), manteniendo la igualdad.

> **Ejemplo con paréntesis:** $3(x-2)+5=2(x+4)$
> $3x-6+5=2x+8$
> $3x-1=2x+8$
> $x=9$

> **Ejemplo con fracciones:** $\dfrac{x}{2}+\dfrac{x}{3}=5$
> Multiplicamos todo por el mcm (6): $3x+2x=30 \Rightarrow 5x=30 \Rightarrow x=6$

## 2. Despeje de fórmulas (ecuaciones literales)

La misma lógica de "despejar" se aplica a fórmulas con varias variables, muy usadas en física, química y economía.

> **Ejemplo:** interés compuesto $A=P\left(1+\dfrac{r}{n}\right)^{nt}$. Despeja $P$:
> $$P=\dfrac{A}{\left(1+\dfrac{r}{n}\right)^{nt}}$$

## 3. Ecuación cuadrática

Forma general: $ax^2+bx+c=0$, con $a\neq0$.

### a) Por factorización

Si el trinomio se factoriza, cada factor igualado a cero da una raíz.
> $x^2-5x+6=0 \Rightarrow (x-2)(x-3)=0 \Rightarrow x=2,\ x=3$

### b) Por fórmula general

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

> $2x^2+3x-2=0$: $a=2,b=3,c=-2$
> $x=\dfrac{-3\pm\sqrt{9+16}}{4}=\dfrac{-3\pm5}{4} \Rightarrow x=\dfrac12,\ x=-2$

### c) Completando el trinomio cuadrado perfecto

1. Se deja $x^2+bx$ de un lado ($a=1$; si $a\neq1$, se divide todo entre $a$ primero).
2. Se suma $(b/2)^2$ en ambos lados.
3. El lado izquierdo queda como binomio al cuadrado.

> $x^2+6x-7=0 \Rightarrow x^2+6x=7 \Rightarrow x^2+6x+9=16 \Rightarrow (x+3)^2=16 \Rightarrow x+3=\pm4 \Rightarrow x=1,\ x=-7$

## 4. El discriminante

$$\Delta=b^2-4ac$$

| Δ | Tipo de solución |
|---|---|
| Δ > 0 | Dos soluciones reales distintas |
| Δ = 0 | Una solución real doble |
| Δ < 0 | Dos soluciones complejas conjugadas |

## 5. Comprobación de la solución

Siempre se sustituye la raíz obtenida en la ecuación original para verificar que la cumple.

## 6. Relación con la gráfica (convenientes)

Las raíces de $ax^2+bx+c=0$ son los puntos donde la parábola $y=ax^2+bx+c$ **cruza el eje X**. Si $\Delta<0$, la parábola no toca el eje X (no hay raíces reales).

---

## Errores comunes

- Olvidar que la fórmula general divide **todo** entre $2a$, no solo la raíz.
- Al despejar, cambiar el signo solo de un término y no del resto de la expresión.
- Perder una de las dos soluciones al sacar raíz cuadrada (olvidar el ±).

## Resumen / formulario rápido

- Lineal: aislar $x$ aplicando la operación inversa a cada lado.
- Cuadrática: $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$
- $\Delta=b^2-4ac$ decide cuántas soluciones reales hay.
