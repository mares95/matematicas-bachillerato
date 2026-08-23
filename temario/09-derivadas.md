# Tema 9 — Derivadas y aplicaciones

> **Bloque:** Análisis · **Curso:** Matemáticas I–II · **Sesiones estimadas:** 12

## Objetivos

- Interpretar la derivada como tasa de variación y pendiente de la tangente.
- Derivar con soltura usando todas las reglas, incluida la regla de la cadena.
- Estudiar monotonía, extremos, curvatura y puntos de inflexión.
- Resolver problemas de optimización.
- Aplicar L'Hôpital y los teoremas de Rolle y del valor medio.
- Representar gráficamente funciones.

---

## 9.1 Definición e interpretación

$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$$

Es la **pendiente de la recta tangente** en $x=a$ y la **tasa de variación instantánea**.

- Recta tangente: $y-f(a)=f'(a)(x-a)$
- Recta normal: $y-f(a)=-\dfrac{1}{f'(a)}(x-a)$

**Derivabilidad ⟹ continuidad** (el recíproco es falso: $|x|$ es continua pero no derivable en 0).
En una función a trozos, en el punto de empalme hay que comprobar que $f'(a^-)=f'(a^+)$ **y** que $f$ sea continua allí.

## 9.2 Tabla de derivadas

| $f(x)$ | $f'(x)$ | | $f(x)$ | $f'(x)$ |
|---|---|---|---|---|
| $k$ | $0$ | | $\sin u$ | $u'\cos u$ |
| $x^{n}$ | $nx^{n-1}$ | | $\cos u$ | $-u'\sin u$ |
| $u^{n}$ | $n u^{n-1}u'$ | | $\tan u$ | $\dfrac{u'}{\cos^{2}u}=u'(1+\tan^2u)$ |
| $\sqrt u$ | $\dfrac{u'}{2\sqrt u}$ | | $\arcsin u$ | $\dfrac{u'}{\sqrt{1-u^{2}}}$ |
| $e^{u}$ | $u'e^{u}$ | | $\arccos u$ | $\dfrac{-u'}{\sqrt{1-u^{2}}}$ |
| $a^{u}$ | $u'a^{u}\ln a$ | | $\arctan u$ | $\dfrac{u'}{1+u^{2}}$ |
| $\ln u$ | $\dfrac{u'}{u}$ | | $\log_a u$ | $\dfrac{u'}{u\ln a}$ |

### Reglas de derivación

$$(u\pm v)'=u'\pm v' \qquad (uv)'=u'v+uv' \qquad \left(\frac uv\right)'=\frac{u'v-uv'}{v^{2}}$$

$$\textbf{Regla de la cadena: } \big(g(f(x))\big)'=g'\!\big(f(x)\big)\cdot f'(x)$$

**Derivación logarítmica** (para $u^{v}$): tomar $\ln$ en ambos miembros y derivar implícitamente.

$$\left(u^{v}\right)'=u^{v}\left(v'\ln u+\frac{vu'}{u}\right)$$

## 9.3 Monotonía y extremos

- $f'(x)>0$ en $I$ ⟹ $f$ **creciente** en $I$.
- $f'(x)<0$ en $I$ ⟹ $f$ **decreciente** en $I$.
- **Puntos críticos:** soluciones de $f'(x)=0$ (y puntos donde $f'$ no existe).

**Criterio de la 1.ª derivada:** si $f'$ pasa de $+$ a $-$ hay **máximo** relativo; de $-$ a $+$, **mínimo**.

**Criterio de la 2.ª derivada:** si $f'(a)=0$ y $f''(a)<0$ ⟹ máximo; si $f''(a)>0$ ⟹ mínimo.

## 9.4 Curvatura

- $f''(x)>0$ ⟹ **convexa** ($\cup$).
- $f''(x)<0$ ⟹ **cóncava** ($\cap$).
- **Punto de inflexión:** $f''(a)=0$ y la $f''$ **cambia de signo**.

