# Tema 12 — Combinatoria, probabilidad y estadística

> **Bloque:** Estadística y Probabilidad · **Curso:** Matemáticas I–II · **Sesiones estimadas:** 12

## Objetivos

- Contar con variaciones, permutaciones y combinaciones.
- Calcular probabilidades con la regla de Laplace y las propiedades de la probabilidad.
- Aplicar probabilidad condicionada, independencia, probabilidad total y Bayes.
- Manejar la distribución binomial y la normal (y la aproximación entre ambas).
- Analizar distribuciones bidimensionales: correlación y regresión.

---

## 12.1 Combinatoria

| Situación | ¿Importa el orden? | ¿Se repiten? | Fórmula |
|---|---|---|---|
| Variaciones $V_{m,n}$ | Sí | No | $\dfrac{m!}{(m-n)!}$ |
| Variaciones con repetición $VR_{m,n}$ | Sí | Sí | $m^{n}$ |
| Permutaciones $P_n$ | Sí (todos) | No | $n!$ |
| Permutaciones con repetición | Sí (todos) | Sí | $\dfrac{n!}{a!\,b!\cdots}$ |
| Combinaciones $C_{m,n}$ | No | No | $\dbinom{m}{n}=\dfrac{m!}{n!(m-n)!}$ |

Pregunta clave: **¿cambia el resultado si cambio el orden?** Si sí → variaciones; si no → combinaciones.

## 12.2 Probabilidad

**Regla de Laplace** (sucesos equiprobables):

$$P(A)=\frac{\text{casos favorables}}{\text{casos posibles}}$$

Propiedades: $0\le P(A)\le1$, $P(\Omega)=1$, $P(\bar A)=1-P(A)$, $P(\emptyset)=0$.

$$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$

**Leyes de Morgan:** $\overline{A\cup B}=\bar A\cap\bar B$, $\overline{A\cap B}=\bar A\cup\bar B$.

### Probabilidad condicionada

$$P(A/B)=\frac{P(A\cap B)}{P(B)} \qquad\Longrightarrow\qquad P(A\cap B)=P(B)\cdot P(A/B)$$

**Independencia:** $A$ y $B$ son independientes $\iff P(A\cap B)=P(A)P(B) \iff P(A/B)=P(A)$.

> Ojo: **incompatibles** ($A\cap B=\emptyset$) **no** es lo mismo que **independientes**. De hecho, dos sucesos incompatibles con probabilidad no nula son siempre dependientes.

### Teorema de la probabilidad total y de Bayes

Si $A_1,\dots,A_n$ forman un **sistema completo** de sucesos:

$$P(B)=\sum_{i}P(A_i)\,P(B/A_i)$$

$$P(A_i/B)=\frac{P(A_i)\,P(B/A_i)}{P(B)}$$

El **diagrama de árbol** es la herramienta práctica: probabilidad total = sumar ramas que llegan a $B$; Bayes = rama concreta / suma de ramas.

## 12.3 Variables aleatorias discretas

$$\mu=E[X]=\sum x_i p_i \qquad \sigma^{2}=\sum x_i^{2}p_i-\mu^{2}$$

### Distribución binomial $B(n,p)$

Se usa cuando hay $n$ **repeticiones independientes** de un experimento con dos resultados (éxito con probabilidad $p$):

$$P(X=k)=\binom{n}{k}p^{k}(1-p)^{n-k},\qquad \mu=np,\qquad \sigma=\sqrt{np(1-p)}$$

## 12.4 Distribución normal $N(\mu,\sigma)$

Campana de Gauss, simétrica respecto de $\mu$. **Tipificación**:

$$Z=\frac{X-\mu}{\sigma}\sim N(0,1)$$

Uso de la tabla de $N(0,1)$ (da $P(Z\le z)$):

- $P(Z>z)=1-P(Z\le z)$
- $P(Z\le -z)=1-P(Z\le z)$
- $P(a\le Z\le b)=P(Z\le b)-P(Z\le a)$

