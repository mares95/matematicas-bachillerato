# Tema 6 — Geometría analítica: vectores, rectas y cónicas

> **Bloque:** Geometría · **Curso:** Matemáticas I (plano) y II (espacio) · **Sesiones estimadas:** 12

## Objetivos

- Operar con vectores en el plano y usar el producto escalar.
- Escribir la recta en todas sus formas y estudiar posiciones relativas.
- Calcular ángulos y distancias.
- Identificar y escribir las ecuaciones de las cónicas.
- *(Mates II)* Manejar vectores, rectas y planos en el espacio: productos vectorial y mixto.

---

## 6.1 Vectores en el plano

$\vec{AB}=(x_B-x_A,\ y_B-y_A)$. Módulo: $|\vec u|=\sqrt{u_1^{2}+u_2^{2}}$.

**Punto medio** de $AB$: $M=\left(\frac{x_A+x_B}{2},\frac{y_A+y_B}{2}\right)$.

### Producto escalar

$$\vec u\cdot\vec v=u_1v_1+u_2v_2=|\vec u|\,|\vec v|\cos\alpha$$

$$\cos\alpha=\frac{\vec u\cdot\vec v}{|\vec u||\vec v|}\qquad\qquad \vec u\perp\vec v \iff \vec u\cdot\vec v=0$$

Vector perpendicular a $\vec u=(a,b)$: $\vec u^{\perp}=(-b,a)$.

## 6.2 La recta en el plano

Con punto $P(p_1,p_2)$ y vector director $\vec v=(v_1,v_2)$:

| Forma | Ecuación |
|---|---|
| Vectorial | $(x,y)=(p_1,p_2)+t(v_1,v_2)$ |
| Paramétrica | $x=p_1+tv_1$, $\;y=p_2+tv_2$ |
| Continua | $\dfrac{x-p_1}{v_1}=\dfrac{y-p_2}{v_2}$ |
| General/implícita | $Ax+By+C=0$ |
| Explícita | $y=mx+n$ |
| Punto-pendiente | $y-y_0=m(x-x_0)$ |

Si $Ax+By+C=0$: vector director $\vec v=(-B,A)$, vector normal $\vec n=(A,B)$, pendiente $m=-\frac{A}{B}$.

Pendiente desde el director: $m=\dfrac{v_2}{v_1}=\tan\alpha$.

**Paralelas:** misma pendiente ($m_1=m_2$). **Perpendiculares:** $m_1\cdot m_2=-1$.

### Posiciones relativas de dos rectas

Con $A x+By+C=0$ y $A'x+B'y+C'=0$:

$$\frac{A}{A'}\neq\frac{B}{B'}\ \text{secantes};\quad \frac{A}{A'}=\frac{B}{B'}\neq\frac{C}{C'}\ \text{paralelas};\quad \frac{A}{A'}=\frac{B}{B'}=\frac{C}{C'}\ \text{coincidentes}$$

## 6.3 Ángulos y distancias

**Ángulo entre rectas:** $\tan\alpha=\left|\dfrac{m_2-m_1}{1+m_1m_2}\right|$

**Distancia punto-recta:**

$$d(P,r)=\frac{|Ap_1+Bp_2+C|}{\sqrt{A^{2}+B^{2}}}$$

**Distancia entre paralelas:** se toma un punto de una y se aplica la fórmula anterior.

**Mediatriz** de $AB$: recta perpendicular a $AB$ por su punto medio; también $\{P: d(P,A)=d(P,B)\}$.

**Área del triángulo** de vértices $A,B,C$: $S=\frac12\left|\det(\vec{AB},\vec{AC})\right|$.

## 6.4 Cónicas

| Cónica | Ecuación reducida | Elementos |
|---|---|---|
| **Circunferencia** | $(x-a)^2+(y-b)^2=r^2$ | centro $(a,b)$, radio $r$ |
| **Elipse** | $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ | $c^2=a^2-b^2$, focos $(\pm c,0)$, $e=\frac ca<1$ |
| **Hipérbola** | $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ | $c^2=a^2+b^2$, asíntotas $y=\pm\frac ba x$, $e>1$ |
| **Parábola** | $y^{2}=2px$ | foco $\left(\frac p2,0\right)$, directriz $x=-\frac p2$ |

Forma general de la circunferencia: $x^{2}+y^{2}+Dx+Ey+F=0$, con centro $\left(-\frac D2,-\frac E2\right)$ y $r=\sqrt{\frac{D^2}{4}+\frac{E^2}{4}-F}$ (existe si el radicando es $>0$).

