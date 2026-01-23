import Chart from "chart.js/auto";

let chartInstance = null; // guarda o gráfico para evitar duplicar

export function initDashboard() {
  const ctx = document.getElementById("chart");
  if (!ctx) return;

  // destruir gráfico anterior antes de criar outro
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
      datasets: [
        {
          label: "Vendas",
          data: [120, 150, 90, 200, 180, 220, 300],
          borderColor: "#003883",
          fill: false,
        },
        {
          label: "Lucros",
          data: [80, 100, 60, 150, 140, 180, 250],
          borderColor: "#00c853",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
