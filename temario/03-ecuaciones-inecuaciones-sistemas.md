# Tema 3 — Ecuaciones, inecuaciones y sistemas

> **Bloque:** Aritmética y Álgebra · **Curso:** Matemáticas I · **Sesiones estimadas:** 9

## Objetivos

- Resolver ecuaciones de 2.º grado, bicuadradas, racionales e irracionales.
- Resolver ecuaciones exponenciales y logarítmicas.
- Resolver inecuaciones polinómicas y racionales, y sistemas de inecuaciones.
- Resolver sistemas lineales (Gauss) y no lineales.
- Plantear y resolver problemas mediante ecuaciones.

---

## 3.1 Ecuación de segundo grado

$$ax^{2}+bx+c=0 \Longrightarrow x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}$$

Discriminante $\Delta=b^{2}-4ac$:

| $\Delta$ | Soluciones reales |
|---|---|
| $\Delta>0$ | dos distintas |
| $\Delta=0$ | una doble |
| $\Delta<0$ | ninguna (dos complejas conjugadas) |

**Relaciones de Cardano–Vieta:** $x_1+x_2=-\dfrac{b}{a}$, $x_1x_2=\dfrac{c}{a}$.

## 3.2 Otros tipos de ecuaciones

| Tipo | Método | Cuidado |
|---|---|---|
| **Bicuadrada** $ax^4+bx^2+c=0$ | cambio $t=x^{2}$ | descartar $t<0$ |
| **Racional** | m.c.m. de denominadores | $Q(x)\neq0$ |
| **Irracional** | aislar la raíz y elevar al cuadrado | **comprobar** soluciones |
| **Exponencial** | igualar bases o tomar logaritmos; cambio $t=a^{x}$ | $t>0$ |
| **Logarítmica** | agrupar en un solo log y quitar logs | argumento $>0$ |
| **Con valor absoluto** | separar por casos | verificar cada caso |

## 3.3 Inecuaciones

**Polinómica:** se pasa todo a un miembro, se **factoriza**, se hallan las raíces, se ordenan en la recta y se estudia el **signo** en cada intervalo.

$$x^{2}-x-6>0 \Rightarrow (x-3)(x+2)>0$$

| intervalo | $(-\infty,-2)$ | $(-2,3)$ | $(3,+\infty)$ |
|---|---|---|---|
| signo | $+$ | $-$ | $+$ |

Solución: $(-\infty,-2)\cup(3,+\infty)$.

**Racional:** mismo procedimiento, pero se incluyen también las raíces del **denominador** como puntos de corte (siempre abiertos).

> ⚠️ Nunca se multiplica en cruz en una inecuación con incógnita en el denominador: el signo del denominador es desconocido.

Al multiplicar o dividir por un número **negativo**, la desigualdad **cambia de sentido**.

## 3.4 Sistemas lineales

**Método de Gauss:** se transforma la matriz ampliada en escalonada mediante:
$F_i \leftrightarrow F_j$, $F_i \to kF_i$ ($k\neq0$), $F_i \to F_i + kF_j$.

Clasificación:

- **S.C.D.** (solución única): $n$ ecuaciones útiles y $n$ incógnitas.
- **S.C.I.** (infinitas): aparece una fila de ceros ⟹ hay parámetros.
- **S.I.** (incompatible): aparece $0=k$ con $k\neq0$.

## 3.5 Sistemas no lineales

Se resuelven por **sustitución** casi siempre: se despeja una incógnita en la ecuación lineal y se sustituye en la otra. Hay que **comprobar** las soluciones si aparecen raíces o denominadores.

---

## Ejemplos resueltos

**Ejemplo 1.** $\sqrt{2x+3}=x$.

Elevando: $2x+3=x^{2} \Rightarrow x^{2}-2x-3=0 \Rightarrow x=3,\ x=-1$.
Comprobación: $x=3$ ✓ ($\sqrt9=3$); $x=-1$ ✗ (raíz no puede ser negativa). **Solución: $x=3$.**

**Ejemplo 2.** $4^{x}-5\cdot2^{x}+4=0$.

Con $t=2^{x}$: $t^{2}-5t+4=0 \Rightarrow t=1,\ t=4$. Luego $2^{x}=1\Rightarrow x=0$ y $2^{x}=4\Rightarrow x=2$.

**Ejemplo 3.** $\dfrac{x-1}{x+2}\le 0$.

Raíces: numerador $x=1$; denominador $x=-2$ (excluido).

