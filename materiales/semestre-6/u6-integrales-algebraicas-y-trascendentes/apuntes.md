# Unidad 6 — Integrales algebraicas y de funciones trascendentes

**Semestre 6 · Cálculo Integral**

## Objetivo de la unidad

Calcular integrales de funciones algebraicas, trigonométricas, exponenciales y logarítmicas, dominando las técnicas de sustitución (cambio de variable) e integración por partes.

---

## 1. Integrales trigonométricas inmediatas

| Función | Integral |
|---|---|
| $\sin x$ | $-\cos x+C$ |
| $\cos x$ | $\sin x+C$ |
| $\sec^2 x$ | $\tan x+C$ |
| $\dfrac{1}{1+x^2}$ | $\arctan x+C$ |
| $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x+C$ |

*Comprobación rápida:* $\dfrac{d}{dx}(-\cos x)=\sin x$ ✓; $\dfrac{d}{dx}(\tan x)=\sec^2x$ ✓.

## 2. Integrales "casi inmediatas" (regla de la cadena en reversa)

Si $u=u(x)$:

$$\int u^n\,u'\,dx=\frac{u^{n+1}}{n+1}+C\ (n\neq-1)\qquad \int \frac{u'}{u}\,dx=\ln|u|+C\qquad \int u'\,e^{u}\,dx=e^{u}+C$$

**Truco:** si en el integrando "aparece la derivada de algo", ese "algo" es $u$.

## 3. Método de sustitución (cambio de variable)

**Pasos:** 1) elegir $u=g(x)$ (la parte "interior"), 2) calcular $du=g'(x)dx$, 3) reescribir toda la integral en términos de $u$, 4) integrar, 5) regresar a la variable original.

> **Ejemplo resuelto:** $\displaystyle\int 2x(x^2+1)^3\,dx$
> Sea $u=x^2+1 \Rightarrow du=2x\,dx$.
> $=\displaystyle\int u^3\,du=\frac{u^4}{4}+C=\frac{(x^2+1)^4}{4}+C$
> *Comprobación:* $\dfrac{d}{dx}\left[\dfrac{(x^2+1)^4}{4}\right]=\dfrac{4(x^2+1)^3\cdot 2x}{4}=2x(x^2+1)^3$ ✓

> **Ejemplo resuelto:** $\displaystyle\int \frac{4x^3}{x^4+5}\,dx$
> Sea $u=x^4+5 \Rightarrow du=4x^3dx$.
> $=\displaystyle\int\frac{du}{u}=\ln|u|+C=\ln(x^4+5)+C$

## 4. Integración por partes

$$\int u\,dv=uv-\int v\,du$$

Se elige $u$ y $dv$ siguiendo el orden **ILATE** (Inversa trigonométrica, Logarítmica, Algebraica, Trigonométrica, Exponencial): lo que aparece primero en esa lista conviene tomarlo como $u$.

> **Ejemplo resuelto:** $\displaystyle\int x\,e^x\,dx$
> $u=x,\ dv=e^x dx \Rightarrow du=dx,\ v=e^x$
> $=x e^x-\displaystyle\int e^x dx = x e^x - e^x + C = e^x(x-1)+C$
> *Comprobación:* $\dfrac{d}{dx}[e^x(x-1)]=e^x(x-1)+e^x(1)=e^x\cdot x$ ✓

> **Ejemplo resuelto:** $\displaystyle\int x\cos x\,dx$
> $u=x,\ dv=\cos x\,dx \Rightarrow du=dx,\ v=\sin x$
> $=x\sin x-\displaystyle\int \sin x\,dx=x\sin x+\cos x+C$
> *Comprobación:* $\dfrac{d}{dx}[x\sin x+\cos x]=\sin x+x\cos x-\sin x=x\cos x$ ✓

> **Ejemplo resuelto:** $\displaystyle\int \ln x\,dx$
> $u=\ln x,\ dv=dx \Rightarrow du=\dfrac1x dx,\ v=x$
> $=x\ln x-\displaystyle\int x\cdot\frac1x\,dx=x\ln x-x+C$
> *Comprobación:* $\dfrac{d}{dx}[x\ln x-x]=\ln x+1-1=\ln x$ ✓

---

## Errores comunes

- Elegir mal $u$ y $dv$ en integración por partes (si la nueva integral resultante es más complicada que la original, conviene intentar con la elección contraria).
- Olvidar multiplicar por $du$ al hacer el cambio de variable (por ejemplo, olvidar el factor 2 al usar $u=x^2$).
- Confundir $\int \frac{1}{1+x^2}dx=\arctan x+C$ con $\int\frac{1}{\sqrt{1-x^2}}dx=\arcsin x+C$.

## Resumen / formulario rápido

- $\int u^n u'dx=\dfrac{u^{n+1}}{n+1}+C$, $\int \dfrac{u'}{u}dx=\ln|u|+C$, $\int u'e^udx=e^u+C$
- Sustitución: identifica una "parte interna" cuya derivada también aparece (o casi) en el integrando.
- Por partes: $\int u\,dv=uv-\int v\,du$, elige $u$ con el orden ILATE.
