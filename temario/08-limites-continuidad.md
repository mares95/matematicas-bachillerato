# Tema 8 — Límites y continuidad

> **Bloque:** Análisis · **Curso:** Matemáticas I–II · **Sesiones estimadas:** 9

## Objetivos

- Calcular límites laterales e infinitos.
- Resolver las indeterminaciones $\frac00$, $\frac\infty\infty$, $\infty-\infty$, $0\cdot\infty$ y $1^{\infty}$.
- Hallar las asíntotas de una función.
- Estudiar la continuidad y clasificar las discontinuidades.
- Aplicar el teorema de Bolzano.

---

## 8.1 Idea de límite

$$\lim_{x\to a}f(x)=L \iff \lim_{x\to a^{-}}f(x)=\lim_{x\to a^{+}}f(x)=L$$

Si los límites laterales existen pero son distintos, **el límite no existe**.

## 8.2 Operaciones y casos "seguros"

$$\frac{k}{\pm\infty}=0,\qquad \frac{k}{0^{+}}=+\infty,\qquad \frac{k}{0^{-}}=-\infty \ (k>0),\qquad \infty+\infty=\infty$$

$$a^{\infty}=\begin{cases}\infty & a>1\\ 0 & 0<a<1\end{cases}\qquad \ln(0^{+})=-\infty,\qquad \ln(+\infty)=+\infty$$

## 8.3 Las siete indeterminaciones y cómo resolverlas

| Indeterminación | Situación típica | Método |
|---|---|---|
| $\frac{0}{0}$ | cociente de polinomios en $x\to a$ | **factorizar** y simplificar |
| $\frac00$ con raíces | $\frac{\sqrt{\ }-\ }{\ }$ | multiplicar por el **conjugado** |
| $\frac{\infty}{\infty}$ | cociente de polinomios en $x\to\infty$ | comparar **grados** |
| $\infty-\infty$ | resta de raíces o de fracciones | conjugado / común denominador |
| $0\cdot\infty$ | producto | reescribir como cociente |
| $1^{\infty}$ | potencias | fórmula del número $e$ |
| $\frac00$, $\frac\infty\infty$ (Mates II) | cualquiera | **L'Hôpital** |

### Cociente de polinomios en el infinito

$$\lim_{x\to\infty}\frac{P(x)}{Q(x)}=\begin{cases} \pm\infty & \operatorname{gr}P>\operatorname{gr}Q\\[4pt] \dfrac{a_p}{b_q} & \operatorname{gr}P=\operatorname{gr}Q\\[4pt] 0 & \operatorname{gr}P<\operatorname{gr}Q\end{cases}$$

### Indeterminación $1^{\infty}$

$$\lim_{x\to a} f(x)^{g(x)}=e^{\displaystyle\lim_{x\to a} g(x)\left(f(x)-1\right)} \qquad\text{y en particular}\qquad \lim_{x\to\infty}\left(1+\frac1x\right)^{x}=e$$

### Límites conocidos

$$\lim_{x\to0}\frac{\sin x}{x}=1,\qquad \lim_{x\to0}\frac{1-\cos x}{x^{2}}=\frac12,\qquad \lim_{x\to0}\frac{\ln(1+x)}{x}=1,\qquad \lim_{x\to0}\frac{e^{x}-1}{x}=1$$

**Jerarquía de infinitos** (de menor a mayor): $\ln x \ll x^{n} \ll a^{x} \ll x! \ll x^{x}$.

## 8.4 Asíntotas

| Tipo | Condición | Ecuación |
|---|---|---|
| **Vertical** | $\lim\limits_{x\to a}f(x)=\pm\infty$ | $x=a$ |
| **Horizontal** | $\lim\limits_{x\to\pm\infty}f(x)=L$ | $y=L$ |
| **Oblicua** | solo si no hay horizontal | $y=mx+n$ con $m=\lim\frac{f(x)}{x}$, $n=\lim(f(x)-mx)$ |

En una función racional hay asíntota oblicua cuando $\operatorname{gr}P=\operatorname{gr}Q+1$; se obtiene con la **división** de polinomios.

## 8.5 Continuidad

$f$ es continua en $x=a$ si se cumplen las tres condiciones:

1. Existe $f(a)$.
2. Existe $\lim_{x\to a}f(x)$ (los laterales coinciden y son finitos).
3. $\lim_{x\to a}f(x)=f(a)$.

### Tipos de discontinuidad

| Tipo | Descripción |
|---|---|
| **Evitable** | existe el límite pero $\neq f(a)$ (o no existe $f(a)$) |
| **De salto finito** | laterales finitos y distintos; salto $=|L^{+}-L^{-}|$ |
| **De salto infinito (esencial)** | algún lateral es $\pm\infty$ (hay asíntota vertical) |

## 8.6 Teorema de Bolzano

> Si $f$ es **continua en $[a,b]$** y $f(a)\cdot f(b)<0$, entonces existe al menos un $c\in(a,b)$ con $f(c)=0$.

Consecuencias: **teorema de los valores intermedios** y **teorema de Weierstrass** (una función continua en un intervalo cerrado y acotado alcanza máximo y mínimo absolutos).

---

## Ejemplos resueltos

**Ejemplo 1.** $\displaystyle\lim_{x\to2}\frac{x^{2}-4}{x^{2}-5x+6}$.

