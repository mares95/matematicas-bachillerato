# Unidad 7 — Identificación de Cónicas

**Semestre 4 · Matemáticas IV (Geometría Analítica)**

## Objetivo de la unidad

Identificar el tipo de cónica (circunferencia, parábola, elipse o hipérbola) a partir de su ecuación general, usando el indicador o discriminante $B^2-4AC$.

---

## 1. Ecuación general de una cónica

$$Ax^2+Bxy+Cy^2+Dx+Ey+F=0$$

En este curso trabajamos principalmente cónicas **sin rotación**, es decir $B=0$:

$$Ax^2+Cy^2+Dx+Ey+F=0$$

## 2. El indicador (discriminante) $B^2-4AC$

| Valor de $B^2-4AC$ | Cónica |
|---|---|
| $<0$, con $A=C$ y $B=0$ | Circunferencia |
| $<0$, en cualquier otro caso | Elipse |
| $=0$ | Parábola |
| $>0$ | Hipérbola |

## 3. Regla práctica cuando $B=0$ (sin término $xy$)

Como $B=0$, el indicador se reduce a $-4AC$, así que basta **comparar los signos y valores de $A$ y $C$**:

| Condición sobre A y C | Cónica |
|---|---|
| $A=0$ o $C=0$ (falta un término cuadrático) | Parábola |
| $A=C\neq0$ | Circunferencia |
| $A\neq C$, mismo signo | Elipse |
| $A$ y $C$ de signo opuesto | Hipérbola |

⚠️ Es fácil confundir circunferencia con elipse: si los coeficientes de $x^2$ y $y^2$ son **iguales**, es circunferencia (un caso particular de elipse con $a=b$); si son distintos (mismo signo), es elipse.

## 4. Ejemplos resueltos

> **a)** $4x^2+4y^2-16x+8y-4=0$: $A=C=4$ ⟹ **circunferencia**.
> Completando cuadrados: $4(x-2)^2+4(y+1)^2=24 \Rightarrow (x-2)^2+(y+1)^2=6$. Centro $(2,-1)$, radio $\sqrt6$.

> **b)** $9x^2+4y^2-18x+16y-11=0$: $A=9$, $C=4$, mismo signo, distinto valor ⟹ **elipse**.

> **c)** $x^2-4y^2-2x-16y-19=0$: $A=1$, $C=-4$, signos opuestos ⟹ **hipérbola**.
> Completando cuadrados: $(x-1)^2-4(y+2)^2=4 \Rightarrow \dfrac{(x-1)^2}{4}-(y+2)^2=1$.

> **d)** $y^2+6y-4x+17=0$: no hay término $x^2$ ($A=0$) ⟹ **parábola**.

## 5. Estrategia recomendada

1. Identifica $A$ y $C$ (coeficientes de $x^2$ y $y^2$).
2. Aplica la tabla de la sección 3 para clasificar la cónica.
3. Si necesitas los elementos (centro, radio, $a$, $b$, focos, etc.), completa el cuadrado en $x$ y en $y$ para llevarla a su forma ordinaria (ver unidades 4, 5 y 6).

---

## Errores comunes

- Usar la calculadora sin cuidar los signos negativos de los coeficientes al comparar $A$ y $C$.
- Confundir circunferencia con elipse cuando $A$ y $C$ son parecidos pero no exactamente iguales.
- Olvidar que basta con que **falte uno** de los dos términos cuadráticos para que sea parábola (no ambos).

## Resumen / formulario rápido

- $B^2-4AC<0$: elipse (circunferencia si $A=C$, $B=0$).
- $B^2-4AC=0$: parábola.
- $B^2-4AC>0$: hipérbola.
- Sin rotación ($B=0$): compara directamente $A$ y $C$.
