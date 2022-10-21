// Snack 1:



// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const cars = [
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Fiat',
        modello: '500x',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Freemont',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Range Rover',
        modello: 'Discovery',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Fiorino',
        alimentazione: 'Metano'
    },
    {
        marca: 'Hyundai',
        modello: 'i10-M',
        alimentazione: 'Metano'
    },
    {
        marca: 'Ferrari',
        modello: 'Torino',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Bmw',
        modello: 'Serie 1',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Lamborghini',
        modello: 'Gallardo',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Audi',
        modello: 'A2',
        alimentazione: 'Diesel'
    }
]

const benzina = cars.filter(car => {
    if (car.alimentazione === 'benzina') {
        return true;
    }
    return false;
});

const diesel = cars.filter(car => {
    if (car.alimentazione === 'diesel') {
        return true;
    }
    return false;
});

const metano = cars.filter(car => {
    if (car.alimentazione === 'metano') {
        return true;
    }
    return false;
});


console.log(diesel);
console.log(benzina);
console.log(metano);
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.