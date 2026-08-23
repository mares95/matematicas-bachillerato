# Guía de ejercicios — Unidad 7: Integrales definidas

**Semestre 6 · Cálculo Integral**

## Parte A — Regla de Barrow (cálculo directo)

1. $\displaystyle\int_0^2 (3x^2)\,dx$
2. $\displaystyle\int_1^4 \sqrt{x}\,dx$
3. $\displaystyle\int_{0}^{\pi} \sin x\,dx$
4. $\displaystyle\int_1^e \frac{1}{x}\,dx$

## Parte B — Área bajo la curva

5. Área bajo $y=4-x^2$ entre las raíces (donde la curva corta el eje X).
6. Área bajo $y=x^3$ entre $x=0$ y $x=2$.

## Parte C — Área entre curvas

7. Área entre $y=x^2$ y $y=4$ (recta horizontal).
8. Área entre $y=x$ y $y=x^2$ (en el intervalo donde $x\geq x^2$).
9. Área entre $y=6-x^2$ y $y=x$ ¹.

## Parte D — Volumen de revolución (introducción)

10. Volumen al girar $y=x$ en $[0,3]$ alrededor del eje X.
11. Volumen al girar $y=2$ (recta horizontal) en $[0,5]$ alrededor del eje X.

*¹ Sugerencia ej. 9: iguala $6-x^2=x$ para hallar los límites de integración.*

## Parte E — Práctica adicional

12. $\displaystyle\int_0^1 (x^2+1)\,dx$
13. $\displaystyle\int_{-1}^{1} x^3\,dx$ (piensa en la simetría de la función)
14. Área entre $y=x$ y $y=x^3$ en el intervalo $[0,1]$.
15. Volumen al girar $y=x^2$ en $[0,1]$ alrededor del eje X.

---

## Solucionario

1. $[x^3]_0^2=8-0=8$
2. $\left[\frac{2}{3}x^{3/2}\right]_1^4=\frac{2}{3}(8)-\frac{2}{3}(1)=\frac{16}{3}-\frac{2}{3}=\frac{14}{3}$
3. $[-\cos x]_0^{\pi}=-\cos\pi-(-\cos 0)=1+1=2$
4. $[\ln x]_1^e=\ln e-\ln 1=1-0=1$
5. Raíces de $4-x^2=0$: $x=\pm2$. $\displaystyle\int_{-2}^{2}(4-x^2)dx=\left[4x-\frac{x^3}{3}\right]_{-2}^{2}$. En $x=2$: $8-\frac83=\frac{16}{3}$. En $x=-2$: $-8+\frac83=-\frac{16}{3}$. Diferencia $=\frac{16}{3}-\left(-\frac{16}{3}\right)=\frac{32}{3}$
6. $\left[\frac{x^4}{4}\right]_0^2=\frac{16}{4}-0=4$
7. Intersección: $x^2=4\Rightarrow x=\pm2$. $\displaystyle\int_{-2}^{2}(4-x^2)dx=\frac{32}{3}$ (mismo cálculo que el ejercicio 5)
8. Intersección: $x=x^2\Rightarrow x=0,1$. En [0,1], $x\geq x^2$. $\displaystyle\int_0^1(x-x^2)dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=\frac12-\frac13=\frac16$
9. Intersección: $6-x^2=x\Rightarrow x^2+x-6=0\Rightarrow(x+3)(x-2)=0\Rightarrow x=-3,2$. En ese intervalo la parábola está arriba de la recta. $\displaystyle\int_{-3}^{2}\big[(6-x^2)-x\big]dx=\left[6x-\frac{x^3}{3}-\frac{x^2}{2}\right]_{-3}^{2}$. En $x=2$: $12-\frac83-2=\frac{22}{3}$. En $x=-3$: $-18+9-4.5=-13.5=-\frac{27}{2}$. Área $=\frac{22}{3}-\left(-\frac{27}{2}\right)=\frac{44}{6}+\frac{81}{6}=\frac{125}{6}$
10. $V=\pi\displaystyle\int_0^3 x^2dx=\pi\left[\frac{x^3}{3}\right]_0^3=\pi(9)=9\pi$
11. $V=\pi\displaystyle\int_0^5 4\,dx=\pi[4x]_0^5=20\pi$ (es un cilindro de radio 2 y altura 5: $V=\pi r^2h=\pi(4)(5)=20\pi$ ✓)
12. $\left[\frac{x^3}{3}+x\right]_0^1=\left(\frac13+1\right)-0=\frac43$
13. Función impar en intervalo simétrico $\Rightarrow$ el área positiva y negativa se cancelan: $\left[\frac{x^4}{4}\right]_{-1}^1=\frac14-\frac14=0$
14. Intersecciones de $x=x^3$: $x^3-x=0\Rightarrow x(x-1)(x+1)=0\Rightarrow x=-1,0,1$. En $[0,1]$, $x\geq x^3$. Área $=\displaystyle\int_0^1(x-x^3)dx=\left[\frac{x^2}{2}-\frac{x^4}{4}\right]_0^1=\frac12-\frac14=\frac14$
15. $V=\pi\displaystyle\int_0^1 x^4dx=\pi\left[\frac{x^5}{5}\right]_0^1=\frac{\pi}{5}$
