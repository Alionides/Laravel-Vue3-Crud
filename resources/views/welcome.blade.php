<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <script type="module" src="{{asset('js/app.js')}}" defer></script>
        <title>Laravel Vue App</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