Valores de referencia: $P(-1\le Z\le1)\approx0{,}68$; $P(-2\le Z\le2)\approx0{,}95$; $P(-3\le Z\le3)\approx0{,}997$.

**Aproximación de la binomial por la normal:** si $np\ge5$ y $n(1-p)\ge5$,

$$B(n,p)\approx N\left(np,\ \sqrt{np(1-p)}\right)$$

aplicando la **corrección por continuidad** ($X=k \to k\pm0{,}5$).

## 12.5 Estadística bidimensional

Para pares $(x_i,y_i)$:

$$\sigma_{xy}=\frac{\sum x_iy_i}{n}-\bar x\bar y \qquad r=\frac{\sigma_{xy}}{\sigma_x\sigma_y}\in[-1,1]$$

- $|r|$ cercano a 1: correlación fuerte; $r>0$ directa, $r<0$ inversa; $r\approx0$ sin correlación lineal.

**Rectas de regresión:**

$$y-\bar y=\frac{\sigma_{xy}}{\sigma_x^{2}}(x-\bar x) \qquad\qquad x-\bar x=\frac{\sigma_{xy}}{\sigma_y^{2}}(y-\bar y)$$

Ambas pasan por el **centro de gravedad** $(\bar x,\bar y)$. Las predicciones solo son fiables si $|r|$ es alto y se interpola dentro del rango de datos.

---

## Ejemplos resueltos

**Ejemplo 1.** ¿Cuántos números de 3 cifras distintas se pueden formar con $\{1,2,3,4,5\}$?

Importa el orden y no se repiten: $V_{5,3}=5\cdot4\cdot3=60$.

**Ejemplo 2.** ¿De cuántas formas se eligen 3 delegados entre 20 alumnos?

No importa el orden: $\binom{20}{3}=1140$.

**Ejemplo 3.** Se lanzan dos dados. Halla $P(\text{suma}=7)$ y $P(\text{suma}\ge10)$.

$P(7)=\frac{6}{36}=\frac16$; $P(\ge10)=\frac{6}{36}=\frac16$ (casos: 4+6, 5+5, 6+4, 5+6, 6+5, 6+6).

**Ejemplo 4 (Bayes).** Dos máquinas producen el 60 % y el 40 % de las piezas; son defectuosas el 3 % y el 5 % respectivamente. Si una pieza es defectuosa, ¿cuál es la probabilidad de que venga de la primera máquina?

$P(D)=0{,}6\cdot0{,}03+0{,}4\cdot0{,}05=0{,}018+0{,}02=0{,}038$

$$P(M_1/D)=\frac{0{,}018}{0{,}038}=0{,}4737$$

**Ejemplo 5 (binomial).** Se lanza una moneda 8 veces. $P(\text{exactamente 3 caras})$.

$$\binom{8}{3}(0{,}5)^{3}(0{,}5)^{5}=\frac{56}{256}=0{,}21875$$

**Ejemplo 6 (normal).** $X\sim N(170,8)$. Halla $P(X>180)$.

$z=\frac{180-170}{8}=1{,}25$ ⟹ $P(Z>1{,}25)=1-0{,}8944=0{,}1056$.

**Ejemplo 7 (normal inversa).** En $N(170,8)$, ¿por encima de qué altura está el 10 % más alto?

$P(Z\le z)=0{,}90 \Rightarrow z\approx1{,}28 \Rightarrow x=170+1{,}28\cdot8=180{,}24$ cm.

---

## Ejercicios propuestos

