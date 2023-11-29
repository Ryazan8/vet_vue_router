<template>
  <div>
      <div class="create">
        <router-link class="create_rec" to="/vets">Мои записи</router-link>
        <router-link class="create_btn" to="/vets/create">Записаться</router-link>
      </div>
<div class="txt">
  <h1>Лучшая Ветеринарная Клиника в Росии!</h1>
</div>
  </div>
</template>


<script>

</script>


<style lang="scss">
.txt{
  text-align: center;
}
h1{
  color: #48b8b8;
  padding-left: 300px;
  padding-top: 200px;
  max-width: 400px;
  font-size: 50px;
  line-height: 1.5;
}


.create{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  &_rec{
    text-decoration: none;
    font-size: 30px;
    color: #6fdede;
    margin-right: 300px;
    font-weight: 500;
    transition: all .3s ease-in-out;
    &:hover{
      color: #48b8b8;
      text-decoration: underline;
    }
  }

  &_btn{
    text-decoration: none;
    background-color: #6fdede;
    padding: 7px 15px;
    border-radius: 5px;
    color: #fff;
    font-size: 24px;
    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
 
</style>