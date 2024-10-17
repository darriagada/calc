  let debito = 1.29;
            let credito = 1.44;
            let prepago = 1.59;

            let debitoIVA = 1.54;
            let creditoIVA = 1.89;
            let prepagoIVA = 1.71;

            let showDebito = document.getElementById("data-debito");
            let showCredito = document.getElementById("data-credito");
            let showPrepago = document.getElementById("data-prepago");

            let outputDebito = document.getElementById("debito");
            let outputCredito = document.getElementById("credito");
            let outputPrepago = document.getElementById("prepago");

            showDebito.innerText = debito + '%';
            showCredito.innerText = credito + '%';
            showPrepago.innerText = prepago + '%';

            let valor = document.getElementById("cost");
            valor.value = '10.000';
            fixOrder();


            function getNum() {
                let iva = document.getElementById("check");
                let x = parseFloat(document.getElementById("cost").value);
                if(x !== x) {
                    console.info('x is NaN.');
                    outputDebito.innerText = '$0';
                    outputCredito.innerText = '$0';
                    outputPrepago.innerText = '$0';
            }
            else {
                console.info('x is NOT a NaN.');
            }
        }

        function fixOrder() {
            var valor;
            valor = parseFloat(document.getElementById("cost").value.split('.').join(""));
            var iva;
            var iva = document.getElementById("check");

            valorDebito = (valor * debito / 100);
            valorCredito = (valor * credito / 100);
            valorPrepago = (valor * prepago / 100);

            valorDebitoIva = (valor * debitoIVA / 100);
            valorCreditoIva = (valor * creditoIVA / 100);
            valorPrepagoIva = (valor * prepagoIVA / 100);

            totalDebito = valor - valorDebito;
            totalCredito = valor - valorCredito;
            totalPrepago = valor - valorPrepago;

            totalDebitoIva = valor - valorDebitoIva;
            totalCreditoIva = valor - valorCreditoIva;
            totalPrepagoIva = valor - valorPrepagoIva;

            if (iva.checked) {
                outputDebito.innerText = totalDebitoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputCredito.innerText = totalCreditoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputPrepago.innerText = totalPrepagoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                showDebito.innerText = debitoIVA + '%';
                showCredito.innerText = creditoIVA + '%';
                showPrepago.innerText = prepagoIVA + '%';
            } else {
                outputDebito.innerText = totalDebito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputCredito.innerText = totalCredito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputPrepago.innerText = totalPrepago.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                showDebito.innerText = debito + '%';
                showCredito.innerText = credito + '%';
                showPrepago.innerText = prepago + '%';
            }

        }

        function setFormat(id) {
            if (document.getElementById(id).value != "") {
            document.getElementById(id).value = parseFloat(document.getElementById(id).value.replace(/\D/g, ""))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
            }
        }

        function clearForm() {
            let valor = document.getElementById("cost");
            valor.value = '';
            outputDebito.innerText = '$0';
            outputCredito.innerText = '$0';
            outputPrepago.innerText = '$0';
        }

        document.getElementsByClassName('clear')[0].addEventListener('click', function() {
            clearForm();
        })