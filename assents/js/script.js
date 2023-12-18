const form = document.getElementById('form')

form.addEventListener("submit", function(event){
    event.preventDefault();

    let weigth = Number(document.getElementById('weight').value);
    let heigth = Number(document.getElementById('heigth').value);

    let bmi = (weigth / (heigth * heigth)).toFixed(2);

    console.log(weigth)
    console.log(heigth)
    console.log(bmi)

    const value = document.getElementById('value');
    let description ='';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(bmi< 18.5){
        description = 'Abaixo do peso'
    }else if(bmi >= 18.5 && bmi <= 24.9){
        description = 'Peso normal'
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if(bmi >= 25 && bmi <= 29.9){
        description = 'Sobre peso' 
    }else if(bmi >= 30 && bmi <= 34.9){
        description = 'Obesidade grau I'
    }else if(bmi >= 35 && bmi <= 39.9){
        description = 'Obesidade grau II'
    }else{
        description = 'Obesidade grau III'
    }

    
    value.textContent = bmi.replace('.' , ',');
    document.getElementById('description').textContent = description;
});


