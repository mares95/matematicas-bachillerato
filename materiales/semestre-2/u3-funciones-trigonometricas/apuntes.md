# Unidad 3 — Funciones trigonométricas

**Semestre 2 · Pensamiento Matemático II (énfasis en geometría y trigonometría)**

## Objetivo de la unidad

Calcular las seis razones trigonométricas en triángulos rectángulos, determinar valores exactos para ángulos notables, y representar gráficamente las funciones trigonométricas identificando su amplitud y período.

---

## 1. Las seis razones trigonométricas (triángulo rectángulo)

Para un ángulo agudo $\theta$ en un triángulo rectángulo:

$$\sin\theta=\dfrac{\text{opuesto}}{\text{hipotenusa}} \qquad \cos\theta=\dfrac{\text{adyacente}}{\text{hipotenusa}} \qquad \tan\theta=\dfrac{\text{opuesto}}{\text{adyacente}}$$

Y sus **recíprocas**:

$$\csc\theta=\dfrac{1}{\sin\theta} \qquad \sec\theta=\dfrac{1}{\cos\theta} \qquad \cot\theta=\dfrac{1}{\tan\theta}$$

## 2. Ángulos notables (valores exactos)

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| $0^\circ$ | $0$ | $1$ | $0$ |
| $30^\circ$ | $\tfrac12$ | $\tfrac{\sqrt3}2$ | $\tfrac{\sqrt3}3$ |
| $45^\circ$ | $\tfrac{\sqrt2}2$ | $\tfrac{\sqrt2}2$ | $1$ |
| $60^\circ$ | $\tfrac{\sqrt3}2$ | $\tfrac12$ | $\sqrt3$ |
| $90^\circ$ | $1$ | $0$ | indefinida |

> Truco para memorizarla: en el numerador de $\sin$, para $0°,30°,45°,60°,90°$ se cumple $\dfrac{\sqrt0}2,\dfrac{\sqrt1}2,\dfrac{\sqrt2}2,\dfrac{\sqrt3}2,\dfrac{\sqrt4}2$.

## 3. El círculo unitario

En un círculo de radio 1 centrado en el origen, para cualquier ángulo $\theta$ en posición estándar, el punto donde el lado terminal corta la circunferencia es:

$$(\cos\theta,\ \sin\theta)$$

Esto permite definir las razones trigonométricas para **cualquier ángulo**, no solo agudos, usando el **ángulo de referencia** (el ángulo agudo entre el lado terminal y el eje X) y el signo correspondiente al cuadrante.

> **Ejemplo:** $\sin150^\circ$: el ángulo de referencia es $180-150=30^\circ$, y en el 2.º cuadrante el seno es positivo → $\sin150^\circ=\sin30^\circ=\tfrac12$.

## 4. Gráficas de las funciones trigonométricas

| Función | Dominio | Rango | Periodo |
|---|---|---|---|
| $y=\sin x$ | $\mathbb R$ | $[-1,1]$ | $2\pi$ |
| $y=\cos x$ | $\mathbb R$ | $[-1,1]$ | $2\pi$ |
| $y=\tan x$ | $x\neq\tfrac\pi2+k\pi$ | $\mathbb R$ | $\pi$ |

Para $y=A\sin(Bx)$ o $y=A\cos(Bx)$:

$$\text{amplitud}=|A| \qquad\qquad \text{periodo}=\dfrac{2\pi}{|B|}$$

> **Ejemplo:** $y=3\sin(2x)$ → amplitud $=3$, periodo $=\dfrac{2\pi}{2}=\pi$.

## 5. (Deseable) Funciones recíprocas: cotangente, secante, cosecante

Sus gráficas presentan **asíntotas verticales** donde la función original (seno, coseno o tangente) vale cero, ya que dividir entre cero no está definido.

---

## Errores comunes

- Confundir "recíproca" ($1/\sin\theta=\csc\theta$) con "inversa" ($\sin^{-1}x=\arcsin x$): son conceptos distintos.
- Olvidar el signo correcto según el cuadrante al usar el ángulo de referencia.
- Calcular el periodo como $2\pi\cdot B$ en vez de $2\pi/B$.

## Resumen / formulario rápido

- SOH-CAH-TOA y sus recíprocas $\csc,\sec,\cot$.
- Tabla de ángulos notables $0°,30°,45°,60°,90°$.
- Punto en el círculo unitario: $(\cos\theta,\sin\theta)$.
- $y=A\sin(Bx)$: amplitud $=|A|$, periodo $=2\pi/|B|$.
