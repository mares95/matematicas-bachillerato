# Unidad 5 — La Elipse

**Semestre 4 · Matemáticas IV (Geometría Analítica)**

## Objetivo de la unidad

Conocer la elipse como lugar geométrico, calcular su ecuación (ordinaria y general) conociendo sus elementos —con centro en el origen y fuera de él— y encontrar los elementos a partir de la ecuación general.

---

## 1. Definición

Una **elipse** es el lugar geométrico de los puntos P(x,y) tales que la **suma** de sus distancias a dos puntos fijos, llamados **focos**, es constante e igual a $2a$.

## 2. Elementos

- **Centro (C), vértices, focos**
- **Eje mayor** (longitud $2a$) y **eje menor** (longitud $2b$)
- **Eje focal:** recta que contiene a los focos y vértices
- **Relación fundamental:** $a^2=b^2+c^2$, donde $c$ = distancia del centro a cada foco
- **Excentricidad:** $e=\dfrac{c}{a}$, con $0<e<1$ (entre más cerca de 0, más "redonda"; entre más cerca de 1, más alargada)
- **Lado recto:** $\dfrac{2b^2}{a}$

## 3. Ecuación ordinaria con centro en el origen

| Eje mayor | Ecuación | Focos | Vértices |
|---|---|---|---|
| Horizontal (sobre x) | $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, $a>b$ | $(\pm c,0)$ | $(\pm a,0)$ |
| Vertical (sobre y) | $\dfrac{x^2}{b^2}+\dfrac{y^2}{a^2}=1$, $a>b$ | $(0,\pm c)$ | $(0,\pm a)$ |

> **Ejemplo:** $a=5$, $b=3$ (horizontal): $c^2=a^2-b^2=25-9=16\Rightarrow c=4$, $e=\dfrac{4}{5}=0.8$.
> $$\frac{x^2}{25}+\frac{y^2}{9}=1$$
> **Verificación (definición):** en el vértice $(5,0)$, distancia a foco $(4,0)$ es $1$, y a foco $(-4,0)$ es $9$; suma $=10=2a$ ✓.

## 4. Ecuación ordinaria con centro fuera del origen $(h,k)$

$$\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1 \quad (\text{horizontal, } a>b)$$

> **Ejemplo:** centro $(2,-1)$, $a=5$ (horizontal), $b=3$: $\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1$. $c^2=25-9=16\Rightarrow c=4$. Focos: $(2\pm4,-1)=(6,-1)$ y $(-2,-1)$.

## 5. De la ecuación general a la ordinaria

> **Ejemplo:** $9x^2+25y^2-36x+50y-164=0$
> $9x^2-36x=9(x^2-4x)=9\big[(x-2)^2-4\big]=9(x-2)^2-36$
> $25y^2+50y=25(y^2+2y)=25\big[(y+1)^2-1\big]=25(y+1)^2-25$
> $9(x-2)^2-36+25(y+1)^2-25-164=0 \Rightarrow 9(x-2)^2+25(y+1)^2=225$
> Dividiendo entre 225: $\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1$
> **Centro $(2,-1)$, $a=5$, $b=3$, $c=4$** (horizontal, pues 25>9 está bajo $x$).

---

## Errores comunes

- Olvidar que $a$ siempre es el **mayor** de los dos denominadores; el eje mayor está en la variable con el denominador más grande.
- Confundir la relación de la elipse ($a^2=b^2+c^2$) con la de la hipérbola ($c^2=a^2+b^2$).
- No dividir entre el término independiente al pasar de la forma $A(x-h)^2+B(y-k)^2=K$ a la forma $=1$.

## Resumen / formulario rápido

- $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ (horizontal) / $\dfrac{x^2}{b^2}+\dfrac{y^2}{a^2}=1$ (vertical), siempre $a>b$.
- $a^2=b^2+c^2$, $e=c/a\in(0,1)$, lado recto $=2b^2/a$.
