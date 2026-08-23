# Tema 1 — Números reales, potencias, radicales y logaritmos

> **Bloque:** Aritmética y Álgebra · **Curso:** Matemáticas I · **Sesiones estimadas:** 8

## Objetivos

- Clasificar números en $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{I}, \mathbb{R}$ y operar con intervalos.
- Manejar el valor absoluto y resolver ecuaciones e inecuaciones con él.
- Operar con potencias de exponente entero y fraccionario, y con radicales.
- Racionalizar denominadores.
- Definir el logaritmo y aplicar sus propiedades.
- Aproximar, acotar el error y usar notación científica.

---

## 1.1 Conjuntos numéricos

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}, \qquad \mathbb{R} = \mathbb{Q} \cup \mathbb{I}$$

| Conjunto | Descripción | Expresión decimal |
|---|---|---|
| $\mathbb{N}$ | naturales: $0,1,2,\dots$ | finita |
| $\mathbb{Z}$ | enteros | finita |
| $\mathbb{Q}$ | fracciones $\frac{a}{b}$, $b\neq 0$ | finita o **periódica** |
| $\mathbb{I}$ | irracionales ($\sqrt2$, $\pi$, $e$) | infinita **no** periódica |

**Fracción generatriz.** Si $x = 2{,}3\widehat{45}$ (periodo `45`, anteperiodo `3`):

$$x=\frac{2345-23}{990}=\frac{2322}{990}=\frac{129}{55}$$

Regla: numerador = *todas las cifras* − *las que no se repiten*; denominador = tantos **9** como cifras del periodo, seguidos de tantos **0** como cifras del anteperiodo.

## 1.2 Intervalos y entornos

$$[a,b]=\{x: a\le x\le b\},\quad (a,b)=\{x: a<x<b\},\quad (-\infty,b]=\{x: x\le b\}$$

Entorno de centro $a$ y radio $r$: $E(a,r)=(a-r,a+r)=\{x: |x-a|<r\}$.

## 1.3 Valor absoluto

$$|x|=\begin{cases} x & x\ge 0\\ -x & x<0\end{cases}$$

Propiedades: $|xy|=|x||y|$, $\left|\frac{x}{y}\right|=\frac{|x|}{|y|}$, $|x+y|\le |x|+|y|$ (desigualdad triangular).

- $|x|=k \;(k\ge0) \iff x=k$ ó $x=-k$
- $|x|<k \iff -k<x<k$
- $|x|>k \iff x<-k$ ó $x>k$

## 1.4 Potencias y radicales

$$a^{m}a^{n}=a^{m+n},\quad \frac{a^m}{a^n}=a^{m-n},\quad (a^m)^n=a^{mn},\quad a^{-n}=\frac{1}{a^n},\quad a^0=1$$

$$a^{m/n}=\sqrt[n]{a^{m}}, \qquad \sqrt[n]{a}\,\sqrt[n]{b}=\sqrt[n]{ab},\qquad \sqrt[n]{\sqrt[m]{a}}=\sqrt[nm]{a}$$

**Extraer factores:** $\sqrt{72}=\sqrt{6^2\cdot 2}=6\sqrt2$.
**Radicales semejantes:** solo se suman si tienen el mismo índice y radicando.

### Racionalización

| Denominador | Se multiplica por | Ejemplo |
|---|---|---|
| $\sqrt{a}$ | $\sqrt a$ | $\dfrac{3}{\sqrt5}=\dfrac{3\sqrt5}{5}$ |
| $\sqrt[n]{a^m}$ | $\sqrt[n]{a^{n-m}}$ | $\dfrac{1}{\sqrt[3]{2}}=\dfrac{\sqrt[3]{4}}{2}$ |
| $a+\sqrt b$ | conjugado $a-\sqrt b$ | $\dfrac{2}{3+\sqrt7}=\dfrac{2(3-\sqrt7)}{2}=3-\sqrt7$ |

## 1.5 Logaritmos

$$\log_a b = c \iff a^{c}=b \qquad (a>0,\ a\neq1,\ b>0)$$

$$\log_a(xy)=\log_a x+\log_a y,\qquad \log_a\frac{x}{y}=\log_a x-\log_a y,\qquad \log_a x^{n}=n\log_a x$$

**Cambio de base:** $\log_a b=\dfrac{\log_c b}{\log_c a}$. Notación: $\log = \log_{10}$, $\ln=\log_e$.

## 1.6 Aproximación y errores

- Error absoluto: $E_a=|valor\ real - valor\ aproximado|$
- Error relativo: $E_r=\dfrac{E_a}{|valor\ real|}$ (se suele dar en %)
- Notación científica: $a\cdot 10^{n}$ con $1\le |a| <10$.

---

## Ejemplos resueltos

**Ejemplo 1.** Expresa $0{,}\widehat{27}$ como fracción.

$x=0{,}272727\ldots$; $100x=27{,}2727\ldots$; restando: $99x=27 \Rightarrow x=\frac{27}{99}=\frac{3}{11}$.

**Ejemplo 2.** Resuelve $|2x-5|<3$.

