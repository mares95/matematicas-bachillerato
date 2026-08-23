# Unidad 1 — Ejes coordenados

**Semestre 3 · Matemáticas III (Geometría Analítica)**

## Objetivo de la unidad

Ubicar puntos en el sistema de coordenadas cartesianas, calcular distancias, puntos medios y divisiones de un segmento en una razón dada, y usar la pendiente para resolver problemas de perímetros y áreas de polígonos a partir de sus vértices.

---

## 1. Sistema de coordenadas cartesianas

Todo punto del plano se representa como un par ordenado $(x,y)$: $x$ es la **abscisa** (eje horizontal) y $y$ la **ordenada** (eje vertical). Los dos ejes dividen el plano en 4 **cuadrantes**.

## 2. Distancia entre dos puntos

$$d(P_1,P_2)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$

Se obtiene aplicando el teorema de Pitágoras al triángulo rectángulo que forman las diferencias de coordenadas.

> **Ejemplo:** $A(1,2)$, $B(4,6)$.
> $d=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=\sqrt{25}=5$

## 3. Punto medio de un segmento

$$M=\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right)$$

> **Ejemplo:** $A(1,2)$, $B(4,6)$: $M=\left(\dfrac{1+4}{2},\dfrac{2+6}{2}\right)=(2.5,\ 4)$

## 4. División de un segmento en una razón dada

Si $P$ divide al segmento $AB$ de modo que $\dfrac{AP}{PB}=r$, entonces:

$$P=\left(\frac{x_1+r\,x_2}{1+r},\ \frac{y_1+r\,y_2}{1+r}\right)$$

(Con $r=1$ se obtiene el punto medio, como caso particular.)

> **Ejemplo:** $A(1,1)$, $B(4,10)$, $r=2$ (es decir, $AP=2\cdot PB$):
> $$P=\left(\frac{1+2(4)}{3},\frac{1+2(10)}{3}\right)=\left(\frac{9}{3},\frac{21}{3}\right)=(3,7)$$
> **Comprobación:** $AP=\sqrt{(3-1)^2+(7-1)^2}=\sqrt{4+36}=\sqrt{40}$; $PB=\sqrt{(4-3)^2+(10-7)^2}=\sqrt{1+9}=\sqrt{10}$. Como $\sqrt{40}=2\sqrt{10}$, en efecto $AP=2\,PB$. ✓

## 5. Pendiente y ángulo de inclinación

$$m=\frac{y_2-y_1}{x_2-x_1}=\tan\theta$$

donde $\theta$ es el **ángulo de inclinación** (el que forma la recta con el eje X positivo, medido en sentido antihorario, $0^\circ\le\theta<180^\circ$).

> **Ejemplo:** $A(2,1)$, $B(5,7)$: $m=\dfrac{7-1}{5-2}=\dfrac{6}{3}=2 \Rightarrow \theta=\arctan(2)\approx63.43^\circ$

⚠️ Si $m<0$, el ángulo de inclinación es **obtuso** ($90^\circ<\theta<180^\circ$): se calcula $\theta=180^\circ-\arctan|m|$.

## 6. Perímetro y área de un polígono a partir de sus vértices

- **Perímetro:** suma de las distancias entre vértices consecutivos.
- **Área (fórmula del "zapatero"/shoelace):** para vértices $(x_1,y_1),\dots,(x_n,y_n)$ en orden (horario o antihorario):

$$A=\frac12\left|\sum_{i=1}^{n}\left(x_i y_{i+1}-x_{i+1}y_i\right)\right|$$

(el índice $n+1$ se refiere de nuevo al primer vértice).

> **Ejemplo (triángulo):** $A(0,0)$, $B(4,0)$, $C(0,3)$.
> Área $=\dfrac12\left|0(0-3)+4(3-0)+0(0-0)\right|=\dfrac12|12|=6$
> Esto coincide con el área de un triángulo rectángulo de catetos 4 y 3: $\frac12(4)(3)=6$. ✓
> Perímetro: $AB=4$, $BC=\sqrt{16+9}=5$, $CA=3\Rightarrow P=12$.

---

## Errores comunes

- Confundir el orden de resta en la fórmula de la pendiente/distancia (debe ser siempre "punto 2 menos punto 1", consistente en ambas coordenadas).
- Olvidar el signo del ángulo de inclinación cuando la pendiente es negativa (el ángulo sigue siendo positivo y menor a 180°, no se reporta como "negativo").
- En la fórmula del área, olvidar el valor absoluto (el resultado de la suma puede salir negativo según el orden de los vértices, pero el área siempre es positiva).

## Resumen / formulario rápido

- $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$
- $M=\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$
- $P=\left(\dfrac{x_1+rx_2}{1+r},\dfrac{y_1+ry_2}{1+r}\right)$
- $m=\dfrac{y_2-y_1}{x_2-x_1}=\tan\theta$
- Área (shoelace): $\frac12\left|\sum(x_iy_{i+1}-x_{i+1}y_i)\right|$
