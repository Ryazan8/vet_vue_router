<template>
  <div class="main">
    <router-link class="main_btn" to="/">← Главная</router-link>
    </div>
  <div class="form">
    <input class="form_input" v-model="name" type="text" placeholder="ФИО">
    <input class="form_input" v-model="tel" type="tel" placeholder="Телефон" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="11" minlength="11" required>
    <select class="rec_card_complain" v-model="selected">
      <option disabled value="">Жалоба</option>
      <option>Перелом</option>
      <option>Нужна прививка</option>
      <option>Заражение кожи</option>
      <option>Отравление</option>
      <option>Странное поведение</option>
    </select>
    <input class="form_input" v-model="data" type="date">
    <input class="form_input" v-model="time" type="time">
    <button @click.prevent="store" class="form_btn">Записаться</button>
  </div>
</template>


<script>
export default {
  data() {
    return{
      name: '',
      tel: '',
      data: '',
      time: '',
      selected: ''
    }
  },
  methods: {
    store() {
      let rec = {
        id:1,
        name: this.name,
        tel: this.tel,
        selected: this.selected,
        data: this.data,
        time: this.time
      }
      let record = JSON.parse(localStorage.getItem('record'))

      if(!record) {
        let recordArr = []
        recordArr.unshift(rec)
        localStorage.setItem('record', JSON.stringify(recordArr))
        localStorage.setItem('record_id', '1')
      } else {
        let recordId = localStorage.getItem('record_id')
        recordId++
        localStorage.setItem('record_id', recordId)
        rec.id = recordId
        record.unshift(rec)
        localStorage.setItem('record', JSON.stringify(record))
      }
      this.$router.push({name: 'vet.index'})
    }
  }
}
</script>


<style lang="scss">
.main{
  margin-top: 50px;
  text-align: center;
  margin-right: 100px;
  &_btn{
    text-decoration: none;
    color: #6fdede;
    font-size: 30px;
    transition: all .3s ease-in-out;
    &:hover{
      color: #48b8b8;
      text-decoration: underline;
    }
  }
}

.rec_card_complain{
  margin-bottom: 15px;
  font-size: 20px;
  border: 2px solid #6fdede;
  padding: 5px 10px;
}
 .form{
   margin-top: 50px;
   margin-left: 200px;
   width: 100%;
   max-width: 35px;
   &_input{
     font-size: 20px;
     padding: 7px 15px;
     margin-bottom: 10px;
     border: 2px solid #6fdede;
     border-radius: 5px;
   }
   &_btn{
     text-decoration: none;
     background-color: #6fdede;
     padding: 7px 15px;
     border-radius: 5px;
     color: #fff;
     font-size: 24px;
     border: 2px solid #6fdede;
     &:hover{
       cursor: pointer;
       opacity: 0.8;
     }
   }
 }
</style>