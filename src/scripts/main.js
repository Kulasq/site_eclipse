// Definindo a data do próximo eclipse solar total no Brasil
const eclipseDate = new Date('August 12, 2045 15:58:00').getTime();

// Função que atualiza a contagem regressiva a cada segundo
function updateCountdown() {
    const now = new Date().getTime(); // Obtenha a data e hora atuais
    const timeRemaining = eclipseDate - now; // Calcula a diferença entre o eclipse e o tempo atual

    // Cálculo total em milissegundos para facilitar as conversões
    const msInYear = 1000 * 60 * 60 * 24 * 365.25; // Milissegundos em um ano (considera anos bissextos)
    const msInMonth = 1000 * 60 * 60 * 24 * 30.44; // Milissegundos em um mês médio (30,44 dias por mês)
    const msInDay = 1000 * 60 * 60 * 24;
    const msInHour = 1000 * 60 * 60;
    const msInMinute = 1000 * 60;

    // Cálculos para anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(timeRemaining / msInYear);
    const months = Math.floor((timeRemaining % msInYear) / msInMonth);
    const days = Math.floor((timeRemaining % msInMonth) / msInDay);
    const hours = Math.floor((timeRemaining % msInDay) / msInHour);
    const minutes = Math.floor((timeRemaining % msInHour) / msInMinute);
    const seconds = Math.floor((timeRemaining % msInMinute) / 1000);

    // Atualizando os elementos HTML com os valores da contagem regressiva
    document.getElementById('years').innerHTML = years;
    document.getElementById('months').innerHTML = months;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // Verifica se a contagem acabou (tempo negativo)
    if (timeRemaining < 0) {
        clearInterval(countdownInterval); // Para a contagem regressiva
        document.getElementById('countdown').innerHTML = "O eclipse já aconteceu!";
    }
}

// Atualiza a cada 1 segundo (1000ms)
const countdownInterval = setInterval(updateCountdown, 1000);
