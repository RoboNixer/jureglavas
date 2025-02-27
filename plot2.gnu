set terminal pdfcairo font "Arial,14"
set output "plot2.pdf"
set xlabel "Jahr" font "Arial,16"
set ylabel "Anfängerzahlen" font "Arial,16"
set key bottom center font "Arial,12"
plot "data.dat" using 1:2 with linespoints title "Bachelor", \
     "data.dat" using 1:3 with linespoints title "Master", \
     "data.dat" using 1:4 with linespoints title "Lehramt"