## 9.5 Optimización

Receta:

1. Identificar la magnitud a optimizar y escribir la **función objetivo**.
2. Usar la **relación de ligadura** del enunciado para dejarla con **una sola variable**.
3. Indicar el **dominio** real del problema.
4. Derivar, igualar a cero y resolver.
5. **Comprobar** que es máximo/mínimo (2.ª derivada o signos) y responder a lo preguntado.

## 9.6 Teoremas (Matemáticas II)

- **Rolle:** $f$ continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$ ⟹ $\exists c\in(a,b): f'(c)=0$.
- **Valor medio (Lagrange):** en las mismas hipótesis (sin exigir $f(a)=f(b)$), $\exists c: f'(c)=\dfrac{f(b)-f(a)}{b-a}$.
- **L'Hôpital:** si $\frac{f}{g}$ da $\frac00$ ó $\frac\infty\infty$, entonces $\lim\frac{f}{g}=\lim\frac{f'}{g'}$ (si este último existe).

## 9.7 Representación de funciones — guion

1. Dominio, cortes con los ejes y signo.
2. Simetrías y periodicidad.
3. Asíntotas (verticales, horizontales, oblicuas).
4. Monotonía y extremos relativos ($f'$).
5. Curvatura y puntos de inflexión ($f''$).
6. Tabla de valores y dibujo.

---

## Ejemplos resueltos

**Ejemplo 1.** Deriva $f(x)=x^{3}e^{2x}$.

$f'(x)=3x^{2}e^{2x}+x^{3}\cdot2e^{2x}=x^{2}e^{2x}(3+2x)$.

**Ejemplo 2.** Deriva $g(x)=\ln\left(\dfrac{x}{x+1}\right)$.

Mejor simplificando primero: $g=\ln x-\ln(x+1)$ ⟹ $g'=\dfrac1x-\dfrac{1}{x+1}=\dfrac{1}{x(x+1)}$.

**Ejemplo 3.** Recta tangente a $y=\sqrt{x}$ en $x=4$.

$y'=\frac{1}{2\sqrt x}$ ⟹ $m=\frac14$, $f(4)=2$ ⟹ $y-2=\frac14(x-4) \Rightarrow y=\frac{x}{4}+1$.

**Ejemplo 4.** Estudia $f(x)=x^{3}-3x$.

$f'=3x^{2}-3=0 \Rightarrow x=\pm1$. $f''=6x$: $f''(-1)=-6<0$ ⟹ **máximo** en $(-1,2)$; $f''(1)=6>0$ ⟹ **mínimo** en $(1,-2)$.
Creciente en $(-\infty,-1)\cup(1,\infty)$, decreciente en $(-1,1)$. Inflexión en $(0,0)$.

**Ejemplo 5 (optimización).** Con 100 m de valla se cierra un rectángulo aprovechando un muro como uno de los lados. ¿Dimensiones de área máxima?

Ligadura: $2x+y=100 \Rightarrow y=100-2x$. Objetivo: $A(x)=x(100-2x)=100x-2x^{2}$, $x\in(0,50)$.
$A'=100-4x=0 \Rightarrow x=25$; $A''=-4<0$ ⟹ máximo. Dimensiones $25\times50$ m, $A=1250$ m².

**Ejemplo 6.** $\displaystyle\lim_{x\to0}\frac{e^{x}-1-x}{x^{2}}$ (L'Hôpital dos veces)

$$\frac00\to\lim\frac{e^{x}-1}{2x}\to\frac00\to\lim\frac{e^{x}}{2}=\frac12$$

**Ejemplo 7.** Halla $a,b$ para que $f(x)=\begin{cases}x^{2}+1 & x\le1\\ ax+b & x>1\end{cases}$ sea derivable en $x=1$.

Continuidad: $2=a+b$. Derivabilidad: $f'(1^-)=2$, $f'(1^+)=a$ ⟹ $a=2$, $b=0$.

---

## Ejercicios propuestos

1. Deriva usando la definición: $f(x)=x^{2}-3x$.
2. Deriva: a) $5x^{4}-\frac{3}{x}+\sqrt x$  b) $(2x-1)^{7}$  c) $\dfrac{x}{x^{2}+1}$  d) $\sin^{2}(3x)$  e) $e^{-x^{2}}$  f) $\ln(\cos x)$  g) $x^{x}$  h) $\arctan(2x)$
3. Halla la recta tangente a $y=x^{3}-2x+1$ en $x=1$.
4. ¿En qué puntos de $y=x^{3}-3x^{2}$ la tangente es horizontal?
5. Halla los intervalos de monotonía y los extremos de $f(x)=\dfrac{x^{2}}{x-1}$.
6. Estudia la curvatura y halla los puntos de inflexión de $f(x)=x^{4}-6x^{2}$.
7. Estudia la derivabilidad de $f(x)=|x^{2}-4|$.
8. Calcula con L'Hôpital: a) $\lim\limits_{x\to0}\frac{\sin x - x}{x^{3}}$  b) $\lim\limits_{x\to\infty}\frac{\ln x}{x}$  c) $\lim\limits_{x\to0^{+}}x\ln x$
9. Descompón 60 en dos sumandos cuyo producto sea máximo.
10. Un depósito cilíndrico sin tapa de 27$\pi$ m³ de volumen: halla radio y altura que minimizan el material.
11. Comprueba las hipótesis de Rolle para $f(x)=x^{2}-4x+3$ en $[1,3]$ y halla $c$.
12. Representa $f(x)=\dfrac{x^{2}+1}{x}$ siguiendo el guion completo.

