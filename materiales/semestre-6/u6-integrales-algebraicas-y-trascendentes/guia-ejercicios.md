# Guía de ejercicios — Unidad 6: Integrales algebraicas y de funciones trascendentes

**Semestre 6 · Cálculo Integral**

## Parte A — Integrales trigonométricas inmediatas

1. $\displaystyle\int (3\sin x - \cos x)\,dx$
2. $\displaystyle\int \sec^2 x\,dx$
3. $\displaystyle\int \frac{5}{1+x^2}\,dx$

## Parte B — Sustitución (cambio de variable)

4. $\displaystyle\int 3x^2(x^3+4)^5\,dx$
5. $\displaystyle\int \frac{2x}{x^2+9}\,dx$
6. $\displaystyle\int x\,e^{x^2}\,dx$
7. $\displaystyle\int \cos(3x)\,dx$ (sustituye $u=3x$)
8. $\displaystyle\int \sin^3 x\cos x\,dx$

## Parte C — Integración por partes

9. $\displaystyle\int x\,e^{2x}\,dx$
10. $\displaystyle\int x\sin x\,dx$
11. $\displaystyle\int x^2\ln x\,dx$
12. $\displaystyle\int x\cos(2x)\,dx$

## Parte D — Combinados

13. $\displaystyle\int \left(\frac{3}{x}+2\cos x\right)dx$
14. $\displaystyle\int (x+1)e^{x}\,dx$ (por partes)

---

## Solucionario

1. $-3\cos x-\sin x+C$
2. $\tan x+C$
3. $5\arctan x+C$
4. $u=x^3+4,\ du=3x^2dx \Rightarrow \dfrac{u^6}{6}+C=\dfrac{(x^3+4)^6}{6}+C$
5. $u=x^2+9,\ du=2x\,dx \Rightarrow \ln(x^2+9)+C$
6. $u=x^2,\ du=2x\,dx \Rightarrow \dfrac12\displaystyle\int e^u du=\dfrac12 e^{x^2}+C$
7. $u=3x,\ du=3dx \Rightarrow \dfrac13\sin(3x)+C$
8. $u=\sin x,\ du=\cos x\,dx \Rightarrow \displaystyle\int u^3du=\dfrac{u^4}{4}+C=\dfrac{\sin^4x}{4}+C$
9. $u=x,\,dv=e^{2x}dx \Rightarrow du=dx,\,v=\tfrac12e^{2x}$: $\dfrac{x}{2}e^{2x}-\displaystyle\int\tfrac12e^{2x}dx=\dfrac{x}{2}e^{2x}-\dfrac14e^{2x}+C$
10. $u=x,\,dv=\sin x\,dx \Rightarrow du=dx,\,v=-\cos x$: $-x\cos x+\displaystyle\int\cos x\,dx=-x\cos x+\sin x+C$
11. $u=\ln x,\,dv=x^2dx \Rightarrow du=\tfrac1x dx,\,v=\tfrac{x^3}{3}$: $\dfrac{x^3}{3}\ln x-\displaystyle\int\dfrac{x^3}{3}\cdot\dfrac1x dx=\dfrac{x^3}{3}\ln x-\dfrac{x^3}{9}+C$
12. $u=x,\,dv=\cos(2x)dx \Rightarrow du=dx,\,v=\tfrac12\sin(2x)$: $\dfrac{x}{2}\sin(2x)-\displaystyle\int\tfrac12\sin(2x)dx=\dfrac{x}{2}\sin(2x)+\dfrac14\cos(2x)+C$
13. $3\ln|x|+2\sin x+C$
14. $\displaystyle\int xe^xdx+\int e^xdx$. Del ejemplo de apuntes, $\int xe^xdx=e^x(x-1)+C$; sumando: $e^x(x-1)+e^x+C=x\,e^x+C$
