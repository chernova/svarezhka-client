<template>
<div class="form">
    <div class="field-group">
        <div class="input">
            <input type="email" placeholder="Укажите E-Mail">
            <i class="la la-at"></i>
        </div>
        <div class="input">
            <input type="password" placeholder="Текущий пароль">
            <i class="la la-lock"></i>
        </div>
        <div class="input">
            <input type="password" placeholder="Новый пароль">
            <i class="la la-lock"></i>
        </div>
        <div class="input">
            <input type="password" placeholder="Старый пароль">
            <i class="la la-lock"></i>
        </div>
        <div class="checkbox">
            <input id="push-notification" type="checkbox">
            <label for="push-notification">Push уведомления</label>
        </div>
    </div>

    <button class="button info">Сохранить</button>
</div>
</template>