### Soluciones

1. $\lim_{h\to0}\frac{(x+h)^2-3(x+h)-x^2+3x}{h}=2x-3$
2. a) $20x^{3}+\frac{3}{x^{2}}+\frac{1}{2\sqrt x}$  b) $14(2x-1)^{6}$  c) $\frac{1-x^{2}}{(x^{2}+1)^{2}}$  d) $3\sin(6x)$  e) $-2xe^{-x^{2}}$  f) $-\tan x$  g) $x^{x}(1+\ln x)$  h) $\frac{2}{1+4x^{2}}$
3. $m=1$, $f(1)=0$ ⟹ $y=x-1$
4. $3x^2-6x=0\Rightarrow x=0$ y $x=2$: puntos $(0,0)$ y $(2,-4)$
5. $f'=\frac{x^{2}-2x}{(x-1)^{2}}$: máx. en $(0,0)$, mín. en $(2,4)$; crece en $(-\infty,0)\cup(2,\infty)$
6. $f''=12x^{2}-12=0\Rightarrow x=\pm1$: inflexión en $(\pm1,-5)$; convexa fuera de $[-1,1]$
7. No derivable en $x=\pm2$ (picos); derivable en el resto
8. a) $-\frac16$  b) $0$  c) $0$
9. $30$ y $30$ (producto 900)
10. $V=\pi r^{2}h=27\pi\Rightarrow h=\frac{27}{r^{2}}$; $S=\pi r^{2}+2\pi rh=\pi r^2+\frac{54\pi}{r}$; $S'=0\Rightarrow r=3$, $h=3$
11. Continua y derivable; $f(1)=f(3)=0$; $f'(c)=2c-4=0\Rightarrow c=2$
12. Impar; A.V. $x=0$, A.O. $y=x$; mín. en $(1,2)$, máx. en $(-1,-2)$; sin inflexión

---

## Errores típicos

- Derivar el cociente como cociente de derivadas.
- Olvidar $u'$ en la regla de la cadena.
- Concluir que hay extremo solo porque $f'(a)=0$ (hay que comprobar el **cambio de signo**; ver $x^3$ en 0).
- En derivabilidad a trozos, comparar derivadas sin haber comprobado antes la **continuidad**.
- En optimización, no verificar que el punto crítico es realmente el máximo pedido ni comprobar los extremos del dominio.
