# Unidad 4 — Aplicaciones de las derivadas en diversas áreas

**Semestre 5 · Cálculo Diferencial**

## Objetivo de la unidad

Usar la derivada para hallar rectas tangentes, estudiar el crecimiento de una función, encontrar máximos y mínimos, y resolver problemas de optimización en contextos reales (economía, geometría, ingeniería).

---

## 1. Recta tangente y recta normal

En el punto $(x_0,f(x_0))$:

- **Pendiente de la tangente:** $m=f'(x_0)$. Ecuación: $y-f(x_0)=f'(x_0)(x-x_0)$
- **Pendiente de la normal** (perpendicular a la tangente): $m_n=-\dfrac{1}{f'(x_0)}$

> **Ejemplo:** $f(x)=x^2-3x+2$ en $x_0=4$.
> $f(4)=16-12+2=6$; $f'(x)=2x-3\Rightarrow f'(4)=5$
> Tangente: $y-6=5(x-4)\Rightarrow y=5x-14$
> Normal: $y-6=-\dfrac15(x-4)\Rightarrow y=-\dfrac15x+\dfrac{34}{5}$

## 2. Función creciente y decreciente

- $f$ es **creciente** en un intervalo si $f'(x)>0$ ahí.
- $f$ es **decreciente** si $f'(x)<0$.

**Puntos críticos:** valores donde $f'(x)=0$ o $f'(x)$ no existe. Ahí es donde puede haber un máximo o mínimo relativo.

> **Ejemplo:** $f(x)=x^3-3x$. $f'(x)=3x^2-3=3(x-1)(x+1)$. Puntos críticos: $x=-1,\ 1$.
>
> | Intervalo | $x<-1$ | $-1<x<1$ | $x>1$ |
> |---|---|---|---|
> | Signo de $f'$ | + | − | + |
> | $f$ | creciente | decreciente | creciente |

## 3. Máximos y mínimos relativos

### Criterio de la primera derivada

Si $f'$ cambia de **+ a −** en un punto crítico → **máximo relativo**. Si cambia de **− a +** → **mínimo relativo**.

> En el ejemplo anterior: en $x=-1$, $f'$ pasa de + a − → **máximo relativo**, $f(-1)=2$. En $x=1$, $f'$ pasa de − a + → **mínimo relativo**, $f(1)=-2$.

### Criterio de la segunda derivada

En un punto crítico $x_0$ (con $f'(x_0)=0$):

- Si $f''(x_0)>0$ → cóncava hacia arriba → **mínimo relativo**.
- Si $f''(x_0)<0$ → cóncava hacia abajo → **máximo relativo**.

> Con $f(x)=x^3-3x$: $f''(x)=6x$. $f''(-1)=-6<0$ → confirma **máximo** en $x=-1$. $f''(1)=6>0$ → confirma **mínimo** en $x=1$.

## 4. Problemas de optimización

**Estrategia general:**
1. Identificar la cantidad a maximizar/minimizar y escribirla como función de **una sola** variable (usando la restricción dada para eliminar la otra).
2. Derivar e igualar a cero para hallar los puntos críticos.
3. Verificar con el criterio de la segunda derivada (o el signo de la primera) si es máximo o mínimo.
4. Responder la pregunta del problema (con unidades).

> **Ejemplo (área máxima):** Con 40 m de cerca se quiere delimitar un terreno rectangular de área máxima.
> Restricción: $2x+2y=40\Rightarrow y=20-x$. Área: $A(x)=x(20-x)=20x-x^2$
> $A'(x)=20-2x=0\Rightarrow x=10,\ y=10$ (es un cuadrado). $A''(x)=-2<0\Rightarrow$ máximo.
> **Área máxima = 100 m²**

> **Ejemplo (economía — utilidad máxima):** La utilidad de una empresa es $U(x)=-x^2+100x-500$ (en pesos, según las unidades $x$ producidas).
> $U'(x)=-2x+100=0\Rightarrow x=50$. $U''(x)=-2<0\Rightarrow$ máximo.
> $U(50)=-2500+5000-500=2000$ → **utilidad máxima de $2,000 al producir 50 unidades**.

---

## Errores comunes

- Olvidar comprobar (con la primera o segunda derivada) si el punto crítico es realmente un máximo o un mínimo.
- Plantear la función de dos variables y derivar sin antes sustituir la restricción.
- No verificar que la solución tenga sentido en el contexto del problema (por ejemplo, una longitud no puede ser negativa).

## Resumen / formulario rápido

- Tangente en $x_0$: $y-f(x_0)=f'(x_0)(x-x_0)$. Normal: pendiente $-1/f'(x_0)$.
- $f'>0$ → creciente; $f'<0$ → decreciente.
- Puntos críticos: $f'(x)=0$. $f''>0$→mínimo; $f''<0$→máximo.
- Optimización: función de una variable → derivar → igualar a 0 → clasificar con $f''$.
