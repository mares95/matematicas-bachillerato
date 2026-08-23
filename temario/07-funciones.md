# Tema 7 — Funciones elementales

> **Bloque:** Análisis · **Curso:** Matemáticas I · **Sesiones estimadas:** 8

## Objetivos

- Calcular dominio y recorrido de las funciones elementales.
- Operar y componer funciones; hallar la función inversa.
- Reconocer simetrías, periodicidad, monotonía y acotación.
- Representar funciones a partir de transformaciones elementales.
- Identificar y usar la función exponencial, logarítmica y las trigonométricas.

---

## 7.1 Concepto y dominio

Una función $f:D\to\mathbb{R}$ asigna a cada $x\in D$ **un único** $f(x)$.

### Cálculo del dominio

| Tipo | Restricción | Dominio |
|---|---|---|
| Polinómica | ninguna | $\mathbb{R}$ |
| Racional $\frac{P}{Q}$ | $Q(x)\neq0$ | $\mathbb{R}\setminus\{\text{raíces de }Q\}$ |
| Raíz de índice **par** | radicando $\ge0$ | resolver la inecuación |
| Raíz de índice **impar** | ninguna | dominio del radicando |
| $\log_a f(x)$ | $f(x)>0$ | resolver la inecuación |
| $\tan x$ | $\cos x\neq0$ | $\mathbb{R}\setminus\{\frac\pi2+k\pi\}$ |

## 7.2 Operaciones y composición

$(f\pm g)(x)$, $(fg)(x)$, $\left(\frac fg\right)(x)$ con $g(x)\neq0$.

$$(g\circ f)(x)=g\big(f(x)\big)$$

⚠️ En general $g\circ f\neq f\circ g$. $\operatorname{Dom}(g\circ f)=\{x\in\operatorname{Dom}f : f(x)\in\operatorname{Dom}g\}$.

**Función inversa** $f^{-1}$: existe si $f$ es **inyectiva**. Se obtiene despejando $x$ y cambiando los nombres. Cumple $f\circ f^{-1}=f^{-1}\circ f=\mathrm{id}$ y su gráfica es la **simétrica respecto de $y=x$**.

## 7.3 Propiedades globales

- **Par** (simétrica respecto del eje $Y$): $f(-x)=f(x)$.
- **Impar** (simétrica respecto del origen): $f(-x)=-f(x)$.
- **Periódica** de periodo $T$: $f(x+T)=f(x)$.
- **Creciente** en $I$: $x_1<x_2 \Rightarrow f(x_1)\le f(x_2)$.
- **Acotada**: existe $M$ con $|f(x)|\le M$.

## 7.4 Catálogo de funciones elementales

| Función | Dominio | Recorrido | Notas |
|---|---|---|---|
| $y=mx+n$ | $\mathbb R$ | $\mathbb R$ ($m\neq0$) | recta, pendiente $m$ |
| $y=ax^2+bx+c$ | $\mathbb R$ | según $a$ | parábola, vértice $x_v=-\frac{b}{2a}$ |
| $y=\frac{k}{x}$ | $\mathbb R\setminus\{0\}$ | $\mathbb R\setminus\{0\}$ | hipérbola, asíntotas $x=0$, $y=0$ |
| $y=\frac{ax+b}{cx+d}$ | $x\neq-\frac dc$ | $y\neq\frac ac$ | A.V. $x=-\frac dc$, A.H. $y=\frac ac$ |
| $y=\sqrt x$ | $[0,\infty)$ | $[0,\infty)$ | creciente |
| $y=a^{x}$ ($a>0$) | $\mathbb R$ | $(0,\infty)$ | A.H. $y=0$; pasa por $(0,1)$ |
| $y=\log_a x$ | $(0,\infty)$ | $\mathbb R$ | A.V. $x=0$; pasa por $(1,0)$ |
| $y=\sin x$ | $\mathbb R$ | $[-1,1]$ | impar, $T=2\pi$ |
| $y=\cos x$ | $\mathbb R$ | $[-1,1]$ | par, $T=2\pi$ |
| $y=\tan x$ | $x\neq\frac\pi2+k\pi$ | $\mathbb R$ | impar, $T=\pi$ |
| $y=|x|$ | $\mathbb R$ | $[0,\infty)$ | par |

## 7.5 Transformaciones de gráficas

Partiendo de $y=f(x)$:

| Transformación | Efecto |
|---|---|
| $f(x)+k$ | traslación vertical $k$ (arriba si $k>0$) |
| $f(x+k)$ | traslación horizontal $-k$ (**izquierda** si $k>0$) |
| $-f(x)$ | simetría respecto del eje $X$ |
| $f(-x)$ | simetría respecto del eje $Y$ |
| $a\,f(x)$, $a>1$ | dilatación vertical |
| $f(ax)$, $a>1$ | contracción horizontal |
| $\|f(x)\|$ | se refleja hacia arriba la parte negativa |
| $f(\|x\|)$ | se copia a la izquierda la parte derecha |

## 7.6 Funciones definidas a trozos

Se estudia cada trozo por separado y con especial cuidado los **puntos de empalme** (¿coinciden los valores?, ¿hay salto?). Ejemplo de valor absoluto:

$$f(x)=|x-3|=\begin{cases}3-x & x<3\\ x-3 & x\ge3\end{cases}$$

---

## Ejemplos resueltos

