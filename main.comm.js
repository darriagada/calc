            let debito = 1.29;
            let credito = 1.59;
            let prepago = 1.44;
            let mpos = 2.30;

            let debitoIVA = 1.54;
            let creditoIVA = 1.89;
            let prepagoIVA = 1.71;
            let mposIVA = 2.737;

            let showDebito = document.getElementById("data-debito");
            let showCredito = document.getElementById("data-credito");
            let showPrepago = document.getElementById("data-prepago");
            let showMPOS = document.getElementById("data-mpos");

            let comisionDebito = document.getElementById("comision-debito");
            let comisionCredito = document.getElementById("comision-credito");
            let comisionPrepago = document.getElementById("comision-prepago");
            let comisionMPOS = document.getElementById("comision-mpos");

            let outputDebito = document.getElementById("debito");
            let outputCredito = document.getElementById("credito");
            let outputPrepago = document.getElementById("prepago");
            let outputMPOS = document.getElementById("mpos");

            showDebito.innerText = debito + '%';
            showCredito.innerText = credito + '%';
            showPrepago.innerText = prepago + '%';
            showMPOS.innerText = mpos + '%';

            comisionDebito.innerText = '$0';

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
                    outputMPOS.innerText = '$0';
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
            valorMPOS = (valor * mpos / 100);

            valorDebitoIva = (valor * debitoIVA / 100);
            valorCreditoIva = (valor * creditoIVA / 100);
            valorPrepagoIva = (valor * prepagoIVA / 100);
            valorMPOSIva = (valor * mposIVA / 100);

            totalDebito = valor - valorDebito;
            totalCredito = valor - valorCredito;
            totalPrepago = valor - valorPrepago;
            totalMPOS = valor - valorMPOS;

            totalDebitoIva = valor - valorDebitoIva;
            totalCreditoIva = valor - valorCreditoIva;
            totalPrepagoIva = valor - valorPrepagoIva;
            totalMPOSIva = valor - valorMPOSIva;

            if (iva.checked) {
                outputDebito.innerText = totalDebitoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputCredito.innerText = totalCreditoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputPrepago.innerText = totalPrepagoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputMPOS.innerText = totalMPOSIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                showDebito.innerText = debitoIVA + '%';
                showCredito.innerText = creditoIVA + '%';
                showPrepago.innerText = prepagoIVA + '%';
                showMPOS.innerText = mposIVA + '%';
                comisionDebito.innerText = valorDebitoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                comisionCredito.innerText = valorCreditoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                comisionPrepago.innerText = valorPrepagoIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                comisionMPOS.innerText = valorMPOSIva.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
            } else {
                outputDebito.innerText = totalDebito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputCredito.innerText = totalCredito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputPrepago.innerText = totalPrepago.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                outputMPOS.innerText = totalMPOS.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                showDebito.innerText = debito + '%';
                showCredito.innerText = credito + '%';
                showPrepago.innerText = prepago + '%';
                showMPOS.innerText = mpos + '%';
                comisionDebito.innerText = valorDebito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                comisionCredito.innerText = valorCredito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                comisionPrepago.innerText = valorPrepago.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                comisionMPOS.innerText = valorMPOS.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
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
            outputMPOS.innerText = '$0';
            comisionDebito.innerText = '$0';
            comisionCredito.innerText = '$0';
            comisionPrepago.innerText = '$0';
            comisionMPOS.innerText = '$0';
        }

        document.getElementsByClassName('clear')[0].addEventListener('click', function() {
            clearForm();
        })
