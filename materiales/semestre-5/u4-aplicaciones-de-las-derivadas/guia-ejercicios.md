# Guía de ejercicios — Unidad 4: Aplicaciones de las derivadas

**Semestre 5 · Cálculo Diferencial**

## Parte A — Rectas tangente y normal

1. Halla la tangente y la normal a $f(x)=x^2-4x+3$ en $x_0=1$
2. Halla la tangente a $f(x)=x^3$ en $x_0=2$

## Parte B — Crecimiento y decrecimiento

3. Determina los intervalos de crecimiento/decrecimiento de $f(x)=x^2-6x+5$
4. Determina los intervalos de crecimiento/decrecimiento de $f(x)=x^3-12x$

## Parte C — Máximos y mínimos relativos

5. Halla los máximos y mínimos relativos de $f(x)=x^2-6x+5$ (usa el criterio de la 2ª derivada)
6. Halla los máximos y mínimos relativos de $f(x)=x^3-12x$
7. Halla los máximos y mínimos relativos de $f(x)=x^4-4x^2$

## Parte D — Problemas de optimización

8. Con 60 m de cerca se quiere delimitar un terreno rectangular de área máxima. ¿Cuáles son sus dimensiones y su área?
9. Se quiere construir una caja sin tapa a partir de una lámina cuadrada de 12 cm de lado, cortando cuadrados iguales de las esquinas y doblando. Si $x$ es el lado del cuadrado recortado, el volumen es $V(x)=x(12-2x)^2$. Encuentra el valor de $x$ que maximiza el volumen (dominio $0<x<6$).
10. La utilidad de una empresa está dada por $U(x)=-2x^2+400x-3000$. ¿Cuántas unidades $x$ debe producir para maximizar la utilidad, y cuál es esa utilidad máxima?
11. Encuentra dos números positivos cuya suma sea 20 y cuyo producto sea máximo.

---

## Solucionario

1. $f(1)=1-4+3=0$; $f'(x)=2x-4\Rightarrow f'(1)=-2$. Tangente: $y=-2(x-1)\Rightarrow y=-2x+2$. Normal: $y=\dfrac12(x-1)$
2. $f(2)=8$; $f'(x)=3x^2\Rightarrow f'(2)=12$. Tangente: $y-8=12(x-2)\Rightarrow y=12x-16$
3. $f'(x)=2x-6=0\Rightarrow x=3$. Para $x<3$: decreciente; para $x>3$: creciente
4. $f'(x)=3x^2-12=3(x-2)(x+2)=0\Rightarrow x=\pm2$. Creciente en $(-\infty,-2)$, decreciente en $(-2,2)$, creciente en $(2,\infty)$
5. Crítico en $x=3$ (de la Parte B). $f''(x)=2>0\Rightarrow$ **mínimo relativo** en $x=3$, $f(3)=9-18+5=-4$
6. Críticos $x=\pm2$. $f''(x)=6x$. $f''(-2)=-12<0\Rightarrow$ **máximo relativo** en $x=-2$, $f(-2)=-8+24=16$. $f''(2)=12>0\Rightarrow$ **mínimo relativo** en $x=2$, $f(2)=8-24=-16$
7. $f'(x)=4x^3-8x=4x(x^2-2)=0\Rightarrow x=0,\pm\sqrt2$. $f''(x)=12x^2-8$. $f''(0)=-8<0\Rightarrow$ máximo en $x=0$, $f(0)=0$. $f''(\pm\sqrt2)=24-8=16>0\Rightarrow$ mínimos en $x=\pm\sqrt2$, $f(\pm\sqrt2)=4-8=-4$
8. $2x+2y=60\Rightarrow y=30-x$. $A(x)=x(30-x)=30x-x^2$. $A'(x)=30-2x=0\Rightarrow x=15,\ y=15$. $A''=-2<0\Rightarrow$ máximo. **Cuadrado de 15×15 m, área = 225 m²**
9. $V(x)=x(144-48x+4x^2)=4x^3-48x^2+144x$. $V'(x)=12x^2-96x+144=12(x^2-8x+12)=12(x-2)(x-6)$. Puntos críticos $x=2,6$; solo $x=2$ está en $(0,6)$. $V''(x)=24x-96$; $V''(2)=48-96=-48<0\Rightarrow$ máximo. **x = 2 cm**
10. $U'(x)=-4x+400=0\Rightarrow x=100$. $U''=-4<0\Rightarrow$ máximo. $U(100)=-20000+40000-3000=17000$. **100 unidades, utilidad máxima $17,000**
11. Sea $x$ un número, el otro es $20-x$. $P(x)=x(20-x)=20x-x^2$. $P'(x)=20-2x=0\Rightarrow x=10$. $P''=-2<0\Rightarrow$ máximo. **Los dos números son 10 y 10, producto máximo = 100**
