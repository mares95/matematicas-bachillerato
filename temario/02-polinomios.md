# Tema 2 — Polinomios y fracciones algebraicas

> **Bloque:** Aritmética y Álgebra · **Curso:** Matemáticas I · **Sesiones estimadas:** 7

## Objetivos

- Operar con polinomios y dividir por Ruffini.
- Aplicar los teoremas del resto y del factor.
- Factorizar polinomios buscando raíces racionales.
- Simplificar y operar fracciones algebraicas.
- Desarrollar potencias con el binomio de Newton.

---

## 2.1 Polinomios: definición y operaciones

$$P(x)=a_nx^{n}+a_{n-1}x^{n-1}+\dots+a_1x+a_0,\qquad a_n\neq0$$

$n$ es el **grado**, $a_n$ el coeficiente principal y $a_0$ el término independiente.

- $\operatorname{gr}(P\cdot Q)=\operatorname{gr}P+\operatorname{gr}Q$
- $\operatorname{gr}(P\pm Q)\le \max(\operatorname{gr}P,\operatorname{gr}Q)$

**División entera:** $P(x)=Q(x)\,C(x)+R(x)$ con $\operatorname{gr}R<\operatorname{gr}Q$.

## 2.2 Regla de Ruffini

Para dividir entre $x-a$ se escriben los coeficientes (¡incluidos los ceros!):

$$P(x)=2x^3-3x+5 \ \div\ (x-2)$$

```
        2    0   -3    5
  2  |       4    8   10
     ---------------------
        2    4    5  | 15
```

Cociente $C(x)=2x^{2}+4x+5$, resto $R=15$.

## 2.3 Teoremas del resto y del factor

- **Teorema del resto:** el resto de dividir $P(x)$ entre $x-a$ es $P(a)$.
- **Teorema del factor:** $(x-a)$ divide a $P(x)$ $\iff P(a)=0$ ($a$ es raíz).
- **Raíces racionales:** si $\frac{p}{q}$ es raíz de $P$ con coeficientes enteros, entonces $p \mid a_0$ y $q\mid a_n$.
  Si $a_n=1$, las raíces racionales son **divisores del término independiente**.

## 2.4 Factorización

Estrategia ordenada:

1. Sacar **factor común**.
2. Reconocer **identidades notables**:
   $a^2\pm2ab+b^2=(a\pm b)^2$, $a^2-b^2=(a+b)(a-b)$, $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$.
3. Si es de **2.º grado**: $ax^2+bx+c=a(x-x_1)(x-x_2)$.
4. Si el grado es $\ge3$: probar divisores del término independiente con **Ruffini**.
5. Si es **bicuadrada** o factorizable por agrupación, usarlo.

Un polinomio de grado $n$ tiene **como máximo** $n$ raíces reales.

## 2.5 Fracciones algebraicas

$$\frac{P(x)}{Q(x)},\quad Q(x)\neq0$$

Se simplifican **factorizando** numerador y denominador y cancelando factores comunes.
Para sumar/restar: factorizar, hallar el **m.c.m.** de los denominadores y reducir a común denominador.

$$\frac{x^2-4}{x^2-x-2}=\frac{(x-2)(x+2)}{(x-2)(x+1)}=\frac{x+2}{x+1}\quad (x\neq2)$$

## 2.6 Binomio de Newton

$$(a+b)^{n}=\sum_{k=0}^{n}\binom{n}{k}a^{\,n-k}b^{\,k},\qquad \binom{n}{k}=\frac{n!}{k!\,(n-k)!}$$

El término general (lugar $k+1$) es $T_{k+1}=\binom{n}{k}a^{n-k}b^{k}$.
Con $(a-b)^n$ los signos alternan: $+,-,+,-\dots$

---

## Ejemplos resueltos

**Ejemplo 1.** Halla $m$ para que $P(x)=x^3-mx^2+4x-3$ sea divisible entre $x-3$.

$P(3)=27-9m+12-3=36-9m=0 \Rightarrow m=4$.

**Ejemplo 2.** Factoriza $P(x)=x^{3}-2x^{2}-5x+6$.

Divisores de 6: $\pm1,\pm2,\pm3,\pm6$. $P(1)=0$ ⟹ Ruffini con 1: cociente $x^2-x-6=(x-3)(x+2)$.

$$P(x)=(x-1)(x-3)(x+2)$$