Indeterminación $\frac00$: $\dfrac{(x-2)(x+2)}{(x-2)(x-3)}=\dfrac{x+2}{x-3}\to\dfrac{4}{-1}=-4$.

**Ejemplo 2.** $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^{2}+3x}-x\right)$.

$\infty-\infty$: multiplico por el conjugado

$$\frac{(x^2+3x)-x^{2}}{\sqrt{x^{2}+3x}+x}=\frac{3x}{\sqrt{x^2+3x}+x}\longrightarrow \frac{3}{2}$$

**Ejemplo 3.** $\displaystyle\lim_{x\to\infty}\left(\frac{x+1}{x-2}\right)^{3x}$.

$1^{\infty}$: exponente $=\lim 3x\left(\frac{x+1}{x-2}-1\right)=\lim\frac{9x}{x-2}=9$. Resultado: $e^{9}$.

**Ejemplo 4.** $\displaystyle\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}$.

$$\frac{(x+4)-4}{x\left(\sqrt{x+4}+2\right)}=\frac{1}{\sqrt{x+4}+2}\to\frac14$$

**Ejemplo 5.** Asíntotas de $f(x)=\dfrac{x^{2}+1}{x-1}$.

- Vertical: $x=1$ (numerador $\neq0$ ahí).
- Horizontal: no hay ($\operatorname{gr}P>\operatorname{gr}Q$).
- Oblicua: dividiendo, $f(x)=x+1+\frac{2}{x-1}$ ⟹ $y=x+1$.

**Ejemplo 6.** Halla $a$ para que sea continua:

$$f(x)=\begin{cases} x^{2}+a & x\le 2\\ 3x-1 & x>2\end{cases}$$

$\lim_{x\to2^-}=4+a$, $\lim_{x\to2^+}=5$ ⟹ $a=1$.

**Ejemplo 7.** Demuestra que $x^{3}+x-1=0$ tiene una raíz en $(0,1)$.

$f$ es continua (polinómica); $f(0)=-1<0$, $f(1)=1>0$ ⟹ por **Bolzano** existe $c\in(0,1)$ con $f(c)=0$. ∎

---

## Ejercicios propuestos

1. $\displaystyle\lim_{x\to3}\frac{x^{2}-9}{x-3}$
2. $\displaystyle\lim_{x\to1}\frac{x^{3}-1}{x^{2}-1}$
3. $\displaystyle\lim_{x\to\infty}\frac{3x^{2}-x+2}{5x^{2}+4}$ y $\displaystyle\lim_{x\to\infty}\frac{2x+1}{x^{3}-x}$
4. $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+x}-\sqrt{x^{2}-x}\right)$
5. $\displaystyle\lim_{x\to0}\frac{\sin 3x}{x}$
6. $\displaystyle\lim_{x\to\infty}\left(1+\frac{2}{x}\right)^{5x}$
7. $\displaystyle\lim_{x\to0^{+}}\frac{1}{x}-\frac{1}{x^{2}}$
8. Calcula los límites laterales de $f(x)=\dfrac{x}{x-2}$ en $x=2$.
9. Halla todas las asíntotas de: a) $\dfrac{3x}{x^2-4}$  b) $\dfrac{x^{2}-2x}{x+1}$  c) $\dfrac{e^x}{x}$ (solo verticales y horizontales)
10. Estudia la continuidad y clasifica las discontinuidades de $f(x)=\dfrac{x^{2}-x}{x^{2}-1}$.
11. Halla $a$ y $b$ para que sea continua en $\mathbb R$:
    $f(x)=\begin{cases} 2x+a & x<0\\ x^{2}+b & 0\le x\le 2\\ 3x & x>2 \end{cases}$
12. Prueba que $\cos x = x$ tiene solución en $\left(0,\frac\pi2\right)$.

### Soluciones

1. $6$
2. $\frac{(x-1)(x^2+x+1)}{(x-1)(x+1)}\to\frac32$
3. $\frac35$; $0$
4. Conjugado: $\frac{2x}{\sqrt{x^2+x}+\sqrt{x^2-x}}\to 1$
5. $3$
6. $e^{10}$
7. $\frac{x-1}{x^{2}}\to\frac{-1}{0^{+}}=-\infty$
8. $\lim_{x\to2^-}=-\infty$, $\lim_{x\to2^+}=+\infty$ ⟹ salto infinito
9. a) A.V. $x=\pm2$, A.H. $y=0$  b) A.V. $x=-1$, A.O. $y=x-3$  c) A.V. $x=0$, A.H. $y=0$ (solo por $-\infty$)
10. $\frac{x(x-1)}{(x-1)(x+1)}=\frac{x}{x+1}$: en $x=1$ **evitable** (límite $\frac12$), en $x=-1$ **salto infinito**
11. $x=0$: $a=b$; $x=2$: $4+b=6\Rightarrow b=2$ ⟹ $a=b=2$
12. $g(x)=\cos x-x$ continua, $g(0)=1>0$, $g(\frac\pi2)=-\frac\pi2<0$ ⟹ Bolzano ∎

---

## Errores típicos

- Aplicar L'Hôpital a algo que **no** es indeterminado.
- Escribir $\frac{k}{0}=\infty$ sin estudiar el **signo** de los laterales.
- Dar $\infty-\infty=0$.
- Decir que hay asíntota vertical en un punto donde el numerador **también** se anula sin comprobar el límite.
- Confundir "no existe el límite" con "el límite es infinito".
