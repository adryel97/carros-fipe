<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
    
</head>
<body>
    <form name="formFipe" id="formFipe" action="controller/controllerFipe.php" method="post">
        <select class="brand" id="brand" required>
            <option value="">Selecione</option>
        </select>
        <select class="vehicles" id="vehicles" required>
            <option value="">Selecione</option>
        </select>
        <select class="year" id="year" required>
            <option value="">Selecione</option>
        </select>
    </form>
    <script src='lib/zepto.min.js'></script>
    <script src='lib/script.js'></script>
</body>
</html>