**Ejemplo 3.** Simplifica $\dfrac{x^{3}-x}{x^{2}+2x+1}$.

$$\frac{x(x-1)(x+1)}{(x+1)^{2}}=\frac{x(x-1)}{x+1}=\frac{x^{2}-x}{x+1}$$

**Ejemplo 4.** Opera $\dfrac{2}{x-1}-\dfrac{3}{x+2}$.

$$\frac{2(x+2)-3(x-1)}{(x-1)(x+2)}=\frac{2x+4-3x+3}{(x-1)(x+2)}=\frac{-x+7}{x^{2}+x-2}$$

**Ejemplo 5.** Halla el término en $x^{4}$ de $(2x-1)^{7}$.

$T_{k+1}=\binom{7}{k}(2x)^{7-k}(-1)^{k}$. Queremos $7-k=4 \Rightarrow k=3$:
$\binom{7}{3}2^{4}(-1)^{3}x^{4}=35\cdot16\cdot(-1)x^4=-560x^{4}$.

---

## Ejercicios propuestos

1. Dados $P=x^3-2x+1$ y $Q=x^2+3$, calcula $P+Q$, $P\cdot Q$ y $P:Q$.
2. Divide por Ruffini $x^4-3x^2+2x-8$ entre $x+2$. Indica cociente y resto.
3. Halla $k$ para que el resto de $(x^3+kx^2-2x+5):(x-1)$ sea 7.
4. ¿Es $x+3$ factor de $2x^3+5x^2-4x+3$?
5. Factoriza: a) $x^3-7x+6$  b) $2x^3-x^2-8x+4$  c) $x^4-16$  d) $x^4-5x^2+4$
6. Halla el m.c.d. y el m.c.m. de $x^2-1$ y $x^2+2x+1$.
7. Simplifica: a) $\dfrac{x^2-9}{x^2-6x+9}$  b) $\dfrac{2x^2+4x}{x^3+2x^2}$
8. Opera: $\dfrac{1}{x}+\dfrac{1}{x+1}-\dfrac{2}{x^2+x}$
9. Desarrolla $(x+2)^{5}$.
10. Halla el término independiente de $\left(x^{2}-\dfrac{1}{x}\right)^{6}$.
11. Determina $a$ y $b$ para que $x^{3}+ax^{2}+bx-6$ sea divisible entre $(x-1)$ y $(x+2)$.
12. Escribe un polinomio de grado 3 cuyas raíces sean $-1$, $2$ y $\frac12$, con coeficiente principal 2.

### Soluciones

1. $P+Q=x^3+x^2+1$; $P\cdot Q=x^5+x^3-5x+3$... (desarrollar); $P:Q$ ⟹ $C=x$, $R=-5x+1$.
2. $C=x^3-2x^2+x$, $R=-8$
3. $1+k-2+5=7 \Rightarrow k=3$
4. $P(-3)=-54+45+12+3=6\neq0$ ⟹ **no**
5. a) $(x-1)(x-2)(x+3)$  b) $(x-2)(x+2)(2x-1)$  c) $(x-2)(x+2)(x^2+4)$  d) $(x-1)(x+1)(x-2)(x+2)$
6. m.c.d. $=x+1$; m.c.m. $=(x-1)(x+1)^2$
7. a) $\dfrac{x+3}{x-3}$  b) $\dfrac{2}{x}$
8. $\dfrac{(x+1)+x-2}{x(x+1)}=\dfrac{2x-1}{x^2+x}$
9. $x^5+10x^4+40x^3+80x^2+80x+32$
10. $T_{k+1}=\binom6k x^{12-2k}(-1)^k x^{-k}$; $12-3k=0\Rightarrow k=4$: $\binom64=15$
11. $a=2,\ b=-5$  (de $1+a+b-6=0$ y $-8+4a-2b-6=0$)
12. $2(x+1)(x-2)\left(x-\tfrac12\right)=(x+1)(x-2)(2x-1)=2x^3-3x^2-3x+2$

---

## Errores típicos

- Olvidar los coeficientes **nulos** al aplicar Ruffini.
- Cancelar **sumandos** en vez de factores: $\dfrac{x+2}{x}\neq 2$.
- Perder soluciones al simplificar: anotar siempre las restricciones ($x\neq \dots$).
- Confundir $(a+b)^2$ con $a^2+b^2$.