| | $(-\infty,-2)$ | $(-2,1)$ | $(1,\infty)$ |
|---|---|---|---|
| signo | $+$ | $-$ | $+$ |

Solución: $(-2,\,1]$.

**Ejemplo 4.** Resuelve por Gauss:

$$\begin{cases} x+y+z=6\\ 2x-y+z=3\\ x+2y-z=2\end{cases}$$

$$\left(\begin{array}{ccc|c}1&1&1&6\\2&-1&1&3\\1&2&-1&2\end{array}\right)
\xrightarrow[F_3-F_1]{F_2-2F_1}
\left(\begin{array}{ccc|c}1&1&1&6\\0&-3&-1&-9\\0&1&-2&-4\end{array}\right)
\xrightarrow{3F_3+F_2}
\left(\begin{array}{ccc|c}1&1&1&6\\0&-3&-1&-9\\0&0&-7&-21\end{array}\right)$$

$z=3$, $-3y-3=-9\Rightarrow y=2$, $x=6-2-3=1$. **S.C.D.: $(1,2,3)$.**

**Ejemplo 5.** Un rectángulo tiene 34 cm de perímetro y 60 cm² de área. Halla sus lados.

$x+y=17$, $xy=60$ ⟹ $x$ e $y$ son raíces de $t^{2}-17t+60=0$ ⟹ $t=12,\ t=5$. Lados **12 cm y 5 cm**.

---

## Ejercicios propuestos

1. Resuelve: a) $3x^2-7x+2=0$  b) $x^2+4x+7=0$  c) $2x^2-8=0$
2. Sin resolver, halla la suma y el producto de las raíces de $5x^2-3x-2=0$.
3. Halla $m$ para que $x^{2}-6x+m=0$ tenga una raíz doble.
4. Bicuadrada: $x^{4}-13x^{2}+36=0$.
5. Racional: $\dfrac{3}{x-1}-\dfrac{2}{x+1}=\dfrac{1}{x^{2}-1}$
6. Irracional: $\sqrt{x+7}-\sqrt{x}=1$
7. Exponencial: a) $3^{x^2-4}=1$  b) $9^{x}-4\cdot3^{x}+3=0$
8. Logarítmica: $\log(x^{2}-1)-\log(x+1)=1$
9. Inecuaciones: a) $x^{2}-4x+3\le0$  b) $\dfrac{2x+1}{x-3}>1$  c) $x^3-x>0$
10. Sistema: $\begin{cases}x^{2}+y^{2}=25\\ x-y=1\end{cases}$
11. Gauss: $\begin{cases}x+2y-z=1\\ 2x+4y-2z=3\\ x-y+z=0\end{cases}$ — clasifícalo.
12. Un padre tiene el triple de la edad de su hijo. Dentro de 12 años tendrá el doble. ¿Qué edades tienen?

### Soluciones

1. a) $x=2,\ x=\frac13$  b) sin solución real ($\Delta=-12$)  c) $x=\pm2$
2. $S=\frac35$, $P=-\frac25$
3. $\Delta=36-4m=0\Rightarrow m=9$
4. $t=4,9 \Rightarrow x=\pm2,\ x=\pm3$
5. $3(x+1)-2(x-1)=1 \Rightarrow x+5=1\Rightarrow x=-4$ ✓
6. $\sqrt{x+7}=1+\sqrt x \Rightarrow x+7=1+2\sqrt x+x \Rightarrow \sqrt x=3 \Rightarrow x=9$ ✓
7. a) $x^2-4=0\Rightarrow x=\pm2$  b) $t=1,3 \Rightarrow x=0,\ x=1$
8. $\log(x-1)=1 \Rightarrow x-1=10 \Rightarrow x=11$ ✓
9. a) $[1,3]$  b) $\frac{2x+1}{x-3}-1=\frac{x+4}{x-3}>0 \Rightarrow (-\infty,-4)\cup(3,\infty)$  c) $(-1,0)\cup(1,\infty)$
10. $x=4,y=3$ y $x=-3,y=-4$
11. La 2.ª fila da $0=1$ ⟹ **S.I. (incompatible)**
12. Hijo 12, padre 36

---

## Errores típicos

- No **comprobar** las soluciones en ecuaciones irracionales y logarítmicas.
- Multiplicar en cruz en inecuaciones racionales.
- No cambiar el sentido de la desigualdad al multiplicar por un negativo.
- En sistemas, dar una solución sin verificarla en **todas** las ecuaciones.
