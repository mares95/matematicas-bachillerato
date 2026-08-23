# Unidad 4 — Identidades trigonométricas y triángulos oblicuángulos

**Semestre 2 · Pensamiento Matemático II (énfasis en geometría y trigonometría)**

## Objetivo de la unidad

Verificar y simplificar expresiones usando identidades trigonométricas, resolver ecuaciones trigonométricas sencillas y aplicar las leyes de senos y cosenos para resolver triángulos oblicuángulos (sin ángulo recto).

---

## 1. Identidades fundamentales

**Recíprocas:**
$$\csc\theta=\dfrac1{\sin\theta}\qquad \sec\theta=\dfrac1{\cos\theta}\qquad \cot\theta=\dfrac1{\tan\theta}$$

**De cociente:**
$$\tan\theta=\dfrac{\sin\theta}{\cos\theta}\qquad \cot\theta=\dfrac{\cos\theta}{\sin\theta}$$

**Pitagóricas:**
$$\sin^2\theta+\cos^2\theta=1\qquad 1+\tan^2\theta=\sec^2\theta\qquad 1+\cot^2\theta=\csc^2\theta$$

> Las dos últimas se obtienen dividiendo la primera entre $\cos^2\theta$ y entre $\sin^2\theta$ respectivamente.

> **Ejemplo (verificación numérica):** con $\theta=30^\circ$: $\sin^2 30^\circ+\cos^2 30^\circ=\left(\tfrac12\right)^2+\left(\tfrac{\sqrt3}2\right)^2=\tfrac14+\tfrac34=1$ ✓

> **Ejemplo (simplificar):** $\dfrac{\sin\theta}{1-\cos^2\theta}=\dfrac{\sin\theta}{\sin^2\theta}=\dfrac1{\sin\theta}=\csc\theta$

## 2. Identidades de suma, diferencia y ángulo doble (deseable/conveniente)

$$\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B\qquad \cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$$

$$\sin2\theta=2\sin\theta\cos\theta\qquad \cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1$$

> **Ejemplo:** $\sin75^\circ=\sin(45^\circ+30^\circ)=\sin45\cos30+\cos45\sin30=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2+\dfrac{\sqrt2}2\cdot\dfrac12=\dfrac{\sqrt6+\sqrt2}{4}$

## 3. Ecuaciones trigonométricas sencillas

Se despeja la función trigonométrica y luego se buscan los ángulos que cumplen esa razón en el intervalo pedido.

> **Ejemplo:** $2\sin\theta-1=0$, con $\theta\in[0^\circ,360^\circ)$
> $\sin\theta=\tfrac12 \Rightarrow \theta=30^\circ$ o $\theta=180^\circ-30^\circ=150^\circ$ (seno positivo en 1.er y 2.º cuadrante)

## 4. Triángulos oblicuángulos: ley de senos

Para un triángulo con lados $a,b,c$ opuestos a los ángulos $A,B,C$:

$$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$$

Se usa cuando se conocen **dos ángulos y un lado**, o **dos lados y un ángulo opuesto a uno de ellos**.

> **Ejemplo:** $A=40^\circ$, $B=60^\circ$, $a=10$. Halla $b$.
> $\dfrac{10}{\sin40^\circ}=\dfrac{b}{\sin60^\circ}\Rightarrow b=\dfrac{10\times0.8660}{0.6428}\approx13.47$

⚠️ **Caso ambiguo (SSA):** si se dan dos lados y el ángulo opuesto a uno de ellos, puede haber **0, 1 o 2** triángulos posibles. Se compara la altura $h=b\sin A$ con el lado $a$: si $a<h$ no hay solución, si $a=h$ hay una (rectángulo), si $h<a<b$ hay dos, y si $a\ge b$ hay una.

## 5. Triángulos oblicuángulos: ley de cosenos

$$c^2=a^2+b^2-2ab\cos C$$

(y sus versiones análogas para $a^2$ y $b^2$). Se usa cuando se conocen **los tres lados**, o **dos lados y el ángulo comprendido**.

> **Ejemplo:** $b=8$, $c=6$, $A=60^\circ$. Halla $a$.
> $a^2=8^2+6^2-2(8)(6)\cos60^\circ=64+36-96(0.5)=100-48=52\Rightarrow a=\sqrt{52}\approx7.21$

---

## Errores comunes

- Confundir cuándo usar ley de senos (ángulo-lado opuestos conocidos) y cuándo ley de cosenos (falta un ángulo opuesto a un lado conocido).
- Olvidar el caso ambiguo al usar SSA con la ley de senos.
- Errores de signo en las identidades de suma/diferencia (recordar que en el coseno el signo se invierte).

## Resumen / formulario rápido

- $\sin^2\theta+\cos^2\theta=1$; $1+\tan^2\theta=\sec^2\theta$; $1+\cot^2\theta=\csc^2\theta$
- Ley de senos: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$
- Ley de cosenos: $c^2=a^2+b^2-2ab\cos C$
