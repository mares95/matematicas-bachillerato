# Tema 10 — Integrales

> **Bloque:** Análisis · **Curso:** Matemáticas II · **Sesiones estimadas:** 11

## Objetivos

- Calcular primitivas inmediatas y casi inmediatas.
- Integrar por cambio de variable y por partes.
- Integrar funciones racionales.
- Aplicar la regla de Barrow.
- Calcular áreas de recintos planos y volúmenes de revolución.

---

## 10.1 Primitiva e integral indefinida

$F$ es primitiva de $f$ si $F'=f$. Todas las primitivas difieren en una constante:

$$\int f(x)\,dx=F(x)+C$$

$$\int (f\pm g)=\int f\pm\int g,\qquad \int k f = k\int f$$

## 10.2 Integrales inmediatas

$$\int x^{n}dx=\frac{x^{n+1}}{n+1}+C\ (n\neq-1) \qquad \int \frac{1}{x}dx=\ln|x|+C$$

$$\int e^{x}dx=e^{x}+C \qquad \int a^{x}dx=\frac{a^{x}}{\ln a}+C$$

$$\int \sin x\,dx=-\cos x+C \qquad \int\cos x\,dx=\sin x+C \qquad \int\frac{dx}{\cos^{2}x}=\tan x+C$$

$$\int\frac{dx}{\sqrt{1-x^{2}}}=\arcsin x+C \qquad \int\frac{dx}{1+x^{2}}=\arctan x+C$$

### Versión compuesta (casi inmediatas)

$$\int u^{n}u'\,dx=\frac{u^{n+1}}{n+1}+C,\qquad \int\frac{u'}{u}dx=\ln|u|+C,\qquad \int u'e^{u}dx=e^{u}+C$$

Truco: si en el integrando "aparece la derivada de algo", ese algo es $u$.

## 10.3 Cambio de variable

Se elige $t=u(x)$, se calcula $dt=u'(x)dx$, se sustituye **todo** (¡también el $dx$!) y al final se deshace el cambio.

$$\int \frac{x}{\sqrt{x^{2}+1}}dx \ \overset{t=x^{2}+1}{=}\ \frac12\int t^{-1/2}dt=\sqrt{t}+C=\sqrt{x^{2}+1}+C$$

## 10.4 Integración por partes

$$\boxed{\int u\,dv = uv-\int v\,du}$$

Regla mnemotécnica **ALPES** para elegir $u$ (en este orden de prioridad):
**A**rcos · **L**ogaritmos · **P**olinomios · **E**xponenciales · **S**enos y cosenos.

$$\int x e^{x}dx = xe^{x}-\int e^{x}dx = e^{x}(x-1)+C$$

Las **cíclicas** ($\int e^x\sin x\,dx$) requieren aplicar partes dos veces y despejar la integral.

## 10.5 Integrales racionales

Para $\int\frac{P(x)}{Q(x)}dx$:

1. Si $\operatorname{gr}P\ge\operatorname{gr}Q$, **dividir** primero.
2. Factorizar $Q$ y descomponer en **fracciones simples**:

$$\frac{P(x)}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b} \qquad \frac{P(x)}{(x-a)^{2}}=\frac{A}{x-a}+\frac{B}{(x-a)^{2}}$$

3. Integrar cada sumando: salen logaritmos, potencias y arcotangentes.

## 10.6 Integral definida y regla de Barrow

$$\int_{a}^{b}f(x)\,dx=\Big[F(x)\Big]_{a}^{b}=F(b)-F(a)$$

Propiedades: $\int_a^a f=0$, $\int_a^b f=-\int_b^a f$, $\int_a^b f=\int_a^c f+\int_c^b f$.

**Teorema fundamental del cálculo:** si $G(x)=\displaystyle\int_{a}^{x}f(t)\,dt$ con $f$ continua, entonces $G'(x)=f(x)$.
Con extremo variable: $\frac{d}{dx}\int_a^{u(x)}f(t)dt = f(u(x))\cdot u'(x)$.

## 10.7 Cálculo de áreas

**Área entre una curva y el eje $X$:**

$$A=\int_{a}^{b}|f(x)|\,dx$$

Hay que hallar los **cortes con el eje $X$** y partir el intervalo, sumando el valor absoluto de cada trozo. Si no, las partes negativas se restan y el resultado es erróneo.

**Área entre dos curvas:**

$$A=\int_{a}^{b}\big|f(x)-g(x)\big|\,dx$$

donde $a$ y $b$ son las abscisas de los **puntos de corte** (resolver $f=g$).

**Volumen de revolución** alrededor del eje $X$:

$$V=\pi\int_{a}^{b}\big[f(x)\big]^{2}dx$$

---

## Ejemplos resueltos