Definiciones como lugar geométrico:
- Elipse: $d(P,F)+d(P,F')=2a$
- Hipérbola: $|d(P,F)-d(P,F')|=2a$
- Parábola: $d(P,F)=d(P,\text{directriz})$

## 6.5 *(Matemáticas II)* Geometría en el espacio

**Producto vectorial:** $\vec u\times\vec v=\begin{vmatrix}\vec i&\vec j&\vec k\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}$, perpendicular a ambos, con $|\vec u\times\vec v|=|\vec u||\vec v|\sin\alpha$ = área del paralelogramo.

**Producto mixto:** $[\vec u,\vec v,\vec w]=\det(\vec u,\vec v,\vec w)$; su valor absoluto es el volumen del paralelepípedo. Vale 0 ⟺ los tres vectores son coplanarios.

**Plano:** $Ax+By+Cz+D=0$ con normal $\vec n=(A,B,C)$.

$$d(P,\pi)=\frac{|Ap_1+Bp_2+Cp_3+D|}{\sqrt{A^2+B^2+C^2}}$$

Recta: $\vec r \equiv (x,y,z)=P+t\vec v$. Posiciones relativas recta-plano y recta-recta se estudian con **rangos** de la matriz de coeficientes y la ampliada.

---

## Ejemplos resueltos

**Ejemplo 1.** Halla la recta que pasa por $A(2,-1)$ y $B(5,3)$.

$\vec{AB}=(3,4)$, $m=\frac43$ ⟹ $y+1=\frac43(x-2) \Rightarrow 4x-3y-11=0$.

**Ejemplo 2.** Halla la perpendicular a $r: 2x-y+3=0$ que pasa por $P(1,4)$.

$m_r=2$ ⟹ $m_s=-\frac12$ ⟹ $y-4=-\frac12(x-1) \Rightarrow x+2y-9=0$.

**Ejemplo 3.** Distancia de $P(3,-2)$ a $r:3x+4y-5=0$.

$$d=\frac{|9-8-5|}{\sqrt{9+16}}=\frac{4}{5}=0{,}8$$

**Ejemplo 4.** Halla centro y radio de $x^{2}+y^{2}-6x+2y-6=0$.

Centro $(3,-1)$; $r=\sqrt{9+1+6}=4$.

**Ejemplo 5.** Elipse con focos $(\pm4,0)$ y $a=5$.

$b^{2}=25-16=9$ ⟹ $\dfrac{x^{2}}{25}+\dfrac{y^{2}}{9}=1$, excentricidad $e=\frac45$.

**Ejemplo 6.** Ángulo entre $r:y=2x-1$ y $s:y=-3x+4$.

$\tan\alpha=\left|\frac{-3-2}{1+2(-3)}\right|=\left|\frac{-5}{-5}\right|=1 \Rightarrow \alpha=45^{\circ}$.

---

## Ejercicios propuestos

1. Dados $A(-1,2)$, $B(3,5)$: halla $\vec{AB}$, $|\vec{AB}|$ y el punto medio.
2. Halla $k$ para que $\vec u=(3,k)$ y $\vec v=(2,-6)$ sean perpendiculares.
3. Escribe en todas sus formas la recta que pasa por $P(1,-3)$ con $\vec v=(2,5)$.
4. Estudia la posición relativa de $r:2x-3y+1=0$ y $s:-4x+6y+5=0$.
5. Halla la mediatriz del segmento de extremos $A(1,2)$ y $B(5,-4)$.
6. Calcula la distancia entre $r:x-2y+3=0$ y $s:x-2y-7=0$.
7. Halla el área del triángulo de vértices $(0,0)$, $(4,1)$, $(2,5)$.
8. Halla la circunferencia de centro $(2,-3)$ que pasa por $(5,1)$.
9. Determina centro, radio o indica si no existe: $x^2+y^2+4x-2y+9=0$.
10. Halla los focos y la excentricidad de $\dfrac{x^2}{16}+\dfrac{y^2}{7}=1$.
11. Halla las asíntotas de $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$.
12. Halla la ecuación de la parábola de foco $(3,0)$ y directriz $x=-3$.
13. *(Mates II)* Halla un vector perpendicular a $\vec u=(1,2,-1)$ y $\vec v=(0,1,3)$.
14. *(Mates II)* Halla el plano que pasa por $A(1,0,2)$ con normal $\vec n=(2,-1,3)$, y la distancia del origen a dicho plano.

### Soluciones

1. $\vec{AB}=(4,3)$, $|\vec{AB}|=5$, $M=(1,\ 3{,}5)$
2. $6-6k=0\Rightarrow k=1$
3. Continua $\frac{x-1}{2}=\frac{y+3}{5}$; general $5x-2y-11=0$; explícita $y=\frac52x-\frac{11}{2}$
4. $\frac{2}{-4}=\frac{-3}{6}\neq\frac{1}{5}$ ⟹ **paralelas**
5. $M=(3,-1)$, $\vec{AB}=(4,-6)$ ⟹ $4x-6y-18=0 \Rightarrow 2x-3y-9=0$
6. $\frac{|3-(-7)|}{\sqrt5}=\frac{10}{\sqrt5}=2\sqrt5$
7. $S=\frac12|4\cdot5-1\cdot2|=9$
8. $r=\sqrt{9+16}=5$ ⟹ $(x-2)^2+(y+3)^2=25$
9. Centro $(-2,1)$, $r^2=4+1-9=-4<0$ ⟹ **no existe** (conjunto vacío)
10. $c=3$, focos $(\pm3,0)$, $e=\frac34$
11. $y=\pm\frac43x$
12. $y^{2}=12x$
13. $\vec u\times\vec v=(7,-3,1)$
14. $2x-y+3z-8=0$; $d=\frac{8}{\sqrt{14}}\approx2{,}14$

---

## Errores típicos

- Confundir vector **director** $(-B,A)$ con vector **normal** $(A,B)$.
- Olvidar el valor absoluto en la fórmula de la distancia.
- En la circunferencia general, olvidar dividir $D$ y $E$ entre $-2$.
- Confundir $c^2=a^2-b^2$ (elipse) con $c^2=a^2+b^2$ (hipérbola).
