# Tema 5 — Números complejos

> **Bloque:** Aritmética y Álgebra · **Curso:** Matemáticas I · **Sesiones estimadas:** 6

## Objetivos

- Operar en forma binómica y representar en el plano complejo.
- Pasar entre formas binómica, polar y trigonométrica.
- Multiplicar, dividir y potenciar en forma polar (De Moivre).
- Calcular las $n$ raíces $n$-ésimas de un complejo.
- Resolver ecuaciones con soluciones complejas.

---

## 5.1 Forma binómica

$$i=\sqrt{-1},\qquad i^{2}=-1,\qquad z=a+bi \quad (a=\mathrm{Re}\,z,\ b=\mathrm{Im}\,z)$$

**Potencias de $i$** (ciclo de 4): $i^{1}=i$, $i^{2}=-1$, $i^{3}=-i$, $i^{4}=1$.
Para $i^{n}$ se divide $n$ entre 4 y se usa el **resto**.

**Conjugado:** $\bar z=a-bi$.  **Opuesto:** $-z=-a-bi$.  **Módulo:** $|z|=\sqrt{a^{2}+b^{2}}$.

$$z\cdot\bar z=|z|^{2}=a^{2}+b^{2}\in\mathbb{R}$$

### Operaciones

$$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$$

$$\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{c^{2}+d^{2}}$$

(la división se hace **multiplicando por el conjugado del denominador**).

## 5.2 Forma polar y trigonométrica

$$z=r_{\alpha}=r(\cos\alpha+i\sin\alpha),\qquad r=|z|=\sqrt{a^2+b^2},\qquad \tan\alpha=\frac{b}{a}$$

⚠️ El argumento $\alpha$ depende del **cuadrante** en el que esté $(a,b)$: la calculadora devuelve siempre un valor en $(-90^\circ,90^\circ)$, hay que corregirlo.

Paso inverso: $a=r\cos\alpha$, $b=r\sin\alpha$.

| Complejo | Polar |
|---|---|
| $1$ | $1_{0^\circ}$ |
| $i$ | $1_{90^\circ}$ |
| $-1$ | $1_{180^\circ}$ |
| $-i$ | $1_{270^\circ}$ |

## 5.3 Operaciones en forma polar

$$r_{\alpha}\cdot s_{\beta}=(rs)_{\alpha+\beta},\qquad \frac{r_{\alpha}}{s_{\beta}}=\left(\frac{r}{s}\right)_{\alpha-\beta}$$

**Fórmula de De Moivre:**

$$\big(r_{\alpha}\big)^{n}=\big(r^{n}\big)_{n\alpha} \qquad\Longrightarrow\qquad (\cos\alpha+i\sin\alpha)^{n}=\cos n\alpha+i\sin n\alpha$$

## 5.4 Raíces $n$-ésimas

Todo complejo $z=r_\alpha\neq0$ tiene **exactamente $n$** raíces $n$-ésimas:

$$\sqrt[n]{r_{\alpha}}=\left(\sqrt[n]{r}\right)_{\frac{\alpha+360^{\circ}k}{n}},\qquad k=0,1,\dots,n-1$$

Geométricamente están en una **circunferencia de radio $\sqrt[n]{r}$** y forman un **polígono regular de $n$ lados**.

## 5.5 Ecuaciones con soluciones complejas

Si $ax^2+bx+c=0$ con $\Delta<0$:

$$x=\frac{-b\pm i\sqrt{|\Delta|}}{2a}$$

Las soluciones complejas de un polinomio con coeficientes **reales** aparecen siempre en **pares conjugados**. Un polinomio de grado $n$ tiene exactamente $n$ raíces en $\mathbb{C}$ (Teorema Fundamental del Álgebra).

---

## Ejemplos resueltos

**Ejemplo 1.** Calcula $\dfrac{3+2i}{1-i}$.

$$\frac{(3+2i)(1+i)}{(1-i)(1+i)}=\frac{3+3i+2i-2}{2}=\frac{1+5i}{2}=\frac12+\frac52 i$$

**Ejemplo 2.** Pasa $z=-1+\sqrt3\,i$ a forma polar.

$r=\sqrt{1+3}=2$; $\tan\alpha=\frac{\sqrt3}{-1}=-\sqrt3$. Como $(-1,\sqrt3)$ está en el **2.º cuadrante**, $\alpha=120^{\circ}$. Luego $z=2_{120^\circ}$.

