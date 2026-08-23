# Unidad 1 — Números y operaciones básicas

**Semestre 1 · Pensamiento Matemático I (énfasis en aritmética y álgebra)**

## Objetivo de la unidad

Resolver problemas —con y sin calculadora— que combinan operaciones aritméticas, aplicando correctamente la jerarquía de operaciones y las leyes de los exponentes con números enteros y fraccionarios.

---

## 1. Conjuntos numéricos

| Conjunto | Símbolo | Ejemplos | Características |
|---|---|---|---|
| Naturales | ℕ | 0, 1, 2, 3, … | Para contar |
| Enteros | ℤ | …, −2, −1, 0, 1, 2, … | Incluyen negativos |
| Racionales | ℚ | 1/2, −3, 0.75 | Se escriben como fracción a/b, b≠0 |
| Irracionales | 𝕀 | √2, π, e | Decimales infinitos no periódicos |
| Reales | ℝ | ℚ ∪ 𝕀 | Todos los anteriores |

$$\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$$

## 2. Jerarquía de operaciones

Al resolver una expresión con varias operaciones, el orden es:

1. **Paréntesis / símbolos de agrupación** (de adentro hacia afuera)
2. **Exponentes y raíces**
3. **Multiplicación y división** (de izquierda a derecha, tienen el mismo nivel)
4. **Suma y resta** (de izquierda a derecha, mismo nivel)

> **Ejemplo resuelto:** 8 + 2 × (5 − 3)³ ÷ 4
> = 8 + 2 × (2)³ ÷ 4
> = 8 + 2 × 8 ÷ 4
> = 8 + 16 ÷ 4
> = 8 + 4 = **12**

⚠️ Error común: hacer las operaciones estrictamente de izquierda a derecha ignorando que multiplicación/división van antes que suma/resta.

## 3. Leyes de los exponentes

| Ley | Fórmula |
|---|---|
| Producto de potencias | $a^m\cdot a^n=a^{m+n}$ |
| Cociente de potencias | $a^m\div a^n=a^{m-n}$ |
| Potencia de una potencia | $(a^m)^n=a^{mn}$ |
| Potencia de un producto | $(ab)^n=a^n b^n$ |
| Exponente cero | $a^0=1\ (a\neq0)$ |
| Exponente negativo | $a^{-n}=\dfrac{1}{a^n}$ |
| Exponente fraccionario | $a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]{a})^m$ |

> **Ejemplo resuelto:** $27^{2/3}$
> $= (\sqrt[3]{27})^2 = 3^2 = 9$

> **Ejemplo resuelto:** $\dfrac{2^{-3}\cdot 2^5}{2^{-1}}$
> $= 2^{-3+5-(-1)} = 2^{3} = 8$

⚠️ Error común: aplicar la ley de los signos incorrectamente en exponentes negativos, por ejemplo pensar que $a^{-n}=-a^n$ (falso).

## 4. Operaciones con fracciones

- **Suma/resta:** se busca el mínimo común denominador (mcd de los denominadores → mcm).
  $$\frac{2}{3}+\frac{1}{4}=\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$$
- **Multiplicación:** numerador × numerador, denominador × denominador.
- **División:** se multiplica por el recíproco de la segunda fracción.
- **Fracción ↔ decimal:** se divide numerador entre denominador; para volver a fracción, si el decimal es exacto se escribe sobre potencia de 10 y se simplifica; si es periódico, se usa la fórmula de la fracción generatriz.

## 5. Propiedades de los números reales

| Propiedad | Suma | Multiplicación |
|---|---|---|
| Conmutativa | a+b=b+a | a·b=b·a |
| Asociativa | (a+b)+c=a+(b+c) | (a·b)·c=a·(b·c) |
| Distributiva | — | a·(b+c)=a·b+a·c |

## 6. Máximo común divisor (MCD) y mínimo común múltiplo (mcm)

- **MCD:** el mayor número que divide exactamente a dos o más números. Útil para simplificar fracciones.
- **mcm:** el menor número que es múltiplo de dos o más números. Útil para sumar/restar fracciones con distinto denominador.

> **Ejemplo:** MCD(12,18)=6; mcm(12,18)=36.

---

## Ejemplo integrador (problema contextualizado)

*Si al comprar a plazos un celular de $17,500 debes pagar un anticipo del 10% y al resto le agregan un 5% de interés, ¿cuánto pagas en total?*

- Anticipo: 17 500 × 0.10 = 1 750
- Resto: 17 500 − 1 750 = 15 750
- Interés: 15 750 × 0.05 = 787.5
- Total a financiar: 15 750 + 787.5 = 16 537.5
- **Total pagado:** 1 750 + 16 537.5 = **$18,287.5**

---

## Resumen / formulario rápido

- Orden de operaciones: **( ) → potencias/raíces → ×÷ → +−**
- $a^m a^n=a^{m+n}$, $a^m/a^n=a^{m-n}$, $(a^m)^n=a^{mn}$, $a^{-n}=1/a^n$, $a^{m/n}=\sqrt[n]{a^m}$
- Suma de fracciones: usar el mcm de los denominadores.
- MCD → simplificar; mcm → sumar/restar fracciones.
