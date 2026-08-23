# Tema 11 — Matrices, determinantes y sistemas

> **Bloque:** Álgebra lineal · **Curso:** Matemáticas II · **Sesiones estimadas:** 11

## Objetivos

- Operar con matrices y calcular potencias.
- Calcular determinantes de orden 2, 3 y superior, y usar sus propiedades.
- Hallar el rango y la matriz inversa.
- Resolver ecuaciones matriciales.
- Discutir y resolver sistemas con Gauss, Rouché–Frobenius y Cramer.

---

## 11.1 Matrices: definición y operaciones

$A=(a_{ij})_{m\times n}$. Tipos: fila, columna, cuadrada, diagonal, identidad $I$, triangular, simétrica ($A^{t}=A$), antisimétrica ($A^t=-A$), nula.

- **Suma:** elemento a elemento (requiere el mismo orden).
- **Producto por escalar:** $k\cdot A=(k\,a_{ij})$.
- **Producto:** $A_{m\times n}\cdot B_{n\times p}=C_{m\times p}$, con

$$c_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}\quad(\text{fila }i\ \text{por columna }j)$$

⚠️ El producto **no es conmutativo**: en general $AB\neq BA$. Además $AB=0$ **no** implica $A=0$ o $B=0$.

**Trasposición:** $(A^{t})^{t}=A$, $(A+B)^{t}=A^{t}+B^{t}$, $(AB)^{t}=B^{t}A^{t}$.

**Potencias:** para hallar $A^{n}$ se calculan $A^2, A^3,\dots$ hasta detectar el **patrón** y se demuestra por inducción.

## 11.2 Determinantes

$$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$$

**Regla de Sarrus** (orden 3):

