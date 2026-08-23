# Guía de ejercicios — Unidad 5: Concepto de integral como antiderivada

**Semestre 6 · Cálculo Integral**

## Parte A — Verifica si F es primitiva de f

1. ¿Es $F(x)=x^4$ primitiva de $f(x)=4x^3$?
2. ¿Es $F(x)=5x^2+3$ primitiva de $f(x)=10x$?
3. ¿Es $F(x)=\ln x$ primitiva de $f(x)=\dfrac1x$?

## Parte B — Integrales inmediatas (potencias)

4. $\displaystyle\int x^5\,dx$
5. $\displaystyle\int 7\,dx$
6. $\displaystyle\int \sqrt{x}\,dx$ (escribe $\sqrt x = x^{1/2}$)
7. $\displaystyle\int \frac{1}{x^3}\,dx$ (escribe $x^{-3}$)

## Parte C — Integrales de polinomios

8. $\displaystyle\int (4x^3-6x^2+2x-7)\,dx$
9. $\displaystyle\int (x^2-5)(x+1)\,dx$ (desarrolla primero)

## Parte D — Integrales con 1/x, exponencial

10. $\displaystyle\int \left(\frac{3}{x}-2e^x\right)dx$
11. $\displaystyle\int (5^x + 4x)\,dx$

## Parte E — Problema conceptual

12. Si $F(x)$ es una primitiva de $f(x)$, ¿es cierto que $F(x)+10$ también lo es? Justifica.

## Parte F — Práctica adicional

13. $\displaystyle\int (x^4-3x+2)\,dx$
14. $\displaystyle\int 6x^5\,dx$
15. $\displaystyle\int \frac{1}{x^2}\,dx$ (escribe $x^{-2}$)
16. $\displaystyle\int 3^x\,dx$
17. $\displaystyle\int \left(2x^3-\frac1x\right)dx$

---

## Solucionario

1. Sí: $F'(x)=4x^3=f(x)$ ✓
2. Sí: $F'(x)=10x=f(x)$ ✓
3. Sí: $F'(x)=\dfrac1x=f(x)$ ✓
4. $\dfrac{x^6}{6}+C$
5. $7x+C$
6. $\displaystyle\int x^{1/2}dx=\frac{x^{3/2}}{3/2}+C=\frac{2}{3}x^{3/2}+C$
7. $\displaystyle\int x^{-3}dx=\frac{x^{-2}}{-2}+C=-\frac{1}{2x^2}+C$
8. $x^4-2x^3+x^2-7x+C$
9. $(x^2-5)(x+1)=x^3+x^2-5x-5$; integrando: $\dfrac{x^4}{4}+\dfrac{x^3}{3}-\dfrac{5x^2}{2}-5x+C$
10. $3\ln|x|-2e^x+C$
11. $\dfrac{5^x}{\ln 5}+2x^2+C$
12. Sí, porque la derivada de una constante (10) es cero: $\dfrac{d}{dx}[F(x)+10]=F'(x)=f(x)$. Toda primitiva se puede modificar sumando cualquier constante real.
13. $\dfrac{x^5}{5}-\dfrac{3x^2}{2}+2x+C$
14. $x^6+C$
15. $\displaystyle\int x^{-2}dx=\dfrac{x^{-1}}{-1}+C=-\dfrac1x+C$
16. $\dfrac{3^x}{\ln 3}+C$
17. $\dfrac{x^4}{2}-\ln|x|+C$
