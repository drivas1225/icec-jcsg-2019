function culqi() {
    alert("Procesando pago, por favor espere.");
    console.log("inicio");
    if (Culqi.token) { // ¡Objeto Token creado exitosamente!
      console.log("token creado");
      $(document).ajaxStart(function(){
        run_waitMe();
      });
      var token = Culqi.token.id;
      $.ajax({
               type: 'POST',
               url: '../php/createCharge.php',
               data: { token: Culqi.token.id, firstName: $('#firstName').val(), lastName: $('#lastName').val(), email:$('#email').val(), address:$('#address').val()},
               datatype: 'json',
               success: function(data) {
                 var result = "";
                 if(data.constructor == String){
                     result = JSON.parse(data);
                  //   alert(result);
                 }
                 if(data.constructor == Object){
                     result = JSON.parse(JSON.stringify(data));
                 }
                 if(result.object === 'charge'){
                   alert(result.outcome.user_message);
                 }
                 if(result.object === 'error'){
                     alert(result.merchant_message);
                     console.log(result.merchant_message);
                     window.location.reload();
                 }
               },
               error: function(error)
               {
                 console.log(error);
                 //alert(error);
               }
            });
        } else {
          console.log("error");
          alert(Culqi.error.merchant_message);
        }

    };

  function run_waitMe(){
  console.log("Procesando pago");
}