1. ¿Cuántas quinielas distintas de 15 partidos (1, X, 2) hay?
2. ¿Cuántos anagramas tiene la palabra PATATA?
3. En una baraja de 40 cartas se extraen 3. ¿De cuántas formas? ¿Y si deben ser los 3 oros?
4. $P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\cap B)=0{,}2$. Halla $P(A\cup B)$, $P(A/B)$, $P(\bar A\cap\bar B)$. ¿Son independientes?
5. Se extraen 2 bolas sin reemplazamiento de una urna con 5 blancas y 3 negras. Halla $P(\text{ambas blancas})$ y $P(\text{una de cada color})$.
6. Repite el ejercicio anterior **con** reemplazamiento.
7. El 70 % de los alumnos estudia inglés, el 40 % francés y el 25 % ambos. Elegido uno al azar que estudia inglés, ¿cuál es la probabilidad de que estudie también francés?
8. Tres urnas: A (2 rojas, 3 azules), B (4 rojas, 1 azul), C (1 roja, 4 azules). Se elige una al azar y se saca una bola. Halla $P(\text{roja})$ y $P(B/\text{roja})$.
9. $X\sim B(10;0{,}3)$. Calcula $P(X=2)$, $P(X\le1)$, $\mu$ y $\sigma$.
10. $X\sim N(0,1)$: halla $P(Z\le1{,}52)$, $P(Z>0{,}84)$, $P(-1{,}2\le Z\le 2)$.
11. Los pesos siguen $N(65,10)$ kg. Halla el % con peso entre 55 y 80 kg y el peso que supera el 25 % más pesado.
12. Se lanza una moneda 100 veces. Aproxima $P(X\ge60\text{ caras})$ con la normal.
13. Dada la tabla $x:1,2,3,4,5$ / $y:2,4,5,4,6$ — halla $\bar x$, $\bar y$, $\sigma_{xy}$, $r$ y la recta de regresión de $y$ sobre $x$. Estima $y$ para $x=6$.

### Soluciones

1. $VR_{3,15}=3^{15}=14\,348\,907$
2. $\frac{6!}{3!}=120$
3. $\binom{40}{3}=9880$; $\binom{10}{3}=120$
4. $0{,}7$; $P(A/B)=0{,}5$; $P(\bar A\cap\bar B)=1-0{,}7=0{,}3$; como $P(A\cap B)=0{,}2=0{,}5\cdot0{,}4$ ⟹ **sí son independientes**
5. $\frac58\cdot\frac47=\frac{5}{14}$; $2\cdot\frac58\cdot\frac37=\frac{15}{28}$
6. $\left(\frac58\right)^2=\frac{25}{64}$; $2\cdot\frac58\cdot\frac38=\frac{15}{32}$
7. $P(F/I)=\frac{0{,}25}{0{,}70}=0{,}357$
8. $P(R)=\frac13\left(\frac25+\frac45+\frac15\right)=\frac{7}{15}$; $P(B/R)=\frac{\frac13\cdot\frac45}{\frac7{15}}=\frac47$
9. $P(X=2)=\binom{10}{2}0{,}3^{2}0{,}7^{8}=0{,}2335$; $P(X\le1)=0{,}0282+0{,}1211=0{,}1493$; $\mu=3$; $\sigma=\sqrt{2{,}1}=1{,}449$
10. $0{,}9357$; $1-0{,}7995=0{,}2005$; $0{,}9772-0{,}1151=0{,}8621$
11. $P(55\le X\le80)=P(-1\le Z\le1{,}5)=0{,}9332-0{,}1587=0{,}7745$ ⟹ **77,45 %**; $z_{0{,}75}=0{,}674 \Rightarrow x=71{,}74$ kg
12. $N(50,5)$, con corrección: $P(X\ge59{,}5)=P(Z\ge1{,}9)=0{,}0287$
13. $\bar x=3$, $\bar y=4{,}2$; $\sigma_{xy}=\frac{69}{5}-12{,}6=1{,}2$; $\sigma_x^2=2$, $\sigma_y^2=1{,}76$ ⟹ $r=\frac{1{,}2}{\sqrt{2}\sqrt{1{,}76}}=0{,}64$; $y=0{,}6x+2{,}4$; para $x=6$, $y\approx6$

---

## Errores típicos

- Usar combinaciones cuando el orden **sí** importa (y viceversa).
- Confundir sucesos **incompatibles** con **independientes**.
- Invertir el condicionamiento: $P(A/B)\neq P(B/A)$ (falacia del fiscal).
- Aplicar la binomial cuando las extracciones son **sin** reemplazamiento.
- Olvidar la corrección por continuidad al aproximar una binomial por una normal.
- Interpretar una correlación alta como relación **causal**.
