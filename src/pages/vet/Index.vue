<template>
  <div class="main">
    <router-link class="main_btn" to="/">← Главная</router-link>
    <router-link class="create_btn" to="/vets/create">Записаться</router-link>
  </div>

  <div class="rec" v-if="record">
    <div class="rec_card" v-for="(rec, index) in record">
      <h2 class="rec_card_name">{{ rec.name }}</h2>
      <p class="rec_card_tel">{{ rec.tel }}</p>
      <select class="rec_card_complain" v-model="selected">
        <option disabled value="">{{ rec.selected }}</option>
      </select>
      <div class="data_time">
        <p class="rec_card_data">{{ rec.data }}</p>
        <p class="rec_card_time">{{ rec.time }}</p>
      </div>

      <div class="index_btn">
        <router-link class="rec_card_show" :to="{name: 'vet.edit', params: {id: rec.id}}">Изменить</router-link>
        <a class="rec_card_btn" @click="remove(index)">Отменить запись</a>
      </div>

    </div>
  </div>
</template>


<script>
 export default {
   data() {
     return{
       record: [],
       selected: ''
     }
   },
   mounted() {
     this.getRec()
   },
   methods: {
     getRec() {
       this.record = JSON.parse(localStorage.getItem('record'))
     },
     remove(index) {
       this.record.splice(index, 1)
       localStorage.setItem('record', JSON.stringify(this.record))
     }
   }
 }
</script>


<style lang="scss" scoped>
.main{
  margin-top: 50px;
  text-align: center;
  margin-right: 100px;
  display: flex;
  justify-content: center;
  &_btn{
    text-decoration: none;
    color: #6fdede;
    margin-right: 300px;
    font-size: 30px;
    transition: all .3s ease-in-out;
    &:hover{
      color: #48b8b8;
      text-decoration: underline;
    }
  }
}

.rec{
  width: 100%;
  max-width: 1100px;
  margin: 50px auto;
  &_card{
    border: 3px dotted #6fdede;
    max-width: 310px;
    padding: 20px 20px;
    text-align: center;
    margin-bottom: 20px;
    &_name{
      font-size: 28px;
      padding-bottom: 15px;
      line-height: 1;
    }
    &_tel{
      font-size: 20px;
      padding-bottom: 15px;
      font-weight: 500;
    }
    &_complain{
      margin-bottom: 15px;
      font-size: 20px;
      border: 1px solid #6fdede;
      padding: 5px 10px;
      font-weight: 600;
    }
    &_data{
      font-size: 20px;
      padding-bottom: 15px;
      font-weight: 600;

    }
    &_time{
      font-size: 20px;
      padding-bottom: 15px;
      font-weight: 600;
    }
    &_show{
      text-decoration: none;
      color: #fff;
      margin-left: 10px;
      font-size: 20px;
      padding: 5px 12px;
      background-color: #6fdede;
      border-radius: 5px;
      transition: all .3s ease-in-out;
      &:hover{
        background-color: #48b8b8;
      }
    }
    &_btn{
      text-decoration: none;
      font-size: 20px;
      margin-left: 5px;
      color: #fff;
      padding: 5px 12px;
      background-color: #6fdede;
      border-radius: 5px;
      transition: all .3s ease-in-out;
      margin-right: 10px;
      border: none;
      &:hover{
        background-color: #48b8b8;
        cursor: pointer;
      }
    }
  }
}
.data_time{
  display: flex;
  justify-content: space-around;
}

.index_btn{
  display: flex;
  justify-content: space-around;

}
</style>