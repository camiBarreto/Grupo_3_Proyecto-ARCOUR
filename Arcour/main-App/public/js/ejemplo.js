window.addEventListener("load", async () => {
  const containerInfo = document.getElementById("mostrar-contenido");
  const containerTotal = document.querySelector(".results");
  const liElementsF = document.querySelectorAll(".flights-totals li");
  const liElementsA = document.querySelectorAll(".airlines-totals li");
 
  try {
    const api = "http://localhost:3001/api/flights";
    const response = await fetch(api); // Reemplaza con la URL correcta de tu API

    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.status}`);
    };

    const data = await response.json();

    // Itera sobre las etiquetas <li> y los datos en el arreglo totalFlights
    liElementsF.forEach((li, index) => {
      const flightTotals = data.totalFlights[index];
      const { airport, total } = flightTotals;

      // Asigna los valores a las etiquetas <li>
      li.innerHTML = `Total de vuelos hacía ${airport}: ${total}`;
    });

    // Itera sobre las etiquetas <li> y los datos en el arreglo totalFlights
    liElementsA.forEach((li, index) => {
      const airlineTotals = data.totalAirlines[index];
      const { airline, total } = airlineTotals;

      // Asigna los valores a las etiquetas <li>
      li.innerHTML = `Total de vuelos hacía ${airline}: ${total}`;
    });

    containerTotal.innerText += data.count;
    for (const fligth of data.flights_list) {
      const listItem = document.createElement("li");
      listItem.textContent = `Origen: ${fligth.departure_airport}, Número de vuelo: ${fligth.flight_number}`;
      containerInfo.appendChild(listItem);
    };
  } catch (error) {
    console.error("Error al cargar o procesar datos de la API: " + error);
  };
});
