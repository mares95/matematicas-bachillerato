# Unidad 2 — Operaciones algebraicas

**Semestre 1 · Pensamiento Matemático I (énfasis en aritmética y álgebra)**

## Objetivo de la unidad

Resolver problemas que involucran productos notables y factorización de expresiones algebraicas, aplicando el método adecuado en cada caso.

---

## 1. Monomios y polinomios

- **Monomio:** expresión con un solo término, ej. $5x^3y$.
- **Binomio:** dos términos, ej. $2x+3$.
- **Trinomio:** tres términos, ej. $x^2+5x+6$.
- **Polinomio:** cualquier suma de monomios.
- **Grado** de un monomio: suma de los exponentes de sus variables. Grado de un polinomio: el mayor grado entre sus términos.
- **Términos semejantes:** mismas variables con los mismos exponentes (se pueden sumar/restar).

## 2. Operaciones con polinomios

- **Suma/resta:** se agrupan y combinan términos semejantes.
  $(3x^2+2x-1)+(x^2-5x+4)=4x^2-3x+3$
- **Multiplicación:** se aplica la propiedad distributiva término a término.
  $(2x+3)(x-4)=2x^2-8x+3x-12=2x^2-5x-12$
- **División de un polinomio entre un monomio:** se divide cada término.
  $\dfrac{6x^3-9x^2+3x}{3x}=2x^2-3x+1$

## 3. Productos notables

| Caso | Fórmula |
|---|---|
| Binomio al cuadrado (suma) | $(a+b)^2=a^2+2ab+b^2$ |
| Binomio al cuadrado (resta) | $(a-b)^2=a^2-2ab+b^2$ |
| Binomios conjugados | $(a+b)(a-b)=a^2-b^2$ |
| Binomio al cubo (suma) | $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ |
| Binomio al cubo (resta) | $(a-b)^3=a^3-3a^2b+3ab^2-b^3$ |
| Binomios con término común | $(x+a)(x+b)=x^2+(a+b)x+ab$ |

> **Ejemplo:** $(3x+5)^2=9x^2+30x+25$
> **Ejemplo:** $(x+7)(x-4)=x^2+3x-28$

## 4. Factorización

Factorizar es el proceso **inverso** a multiplicar: expresar un polinomio como producto de factores.

| Método | Se reconoce por... | Ejemplo |
|---|---|---|
| Factor común | todos los términos comparten un factor | $6x^3-9x^2=3x^2(2x-3)$ |
| Diferencia de cuadrados | $a^2-b^2$ | $x^2-16=(x+4)(x-4)$ |
| Suma de cubos | $a^3+b^3$ | $x^3+8=(x+2)(x^2-2x+4)$ |
| Diferencia de cubos | $a^3-b^3$ | $x^3-27=(x-3)(x^2+3x+9)$ |
| Trinomio cuadrado perfecto | $a^2\pm2ab+b^2$ | $x^2+10x+25=(x+5)^2$ |
| Trinomio $x^2+bx+c$ (a=1) | buscar dos números que sumen b y multipliquen c | $x^2+7x+12=(x+3)(x+4)$ |
| Trinomio $ax^2+bx+c$ (a≠1) | método del aspa / descomposición | $2x^2+7x+3=(2x+1)(x+3)$ |
| Agrupación | 4 términos, se agrupan de 2 en 2 | $x^3+3x^2+2x+6=x^2(x+3)+2(x+3)=(x+3)(x^2+2)$ |

> **Fórmulas de las sumas/diferencias de cubos:**
> $$a^3+b^3=(a+b)(a^2-ab+b^2)\qquad a^3-b^3=(a-b)(a^2+ab+b^2)$$

⚠️ Error común: en la suma/diferencia de cubos, el signo del término central del trinomio es **opuesto** al del binomio (suma de cubos → binomio con "+", trinomio con "−ab"; y viceversa en la diferencia).

## 5. Fracciones algebraicas

- **Simplificar:** factorizar numerador y denominador y cancelar factores comunes.
  $$\dfrac{x^2-9}{x^2+x-6}=\dfrac{(x+3)(x-3)}{(x+3)(x-2)}=\dfrac{x-3}{x-2}$$
- **Suma/resta:** buscar el mcm de los denominadores (factorizando primero).
- **Multiplicación:** factorizar todo, cancelar y multiplicar lo que quede.
- **División:** multiplicar por el recíproco de la segunda fracción.

## 6. (Deseable) Binomio de Newton y triángulo de Pascal

$$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$$

Los coeficientes $\binom{n}{k}$ se leen directamente del **triángulo de Pascal**. Por ejemplo, para $n=4$: 1, 4, 6, 4, 1 →
$$(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$$

---

## Resumen / formulario rápido

- $(a\pm b)^2=a^2\pm2ab+b^2$ · $(a+b)(a-b)=a^2-b^2$
- $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$
- Factor común siempre se revisa **primero**.
- Para simplificar fracciones algebraicas: **factorizar antes de cancelar**, nunca cancelar términos sueltos dentro de una suma.
