# Guía de ejercicios — Unidad 2: Límites y Continuidad

**Semestre 5 · Cálculo Diferencial**

## Parte A — Cálculo directo

1. $\lim_{x\to1}(3x^2-2x+4)$
2. $\lim_{x\to-2}\dfrac{x+5}{x-1}$

## Parte B — Indeterminación 0/0 (factorización)

3. $\lim_{x\to2}\dfrac{x^2-4}{x-2}$
4. $\lim_{x\to-3}\dfrac{x^2+5x+6}{x+3}$
5. $\lim_{x\to5}\dfrac{x^2-25}{x^2-3x-10}$

## Parte C — Indeterminación 0/0 (racionalización)

6. $\lim_{x\to0}\dfrac{\sqrt{x+9}-3}{x}$
7. $\lim_{x\to4}\dfrac{x-4}{\sqrt{x}-2}$

## Parte D — Límites al infinito

8. $\lim_{x\to\infty}\dfrac{4x^3-x}{2x^3+5}$
9. $\lim_{x\to\infty}\dfrac{5x+1}{x^2-4}$
10. $\lim_{x\to\infty}\dfrac{x^3+2}{x^2-1}$

## Parte E — Continuidad

11. Determina si $f(x)=\dfrac{x^2-1}{x-1}$ (con $f(1)=2$) es continua en $x=1$.
12. Determina si $f(x)=\begin{cases}2x+1 & x<3\\ x^2-2 & x\geq3\end{cases}$ es continua en $x=3$.
13. Determina si $f(x)=\begin{cases}x+2 & x\leq1\\ 3x & x>1\end{cases}$ es continua en $x=1$.

---

## Solucionario

1. $3(1)-2(1)+4=5$
2. $\dfrac{3}{-3}=-1$
3. $\lim(x+2)=4$
4. $\dfrac{(x+2)(x+3)}{x+3}\to \lim(x+2)=-1$
5. $\dfrac{(x-5)(x+5)}{(x-5)(x+2)}\to \lim\dfrac{x+5}{x+2}=\dfrac{10}{7}$
6. $\dfrac{(x+9-9)}{x(\sqrt{x+9}+3)}=\dfrac{1}{\sqrt{x+9}+3}\to\dfrac16$
7. $\dfrac{(\sqrt x-2)(\sqrt x+2)}{\sqrt x -2}=\sqrt x+2 \to 4$
8. Mismo grado: $\dfrac{4}{2}=2$
9. Grado num. menor: **0**
10. Grado num. mayor: **+∞**
11. $\lim_{x\to1}\dfrac{(x-1)(x+1)}{x-1}=\lim(x+1)=2=f(1)$ → **es continua** (de hecho la discontinuidad aparente se "resolvió" al definir $f(1)=2$ igual al límite)
12. $\lim_{x\to3^-}(2x+1)=7$; $\lim_{x\to3^+}(x^2-2)=7$; $f(3)=7$. Los tres coinciden → **es continua**
13. $\lim_{x\to1^-}(x+2)=3$; $\lim_{x\to1^+}(3x)=3$; $f(1)=3$. Los tres coinciden → **es continua**
