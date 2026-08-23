# Unidad 2 — La recta

**Semestre 3 · Matemáticas III (Geometría Analítica)**

## Objetivo de la unidad

Definir la recta como lugar geométrico, obtener su ecuación en todas sus formas, determinar paralelismo y perpendicularidad, calcular la distancia de un punto a una recta y aplicar las rectas notables de un triángulo.

---

## 1. Formas de la ecuación de la recta

| Forma | Ecuación | Se usa cuando conoces... |
|---|---|---|
| Pendiente–ordenada al origen | $y=mx+b$ | la pendiente $m$ y el intercepto $b$ |
| Punto–pendiente | $y-y_1=m(x-x_1)$ | un punto y la pendiente |
| Dos puntos | $\dfrac{y-y_1}{x-x_1}=\dfrac{y_2-y_1}{x_2-x_1}$ | dos puntos de la recta |
| General / implícita | $Ax+By+C=0$ | forma estándar para calcular distancias |
| Simétrica | $\dfrac{x}{a}+\dfrac{y}{b}=1$ | los interceptos $a$ (con eje X) y $b$ (con eje Y) |

> **Ejemplo (dos puntos):** recta por $(1,2)$ y $(4,11)$.
> $m=\dfrac{11-2}{4-1}=3 \Rightarrow y-2=3(x-1)\Rightarrow y=3x-1$
> Comprobación: en $x=4$, $y=3(4)-1=11$ ✓

> **Ejemplo (forma simétrica):** $2x+3y=6$. Dividiendo entre 6: $\dfrac{x}{3}+\dfrac{y}{2}=1$, es decir, corta al eje X en $(3,0)$ y al eje Y en $(0,2)$.

## 2. Paralelismo y perpendicularidad

$$\text{Paralelas: } m_1=m_2 \qquad\qquad \text{Perpendiculares: } m_1\cdot m_2=-1$$

> **Ejemplo:** dada $y=2x+1$ ($m=2$), la recta paralela que pasa por $(3,4)$ es $y-4=2(x-3)\Rightarrow y=2x-2$; la perpendicular por el mismo punto es $y-4=-\tfrac12(x-3)\Rightarrow y=-\tfrac12x+5.5$

## 3. Distancia de un punto a una recta

$$d=\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$$

> **Ejemplo:** punto $(0,0)$ y recta $3x+4y-10=0$: $d=\dfrac{|0+0-10|}{\sqrt{9+16}}=\dfrac{10}{5}=2$

## 4. Rectas y puntos notables de un triángulo

| Recta notable | Definición | Punto de concurrencia |
|---|---|---|
| Mediana | va de un vértice al punto medio del lado opuesto | **Baricentro** (centroide) |
| Mediatriz | perpendicular a un lado por su punto medio | **Circuncentro** |
| Altura | perpendicular a un lado, pasando por el vértice opuesto | **Ortocentro** |

- **Baricentro:** $G=\left(\dfrac{x_1+x_2+x_3}{3},\dfrac{y_1+y_2+y_3}{3}\right)$ (promedio de los vértices).
- **Recta de Euler:** el baricentro, el circuncentro y el ortocentro de cualquier triángulo son **colineales**.

> **Ejemplo integrador:** triángulo $A(0,0)$, $B(6,0)$, $C(0,4)$ (rectángulo en $A$).
> - Baricentro: $G=\left(\dfrac{0+6+0}{3},\dfrac{0+0+4}{3}\right)=\left(2,\dfrac43\right)$
> - Circuncentro (en un triángulo rectángulo, es el punto medio de la hipotenusa $BC$): $\left(\dfrac{6+0}{2},\dfrac{0+4}{2}\right)=(3,2)$. Comprobación: $d(circ,A)=\sqrt{9+4}=\sqrt{13}$, $d(circ,B)=\sqrt{9+4}=\sqrt{13}$, $d(circ,C)=\sqrt{9+4}=\sqrt{13}$ — equidistante de los 3 vértices ✓
> - Ortocentro (en un triángulo rectángulo coincide con el vértice del ángulo recto): $(0,0)$
> - **Verificación de la Recta de Euler:** pendiente de ortocentro a baricentro $=\dfrac{4/3-0}{2-0}=\dfrac23$; pendiente de baricentro a circuncentro $=\dfrac{2-4/3}{3-2}=\dfrac23$. Misma pendiente ⟹ los tres puntos son colineales ✓

## 5. Área de un triángulo dado por sus vértices

$$A=\frac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|$$

(misma fórmula del "zapatero" vista en la Unidad 1, aplicada a 3 vértices.)

---

## Errores comunes

- Confundir mediana, mediatriz y altura (la mediana usa el punto medio; la mediatriz y la altura son perpendiculares, pero la mediatriz pasa por el punto medio y la altura por el vértice opuesto).
- Olvidar que $Ax+By+C=0$ debe estar en esa forma exacta antes de aplicar la fórmula de distancia (pasar todos los términos de un lado).
- Al verificar perpendicularidad, confundir $m_2=-m_1$ con $m_2=-\dfrac{1}{m_1}$ (la correcta es la recíproca negativa).

## Resumen / formulario rápido

- $y=mx+b$ · $y-y_1=m(x-x_1)$ · $Ax+By+C=0$ · $\dfrac{x}{a}+\dfrac{y}{b}=1$
- Paralelas: $m_1=m_2$. Perpendiculares: $m_1m_2=-1$.
- $d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$
- Baricentro $=\left(\dfrac{x_1+x_2+x_3}{3},\dfrac{y_1+y_2+y_3}{3}\right)$; baricentro, circuncentro y ortocentro son colineales (Recta de Euler).