**Ejemplo 1.** Dominio de $f(x)=\dfrac{\sqrt{x+2}}{x^{2}-9}$.

$x+2\ge0 \Rightarrow x\ge-2$; $x\neq\pm3$. Dom $=[-2,3)\cup(3,+\infty)$.

**Ejemplo 2.** Dominio de $g(x)=\ln(x^{2}-x-6)$.

$x^{2}-x-6>0 \Rightarrow (x-3)(x+2)>0$ ⟹ Dom $=(-\infty,-2)\cup(3,+\infty)$.

**Ejemplo 3.** Si $f(x)=2x-1$ y $g(x)=x^{2}+3$, halla $g\circ f$ y $f\circ g$.

$(g\circ f)(x)=(2x-1)^{2}+3=4x^{2}-4x+4$;  $(f\circ g)(x)=2(x^2+3)-1=2x^{2}+5$.

**Ejemplo 4.** Halla la inversa de $f(x)=\dfrac{3x-1}{x+2}$.

$y(x+2)=3x-1 \Rightarrow x(y-3)=-1-2y \Rightarrow x=\dfrac{2y+1}{3-y}$. Luego $f^{-1}(x)=\dfrac{2x+1}{3-x}$.

**Ejemplo 5.** Estudia la simetría de $h(x)=\dfrac{x^{3}}{x^{2}+1}$.

$h(-x)=\dfrac{-x^{3}}{x^{2}+1}=-h(x)$ ⟹ **impar** (simétrica respecto del origen).

**Ejemplo 6.** A partir de $y=x^{2}$, describe $y=-(x-2)^{2}+3$.

Traslación 2 a la derecha, reflexión respecto del eje $X$ y traslación 3 hacia arriba. Vértice $(2,3)$, abierta hacia abajo.

---

## Ejercicios propuestos

1. Halla el dominio: a) $\dfrac{x+1}{x^2-4x}$  b) $\sqrt{9-x^{2}}$  c) $\dfrac{1}{\sqrt{x-1}}$  d) $\log(3-x)$  e) $\sqrt[3]{x-5}$
2. Halla el recorrido de $f(x)=x^{2}-4x+7$.
3. Con $f(x)=x+3$ y $g(x)=\sqrt{x}$: halla $g\circ f$, $f\circ g$ y sus dominios.
4. Halla $f^{-1}$: a) $f(x)=5x-2$  b) $f(x)=\sqrt{x+4}$  c) $f(x)=\dfrac{1}{x-1}$
5. Clasifica en par, impar o ninguna: $x^4-3x^2$, $\ \dfrac{1}{x}$, $\ x^2+x$, $\ \cos x + x^2$.
6. Escribe $f(x)=|2x+6|$ como función a trozos y represéntala.
7. Halla el vértice, el eje y los cortes de $y=-x^{2}+6x-5$.
8. Halla las asíntotas de $y=\dfrac{2x-3}{x+1}$.
9. Describe qué transformaciones llevan $y=\sin x$ a $y=2\sin(x-\frac\pi4)+1$. Da amplitud, periodo y recorrido.
10. Dada $f(x)=\begin{cases}x^2 & x\le1\\ 2x-1 & x>1\end{cases}$, calcula $f(-2)$, $f(1)$, $f(3)$ y di si hay salto en $x=1$.
11. Resuelve gráficamente cuántas soluciones tiene $2^{x}=x+2$.
12. Una empresa vende $x$ unidades con beneficio $B(x)=-0{,}5x^{2}+40x-300$ €. ¿Cuántas unidades maximizan el beneficio y cuál es?

### Soluciones

1. a) $\mathbb R\setminus\{0,4\}$  b) $[-3,3]$  c) $(1,\infty)$  d) $(-\infty,3)$  e) $\mathbb R$
2. $f(x)=(x-2)^2+3$ ⟹ $[3,+\infty)$
3. $(g\circ f)(x)=\sqrt{x+3}$, Dom $=[-3,\infty)$; $(f\circ g)(x)=\sqrt x+3$, Dom $=[0,\infty)$
4. a) $\frac{x+2}{5}$  b) $x^{2}-4$ con $x\ge0$  c) $\frac1x+1$
5. par; impar; ninguna; par
6. $f(x)=-2x-6$ si $x<-3$; $2x+6$ si $x\ge-3$ (vértice en $(-3,0)$)
7. Vértice $(3,4)$, eje $x=3$, cortes $(1,0)$, $(5,0)$, $(0,-5)$
8. A.V. $x=-1$; A.H. $y=2$
9. Traslación $\frac\pi4$ a la derecha, dilatación vertical ×2 y subida 1. Amplitud 2, $T=2\pi$, recorrido $[-1,3]$
10. $f(-2)=4$, $f(1)=1$, $f(3)=5$; en $x=1$ ambos trozos valen 1 ⟹ **no hay salto**
11. Dos soluciones ($x=2$ y una entre $-2$ y $-1$)
12. $x_v=40$ unidades; $B=500$ €

---

## Errores típicos

- Confundir $f(x+2)$ (traslación a la **izquierda**) con traslación a la derecha.
- Olvidar restricciones del dominio al componer.
- Simplificar $\frac{x^2-1}{x-1}$ a $x+1$ sin excluir $x=1$ del dominio.
- Creer que toda función tiene inversa (hace falta que sea inyectiva).
