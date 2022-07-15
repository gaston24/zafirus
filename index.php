<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/datatables.css">

    <script refer src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script refer src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script refer src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script refer src="js/datatables.js"></script>
    <script refer src="js/main.js"></script>
</head>
<body>

<div class="head mt-2 row">
    <div class="col-4">
    </div>
    <div class="col">
        <button type="button" class="btn btn-primary btn-lg">Create</button>
    </div>
    <div class="col">
        <button type="button" class="btn btn-warning btn-lg">Edit</button>
    </div>
    <div class="col">
        <button type="button" class="btn btn-danger btn-lg">Delete</button>
    </div>
    <div class="col-4">
    </div>
</div>


<div class="container">
    <div class="divTable mt-5">
        <table class="table table-striped" id="tableIndex">
        </table>
    </div>
</div>

    
</body>
</html>