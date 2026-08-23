# Tema 4 — Trigonometría

> **Bloque:** Geometría · **Curso:** Matemáticas I · **Sesiones estimadas:** 10

## Objetivos

- Convertir grados ↔ radianes y usar la circunferencia goniométrica.
- Conocer las razones de los ángulos notables y reducir al primer cuadrante.
- Demostrar y aplicar identidades trigonométricas.
- Usar las fórmulas de suma, diferencia, ángulo doble y ángulo mitad.
- Resolver ecuaciones trigonométricas.
- Resolver triángulos cualesquiera con los teoremas del seno y del coseno.

---

## 4.1 Ángulos y razones

$$180^{\circ}=\pi\ \text{rad}\qquad \alpha_{rad}=\alpha_{grados}\cdot\frac{\pi}{180}$$

En un triángulo rectángulo:

$$\sin\alpha=\frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad \cos\alpha=\frac{\text{cateto contiguo}}{\text{hipotenusa}},\quad \tan\alpha=\frac{\sin\alpha}{\cos\alpha}$$

Recíprocas: $\csc\alpha=\frac1{\sin\alpha}$, $\sec\alpha=\frac1{\cos\alpha}$, $\cot\alpha=\frac1{\tan\alpha}$.

### Razones notables

| $\alpha$ | $0$ | $30^\circ=\frac\pi6$ | $45^\circ=\frac\pi4$ | $60^\circ=\frac\pi3$ | $90^\circ=\frac\pi2$ |
|---|---|---|---|---|---|
| $\sin$ | $0$ | $\frac12$ | $\frac{\sqrt2}2$ | $\frac{\sqrt3}2$ | $1$ |
| $\cos$ | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ |
| $\tan$ | $0$ | $\frac{\sqrt3}3$ | $1$ | $\sqrt3$ | ∄ |

Truco: $\sin$ de $0,30,45,60,90$ es $\frac{\sqrt0}2,\frac{\sqrt1}2,\frac{\sqrt2}2,\frac{\sqrt3}2,\frac{\sqrt4}2$.

## 4.2 Signos y reducción al primer cuadrante

| Cuadrante | $\sin$ | $\cos$ | $\tan$ |
|---|---|---|---|
| I | + | + | + |
| II | + | − | − |
| III | − | − | + |
| IV | − | + | − |

$$\sin(180^\circ-\alpha)=\sin\alpha \qquad \cos(180^\circ-\alpha)=-\cos\alpha$$
$$\sin(180^\circ+\alpha)=-\sin\alpha \qquad \cos(180^\circ+\alpha)=-\cos\alpha$$
$$\sin(360^\circ-\alpha)=-\sin\alpha \qquad \cos(360^\circ-\alpha)=\cos\alpha$$
$$\sin(90^\circ-\alpha)=\cos\alpha \qquad \cos(90^\circ-\alpha)=\sin\alpha$$

## 4.3 Identidades fundamentales

$$\boxed{\sin^{2}\alpha+\cos^{2}\alpha=1}\qquad 1+\tan^{2}\alpha=\sec^{2}\alpha \qquad 1+\cot^{2}\alpha=\csc^{2}\alpha$$

### Suma y diferencia

$$\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta$$
$$\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta$$
$$\tan(\alpha\pm\beta)=\frac{\tan\alpha\pm\tan\beta}{1\mp\tan\alpha\tan\beta}$$

### Ángulo doble y mitad

$$\sin2\alpha=2\sin\alpha\cos\alpha,\qquad \cos2\alpha=\cos^{2}\alpha-\sin^{2}\alpha=1-2\sin^{2}\alpha$$
$$\tan 2\alpha = \frac{2\tan\alpha}{1-\tan^2\alpha},\qquad \sin\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{2}},\qquad \cos\frac{\alpha}{2}=\pm\sqrt{\frac{1+\cos\alpha}{2}}$$

### Transformaciones suma ↔ producto

$$\sin A+\sin B=2\sin\frac{A+B}{2}\cos\frac{A-B}{2},\qquad \cos A+\cos B=2\cos\frac{A+B}{2}\cos\frac{A-B}{2}$$

## 4.4 Ecuaciones trigonométricas

Estrategia:

1. Expresar todo en **una sola razón** y de **un solo ángulo** (usar identidades).
2. Resolver como ecuación algebraica (cambio de variable si hace falta).
3. Deshacer y dar **todas** las soluciones del intervalo pedido, añadiendo el periodo:
   - $\sin x = k \Rightarrow x=\arcsin k+2k\pi$ ó $x=\pi-\arcsin k+2k\pi$
   - $\cos x = k \Rightarrow x=\pm\arccos k+2k\pi$
   - $\tan x = k \Rightarrow x=\arctan k+k\pi$

## 4.5 Resolución de triángulos

**Teorema del seno:** $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$

**Teorema del coseno:** $a^{2}=b^{2}+c^{2}-2bc\cos A$

**Área:** $S=\dfrac{1}{2}bc\sin A$ ; Herón: $S=\sqrt{p(p-a)(p-b)(p-c)}$ con $p=\frac{a+b+c}{2}$.

| Datos | Método |
|---|---|
| LLL | coseno (halla un ángulo) |
| LAL | coseno (halla el tercer lado) |
| ALA / AAL | seno |
| LLA | seno (**caso ambiguo**: puede haber 0, 1 o 2 triángulos) |

---

## Ejemplos resueltos

**Ejemplo 1.** Si $\sin\alpha=\frac35$ y $\alpha$ está en el 2.º cuadrante, halla $\cos\alpha$ y $\tan\alpha$.

