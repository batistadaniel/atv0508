// document.addEventListener('DOMContentLoaded', () => {
    
//     document.getElementById("cpf").addEventListener('input', () => {
//         let cpf = document.getElementById("cpf").value;

//         if (cpf.length === 3 ) {
//             cpf = `${cpf}.`;
//         }
//         //window.alert(cpf.slice(0, 3));


//     })
// })

document.addEventListener('DOMContentLoaded', () => {
     const cpf = document.getElementById("cpf");
     cpf.addEventListener('input', () => {

        let cpfValue = cpfInput.value;

        if (cpfValue.length <= 3 ) {
           cpf.value = `${(cpf.slice(0, 3))}.${cpf.slice(3)})`;
        }
        //window.alert(cpf.slice(0, 3));


     })
})

// document.addEventListener('DOMContentLoaded', () => {
//     const cpfInput = document.getElementById("cpf");

//     cpfInput.addEventListener('input', () => {
//         let cpfValue = cpfInput.value;
//         //cpfValue = cpfValue.replace(/\D/g, ''); // Remove caracteres não numéricos

//         if (cpfValue.length <= 3) {
//             cpfInput.value = cpfValue;
//         } else if (cpfValue.length <= 6) {
//             cpfInput.value = `${cpfValue.slice(0, 3)}.${cpfValue.slice(3)}`;
//         } else if (cpfValue.length <= 9) {
//             cpfInput.value = `${cpfValue.slice(0, 3)}.${cpfValue.slice(3, 6)}.${cpfValue.slice(6)}`;
//         } else {
//             cpfInput.value = `${cpfValue.slice(0, 3)}.${cpfValue.slice(3, 6)}.${cpfValue.slice(6, 9)}-${cpfValue.slice(9, 11)}`;
//         }
//     });
// });