**Ejemplo 1.** $\displaystyle\int\frac{2x}{x^{2}+3}dx=\ln(x^{2}+3)+C$  (tipo $\frac{u'}{u}$)

**Ejemplo 2.** $\displaystyle\int x\sqrt{x^2-1}\,dx$. Con $t=x^{2}-1$, $dt=2x\,dx$:

$$\frac12\int\sqrt t\,dt=\frac12\cdot\frac{2}{3}t^{3/2}=\frac{\left(x^{2}-1\right)^{3/2}}{3}+C$$

**Ejemplo 3.** $\displaystyle\int \ln x\,dx$. Partes con $u=\ln x$, $dv=dx$:

$$x\ln x-\int x\cdot\frac1x dx = x\ln x - x + C$$

**Ejemplo 4.** $\displaystyle\int\frac{5x-1}{x^{2}-x-2}dx$.

$x^2-x-2=(x-2)(x+1)$; $\frac{5x-1}{(x-2)(x+1)}=\frac{A}{x-2}+\frac{B}{x+1}$.
$x=2$: $9=3A\Rightarrow A=3$; $x=-1$: $-6=-3B\Rightarrow B=2$.

$$\int = 3\ln|x-2|+2\ln|x+1|+C$$

**Ejemplo 5.** $\displaystyle\int_{0}^{\pi}\sin x\,dx=\big[-\cos x\big]_0^{\pi}=1-(-1)=2$

**Ejemplo 6.** Área encerrada entre $y=x^{2}$ e $y=2x$.

Cortes: $x^2=2x \Rightarrow x=0,\ x=2$. En $(0,2)$ la recta va por encima:

$$A=\int_{0}^{2}(2x-x^{2})dx=\left[x^{2}-\frac{x^{3}}{3}\right]_{0}^{2}=4-\frac83=\frac43\ \text{u}^2$$

**Ejemplo 7.** Área entre $y=x^{3}$ y el eje $X$ en $[-1,2]$.

Corta en $x=0$: $\left|\int_{-1}^{0}x^3\right|+\int_0^2 x^3=\frac14+4=\frac{17}{4}$ u².

---

## Ejercicios propuestos

1. Calcula: a) $\int(3x^{2}-4x+5)dx$  b) $\int\left(\sqrt x+\frac{1}{x^{3}}\right)dx$  c) $\int\frac{dx}{x-4}$
2. Casi inmediatas: a) $\int (3x+1)^{5}dx$  b) $\int xe^{x^{2}}dx$  c) $\int\frac{\cos x}{\sin x}dx$  d) $\int\frac{dx}{1+9x^{2}}$
3. Cambio de variable: a) $\int\frac{\ln x}{x}dx$  b) $\int\frac{x}{(x^{2}+4)^{3}}dx$  c) $\int \frac{e^x}{1+e^{2x}}dx$
4. Por partes: a) $\int x\cos x\,dx$  b) $\int x^{2}e^{x}dx$  c) $\int \arctan x\,dx$
5. Racional: $\int\frac{x+7}{x^{2}-x-6}dx$
6. Racional con raíz doble: $\int\frac{3x-1}{(x-1)^{2}}dx$
7. Cíclica: $\int e^{x}\sin x\,dx$
8. Definidas: a) $\int_{1}^{3}(2x-1)dx$  b) $\int_{0}^{1}\frac{dx}{x+1}$  c) $\int_{0}^{\pi/2}\cos x\,dx$
9. Halla $F'(x)$ si $F(x)=\int_{1}^{x^{2}}\frac{dt}{\sqrt{1+t^{4}}}$.
10. Área limitada por $y=4-x^{2}$ y el eje $X$.
11. Área encerrada entre $y=x^{2}-2x$ e $y=x$.
12. Volumen del sólido generado al girar $y=\sqrt x$ en $[0,4]$ alrededor del eje $X$.
13. Halla $a>0$ tal que $\int_{0}^{a}(x+1)dx=6$.

### Soluciones

1. a) $x^{3}-2x^{2}+5x+C$  b) $\frac{2}{3}x^{3/2}-\frac{1}{2x^{2}}+C$  c) $\ln|x-4|+C$
2. a) $\frac{(3x+1)^{6}}{18}+C$  b) $\frac12 e^{x^{2}}+C$  c) $\ln|\sin x|+C$  d) $\frac13\arctan(3x)+C$
3. a) $\frac{\ln^{2}x}{2}+C$  b) $-\frac{1}{4(x^{2}+4)^{2}}+C$  c) $\arctan(e^{x})+C$
4. a) $x\sin x+\cos x+C$  b) $e^{x}(x^{2}-2x+2)+C$  c) $x\arctan x-\frac12\ln(1+x^{2})+C$
5. $\frac{x+7}{(x-3)(x+2)}$: $A=2$, $B=-1$ ⟹ $2\ln|x-3|-\ln|x+2|+C$
6. $\frac{3}{x-1}+\frac{2}{(x-1)^2}$ ⟹ $3\ln|x-1|-\frac{2}{x-1}+C$
7. $\frac{e^{x}(\sin x-\cos x)}{2}+C$
8. a) $6$  b) $\ln 2$  c) $1$
9. $F'(x)=\dfrac{2x}{\sqrt{1+x^{8}}}$
10. $\int_{-2}^{2}(4-x^2)dx=\frac{32}{3}$ u²
11. Cortes $x=0$, $x=3$: $\int_0^3(3x-x^2)dx=\frac92$ u²
12. $V=\pi\int_0^4 x\,dx=8\pi$ u³
13. $\frac{a^2}{2}+a=6 \Rightarrow a^2+2a-12=0\Rightarrow a=-1+\sqrt{13}$

---

## Errores típicos

- Olvidar la **constante $C$** en la integral indefinida.
- No cambiar el $dx$ al hacer un cambio de variable.
- Calcular un área con una sola integral cuando la curva **cruza** el eje: sale un área menor (o incluso 0).
- $\int\frac{1}{x}dx=\ln|x|$, no $\ln x$.
- Escribir $\int f\cdot g = \int f \cdot \int g$ (falso).
