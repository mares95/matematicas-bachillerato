# Guía de ejercicios — Unidad 3: Derivadas

**Semestre 5 · Cálculo Diferencial**

## Parte A — Derivada por definición

1. Usando el método de los 4 pasos, encuentra $f'(x)$ para $f(x)=3x+5$
2. Usando el método de los 4 pasos, encuentra $f'(x)$ para $f(x)=x^2+2x$

## Parte B — Regla de la potencia y suma/resta

3. $f(x)=5x^4-3x^2+7x-1$
4. $f(x)=\dfrac{1}{x^3}$ (sugerencia: escribe como $x^{-3}$)
5. $f(x)=\sqrt{x}$ (sugerencia: escribe como $x^{1/2}$)

## Parte C — Producto y cociente

6. $f(x)=x^3\cdot e^x$
7. $f(x)=(2x+1)(x^2-3)$
8. $f(x)=\dfrac{x^2}{x+1}$
9. $f(x)=\dfrac{\sin x}{x}$

## Parte D — Regla de la cadena

10. $f(x)=(4x-1)^6$
11. $f(x)=e^{x^2}$
12. $f(x)=\ln(3x+2)$
13. $f(x)=\sin(5x)$
14. $f(x)=\sqrt{x^2+1}$

## Parte E — Combinando reglas

15. $f(x)=x^2\ln x$
16. $f(x)=\dfrac{e^x}{x^2+1}$

---

## Solucionario

1. $f'(x)=\lim_{h\to0}\dfrac{3(x+h)+5-(3x+5)}{h}=\lim_{h\to0}\dfrac{3h}{h}=3$
2. $f'(x)=\lim_{h\to0}\dfrac{(x+h)^2+2(x+h)-x^2-2x}{h}=\lim_{h\to0}\dfrac{2xh+h^2+2h}{h}=\lim_{h\to0}(2x+h+2)=2x+2$
3. $20x^3-6x+7$
4. $-3x^{-4}=\dfrac{-3}{x^4}$
5. $\dfrac12x^{-1/2}=\dfrac{1}{2\sqrt x}$
6. $3x^2e^x+x^3e^x=x^2e^x(3+x)$
7. $2(x^2-3)+(2x+1)(2x)=2x^2-6+4x^2+2x=6x^2+2x-6$
8. $\dfrac{2x(x+1)-x^2(1)}{(x+1)^2}=\dfrac{x^2+2x}{(x+1)^2}$
9. $\dfrac{x\cos x-\sin x}{x^2}$
10. $6(4x-1)^5\cdot4=24(4x-1)^5$
11. $e^{x^2}\cdot2x=2xe^{x^2}$
12. $\dfrac{3}{3x+2}$
13. $5\cos(5x)$
14. $\dfrac{x}{\sqrt{x^2+1}}$
15. $2x\ln x+x^2\cdot\dfrac1x=2x\ln x+x$
16. $\dfrac{e^x(x^2+1)-e^x(2x)}{(x^2+1)^2}=\dfrac{e^x(x^2-2x+1)}{(x^2+1)^2}=\dfrac{e^x(x-1)^2}{(x^2+1)^2}$