$-3<2x-5<3 \Rightarrow 2<2x<8 \Rightarrow 1<x<4$. Solución: $(1,4)$.

**Ejemplo 3.** Simplifica $\dfrac{\sqrt{50}+\sqrt{18}}{\sqrt{2}}$.

$\sqrt{50}=5\sqrt2$, $\sqrt{18}=3\sqrt2$, luego $\dfrac{5\sqrt2+3\sqrt2}{\sqrt2}=\dfrac{8\sqrt2}{\sqrt2}=8$.

**Ejemplo 4.** Racionaliza $\dfrac{5}{\sqrt{7}-\sqrt{2}}$.

$$\frac{5(\sqrt7+\sqrt2)}{(\sqrt7-\sqrt2)(\sqrt7+\sqrt2)}=\frac{5(\sqrt7+\sqrt2)}{7-2}=\sqrt7+\sqrt2$$

**Ejemplo 5.** Resuelve $\log_2(x+3)+\log_2(x-3)=4$.

$\log_2\big((x+3)(x-3)\big)=4 \Rightarrow x^2-9=16 \Rightarrow x^2=25 \Rightarrow x=\pm5$.
Condición de existencia $x>3$ ⟹ **$x=5$** (se descarta $-5$).

---

## Ejercicios propuestos

1. Clasifica: $\sqrt{16}$, $\frac{22}{7}$, $\pi$, $-3$, $1{,}\widehat{3}$, $\sqrt[3]{-8}$.
2. Halla la fracción generatriz de: a) $1{,}\widehat{6}$  b) $0{,}2\widehat{45}$  c) $3{,}\widehat{142857}$
3. Escribe como intervalo: a) $|x-2|\le 5$  b) $|x+1|>3$  c) $|3x-6|<9$
4. Opera y simplifica: $\left(\frac{2^{-3}\cdot 4^{2}}{8^{-1}}\right)^{2}$
5. Simplifica: $\sqrt[3]{54}-\sqrt[3]{16}+\sqrt[3]{128}$
6. Racionaliza: a) $\dfrac{6}{\sqrt3}$  b) $\dfrac{2}{\sqrt[4]{8}}$  c) $\dfrac{\sqrt5+1}{\sqrt5-1}$
7. Calcula sin calculadora: $\log_3 81$, $\log_{1/2} 8$, $\log_5 \sqrt5$, $\ln e^{-4}$.
8. Sabiendo $\log 2 = 0{,}3010$, halla $\log 5$, $\log 20$ y $\log 0{,}4$.
9. Resuelve: $2\log x - \log(x-6)=\log 3 + \log 4$.
10. Resuelve: $3^{2x-1}=27^{x+2}$.
11. La masa de un electrón es $9{,}109\cdot10^{-31}$ kg. Exprésala en gramos en notación científica.
12. Al medir una pieza de $12{,}4$ cm se obtiene $12$ cm. Calcula $E_a$ y $E_r$ (%).

### Soluciones

1. $\sqrt{16}=4\in\mathbb{N}$; $\frac{22}{7}\in\mathbb{Q}$; $\pi\in\mathbb{I}$; $-3\in\mathbb{Z}$; $1{,}\widehat3=\frac43\in\mathbb{Q}$; $\sqrt[3]{-8}=-2\in\mathbb{Z}$.
2. a) $\frac{5}{3}$  b) $\frac{243}{990}=\frac{27}{110}$  c) $\frac{22}{7}$
3. a) $[-3,7]$  b) $(-\infty,-4)\cup(2,+\infty)$  c) $(-1,5)$
4. $\left(\frac{2^{-3}2^{4}}{2^{-3}}\right)^{2}=(2^{4})^{2}=256$
5. $3\sqrt[3]2-2\sqrt[3]2+4\sqrt[3]2=5\sqrt[3]{2}$
6. a) $2\sqrt3$  b) $\dfrac{2\sqrt[4]{2}}{\ \sqrt[4]{8}\sqrt[4]{2}\ }\!=\!\sqrt[4]{2}$  c) $\dfrac{(\sqrt5+1)^2}{4}=\dfrac{6+2\sqrt5}{4}=\dfrac{3+\sqrt5}{2}$
7. $4$; $-3$; $\frac12$; $-4$
8. $\log5=0{,}6990$; $\log20=1{,}3010$; $\log0{,}4=-0{,}3979$
9. $\frac{x^2}{x-6}=12 \Rightarrow x^2-12x+72=0$, discriminante $<0$ ⟹ **sin solución real**.
10. $2x-1=3(x+2) \Rightarrow x=-7$
11. $9{,}109\cdot10^{-28}$ g
12. $E_a=0{,}4$ cm; $E_r=0{,}4/12{,}4=3{,}23\%$

---

## Errores típicos

- $\sqrt{a+b}\neq\sqrt a+\sqrt b$ y $\log(a+b)\neq \log a+\log b$.
- Olvidar las **condiciones de existencia** en ecuaciones logarítmicas (el argumento debe ser $>0$).
- $(-2)^{2}=4$ pero $-2^{2}=-4$.
- $|x|=x$ solo si $x\ge0$.
