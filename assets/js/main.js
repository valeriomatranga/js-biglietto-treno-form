document.getElementById('calcola').addEventListener('click', genera);

function genera(e){
    e.preventDefault();
    var passeggeroInputEl = document.getElementById('passeggero');
    var distanzaInputEl = document.getElementById('distanza');
    var etaInputEl = document.getElementById('eta');
    var bigliettoEl = document.querySelector(".container_biglietto");

    var prezzoPieno = distanzaInputEl.value *0.21;
    var sconto = "Prezzo Pieno";

    //sconto 20%
    if(etaInputEl.value == "minorenne"){
        prezzoPieno -= prezzoPieno * 0.2;
        sconto = "Sconto Minorenne"; 

    //sconto 40%    
    }else if(etaInputEl.value =="pensionato"){
        prezzoPieno -= prezzoPieno * 0.4;
        sconto = "Sconto Pensionato";
    }

    bigliettoEl.insertAdjacentHTML("beforeend",
    `
        <h5>dettaglio passeggeri</h5>
        <div class="biglietto">
        <div class="dettagli d-flex flex column">
            <div id="nominativo" class="col-4 bg-secondary">NOME PASSEGGERO: ${passeggeroInputEl.value}</div>
            <div class="col-2">
                <div class="top">offerta</div>
                <div class="bottom sconto">${sconto}</div>
            </div>
            <div class="col-2">
                <div class="top">Carrozza</div>
                <div class="bottom carrozza">${numeroCasuale(1,10)}</div>
            </div>
            <div class="col-2">
                <div class="top">Codice CP</div>
                <div class="bottom codice_cp">${numeroCasuale(90000, 100000)}</div>
            </div>
            <div class="col-2">
                <div class="top">Costo biglietto</div>
                <div class="bottom costo">${prezzoPieno.toFixed(2)}</div>
            </div>
        </div>

    `);
    
}

function numeroCasuale(numeroMin,numeroMax){
    return Math.floor(Math.random() * (numeroMax - numeroMin)) + numeroMin;
}

document.getElementById("cancella").addEventListener("click", function(){
    document.getElementById("passeggero").value = "";
    document.getElementById("distanza").value = "";
    document.getElementById("eta").value = "";
})