<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome</title>
    <link rel="stylesheet" href="{{mix('/css/build.css')}}">
</head>
<body>
<div id="app">
@include('layouts.header')

    <router-view></router-view>
</div>
</div>
<script src="{{mix("/js/build.js")}}"></script>
</body>
</html>