$$\begin{vmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{vmatrix}
= a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$$

**Desarrollo por adjuntos** (cualquier orden): $\det A=\sum_j a_{ij}A_{ij}$ con $A_{ij}=(-1)^{i+j}\alpha_{ij}$.

### Propiedades

1. $\det(A^{t})=\det A$.
2. Si una fila (o columna) es **nula**, $\det A=0$.
3. Si hay dos filas **iguales o proporcionales**, $\det A=0$.
4. Al **intercambiar** dos filas, el determinante cambia de signo.
5. Si se multiplica una fila por $k$, el determinante queda multiplicado por $k$ ⟹ $\det(kA)=k^{n}\det A$.
6. $F_i \to F_i+kF_j$ **no** altera el determinante (esto permite hacer ceros).
7. $\det(AB)=\det A\cdot\det B$;  $\det(A^{-1})=\dfrac{1}{\det A}$.

## 11.3 Rango

El **rango** es el orden del mayor menor no nulo (equivalentemente, el número de filas linealmente independientes).

Dos métodos: **por menores** (orlando) o **por Gauss** (contar filas no nulas al escalonar).

## 11.4 Matriz inversa

$A$ es **regular** (invertible) $\iff \det A\neq0$.

$$A^{-1}=\frac{1}{\det A}\big(\operatorname{Adj}A\big)^{t}$$

También se puede obtener por **Gauss–Jordan**: $(A\,|\,I)\to(I\,|\,A^{-1})$.

Propiedades: $(AB)^{-1}=B^{-1}A^{-1}$, $(A^{-1})^{-1}=A$, $(A^{t})^{-1}=(A^{-1})^{t}$.

**Ecuaciones matriciales** — hay que multiplicar por el mismo lado en ambos miembros:

$$AX=B \Rightarrow X=A^{-1}B \qquad\qquad XA=B \Rightarrow X=BA^{-1}$$

## 11.5 Sistemas: teorema de Rouché–Frobenius

Sea $AX=B$ con $A$ la matriz de coeficientes, $A^{*}=(A|B)$ la ampliada y $n$ el número de incógnitas:

$$\begin{array}{ll}
\operatorname{rg}A\neq\operatorname{rg}A^{*} & \Rightarrow \textbf{Incompatible (S.I.)}\\
\operatorname{rg}A=\operatorname{rg}A^{*}=n & \Rightarrow \textbf{Compatible determinado (S.C.D.)}\\
\operatorname{rg}A=\operatorname{rg}A^{*}<n & \Rightarrow \textbf{Compatible indeterminado (S.C.I.)}
\end{array}$$

El número de **parámetros** de un S.C.I. es $n-\operatorname{rg}A$.
Un sistema **homogéneo** ($B=0$) es siempre compatible (tiene al menos la solución trivial); tiene soluciones no triviales $\iff \det A=0$.

**Regla de Cramer** (si $\det A\neq0$):

$$x_i=\frac{\det A_i}{\det A}$$

donde $A_i$ es $A$ con la columna $i$ sustituida por la columna de términos independientes.

### Discusión con parámetro

1. Calcular $\det A$ e igualarlo a 0 ⟹ valores críticos del parámetro.
2. Para los valores **distintos** de los críticos: $\det A\neq0$ ⟹ S.C.D.
3. Para **cada** valor crítico, estudiar $\operatorname{rg}A$ y $\operatorname{rg}A^{*}$ por separado.

---

## Ejemplos resueltos

**Ejemplo 1.** $A=\begin{pmatrix}1&2\\3&-1\end{pmatrix}$, $B=\begin{pmatrix}0&1\\2&-3\end{pmatrix}$. Calcula $AB$ y $BA$.

$$AB=\begin{pmatrix}4&-5\\-2&6\end{pmatrix},\qquad BA=\begin{pmatrix}3&-1\\-7&7\end{pmatrix} \Rightarrow AB\neq BA$$

**Ejemplo 2.** Halla $A^{n}$ si $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

$A^{2}=\begin{pmatrix}1&2\\0&1\end{pmatrix}$, $A^{3}=\begin{pmatrix}1&3\\0&1\end{pmatrix}$ ⟹ $A^{n}=\begin{pmatrix}1&n\\0&1\end{pmatrix}$.

**Ejemplo 3.** $\begin{vmatrix}2&-1&3\\0&1&4\\1&2&-1\end{vmatrix}$

Sarrus: $(-2+(-4)+0)-(3+16+0)=-6-19=-25$.

**Ejemplo 4.** Halla la inversa de $A=\begin{pmatrix}2&1\\5&3\end{pmatrix}$.

$\det A=1$ ⟹ $A^{-1}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$.

**Ejemplo 5.** Discute según $m$:

$$\begin{cases}x+y+z=1\\ x+2y+3z=2\\ x+my+5z=3\end{cases}$$

$\det A=\begin{vmatrix}1&1&1\\1&2&3\\1&m&5\end{vmatrix}=(10+3+m)-(2+3m+5)=6-2m$.
$\det A=0 \iff m=3$.

- $m\neq3$: **S.C.D.**
- $m=3$: la 3.ª fila $=2\cdot$(2.ª)$-$(1.ª) también en los términos independientes ($2\cdot2-1=3$ ✓) ⟹ $\operatorname{rg}A=\operatorname{rg}A^{*}=2<3$ ⟹ **S.C.I.** con 1 parámetro.

**Ejemplo 6.** Resuelve por Cramer $\begin{cases}2x+y=5\\ x-3y=-1\end{cases}$

$\det A=-7$; $x=\frac{\begin{vmatrix}5&1\\-1&-3\end{vmatrix}}{-7}=\frac{-14}{-7}=2$; $y=\frac{\begin{vmatrix}2&5\\1&-1\end{vmatrix}}{-7}=\frac{-7}{-7}=1$.

---

## Ejercicios propuestos

1. Con $A=\begin{pmatrix}1&-1\\2&0\end{pmatrix}$ y $B=\begin{pmatrix}3&1\\0&-2\end{pmatrix}$: calcula $2A-B$, $AB$, $BA$ y $A^{t}B$.
2. Halla $A^{2}-3A+2I$ para $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.
3. Halla $A^{n}$ para $A=\begin{pmatrix}2&0\\0&-1\end{pmatrix}$.
4. Calcula: a) $\begin{vmatrix}3&5\\-2&4\end{vmatrix}$  b) $\begin{vmatrix}1&0&2\\3&-1&1\\2&4&0\end{vmatrix}$
5. Sabiendo que $\det A=3$ (orden 3), halla $\det(2A)$, $\det(A^{t})$, $\det(A^{-1})$ y $\det(A^{3})$.
6. Halla el rango según $a$: $\begin{pmatrix}1&2&3\\2&4&6\\1&1&a\end{pmatrix}$
7. Halla la inversa de $A=\begin{pmatrix}1&0&2\\0&1&1\\1&1&0\end{pmatrix}$.
8. Resuelve la ecuación matricial $AX+B=C$ con $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$, $B=\begin{pmatrix}1&0\\1&1\end{pmatrix}$, $C=\begin{pmatrix}3&2\\2&3\end{pmatrix}$.
9. Discute y resuelve: $\begin{cases}x+2y-z=3\\ 2x-y+z=1\\ x+y+2z=4\end{cases}$
10. Discute según $k$: $\begin{cases}kx+y+z=1\\ x+ky+z=1\\ x+y+kz=1\end{cases}$
11. ¿Para qué valores de $\lambda$ el sistema homogéneo $\begin{cases}\lambda x+y=0\\ x+\lambda y=0\end{cases}$ tiene soluciones distintas de la trivial?
12. Resuelve por Cramer: $\begin{cases}x+y+z=6\\ 2x-y+z=3\\ x+2y-z=2\end{cases}$