$\cos^2\alpha=1-\frac9{25}=\frac{16}{25}\Rightarrow\cos\alpha=\pm\frac45$. En el 2.º cuadrante el coseno es negativo: $\cos\alpha=-\frac45$, $\tan\alpha=-\frac34$.

**Ejemplo 2.** Calcula $\cos 75^{\circ}$ exactamente.

$$\cos(45^\circ+30^\circ)=\cos45\cos30-\sin45\sin30=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}-\frac{\sqrt2}{2}\cdot\frac12=\frac{\sqrt6-\sqrt2}{4}$$

**Ejemplo 3.** Demuestra que $\dfrac{1-\cos2x}{\sin 2x}=\tan x$.

$$\frac{1-(1-2\sin^{2}x)}{2\sin x\cos x}=\frac{2\sin^{2}x}{2\sin x\cos x}=\frac{\sin x}{\cos x}=\tan x \quad\blacksquare$$

**Ejemplo 4.** Resuelve $2\cos^{2}x-\sin x-1=0$ en $[0,2\pi)$.

$2(1-\sin^2x)-\sin x-1=0 \Rightarrow -2\sin^{2}x-\sin x+1=0 \Rightarrow 2\sin^{2}x+\sin x-1=0$.
Con $t=\sin x$: $t=\frac12$ ó $t=-1$.
$\sin x=\frac12 \Rightarrow x=\frac\pi6,\ \frac{5\pi}6$; $\sin x=-1 \Rightarrow x=\frac{3\pi}{2}$.

**Ejemplo 5.** En un triángulo $a=7$, $b=9$, $C=60^{\circ}$. Halla $c$ y el área.

$c^{2}=49+81-2\cdot7\cdot9\cdot\frac12=130-63=67 \Rightarrow c=\sqrt{67}\approx8{,}19$.
$S=\frac12\cdot7\cdot9\cdot\sin60^\circ=\frac{63\sqrt3}{4}\approx27{,}28$ u².

---

## Ejercicios propuestos

1. Pasa a radianes: $150^\circ$, $210^\circ$, $315^\circ$. Pasa a grados: $\frac{2\pi}{3}$, $\frac{7\pi}{6}$.
2. Si $\cos\alpha=-\frac{12}{13}$ y $\alpha\in$ III cuadrante, halla $\sin\alpha$ y $\tan\alpha$.
3. Calcula exactamente: $\sin 15^\circ$, $\tan 105^\circ$.
4. Simplifica: $\dfrac{\sin^2 x - \cos^2 x}{\sin x-\cos x}$
5. Demuestra: $\tan x+\cot x=\dfrac{2}{\sin 2x}$
6. Sabiendo $\tan\alpha=2$, calcula $\sin2\alpha$ y $\cos2\alpha$.
7. Resuelve en $[0,2\pi)$: a) $2\sin x-\sqrt3=0$  b) $\cos 2x=\cos x$  c) $\sin x+\cos x=1$
8. Resuelve el triángulo: $a=10$, $B=45^\circ$, $C=75^\circ$.
9. Triángulo con lados 5, 7 y 8: halla sus tres ángulos y el área.
10. Desde un punto del suelo se ve la cima de una torre con un ángulo de $32^\circ$. Al acercarse 40 m, el ángulo es de $50^\circ$. Halla la altura.
11. Halla el área de un triángulo de lados 6 y 10 que forman un ángulo de $120^\circ$.
12. Demuestra: $\cos^4x-\sin^4x=\cos 2x$.

### Soluciones

1. $\frac{5\pi}{6},\ \frac{7\pi}{6},\ \frac{7\pi}{4}$; $120^\circ$, $210^\circ$
2. $\sin\alpha=-\frac5{13}$, $\tan\alpha=\frac5{12}$
3. $\sin15^\circ=\frac{\sqrt6-\sqrt2}{4}$; $\tan105^\circ=-2-\sqrt3$
4. $\sin x+\cos x$
5. $\frac{\sin x}{\cos x}+\frac{\cos x}{\sin x}=\frac{1}{\sin x\cos x}=\frac{2}{\sin 2x}$ ∎
6. $\sin2\alpha=\frac{2\tan\alpha}{1+\tan^2\alpha}=\frac45$; $\cos2\alpha=\frac{1-\tan^2\alpha}{1+\tan^2\alpha}=-\frac35$
7. a) $\frac\pi3,\frac{2\pi}3$  b) $x=0,\ \frac{2\pi}{3},\ \frac{4\pi}{3}$  c) $x=0,\ \frac{\pi}{2}$
8. $A=60^\circ$; $b=\frac{10\sin45}{\sin60}\approx8{,}16$; $c=\frac{10\sin75}{\sin60}\approx11{,}15$
9. $\cos A=\frac{49+64-25}{2\cdot7\cdot8}=\frac{88}{112}$ ⟹ $A\approx38{,}2^\circ$, $B\approx60^\circ$, $C\approx81{,}8^\circ$; $S=10\sqrt3\approx17{,}32$
10. $h\approx\frac{40}{\cot32^\circ-\cot50^\circ}\approx 51{,}3$ m
11. $S=\frac12\cdot6\cdot10\sin120^\circ=15\sqrt3\approx25{,}98$
12. $(\cos^2x-\sin^2x)(\cos^2x+\sin^2x)=\cos2x\cdot1$ ∎

---

## Errores típicos

- Trabajar en grados con la calculadora en RAD (o al revés).
- Dar solo una solución de una ecuación trigonométrica: hay que barrer **todo** el intervalo.
- Simplificar $\sqrt{\sin^2 x}$ como $\sin x$ olvidando el signo del cuadrante.
- Usar el teorema del seno en el caso LLA sin comprobar si hay **dos** triángulos posibles.
