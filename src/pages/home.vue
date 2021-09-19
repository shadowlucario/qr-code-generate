<template>
  <div class="fixed-center">
    <q-card class="card-generate">
      <q-card-section>
        <div class="icon-qr">
          <box-icon size="40px" color="#1f6ece" name="qr"></box-icon>
          <div class="title">QRcode Generator</div>
        </div>
   
      </q-card-section>
      
      <q-card-section>
        <q-input v-model="input" rounded standout borderless input-class="text-center text-blue text-h5" bg-color="dark" />

      </q-card-section>

      <q-card-section v-if="input != ''">
        <vue-qrcode :value="input" :options="{
          color: {
            dark: '#1f6ece',
            light: '#212121',
          },
          scale: 2,
          width: 200,
          margin: 0,
        }"></vue-qrcode>
      </q-card-section>
    
      <q-btn outline :disable="input != '' ? false : true" class="button-generate" color="primary" label="Download" />
    </q-card>
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
  name: 'home',
  data() {
    return {
      input: ''
    }
  },
  components: {
    VueQrcode
  }
}
</script>

<style lang="scss" scoped> 
@import "@/styles/variables";

.card-generate {
  font-size: 54px;
  color: $text-color-light;
  background-color: $background-card-dark;
  width: 20rem; 
  text-align: center;
  border-radius: 12px;
}

.icon-qr {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  padding-left: 4px;
  font-weight: 700;
  font-size: 16px;
}

.button-generate {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 90%;
  height: 50px;
}

.input-class {
  font-size: 70px !important;
  color: #fff !important;
}

</style>