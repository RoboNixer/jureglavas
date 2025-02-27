set terminal pdfcairo font "Arial,10"
set output "plot3.pdf"
set xlabel "Jahr" font "Arial,12"
set ylabel "Anfängerzahlen" font "Arial,12"
set key left font "Arial,8"
plot "data.dat" using 1:2 with linespoints title "Bachelor", \
     "data.dat" using 1:3 with linespoints title "Master", \
     "data.dat" using 1:4 with linespoints title "Lehramt"

