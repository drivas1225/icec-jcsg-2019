<?php
header('Content-Type: application/json');

  require '../Requests-master/library/Requests.php';
  Requests::register_autoloader();
  require '../lib/culqi.php';

use Culqi\Culqi;
$SECRET_API_KEY = 'sk_test_JwMJvSi5OmAHixys';
$culqi = new Culqi(array('api_key' => $SECRET_API_KEY));
try {
  // Creando Cargo a una tarjeta
  $charge = $culqi->Charges->create(
      array(
        "amount" => 300,
        "currency_code" => "PEN",
        "email" => $_POST["email"],
        "source_id" => $_POST["token"] ,
        "antifraud_details" => array(
            "address" =>$_POST["address"],
            "first_name" => $_POST["firstName"],
            "last_name" => $_POST["lastName"],

          )
      )

  );
  // Response
  echo json_encode($charge);

} catch (Exception $e) {
  echo json_encode($e->getMessage());
}

?>