### Soluciones

1. $2A-B=\begin{pmatrix}-1&-3\\4&2\end{pmatrix}$; $AB=\begin{pmatrix}3&3\\6&2\end{pmatrix}$; $BA=\begin{pmatrix}5&-3\\-4&0\end{pmatrix}$; $A^tB=\begin{pmatrix}3&-3\\-3&-1\end{pmatrix}$
2. $A^{2}=\begin{pmatrix}5&4\\4&5\end{pmatrix}$ ⟹ resultado $\begin{pmatrix}1&1\\1&1\end{pmatrix}$
3. $\begin{pmatrix}2^{n}&0\\0&(-1)^{n}\end{pmatrix}$
4. a) $22$  b) $1(0-4)-0+2(12+2)=24$
5. $\det(2A)=8\cdot3=24$; $3$; $\frac13$; $27$
6. Como $F_2=2F_1$, el determinante es 0 para todo $a$ ⟹ rg $<3$. El menor $\begin{vmatrix}1&2\\1&1\end{vmatrix}=-1\neq0$ ⟹ **rg $=2$ para todo valor de $a$**
7. $\det A=-3$; $A^{-1}=\frac{1}{3}\begin{pmatrix}1&-2&2\\-1&2&1\\1&1&-1\end{pmatrix}$
8. $X=A^{-1}(C-B)=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\begin{pmatrix}2&2\\1&2\end{pmatrix}=\begin{pmatrix}0&-2\\1&2\end{pmatrix}$
9. $\det A=-12\neq0$ ⟹ S.C.D.: $x=1$, $y=1$, $z=0$
10. $\det A=(k-1)^{2}(k+2)$. Si $k\neq1$ y $k\neq-2$: S.C.D. Si $k=1$: S.C.I. (2 parámetros). Si $k=-2$: S.I.
11. $\lambda^{2}-1=0 \Rightarrow \lambda=\pm1$
12. $(1,2,3)$

---

## Errores típicos

- Multiplicar matrices elemento a elemento.
- Aplicar Sarrus a determinantes de orden 4.
- Simplificar $AX=B$ como $X=\frac BA$ o multiplicar por $A^{-1}$ por el lado equivocado.
- En la discusión con parámetro, olvidar estudiar el rango de la **ampliada** en los valores críticos.
- Usar Cramer cuando $\det A=0$.
