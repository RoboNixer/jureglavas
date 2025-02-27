set terminal pdfcairo font "Arial,12"
set output "plot1.pdf"
set xlabel "Jahr" font "Arial,14"
set ylabel "Anfängerzahlen" font "Arial,14"
set key top right font "Arial,10"
plot "data.dat" using 1:2 with linespoints title "Bachelor", \
     "data.dat" using 1:3 with linespoints title "Master", \
     "data.dat" using 1:4 with linespoints title "Lehramt"

