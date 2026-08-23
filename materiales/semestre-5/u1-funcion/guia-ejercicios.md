# Guía de ejercicios — Unidad 1: Función

**Semestre 5 · Cálculo Diferencial**

## Parte A — Dominio

1. $f(x)=\dfrac{2x+1}{x-4}$
2. $f(x)=\dfrac{x}{x^2-9}$
3. $f(x)=\sqrt{x+5}$
4. $f(x)=\sqrt{7-x}$
5. $f(x)=\log(x-1)$
6. $f(x)=\dfrac{1}{\sqrt{x-2}}$

## Parte B — Evaluación de funciones

7. Si $f(x)=x^2-3x+2$, calcula $f(0)$, $f(2)$, $f(-1)$.
8. Si $f(x)=\begin{cases}x+3 & x<0\\ x^2 & x\geq0\end{cases}$, calcula $f(-2)$ y $f(3)$.

## Parte C — Operaciones con funciones

Con $f(x)=x+2$ y $g(x)=x^2-1$:

9. $(f+g)(x)$
10. $(f\cdot g)(x)$
11. $\left(\dfrac{g}{f}\right)(x)$ y su dominio
12. $(g\circ f)(x)$
13. $(f\circ g)(x)$
14. ¿$(g\circ f)(x)=(f\circ g)(x)$? Justifica.

## Parte D — Identificación de tipo de función

15. Clasifica: $f(x)=3^x$
16. Clasifica: $f(x)=\dfrac{x+1}{x-2}$
17. Clasifica: $f(x)=\log_2 x$

---

## Solucionario

1. $x\neq4$ → $\mathrm{Dom}\,f=\mathbb{R}\setminus\{4\}$
2. $x^2-9\neq0\Rightarrow x\neq\pm3$ → $\mathbb{R}\setminus\{-3,3\}$
3. $x+5\geq0\Rightarrow x\geq-5$ → $[-5,+\infty)$
4. $7-x\geq0\Rightarrow x\leq7$ → $(-\infty,7]$
5. $x-1>0\Rightarrow x>1$ → $(1,+\infty)$
6. $x-2>0$ (estricto, por estar en el denominador dentro de la raíz) $\Rightarrow x>2$ → $(2,+\infty)$
7. $f(0)=2$; $f(2)=4-6+2=0$; $f(-1)=1+3+2=6$
8. $f(-2)=-2+3=1$; $f(3)=3^2=9$
9. $(f+g)(x)=x+2+x^2-1=x^2+x+1$
10. $(f\cdot g)(x)=(x+2)(x^2-1)=x^3+2x^2-x-2$
11. $\dfrac{x^2-1}{x+2}$, dominio $\mathbb{R}\setminus\{-2\}$
12. $(g\circ f)(x)=g(x+2)=(x+2)^2-1=x^2+4x+3$
13. $(f\circ g)(x)=f(x^2-1)=x^2-1+2=x^2+1$
14. No: $x^2+4x+3\neq x^2+1$ en general (por ejemplo, en $x=1$: 8 vs 2). La composición **no es conmutativa**.
15. Exponencial
16. Racional
17. Logarítmica
