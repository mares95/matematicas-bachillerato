# Unidad 1 — Desigualdades

**Semestre 2 · Pensamiento Matemático II (énfasis en geometría y trigonometría)**

## Objetivo de la unidad

Plantear y resolver problemas contextualizados que involucran desigualdades lineales y cuadráticas, representando sus soluciones en la recta numérica y mediante notación de intervalos.

---

## 1. Desigualdades lineales

Se resuelven igual que una ecuación (lo que suma pasa restando, lo que multiplica pasa dividiendo), con una regla adicional:

> ⚠️ **Regla clave:** al multiplicar o dividir ambos lados por un número **negativo**, el sentido de la desigualdad se invierte.

> **Ejemplo:** $2(x-3)\le 5x+4$
> $2x-6\le5x+4 \Rightarrow -3x\le10 \Rightarrow x\ge-\dfrac{10}{3}$ (se invirtió el signo al dividir entre −3)
> Solución: $\left[-\dfrac{10}{3},\infty\right)$

> **Ejemplo con fracciones:** $\dfrac{x-1}{2}<\dfrac{x+3}{4}$
> Multiplicando por 4: $2(x-1)<x+3 \Rightarrow 2x-2<x+3 \Rightarrow x<5$
> Solución: $(-\infty,5)$

## 2. Notación de intervalos y recta numérica

| Desigualdad | Intervalo | Símbolo en la recta |
|---|---|---|
| $x>a$ | $(a,\infty)$ | círculo abierto en $a$ |
| $x\ge a$ | $[a,\infty)$ | círculo cerrado en $a$ |
| $a<x<b$ | $(a,b)$ | abiertos en ambos extremos |
| $a\le x\le b$ | $[a,b]$ | cerrados en ambos extremos |

## 3. Desigualdades cuadráticas (tabla de signos)

1. Se pasa todo a un lado (forma $\ge0$ o $\le0$ etc.).
2. Se factoriza y se hallan las raíces.
3. Se construye una tabla de signos con las raíces como puntos de corte.
4. Se elige el intervalo según el signo pedido.

> **Ejemplo:** $x^2-5x+6>0$
> Factorizando: $(x-2)(x-3)>0$. Raíces: $x=2,3$.
>
> | Intervalo | $(-\infty,2)$ | $(2,3)$ | $(3,\infty)$ |
> |---|---|---|---|
> | Signo de $(x-2)(x-3)$ | + | − | + |
>
> Solución: $(-\infty,2)\cup(3,\infty)$ (comprobación: en $x=0$, $6>0$ ✓; en $x=2.5$, $-0.25<0$, correctamente fuera de la solución)

## 4. Desigualdades con valor absoluto

$$|x|<k \iff -k<x<k \qquad\qquad |x|>k \iff x<-k \ \text{ó}\ x>k \quad(k>0)$$

> **Ejemplo:** $|x-3|<5 \Rightarrow -5<x-3<5 \Rightarrow -2<x<8$
> **Ejemplo:** $|2x+1|\ge7 \Rightarrow 2x+1\ge7$ o $2x+1\le-7 \Rightarrow x\ge3$ o $x\le-4$

## 5. (Deseable) Desigualdades lineales en dos variables

$y>2x-1$ representa **todo un semiplano**: se traza la recta $y=2x-1$ (punteada, porque la desigualdad es estricta) y se sombrea la región de arriba (donde $y$ es mayor).

---

## Errores comunes

- Olvidar invertir el símbolo al multiplicar/dividir por un negativo.
- Usar paréntesis en vez de corchetes (o viceversa) al escribir el intervalo.
- En desigualdades cuadráticas, confundir el signo de la solución "entre las raíces" con "fuera de las raíces" (depende de si se pide $>0$ o $<0$ y del signo del coeficiente principal).

## Resumen / formulario rápido

- $|x|<k \Leftrightarrow -k<x<k$; $|x|>k \Leftrightarrow x<-k$ o $x>k$.
- Cuadrática: factoriza, ubica raíces, evalúa el signo en cada intervalo.
- Multiplicar/dividir por negativo ⟹ **invierte** el símbolo.