**Ejemplo 3.** Calcula $(1+i)^{8}$.

$1+i=\sqrt2_{\,45^\circ}$ ⟹ $(1+i)^8=\left(\sqrt2^{\,8}\right)_{360^\circ}=16_{0^\circ}=16$.

**Ejemplo 4.** Halla las raíces cúbicas de $8$.

$8=8_{0^\circ}$ ⟹ $\sqrt[3]{8}=2_{\frac{0+360k}{3}}$ con $k=0,1,2$: $2_{0^\circ}=2$, $2_{120^\circ}=-1+\sqrt3 i$, $2_{240^\circ}=-1-\sqrt3 i$.

**Ejemplo 5.** Resuelve $x^{2}-4x+13=0$.

$\Delta=16-52=-36$ ⟹ $x=\frac{4\pm 6i}{2}=2\pm3i$.

**Ejemplo 6.** Halla $a$ para que $\dfrac{a+2i}{1+i}$ sea imaginario puro.

$\frac{(a+2i)(1-i)}{2}=\frac{(a+2)+(2-a)i}{2}$. Parte real nula ⟹ $a=-2$.

---

## Ejercicios propuestos

1. Calcula $i^{27}$, $i^{100}$, $i^{-3}$.
2. Opera: a) $(2-3i)+(4+5i)$  b) $(3+i)(2-4i)$  c) $(1-2i)^{2}$  d) $\dfrac{5}{2+i}$
3. Halla $x$ e $y$: $(x+yi)(2-i)=5+5i$.
4. Pasa a polar: $-3i$, $\ -2-2i$, $\ \sqrt3+i$.
5. Pasa a binómica: $4_{60^\circ}$, $\ 2_{225^\circ}$.
6. Calcula en polar: $\dfrac{6_{80^\circ}\cdot 2_{40^\circ}}{3_{30^\circ}}$
7. Calcula $\left(\sqrt3+i\right)^{6}$.
8. Halla las 4 raíces cuartas de $-16$ y represéntalas.
9. Resuelve: a) $x^{2}+9=0$  b) $x^{2}+2x+5=0$  c) $x^{4}-1=0$ (en $\mathbb C$)
10. Halla el polinomio de grado 2 con coeficientes reales y raíz $3-2i$.
11. Determina $k$ para que $z=k+3i$ tenga módulo 5.
12. Demuestra, con De Moivre, que $\cos3\alpha=4\cos^{3}\alpha-3\cos\alpha$.

### Soluciones

1. $i^{27}=i^{3}=-i$; $i^{100}=1$; $i^{-3}=i$
2. a) $6+2i$  b) $10-10i$  c) $-3-4i$  d) $2-i$
3. $x+yi=\frac{5+5i}{2-i}=\frac{(5+5i)(2+i)}{5}=1+3i$ ⟹ $x=1$, $y=3$
4. $3_{270^\circ}$; $\ 2\sqrt2_{225^\circ}$; $\ 2_{30^\circ}$
5. $4_{60^\circ}=2+2\sqrt3 i$; $2_{225^\circ}=-\sqrt2-\sqrt2 i$
6. $4_{90^\circ}=4i$
7. $\left(2_{30^\circ}\right)^{6}=64_{180^\circ}=-64$
8. $-16=16_{180^\circ}$ ⟹ $2_{45^\circ},2_{135^\circ},2_{225^\circ},2_{315^\circ}$ (cuadrado inscrito en $r=2$)
9. a) $\pm3i$  b) $-1\pm2i$  c) $1,-1,i,-i$
10. $(x-3)^2+4=x^{2}-6x+13$
11. $k^2+9=25 \Rightarrow k=\pm4$
12. $\cos3\alpha+i\sin3\alpha=(\cos\alpha+i\sin\alpha)^3$; igualando partes reales y usando $\sin^2=1-\cos^2$ ∎

---

## Errores típicos

- Dar el argumento sin mirar el **cuadrante** (error de $180^\circ$).
- Escribir $\sqrt{-4}=-2$: es $2i$.
- Olvidar que hay **$n$** raíces $n$-ésimas, no una.
- Sumar módulos al sumar complejos ($|z+w|\neq|z|+|w|$).
