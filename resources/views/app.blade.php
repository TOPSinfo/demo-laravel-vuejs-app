@if (Auth::check())
    @php
        $user_auth_data = [
            'isLoggedin' => true,
            'user' =>  Auth::user()
        ];
    @endphp
@else
    @php
        $user_auth_data = [
            'isLoggedin' => false
        ];
    @endphp
@endif
<script>
    window.Laravel = JSON.parse(atob('{{ base64_encode(json_encode($user_auth_data)) }}'));
</script>

<div id="app">
{{--    VUEJS APP--}}
</div>
<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
