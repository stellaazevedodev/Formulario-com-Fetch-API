<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Consulta por CEP</title>
     <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../css/final.css">
</head>
<body>
     <?php
          include('banco.php');

          //variaveis vindas na url 
          $nome = $_POST['nome'];
          $datanasce = $_POST['datanasce'];
          $email = $_POST['email'];
          $fone = $_POST['fone'];
          $cpf = $_POST['cpf'];
          $rg = $_POST['rg'];
          $cep = $_POST['cep'];
          $rua = $_POST['endereco'];
          $comp = $_POST['complemento'];
          $bairro = $_POST['bairro'];
          $cidade = $_POST['cidade'];
          $numero = $_POST['numero'];
          $uf = $_POST['uf'];
          $mensagem = $_POST['Mensagem'];
          $assun = $_POST['assun'];
          $senha = $_POST['senha'];
          //fazer um string sql 

          $sql1 = "INSERT INTO TB_CEP (CEP, RUA, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, UF) 
          VALUES ('$cep', '$rua', '$numero', '$comp', '$bairro', '$cidade', '$uf')";

          $sql2 = "INSERT INTO NOME (DATANASCE, EMAIL, TELEFONE, CPF, RG) 
          VALUES ('$datanasce', '$email', '$fone', '$cpf', '$rg')";

          $sql3 = "INSERT INTO MENSAGEM (ASSUNTO, MENSAGEM, SENHA) 
          VALUES ('$assun', '$mensagem', '$senha')";

          // executa o sql 
          if (mysqli_query($conn, $sql1) && mysqli_query($conn, $sql2) && mysqli_query($conn, $sql3)){
               echo '<div class="container align-items-center">';
                    echo '<div class="container text-center p-2">';
                         echo "<h1 class='mg mb-4'>Mensagem Enviada com Sucesso</h1>";
                         echo '<img src="../img/che.png" class="icon">';
                    echo '</div>';
               echo '</div>';
          }
          else{
               echo '<div class="container align-items-center">';
                    echo '<div class="container text-center p-2">';
                         echo "<h1 class='mg mb-4'>Erro! Tente novamente</h1>";
                         echo '<img src="img/cancelar.png" class="icon">';
                    echo '</div>';
               echo '</div>';
          }
          //
          mysqli_close($conn);
     ?>
</body>
</html>
