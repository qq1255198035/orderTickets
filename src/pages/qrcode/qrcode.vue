<template>
  <!--展示码-->
  <transition name="fade">
    <div class="qrcode-wrapper">
      <div class="qrcode">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  </transition>
</template>

<script>
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    this._getQrcode();
  },
  watch: {},
  methods: {
    _getQrcode() {
      const item = this.$route.query.item;
      var canvas = document.getElementById("canvas");
      console.log(canvas);

      QRCode.toCanvas(canvas, item.vcode, function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  },
  components: {
    QRCode
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter,
.fade-leave-to {
  transform: translate3d(100%, 0, 0);
}
.qrcode-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 99;
  background: rgba(7, 17, 27, 0.1);
}
.qrcode-wrapper .qrcode {
  position: relative;
  top: 50%;
  left: 50%;
}
</style>
