# Unidad 6 — La Hipérbola

**Semestre 4 · Matemáticas IV (Geometría Analítica)**

## Objetivo de la unidad

Conocer la hipérbola como lugar geométrico, calcular su ecuación (ordinaria y general) conociendo sus elementos —con centro en el origen y fuera de él— y encontrar los elementos a partir de la ecuación general.

---

## 1. Definición

Una **hipérbola** es el lugar geométrico de los puntos P(x,y) tales que el **valor absoluto de la diferencia** de sus distancias a dos puntos fijos, llamados **focos**, es constante e igual a $2a$.

## 2. Elementos

- **Centro, vértices, focos**
- **Eje transverso** (longitud $2a$, une los vértices) y **eje conjugado** (longitud $2b$)
- **Relación fundamental:** $c^2=a^2+b^2$ (¡al revés que en la elipse!)
- **Excentricidad:** $e=\dfrac{c}{a}$, con $e>1$
- **Asíntotas:** rectas a las que se acerca la curva sin tocarlas
- **Lado recto:** $\dfrac{2b^2}{a}$

## 3. Ecuación ordinaria con centro en el origen

| Eje transverso | Ecuación | Focos | Asíntotas |
|---|---|---|---|
| Horizontal (sobre x) | $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ | $(\pm c,0)$ | $y=\pm\dfrac{b}{a}x$ |
| Vertical (sobre y) | $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ | $(0,\pm c)$ | $y=\pm\dfrac{a}{b}x$ |

> **Ejemplo:** $a=3$, $b=4$ (horizontal): $c^2=a^2+b^2=9+16=25\Rightarrow c=5$, $e=\dfrac53$.
> $$\frac{x^2}{9}-\frac{y^2}{16}=1$$
> **Verificación (definición):** en el vértice $(3,0)$, distancia a foco $(5,0)$ es $2$ y a foco $(-5,0)$ es $8$; $|2-8|=6=2a$ ✓.
> Asíntotas: $y=\pm\dfrac43x$.

## 4. Ecuación ordinaria con centro fuera del origen $(h,k)$

$$\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1 \quad (\text{horizontal})$$

## 5. De la ecuación general a la ordinaria

> **Ejemplo:** $16x^2-9y^2-32x-36y-164=0$
> $16x^2-32x=16(x^2-2x)=16\big[(x-1)^2-1\big]=16(x-1)^2-16$
> $-9y^2-36y=-9(y^2+4y)=-9\big[(y+2)^2-4\big]=-9(y+2)^2+36$
> $16(x-1)^2-16-9(y+2)^2+36-164=0 \Rightarrow 16(x-1)^2-9(y+2)^2=144$
> Dividiendo entre 144: $\dfrac{(x-1)^2}{9}-\dfrac{(y+2)^2}{16}=1$
> **Centro $(1,-2)$, $a=3$, $b=4$, $c=\sqrt{9+16}=5$**, horizontal. Asíntotas: $y+2=\pm\dfrac43(x-1)$.

---

## Comparación rápida elipse vs. hipérbola

| | Elipse | Hipérbola |
|---|---|---|
| Definición | **suma** de distancias constante | **diferencia** (valor absoluto) constante |
| Relación | $a^2=b^2+c^2$ | $c^2=a^2+b^2$ |
| Excentricidad | $0<e<1$ | $e>1$ |
| Signo en la ecuación | + entre los dos términos | − entre los dos términos |

## Errores comunes

- Aplicar la relación de la elipse ($a^2=b^2+c^2$) en vez de la de la hipérbola ($c^2=a^2+b^2$).
- Olvidar el signo negativo al identificar cuál término tiene $a^2$ (el que va **positivo** define el eje transverso).
- Calcular mal la pendiente de las asíntotas (intercambiar $a$ y $b$).

## Resumen / formulario rápido

- $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ (horizontal) / $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ (vertical).
- $c^2=a^2+b^2$, $e=c/a>1$.
- Asíntotas: pendiente $\pm b/a$ (horizontal) o $\pm a/b$ (vertical).
