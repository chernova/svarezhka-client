<template>
<div class="form">
    <div class="field-group">
        <div class="input">
            <input type="text" name="last_name" placeholder="Фамилия">
            <i class="la la-edit"></i>
        </div>
        <div class="input">
            <input type="text" name="first_name" placeholder="Имя">
            <i class="la la-edit"></i>
        </div>
        <div class="input">
            <input type="text" name="middle_name" placeholder="Отчество">
            <i class="la la-edit"></i>
        </div>
        <div class="input">
            <div class="radio">
                <input id="profile-sex-m" name="sex" type="radio">
                <label for="profile-sex-m">Мужской</label>
            </div>
            <div class="radio">
                <input id="profile-sex-f" name="sex" type="radio">
                <label for="profile-sex-f">Женский</label>
            </div>
        </div>
    </div>

    <button class="button info">Сохранить</button>
</div>
</template>
