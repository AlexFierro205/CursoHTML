let dato1,dato2,num1,num2,resutado;

        dato1 = window.prompt("Primer nùmero?", "0");
        num1 = parseInt(dato1);

        dato2 = window.prompt("Segundo nùmero?", "0");
        num2 = parseInt(dato2);

        if(num1 > num2)
        {
            resutado = "el primero";
        }
        else
        {
            resultado = "el segundo";
        }
        document.write(' <h3> El mayor es ');
        document.write(`${resultado}`);
        document.write(' </h3> ');