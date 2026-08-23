# Unidad 3 — La circunferencia

**Semestre 3 · Matemáticas III (Geometría Analítica)**

## Objetivo de la unidad

Reconocer la circunferencia como lugar geométrico, obtener su ecuación (ordinaria y general) con centro en el origen o fuera de él, encontrar sus elementos a partir de la ecuación general, obtener la ecuación de la circunferencia que pasa por tres puntos y hallar la recta tangente.

---

## 1. Definición

Una **circunferencia** es el lugar geométrico de los puntos del plano que están a una distancia constante (el **radio**, $r$) de un punto fijo (el **centro**, $C(h,k)$).

## 2. Ecuación ordinaria

$$(x-h)^2+(y-k)^2=r^2$$

Si el centro está en el origen ($h=k=0$): $x^2+y^2=r^2$.

> **Ejemplo:** centro $(3,-2)$, radio $5$: $(x-3)^2+(y+2)^2=25$

## 3. Ecuación general

Al desarrollar la ecuación ordinaria se obtiene:

$$x^2+y^2+Dx+Ey+F=0 \qquad \text{con } D=-2h,\ E=-2k,\ F=h^2+k^2-r^2$$

**Para encontrar centro y radio a partir de la forma general:**

$$h=-\frac{D}{2},\qquad k=-\frac{E}{2},\qquad r=\sqrt{h^2+k^2-F}$$

(equivalente a completar el trinomio cuadrado perfecto en $x$ y en $y$.)

> **Ejemplo (ordinaria → general):** $(x-3)^2+(y+2)^2=25$
> $x^2-6x+9+y^2+4y+4=25 \Rightarrow x^2+y^2-6x+4y-12=0$
> Comprobación con la fórmula: $h=-\tfrac{-6}{2}=3$ ✓, $k=-\tfrac{4}{2}=-2$ ✓, $r=\sqrt{9+4-(-12)}=\sqrt{25}=5$ ✓

> **Ejemplo (general → centro y radio, completando el cuadrado):** $x^2+y^2+8x-6y+16=0$
> $(x^2+8x+16)+(y^2-6y+9)=-16+16+9$
> $(x+4)^2+(y-3)^2=9 \Rightarrow$ centro $(-4,3)$, radio $3$

## 4. Circunferencia que pasa por tres puntos

Se sustituyen los tres puntos en $x^2+y^2+Dx+Ey+F=0$, obteniendo un sistema de 3 ecuaciones lineales en $D$, $E$, $F$.

> **Ejemplo:** $A(0,0)$, $B(4,0)$, $C(0,6)$.
> - En $A$: $0+0+0+0+F=0\Rightarrow F=0$
> - En $B$: $16+4D+F=0\Rightarrow 16+4D=0\Rightarrow D=-4$
> - En $C$: $36+6E+F=0\Rightarrow 36+6E=0\Rightarrow E=-6$
>
> Circunferencia: $x^2+y^2-4x-6y=0$, con centro $(2,3)$ y radio $\sqrt{4+9-0}=\sqrt{13}$.
> **Comprobación:** la distancia del centro $(2,3)$ a los tres puntos es $\sqrt{13}$ en los tres casos (verifícalo tú). ✓

## 5. Recta tangente a una circunferencia

La tangente en un punto $(x_1,y_1)$ de la circunferencia es **perpendicular al radio** que llega a ese punto.

- Para $x^2+y^2=r^2$: la tangente en $(x_1,y_1)$ es $\ x_1x+y_1y=r^2$
- Para $(x-h)^2+(y-k)^2=r^2$: la tangente en $(x_1,y_1)$ es $\ (x_1-h)(x-h)+(y_1-k)(y-k)=r^2$

> **Ejemplo:** circunferencia $x^2+y^2=25$, punto $(3,4)$ (que sí pertenece a ella, pues $9+16=25$).
> Pendiente del radio: $\dfrac{4-0}{3-0}=\dfrac43$; pendiente de la tangente (perpendicular): $-\dfrac34$
> Tangente: $y-4=-\tfrac34(x-3)\Rightarrow 3x+4y-25=0$
> Usando la fórmula directa: $3x+4y=25$, es decir $3x+4y-25=0$ — **coincide** ✓

---

## Errores comunes

- Olvidar dividir entre 2 (con signo cambiado) al pasar de $D,E$ a $h,k$: $h=-D/2$, no $h=-D$.
- Al completar el cuadrado, olvidar sumar la misma cantidad en ambos lados de la ecuación.
- Confundir la fórmula de la tangente con la de la recta que pasa por el centro (la tangente es *perpendicular* al radio, no paralela).

## Resumen / formulario rápido

- Ordinaria: $(x-h)^2+(y-k)^2=r^2$
- General: $x^2+y^2+Dx+Ey+F=0$, con $h=-D/2$, $k=-E/2$, $r=\sqrt{h^2+k^2-F}$
- Tangente en $(x_1,y_1)$: $(x_1-h)(x-h)+(y_1-k)(y-k)=r^2$
