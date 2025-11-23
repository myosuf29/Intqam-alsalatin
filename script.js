document.getElementById("calculate").addEventListener("click", function() {
    // Eingabewerte holen
    const minutes5 = parseInt(document.getElementById("minutes-5").value) || 0;
    const minutes15 = parseInt(document.getElementById("minutes-15").value) || 0;
    const minutes30 = parseInt(document.getElementById("minutes-30").value) || 0;
    const hour1 = parseInt(document.getElementById("hour-1").value) || 0;
    const hour2 = parseInt(document.getElementById("hour-2").value) || 0;
    const hour8 = parseInt(document.getElementById("hour-8").value) || 0;
    const hour12 = parseInt(document.getElementById("hour-12").value) || 0;
    const hour24 = parseInt(document.getElementById("hour-24").value) || 0;

    // Berechnungen (alles in Minuten, um die Umrechnung zu vereinfachen)
    const totalMinutes = (minutes5 * 5) + (minutes15 * 15) + (minutes30 * 30) + (hour1 * 60) + (hour2 * 120) + (hour8 * 480) + (hour12 * 720) + (hour24 * 1440);

    // Umrechnung in Stunden
    const totalHours = totalMinutes / 60;

    // Ergebnis anzeigen
    document.getElementById("total-hours").innerText = totalHours.toFixed(2) + " Stunden";
});
